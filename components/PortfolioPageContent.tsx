"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const portfolioData = {
  ja: [
    {
      id: 1,
      title: "学習院大学 DSA（Distance-based Structural Analysis）",
      description: "タンパク質構造解析Webシステム",
      fullDescription:
        "学習院大学における研究プロジェクトとして、タンパク質構造の距離解析を行う DSA（Distance-based Structural Analysis） システムの設計・実装を担当しました。従来はローカル環境で行われていた解析フローをWeb上で完結できるよう再構築し、解析の自動化・可視化・再現性の向上を実現しています。研究者が直感的に操作できるUI設計を意識し、解析ジョブの管理、結果の可視化、履歴保存までを一貫して行える構成を採用しました。これにより、研究効率の向上だけでなく、将来的な共同研究や解析手法の展開にも対応可能な基盤として活用されています。",
      image: "/portfolio/pdb.png",
      url: "", // プレビューリンクをここに追加
      highlights: [
        "Web化・自動化",
        "可視化機能",
        "再現性の向上",
        "直感的なUI設計",
        "研究効率向上",
        "共同研究対応",
      ],
    },
    {
      id: 2,
      title: "聚楽苑",
      description: "有機抹茶・有機茶を生産するお茶農家様のECサイト兼LP",
      fullDescription:
        "富士市で有機抹茶・有機茶を生産するお茶農家様のECサイト兼LPの制作を担当しました。海外ユーザーにも伝わる構成を意識した設計により、外国人からの問い合わせ獲得や、海外展示会での紹介ツールとして活用されるなど、インバウンド向けの集客に成功しました。",
      image: "/portfolio/jurakuen.png",
      url: "https://www.jurakuen.com/", // プレビューリンクをここに追加
      highlights: [
        "インバウンド向け集客",
        "海外展示会対応",
        "多言語対応設計",
        "EC機能統合",
      ],
    },
    {
      id: 3,
      title: "yawn & nap",
      description: "富士山麓のヒノキを使用したフレグランスブランドのLP",
      fullDescription:
        "富士山麓のヒノキを使用したフレグランスブランドのLPを制作。英語対応・世界観設計により、インバウンド向け訴求および海外展示会・商談時の紹介ツールとして活用されています。",
      image: "/portfolio/yawnlp.png",
      url: "https://www.hinokifragrance.com/", // プレビューリンクをここに追加
      highlights: ["英語対応", "インバウンド訴求", "展示会・商談ツール"],
    },
    {
      id: 4,
      title: "yawn & nap",
      description: "展示会・イベントでの直接販売に対応したECサイト",
      fullDescription:
        "展示会・イベントでの直接販売に対応したECサイトを新たに構築。対面決済・即時購入が可能な仕組みを実装し、オンライン／オフラインを横断した販売体験を実現しました。",
      image: "/portfolio/yawnec.png",
      url: "https://www.yawnnap.shop/", // プレビューリンクをここに追加
      highlights: [
        "対面決済対応",
        "即時購入機能",
        "オンライン/オフライン統合",
        "展示会・イベント対応",
      ],
    },
    {
      id: 5,
      title: "evimeria home",
      description: "家具やライトを専門としたアメリカ向けECサイト",
      fullDescription:
        "家具やライトを専門としたアメリカ市場向けのECサイトを制作しました。スタイリッシュで機能的なデザインを重視し、アメリカの顧客の購買行動に最適化したユーザー体験を実現。レスポンシブデザインと高速な表示速度により、モバイル・デスクトップ両方での快適なショッピング体験を提供しています。",
      image: "/portfolio/ec.png", // 後でevimeria home用の画像に変更してください
      url: "https://www.evimeriahome.com/", // プレビューリンクをここに追加
      highlights: [
        "アメリカ市場向け最適化",
        "家具・ライト専門EC",
        "レスポンシブデザイン",
        "高速表示・UX最適化",
      ],
    },
    {
      id: 6,
      title: "天地星空（あまちほしそら）",
      description: "富士山麓の水と山田錦を使った高級純米大吟醸のブランドサイト",
      fullDescription:
        "富士山麓を拠点に醸される高級純米大吟醸「天地星空」のブランドサイトを制作しました。富士山の清らかな伏流水と、日本酒造りに適した酒米（山田錦100％）を使用した逸品を世界に紹介するため、海外市場向けの高級日本酒として開発・販売される銘柄の特徴を活かした設計を採用。インバウンド向け訴求や海外展示会・商談時の紹介ツールとして活用されています。",
      image: "/portfolio/amachi.webp",
      url: "https://www.mtfuji-sake-aus.com/",
      highlights: [
        "海外市場向け高級日本酒",
        "インバウンド訴求",
        "多言語対応設計",
        "ブランドサイト",
      ],
    },
  ],
  en: [
    {
      id: 1,
      title: "Gakushuin University DSA (Distance-based Structural Analysis)",
      description: "Protein Structure Analysis Web System",
      fullDescription:
        "As a research project at Gakushuin University, I was responsible for the design and implementation of the DSA (Distance-based Structural Analysis) system for protein structure distance analysis. I restructured the analysis workflow, which was previously performed in local environments, to be completed entirely on the web, achieving automation, visualization, and improved reproducibility of analysis. With a focus on intuitive UI design for researchers, I adopted a configuration that enables consistent management of analysis jobs, visualization of results, and history saving. This not only improves research efficiency but also serves as a foundation that can support future collaborative research and expansion of analysis methods.",
      image: "/portfolio/pdb.png",
      url: "", // プレビューリンクをここに追加
      highlights: [
        "Web-based & Automation",
        "Visualization Features",
        "Reproducibility Improvement",
        "Intuitive UI Design",
        "Research Efficiency",
        "Collaborative Research Support",
      ],
    },
    {
      id: 2,
      title: "Jurakuen E-commerce & Landing Page",
      description:
        "E-commerce site and landing page for organic matcha and tea producer",
      fullDescription:
        "We developed an e-commerce site and landing page for an organic matcha and tea producer in Fuji City. The design, focused on communicating effectively to international users, successfully attracted inbound inquiries and served as a promotional tool at overseas trade shows.",
      image: "/portfolio/jurakuen.png",
      url: "https://www.jurakuen.com/", // プレビューリンクをここに追加
      highlights: [
        "Inbound Marketing",
        "Trade Show Support",
        "Multilingual Design",
        "E-commerce Integration",
      ],
    },
    {
      id: 3,
      title: "yawn & nap Landing Page",
      description:
        "Landing page for fragrance brand using cypress from Mount Fuji",
      fullDescription:
        "We created a landing page for a fragrance brand using cypress from Mount Fuji. With English support and world-class design, it serves as an inbound marketing tool and promotional material for trade shows and business meetings.",
      image: "/portfolio/yawnlp.png",
      url: "https://www.hinokifragrance.com/", // プレビューリンクをここに追加
      highlights: [
        "English Support",
        "World-Class Design",
        "Inbound Appeal",
        "Trade Show Tool",
      ],
    },
    {
      id: 4,
      title: "yawn & nap E-commerce",
      description:
        "E-commerce site supporting direct sales at trade shows and events",
      fullDescription:
        "We newly built an e-commerce site supporting direct sales at trade shows and events. We implemented a system enabling face-to-face payment and instant purchase, achieving a seamless sales experience across online and offline channels.",
      image: "/portfolio/yawnec.png",
      url: "https://www.yawnnap.shop/", // プレビューリンクをここに追加
      highlights: [
        "Face-to-Face Payment",
        "Instant Purchase",
        "Online/Offline Integration",
      ],
    },
    {
      id: 5,
      title: "evimeria home",
      description:
        "E-commerce site specializing in furniture and lighting for the US market",
      fullDescription:
        "We created an e-commerce site specializing in furniture and lighting for the US market. With a focus on stylish and functional design, we optimized the user experience for American customer purchasing behavior. Through responsive design and fast loading times, we provide a comfortable shopping experience on both mobile and desktop devices.",
      image: "/portfolio/ec.png", // Please change to evimeria home image later
      url: "https://www.evimeriahome.com/", // プレビューリンクをここに追加
      highlights: [
        "US Market Optimization",
        "Furniture & Lighting Specialized",
        "Responsive Design",
        "Fast Loading & UX Optimization",
      ],
    },
    {
      id: 6,
      title: "Amachi Hoshisora (天地星空)",
      description:
        "Brand site for premium Junmai Daiginjo sake brewed with Mount Fuji water and Yamada Nishiki rice",
      fullDescription:
        "We created a brand site for Amachi Hoshisora, a premium Junmai Daiginjo sake brewed at the foot of Mount Fuji. The site introduces this exquisite sake made with Mount Fuji's pure underground water and 100% Yamada Nishiki rice to the world. Designed as a premium Japanese sake for the overseas market, the site serves as an inbound marketing tool and promotional material for trade shows and business meetings.",
      image: "/portfolio/amachi.webp",
      url: "https://www.mtfuji-sake-aus.com/",
      highlights: [
        "Premium Sake for Overseas Market",
        "Inbound Appeal",
        "Multilingual Design",
        "Brand Site",
      ],
    },
  ],
};

