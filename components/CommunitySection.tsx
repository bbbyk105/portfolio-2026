"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const faqsData = {
  ja: [
    {
      id: 1,
      question: "Webサイト制作の料金はどのくらいかかりますか？",
      answer:
        "プロジェクトの規模や要件によって異なります。企業サイトで10万円〜、ECサイトで30万円〜が目安です。まずはお気軽にお問い合わせください。",
    },
    {
      id: 2,
      question: "アプリ開発にはどのくらいの期間が必要ですか？",
      answer:
        "アプリの種類や機能によって異なりますが、シンプルなアプリで1〜2ヶ月、機能が豊富なアプリで6ヶ月〜1年程度が目安です。詳細はヒアリング時にご提案いたします。",
    },
    {
      id: 3,
      question: "既存のWebサイトのリニューアルも対応可能ですか？",
      answer:
        "はい、対応可能です。既存サイトの分析から、最新技術を活用したリニューアルまで一貫してサポートいたします。SEO対策や表示速度の改善も同時に行います。",
    },
    {
      id: 4,
      question: "制作後のサポートはありますか？",
      answer:
        "はい、制作後の運用・保守・改善まで長期的にサポートいたします。定期的なメンテナンスプランもご用意していますので、お気軽にご相談ください。",
    },
    {
      id: 5,
      question: "デジタルマーケティングの運用費用はどのくらいかかりますか？",
      answer:
        "マーケティング予算と運用費用は別途となります。運用費用は月額5万円〜が目安です。マーケティング予算はお客様の目標に合わせて最適な金額をご提案いたします。",
    },
    {
      id: 6,
      question: "AI業務効率化システムの導入にはどのような準備が必要ですか？",
      answer:
        "現在の業務フローや使用しているツールの情報があれば十分です。ヒアリング時に最適な業務効率化プランをご提案し、段階的に導入を進めることができます。",
    },
    {
      id: 7,
      question: "リモートでの打ち合わせや開発は可能ですか？",
      answer:
        "はい、完全リモートでの対応も可能です。オンラインミーティングツールを活用し、全国どこからでもご利用いただけます。",
    },
    {
      id: 8,
      question: "お見積もりは無料ですか？",
      answer:
        "はい、お見積もりは無料です。まずはお気軽にお問い合わせください。プロジェクトの内容を詳しくお聞きし、最適なプランをご提案いたします。",
    },
  ],
  en: [
    {
      id: 1,
      question: "How much does website development cost?",
      answer:
        "It varies depending on the project scale and requirements. Corporate sites start from around 100,000 yen, and e-commerce sites from around 300,000 yen. Please feel free to contact us for more information.",
    },
    {
      id: 2,
      question: "How long does app development take?",
      answer:
        "It varies depending on the app type and features, but simple apps typically take 1-2 months, while feature-rich apps take around 6 months to 1 year. We will provide detailed proposals during the consultation.",
    },
    {
      id: 3,
      question: "Can you handle website renewal/redesign?",
      answer:
        "Yes, we can. We provide comprehensive support from analyzing existing sites to renewals using the latest technologies. We also improve SEO and page load speeds simultaneously.",
    },
    {
      id: 4,
      question: "Do you provide support after development?",
      answer:
        "Yes, we provide long-term support including operation, maintenance, and improvements after development. We also offer regular maintenance plans, so please feel free to consult with us.",
    },
    {
      id: 5,
      question: "How much does digital marketing management cost?",
      answer:
        "Marketing budget and operational fees are separate. Operational fees start from around 50,000 yen per month. We will propose the optimal marketing budget based on your goals.",
    },
    {
      id: 6,
      question:
        "What preparation is needed for AI operations system introduction?",
      answer:
        "Information about your current business flow and tools you use is sufficient. We will propose the optimal process improvement plan during consultation and proceed with gradual introduction.",
    },
    {
      id: 7,
      question: "Is remote meetings and development possible?",
      answer:
        "Yes, we can handle everything remotely. We utilize online meeting tools, so you can use our services from anywhere in the country.",
    },
    {
      id: 8,
      question: "Are estimates free?",
      answer:
        "Yes, estimates are free. Please feel free to contact us. We will listen to your project details and propose the optimal plan.",
    },
  ],
};

const translations = {
  ja: {
    title: "よくある質問",
    description: "お客様からよくいただく質問と回答をご紹介します。",
  },
  en: {
    title: "Frequently Asked Questions",
    description:
      "We introduce frequently asked questions and answers from our clients.",
  },
};

export default function CommunitySection() {
  const { language } = useLanguage();
  const faqs = faqsData[language];
  const t = translations[language];
  const [openIds, setOpenIds] = useState<number[]>([]);

  const toggleFAQ = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id)
        ? prev.filter((openId) => openId !== id)
        : [...prev, id],
    );
  };

  return (
    <section
      id="faq"
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

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-[#2e2e2e] rounded-lg bg-[#171717] overflow-hidden transition-all duration-300 hover:border-[#0ABAB5]/30"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-between text-left gap-4 group"
              >
                <h3 className="text-sm sm:text-base md:text-lg font-medium text-[#fafafa] flex-1 group-hover:text-[#0ABAB5] transition-colors duration-300">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-[#0ABAB5] shrink-0 transition-transform duration-300 ${
                    openIds.includes(faq.id) ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIds.includes(faq.id)
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6 pt-0">
                  <p className="text-sm sm:text-base text-[#b4b4b4] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
