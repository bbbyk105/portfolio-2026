"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  ja: {
    title: "プライバシーポリシー",
    description: "当社は、お客様の個人情報の保護を重視しており、以下のプライバシーポリシーに従って適切に取り扱います。",
    lastUpdated: "最終更新日",
    sections: {
      introduction: {
        title: "1. はじめに",
        content:
          "当社（以下「当社」といいます）は、お客様の個人情報の保護を重要な責務として認識し、個人情報の保護に関する法律（以下「個人情報保護法」といいます）その他の関連法令を遵守し、適切に取り扱います。",
      },
      collection: {
        title: "2. 個人情報の収集",
        content:
          "当社は、以下の場合において個人情報を収集することがあります：",
        items: [
          "お問い合わせフォームからの情報（氏名、メールアドレス、お問い合わせ内容等）",
          "サービス提供に必要な情報",
          "当社のウェブサイトの利用状況に関する情報（Cookie、アクセスログ等）",
        ],
      },
      purpose: {
        title: "3. 個人情報の利用目的",
        content: "当社は、収集した個人情報を以下の目的で利用します：",
        items: [
          "お問い合わせへの対応およびサポートの提供",
          "サービスや製品の案内、ご連絡",
          "サービスの改善、新サービスの開発",
          "統計データの作成および分析",
          "法令に基づく対応",
        ],
      },
      sharing: {
        title: "4. 個人情報の第三者提供",
        content:
          "当社は、法令で定められた場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。ただし、以下の場合には、第三者に個人情報を提供することがあります：",
        items: [
          "お客様の同意がある場合",
          "法令に基づく場合",
          "人の生命、身体または財産の保護のために必要な場合",
        ],
      },
      security: {
        title: "5. 個人情報の安全管理",
        content:
          "当社は、個人情報の漏えい、滅失、毀損を防止するため、適切な安全管理措置を講じます。",
      },
      cookies: {
        title: "6. Cookie（クッキー）について",
        content:
          "当社のウェブサイトでは、サービスの向上のため、Cookieを使用することがあります。Cookieは、お客様のブラウザに送信され、お客様のコンピュータに保存されます。ブラウザの設定により、Cookieの使用を拒否することも可能です。",
      },
      access: {
        title: "7. 個人情報の開示、訂正、削除等",
        content:
          "お客様は、当社が保有するお客様の個人情報について、開示、訂正、削除、利用停止等を請求することができます。ご請求の際は、お問い合わせフォームよりご連絡ください。",
      },
      changes: {
        title: "8. プライバシーポリシーの変更",
        content:
          "当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当社のウェブサイト上に掲載した時点で効力を生じます。",
      },
      contact: {
        title: "9. お問い合わせ",
        content:
          "本プライバシーポリシーに関するお問い合わせは、お問い合わせフォームよりご連絡ください。",
      },
    },
  },
  en: {
    title: "Privacy Policy",
    description:
      "We take the protection of your personal information seriously and handle it appropriately in accordance with the following privacy policy.",
    lastUpdated: "Last Updated",
    sections: {
      introduction: {
        title: "1. Introduction",
        content:
          "We (hereinafter referred to as 'we') recognize the protection of personal information as an important responsibility and comply with the Personal Information Protection Law and other related laws and regulations, and handle personal information appropriately.",
      },
      collection: {
        title: "2. Collection of Personal Information",
        content: "We may collect personal information in the following cases:",
        items: [
          "Information from inquiry forms (name, email address, inquiry content, etc.)",
          "Information necessary for providing services",
          "Information regarding usage of our website (cookies, access logs, etc.)",
        ],
      },
      purpose: {
        title: "3. Purpose of Use of Personal Information",
        content:
          "We use collected personal information for the following purposes:",
        items: [
          "Responding to inquiries and providing support",
          "Providing information and notifications about services and products",
          "Improving services and developing new services",
          "Creating and analyzing statistical data",
          "Compliance with laws and regulations",
        ],
      },
      sharing: {
        title: "4. Sharing Personal Information with Third Parties",
        content:
          "We will not provide personal information to third parties without your consent, except as required by law. However, we may provide personal information to third parties in the following cases:",
        items: [
          "When you have given consent",
          "When required by law",
          "When necessary to protect the life, body, or property of a person",
        ],
      },
      security: {
        title: "5. Security Management of Personal Information",
        content:
          "We take appropriate security measures to prevent leakage, loss, or damage of personal information.",
      },
      cookies: {
        title: "6. About Cookies",
        content:
          "Our website may use cookies to improve our services. Cookies are sent to your browser and stored on your computer. You can refuse to accept cookies by setting your browser accordingly.",
      },
      access: {
        title: "7. Disclosure, Correction, Deletion, etc. of Personal Information",
        content:
          "You may request disclosure, correction, deletion, suspension of use, etc. of your personal information held by us. Please contact us through the inquiry form for such requests.",
      },
      changes: {
        title: "8. Changes to Privacy Policy",
        content:
          "We may change this privacy policy as necessary. The revised privacy policy will take effect when posted on our website.",
      },
      contact: {
        title: "9. Contact",
        content:
          "For inquiries regarding this privacy policy, please contact us through the inquiry form.",
      },
    },
  },
};

