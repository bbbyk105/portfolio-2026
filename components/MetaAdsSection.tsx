"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  ja: {
    title: "Meta広告代理",
    description:
      "Meta広告の戦略立案から運用、最適化まで一貫してサポート。ターゲティング、クリエイティブ制作、パフォーマンス分析により、効果的な広告運用を実現します。",
    strategyTitle: "広告戦略立案",
    strategyDescription: "目標に合わせた広告戦略の設計と最適化を行います。",
    strategyFeatures: ["ターゲット設定", "予算配分最適化", "KPI設定"],
    creativeTitle: "クリエイティブ制作",
    creativeDescription: "効果的な広告クリエイティブの制作を行います。",
    creativeFeatures: ["画像・動画制作", "A/Bテスト", "コピーライティング"],
    managementTitle: "運用・最適化",
    managementDescription: "継続的な広告運用とパフォーマンス最適化を行います。",
    managementFeatures: [
      "日次・週次レポート",
      "パフォーマンス分析",
      "継続的な改善",
    ],
  },
  en: {
    title: "Meta Advertising Agency",
    description:
      "We provide comprehensive support from Meta ad strategy planning to management and optimization. We achieve effective ad management through targeting, creative production, and performance analysis.",
    strategyTitle: "Ad Strategy Planning",
    strategyDescription:
      "We design and optimize ad strategies tailored to your goals.",
    strategyFeatures: [
      "Target Setting",
      "Budget Allocation Optimization",
      "KPI Setting",
    ],
    creativeTitle: "Creative Production",
    creativeDescription: "We produce effective ad creatives.",
    creativeFeatures: [
      "Image & Video Production",
      "A/B Testing",
      "Copywriting",
    ],
    managementTitle: "Management & Optimization",
    managementDescription:
      "We provide continuous ad management and performance optimization.",
    managementFeatures: [
      "Daily & Weekly Reports",
      "Performance Analysis",
      "Continuous Improvement",
    ],
  },
};

export default function MetaAdsSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="w-full bg-[#171717] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#0ABAB5]"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#fafafa]">
              {t.title}
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-[#b4b4b4] max-w-3xl ml-4">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {/* Strategy */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50 relative overflow-hidden group">
            <div className="bg-[#171717] rounded-[11px] p-4 sm:p-5 md:p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  className="w-[18px] h-[18px]"
                  fill="none"
                  stroke="#fafafa"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <h3 className="text-[15.1px] leading-[24px] text-[#fafafa]">
                  {t.strategyTitle}
                </h3>
              </div>
              <div>
                <p className="text-[13.3px] leading-[20px] text-[#898989] mb-3">
                  <span className="text-[#fafafa]">
                    {t.strategyDescription}
                  </span>
                </p>
                <ul className="space-y-0.5">
                  {t.strategyFeatures.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-[13.2px] text-[#fafafa]"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="#fafafa"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Creative */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50 relative overflow-hidden group">
            <div className="bg-[#171717] rounded-[11px] p-4 sm:p-5 md:p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  className="w-[18px] h-[18px]"
                  fill="none"
                  stroke="#fafafa"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="text-[15.1px] leading-[24px] text-[#fafafa]">
                  {t.creativeTitle}
                </h3>
              </div>
              <div>
                <p className="text-[13.3px] leading-[20px] text-[#898989] mb-3">
                  <span className="text-[#fafafa]">
                    {t.creativeDescription}
                  </span>
                </p>
                <ul className="space-y-0.5">
                  {t.creativeFeatures.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-[13.2px] text-[#fafafa]"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="#fafafa"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Management */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50 relative overflow-hidden group">
            <div className="bg-[#171717] rounded-[11px] p-4 sm:p-5 md:p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <svg
                  className="w-[18px] h-[18px]"
                  fill="none"
                  stroke="#fafafa"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
                <h3 className="text-[15.1px] leading-[24px] text-[#fafafa]">
                  {t.managementTitle}
                </h3>
              </div>
              <div>
                <p className="text-[13.3px] leading-[20px] text-[#898989] mb-3">
                  <span className="text-[#fafafa]">
                    {t.managementDescription}
                  </span>
                </p>
                <ul className="space-y-0.5">
                  {t.managementFeatures.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-[13.2px] text-[#fafafa]"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="#fafafa"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
