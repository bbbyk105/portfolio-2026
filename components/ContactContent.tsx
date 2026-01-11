"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  ja: {
    title: "お問い合わせ",
    description:
      "プロジェクトのご相談やお見積もりなど、お気軽にお問い合わせください。お客様のビジネス成長をサポートするための最適なソリューションをご提案いたします。",
    name: "お名前",
    namePlaceholder: "山田 太郎",
    email: "メールアドレス",
    emailPlaceholder: "example@email.com",
    subject: "お問い合わせ内容",
    subjectPlaceholder: "お問い合わせ内容をご記入ください",
    message: "メッセージ",
    messagePlaceholder: "ご質問やご要望をご記入ください",
    submit: "送信する",
    submitting: "送信中...",
    success: "お問い合わせありがとうございます。担当者よりご連絡いたします。",
    error: "送信に失敗しました。もう一度お試しください。",
  },
  en: {
    title: "Contact",
    description:
      "Please feel free to contact us for project consultations or estimates. We will propose the best solution to support your business growth.",
    name: "Name",
    namePlaceholder: "John Doe",
    email: "Email",
    emailPlaceholder: "example@email.com",
    subject: "Subject",
    subjectPlaceholder: "Please enter your inquiry",
    message: "Message",
    messagePlaceholder: "Please enter your questions or requests",
    submit: "Send",
    submitting: "Sending...",
    success: "Thank you for your inquiry. We will contact you soon.",
    error: "Failed to send. Please try again.",
  },
};


export default function ContactContent() {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          language, // 言語情報を追加
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          <p className="text-sm sm:text-base md:text-lg text-[#b4b4b4] max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* お問い合わせフォーム */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50 mb-8">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#fafafa] mb-2"
                  >
                    {t.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t.namePlaceholder}
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2e2e2e] rounded-lg text-[#fafafa] placeholder-[#898989] focus:outline-none focus:border-[#0ABAB5] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#fafafa] mb-2"
                  >
                    {t.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t.emailPlaceholder}
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2e2e2e] rounded-lg text-[#fafafa] placeholder-[#898989] focus:outline-none focus:border-[#0ABAB5] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-[#fafafa] mb-2"
                  >
                    {t.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder={t.subjectPlaceholder}
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2e2e2e] rounded-lg text-[#fafafa] placeholder-[#898989] focus:outline-none focus:border-[#0ABAB5] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#fafafa] mb-2"
                  >
                    {t.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder={t.messagePlaceholder}
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2e2e2e] rounded-lg text-[#fafafa] placeholder-[#898989] focus:outline-none focus:border-[#0ABAB5] transition-colors resize-none"
                  />
                </div>

                {status === "success" && (
                  <div className="p-4 bg-[#0ABAB5]/10 border border-[#0ABAB5]/30 rounded-lg text-sm text-[#0ABAB5]">
                    {t.success}
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-sm text-red-400">
                    {t.error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full px-6 py-3 bg-[#0ABAB5] text-[#121212] font-medium rounded-lg hover:bg-[#0ABAB5]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? t.submitting : t.submit}
                </button>
              </form>
            </div>
          </div>

          {/* 軽い説明セクション */}
          <div className="p-px rounded-xl bg-gradient-to-b from-[#2e2e2e] to-[#2e2e2e]/50">
            <div className="bg-[#171717] rounded-[11px] p-6 sm:p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <svg
                  className="w-5 h-5 text-[#0ABAB5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h2 className="text-lg sm:text-xl font-medium text-[#fafafa]">
                  {language === "ja" ? "お問い合わせについて" : "About Inquiries"}
                </h2>
              </div>
              <div className="space-y-3 text-sm sm:text-base text-[#d4d4d4] leading-relaxed">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#0ABAB5] mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>
                    {language === "ja"
                      ? "お問い合わせいただいた内容については、通常1〜2営業日以内にご返信いたします。"
                      : "We typically respond to inquiries within 1-2 business days."}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#0ABAB5] mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>
                    {language === "ja"
                      ? "プロジェクトのご相談やお見積もりは無料です。お気軽にお問い合わせください。"
                      : "Project consultations and estimates are free. Please feel free to contact us."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

