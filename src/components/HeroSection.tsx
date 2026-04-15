import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  videoUrl?: string;
}

const HeroSection = ({ title, subtitle, children, videoUrl }: HeroSectionProps) => {
  const defaultVideo = "https://garberbrosinc.com/assets/videos/About.mp4";

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoUrl || defaultVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-8">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default HeroSection;