const translations = {
  ja: {
    title: "制作実績",
    description:
      "これまでに制作したWebサイト、アプリ、システムの実績をご紹介します。",
    highlights: "主な特徴",
    viewSite: "サイトを見る",
    previous: "前へ",
    next: "次へ",
    readMore: "詳しく見る",
    readLess: "閉じる",
  },
  en: {
    title: "Portfolio",
    description:
      "We introduce our achievements in websites, apps, and systems we have created.",
    highlights: "Key Highlights",
    viewSite: "View Site",
    previous: "Previous",
    next: "Next",
    readMore: "Read More",
    readLess: "Read Less",
  },
};

export default function PortfolioPageContent() {
  const { language } = useLanguage();
  const allItems = portfolioData[language];
  const t = translations[language];

  // 1ページ目に表示する順序: 学習院大学、聚楽苑、evimeria home
  const orderedItems = [
    allItems.find((item) => item.id === 1), // 学習院大学
    allItems.find((item) => item.id === 2), // 聚楽苑
    allItems.find((item) => item.id === 5), // evimeria home
    allItems.find((item) => item.id === 3), // yawn & nap LP
    allItems.find((item) => item.id === 4), // yawn & nap EC
    allItems.find((item) => item.id === 6), // 天地星空
  ].filter(Boolean) as typeof allItems;

  const itemsPerPage = 3;
  const totalPages = Math.ceil(orderedItems.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = orderedItems.slice(startIndex, endIndex);

  // ページ変更時にトップまでスクロール
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const toggleExpand = (itemId: number) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const isExpanded = (itemId: number) => expandedItems.has(itemId);

  return (
    <section className="w-full bg-[#121212] min-h-screen py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        {/* ヘッダー */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#0ABAB5]"></div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#fafafa]">
              {t.title}
            </h1>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-[#b4b4b4] max-w-3xl ml-4">
            {t.description}
          </p>
        </div>

        {/* 制作実績 - グリッドレイアウト */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg border border-[#2e2e2e] bg-[#171717] hover:border-[#0ABAB5]/50 hover:bg-[#1a1a1a] transition-all"
            >
              {/* 画像エリア */}
              <div className="relative h-[200px] sm:h-[240px] md:h-[280px] overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-4"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#171717] pointer-events-none"></div>
              </div>

              {/* コンテンツエリア */}
              <div className="p-5 sm:p-6">
                <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-2 group-hover:text-[#0ABAB5] transition-colors">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#d4d4d4] mb-3 leading-relaxed">
                  {item.description}
                </p>
                <div className="mb-4">
                  <p
                    className={`text-xs sm:text-sm text-[#b4b4b4] leading-relaxed transition-all ${
                      isExpanded(item.id) ? "" : "line-clamp-3"
                    }`}
                  >
                    {item.fullDescription}
                  </p>
                  {item.fullDescription.length > 100 && (
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="mt-2 text-xs sm:text-sm text-[#0ABAB5] hover:text-[#0ABAB5]/80 transition-colors flex items-center gap-1"
                    >
                      {isExpanded(item.id) ? t.readLess : t.readMore}
                      <svg
                        className={`w-3.5 h-3.5 transition-transform ${
                          isExpanded(item.id) ? "rotate-180" : ""
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
                  )}
                </div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.highlights.slice(0, 3).map((highlight, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] sm:text-xs text-[#0ABAB5] bg-[#0ABAB5]/10 rounded border border-[#0ABAB5]/20"
                    >
                      <svg
                        className="w-2.5 h-2.5"
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
                      {highlight}
                    </span>
                  ))}
                </div>
                {item.url && (
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm text-[#0ABAB5] border border-[#0ABAB5]/30 rounded-md hover:bg-[#0ABAB5]/10 w-fit transition-colors"
                  >
                    <span>{t.viewSite}</span>
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ページネーション */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`px-4 py-2 text-sm font-medium rounded-md border transition-all ${
                currentPage === 1
                  ? "border-[#2e2e2e] text-[#898989] cursor-not-allowed"
                  : "border-[#0ABAB5]/30 text-[#0ABAB5] hover:bg-[#0ABAB5]/10"
              }`}
            >
              {t.previous}
            </button>

            <div className="flex items-center gap-1 sm:gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    className={`w-8 h-8 sm:w-10 sm:h-10 text-sm font-medium rounded-md border transition-all ${
                      currentPage === page
                        ? "bg-[#0ABAB5] border-[#0ABAB5] text-[#121212]"
                        : "border-[#2e2e2e] text-[#fafafa] hover:border-[#0ABAB5]/50 hover:bg-[#0ABAB5]/10"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}
            </div>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 text-sm font-medium rounded-md border transition-all ${
                currentPage === totalPages
                  ? "border-[#2e2e2e] text-[#898989] cursor-not-allowed"
                  : "border-[#0ABAB5]/30 text-[#0ABAB5] hover:bg-[#0ABAB5]/10"
              }`}
            >
              {t.next}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
