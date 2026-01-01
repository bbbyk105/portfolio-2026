export default function AppDevelopmentSection() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#3ecf8e]"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#fafafa]">
              アプリ制作
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-[#b4b4b4] max-w-3xl ml-4">
            iPhone・AndroidアプリからWebアプリまで、
            お客様のニーズに合わせた最適なアプリを開発します。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {/* iOS App Development */}
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
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="text-[15.1px] leading-[24px] text-[#fafafa]">
                  iOSアプリ開発
                </h3>
              </div>
              <div className="flex-1">
                <p className="text-[13.3px] leading-[20px] text-[#898989] mb-2">
                  <span className="text-[#fafafa]">iPhoneアプリの開発</span>
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
                    App Store公開対応
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
                    使いやすいデザイン
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
                    高速動作
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Android App Development */}
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
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="text-[15.1px] leading-[24px] text-[#fafafa]">
                  Androidアプリ開発
                </h3>
              </div>
              <div className="flex-1">
                <p className="text-[13.3px] leading-[20px] text-[#898989] mb-2">
                  <span className="text-[#fafafa]">Androidアプリの開発</span>
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
                    Google Play公開対応
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
                    使いやすいデザイン
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
                    高速動作
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Web App Development */}
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
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="text-[15.1px] leading-[24px] text-[#fafafa]">
                  Webアプリ開発
                </h3>
              </div>
              <div className="flex-1">
                <p className="text-[13.3px] leading-[20px] text-[#898989] mb-2">
                  <span className="text-[#fafafa]">Webアプリの開発</span>
                  を行います。
                  スマホのホーム画面に追加できるアプリも作成可能です。
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
                    アプリのように使える
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
                    オフラインでも利用可能
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
