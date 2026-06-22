import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhyWebsite from "@/components/WhyWebsite";
import HeroVideo from "@/components/HeroVideo";
import Included from "@/components/Included";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import WebsiteCategoriesPreview from "@/components/WebsiteCategoriesPreview";
import Testimonials from "@/components/Testimonials";
import Results from "@/components/Results";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import WhatsAppFAB from "@/components/WhatsAppFAB";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <WhyWebsite />
        <HeroVideo />
        <Included />
        <Pricing />
        <Services />
        <Process />
        <Portfolio />
        <WebsiteCategoriesPreview />
        <Testimonials />
        <Results />
        <CTA />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <MobileCTA />
      <WhatsAppFAB />
    </>
  );
}
