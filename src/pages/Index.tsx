import FloatingNav from "@/components/FloatingNav";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import TrustedByMarquee from "@/components/TrustedByMarquee";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import FAQSection from "@/components/FAQ";
import QuoteStack from "@/components/Quote";

const Divider = () => (
  <div className="w-full border-t border-border"></div>
);

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingNav />

      <div className="max-w-6xl mx-auto border-l border-r border-border">
        <HeroSection />
      </div>

      <Divider />

      <div className="max-w-6xl mx-auto border-l border-r border-border">
        <Marquee />
      </div>

      <Divider />

      <div className="max-w-6xl mx-auto border-l border-r border-border">
        <ProjectsSection />
      </div>

      <Divider />

      <div className="max-w-6xl mx-auto border-l border-r border-border">
        <QuoteStack />
      </div>

      <Divider />

      <div className="max-w-6xl mx-auto border-l border-r border-border">
        <ServicesSection />
      </div>

      <Divider />

      <div className="max-w-6xl mx-auto border-l border-r border-border">
        <PricingSection />
      </div>

      <Divider />

      <div className="max-w-6xl mx-auto border-l border-r border-border">
        <TrustedByMarquee />
      </div>

      <Divider />

      <div className="max-w-6xl mx-auto border-l border-r border-border">
        <FAQSection />
      </div>

      <Divider />

      <div className="max-w-6xl mx-auto border-l border-r border-border">
        <BlogSection />
      </div>

      <Divider />

      <Footer />

      {/* Bottom Gradient Blur */}
      <div style={{ maskImage: "linear-gradient(to top, black 60%, transparent 100%)" }} className="pointer-events-none fixed bottom-0 left-0 w-full h-16 shadow-[0_8px_30px_rgba(0,0,0,0.25)] bg-gradient-to-t from-background-transparent via-background-transparent to-transparent backdrop-blur-sm z-50" />
    
    </div>
  );
};

export default Index;