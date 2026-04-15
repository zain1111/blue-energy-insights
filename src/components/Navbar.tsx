import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { SITE } from "@/config/site";

const LOGO_SRC = "/KBE.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Safety", to: "/safety" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={LOGO_SRC} alt="Kashmir Blue Energy" className="h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`font-heading text-sm font-bold tracking-[0.15em] uppercase transition-colors hover:text-primary ${
                  location.pathname === item.to ? "text-primary" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Phone */}
        <a
          href={`tel:${SITE.phoneTel}`}
          className="hidden md:flex items-center gap-2 text-primary font-heading font-semibold text-lg"
        >
          <Phone className="h-5 w-5" />
          {SITE.phoneDisplay}
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={`block font-heading text-sm font-bold tracking-[0.15em] uppercase py-2 ${
                    location.pathname === item.to ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="flex items-center gap-2 text-primary font-heading font-semibold text-lg mt-3"
          >
            <Phone className="h-5 w-5" />
            {SITE.phoneDisplay}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
