import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1581092918056-0c4c3acd391c?auto=format&fit=crop&w=1920&q=80";

const pillars = [
  ["Committed to health & safety", "Demonstrate leadership", "Accountability"],
  ["Adhere to regulatory standards", "Support energy advancements", "SAFE day, tomorrow & career"],
];

const Safety = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <HeroSection
        imageUrl={HERO_IMAGE}
        title="Safety"
        subtitle="Committed to safety"
      />

      <article className="bg-background py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">QHSE</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Our commitment to safety
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Kashmir Blue Energy</strong> will always hold safety as an equal to
              production. We are uncompromising in our commitment to the health and safety of our employees and to the
              protection of the environment. Our management team strives to continually improve our processes,
              demonstrate leadership, and promote quality as an integrated part of our business.
            </p>
            <p>
              We believe in accountability, expect all employees to adhere to regulatory standards, and actively support
              the advancement of the oil &amp; gas industry&apos;s health and safety practices. Every employee is
              responsible for achieving zero accidents resulting in a SAFE day, a SAFE tomorrow, and a SAFE career.{" "}
              <strong className="text-foreground">Kashmir Blue Energy</strong> is committed to leadership in health,
              safety, and the environment. In making this statement we are committed to demonstrating to our employees
              that their participation is critical and necessary to a detailed, well maintained safety culture.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {pillars.map((col, i) => (
              <ul key={i} className="space-y-4">
                {col.map((item) => (
                  <li key={item} className="flex gap-3 text-foreground">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Safety;
