"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  ja: {
    title: "特定商取引法に基づく表記",
    description: "特定商取引法に基づき、以下の通り表記いたします。",
    lastUpdated: "最終更新日",
    sections: {
      businessName: {
        title: "1. 事業者名（屋号）",
        content: "Evimeria",
      },
      representative: {
        title: "2. 運営責任者",
        content: "近藤 白虎",
      },
      location: {
        title: "3. 所在地",
        content: "〒417-0061 静岡県富士市伝法653-1",
      },
      contact: {
        title: "4. お問い合わせ先",
        content: "お問い合わせは、お問い合わせフォームよりご連絡ください。",
        email: "メールアドレス: info@evimeria105.com",
      },
      businessType: {
        title: "5. 事業内容",
        content:
          "当事業は個人事業主として運営しており、主に以下の事業を行っております：",
        items: [
          "Web制作",
          "ECサイト構築",
          "アプリ開発",
          "AI自動化",
          "広告運用・代理",
          "EC販売（商品の製造・発送は提携事業者が行う場合があります）",
        ],
      },
      salesPrice: {
        title: "6. 販売価格",
        content:
          "各サービス・商品の価格は、サービス・商品ページに表示されている価格とします。価格は予告なく変更する場合があります。なお、表示価格には消費税が含まれている場合と含まれていない場合があります。各サービス・商品ページにてご確認ください。",
      },
      paymentMethod: {
        title: "7. 支払方法",
        content: "以下の支払方法をご利用いただけます：",
        items: [
          "クレジットカード決済（Stripe経由：Visa、Mastercard等）",
          "銀行振込",
        ],
        note: "クレジットカード決済は、Stripe社が提供する決済サービスを利用しております。",
      },
      paymentTiming: {
        title: "8. 支払時期",
        content:
          "クレジットカード決済の場合、ご注文確定時に決済が行われます。銀行振込の場合、ご注文確定後、指定の口座へのお振込をお願いいたします。振込手数料はお客様のご負担となります。",
      },
      deliveryTiming: {
        title: "9. サービス提供時期・商品の引渡時期",
        content:
          "サービス提供時期・商品の引渡時期は、サービス・商品の種類により異なります。",
        serviceItems: [
          "Web制作・ECサイト構築・アプリ開発・AI自動化・広告運用：各サービスページまたは契約時に明示いたします。",
          "EC販売（物販商品）：ご注文確定後、原則として7営業日以内に発送いたします。なお、商品は国内外の提携事業者より直接発送される場合があり、その場合は発送までに最大14営業日程度かかる場合があります。",
        ],
        dropshippingNote:
          "商品の製造・発送は提携事業者が行い、当事業者が販売およびカスタマーサポートを担当します。配送状況や通関手続き等により、商品のお届けに時間を要する場合があります。あらかじめご了承ください。",
      },
      cancellation: {
        title: "10. 返品・キャンセルポリシー",
        content:
          "サービス・商品の性質上、以下の場合を除き、返品・キャンセルはお受けできません：",
        items: [
          "当方の責めに帰すべき事由によりサービス・商品に瑕疵がある場合",
          "当方が明示した返品・キャンセル条件に該当する場合",
          "商品到着後8日以内に、商品に欠陥があることが判明した場合（物販商品のみ）",
        ],
        serviceNote:
          "Web制作・ECサイト構築・アプリ開発・AI自動化・広告運用等のサービスについては、契約内容に基づき、契約時に別途キャンセルポリシーを明示いたします。",
        dropshippingNote:
          "提携事業者より直接発送される商品の返品については、提携事業者の返品ポリシーに準じます。返品をご希望の場合は、お問い合わせフォームよりご連絡ください。返品送料は、商品の欠陥が当方の責めに帰すべき事由による場合を除き、お客様のご負担となります。",
        contactNote:
          "返品・キャンセルをご希望の場合は、お問い合わせフォームよりご連絡ください。",
      },
      specialConditions: {
        title: "11. その他",
        content:
          "その他の条件については、各サービス・商品の購入時に明示いたします。",
        dropshipping: {
          title: "提携事業者からの商品発送について",
          content:
            "当事業では、一部の商品について、商品の製造・発送を国内外の提携事業者が行い、当事業者が販売およびカスタマーサポートを担当しております。以下の点をご理解の上、ご注文ください：",
          items: [
            "商品は提携事業者から直接お客様へ発送されます",
            "配送先は提携事業者が管理するため、配送状況の確認に時間がかかる場合があります",
            "在庫状況は提携事業者の在庫に依存するため、急遽在庫切れとなる場合があります",
            "配送状況や通関手続き等により、商品のお届けに時間を要する場合があります",
            "返品・交換については、提携事業者のポリシーに準じます",
            "配送遅延や商品の不備が発生した場合、当方を通じて提携事業者へ対応を依頼いたします",
          ],
        },
      },
    },
  },
  en: {
    title: "Specified Commercial Transactions Act",
    description:
      "In accordance with the Specified Commercial Transactions Act, we provide the following information.",
    lastUpdated: "Last Updated",
    sections: {
      businessName: {
        title: "1. Business Name",
        content: "Evimeria",
      },
      representative: {
        title: "2. Operator",
        content: "Byakko Kondo",
      },
      location: {
        title: "3. Location",
        content: "653-1 Denpo, Fuji-shi, Shizuoka 417-0061, Japan",
      },
      contact: {
        title: "4. Contact Information",
        content: "For inquiries, please contact us through the inquiry form.",
        email: "Email: info@evimeria105.com",
      },
      businessType: {
        title: "5. Business Type",
        content:
          "This business is operated as an individual business, and we mainly conduct the following businesses:",
        items: [
          "Web Development",
          "EC Site Construction",
          "App Development",
          "AI Automation",
          "Advertising Management & Agency",
          "EC Sales (product manufacturing and shipping may be handled by partner businesses)",
        ],
      },
      salesPrice: {
        title: "6. Sales Price",
        content:
          "The price of each service/product is as displayed on the service/product page. Prices may be changed without notice. Please note that displayed prices may or may not include consumption tax. Please check each service/product page.",
      },
      paymentMethod: {
        title: "7. Payment Method",
        content: "The following payment methods are available:",
        items: [
          "Credit Card Payment (via Stripe: Visa, Mastercard, etc.)",
          "Bank Transfer",
        ],
        note: "Credit card payments are processed through Stripe's payment service.",
      },
      paymentTiming: {
        title: "8. Payment Timing",
        content:
          "For credit card payments, payment will be processed when the order is confirmed. For bank transfers, please transfer to the specified account after order confirmation. Transfer fees are the customer's responsibility.",
      },
      deliveryTiming: {
        title: "9. Service Delivery Timing / Product Delivery Timing",
        content:
          "Service delivery timing and product delivery timing vary depending on the type of service/product.",
        serviceItems: [
          "Web Development / EC Site Construction / App Development / AI Automation / Advertising Management: Will be specified on each service page or at the time of contract.",
          "EC Sales (Physical Products): Products will be shipped within 7 business days after order confirmation, in principle. However, some products may be shipped directly from partner businesses (domestic and international), in which case shipment may take up to approximately 14 business days.",
        ],
        dropshippingNote:
          "Product manufacturing and shipping are handled by partner businesses, while we handle sales and customer support. Delivery may take time due to shipping conditions or customs procedures. Please understand this in advance.",
      },
      cancellation: {
        title: "10. Return/Cancellation Policy",
        content:
          "Due to the nature of our services/products, returns/cancellations are not accepted except in the following cases:",
        items: [
          "When there is a defect in the service/product due to reasons attributable to us",
          "When the return/cancellation conditions explicitly stated by us are met",
          "When a defect in the product is discovered within 8 days after product arrival (physical products only)",
        ],
        serviceNote:
          "For services such as Web Development, EC Site Construction, App Development, AI Automation, and Advertising Management, cancellation policies will be separately specified at the time of contract based on the contract content.",
        dropshippingNote:
          "Returns for products shipped directly from partner businesses follow the return policy of partner businesses. If you wish to return a product, please contact us through the inquiry form. Return shipping costs are the customer's responsibility, except when the product defect is due to reasons attributable to us.",
        contactNote:
          "If you wish to return or cancel, please contact us through the inquiry form.",
      },
      specialConditions: {
        title: "11. Other",
        content:
          "Other conditions will be specified at the time of purchase of each service/product.",
        dropshipping: {
          title: "About Products Shipped from Partner Businesses",
          content:
            "For some products, product manufacturing and shipping are handled by partner businesses (domestic and international), while we handle sales and customer support. Please place your order after understanding the following points:",
          items: [
            "Products are shipped directly from partner businesses to customers",
            "As shipping destinations are managed by partner businesses, it may take time to confirm shipping status",
            "Stock status depends on partner businesses' inventory, so items may suddenly go out of stock",
            "Delivery may take time due to shipping conditions or customs procedures",
            "Returns and exchanges follow partner businesses' policies",
            "If delivery delays or product defects occur, we will request the partner business to handle the matter through us",
          ],
        },
      },
    },
  },
};

