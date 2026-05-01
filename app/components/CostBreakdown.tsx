"use client";

import { useState } from "react";
import { ChevronDown, TrendingUp, DollarSign, Calendar, Target } from "lucide-react";
import { allCategoryCosts, CategoryCost } from "@/app/data/careerCategoryCosting";
import { getCareerCosts } from "@/app/data/careerIndividualCosting";
import { TranslatedText } from "@/app/components/TranslatedText";

const PRIMARY_BLUE = "#1E40AF";
const ACCENT_GOLD = "#F59E0B";

interface CostBreakdownProps {
  title?: string;
  subtitle?: string;
  items?: CategoryCost[];
  categorySlug?: string;
  careerSlug?: string;
}

export function CostBreakdown({
  title = "What Will It Cost?",
  subtitle = "Complete financial breakdown for your career journey",
  items,
  categorySlug,
  careerSlug,
}: CostBreakdownProps) {
  // Priority: careerSlug > categorySlug > items
  let costItems: any[] = [];
  
  if (careerSlug) {
    const careerData = getCareerCosts(careerSlug);
    // If career has specific costs, use them; otherwise fall back to category
    costItems = (careerData?.costs && careerData.costs.length > 0) 
      ? careerData.costs 
      : (categorySlug ? allCategoryCosts[categorySlug as keyof typeof allCategoryCosts] : []);
  } else if (categorySlug) {
    costItems = allCategoryCosts[categorySlug as keyof typeof allCategoryCosts] || [];
  } else if (items) {
    costItems = items;
  }
  
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  // Calculate total cost
  const totalAmount = costItems.reduce((sum, item) => {
    const amount = item.amount.replace(/[₹,+\-\s]/g, "");
    const num = parseInt(amount) || 0;
    return sum + num;
  }, 0);

  return (
    <div className="relative bg-white">
      {/* Header Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-b border-blue-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-2 sm:mb-3 md:mb-4 px-2">
              <TranslatedText as="span">{title}</TranslatedText>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto font-medium px-4">
              <TranslatedText>{subtitle}</TranslatedText>
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 sm:mb-8 md:mb-12 px-2">
              <TranslatedText>Cost Breakdown by Category</TranslatedText>
            </h3>

            <div className="space-y-3 md:space-y-4">
              {costItems.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-slate-200"
                >
                  {/* Header */}
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-3 sm:p-4 md:p-5 hover:bg-slate-50 transition-colors gap-2 sm:gap-3"
                    style={{
                      borderLeft: `4px solid ${item.color}`,
                    }}
                  >
                    <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0 overflow-hidden">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center text-xl sm:text-2xl md:text-3xl flex-shrink-0 shadow-md"
                        style={{ background: `${item.color}15` }}
                      >
                        {item.icon}
                      </div>
                      <div className="min-w-0 flex-1 overflow-hidden">
                        <p className="font-black text-xs sm:text-sm md:text-base text-slate-900 truncate"><TranslatedText as="span">{item.category}</TranslatedText></p>
                        <p className="text-xs sm:text-xs text-slate-600 mt-0.5 font-medium truncate"><TranslatedText>{item.description}</TranslatedText></p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0 max-w-[45%] sm:max-w-[50%]">
                      <div className="text-right min-w-0 overflow-hidden">
                        <p className="font-black text-xs sm:text-sm md:text-base text-slate-900 break-words leading-tight">{item.amount}</p>
                      </div>
                      <div
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white transition-transform flex-shrink-0"
                        style={{
                          background: item.color,
                          transform: expandedIndex === idx ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      >
                        <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {expandedIndex === idx && item.details && (
                    <div className="px-4 sm:px-5 md:px-7 pb-5 sm:pb-6 md:pb-8 bg-gradient-to-b from-slate-50 to-white border-t-2" style={{ borderTopColor: item.color }}>
                      <div className="space-y-2 sm:space-y-3">
                        {item.details.map((detail: string, detailIdx: number) => (
                          <div key={detailIdx} className="flex gap-2 sm:gap-3">
                            <span
                              className="text-sm sm:text-base font-bold flex-shrink-0 leading-relaxed"
                              style={{ color: item.color }}
                            >
                              →
                            </span>
                            <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed font-medium"><TranslatedText>{detail}</TranslatedText></p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Summary Box - REMOVED */}
          </div>
        </section>
    </div>
  );
}
