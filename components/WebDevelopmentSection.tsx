"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  ja: {
    title: "Web制作",
    description:
      "最新技術を活用し、使いやすく見やすいWebサイトを制作します。スマホ・PC対応、検索エンジン対策、表示速度の向上まで対応。",
    ecTitle: "ECサイト構築",
    ecDescription:
      "個人の用途に合わせたECサイトを作成します。Shopify、Stripe、Squareなど、あらゆる決済・プラットフォームをカスタマイズして構築できます。決済手数料以外の費用は一切かかりません。",
    ecFeatures: [
      "個人向けカスタマイズ対応",
      "Shopify・Stripe・Square対応",
      "レスポンシブデザイン",
      "決済システム統合",
    ],
    corporateTitle: "企業サイト制作",
    corporateDescription:
      "スマホ・PC対応の見やすいWebサイトを制作します。企業のブランディングを重視したデザインで、ユーザーにとって分かりやすく使いやすいサイトを構築します。SEO対策も含めて対応します。",
    lpTitle: "ランディングページ",
    lpDescription:
      "お問い合わせを増やすランディングページを制作します。ユーザーの行動を促す設計で、コンバージョン率の向上を目指します。A/Bテストにも対応可能です。",
  },
  en: {
    title: "Web Development",
    description:
      "We create user-friendly and visually appealing websites using the latest technologies. Mobile & PC compatible, SEO optimized, and performance-focused.",
    ecTitle: "E-commerce Development",
    ecDescription:
      "We create e-commerce sites tailored to individual needs. We can customize and integrate any payment platform including Shopify, Stripe, Square, and more. No fees except payment processing fees.",
    ecFeatures: [
      "Individual Customization",
      "Shopify, Stripe, Square Support",
      "Responsive Design",
      "Payment System Integration",
    ],
    corporateTitle: "Corporate Websites",
    corporateDescription:
      "We create user-friendly websites compatible with mobile and PC. We focus on branding with clear, easy-to-use designs. SEO optimization is included.",
    lpTitle: "Landing Pages",
    lpDescription:
      "We create landing pages that increase inquiries. Our designs encourage user action and aim to improve conversion rates. A/B testing is also available.",
  },
};

export default function WebDevelopmentSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const serviceItems = [
    {
      title: t.corporateTitle,
      description: t.corporateDescription,
    },
    {
      title: t.lpTitle,
      description: t.lpDescription,
    },
  ];

  return (
    <section
      id="web"
      className="w-full bg-[#171717] py-12 sm:py-16 md:py-20 lg:py-24"
    >
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

        {/* ECサイト詳細セクション */}
        <div className="mb-12 sm:mb-16">
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <svg
                  className="w-5 h-5 text-[#0ABAB5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <h3 className="text-xl sm:text-2xl font-medium text-[#fafafa]">
                  {t.ecTitle}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#d4d4d4] mb-4 leading-relaxed">
                {t.ecDescription}
              </p>
              {/* プラットフォームアイコン */}
              <div className="flex items-center gap-4 mb-6 flex-wrap">
                <Image
                  src="/top-logos/shopify.webp"
                  alt="Shopify"
                  width={64}
                  height={32}
                  className="object-contain opacity-70"
                />
                <Image
                  src="/top-logos/stripe.webp"
                  alt="Stripe"
                  width={64}
                  height={32}
                  className="object-contain opacity-70"
                />
                <Image
                  src="/logos/square.png"
                  alt="Square"
                  width={24}
                  height={32}
                  className="object-contain opacity-70"
                />
                <span className="text-sm text-[#898989] ml-1">
                  {language === "ja" ? "+ その他" : "+ More"}
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {t.ecFeatures.map((feature, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm text-[#0ABAB5] bg-[#0ABAB5]/10 rounded-lg border border-[#0ABAB5]/20"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
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
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* その他のWeb制作 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {serviceItems.map((item, index) => (
            <div
              key={index}
              className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50"
            >
              <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <svg
                    className="w-5 h-5 text-[#0ABAB5]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  <h3 className="text-lg sm:text-xl font-medium text-[#fafafa]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
