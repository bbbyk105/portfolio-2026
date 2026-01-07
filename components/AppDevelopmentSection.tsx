"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  ja: {
    title: "アプリ制作",
    description:
      "iPhone・AndroidアプリからWebアプリまで、お客様のニーズに合わせた最適なアプリを開発します。",
    iosTitle: "iOSアプリ開発",
    iosDescription: "iPhoneアプリの開発を行います。",
    iosFeatures: ["App Store公開対応", "使いやすいデザイン", "高速動作"],
    androidTitle: "Androidアプリ開発",
    androidDescription: "Androidアプリの開発を行います。",
    androidFeatures: ["Google Play公開対応", "使いやすいデザイン", "高速動作"],
    webTitle: "Webアプリ開発",
    webDescription:
      "Webアプリの開発を行います。スマホのホーム画面に追加できるアプリも作成可能です。",
    webFeatures: [
      "スマホ・PC対応",
      "アプリのように使える",
      "オフラインでも利用可能",
    ],
  },
  en: {
    title: "App Development",
    description:
      "We develop optimal apps tailored to your needs, from iPhone and Android apps to web apps.",
    iosTitle: "iOS App Development",
    iosDescription: "We develop iPhone apps.",
    iosFeatures: [
      "App Store Publishing",
      "User-Friendly Design",
      "High Performance",
    ],
    androidTitle: "Android App Development",
    androidDescription: "We develop Android apps.",
    androidFeatures: [
      "Google Play Publishing",
      "User-Friendly Design",
      "High Performance",
    ],
    webTitle: "Web App Development",
    webDescription:
      "We develop web apps. We can also create apps that can be added to your smartphone's home screen.",
    webFeatures: [
      "Mobile & PC Compatible",
      "App-like Experience",
      "Offline Available",
    ],
  },
};

export default function AppDevelopmentSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="app" className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
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
                  {t.iosTitle}
                </h3>
              </div>
              <div className="flex-1 flex flex-col">
                <p className="text-[13.3px] leading-[20px] text-[#898989] mb-4">
                  <span className="text-[#fafafa]">{t.iosDescription}</span>
                </p>
                <div className="relative w-full h-32 sm:h-40 bg-[#242424] rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/apple.jpg"
                    alt="iOS App Development"
                    fill
                    className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <ul className="space-y-1">
                  {t.iosFeatures.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-[13.2px] text-[#fafafa]"
                    >
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
                      {feature}
                    </li>
                  ))}
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
                  {t.androidTitle}
                </h3>
              </div>
              <div className="flex-1 flex flex-col">
                <p className="text-[13.3px] leading-[20px] text-[#898989] mb-4">
                  <span className="text-[#fafafa]">{t.androidDescription}</span>
                </p>
                <div className="relative w-full h-32 sm:h-40 bg-[#242424] rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/android.png"
                    alt="Android App Development"
                    fill
                    className="object-contain p-4 opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <ul className="space-y-1">
                  {t.androidFeatures.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-[13.2px] text-[#fafafa]"
                    >
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
                      {feature}
                    </li>
                  ))}
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
                  {t.webTitle}
                </h3>
              </div>
              <div className="flex-1 flex flex-col">
                <p className="text-[13.3px] leading-[20px] text-[#898989] mb-4">
                  <span className="text-[#fafafa]">{t.webDescription}</span>
                </p>
                <div className="relative w-full h-32 sm:h-40 bg-[#242424] rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/nextjs-white.png"
                    alt="Web App Development"
                    fill
                    className="object-contain p-4 opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <ul className="space-y-1">
                  {t.webFeatures.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-[13.2px] text-[#fafafa]"
                    >
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
