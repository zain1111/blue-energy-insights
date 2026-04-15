import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-card py-16">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
            Kashmir Blue Energy
          </h3>
          <p className="text-muted-foreground text-sm max-w-xs">
            Expert oilfield services delivering reliable well solutions across the energy sector.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-16">
          <div>
            <h4 className="font-heading text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground text-sm transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
              Contact
            </h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground text-sm">+1 (234) 567-890</li>
              <li className="text-muted-foreground text-sm">info@kashmirblue.com</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-6">
        <p className="text-muted-foreground text-xs text-center">
          © {new Date().getFullYear()} Kashmir Blue Energy. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
