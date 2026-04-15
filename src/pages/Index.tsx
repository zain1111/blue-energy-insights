import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import Footer from "@/components/Footer";
import { services } from "@/data/services";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <HeroSection
        title="Kashmir Blue Energy"
        subtitle="Expert oilfield services delivering reliable well solutions across the energy sector."
      />

      {/* Services Section — dark background */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <div>
              <p className="font-heading text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">
                Service Lines
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Meeting every challenge,<br />above and below ground.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Bright blue color block section */}
      <section className="block-bright py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to get started?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Our team of experienced professionals is ready to deliver the oilfield services you need, safely and efficiently.
          </p>
          <a
            href="/contact"
            className="inline-block bg-background text-foreground font-heading font-bold text-sm tracking-[0.1em] uppercase px-8 py-4 hover:bg-card transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