export default function SpecifiedCommercialTransactionsContent() {
  const { language } = useLanguage();
  const t = translations[language];

  const currentDate = new Date();
  const formattedDate =
    language === "ja"
      ? `${currentDate.getFullYear()}年${
          currentDate.getMonth() + 1
        }月${currentDate.getDate()}日`
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
          {/* 事業者名 */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-4">
                {t.sections.businessName.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed">
                {t.sections.businessName.content}
              </p>
            </div>
          </div>

          {/* 運営責任者 */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-4">
                {t.sections.representative.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed">
                {t.sections.representative.content}
              </p>
            </div>
          </div>

          {/* 所在地 */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-4">
                {t.sections.location.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed">
                {t.sections.location.content}
              </p>
            </div>
          </div>

          {/* お問い合わせ先 */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-4">
                {t.sections.contact.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed mb-2">
                {t.sections.contact.content}
              </p>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed">
                {t.sections.contact.email}
              </p>
            </div>
          </div>

          {/* 事業内容 */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-4">
                {t.sections.businessType.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed mb-4">
                {t.sections.businessType.content}
              </p>
              <ul className="space-y-2 ml-4">
                {t.sections.businessType.items.map((item, idx) => (
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

          {/* 販売価格 */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-4">
                {t.sections.salesPrice.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed">
                {t.sections.salesPrice.content}
              </p>
            </div>
          </div>

          {/* 支払方法 */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-4">
                {t.sections.paymentMethod.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed mb-4">
                {t.sections.paymentMethod.content}
              </p>
              <ul className="space-y-2 ml-4 mb-4">
                {t.sections.paymentMethod.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm sm:text-base text-[#d4d4d4] leading-relaxed"
                  >
                    <span className="text-[#0ABAB5] mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed">
                {t.sections.paymentMethod.note}
              </p>
            </div>
          </div>

          {/* 支払時期 */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-4">
                {t.sections.paymentTiming.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed">
                {t.sections.paymentTiming.content}
              </p>
            </div>
          </div>

          {/* サービス提供時期・商品の引渡時期 */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-4">
                {t.sections.deliveryTiming.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed mb-4">
                {t.sections.deliveryTiming.content}
              </p>
              <ul className="space-y-2 ml-4 mb-4">
                {t.sections.deliveryTiming.serviceItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm sm:text-base text-[#d4d4d4] leading-relaxed"
                  >
                    <span className="text-[#0ABAB5] mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed">
                {t.sections.deliveryTiming.dropshippingNote}
              </p>
            </div>
          </div>

          {/* 返品・キャンセルポリシー */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-4">
                {t.sections.cancellation.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed mb-4">
                {t.sections.cancellation.content}
              </p>
              <ul className="space-y-2 ml-4 mb-4">
                {t.sections.cancellation.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm sm:text-base text-[#d4d4d4] leading-relaxed"
                  >
                    <span className="text-[#0ABAB5] mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed mb-4">
                {t.sections.cancellation.serviceNote}
              </p>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed mb-4">
                {t.sections.cancellation.dropshippingNote}
              </p>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed">
                {t.sections.cancellation.contactNote}
              </p>
            </div>
          </div>

          {/* その他 */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-[#fafafa] mb-4">
                {t.sections.specialConditions.title}
              </h2>
              <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed mb-6">
                {t.sections.specialConditions.content}
              </p>
              <div className="mt-6 pt-6 border-t border-[#2e2e2e]">
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-[#fafafa] mb-4">
                  {t.sections.specialConditions.dropshipping.title}
                </h3>
                <p className="text-sm sm:text-base text-[#d4d4d4] leading-relaxed mb-4">
                  {t.sections.specialConditions.dropshipping.content}
                </p>
                <ul className="space-y-2 ml-4">
                  {t.sections.specialConditions.dropshipping.items.map(
                    (item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm sm:text-base text-[#d4d4d4] leading-relaxed"
                      >
                        <span className="text-[#0ABAB5] mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
