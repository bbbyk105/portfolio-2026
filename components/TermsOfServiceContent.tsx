"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  ja: {
    title: "利用規約",
    description:
      "本利用規約（以下「本規約」といいます）は、当社が提供するサービス（以下「本サービス」といいます）の利用条件を定めるものです。",
    lastUpdated: "最終更新日",
    sections: {
      agreement: {
        title: "1. 規約への同意",
        content:
          "利用者は、本サービスを利用することにより、本規約に同意したものとみなされます。本規約に同意しない場合は、本サービスの利用を停止してください。",
      },
      definition: {
        title: "2. 定義",
        content: "本規約において使用する用語の定義は、以下のとおりです：",
        items: [
          "「当社」とは、Evimería Incをいいます。",
          "「利用者」とは、本サービスを利用する個人または法人をいいます。",
          "「本サービス」とは、当社が提供するすべてのサービスをいいます。",
          "「コンテンツ」とは、本サービス内に表示されるすべての情報、データ、テキスト、画像等をいいます。",
        ],
      },
      usage: {
        title: "3. サービスの利用",
        content: "利用者は、本サービスを以下の目的でのみ利用することができます：",
        items: [
          "合法的な目的でのみ利用すること",
          "当社および第三者の知的財産権を尊重すること",
          "他の利用者や第三者の権利を侵害しないこと",
          "法令、規約、公序良俗に反する行為を行わないこと",
        ],
      },
      prohibited: {
        title: "4. 禁止行為",
        content:
          "利用者は、本サービスの利用にあたり、以下の行為を行ってはなりません：",
        items: [
          "法令または公序良俗に反する行為",
          "犯罪行為に関連する行為",
          "当社または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為",
          "本サービスに関連して、反社会的勢力等に対して直接または間接に利益を供与する行為",
          "その他、当社が不適切と判断する行為",
        ],
      },
      intellectual: {
        title: "5. 知的財産権",
        content:
          "本サービスに関する一切の知的財産権は、当社または当社にライセンスを許諾している者に帰属します。利用者は、当社の書面による事前の承諾なく、本サービスに関する知的財産権を利用することはできません。",
      },
      disclaimer: {
        title: "6. 免責事項",
        content:
          "当社は、本サービスに関して、以下の事項について責任を負いません：",
        items: [
          "本サービスの内容の正確性、完全性、有用性、信頼性、特定目的への適合性についての保証",
          "本サービスの中断、終了、または利用不能による損害",
          "本サービスを通じて得られた情報等に基づく判断および行為による損害",
          "利用者が本サービスを通じて他の利用者または第三者とやり取りした内容による損害",
        ],
      },
      modification: {
        title: "7. サービスの変更・中断・終了",
        content:
          "当社は、利用者への事前の告知なく、本サービスの内容を変更、追加、または削除することがあります。また、当社は、事前の告知なく、本サービスの全部または一部を中断、終了することがあります。",
      },
      changes: {
        title: "8. 規約の変更",
        content:
          "当社は、必要に応じて本規約を変更することができます。変更後の規約は、当社のウェブサイト上に掲載した時点で効力を生じます。規約変更後も本サービスを継続して利用する場合、利用者は変更後の規約に同意したものとみなされます。",
      },
      termination: {
        title: "9. 利用の停止・解除",
        content:
          "当社は、利用者が本規約に違反した場合、または当社が利用者の本サービスの利用を不適切と判断した場合、事前の通知なく、利用者の本サービスの利用を一時的に停止し、または利用者としての登録を取り消すことができます。",
      },
      governing: {
        title: "10. 準拠法・管轄裁判所",
        content:
          "本規約は、日本法に準拠して解釈されます。本サービスに関する紛争については、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。",
      },
      contact: {
        title: "11. お問い合わせ",
        content:
          "本規約に関するお問い合わせは、お問い合わせフォームよりご連絡ください。",
      },
    },
  },
  en: {
    title: "Terms of Service",
    description:
      "These Terms of Service (hereinafter referred to as 'these Terms') set forth the terms and conditions for the use of the services (hereinafter referred to as 'the Services') provided by us.",
    lastUpdated: "Last Updated",
    sections: {
      agreement: {
        title: "1. Agreement to Terms",
        content:
          "By using the Services, users are deemed to have agreed to these Terms. If you do not agree to these Terms, please discontinue use of the Services.",
      },
      definition: {
        title: "2. Definitions",
        content:
          "The definitions of terms used in these Terms are as follows:",
        items: [
          "'We' refers to Evimería Inc.",
          "'User' refers to any individual or legal entity that uses the Services.",
          "'The Services' refers to all services provided by us.",
          "'Content' refers to all information, data, text, images, etc. displayed within the Services.",
        ],
      },
      usage: {
        title: "3. Use of Services",
        content:
          "Users may use the Services only for the following purposes:",
        items: [
          "Use only for lawful purposes",
          "Respect the intellectual property rights of us and third parties",
          "Not infringe on the rights of other users or third parties",
          "Not engage in acts that violate laws, regulations, public order, or morals",
        ],
      },
      prohibited: {
        title: "4. Prohibited Acts",
        content:
          "Users must not engage in the following acts when using the Services:",
        items: [
          "Acts that violate laws or public order and morals",
          "Acts related to criminal activities",
          "Acts that destroy or interfere with the functions of our or third parties' servers or networks",
          "Acts of directly or indirectly providing benefits to anti-social forces in connection with the Services",
          "Other acts that we deem inappropriate",
        ],
      },
      intellectual: {
        title: "5. Intellectual Property Rights",
        content:
          "All intellectual property rights related to the Services belong to us or those who have licensed them to us. Users may not use intellectual property rights related to the Services without our prior written consent.",
      },
      disclaimer: {
        title: "6. Disclaimer",
        content:
          "We are not responsible for the following matters related to the Services:",
        items: [
          "Guarantees regarding the accuracy, completeness, usefulness, reliability, or fitness for a particular purpose of the content of the Services",
          "Damages caused by interruption, termination, or unavailability of the Services",
          "Damages resulting from judgments and actions based on information obtained through the Services",
          "Damages caused by content exchanged by users with other users or third parties through the Services",
        ],
      },
      modification: {
        title: "7. Modification, Interruption, or Termination of Services",
        content:
          "We may change, add, or delete the content of the Services without prior notice to users. We may also interrupt or terminate all or part of the Services without prior notice.",
      },
      changes: {
        title: "8. Changes to Terms",
        content:
          "We may change these Terms as necessary. The revised Terms will take effect when posted on our website. If users continue to use the Services after the Terms are changed, they are deemed to have agreed to the revised Terms.",
      },
      termination: {
        title: "9. Suspension or Termination of Use",
        content:
          "If a user violates these Terms or if we determine that the user's use of the Services is inappropriate, we may temporarily suspend the user's use of the Services or cancel the user's registration without prior notice.",
      },
      governing: {
        title: "10. Governing Law and Jurisdiction",
        content:
          "These Terms shall be interpreted in accordance with Japanese law. Disputes related to the Services shall be subject to the exclusive jurisdiction of the court having jurisdiction over the location of our head office.",
      },
      contact: {
        title: "11. Contact",
        content:
          "For inquiries regarding these Terms, please contact us through the inquiry form.",
      },
    },
  },
};

