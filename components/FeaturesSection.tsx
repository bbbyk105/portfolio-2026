import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#3ecf8e]"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#fafafa]">
              包括的なデジタルソリューション
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-[#b4b4b4] max-w-3xl ml-4">
            Web制作からアプリ開発、広告運用、AI自動化まで、すべてのサービスを統合的に提供。
            お客様のビジネス成長を包括的にサポートします。
          </p>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {/* Web制作 Card */}
        <div className="h-[300px] sm:h-[320px] md:h-[350px] p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50 relative overflow-hidden group">
          <div className="h-full bg-[#171717] rounded-[11px] p-4 sm:p-5 md:p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-[18px] h-[18px]"
                fill="none"
                stroke="#fafafa"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              <h3 className="text-[15.1px] leading-[24px] text-[#fafafa]">
                Web制作
              </h3>
            </div>
            <div className="flex-1 flex flex-col">
              <p className="text-[13.3px] leading-[20px] text-[#898989] mb-3">
                <span className="text-[#fafafa]">
                  最新技術を活用したWebサイト制作
                </span>
                を行います。
                企業サイト、ECサイト、ランディングページなど、あらゆるWebサイトに対応します。
              </p>
              <ul className="space-y-1">
                <li className="flex items-center gap-2 text-[13.2px] text-[#fafafa]">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="#fafafa"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  スマホ・PC対応
                </li>
                <li className="flex items-center gap-2 text-[13.5px] text-[#fafafa]">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="#fafafa"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  検索エンジン対策
                </li>
                <li className="flex items-center gap-2 text-[13.3px] text-[#fafafa]">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="#fafafa"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  表示速度の向上
                </li>
              </ul>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-[240px] h-[240px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <Image
                src="/images/nextjs-white.png"
                alt="Next.js"
                width={240}
                height={240}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* アプリ制作 Card */}
        <div className="h-[300px] sm:h-[320px] md:h-[350px] p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50 relative overflow-hidden group">
          <div className="h-full bg-[#171717] rounded-[11px] p-4 sm:p-5 md:p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-[18px] h-[18px]"
                fill="none"
                stroke="#fafafa"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <h3 className="text-[15.9px] leading-[24px] text-[#fafafa]">
                アプリ制作
              </h3>
            </div>
            <div className="flex-1">
              <p className="text-[13.5px] leading-[20px] text-[#fafafa]">
                スマートフォンアプリ（iPhone・Android）や
                <span className="text-[#898989]">、</span>
                <br />
                <span className="text-[#898989]">
                  Webアプリの開発まで幅広く対応します。
                </span>
              </p>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-[200px] h-[200px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <Image
                src="/images/flutter.png"
                alt="Flutter"
                width={200}
                height={200}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Meta広告代理 Card */}
        <div className="h-[300px] sm:h-[320px] md:h-[350px] p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50 relative overflow-hidden group">
          <div className="h-full bg-[#171717] rounded-[11px] p-4 sm:p-5 md:p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-[18px] h-[18px]"
                fill="none"
                stroke="#fafafa"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <h3 className="text-[15.1px] leading-[24px] text-[#fafafa]">
                Meta広告代理
              </h3>
            </div>
            <div className="flex-1">
              <p className="text-[13.6px] leading-[20px] text-[#898989]">
                戦略立案から運用、最適化まで
                <br />
                <span className="text-[#fafafa]">
                  一貫してサポートします。
                </span>
              </p>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-[200px] h-[200px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <Image
                src="/top-logos/meta.png"
                alt="Meta"
                width={200}
                height={200}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* AI自動化 Card */}
        <div className="h-[300px] sm:h-[320px] md:h-[350px] p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50 relative overflow-hidden group">
          <div className="h-full bg-[#171717] rounded-[11px] p-4 sm:p-5 md:p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-[18px] h-[18px]"
                fill="none"
                stroke="#fafafa"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              <h3 className="text-[15.5px] leading-[24px] text-[#fafafa]">
                AI自動化
              </h3>
            </div>
            <div className="flex-1">
              <p className="text-[13.6px] leading-[20px] text-[#fafafa]">
                AI技術を活用した
                <br />
                <span className="text-[#898989]">
                  業務プロセスの自動化を実現します。
                  繰り返し作業を自動化し、業務効率を大幅に向上させます。
                </span>
              </p>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-[200px] h-[200px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <Image
                src="/top-logos/n8n.png"
                alt="n8n"
                width={200}
                height={200}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* デジタル戦略 Card */}
        <div className="h-[300px] sm:h-[320px] md:h-[350px] p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50 relative overflow-hidden group">
          <div className="h-full bg-[#171717] rounded-[11px] p-4 sm:p-5 md:p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-[18px] h-[18px]"
                fill="none"
                stroke="#fafafa"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <h3 className="text-[15.5px] leading-[24px] text-[#fafafa]">
                デジタル戦略
              </h3>
            </div>
            <div className="flex-1">
              <p className="text-[13.7px] leading-[20px] text-[#fafafa]">
                ビジネス成長を加速する
                <br />
                <span className="text-[#898989]">
                  デジタル戦略の立案と実行をサポートします。
                </span>
              </p>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-[200px] h-[200px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="w-full h-full flex items-center justify-center">
                <svg
                  className="w-32 h-32 text-[#3ecf8e]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* 継続サポート Card */}
        <div className="h-[300px] sm:h-[320px] md:h-[350px] p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50 relative overflow-hidden group">
          <div className="h-full bg-[#171717] rounded-[11px] p-4 sm:p-5 md:p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <svg
                className="w-[18px] h-[18px]"
                fill="none"
                stroke="#fafafa"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <h3 className="text-[16px] leading-[24px] text-[#fafafa]">
                継続サポート
              </h3>
            </div>
            <div className="flex-1">
              <p className="text-[13.8px] leading-[20px] text-[#898989]">
                制作後の
                <span className="text-[#fafafa]">運用・保守・改善</span>
                まで、
                <br />
                <span className="text-[#fafafa]">
                  長期的なサポートを提供します。
                </span>
              </p>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-[200px] h-[200px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="w-full h-full flex items-center justify-center">
                <svg
                  className="w-32 h-32 text-[#3ecf8e]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}


