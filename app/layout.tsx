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
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.evimeria105.com"
  ),
  title: {
    default: "Evimería - Web制作・EC・業務自動化",
    template: "%s | Evimería",
  },
  description:
    "Web制作からアプリ開発、広告運用、AI自動化まで、すべてのサービスを統合的に提供。競争優位性を生み出すデジタルシステムを構築します。",
  keywords: [
    "evimeria",
    "evimeria アプリ開発",
    "Evimeria Web制作",
    "Evimeria 合同会社",
    "evimeria n8n",
    "evimeria ドロップシッピング",
    "デジタルマーケティング",
    "Web Development",
    "App Development",
  ],
  authors: [{ name: "Evimería" }],
  creator: "Evimería",
  publisher: "Evimería",
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
    siteName: "Evimería",
    title: "Evimería - Web制作・EC・業務自動化",
    description:
      "Web制作からアプリ開発、広告運用、AI自動化まで、すべてのサービスを統合的に提供。",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Evimería",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evimería - Web制作・EC・業務自動化",
    description:
      "Web制作からアプリ開発、広告運用、AI自動化まで、すべてのサービスを統合的に提供。",
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
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.evimeria105.com"
  ),
  title: {
    default: "Evimería - Web Development, E-commerce & Business Automation",
    template: "%s | Evimería",
  },
  description:
    "We provide integrated services from web development to app development, advertising operations, and AI automation. We build digital systems that create competitive advantages.",
  keywords: [
    "evimeria",
    "evimeria app development",
    "Evimeria Web Development",
    "Evimeria LLC",
    "evimeria n8n",
    "evimeria dropshipping",
    "Digital Marketing",
    "Web Development",
    "App Development",
    "Business Automation",
    "E-commerce Development",
    "Meta Advertising",
    "AI Automation",
  ],
  authors: [{ name: "Evimería" }],
  creator: "Evimería",
  publisher: "Evimería",
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
    siteName: "Evimería",
    title: "Evimería - Web Development, E-commerce & Business Automation",
    description:
      "We provide integrated services from web development to app development, advertising operations, and AI automation.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Evimería",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evimería - Web Development, E-commerce & Business Automation",
    description:
      "We provide integrated services from web development to app development, advertising operations, and AI automation.",
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
