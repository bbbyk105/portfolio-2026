export default function MetaAdsSection() {
  return (
    <section className="w-full bg-[#171717] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#3ecf8e]"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#fafafa]">
              Meta広告代理
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-[#b4b4b4] max-w-3xl ml-4">
            Meta広告の戦略立案から運用、最適化まで一貫してサポート。
            ターゲティング、クリエイティブ制作、パフォーマンス分析により、
            効果的な広告運用を実現します。
          </p>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {/* Strategy */}
        <div className="h-[350px] sm:h-[380px] md:h-[400px] p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50 relative overflow-hidden group">
          <div className="h-full bg-[#171717] rounded-[11px] p-4 sm:p-5 md:p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
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
                広告戦略立案
              </h3>
            </div>
            <div className="flex-1">
              <p className="text-[13.3px] leading-[20px] text-[#898989] mb-2">
                目標に合わせた
                <span className="text-[#fafafa]">
                  広告戦略の設計と最適化
                </span>
                を行います。
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
                  ターゲット設定
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
                  予算配分最適化
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
                  KPI設定
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Creative */}
        <div className="h-[350px] sm:h-[380px] md:h-[400px] p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50 relative overflow-hidden group">
          <div className="h-full bg-[#171717] rounded-[11px] p-4 sm:p-5 md:p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
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
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <h3 className="text-[15.1px] leading-[24px] text-[#fafafa]">
                クリエイティブ制作
              </h3>
            </div>
            <div className="flex-1">
              <p className="text-[13.3px] leading-[20px] text-[#898989] mb-2">
                効果的な
                <span className="text-[#fafafa]">
                  広告クリエイティブの制作
                </span>
                を行います。
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
                  画像・動画制作
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
                  A/Bテスト
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
                  コピーライティング
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Management */}
        <div className="h-[350px] sm:h-[380px] md:h-[400px] p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50 relative overflow-hidden group">
          <div className="h-full bg-[#171717] rounded-[11px] p-4 sm:p-5 md:p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
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
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              <h3 className="text-[15.1px] leading-[24px] text-[#fafafa]">
                運用・最適化
              </h3>
            </div>
            <div className="flex-1">
              <p className="text-[13.3px] leading-[20px] text-[#898989] mb-2">
                継続的な
                <span className="text-[#fafafa]">
                  広告運用とパフォーマンス最適化
                </span>
                を行います。
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
                  日次・週次レポート
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
                  パフォーマンス分析
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
                  継続的な改善
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

