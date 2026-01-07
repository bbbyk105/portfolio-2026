"use client";

import { useEffect, useState } from "react";
import { FiLink } from "react-icons/fi";
import { FaLine } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { useLanguage } from "@/contexts/LanguageContext";

type Props = {
  title: string;
};

const translations = {
  ja: {
    copyLink: "リンクコピー",
    copied: "コピー済み",
    copyLinkAria: "リンクをコピー",
    shareOnLine: "LINEで共有",
    shareOnX: "Xで共有",
  },
  en: {
    copyLink: "Copy Link",
    copied: "Copied",
    copyLinkAria: "Copy link",
    shareOnLine: "Share on LINE",
    shareOnX: "Share on X",
  },
};

export default function NewsShareButtons({ title }: Props) {
  const { language } = useLanguage();
  const t = translations[language];
  const [url, setUrl] = useState(
    typeof window !== "undefined" ? window.location.href : ""
  );
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);
    }
  }, []);

  const handleCopy = async () => {
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const lineHref =
    url &&
    `https://line.me/R/msg/text/?${encodeURIComponent(
      title
    )}%0A${encodeURIComponent(url)}`;

  const xHref =
    url &&
    `https://x.com/intent/tweet?text=${encodeURIComponent(
      title
    )}&url=${encodeURIComponent(url)}`;

  return (
    <div className="mt-10 flex flex-wrap items-center gap-4 text-sm">
      {/* コピーボタン（アイコン） */}
      <button
        type="button"
        onClick={handleCopy}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2e2e2e] text-[#fafafa] hover:bg-[#1f1f1f] transition-colors"
        aria-label={t.copyLinkAria}
      >
        <span className="inline-flex h-4 w-4 items-center justify-center">
          <FiLink className="h-4 w-4" />
        </span>
        <span>{copied ? t.copied : t.copyLink}</span>
      </button>

      {/* LINE 共有 */}
      {lineHref && (
        <a
          href={lineHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00c300]/60 text-[#fafafa] hover:bg-[#00c300]/20 transition-colors"
          aria-label={t.shareOnLine}
        >
          <span className="inline-flex h-4 w-4 items-center justify-center">
            <FaLine className="h-4 w-4" />
          </span>
        </a>
      )}

      {/* X 共有 */}
      {xHref && (
        <a
          href={xHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1DA1F2]/60 text-[#fafafa] hover:bg-[#1DA1F2]/20 transition-colors"
          aria-label={t.shareOnX}
        >
          <span className="inline-flex h-4 w-4 items-center justify-center">
            <FaXTwitter className="h-4 w-4" />
          </span>
        </a>
      )}
    </div>
  );
}