export default function TermsOfServiceContent() {
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
          {/* 規約への同意 */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-4">
                {t.sections.agreement.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed">
                {t.sections.agreement.content}
              </p>
            </div>
          </div>

          {/* 定義 */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-4">
                {t.sections.definition.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed mb-4">
                {t.sections.definition.content}
              </p>
              <ul className="space-y-2 ml-4">
                {t.sections.definition.items.map((item, idx) => (
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

          {/* サービスの利用 */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-4">
                {t.sections.usage.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed mb-4">
                {t.sections.usage.content}
              </p>
              <ul className="space-y-2 ml-4">
                {t.sections.usage.items.map((item, idx) => (
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

          {/* 禁止行為 */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-4">
                {t.sections.prohibited.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed mb-4">
                {t.sections.prohibited.content}
              </p>
              <ul className="space-y-2 ml-4">
                {t.sections.prohibited.items.map((item, idx) => (
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

          {/* 知的財産権 */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-4">
                {t.sections.intellectual.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed">
                {t.sections.intellectual.content}
              </p>
            </div>
          </div>

          {/* 免責事項 */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-4">
                {t.sections.disclaimer.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed mb-4">
                {t.sections.disclaimer.content}
              </p>
              <ul className="space-y-2 ml-4">
                {t.sections.disclaimer.items.map((item, idx) => (
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

          {/* サービスの変更・中断・終了 */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-4">
                {t.sections.modification.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed">
                {t.sections.modification.content}
              </p>
            </div>
          </div>

          {/* 規約の変更 */}
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

          {/* 利用の停止・解除 */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-4">
                {t.sections.termination.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed">
                {t.sections.termination.content}
              </p>
            </div>
          </div>

          {/* 準拠法・管轄裁判所 */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-4">
                {t.sections.governing.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed">
                {t.sections.governing.content}
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
