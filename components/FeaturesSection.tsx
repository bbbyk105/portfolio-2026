const features = [
  {
    title: "Web制作",
    description: "最新技術を活用したWebサイト制作を行います。企業サイト、ECサイト、ランディングページなど、あらゆるWebサイトに対応します。",
    features: ["スマホ・PC対応", "検索エンジン対策", "表示速度の向上"],
    icon: (
      <svg
        className="w-5 h-5"
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
    ),
    href: "/solutions#web",
  },
  {
    title: "アプリ制作",
    description: "スマートフォンアプリ（iPhone・Android）やWebアプリの開発まで幅広く対応します。",
    features: ["iOS/Android対応", "Webアプリ開発", "クロスプラットフォーム"],
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    href: "/solutions#app",
  },
  {
    title: "Meta広告代理",
    description: "戦略立案から運用、最適化まで一貫してサポートします。",
    features: ["広告戦略立案", "クリエイティブ制作", "運用・最適化"],
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    href: "/solutions#meta",
  },
  {
    title: "AI自動化",
    description: "AI技術を活用した業務プロセスの自動化を実現します。繰り返し作業を自動化し、業務効率を大幅に向上させます。",
    features: ["ワークフロー自動化", "AI統合", "データ連携"],
    icon: (
      <svg
        className="w-5 h-5"
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
    ),
    href: "/solutions#automation",
  },
  {
    title: "デジタル戦略",
    description: "ビジネス成長を加速するデジタル戦略の立案と実行をサポートします。",
    features: ["戦略立案", "実行支援", "効果測定"],
    icon: (
      <svg
        className="w-5 h-5"
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
    ),
    href: "/solutions#strategy",
  },
  {
    title: "継続サポート",
    description: "制作後の運用・保守・改善まで、長期的なサポートを提供します。",
    features: ["運用サポート", "保守・メンテナンス", "継続的改善"],
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    href: "/solutions#support",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#0ABAB5]"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#fafafa]">
              包括的なデジタルソリューション
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-[#b4b4b4] max-w-3xl ml-4">
            Web制作からアプリ開発、広告運用、AI自動化まで、すべてのサービスを統合的に提供。
            お客様のビジネス成長を包括的にサポートします。
          </p>
        </div>

        {/* おしゃれなグリッドレイアウト */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature, index) => (
            <a
              key={index}
              href={feature.href}
              className="group relative h-full min-h-[280px] sm:min-h-[300px] rounded-lg border border-[#2e2e2e] bg-[#171717] p-6 sm:p-7 md:p-8 flex flex-col transition-all duration-300 hover:border-[#0ABAB5]/50 hover:bg-[#1a1a1a]"
            >
              {/* アイコン */}
              <div className="mb-4 w-12 h-12 rounded-lg bg-[#0ABAB5]/10 border border-[#0ABAB5]/20 flex items-center justify-center text-[#0ABAB5] transition-all duration-300 group-hover:bg-[#0ABAB5]/20 group-hover:border-[#0ABAB5]/40 group-hover:scale-110">
                {feature.icon}
              </div>

              {/* タイトル */}
              <h3 className="text-lg sm:text-xl font-medium text-[#fafafa] mb-3 transition-colors duration-300 group-hover:text-[#0ABAB5]">
                {feature.title}
              </h3>

              {/* 説明 */}
              <p className="text-sm sm:text-base text-[#898989] mb-4 leading-relaxed flex-1">
                {feature.description}
              </p>

              {/* 機能リスト */}
              <ul className="space-y-2">
                {feature.features.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-[#b4b4b4]"
                  >
                    <svg
                      className="w-4 h-4 text-[#0ABAB5] flex-shrink-0"
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
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* ホバー時の矢印 */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-5 h-5 text-[#0ABAB5] transition-transform duration-300 group-hover:translate-x-1"
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
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
