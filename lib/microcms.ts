import { createClient } from "microcms-js-sdk";

// 日本語サービス
const jaDomain =
  process.env.MICROCMS_SERVICE_DOMAIN_JA ?? process.env.MICROCMS_SERVICE_DOMAIN;
const jaApiKey =
  process.env.MICROCMS_API_KEY_JA ?? process.env.MICROCMS_API_KEY;

if (!jaDomain || !jaApiKey) {
  throw new Error(
    "MICROCMS_SERVICE_DOMAIN_JA / MICROCMS_API_KEY_JA が未設定です"
  );
}

export const microcmsJa = createClient({
  serviceDomain: jaDomain,
  apiKey: jaApiKey,
});

// 英語サービス（なければ日本語にフォールバック）
const enDomain = process.env.MICROCMS_SERVICE_DOMAIN_EN || jaDomain;
const enApiKey = process.env.MICROCMS_API_KEY_EN || jaApiKey;

export const microcmsEn = createClient({
  serviceDomain: enDomain,
  apiKey: enApiKey,
});

export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch?: {
    url: string;
    width: number;
    height: number;
  };
  category?: {
    id: string;
    name: string;
  };
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
};

export function getBlogClient(lang: "ja" | "en") {
  return lang === "ja" ? microcmsJa : microcmsEn;
}
