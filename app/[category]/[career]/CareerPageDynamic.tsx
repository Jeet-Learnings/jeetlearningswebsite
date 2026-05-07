'use client';

import { useState } from 'react';
import Link from 'next/link';
import NavbarWrapper from '@/app/components/NavbarWrapper';
import Footer from '@/app/components/Footer';
import { CostBreakdown } from '@/app/components/CostBreakdown';
import { TranslatedText } from '@/app/components/TranslatedText';
import {
  Info,
  Clock,
  Brain,
  GraduationCap,
  DollarSign,
  Building2,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Lightbulb,
  BarChart3,
  Monitor,
  MapPin,
  Award,
  Briefcase,
  Sparkles,
  Rocket,
  User,
  Map,
  BookOpen,
  Zap,
  Trophy,
  Globe,
  Eye,
  RefreshCw,
  AlertCircle,
  Heart,
  Cloud,
  Lock,
  Code2,
  Newspaper,
  Microscope,
  Users,
  Target,
  FileText,
  Layers,
} from 'lucide-react';

interface CareerPageDynamicProps {
  category: string;
  career: string;
  careerName: string;
  categoryName: string;
  pageData?: any;
  imageUrl?: string;
  videos?: any[];
}

const iconMap: Record<string, any> = {
  Info, Clock, Brain, GraduationCap, DollarSign, Building2, TrendingUp,
  AlertTriangle, CheckCircle, Lightbulb, BarChart3, Monitor, MapPin,
  Award, Briefcase, Sparkles, Rocket, User, Map, BookOpen, Target: Info,
};

