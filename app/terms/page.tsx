import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TermsOfServiceContent from "@/components/TermsOfServiceContent";

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#121212] min-h-screen w-full">
      <Header />
      <main className="w-full">
        <TermsOfServiceContent />
      </main>
      <Footer />
    </div>
  );
}
