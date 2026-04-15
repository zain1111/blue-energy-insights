import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import { ChevronRight } from "lucide-react";

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
          {/* Modern Sidebar */}
          <aside className="lg:w-72 shrink-0">
            <div className="sticky top-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-xl bg-gradient-to-b from-primary to-primary/80 shadow-2xl shadow-primary/20"
              >
                {/* Decorative accent line */}
                <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
                
                <div className="px-6 pt-6 pb-4">
                  <h3 className="font-heading text-xs font-bold tracking-[0.3em] uppercase text-primary-foreground/60">
                    Services
                  </h3>
                  <div className="mt-2 h-px bg-primary-foreground/15" />
                </div>

                <nav className="pb-4">
                  {services.map((s, i) => {
                    const isActive = activeId === s.id;
                    const Icon = s.icon;
                    return (
                      <motion.button
                        key={s.id}
                        onClick={() => scrollTo(s.id)}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                        className={`group relative w-full text-left px-6 py-3.5 flex items-center gap-3 transition-all duration-300 ${
                          isActive
                            ? "bg-primary-foreground/15"
                            : "hover:bg-primary-foreground/8"
                        }`}
                      >
                        {/* Active indicator */}
                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              layoutId="activeIndicator"
                              className="absolute left-0 top-0 bottom-0 w-1 bg-accent"
                              initial={{ scaleY: 0 }}
                              animate={{ scaleY: 1 }}
                              exit={{ scaleY: 0 }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                        </AnimatePresence>

                        <Icon className={`h-4 w-4 shrink-0 transition-colors duration-300 ${
                          isActive ? "text-accent" : "text-primary-foreground/50 group-hover:text-primary-foreground/80"
                        }`} />

                        <span className={`text-sm font-medium transition-colors duration-300 ${
                          isActive ? "text-primary-foreground" : "text-primary-foreground/70 group-hover:text-primary-foreground"
                        }`}>
                          {s.title}
                        </span>

                        <ChevronRight className={`h-3.5 w-3.5 ml-auto shrink-0 transition-all duration-300 ${
                          isActive
                            ? "opacity-100 translate-x-0 text-accent"
                            : "opacity-0 -translate-x-2 group-hover:opacity-60 group-hover:translate-x-0 text-primary-foreground/50"
                        }`} />
                      </motion.button>
                    );
                  })}
                </nav>
              </motion.div>
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
