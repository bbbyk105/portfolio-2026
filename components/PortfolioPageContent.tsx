"use client";

import Image from "next/image";
import Link from "next/link";
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
      highlights: [
        "英語対応",
        "世界観設計",
        "インバウンド訴求",
        "展示会・商談ツール",
      ],
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
      url: "", // プレビューリンクをここに追加
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
      url: "", // プレビューリンクをここに追加
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
      url: "", // プレビューリンクをここに追加
      highlights: [
        "Face-to-Face Payment",
        "Instant Purchase",
        "Online/Offline Integration",
        "Trade Show Support",
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
  },
  en: {
    title: "Portfolio",
    description:
      "We introduce our achievements in websites, apps, and systems we have created.",
    highlights: "Key Highlights",
    viewSite: "View Site",
  },
};

export default function PortfolioPageContent() {
  const { language } = useLanguage();
  const portfolioItems = portfolioData[language];
  const t = translations[language];

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

        {/* 制作実績 - バリエーションのあるレイアウト */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {/* 1つ目: 横並びブロックスタイル */}
          <div className="group relative overflow-hidden rounded-lg border border-[#2e2e2e] bg-[#171717] hover:border-[#0ABAB5]/30 hover:bg-[#1a1a1a]">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-2/5 relative h-[250px] sm:h-[300px] lg:h-auto overflow-hidden bg-[#1a1a1a]">
                <Image
                  src={portfolioItems[0].image}
                  alt={portfolioItems[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full lg:w-3/5 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#fafafa] mb-2 sm:mb-3 group-hover:text-[#0ABAB5]">
                  {portfolioItems[0].title}
                </h2>
                <p className="text-sm sm:text-base text-[#d4d4d4] mb-3 sm:mb-4 leading-relaxed">
                  {portfolioItems[0].description}
                </p>
                <p className="text-xs sm:text-sm text-[#b4b4b4] mb-4 sm:mb-6 leading-relaxed">
                  {portfolioItems[0].fullDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {portfolioItems[0].highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs text-[#0ABAB5] bg-[#0ABAB5]/10 rounded border border-[#0ABAB5]/20"
                    >
                      <svg
                        className="w-3 h-3"
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
                {portfolioItems[0].url && (
                  <Link
                    href={portfolioItems[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm text-[#0ABAB5] border border-[#0ABAB5]/30 rounded-md hover:bg-[#0ABAB5]/10 w-fit"
                  >
                    <span>{t.viewSite}</span>
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* 2つ目以降: コンパクトグリッドスタイル */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {portfolioItems.slice(1, 3).map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg border border-[#2e2e2e] bg-[#171717] hover:border-[#0ABAB5]/50 hover:bg-[#1a1a1a]"
              >
                {/* 画像エリア */}
                <div className="relative h-[200px] sm:h-[240px] overflow-hidden bg-[#1a1a1a]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#171717]"></div>
                </div>

                {/* コンテンツエリア */}
                <div className="p-5 sm:p-6">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-2 group-hover:text-[#0ABAB5]">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#d4d4d4] mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-xs text-[#b4b4b4] mb-4 leading-relaxed line-clamp-3">
                    {item.fullDescription}
                  </p>
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
                      className="inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm text-[#0ABAB5] border border-[#0ABAB5]/30 rounded-md hover:bg-[#0ABAB5]/10 w-fit"
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

          {/* 4つ目: 単独表示（必要に応じて） */}
          {portfolioItems.length > 3 && (
            <div className="group relative overflow-hidden rounded-lg border border-[#2e2e2e] bg-[#171717] hover:border-[#0ABAB5]/50 hover:bg-[#1a1a1a]">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-2/5 relative h-[250px] sm:h-[300px] lg:h-auto overflow-hidden bg-[#1a1a1a]">
                  <Image
                    src={portfolioItems[3].image}
                    alt={portfolioItems[3].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full lg:w-3/5 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[#fafafa] mb-2 sm:mb-3 group-hover:text-[#0ABAB5]">
                    {portfolioItems[3].title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#d4d4d4] mb-3 sm:mb-4 leading-relaxed">
                    {portfolioItems[3].description}
                  </p>
                  <p className="text-xs sm:text-sm text-[#b4b4b4] mb-4 sm:mb-6 leading-relaxed">
                    {portfolioItems[3].fullDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {portfolioItems[3].highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs text-[#0ABAB5] bg-[#0ABAB5]/10 rounded border border-[#0ABAB5]/20"
                      >
                        <svg
                          className="w-3 h-3"
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
                  {portfolioItems[3].url && (
                    <Link
                      href={portfolioItems[3].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm text-[#0ABAB5] border border-[#0ABAB5]/30 rounded-md hover:bg-[#0ABAB5]/10 w-fit"
                    >
                      <span>{t.viewSite}</span>
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
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
