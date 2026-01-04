import Image from "next/image";

const portfolioItems = [
  {
    id: 1,
    title: "企業サイト制作",
    description: "スマホ・PC対応の見やすいWebサイト",
    category: "Web制作",
    image: "/images/web.png",
  },
  {
    id: 2,
    title: "ECサイト構築",
    description: "高速で使いやすいネットショップ",
    category: "Web制作",
    image: "/images/ec.png",
  },
  {
    id: 3,
    title: "iOSアプリ開発",
    description: "App Store公開対応のiPhoneアプリ",
    category: "アプリ制作",
    image: "/images/apple.jpg",
  },
  {
    id: 4,
    title: "Androidアプリ開発",
    description: "Google Play公開対応のAndroidアプリ",
    category: "アプリ制作",
    image: "/images/android.png",
  },
  {
    id: 5,
    title: "Meta広告運用",
    description: "効果的な広告戦略と運用",
    category: "広告運用",
    image: "/top-logos/meta.png",
  },
  {
    id: 6,
    title: "AI自動化システム",
    description: "業務プロセスの自動化と統合",
    category: "AI自動化",
    image: "/images/node.png",
  },
];

export default function PortfolioSection() {
  return (
    <section className="w-full bg-[#171717] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#3ecf8e]"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#fafafa]">
              制作実績
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-[#b4b4b4] max-w-3xl ml-4 mb-4">
            これまでに制作したWebサイト、アプリ、システムの実績をご紹介します。
          </p>
        </div>

        {/* 統一されたグリッドレイアウト */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {portfolioItems.map((item) => (
            <a
              key={item.id}
              href={`/portfolio/${item.id}`}
              className="group relative h-[400px] sm:h-[420px] md:h-[450px] overflow-hidden rounded-lg border border-[#2e2e2e] bg-[#1a1a1a] transition-all duration-300 hover:border-[#3ecf8e]/50"
            >
              {/* 画像背景 */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="max-w-full max-h-full w-auto h-auto object-contain opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                />
                {/* グラデーションオーバーレイ - 下部のみ薄く */}
                <div className="absolute inset-0 bg-linear-to-t from-[#171717] via-[#171717]/30 to-transparent" />
              </div>

              {/* コンテンツ */}
              <div className="relative h-full flex flex-col justify-between p-6 sm:p-7 md:p-8">
                {/* 上部：カテゴリ */}
                <div>
                  <span className="inline-block px-3 py-1 text-[10px] sm:text-xs font-medium text-[#3ecf8e] bg-[#3ecf8e]/10 rounded-full border border-[#3ecf8e]/20">
                    {item.category}
                  </span>
                </div>

                {/* 下部：タイトルと説明 */}
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] transition-colors duration-300 group-hover:text-[#3ecf8e]">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed">
                    {item.description}
                  </p>

                  {/* 詳細リンク */}
                  <div className="flex items-center gap-2 pt-2 text-[#3ecf8e] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>詳細を見る</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
