import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground py-10">
    <div className="container mx-auto px-4 text-center">
      <p className="text-secondary text-sm">
        © {new Date().getFullYear()} Kashmir Blue Energy. All rights reserved.
      </p>
      <div className="flex justify-center gap-6 mt-4">
        <Link to="/" className="text-secondary/70 hover:text-secondary text-sm transition-colors">Home</Link>
        <Link to="/services" className="text-secondary/70 hover:text-secondary text-sm transition-colors">Services</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
