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
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6"
            >
              <h3 className="font-heading text-xl font-bold text-primary-foreground mb-2">{box.title}</h3>
              <p className="text-secondary text-sm">{box.desc}</p>
            </motion.div>
          ))}
        </div>
      </HeroSection>

      {/* Services Detail Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-20 bg-primary rounded-lg overflow-hidden">
              <h3 className="font-heading text-lg font-bold text-primary-foreground px-5 pt-5 pb-3">
                Services
              </h3>
              <ul>
                {services.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => scrollTo(s.id)}
                      className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors ${
                        activeId === s.id
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "text-primary-foreground/80 hover:bg-sidebar-accent/50"
                      }`}
                    >
                      {s.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Detail panels */}
          <div className="flex-1 space-y-16">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.id}
                  id={s.id}
                  ref={(el) => { sectionRefs.current[s.id] = el; }}
                  className="scroll-mt-24"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                      {s.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">{s.description}</p>
                  <div className="border-b border-border mt-10" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
