import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#121212] min-h-screen w-full">
      <Header />
      <main className="w-full">
        <PrivacyPolicyContent />
      </main>
      <Footer />
    </div>
  );
}
