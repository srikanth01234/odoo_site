import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import Testimonials from "@/components/Testimonials";
import FeaturesSection from "@/components/FeaturesSection";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans bg-black text-white selection:bg-red-600 selection:text-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HighlightsSection />
      <Testimonials />
      <FAQ />
      {/* <ContactSection /> */}
      <Footer />
    </div>
  );
}
