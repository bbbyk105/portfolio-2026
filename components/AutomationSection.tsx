"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const getExampleIcon = (index: number) => {
  const icons = [
    // データ連携
    <svg
      key={0}
      className="w-5 h-5 text-[#0ABAB5]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
      />
    </svg>,
    // 通知
    <svg
      key={1}
      className="w-5 h-5 text-[#0ABAB5]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    </svg>,
    // 受注管理
    <svg
      key={2}
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
    </svg>,
    // SNS
    <svg
      key={3}
      className="w-5 h-5 text-[#0ABAB5]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
      />
    </svg>,
    // カレンダー
    <svg
      key={4}
      className="w-5 h-5 text-[#0ABAB5]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>,
    // フォーム
    <svg
      key={5}
      className="w-5 h-5 text-[#0ABAB5]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>,
  ];
  return icons[index] || icons[0];
};

const automationExamples = {
  ja: [
    {
      title: "データ連携・同期",
      description:
        "Googleスプレッドシート、Notion、Airtableなど、複数のサービス間でのデータ自動同期と連携を実現します。",
    },
    {
      title: "通知・レポート自動化",
      description:
        "定期的なレポート生成やSlack、メール、LINEへの通知を自動送信します。",
    },
    {
      title: "受注管理の自動化",
      description:
        "ECサイトの注文を自動でスプレッドシートや在庫管理システムに連携し、受注処理を効率化します。",
    },
    {
      title: "SNS投稿の自動化",
      description:
        "ブログ更新や新商品情報を自動でSNS（X、Instagram、Facebook）に投稿します。",
    },
    {
      title: "カレンダー連携",
      description:
        "Googleカレンダーや予約システムと連携し、スケジュール管理やリマインダーを自動化します。",
    },
    {
      title: "フォーム回答の処理",
      description:
        "お問い合わせフォームの回答を自動でメール送信、データベース保存、担当者への通知を行います。",
    },
  ],
  en: [
    {
      title: "Data Integration & Sync",
      description:
        "Automatically sync and integrate data between multiple services like Google Sheets, Notion, Airtable, and more.",
    },
    {
      title: "Notification & Report Automation",
      description:
        "Automatically generate regular reports and send notifications to Slack, email, LINE, and more.",
    },
    {
      title: "Order Management Automation",
      description:
        "Automatically sync e-commerce orders to spreadsheets and inventory management systems to streamline order processing.",
    },
    {
      title: "Social Media Automation",
      description:
        "Automatically post blog updates and new product information to social media (X, Instagram, Facebook).",
    },
    {
      title: "Calendar Integration",
      description:
        "Integrate with Google Calendar and booking systems to automate schedule management and reminders.",
    },
    {
      title: "Form Response Processing",
      description:
        "Automatically process contact form responses by sending emails, saving to database, and notifying team members.",
    },
  ],
};

const translations = {
  ja: {
    title: "AIによる自動化",
    description:
      "n8nを活用した業務プロセスの自動化を実現します。データ連携、作業の自動化、AI統合により、効率的な業務運用を実現します。",
    mainTitle: "ワークフロー自動化",
    mainDescription:
      "n8nを使用して、業務プロセスの自動化と統合を行います。繰り返し作業を自動化し、業務効率を大幅に向上させます。API連携により、様々なサービスとデータを連携し、カスタムワークフローを構築できます。",
    aiTitle: "AI統合・自動化",
    aiDescription:
      "AI技術を活用した業務自動化を実現します。チャットボットや自動応答システムなど、AIを活用した業務効率化をサポートします。自然言語処理や機械学習を組み合わせることで、より高度な自動化が可能です。",
    features: ["データ連携・同期", "API統合", "カスタムワークフロー構築"],
    aiFeatures: [
      "AIチャットボット統合",
      "自動応答システム",
      "データ分析・処理自動化",
    ],
    examplesTitle: "自動化の例",
  },
  en: {
    title: "AI Automation",
    description:
      "We automate business processes using n8n. Achieve efficient business operations through data integration, workflow automation, and AI integration.",
    mainTitle: "Workflow Automation",
    mainDescription:
      "We automate and integrate business processes using n8n. Automate repetitive tasks and significantly improve operational efficiency. Through API integration, we can connect various services and data to build custom workflows.",
    aiTitle: "AI Integration & Automation",
    aiDescription:
      "We achieve business automation using AI technology. We support business efficiency through AI-powered chatbots and automated response systems. By combining natural language processing and machine learning, more advanced automation is possible.",
    features: [
      "Data Integration & Sync",
      "API Integration",
      "Custom Workflow Building",
    ],
    aiFeatures: [
      "AI Chatbot Integration",
      "Automated Response Systems",
      "Data Analysis & Processing Automation",
    ],
    examplesTitle: "Automation Examples",
  },
};

export default function AutomationSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const examples = automationExamples[language];

  return (
    <section
      id="automation"
      className="w-full py-12 sm:py-16 md:py-20 lg:py-24"
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

        {/* メインカード */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <h3 className="text-lg sm:text-xl font-medium text-[#fafafa]">
                  {t.mainTitle}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#d4d4d4] mb-6 leading-relaxed">
                {t.mainDescription}
              </p>
              <ul className="space-y-2">
                {t.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm text-[#fafafa]"
                  >
                    <svg
                      className="w-5 h-5 text-[#0ABAB5] flex-shrink-0"
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
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* AI統合カード */}
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                <h3 className="text-lg sm:text-xl font-medium text-[#fafafa]">
                  {t.aiTitle}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-[#d4d4d4] mb-6 leading-relaxed">
                {t.aiDescription}
              </p>
              <ul className="space-y-2">
                {t.aiFeatures.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm text-[#fafafa]"
                  >
                    <svg
                      className="w-5 h-5 text-[#0ABAB5] flex-shrink-0"
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
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 自動化の例 */}
        <div className="mb-6">
          <h3 className="text-lg sm:text-xl font-medium text-[#fafafa] mb-6">
            {t.examplesTitle}
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {examples.map((example, index) => (
            <div
              key={index}
              className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50"
            >
              <div className="bg-[#171717] rounded-[11px] p-5 sm:p-6 md:p-7 flex flex-col h-full">
                <div className="w-10 h-10 rounded-lg bg-[#0ABAB5]/10 border border-[#0ABAB5]/20 flex items-center justify-center mb-4">
                  {getExampleIcon(index)}
                </div>
                <h4 className="text-base sm:text-lg font-medium text-[#fafafa] mb-3">
                  {example.title}
                </h4>
                <p className="text-sm text-[#d4d4d4] leading-relaxed flex-1">
                  {example.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
