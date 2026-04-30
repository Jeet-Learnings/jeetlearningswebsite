'use client';

import { useState, useEffect } from 'react';
import { ExternalLink, Search, Filter, BookOpen, GraduationCap, Award } from 'lucide-react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

interface Resource {
  name: string;
  description: string;
}

interface ResourceGroup {
  type: string;
  items: Resource[];
}

interface Career {
  name: string;
  resources: ResourceGroup[];
}

interface ResourceSection {
  category: string;
  careers: Career[];
}

export default function ResourcesClient() {
  const [resourcesData, setResourcesData] = useState<ResourceSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch('/resources.txt');
        const text = await response.text();
        const parsed = parseResourcesText(text);
        setResourcesData(parsed);
      } catch (error) {
        console.error('Error fetching resources:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  const parseResourcesText = (text: string): ResourceSection[] => {
    const lines = text.split('\n');
    const sections: ResourceSection[] = [];
    let currentCategory = '';
    let currentCareer: Career | null = null;
    let currentResourceType = '';
    let currentResources: Resource[] = [];

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].trim();

      // Skip empty lines
      if (!line) continue;

      // Clean up stray characters
      line = line.replace(/^[\s•·]+/, '').trim();

      // Check for main category header: "Useful websites for career in CATEGORY"
      if (line.startsWith('Useful websites for career in') && !line.includes('Websites for careers in')) {
        // Save previous resource group if exists
        if (currentCareer && currentResourceType && currentResources.length > 0) {
          currentCareer.resources.push({
            type: currentResourceType,
            items: [...currentResources]
          });
        }

        // Extract category name
        let categoryName = line.replace('Useful websites for career in', '').trim();
        
        // Handle multi-line category names by looking ahead
        if (!categoryName || categoryName.length < 2) {
          // Category name might be on next line
          if (i + 1 < lines.length) {
            const nextLine = lines[i + 1].trim();
            if (nextLine && !nextLine.match(/^\d+\./) && !nextLine.match(/^(Professional Bodies|Top Universities|Scholarships)$/)) {
              categoryName = nextLine;
              i++; // Skip next line since we used it
            }
          }
        }

        if (categoryName && categoryName.length > 2) {
          currentCategory = categoryName;
          currentCareer = null;
          currentResourceType = '';
          currentResources = [];

          // Initialize category if not exists
          if (!sections.find(s => s.category === currentCategory)) {
            sections.push({ category: currentCategory, careers: [] });
          }
        }
      }
      // Check for career headers: "1. Websites for careers in CAREER_NAME"
      else if (line.match(/^\d+\.\s+Websites for careers in/)) {
        // Save previous resource group
        if (currentCareer && currentResourceType && currentResources.length > 0) {
          currentCareer.resources.push({
            type: currentResourceType,
            items: [...currentResources]
          });
        }

        // Extract career name
        const careerName = line.replace(/^\d+\.\s+Websites for careers in\s+/, '').trim();
        
        if (careerName) {
          currentCareer = { name: careerName, resources: [] };
          currentResourceType = '';
          currentResources = [];

          const section = sections.find(s => s.category === currentCategory);
          if (section) {
            section.careers.push(currentCareer);
          }
        }
      }
      // Check for resource type headers
      else if (line === 'Professional Bodies' || line === 'Top Universities' || line === 'Scholarships') {
        // Save previous resource group
        if (currentCareer && currentResourceType && currentResources.length > 0) {
          currentCareer.resources.push({
            type: currentResourceType,
            items: [...currentResources]
          });
        }

        currentResourceType = line;
        currentResources = [];
      }
      // Check for website entries (contains www. and separator)
      else if (line.includes('www.') && (line.includes('–') || line.includes('-'))) {
        // Determine separator - prefer – over -
        let separator = '–';
        if (!line.includes('–') && line.includes('-')) {
          separator = '-';
        }
        
        const parts = line.split(separator);
        
        if (parts.length >= 2) {
          // Extract website name (remove bullet points and extra spaces)
          let name = parts[0].replace(/^[\s•·]+/, '').trim();
          
          // Extract description (join remaining parts in case description has separator)
          let description = parts.slice(1).join(separator).trim();

          // Clean up description - remove extra whitespace and line breaks
          description = description.replace(/\s+/g, ' ').trim();

          if (name && description && name.includes('www.')) {
            currentResources.push({ name, description });
          }
        }
      }
    }

    // Save last resource group
    if (currentCareer && currentResourceType && currentResources.length > 0) {
      currentCareer.resources.push({
        type: currentResourceType,
        items: currentResources
      });
    }

    return sections;
  };

  // Filter resources based on search and category
  const filteredData = resourcesData
    .filter(section => !selectedCategory || section.category === selectedCategory)
    .map(section => ({
      ...section,
      careers: section.careers.filter(career =>
        career.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        career.resources.some(resource =>
          resource.items.some(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
          )
        )
      )
    }))
    .filter(section => section.careers.length > 0);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading resources...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-body-md overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20 pb-16 px-4 sm:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto w-full">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-700 text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
              Career Resources
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
              Comprehensive <br />
              <span className="text-blue-600">Career Resources</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Professional bodies, top universities, and scholarship opportunities across all career paths. Everything you need to succeed in your chosen field.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative animate-fade-in-up">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search careers, universities, or resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-2 mb-3">
                <Filter className="w-5 h-5 text-slate-600" />
                <h3 className="font-semibold text-slate-900">Filter by Category</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === null
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  All Categories
                </button>
                {resourcesData.map((section) => (
                  <button
                    key={section.category}
                    onClick={() => setSelectedCategory(section.category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedCategory === section.category
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {section.category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section - All Expanded */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredData.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">No resources found</h3>
              <p className="text-slate-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="space-y-16">
              {filteredData.map((section, sectionIdx) => (
                <div key={sectionIdx} className="animate-fade-in-up" style={{ animationDelay: `${0.05 * (sectionIdx + 1)}s` }}>
                  {/* Category Header */}
                  <div className="mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                      {section.category}
                    </h2>
                    <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
                    <p className="text-slate-600 mt-3">
                      {section.careers.length} career path{section.careers.length !== 1 ? 's' : ''} with comprehensive resources
                    </p>
                  </div>

                  {/* Careers Grid - All Expanded */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {section.careers.map((career, careerIdx) => (
                      <div
                        key={careerIdx}
                        className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all animate-fade-in-up"
                        style={{ animationDelay: `${0.05 * (careerIdx + 1)}s` }}
                      >
                        {/* Career Header */}
                        <div className="p-6 bg-gradient-to-r from-blue-50 to-slate-50 border-b border-slate-200">
                          <h3 className="text-lg font-bold text-slate-900">
                            {career.name}
                          </h3>
                        </div>

                        {/* Career Content - Always Visible */}
                        <div className="p-6 space-y-6">
                          {career.resources.map((resourceGroup, groupIdx) => (
                            <div key={groupIdx}>
                              <div className="flex items-center gap-2 mb-4">
                                {resourceGroup.type === 'Professional Bodies' && (
                                  <Award className="w-5 h-5 text-blue-600" />
                                )}
                                {resourceGroup.type === 'Top Universities' && (
                                  <GraduationCap className="w-5 h-5 text-green-600" />
                                )}
                                {resourceGroup.type === 'Scholarships' && (
                                  <BookOpen className="w-5 h-5 text-purple-600" />
                                )}
                                <h4 className="font-bold text-slate-900 text-sm">
                                  {resourceGroup.type}
                                </h4>
                              </div>
                              <div className="space-y-3">
                                {resourceGroup.items.map((resource, itemIdx) => (
                                  <a
                                    key={itemIdx}
                                    href={`https://${resource.name.replace('www.', '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3 group p-3 rounded-lg hover:bg-slate-50 transition-colors"
                                  >
                                    <ExternalLink className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0 group-hover:text-blue-600 transition-colors" />
                                    <div className="flex-1 min-w-0">
                                      <p className="font-semibold text-slate-900 text-sm group-hover:text-blue-600 transition-colors break-all">
                                        {resource.name}
                                      </p>
                                      <p className="text-slate-600 text-xs mt-1 line-clamp-2">
                                        {resource.description}
                                      </p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
