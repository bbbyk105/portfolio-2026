import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionsHero from "@/components/SolutionsHero";
import WebDevelopmentSection from "@/components/WebDevelopmentSection";
import AppDevelopmentSection from "@/components/AppDevelopmentSection";
import MetaAdsSection from "@/components/MetaAdsSection";
import AutomationSection from "@/components/AutomationSection";

export const metadata: Metadata = {
  title: "ソリューション",
  description:
    "Web開発、アプリ開発、デジタルマーケティング支援、業務効率化など、Evimeriaが提供する包括的なデジタルソリューションをご紹介します。",
  openGraph: {
    title: "ソリューション | Evimeria",
    description:
      "Web開発、アプリ開発、デジタルマーケティング支援、業務効率化など、Evimeriaが提供する包括的なデジタルソリューションをご紹介します。",
    url: "/solutions",
  },
};

export default function SolutionsPage() {
  return (
    <div className="bg-[#121212] min-h-screen w-full">
      <Header />
      <main className="w-full">
        <SolutionsHero />
        <WebDevelopmentSection />
        <AppDevelopmentSection />
        <MetaAdsSection />
        <AutomationSection />
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12">
          <p className="text-xs sm:text-sm text-[#898989] text-center">
            We do not provide any services that automate, generate, or mimic user activity on advertising or social media platforms.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
