import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard = ({ id, title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <Link
      to={`/services#${id}`}
      className="group block bg-card border border-border rounded-lg p-6 service-card-hover"
    >
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
        <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
      </div>
      <h3 className="font-heading text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </Link>
  );
};

export default ServiceCard;