export function CareerPageDynamic({
  category,
  career,
  careerName,
  categoryName,
  pageData,
  imageUrl,
  videos = [],
}: CareerPageDynamicProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  if (!pageData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Career Data Not Found</h1>
          <p className="text-gray-600 mb-8">Unable to load career information.</p>
        </div>
      </div>
    );
  }

  let guideSectionsRaw = pageData?.guideSections || [];
  
  let processedSections: any[] = [];
  
  guideSectionsRaw.forEach((s: any) => {
    let id = s.id.toLowerCase();
    const titleLower = s.title.toLowerCase();
    
    if (titleLower.includes('pathway')) id = 'pathways';
    else if (titleLower.includes('market') || titleLower.includes('salary snapshot')) id = 'market';
    else if (titleLower.includes('where to study') || titleLower.includes('institutions')) id = 'institutions';
    else if (titleLower.includes('opportunities')) id = 'opportunities';
    else if (titleLower.includes('what is this') || titleLower.includes('about')) id = 'what';
    else if (titleLower.includes('day in the life')) id = 'dayinlife';
    else if (titleLower.includes('is this you') || titleLower.includes('traits') || titleLower.includes('personality')) id = 'who';
    else if (titleLower.includes('responsibilities') || titleLower.includes('workflow')) id = 'responsibilities';
    else if (titleLower.includes('what will it cost') || titleLower.includes('investment required')) id = 'salary';
    else if (titleLower.includes('challenges')) id = 'challenges';
    else if (titleLower.includes('emerging trends') || titleLower.includes('future') || titleLower.includes('outlook')) id = 'future';
    else if (titleLower.includes('skills to build') || titleLower.includes('school')) id = 'startnow';
    else if (titleLower.includes('famous') || titleLower.includes('personalities')) id = 'personalities';
    
    if (id === 'market' || id === 'salary') {
      const hasInstitutions = s.content?.some((c: string) => {
        const cl = c.toLowerCase();
        return cl.includes('top institutions') || cl.includes('where to study') || cl.includes('colleges');
      });
      const hasOpportunities = s.content?.some((c: string) => {
        const cl = c.toLowerCase();
        return cl.includes('career opportunities') || cl.includes('roles available');
      });
      const hasJobs = s.content?.some((c: string) => {
        const cl = c.toLowerCase();
        return cl.includes('where are the jobs') || cl.includes('top cities') || cl.includes('industries');
      });
      
      if (hasInstitutions || hasOpportunities || hasJobs) {
        const marketContent: string[] = [];
        const instContent: string[] = [];
        const oppContent: string[] = [];
        const jobsContent: string[] = [];
        let current = 'market';
        
        s.content?.forEach((item: string) => {
          const lower = item.toLowerCase();
          if (lower.includes('top institutions') || lower.includes('where to study') || lower.includes('colleges')) { current = 'institutions'; return; }
          if (lower.includes('career opportunities') || lower.includes('roles available')) { current = 'opportunities'; return; }
          if (lower.includes('where are the jobs') || lower.includes('job market')) { current = 'jobs'; return; }
          
          if (current === 'market') marketContent.push(item);
          else if (current === 'institutions') instContent.push(item);
          else if (current === 'opportunities') oppContent.push(item);
          else if (current === 'jobs') jobsContent.push(item);
        });
        
        processedSections.push({ ...s, id: 'market', content: marketContent });
        
        if (jobsContent.length > 0) {
          processedSections.push({
            id: 'jobs',
            title: 'Where Are the Jobs?',
            icon: 'MapPin',
            description: 'Top cities and industries.',
            content: jobsContent
          });
        }
        
        if (instContent.length > 0) {
          processedSections.push({
            id: 'institutions',
            title: 'Where to Study?',
            icon: 'Building2',
            description: 'Top institutions.',
            content: instContent
          });
        }
        
        if (oppContent.length > 0) {
          processedSections.push({
            id: 'opportunities',
            title: 'Career Opportunities',
            icon: 'Briefcase',
            description: 'Roles available.',
            content: oppContent
          });
        }
        return;
      }
    }
    
    processedSections.push({ ...s, id });
  });
  
  const deduplicated: Record<string, any> = {};
  processedSections.forEach(s => {
    if (!deduplicated[s.id] || (s.content?.length > deduplicated[s.id].content?.length)) {
      deduplicated[s.id] = s;
    }
  });
  
  const finalSections: any[] = [];
  const seenIds = new Set<string>();
  processedSections.forEach(s => {
    if (!seenIds.has(s.id)) {
      seenIds.add(s.id);
      finalSections.push(deduplicated[s.id]);
    }
  });
  
  const guideSections = finalSections;
  return (
    <div className="min-h-screen bg-white text-slate-900 font-body-md">
      <NavbarWrapper />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] flex items-center pt-16 sm:pt-18 md:pt-20 pb-12 sm:pb-14 md:pb-16 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center w-full">
          <div className="space-y-6 sm:space-y-7 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-700 text-xs sm:text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-blue-600" />
              <TranslatedText as="span">{categoryName}</TranslatedText>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-slate-900">
              <TranslatedText as="span">{careerName}</TranslatedText><br />
              <span className="text-blue-600"><TranslatedText>Career Path</TranslatedText></span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
              <TranslatedText>{pageData?.subheading}</TranslatedText>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base">
                <TranslatedText>Explore This Career</TranslatedText>
              </button>
              <Link
                href="/career-path"
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-300 text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors text-sm sm:text-base"
              >
                <TranslatedText>Compare Careers</TranslatedText>
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={imageUrl || 'https://via.placeholder.com/600x400'}
                alt={careerName}
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-3 sm:mb-4"><TranslatedText as="span">Career Overview</TranslatedText></h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">
              <TranslatedText as="span">{`Understanding the fundamentals of ${careerName}`}</TranslatedText>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
            {pageData?.whyCards?.slice(0, 3).map((card: any, idx: number) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 md:p-8 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3"><TranslatedText>{card.title}</TranslatedText></h3>
                    <p className="text-slate-600 text-xs sm:text-sm"><TranslatedText>{card.description}</TranslatedText></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Sections */}
      {guideSections.map((section: any, sectionIdx: number) => {
        const SectionIcon = iconMap[section.icon] || Info;

        // ── dayinlife ────────────────────────────────────────────────
        if (section.id === 'dayinlife') {
          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-slate-50 px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-12 sm:mb-14 md:mb-16">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
                    <Clock className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 text-blue-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                      <TranslatedText>{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 px-0 sm:px-0">
                    <TranslatedText>{section.description}</TranslatedText>
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {section.content?.map((item: string, idx: number) => {
                    const pipeParts = item.split('|');
                    let time = '';
                    let title = '';
                    let description = '';

                    if (pipeParts.length >= 3) {
                      time = pipeParts[0].trim();
                      title = pipeParts[1].trim();
                      description = pipeParts[2].trim();
                    } else {
                      const emDashIdx = item.indexOf('–');
                      const hyphenIdx = item.indexOf(' - ');
                      const splitIdx = emDashIdx !== -1 ? emDashIdx : hyphenIdx;
                      
                      if (splitIdx !== -1) {
                        time = item.substring(0, splitIdx).trim();
                        const rest = item.substring(splitIdx + 3).trim();
                        const colonIdx = rest.indexOf(':');
                        if (colonIdx !== -1) {
                          title = rest.substring(0, colonIdx).trim();
                          description = rest.substring(colonIdx + 1).trim();
                        } else {
                          title = rest;
                        }
                      } else {
                        title = item;
                      }
                    }

                    return (
                      <div key={idx} className="group relative pl-6 sm:pl-8 border-l-2 border-blue-200 hover:border-blue-500 transition-colors py-1 sm:py-2">
                        <div className="absolute -left-[9px] top-2 sm:top-3 w-4 h-4 rounded-full bg-white border-2 border-blue-500 group-hover:bg-blue-500 transition-colors shadow-sm" />
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                          <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-wider min-w-[80px] sm:min-w-[100px]">
                            <TranslatedText>{time}</TranslatedText>
                          </span>
                          <div className="flex-1">
                            <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1 leading-snug">
                              <TranslatedText>{title}</TranslatedText>
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                              <TranslatedText>{description}</TranslatedText>
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        }

        // ── who (is this for) ─────────────────────────────────────────
        if (section.id === 'who') {
          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-white px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <User className="w-8 sm:w-10 h-8 sm:h-10 text-indigo-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                  {section.content?.map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const [title, desc] = hasColon ? item.split(':') : [item, ''];
                    const icons = [Brain, Target, Users, Zap, Heart, Eye];
                    const IconComponent = icons[idx % icons.length];
                    
                    return (
                      <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all group">
                        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                          <IconComponent className="w-6 h-6 text-indigo-600" />
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                          <TranslatedText as="span">{title}</TranslatedText>
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          <TranslatedText as="span">{desc}</TranslatedText>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        }

        // ── pathways ─────────────────────────────────────────────────
        if (section.id === 'pathways') {
          const pathways: { title: string; steps: string[] }[] = [];
          let currentPathway: { title: string; steps: string[] } | null = null;

          section.content.forEach((item: string) => {
            const lower = item.toLowerCase();
            const isPathwayHeader = (lower.includes('pathway ') || lower.includes('route')) && !lower.startsWith('step');
            
            if (isPathwayHeader) {
              if (currentPathway) pathways.push(currentPathway);
              currentPathway = { title: item, steps: [] };
            } else if (lower.startsWith('step ')) {
              if (currentPathway) currentPathway.steps.push(item);
              else currentPathway = { title: 'Standard Path', steps: [item] };
            } else {
              if (currentPathway) currentPathway.steps.push(item);
              else currentPathway = { title: item, steps: [] };
            }
          });
          if (currentPathway) pathways.push(currentPathway);

          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-slate-50 px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <Map className="w-8 sm:w-10 h-8 sm:h-10 text-blue-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>

                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {pathways.map((path, pIdx) => (
                    <div key={pIdx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow">
                      <div className="p-6 bg-slate-50 border-b border-slate-200 border-t-4 border-blue-500">
                        <h3 className="text-xl font-bold text-slate-900 leading-tight">
                          <TranslatedText as="span">{path.title}</TranslatedText>
                        </h3>
                      </div>
                      <div className="p-6 flex-1 flex flex-col gap-4">
                        {path.steps.map((step, sIdx) => {
                          const colonIdx = step.indexOf(':');
                          const label = colonIdx > -1 ? step.substring(0, colonIdx).trim() : '';
                          const desc = colonIdx > -1 ? step.substring(colonIdx + 1).trim() : step;
                          return (
                            <div key={sIdx} className="flex gap-4 items-start relative">
                              {sIdx < path.steps.length - 1 && (
                                <div className="absolute left-[11px] top-6 w-[2px] h-[calc(100%+8px)] bg-blue-100" />
                              )}
                              <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 z-10">
                                {sIdx + 1}
                              </div>
                              <div className="flex-1">
                                {label && <p className="text-sm font-bold text-slate-900 mb-1 leading-snug"><TranslatedText as="span">{label}</TranslatedText></p>}
                                <p className="text-sm text-slate-600 leading-relaxed"><TranslatedText as="span">{desc}</TranslatedText></p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        // ── market / salary snapshot ──────────────────────────────────
        if (section.id === 'market' || section.id === 'salary') {
          const tiers = section.content?.filter((c: string) => c.includes('Tier') || c.includes('Level') || c.includes('Salary:'));
          const others = section.content?.filter((c: string) => !tiers.includes(c));

          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-white px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <TrendingUp className="w-8 sm:w-10 h-8 sm:h-10 text-blue-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>

                {tiers.length > 0 && (
                  <div className="mb-10 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                          <th className="px-6 py-4 text-sm font-bold text-slate-900">Career Level</th>
                          <th className="px-6 py-4 text-sm font-bold text-slate-900">Est. Salary (p.a.)</th>
                          <th className="px-6 py-4 text-sm font-bold text-slate-900">Opportunities</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tiers.map((tier: string, idx: number) => {
                          const parts = tier.split(/[:\.]/);
                          const level = parts[0]?.trim() || '';
                          const salary = parts[1]?.trim() || '';
                          const jobs = parts[2]?.replace(/Positions|Jobs/i, '')?.trim() || '';
                          
                          return (
                            <tr key={idx} className="border-b border-slate-100 hover:bg-blue-50 transition-colors group">
                              <td className="px-6 py-5 text-sm font-bold text-slate-900">{level}</td>
                              <td className="px-6 py-5 text-sm font-bold text-blue-600">{salary}</td>
                              <td className="px-6 py-5 text-sm text-slate-600">{jobs}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {others.map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const [key, val] = hasColon ? item.split(':') : [item, ''];
                    return (
                      <div key={idx} className="p-6 bg-slate-50 rounded-xl border border-slate-200 flex flex-col gap-2 hover:border-blue-300 transition-all">
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider opacity-60"><TranslatedText as="span">{key}</TranslatedText></h4>
                        <p className="text-base text-slate-800 font-medium leading-relaxed"><TranslatedText as="span">{val}</TranslatedText></p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        }

        // ── jobs (locations/industries) ────────────────────────────────
        if (section.id === 'jobs') {
          return (
            <section key={sectionIdx} className="py-16 sm:py-20 md:py-24 bg-white px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-16 sm:mb-20">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Briefcase className="w-8 sm:w-10 h-8 sm:h-10 text-green-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-8 sm:mb-10">
                        <TranslatedText as="span">{section.title}</TranslatedText>
                      </h2>
                      <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
                        <TranslatedText as="span">{section.description}</TranslatedText>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7">
                  {section.content?.map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const [title, desc] = hasColon ? item.split(':') : [item, ''];
                    
                    const icons = [Briefcase, Zap, Rocket, Building2, Globe, TrendingUp];
                    const IconComponent = icons[idx % icons.length];
                    
                    return (
                      <div
                        key={idx}
                        className="bg-slate-50 rounded-xl p-6 sm:p-7 border border-slate-200 hover:border-green-300 hover:shadow-lg transition-all"
                      >
                        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                          <IconComponent className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                            <TranslatedText as="span">{title?.trim()}</TranslatedText>
                          </h4>
                        </div>
                        {hasColon && (
                          <p className="text-sm text-slate-600 leading-relaxed pl-9 sm:pl-10">
                            <TranslatedText as="span">{desc?.trim()}</TranslatedText>
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        }

        if (section.id === 'challenges') {
          return (
            <section key={sectionIdx} className="py-16 sm:py-20 md:py-24 bg-slate-50 px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-16 sm:mb-20">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <AlertTriangle className="w-8 sm:w-10 h-8 sm:h-10 text-red-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-8 sm:mb-10">
                        <TranslatedText as="span">{section.title}</TranslatedText>
                      </h2>
                      <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
                        <TranslatedText as="span">{section.description}</TranslatedText>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {section.content?.map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const [title, desc] = hasColon ? item.split(':') : [item, ''];
                    
                    const icons = [AlertTriangle, Zap, Eye, RefreshCw, AlertCircle, Heart];
                    const IconComponent = icons[idx % icons.length];
                    
                    return (
                      <div
                        key={idx}
                        className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200 hover:border-red-300 hover:shadow-lg transition-all"
                      >
                        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                          <IconComponent className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                            <TranslatedText as="span">{title?.trim()}</TranslatedText>
                          </h4>
                        </div>
                        {hasColon && (
                          <p className="text-sm text-slate-600 leading-relaxed pl-9 sm:pl-10">
                            <TranslatedText as="span">{desc?.trim()}</TranslatedText>
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        }

        if (section.id === 'trends') {
          return (
            <section key={sectionIdx} className="py-20 bg-white px-4 sm:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                  <div className="flex items-center gap-4 mb-4">
                    <Sparkles className="w-10 h-10 text-purple-600" />
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.content?.map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const [title, desc] = hasColon ? item.split(':') : [item, ''];
                    
                    const icons = [Zap, AlertCircle, Cloud, Lock, BarChart3, Sparkles];
                    const IconComponent = icons[idx % icons.length];
                    
                    return (
                      <div
                        key={idx}
                        className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all"
                      >
                        <div className="flex items-start gap-4 mb-3">
                          <IconComponent className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                          <h4 className="text-lg font-bold text-slate-900">
                            <TranslatedText as="span">{title?.trim()}</TranslatedText>
                          </h4>
                        </div>
                        {hasColon && (
                          <p className="text-sm text-slate-600 leading-relaxed ml-10">
                            <TranslatedText as="span">{desc?.trim()}</TranslatedText>
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        }

        if (section.id === 'startnow') {
          return (
            <section key={sectionIdx} className="py-20 bg-slate-50 px-4 sm:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                  <div className="flex items-center gap-4 mb-4">
                    <Rocket className="w-10 h-10 text-cyan-600" />
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.content?.map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const [title, desc] = hasColon ? item.split(':') : [item, ''];
                    
                    const icons = [BarChart3, Code2, Newspaper, Trophy, BookOpen, GraduationCap, Microscope, Users];
                    const IconComponent = icons[idx % icons.length];
                    
                    return (
                      <div
                        key={idx}
                        className="bg-white rounded-xl p-6 border border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all"
                      >
                        <div className="flex items-start gap-4 mb-3">
                          <IconComponent className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                          <h4 className="text-lg font-bold text-slate-900">
                            <TranslatedText as="span">{title?.trim()}</TranslatedText>
                          </h4>
                        </div>
                        {hasColon && (
                          <p className="text-sm text-slate-600 leading-relaxed ml-10">
                            <TranslatedText as="span">{desc?.trim()}</TranslatedText>
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        }

        if (section.id === 'personalities') {
          return (
            <section key={sectionIdx} className="py-20 bg-white px-4 sm:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                    <TranslatedText as="span">{section.title}</TranslatedText>
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.content?.map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const [name, bio] = hasColon ? item.split(':') : [item, ''];
                    
                    return (
                      <div
                        key={idx}
                        className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
                      >
                        {/* Header with name only */}
                        <div className="bg-slate-100 p-6 text-center border-b border-slate-200">
                          <h4 className="text-lg font-bold text-slate-900">
                            <TranslatedText as="span">{name?.trim()}</TranslatedText>
                          </h4>
                        </div>
                        
                        {/* Bio Section */}
                        {hasColon && (
                          <div className="p-6">
                            <p className="text-sm text-slate-600 leading-relaxed">
                              <TranslatedText as="span">{bio?.trim()}</TranslatedText>
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        }

        // ── what / about ──────────────────────────────────────────────
        if (section.id === 'what' || section.id === 'about') {
          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-white px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <Info className="w-8 sm:w-10 h-8 sm:h-10 text-blue-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>
                <div className="space-y-4 sm:space-y-5">
                  {section.content?.map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const colonIdx = item.indexOf(':');
                    const before = hasColon ? item.substring(0, colonIdx) : item;
                    const after = hasColon ? item.substring(colonIdx + 1) : '';
                    return (
                      <div key={idx} className="bg-slate-50 rounded-xl p-5 sm:p-6 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                          {hasColon ? (
                            <>
                              <span className="font-bold text-slate-900"><TranslatedText as="span">{before.trim()}</TranslatedText></span>
                              <span className="font-normal text-slate-600">: <TranslatedText as="span">{after.trim()}</TranslatedText></span>
                            </>
                          ) : (
                            <span className="text-slate-700"><TranslatedText as="span">{item}</TranslatedText></span>
                          )}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        }

        // ── who / personality / traits ─────────────────────────────
        if (section.id === 'who' || section.id === 'personality' || section.id === 'traits') {
          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-slate-50 px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <User className="w-8 sm:w-10 h-8 sm:h-10 text-indigo-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                  {section.content?.map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const colonIdx = item.indexOf(':');
                    const title = hasColon ? item.substring(0, colonIdx).trim() : item;
                    const desc = hasColon ? item.substring(colonIdx + 1).trim() : '';
                    const traitIcons = [Brain, Heart, Eye, Zap, Users, Lightbulb, BarChart3, Globe, BookOpen];
                    const IconComponent = traitIcons[idx % traitIcons.length];
                    return (
                      <div key={idx} className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="w-10 sm:w-11 h-10 sm:h-11 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-indigo-600" />
                          </div>
                          <div>
                            <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2">
                              <TranslatedText as="span">{title}</TranslatedText>
                            </h4>
                            {hasColon && (
                              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                <TranslatedText as="span">{desc}</TranslatedText>
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        }

        // ── responsibilities / workflow ────────────────────────────
        if (section.id === 'responsibilities' || section.id === 'workflow') {
          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-white px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <Briefcase className="w-8 sm:w-10 h-8 sm:h-10 text-blue-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  {section.content?.map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const colonIdx = item.indexOf(':');
                    const title = hasColon ? item.substring(0, colonIdx).trim() : item;
                    const desc = hasColon ? item.substring(colonIdx + 1).trim() : '';
                    const stepIcons = [FileText, Layers, BarChart3, Monitor, RefreshCw, CheckCircle];
                    const IconComponent = stepIcons[idx % stepIcons.length];
                    return (
                      <div key={idx} className="bg-slate-50 rounded-xl p-5 sm:p-6 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="w-10 sm:w-11 h-10 sm:h-11 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2">
                              <TranslatedText as="span">{title}</TranslatedText>
                            </h4>
                            {hasColon && (
                              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                <TranslatedText as="span">{desc}</TranslatedText>
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        }

        // ── pathways / career path ─────────────────────────────────
        if (section.id === 'pathways' || section.id === 'pathway') {
          const stepColors = ['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#06B6D4', '#6366F1'];
          const pathways: { title: string; steps: string[] }[] = [];
          let currentPathway: { title: string; steps: string[] } | null = null;
        
          for (const item of section.content || []) {
            if ((item.toLowerCase().includes('pathway ') || item.toLowerCase().includes('route')) && !item.toLowerCase().startsWith('step')) {
              if (currentPathway) pathways.push(currentPathway);
              currentPathway = { title: item, steps: [] };
            } else if (item.toLowerCase().startsWith('step ')) {
              if (currentPathway) currentPathway.steps.push(item);
              else {
                currentPathway = { title: 'Career Path', steps: [item] };
              }
            } else {
              if (currentPathway) currentPathway.steps.push(item);
              else {
                currentPathway = { title: item, steps: [] };
              }
            }
          }
          if (currentPathway) pathways.push(currentPathway);

          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-slate-50 px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <Map className="w-8 sm:w-10 h-8 sm:h-10 text-blue-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {pathways.map((pathway, idx) => {
                     const color = stepColors[idx % stepColors.length];
                     return (
                       <div key={idx} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                         <div className="p-4 bg-slate-50 border-b border-slate-200" style={{ borderTop: `4px solid ${color}` }}>
                           <h3 className="text-lg font-bold text-slate-900"><TranslatedText as="span">{pathway.title}</TranslatedText></h3>
                         </div>
                         <div className="p-4 flex-1 flex flex-col gap-3">
                            {pathway.steps.map((step, sIdx) => {
                               const colonIndex = step.indexOf(':');
                               const label = colonIndex > -1 ? step.substring(0, colonIndex).trim() : '';
                               const desc = colonIndex > -1 ? step.substring(colonIndex + 1).trim() : step;
                               return (
                                 <div key={sIdx} className="flex gap-3 items-start">
                                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: color, color: 'white', fontSize: '12px', fontWeight: 'bold' }}>
                                      {sIdx + 1}
                                    </div>
                                    <div className="flex-1">
                                      {label && <p className="text-sm font-bold text-slate-900"><TranslatedText as="span">{label}</TranslatedText></p>}
                                      <p className="text-sm text-slate-700"><TranslatedText as="span">{desc}</TranslatedText></p>
                                    </div>
                                 </div>
                               )
                            })}
                         </div>
                       </div>
                     )
                  })}
                </div>
              </div>
            </section>
          );
        }

        // ── market / salary snapshot ───────────────────────────────
        if (section.id === 'market' || section.id === 'salary') {
          // Separate salary rows (contain ₹ or "annually") from extra info rows
          const salaryRows = section.content?.filter((item: string) =>
            item.includes('₹') || item.toLowerCase().includes('annually') || item.toLowerCase().includes('per year')
          ) || [];
          const extraRows = section.content?.filter((item: string) =>
            !item.includes('₹') && !item.toLowerCase().includes('annually') && !item.toLowerCase().includes('per year')
          ) || [];

          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-slate-50 px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <TrendingUp className="w-8 sm:w-10 h-8 sm:h-10 text-blue-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>

                {salaryRows.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-12">
                    {salaryRows.map((tier: string, idx: number) => {
                      const colonIdx = tier.indexOf(':');
                      let level = tier;
                      let details = '';
                      if (colonIdx !== -1) {
                         level = tier.substring(0, colonIdx).trim();
                         details = tier.substring(colonIdx + 1).trim();
                      }
                      
                      // Sometimes details is "₹5,00,000 – ₹8,00,000. Positions: Data Analyst"
                      const dotIdx = details.indexOf('.');
                      const posIdx = details.indexOf('Positions:');
                      let salary = details;
                      let pos = '';
                      
                      if (posIdx !== -1) {
                         salary = details.substring(0, posIdx).replace('.', '').trim();
                         pos = details.substring(posIdx + 10).trim();
                      } else if (dotIdx !== -1) {
                         salary = details.substring(0, dotIdx).trim();
                         pos = details.substring(dotIdx + 1).replace('Positions:', '').trim();
                      }

                      // Clean up hyphen spacing
                      salary = salary.replace(/\s*-\s*/g, ' - ').replace(/\s*–\s*/g, ' - ');

                      return (
                        <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all group flex flex-col justify-between">
                           <div>
                             <div className="flex items-center justify-between mb-4">
                               <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                                 <TrendingUp className="w-5 h-5" />
                               </div>
                               <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Tier {idx + 1}</span>
                             </div>
                             <h4 className="text-lg font-bold text-slate-900 mb-2"><TranslatedText as="span">{level}</TranslatedText></h4>
                             <div className="text-2xl font-black text-blue-600 mb-4 tracking-tight"><TranslatedText as="span">{salary}</TranslatedText></div>
                           </div>
                           {pos && (
                             <div className="pt-4 border-t border-slate-100">
                               <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Typical Roles</p>
                               <p className="text-sm font-medium text-slate-700"><TranslatedText as="span">{pos}</TranslatedText></p>
                             </div>
                           )}
                        </div>
                      )
                    })}
                  </div>
                )}

                {extraRows.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {extraRows.map((item: string, idx: number) => {
                      const hasColon = item.includes(':');
                      const colonIdx = item.indexOf(':');
                      const before = hasColon ? item.substring(0, colonIdx).trim() : item;
                      const after = hasColon ? item.substring(colonIdx + 1).trim() : '';
                      const extraIcons = [TrendingUp, BarChart3, Globe, Zap];
                      const IconComponent = extraIcons[idx % extraIcons.length];
                      return (
                        <div key={idx} className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 hover:border-blue-300 transition-all">
                          <div className="flex items-start gap-3">
                            <IconComponent className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                              {hasColon ? (
                                <>
                                  <span className="font-bold text-slate-900"><TranslatedText as="span">{before}</TranslatedText></span>
                                  <span className="font-normal text-slate-600">: <TranslatedText as="span">{after}</TranslatedText></span>
                                </>
                              ) : (
                                <span className="font-bold text-slate-900"><TranslatedText as="span">{item}</TranslatedText></span>
                              )}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </section>
          );
        }
 
        // ── where are the jobs / jobs ─────────────────────────────
        if (section.id === 'jobs') {
          const groupedContent: Record<string, string[]> = {};
          let currentGroup = 'Market Info';
          
          const content = section.content || [];
          content.forEach((item: string) => {
            const trimmed = item.trim();
            if (!trimmed) return;

            const isHeader = !trimmed.includes(':') && trimmed.split(' ').length <= 4 && 
              ["cities", "industries", "demand", "locations", "regions", "sectors", "hubs"].some(h => trimmed.toLowerCase().includes(h));
            
            if (isHeader) {
               currentGroup = trimmed.replace(/:$/, '').trim();
               if (!groupedContent[currentGroup]) groupedContent[currentGroup] = [];
            } else {
               if (!groupedContent[currentGroup]) groupedContent[currentGroup] = [];
               let cleaned = trimmed;
               if (cleaned.endsWith(":")) cleaned = cleaned.slice(0, -1).trim();
               if (cleaned) {
                  groupedContent[currentGroup].push(cleaned);
               }
            }
          });

          const finalEntries = Object.entries(groupedContent).filter(([_, items]) => items.length > 0);
          const jobIcons = [MapPin, Building2, Globe, TrendingUp, Target, Zap];

          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-slate-50 px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <MapPin className="w-8 sm:w-10 h-8 sm:h-10 text-blue-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {finalEntries.map(([type, items], idx) => {
                    const IconComponent = jobIcons[idx % jobIcons.length];
                    return (
                      <div key={idx} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all group">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                            <IconComponent className="w-6 h-6 text-blue-600" />
                          </div>
                          <h4 className="text-lg font-bold text-slate-900"><TranslatedText as="span">{type}</TranslatedText></h4>
                        </div>
                        <ul className="space-y-3">
                          {items.map((it, i) => (
                            <li key={i} className="flex gap-3 items-start group/item">
                              <span className="text-blue-500 mt-0.5 text-lg font-bold">*</span>
                              <span className="text-sm sm:text-base text-slate-600 font-medium group-hover/item:text-slate-900 transition-colors">
                                <TranslatedText as="span">{it}</TranslatedText>
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        }

        // ── institutions / study / locations ───────────────────────
        if (section.id === 'institutions' || section.id === 'locations' || section.id === 'study') {
          const groupedContent: Record<string, string[]> = {};
          let currentGroup = "Public/Premier";
          
          (section.content || []).forEach((item: string) => {
            const colonIndex = item.indexOf(":");
            if (colonIndex > -1 && item.includes(";")) {
              const type = item.substring(0, colonIndex).trim();
              const content = item.substring(colonIndex + 1).trim();
              const institutions = content.split(";").map(i => i.trim()).filter(i => i);
              groupedContent[type] = institutions;
            } else {
              const isHeader = !item.includes(":") && item.split(" ").length <= 4 && 
                ["government", "private", "online", "public", "central", "state", "top institutions", "north", "south", "east", "west"].some(h => item.toLowerCase().includes(h));
              
              if (isHeader) {
                 currentGroup = item.replace(":", "").trim();
                 if (!groupedContent[currentGroup]) groupedContent[currentGroup] = [];
              } else {
                 if (!groupedContent[currentGroup]) groupedContent[currentGroup] = [];
                 let cleaned = item;
                 if (cleaned.toLowerCase() === "top institutions for agri-business management in india") return;
                 if (cleaned.endsWith(":")) cleaned = cleaned.slice(0, -1).trim();
                 if (cleaned) {
                    groupedContent[currentGroup].push(cleaned);
                 }
              }
            }
          });

          Object.keys(groupedContent).forEach(key => {
            if (groupedContent[key].length === 0) delete groupedContent[key];
          });
          
          const locIcons = [Building2, Globe, Monitor, MapPin, Award, Sparkles];

          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-white px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <Building2 className="w-8 sm:w-10 h-8 sm:h-10 text-blue-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                  {Object.entries(groupedContent).map(([type, insts], idx) => {
                    const IconComponent = locIcons[idx % locIcons.length];
                    return (
                      <div key={idx} className="bg-slate-50 border border-slate-200 p-5 sm:p-6 rounded-xl hover:border-blue-300 hover:shadow-md transition-all">
                        <div className="flex items-start gap-3 sm:gap-4 mb-4">
                          <div className="w-9 sm:w-10 h-9 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600" />
                          </div>
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                            <TranslatedText as="span">{type}</TranslatedText>
                          </h4>
                        </div>
                        <ul className="space-y-2 pl-2">
                          {insts.map((inst, i) => (
                             <li key={i} className="flex gap-2 items-start text-sm text-slate-600">
                               <span className="text-blue-500 mt-0.5">•</span>
                               <span><TranslatedText as="span">{inst}</TranslatedText></span>
                             </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        }

        // ── challenges ────────────────────────────────────────────────
        if (section.id === 'challenges') {
          return (
            <section key={sectionIdx} className="py-16 sm:py-20 md:py-24 bg-slate-50 px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-16 sm:mb-20">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <AlertTriangle className="w-8 sm:w-10 h-8 sm:h-10 text-red-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-relaxed pb-8 sm:pb-10 md:pb-12 lg:pb-16 border-b-4 border-red-200">
                        <TranslatedText as="span">{section.title}</TranslatedText>
                      </h2>
                      <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed pt-8 sm:pt-10 md:pt-12 lg:pt-16">
                        <TranslatedText as="span">{section.description}</TranslatedText>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-7">
                  {section.content?.map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const colonIdx = item.indexOf(':');
                    const title = hasColon ? item.substring(0, colonIdx).trim() : item;
                    const desc = hasColon ? item.substring(colonIdx + 1).trim() : '';
                    const challengeIcons = [AlertTriangle, AlertCircle, Zap, Heart, Eye, Users];
                    const IconComponent = challengeIcons[idx % challengeIcons.length];
                    return (
                      <div key={idx} className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200 hover:border-red-300 hover:shadow-lg transition-all">
                        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                          <IconComponent className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                            <TranslatedText as="span">{title}</TranslatedText>
                          </h4>
                        </div>
                        {hasColon && (
                          <p className="text-sm text-slate-600 leading-relaxed pl-9 sm:pl-10">
                            <TranslatedText as="span">{desc}</TranslatedText>
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        }

        // ── opportunities ─────────────────────────────────────────────
        if (section.id === 'opportunities') {
          const groupedContent: Record<string, string[]> = {};
          let currentGroup = 'General Roles';
          
          const content = section.content || [];
          content.forEach((item: string) => {
            const trimmed = item.trim();
            if (!trimmed) return;

            const colonIndex = trimmed.indexOf(':');
            // Case 1: "Category: Item 1, Item 2..."
            if (colonIndex > -1 && trimmed.length > 40) {
              const type = trimmed.substring(0, colonIndex).trim().replace(/:$/, '');
              const subItems = trimmed.substring(colonIndex + 1).split(/[,;]/).map(i => i.trim()).filter(i => i);
              if (!groupedContent[type]) groupedContent[type] = [];
              groupedContent[type].push(...subItems);
              currentGroup = type;
            } else {
              const lower = trimmed.toLowerCase();
              // Case 2: Explicit headers
              const isHeader = !trimmed.includes(':') && trimmed.split(' ').length <= 4 && 
                (
                  ["conventional", "emerging", "new-age", "remote", "entrepreneurship", "startup", "freelancing", "roles", "careers"].some(h => lower.includes(h)) ||
                  trimmed === trimmed.toUpperCase()
                );
              
              if (isHeader) {
                 // If it's a known header like "Conventional", clean it up
                 currentGroup = trimmed.replace(/:$/, '');
                 if (!groupedContent[currentGroup]) groupedContent[currentGroup] = [];
              } else {
                 // Case 3: List items
                 if (!groupedContent[currentGroup]) groupedContent[currentGroup] = [];
                 // Remove leading bullets (?, *, -, ?, etc.)
                 const cleaned = trimmed.replace(/^[•\-\*\?\s]+/, '');
                 if (cleaned) groupedContent[currentGroup].push(cleaned);
              }
            }
          });

          const finalEntries = Object.entries(groupedContent).filter(([_, items]) => items.length > 0);


          return (
            <section key={sectionIdx} className="py-12 sm:py-16 md:py-20 bg-white px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-10 sm:mb-12">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <Briefcase className="w-8 sm:w-10 h-8 sm:h-10 text-green-600 flex-shrink-0" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
                  {finalEntries.map(([type, opps], idx) => {
                    const oppIcons = [Briefcase, Rocket, Zap, Target, Globe, Building2];
                    const IconComponent = oppIcons[idx % oppIcons.length];
                    const colors = ["text-green-600", "text-blue-600", "text-purple-600", "text-orange-600", "text-emerald-600"];
                    const colorClass = colors[idx % colors.length];
                    const bgClass = colorClass.replace("text-", "bg-").replace("-600", "-50");
                    
                    if (opps.length === 0) return null;
                    
                    return (
                      <div key={idx} className="group bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-green-300 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-12 h-12 ${bgClass} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                            <IconComponent className={`w-6 h-6 ${colorClass}`} />
                          </div>
                          <h4 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
                            <TranslatedText as="span">{type}</TranslatedText>
                          </h4>
                        </div>
                        <ul className="space-y-3 pl-1">
                          {opps.map((opp, i) => (
                            <li key={i} className="flex gap-3 items-start group/item text-slate-600">
                              <span className={`mt-0.5 font-bold text-lg ${colorClass}`}>*</span>
                              <span className="text-sm sm:text-base font-medium group-hover/item:text-slate-900 transition-colors leading-relaxed">
                                <TranslatedText as="span">{opp}</TranslatedText>
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        }

        // ── future / trends / emerging ─────────────────────────────
        if (section.id === 'future' || section.id === 'trends' || section.id === 'emerging') {
          return (
            <section key={sectionIdx} className="py-16 sm:py-20 md:py-24 bg-white px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-16 sm:mb-20">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Sparkles className="w-8 sm:w-10 h-8 sm:h-10 text-purple-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-relaxed pb-8 sm:pb-10 md:pb-12 lg:pb-16 border-b-4 border-purple-200">
                        <TranslatedText as="span">{section.title}</TranslatedText>
                      </h2>
                      <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed pt-8 sm:pt-10 md:pt-12 lg:pt-16">
                        <TranslatedText as="span">{section.description}</TranslatedText>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-7">
                  {section.content?.map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const colonIdx = item.indexOf(':');
                    const title = hasColon ? item.substring(0, colonIdx).trim() : item;
                    const desc = hasColon ? item.substring(colonIdx + 1).trim() : '';
                    const trendIcons = [Zap, AlertCircle, Cloud, Lock, BarChart3, Sparkles, Globe, Rocket];
                    const IconComponent = trendIcons[idx % trendIcons.length];
                    return (
                      <div key={idx} className="bg-slate-50 rounded-xl p-6 sm:p-7 border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all">
                        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                          <IconComponent className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                            <TranslatedText as="span">{title}</TranslatedText>
                          </h4>
                        </div>
                        {hasColon && (
                          <p className="text-sm text-slate-600 leading-relaxed pl-9 sm:pl-10">
                            <TranslatedText as="span">{desc}</TranslatedText>
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        }

        // Generic section for other content
        return (
          <section key={sectionIdx} className={`py-20 px-4 sm:px-8 ${sectionIdx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto">
              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                  <TranslatedText as="span">{section.title}</TranslatedText>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-slate-600">
                  <TranslatedText as="span">{section.description}</TranslatedText>
                </p>
              </div>

              <div className="space-y-4">
                {section.content?.map((item: string, idx: number) => {
                  // Clean trailing colon artifacts like "text.:" or "text.:"
                  const cleaned = item.replace(/\s*:\s*$/, '').trim();
                  const hasColon = cleaned.includes(':');
                  const colonIdx = cleaned.indexOf(':');
                  const beforeColon = hasColon ? cleaned.substring(0, colonIdx).trim() : cleaned;
                  const afterColon = hasColon ? cleaned.substring(colonIdx + 1).trim() : '';

                  // If afterColon is empty, treat the whole thing as a plain paragraph
                  const isPlain = !hasColon || !afterColon;

                  return (
                    <div key={idx} className="flex items-start gap-3 bg-white p-5 rounded-xl border border-slate-200 hover:border-blue-300 transition-all">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                      {isPlain ? (
                        <p className="text-slate-700 text-sm leading-relaxed">
                          <TranslatedText as="span">{cleaned}</TranslatedText>
                        </p>
                      ) : (
                        <p className="text-slate-700 text-sm leading-relaxed">
                          <span className="font-semibold text-slate-900"><TranslatedText as="span">{beforeColon}</TranslatedText>: </span>
                          <TranslatedText as="span">{afterColon}</TranslatedText>
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* Cost Breakdown Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50 px-3 sm:px-4 md:px-6 lg:px-8">
        <CostBreakdown
          title="What Will It Cost?"
          subtitle="Complete financial breakdown for your career journey"
          careerSlug={career}
          categorySlug={category}
        />
      </section>

      {/* Videos Section */}
      {videos && videos.length > 0 && (
        <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 sm:mb-14 md:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
                <TranslatedText>Learn More Through Videos</TranslatedText>
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600">
                <TranslatedText>Watch expert insights and student experiences</TranslatedText>
              </p>
            </div>

            <div className="relative rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl mb-6 sm:mb-7 md:mb-8 bg-white border border-slate-100">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={videos[currentVideoIndex]?.url}
                  title={videos[currentVideoIndex]?.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="text-center mb-6 sm:mb-7 md:mb-8">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-800">
                <TranslatedText>{videos[currentVideoIndex]?.title}</TranslatedText>
              </h3>
              <p className="text-xs sm:text-sm mt-1 sm:mt-2 text-slate-500 font-medium">
                <TranslatedText as="span">{`Video ${currentVideoIndex + 1} of ${videos.length}`}</TranslatedText>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 lg:gap-6">
              <button
                onClick={() => setCurrentVideoIndex((p) => (p - 1 + videos.length) % videos.length)}
                className="px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full transition-all text-xs sm:text-sm md:text-base font-bold select-none hover:-translate-y-1 shadow-md w-full sm:w-auto bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50"
              >
                ← <TranslatedText>Previous</TranslatedText>
              </button>

              <div className="flex gap-1 sm:gap-2">
                {videos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentVideoIndex(idx)}
                    className={`rounded-full transition-all h-2 sm:h-3 ${
                      currentVideoIndex === idx ? 'w-6 sm:w-8 md:w-10 bg-blue-600' : 'w-2 sm:w-3 bg-blue-600/40'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentVideoIndex((p) => (p + 1) % videos.length)}
                className="px-4 sm:px-6 md:px-8 py-2 md:py-3 rounded-full transition-all text-xs sm:text-sm md:text-base font-bold select-none hover:-translate-y-1 shadow-md w-full sm:w-auto bg-blue-600 text-white border-2 border-blue-600 hover:bg-blue-700"
              >
                <TranslatedText>Next</TranslatedText> →
              </button>
            </div>
          </div>
        </section>
      )}

    

      <Footer />
    </div>
  );
}
