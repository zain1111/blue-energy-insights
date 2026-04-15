import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { services } from "@/data/services";

const heroBoxes = [
  { title: "Trusted Expertise", desc: "Decades of combined oilfield experience." },
  { title: "Safety First", desc: "Zero-compromise safety standards on every job." },
  { title: "Global Reach", desc: "Serving clients across international basins." },
];

const Services = () => {
  const [activeId, setActiveId] = useState(services[0].id);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && sectionRefs.current[hash]) {
      setTimeout(() => {
        sectionRefs.current[hash]?.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveId(hash);
      }, 300);
    }
  }, []);

  // Intersection observer to track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );
    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setActiveId(id);
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero with animated boxes */}
      <HeroSection title="Our Services" subtitle="End-to-end well services you can rely on.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-4xl mx-auto">
          {heroBoxes.map((box, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 p-6"
            >
              <h3 className="font-heading text-xl font-bold text-primary-foreground mb-2">{box.title}</h3>
              <p className="text-primary-foreground/80 text-sm">{box.desc}</p>
            </motion.div>
          ))}
        </div>
      </HeroSection>

      {/* Services Detail Section — sidebar + alternating panels */}
      <section className="py-0">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-0">
          {/* Nine-Energy-style sidebar: clean white bg, text links, accent left border */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-16 bg-sidebar py-10 pr-8">
              <nav className="space-y-0">
                {services.map((s, i) => {
                  const isActive = activeId === s.id;
                  return (
                    <motion.button
                      key={s.id}
                      onClick={() => scrollTo(s.id)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.3 }}
                      className={`relative block w-full text-left py-3 pl-5 text-sm font-medium transition-all duration-200 border-l-[3px] ${
                        isActive
                          ? "border-l-highlight text-sidebar-primary font-bold"
                          : "border-l-transparent text-primary hover:text-sidebar-primary"
                      }`}
                    >
                      {s.title}
                    </motion.button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Detail panels — alternating surface */}
          <div className="flex-1 py-10 lg:pl-10">
            {services.map((s, i) => {
              const Icon = s.icon;
              const isDark = i % 2 === 0;
              return (
                <div
                  key={s.id}
                  id={s.id}
                  ref={(el) => { sectionRefs.current[s.id] = el; }}
                  className={`scroll-mt-20 p-8 lg:p-12 mb-0 ${
                    isDark ? "bg-background" : "bg-card"
                  }`}
                >
                  <div className="flex items-start gap-5 mb-4">
                    <div className="h-14 w-14 bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-1">
                        {s.title}
                      </h2>
                      <div className="w-12 h-1 bg-highlight mb-4" />
                      <p className="text-muted-foreground leading-relaxed max-w-2xl">{s.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bright blue CTA block */}
      <section className="block-bright py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">
            Need a custom solution?
          </h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto mb-6">
            Get in touch with our team to discuss your specific well service requirements.
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

export default Services;
