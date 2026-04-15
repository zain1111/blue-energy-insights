import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";
import { SITE } from "@/config/site";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80";

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <HeroSection
        imageUrl={HERO_IMAGE}
        title="Careers"
        subtitle="Build your career with a team committed to excellence in the field."
      />

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto max-w-2xl px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Join our team</h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            We are always interested in connecting with skilled professionals who share our values for safety, quality,
            and service. Send your resume or inquiry to our careers inbox and a member of our team will be in touch.
          </p>
          <a
            href={`mailto:${SITE.careersEmail}`}
            className="inline-flex items-center gap-2 rounded-md border-2 border-highlight bg-foreground px-8 py-4 font-heading text-sm font-bold uppercase tracking-[0.15em] text-background transition-colors hover:bg-foreground/90"
          >
            <Mail className="h-5 w-5" />
            {SITE.careersEmail}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