export default function PrivacyPolicyContent() {
  const { language } = useLanguage();
  const t = translations[language];

  const currentDate = new Date();
  const formattedDate =
    language === "ja"
      ? `${currentDate.getFullYear()}年${currentDate.getMonth() + 1}月${currentDate.getDate()}日`
      : `${currentDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}`;

  return (
    <section className="w-full bg-[#121212] min-h-screen py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        {/* ヘッダー */}
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1 h-8 bg-[#0ABAB5]"></div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#fafafa]">
              {t.title}
            </h1>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-[#b4b4b4] max-w-3xl mx-auto mb-4">
            {t.description}
          </p>
          <p className="text-xs sm:text-sm text-[#898989]">
            {t.lastUpdated}: {formattedDate}
          </p>
        </div>

        {/* コンテンツ */}
        <div className="max-w-4xl mx-auto space-y-6">
          {/* はじめに */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-4">
                {t.sections.introduction.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed">
                {t.sections.introduction.content}
              </p>
            </div>
          </div>

          {/* 個人情報の収集 */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-4">
                {t.sections.collection.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed mb-4">
                {t.sections.collection.content}
              </p>
              <ul className="space-y-2 ml-4">
                {t.sections.collection.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm sm:text-base text-[#d4d4d4] leading-relaxed"
                  >
                    <span className="text-[#0ABAB5] mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 個人情報の利用目的 */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-4">
                {t.sections.purpose.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed mb-4">
                {t.sections.purpose.content}
              </p>
              <ul className="space-y-2 ml-4">
                {t.sections.purpose.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm sm:text-base text-[#d4d4d4] leading-relaxed"
                  >
                    <span className="text-[#0ABAB5] mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 個人情報の第三者提供 */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-4">
                {t.sections.sharing.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed mb-4">
                {t.sections.sharing.content}
              </p>
              <ul className="space-y-2 ml-4">
                {t.sections.sharing.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm sm:text-base text-[#d4d4d4] leading-relaxed"
                  >
                    <span className="text-[#0ABAB5] mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 個人情報の安全管理 */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-4">
                {t.sections.security.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed">
                {t.sections.security.content}
              </p>
            </div>
          </div>

          {/* Cookieについて */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-4">
                {t.sections.cookies.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed">
                {t.sections.cookies.content}
              </p>
            </div>
          </div>

          {/* 個人情報の開示、訂正、削除等 */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-4">
                {t.sections.access.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed">
                {t.sections.access.content}
              </p>
            </div>
          </div>

          {/* プライバシーポリシーの変更 */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-4">
                {t.sections.changes.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed">
                {t.sections.changes.content}
              </p>
            </div>
          </div>

          {/* お問い合わせ */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-4">
                {t.sections.contact.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed">
                {t.sections.contact.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
