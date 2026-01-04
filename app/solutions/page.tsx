import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionsHero from "@/components/SolutionsHero";
import WebDevelopmentSection from "@/components/WebDevelopmentSection";
import AppDevelopmentSection from "@/components/AppDevelopmentSection";
import MetaAdsSection from "@/components/MetaAdsSection";
import AutomationSection from "@/components/AutomationSection";

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
      </main>
      <Footer />
    </div>
  );
}


