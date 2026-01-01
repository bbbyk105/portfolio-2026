import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import FeaturesSection from "@/components/FeaturesSection";
import NewsSection from "@/components/NewsSection";
import TemplatesSection from "@/components/TemplatesSection";
import DashboardSection from "@/components/DashboardSection";
import CommunitySection from "@/components/CommunitySection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#121212] min-h-screen w-full">
      <Header />
      <main className="w-full">
        <HeroSection />
        <LogoMarquee />
        <FeaturesSection />
        <NewsSection />
        <TemplatesSection />
        <DashboardSection />
        <CommunitySection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
