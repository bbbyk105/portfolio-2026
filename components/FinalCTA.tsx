"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  ja: {
    title1: "プロジェクトのご相談、",
    title2: "お気軽にお問い合わせください",
    description: "お見積もりは無料です。まずはお気軽にご相談ください。",
    contact: "お問い合わせ",
  },
  en: {
    title1: "For project consultation,",
    title2: "please feel free to contact us",
    description:
      "Estimates are free. Please feel free to consult with us first.",
    contact: "Contact Us",
  },
};

export default function FinalCTA() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="bg-[#121212] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="max-w-[1536px] mx-auto flex flex-col items-center gap-3 sm:gap-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[34.6px] leading-7 sm:leading-8 md:leading-9 lg:leading-10 xl:leading-[43.2px] text-center px-4">
          <span className="text-[#898989]">{t.title1}</span>
          <span className="text-[#fafafa]"> {t.title2}</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#b4b4b4] text-center max-w-2xl px-4">
          {t.description}
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 px-4 w-full sm:w-auto mt-2">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-4 sm:px-[17px] py-2 sm:py-[9px] bg-[#078A85] border border-[rgba(10,186,181,0.3)] rounded-md text-xs sm:text-[13.8px] text-[#fafafa] hover:bg-[#089A95] transition-colors text-center"
          >
            {t.contact}
          </Link>
        </div>
      </div>
    </section>
  );
}
