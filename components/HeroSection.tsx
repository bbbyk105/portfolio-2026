"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import dynamic from "next/dynamic";
import Link from "next/link";

const SplineBackground = dynamic(
  () => import("@/components/SplineBackground"),
  {
    ssr: false,
    loading: () => null,
  },
);

const translations = {
  en: {
    banner: "Latest Updates & Insights",
    description: [
      "Evimeria builds digital systems that create a competitive edge.",
      "Start with web and app development, then integrate workflow-driven",
      "operations, online advertising,",
      "and scalable dropshipping operations — all designed to drive real",
      "results.",
    ],
  },
  ja: {
    banner: "最新情報・インサイト",
    description: [
      "Evimeriaは競争優位性を生み出すデジタルシステムを構築します。",
      "Web開発とアプリ開発から始め、業務フローに基づいた",
      "自動化と広告運用を統合します。",
    ],
  },
};

export default function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      className="relative w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 min-h-[600px] sm:min-h-[700px] md:min-h-[800px]"
      style={{ overflow: "hidden" }}
    >
      {/* Spline 3Dモデルを背景として配置（中央〜やや右寄り、主役として維持） */}
      <div
        className="absolute inset-y-0 w-screen h-full"
        style={{ left: "50%", transform: "translateX(-50%)", zIndex: 0 }}
      >
        <SplineBackground />
      </div>

      {/* テキストコンテンツ（Desktop: 左下寄せ、Mobile: 中央寄せ） */}
      <div className="relative z-20 w-full h-full min-h-[600px] sm:min-h-[700px] md:min-h-[800px] flex items-center md:items-end justify-center md:justify-start px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 pointer-events-none">
        <div className="flex flex-col items-center md:items-start gap-4 sm:gap-6 md:gap-8 w-full md:w-auto max-w-[520px] pointer-events-auto">
          {/* Banner */}
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 py-1 rounded-full bg-gradient-to-b from-[#1f1f1f] to-[#292929] border border-[#292929] backdrop-blur-sm text-[10px] sm:text-xs md:text-sm text-[#fafafa] hover:bg-[#2e2e2e] transition-colors pointer-events-auto"
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
          </Link>

          {/* Heading */}
          <div className="flex flex-col items-center md:items-start gap-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[69px] leading-tight sm:leading-[48px] md:leading-[56px] lg:leading-[64px] xl:leading-[72px] font-medium text-[#fafafa] text-center md:text-left px-2 sm:px-4 md:px-0">
              Build the edge
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[69.6px] leading-tight sm:leading-[48px] md:leading-[56px] lg:leading-[64px] xl:leading-[72px] font-medium text-[#0ABAB5] text-center md:text-left px-2 sm:px-4 md:px-0">
              Where systems become leverage
            </h1>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base lg:text-[17.4px] leading-5 sm:leading-6 md:leading-7 lg:leading-[28px] text-[#fafafa] text-center md:text-left max-w-[520px] px-4 md:px-0">
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
        </div>
      </div>
    </section>
  );
}
