"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  ja: {
    label: "Our Services",
    title: "事業内容",
    description:
      "Web制作からアプリ開発、広告運用、AI自動化まで、デジタルビジネスの成長を包括的にサポートします。",
  },
  en: {
    label: "Our Services",
    title: "Services",
    description:
      "We comprehensively support digital business growth from web development, app development, advertising management, to AI automation.",
  },
};

export default function SolutionsHero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mb-8 sm:mb-12">
        <p className="text-[10px] sm:text-xs md:text-sm text-[#898989] uppercase tracking-wider mb-3 sm:mb-4">
          {t.label}
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] leading-7 sm:leading-8 md:leading-9 lg:leading-10 xl:leading-[60px] text-[#fafafa] mb-4 sm:mb-6">
          {t.title}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#b4b4b4] max-w-3xl">
          {t.description}
        </p>
      </div>
    </section>
  );
}

