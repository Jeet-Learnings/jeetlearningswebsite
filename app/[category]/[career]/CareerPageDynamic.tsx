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

  const guideSections = pageData?.guideSections || [];

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
                    // Handle both formats:
                    // Format 1: "time|title|description" (actuarial science)
                    // Format 2: "time - title: description" (banking)
                    let time = '';
                    let title = '';
                    let desc = '';
                    
                    if (item.includes('|')) {
                      // Pipe-separated format
                      [time, title, desc] = item.split('|');
                    } else if (item.includes(' - ') && item.includes(': ')) {
                      // Dash and colon format
                      const dashIndex = item.indexOf(' - ');
                      const colonIndex = item.indexOf(': ');
                      
                      if (dashIndex !== -1 && colonIndex !== -1 && dashIndex < colonIndex) {
                        time = item.substring(0, dashIndex).trim();
                        title = item.substring(dashIndex + 3, colonIndex).trim();
                        desc = item.substring(colonIndex + 2).trim();
                      } else {
                        // Fallback if parsing fails
                        time = '';
                        title = item;
                        desc = '';
                      }
                    } else {
                      // Fallback for other formats
                      time = '';
                      title = item;
                      desc = '';
                    }
                    
                    return (
                      <div
                        key={idx}
                        className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
                      >
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 rounded-lg bg-blue-100">
                              <Clock className="w-5 sm:w-5 md:w-6 h-5 sm:h-5 md:h-6 text-blue-600" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="mb-1 sm:mb-2">
                              <span className="text-base sm:text-lg md:text-lg font-bold text-blue-600 break-words">
                                <TranslatedText as="span">{time?.trim()}</TranslatedText>
                              </span>
                            </div>
                            <h4 className="text-base sm:text-lg md:text-lg font-bold text-slate-900 mb-1 sm:mb-2 break-words">
                              <TranslatedText as="span">{title?.trim()}</TranslatedText>
                            </h4>
                            <p className="text-xs sm:text-sm md:text-sm text-slate-600 leading-relaxed break-words">
                              <TranslatedText as="span">{desc?.trim()}</TranslatedText>
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

        if (section.id === 'skills') {
          return (
            <section key={sectionIdx} className="py-20 bg-slate-50 px-4 sm:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                    <TranslatedText>{section.title}</TranslatedText>
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-slate-600">
                    <TranslatedText>{section.description}</TranslatedText>
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.content?.slice(0, 6).map((skill: string, idx: number) => {
                    const hasColon = skill.includes(':');
                    const [title, desc] = hasColon ? skill.split(':') : [skill, ''];
                    return (
                      <div
                        key={idx}
                        className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Brain className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-slate-900 mb-2">
                              <TranslatedText as="span">{title?.trim()}</TranslatedText>
                            </h4>
                            {hasColon && (
                              <p className="text-sm text-slate-600 font-normal">
                                <TranslatedText as="span">{desc?.trim()}</TranslatedText>
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

        if (section.id === 'education') {
          return (
            <section key={sectionIdx} className="py-20 px-4 sm:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                    <TranslatedText>{section.title}</TranslatedText>
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-slate-600">
                    <TranslatedText>{section.description}</TranslatedText>
                  </p>
                </div>

                <div className="max-w-3xl mx-auto">
                  <div className="flex flex-col gap-0">
                    {section.content?.slice(0, 4).map((stage: string, idx: number) => {
                      const hasColon = stage.includes(':');
                      const [beforeColon, afterColon] = hasColon ? stage.split(':') : [stage, ''];
                      
                      return (
                        <div key={idx} className="flex gap-6 pb-8 border-l-2 border-slate-200 ml-3 pl-8 relative">
                          <div
                            className={`absolute left-[-11px] top-0 w-5 h-5 rounded-full border-4 border-white ${
                              idx === 0 ? 'bg-blue-600' : 'bg-slate-200'
                            }`}
                          ></div>
                          <div>
                            <span className={`text-label-sm font-bold ${idx === 0 ? 'text-blue-600' : 'text-slate-500'}`}>
                              <TranslatedText as="span">{`STAGE ${String(idx + 1).padStart(2, '0')}`}</TranslatedText>
                            </span>
                            {hasColon ? (
                              <h4 className="text-slate-900 text-lg">
                                <span className="font-bold"><TranslatedText as="span">{beforeColon.trim()}</TranslatedText></span>
                                <span className="font-normal">: <TranslatedText as="span">{afterColon.trim()}</TranslatedText></span>
                              </h4>
                            ) : (
                              <h4 className="font-bold text-slate-900 text-lg"><TranslatedText as="span">{stage?.trim()}</TranslatedText></h4>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          );
        }

        if (section.id === 'salary') {
          return (
            <section key={sectionIdx} className="py-20 bg-slate-50 px-4 sm:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                    <TranslatedText>{section.title}</TranslatedText>
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-slate-600">
                    <TranslatedText>{section.description}</TranslatedText>
                  </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200 mb-8">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-blue-600 text-white">
                        <th className="px-6 py-4 text-left font-bold text-sm"><TranslatedText>Career Level</TranslatedText></th>
                        <th className="px-6 py-4 text-left font-bold text-sm"><TranslatedText>Salary Range</TranslatedText></th>
                        <th className="px-6 py-4 text-left font-bold text-sm"><TranslatedText>Position</TranslatedText></th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.content?.slice(0, 4).map((tier: string, idx: number) => {
                        // Parse format: "Level (details): Salary. Positions: Jobs."
                        const colonIndex = tier.indexOf(':');
                        const dotIndex = tier.indexOf('.');
                        const positionsIndex = tier.indexOf('Positions:');
                        
                        let level = '';
                        let salary = '';
                        let positions = '';
                        
                        if (colonIndex !== -1 && dotIndex !== -1) {
                          level = tier.substring(0, colonIndex).trim();
                          salary = tier.substring(colonIndex + 1, dotIndex).trim();
                          
                          if (positionsIndex !== -1) {
                            positions = tier.substring(positionsIndex + 10).trim();
                          }
                        }
                        
                        return (
                          <tr
                            key={idx}
                            className={`border-t border-slate-200 transition-colors ${
                              idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                            } hover:bg-blue-50`}
                          >
                            <td className="px-6 py-4 text-sm font-bold text-slate-900">
                              <TranslatedText as="span">{level}</TranslatedText>
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-blue-600">
                              <TranslatedText as="span">{salary}</TranslatedText>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-600">
                              <TranslatedText as="span">{positions}</TranslatedText>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div className="space-y-4">
                  {section.content?.slice(4).map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const [beforeColon, afterColon] = hasColon ? item.split(':') : [item, ''];

                    return (
                      <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-all">
                        {hasColon ? (
                          <p className="text-slate-700 text-sm leading-relaxed">
                            <span className="font-bold text-slate-900"><TranslatedText as="span">{beforeColon.trim()}</TranslatedText></span>
                            <span className="font-normal text-slate-600">: <TranslatedText as="span">{afterColon.trim()}</TranslatedText></span>
                          </p>
                        ) : (
                          <p className="text-slate-700 text-sm leading-relaxed font-bold text-slate-900">
                            <TranslatedText as="span">{item}</TranslatedText>
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

        if (section.id === 'locations' || section.id === 'study') {
          return (
            <section key={sectionIdx} className="py-20 px-4 sm:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                    <TranslatedText>{section.title}</TranslatedText>
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-slate-600">
                    <TranslatedText>{section.description}</TranslatedText>
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.content?.map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const [category, details] = hasColon ? item.split(':') : [item, ''];
                    
                    return (
                      <div
                        key={idx}
                        className="bg-white border border-slate-200 p-6 rounded-xl hover:border-blue-300 hover:shadow-md transition-all"
                      >
                        <h4 className="text-lg font-bold text-slate-900 mb-3">
                          <TranslatedText as="span">{category?.trim()}</TranslatedText>
                        </h4>
                        {hasColon && (
                          <p className="text-sm text-slate-600 leading-relaxed">
                            <TranslatedText as="span">{details?.trim()}</TranslatedText>
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

        if (section.id === 'scholarships') {
          return (
            <section key={sectionIdx} className="py-20 bg-white px-4 sm:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                  <div className="flex items-center gap-4 mb-4">
                    <Award className="w-10 h-10 text-amber-600" />
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                      <TranslatedText as="span">{section.title}</TranslatedText>
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-slate-600">
                    <TranslatedText as="span">{section.description}</TranslatedText>
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.content?.map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const [title, desc] = hasColon ? item.split(':') : [item, ''];
                    
                    const icons = [Award, Zap, BookOpen, Trophy, Briefcase, Lightbulb];
                    const IconComponent = icons[idx % icons.length];
                    
                    return (
                      <div
                        key={idx}
                        className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all"
                      >
                        <div className="flex items-start gap-4 mb-3">
                          <IconComponent className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
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

        if (section.id === 'certifications') {
          return (
            <section key={sectionIdx} className="py-20 bg-slate-50 px-4 sm:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                  <div className="flex items-center gap-4 mb-4">
                    <Award className="w-10 h-10 text-blue-600" />
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
                    
                    const icons = [Building2, Globe, Zap, BookOpen, Award, Sparkles];
                    const IconComponent = icons[idx % icons.length];
                    
                    return (
                      <div
                        key={idx}
                        className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
                      >
                        <div className="flex items-start gap-4 mb-3">
                          <IconComponent className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
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

        if (section.id === 'opportunities') {
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
                <div className="max-w-3xl mx-auto">
                  <div className="flex flex-col">
                    {section.content?.map((stage: string, idx: number) => {
                      const hasColon = stage.includes(':');
                      const colonIdx = stage.indexOf(':');
                      const before = hasColon ? stage.substring(0, colonIdx).trim() : stage;
                      const after = hasColon ? stage.substring(colonIdx + 1).trim() : '';
                      return (
                        <div key={idx} className="flex gap-4 sm:gap-6 pb-6 sm:pb-8 border-l-2 border-slate-200 ml-3 pl-6 sm:pl-8 relative">
                          <div className={`absolute left-[-11px] top-0 w-5 h-5 rounded-full border-4 border-white ${idx === 0 ? 'bg-blue-600' : 'bg-slate-300'}`} />
                          <div className="flex-1">
                            <span className={`text-xs font-bold uppercase tracking-wider ${idx === 0 ? 'text-blue-600' : 'text-slate-400'}`}>
                              <TranslatedText as="span">{`STEP ${String(idx + 1).padStart(2, '0')}`}</TranslatedText>
                            </span>
                            <div className="mt-1">
                              {hasColon ? (
                                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                                  <span className="font-bold text-slate-900"><TranslatedText as="span">{before}</TranslatedText></span>
                                  <span className="font-normal text-slate-600">: <TranslatedText as="span">{after}</TranslatedText></span>
                                </p>
                              ) : (
                                <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
                                  <TranslatedText as="span">{stage}</TranslatedText>
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
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
                  <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6 sm:mb-8">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-blue-600 text-white">
                          <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-bold text-xs sm:text-sm"><TranslatedText>Career Level</TranslatedText></th>
                          <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-bold text-xs sm:text-sm"><TranslatedText>Salary Range</TranslatedText></th>
                          <th className="px-4 sm:px-6 py-3 sm:py-4 text-left font-bold text-xs sm:text-sm hidden sm:table-cell"><TranslatedText>Positions</TranslatedText></th>
                        </tr>
                      </thead>
                      <tbody>
                        {salaryRows.map((tier: string, idx: number) => {
                          const colonIdx = tier.indexOf(':');
                          const dotIdx = tier.indexOf('.');
                          const posIdx = tier.indexOf('Positions:');
                          let level = '';
                          let salary = '';
                          let positions = '';
                          if (colonIdx !== -1) {
                            level = tier.substring(0, colonIdx).trim();
                            if (dotIdx !== -1 && dotIdx > colonIdx) {
                              salary = tier.substring(colonIdx + 1, dotIdx).trim();
                              if (posIdx !== -1) {
                                positions = tier.substring(posIdx + 10).trim();
                              }
                            } else {
                              salary = tier.substring(colonIdx + 1).trim();
                            }
                          }
                          return (
                            <tr key={idx} className={`border-t border-slate-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-blue-50 transition-colors`}>
                              <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-bold text-slate-900">
                                <TranslatedText as="span">{level}</TranslatedText>
                              </td>
                              <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-bold text-blue-600">
                                <TranslatedText as="span">{salary}</TranslatedText>
                              </td>
                              <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm text-slate-600 hidden sm:table-cell">
                                <TranslatedText as="span">{positions}</TranslatedText>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
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

        // ── institutions / study / locations ───────────────────────
        if (section.id === 'institutions' || section.id === 'locations' || section.id === 'study') {
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  {section.content?.map((item: string, idx: number) => {
                    const hasColon = item.includes(':');
                    const colonIdx = item.indexOf(':');
                    const category = hasColon ? item.substring(0, colonIdx).trim() : item;
                    const details = hasColon ? item.substring(colonIdx + 1).trim() : '';
                    const locIcons = [Building2, Globe, Monitor, MapPin];
                    const IconComponent = locIcons[idx % locIcons.length];
                    return (
                      <div key={idx} className="bg-slate-50 border border-slate-200 p-5 sm:p-6 rounded-xl hover:border-blue-300 hover:shadow-md transition-all">
                        <div className="flex items-start gap-3 sm:gap-4 mb-2 sm:mb-3">
                          <div className="w-9 sm:w-10 h-9 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600" />
                          </div>
                          <h4 className="text-base sm:text-lg font-bold text-slate-900">
                            <TranslatedText as="span">{category}</TranslatedText>
                          </h4>
                        </div>
                        {hasColon && (
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-12 sm:pl-14">
                            <TranslatedText as="span">{details}</TranslatedText>
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
          return (
            <section key={sectionIdx} className="py-16 sm:py-20 md:py-24 bg-white px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="mb-16 sm:mb-20">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Briefcase className="w-8 sm:w-10 h-8 sm:h-10 text-green-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-relaxed pb-8 sm:pb-10 md:pb-12 lg:pb-16 border-b-4 border-green-200">
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
                    const oppIcons = [Briefcase, Zap, Rocket, Building2, Globe, TrendingUp];
                    const IconComponent = oppIcons[idx % oppIcons.length];
                    return (
                      <div key={idx} className="bg-slate-50 rounded-xl p-6 sm:p-7 border border-slate-200 hover:border-green-300 hover:shadow-lg transition-all">
                        <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                          <IconComponent className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
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
                  const hasColon = item.includes(':');
                  const [beforeColon, afterColon] = hasColon ? item.split(':') : [item, ''];

                  return (
                    <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 transition-all">
                      {hasColon ? (
                        <p className="text-slate-700 text-sm leading-relaxed">
                          <span className="font-bold text-slate-900"><TranslatedText as="span">{beforeColon.trim()}</TranslatedText></span>
                          <span className="font-normal text-slate-600">: <TranslatedText as="span">{afterColon.trim()}</TranslatedText></span>
                        </p>
                      ) : (
                        <p className="text-slate-700 text-sm leading-relaxed font-bold text-slate-900">
                          <TranslatedText as="span">{item}</TranslatedText>
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
