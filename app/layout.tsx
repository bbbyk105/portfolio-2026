import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadataJa: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.evimeria105.com",
  ),
  title: {
    default: "Evimeria - Web制作・EC・業務効率化",
    template: "%s | Evimeria",
  },
  description:
    "Web制作からアプリ開発、デジタルマーケティング支援、業務効率化まで、すべてのサービスを統合的に提供。競争優位性を生み出すデジタルシステムを構築します。",
  keywords: [
    "evimeria",
    "evimeria アプリ開発",
    "Evimeria Web制作",
    "Evimeria 合同会社",
    "evimeria ワークフロー設計",
    "evimeria ドロップシッピング",
    "デジタルマーケティング",
    "Web Development",
    "App Development",
  ],
  authors: [{ name: "Evimeria" }],
  creator: "Evimeria",
  publisher: "Evimeria",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      ja: "/",
      en: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    alternateLocale: ["en_US"],
    url: "/",
    siteName: "Evimeria",
    title: "Evimeria - Web制作・EC・業務効率化",
    description:
      "Web制作からアプリ開発、デジタルマーケティング支援、業務効率化まで、すべてのサービスを統合的に提供。",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Evimeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evimeria - Web制作・EC・業務効率化",
    description:
      "Web制作からアプリ開発、デジタルマーケティング支援、業務効率化まで、すべてのサービスを統合的に提供。",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Consoleやその他の検証コードを追加可能
    // google: "your-google-verification-code",
  },
};

const metadataEn: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.evimeria105.com",
  ),
  title: {
    default: "Evimeria - Web Development, E-commerce & Business Operations",
    template: "%s | Evimeria",
  },
  description:
    "We provide integrated services from web development to app development, digital marketing support, and business process improvement. We build digital systems that create competitive advantages.",
  keywords: [
    "evimeria",
    "evimeria app development",
    "Evimeria Web Development",
    "Evimeria LLC",
    "process design",
    "evimeria dropshipping",
    "Digital Marketing",
    "Web Development",
    "App Development",
    "Business Operations",
    "E-commerce Development",
    "Digital Marketing",
    "AI-powered Operations",
  ],
  authors: [{ name: "Evimeria" }],
  creator: "Evimeria",
  publisher: "Evimeria",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      ja: "/",
      en: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ja_JP"],
    url: "/",
    siteName: "Evimeria",
    title: "Evimeria - Web Development, E-commerce & Business Operations",
    description:
      "We provide integrated services from web development to app development, digital marketing support, and business process improvement.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Evimeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evimeria - Web Development, E-commerce & Business Operations",
    description:
      "We provide integrated services from web development to app development, digital marketing support, and business process improvement.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Consoleやその他の検証コードを追加可能
    // google: "your-google-verification-code",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") || "";
  // 英語が優先されている場合（enが含まれ、jaが含まれない、またはenがjaより前に来る場合）
  const isEnglish =
    acceptLanguage.includes("en") &&
    (!acceptLanguage.includes("ja") ||
      acceptLanguage.indexOf("en") < acceptLanguage.indexOf("ja"));

  return isEnglish ? metadataEn : metadataJa;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
