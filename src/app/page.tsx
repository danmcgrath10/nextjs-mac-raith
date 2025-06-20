import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { FAQSchema } from "@/components/seo/faq-schema";

// SEO-optimized FAQ data
const audioEngineeringFAQs = [
  {
    question: "How long does a typical mixing project take?",
    answer: "Most mixing projects are completed within 3-4 business days depending on complexity. Rush delivery available within 24-48 hours for an additional fee."
  },
  {
    question: "What file formats do you accept for mixing?",
    answer: "We accept all major audio formats including WAV, AIFF, FLAC at 24-bit/48kHz or higher."
  },
  {
    question: "Do you offer revisions on your mixing and mastering services?",
    answer: "Yes! Each service includes 2 rounds of revisions to ensure you're completely satisfied with the final result. Additional revisions available at hourly rates."
  },
  {
    question: "What makes Mac Raith's mixing and mastering different?",
    answer: "Professional mixing and mastering expertise combined with modern audio engineering techniques. Based in Boston with dedicated focus on quality, personalized service, and helping artists achieve their vision."
  },
  {
    question: "Can you work with artists outside of Boston?",
    answer: "Absolutely! We serve artists globally through secure cloud-based file sharing and online collaboration. Professional mixing and mastering services delivered remotely with the same quality as in-person sessions."
  },
  {
    question: "What genres do you specialize in for mixing and mastering?",
    answer: "We provide professional mixing and mastering across Hip Hop, Pop, Indie, and experimental music. Our customer-focused approach adapts to any musical style with modern techniques."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* SEO FAQ Schema */}
      <FAQSchema faqs={audioEngineeringFAQs} />
      
      {/* Page Structure with proper semantic HTML */}
      <Navigation />
      
      <article itemScope itemType="https://schema.org/WebPage">
        <header>
          <HeroSection />
        </header>
        
        <section id="about" aria-labelledby="about-heading" itemScope itemType="https://schema.org/AboutPage">
          <AboutSection />
        </section>
        
        <section id="services" aria-labelledby="services-heading" itemScope itemType="https://schema.org/Service">
          <ServicesSection />
        </section>
        
        <section id="portfolio" aria-labelledby="portfolio-heading" itemScope itemType="https://schema.org/CreativeWork">
          <PortfolioSection />
        </section>
        
        <section id="contact" aria-labelledby="contact-heading" itemScope itemType="https://schema.org/ContactPage">
          <ContactSection />
        </section>
      </article>
      
      <Footer />
    </main>
  );
}