import Image from "next/image";

export default function AutomationSection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#3ecf8e]"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#fafafa]">
              AIによる自動化
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-[#b4b4b4] max-w-3xl ml-4">
            AI技術を活用し、業務プロセスを自動化します。
            データ連携、作業の自動化、AI統合により、
            効率的な業務運用を実現します。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-12">
          {/* Main Automation Card */}
          <div className="h-[400px] sm:h-[450px] md:h-[500px] p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50 relative overflow-hidden group">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <h3 className="text-[15.1px] leading-[24px] text-[#fafafa]">
                  ワークフロー自動化
                </h3>
              </div>
              <div className="flex-1 flex flex-col">
                <p className="text-[13.3px] leading-[20px] text-[#898989] mb-4">
                  <span className="text-[#fafafa]">
                    業務プロセスの自動化と統合
                  </span>
                  を行います。
                  繰り返し作業を自動化し、業務効率を大幅に向上させます。
                </p>
                <div className="flex-1 relative bg-[#242424] rounded-lg overflow-hidden">
                  <Image
                    src="/top-logos/n8n.png"
                    alt="n8n Automation"
                    fill
                    className="object-contain p-4 opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <ul className="space-y-1 mt-4">
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
                    データ連携・同期
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
                    API統合
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
                    カスタムワークフロー構築
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI Integration Card */}
          <div className="h-[400px] sm:h-[450px] md:h-[500px] p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50 relative overflow-hidden group">
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
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                <h3 className="text-[15.1px] leading-[24px] text-[#fafafa]">
                  AI統合・自動化
                </h3>
              </div>
              <div className="flex-1 flex flex-col">
                <p className="text-[13.3px] leading-[20px] text-[#898989] mb-4">
                  <span className="text-[#fafafa]">
                    AI技術を活用した業務自動化
                  </span>
                  を実現します。
                  チャットボットや自動応答システムなど、AIを活用した業務効率化をサポートします。
                </p>
                <div className="flex-1 relative bg-[#242424] rounded-lg overflow-hidden flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-4 w-full">
                    <div className="aspect-square bg-[#2e2e2e] rounded-lg flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-[#3ecf8e]"
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
                    </div>
                    <div className="aspect-square bg-[#2e2e2e] rounded-lg flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-[#3ecf8e]"
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
                    </div>
                  </div>
                </div>
                <ul className="space-y-1 mt-4">
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
                    AIチャットボット統合
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
                    自動応答システム
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
                    データ分析・処理自動化
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <div className="h-[250px] sm:h-[280px] p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="h-full bg-[#171717] rounded-[11px] p-4 sm:p-5 md:p-6 flex flex-col">
              <h4 className="text-[14px] leading-[20px] text-[#fafafa] mb-2">
                データ連携
              </h4>
              <p className="text-[12px] leading-[18px] text-[#898989]">
                複数のサービス間でのデータ自動同期と連携を実現します。
              </p>
            </div>
          </div>
          <div className="h-[250px] sm:h-[280px] p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="h-full bg-[#171717] rounded-[11px] p-4 sm:p-5 md:p-6 flex flex-col">
              <h4 className="text-[14px] leading-[20px] text-[#fafafa] mb-2">
                通知・レポート自動化
              </h4>
              <p className="text-[12px] leading-[18px] text-[#898989]">
                定期的なレポート生成や通知の自動送信を設定できます。
              </p>
            </div>
          </div>
          <div className="h-[250px] sm:h-[280px] p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="h-full bg-[#171717] rounded-[11px] p-4 sm:p-5 md:p-6 flex flex-col">
              <h4 className="text-[14px] leading-[20px] text-[#fafafa] mb-2">
                ワークフロー最適化
              </h4>
              <p className="text-[12px] leading-[18px] text-[#898989]">
                繰り返し作業を自動化し、業務効率を大幅に向上させます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
