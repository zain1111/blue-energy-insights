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
      className="group block bg-card rounded-none p-8 border border-border hover:border-primary transition-all duration-300"
    >
      <div className="flex items-start gap-5">
        <div className="h-14 w-14 rounded-none bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
          <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
        </div>
        <div>
          <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
          <div className="mt-4 w-10 h-0.5 bg-highlight opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
