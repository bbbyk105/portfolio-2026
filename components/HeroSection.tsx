"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  en: {
    banner: "Supabase Wrapped 2025: The year in review",
    description: [
      "Evimería builds digital systems that create a competitive edge.",
      "Start with web and app development, then integrate n8n-powered",
      "automation, Meta advertising,",
      "and scalable dropshipping operations — all designed to drive real",
      "results.",
    ],
    cta1: "Start your project",
    cta2: "Request a demo",
  },
  ja: {
    banner: "Supabase Wrapped 2025: 年間レビュー",
    description: [
      "Evimeríaは競争優位性を生み出すデジタルシステムを構築します。",
      "Web開発とアプリ開発から始め、n8nを活用した",
      "自動化、Meta広告運用を統合します。",
    ],
    cta1: "プロジェクトを始める",
    cta2: "デモをリクエスト",
  },
};

export default function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-[432px] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative">
      <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-[90px]">
        {/* Banner */}
        <a
          href="https://supabase.com/wrapped"
          className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-1 rounded-full bg-gradient-to-b from-[#1f1f1f] to-[#292929] border border-[#292929] backdrop-blur-sm text-[10px] sm:text-xs md:text-sm text-[#fafafa] hover:bg-[#2e2e2e] transition-colors"
        >
          <span className="whitespace-nowrap">{t.banner}</span>
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>

        {/* Heading */}
        <div className="flex flex-col items-center gap-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[69px] leading-tight sm:leading-[48px] md:leading-[56px] lg:leading-[64px] xl:leading-[72px] font-medium text-[#fafafa] text-center px-2 sm:px-4">
            Build the edge
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[69.6px] leading-tight sm:leading-[48px] md:leading-[56px] lg:leading-[64px] xl:leading-[72px] font-medium text-[#0ABAB5] text-center px-2 sm:px-4">
            Where systems become leverage
          </h1>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm md:text-base lg:text-[17.4px] leading-5 sm:leading-6 md:leading-7 lg:leading-[28px] text-[#fafafa] text-center max-w-[576px] px-4">
          {t.description[0]}
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          {t.description[1]}
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          {t.description[2]}
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          {t.description[3]}
          {t.description[4]}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 px-4 w-full sm:w-auto">
          <a
            href="https://supabase.com/dashboard"
            className="w-full sm:w-auto px-4 sm:px-[17px] py-2 sm:py-[9px] bg-[#078A85] border border-[rgba(10,186,181,0.3)] rounded-md text-xs sm:text-[13.8px] text-[#fafafa] hover:bg-[#089A95] transition-colors text-center"
          >
            {t.cta1}
          </a>
          <a
            href="https://supabase.com/contact/sales"
            className="w-full sm:w-auto px-4 sm:px-[17px] py-2 sm:py-[9px] bg-[#242424] border border-[#363636] rounded-md text-xs sm:text-[13.3px] text-[#fafafa] hover:bg-[#2e2e2e] transition-colors text-center"
          >
            {t.cta2}
          </a>
        </div>
      </div>
    </section>
  );
}
