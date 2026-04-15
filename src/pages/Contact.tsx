import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MapPin, Phone } from "lucide-react";
import { SITE } from "@/config/site";
import { cn } from "@/lib/utils";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  phone: z.string().min(1, "Phone is required"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const weekHours: { label: string; hours: string; dayIndex: number }[] = [
  { label: "Monday", hours: "09:00 am – 05:00 pm", dayIndex: 1 },
  { label: "Tuesday", hours: "09:00 am – 05:00 pm", dayIndex: 2 },
  { label: "Wednesday", hours: "09:00 am – 05:00 pm", dayIndex: 3 },
  { label: "Thursday", hours: "09:00 am – 05:00 pm", dayIndex: 4 },
  { label: "Friday", hours: "09:00 am – 05:00 pm", dayIndex: 5 },
  { label: "Saturday", hours: "Closed", dayIndex: 6 },
  { label: "Sunday", hours: "Closed", dayIndex: 0 },
];

const Contact = () => {
  const today = new Date().getDay();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  function onSubmit(values: FormValues) {
    toast.success("Thank you — we will respond shortly.", {
      description: `${values.name}, your message has been received.`,
    });
    form.reset();
  }

  const mapSrc = `https://maps.google.com/maps?q=${SITE.address.mapQuery}&output=embed`;

  return (
    <div className="min-h-screen">
      <Navbar />

      <HeroSection
        imageUrl={HERO_IMAGE}
        title="Contact"
        subtitle="Reach our team for sales, support, or general inquiries."
      />

      <section className="bg-background py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
            {/* Contact form */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-2">Contact form</h2>
              <p className="text-muted-foreground text-sm mb-8 max-w-md">
                Send us a message and a representative will respond as soon as possible.
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-lg">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Name <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" autoComplete="name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Email <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@company.com" autoComplete="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Phone <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="(337) 555-0100" autoComplete="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="How can we help?" className="min-h-[140px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="font-heading uppercase tracking-[0.2em] border-2 border-highlight bg-foreground text-background hover:bg-foreground/90"
                  >
                    Submit
                  </Button>
                </form>
              </Form>
            </div>

            {/* Info + hours + map */}
            <div className="space-y-10">
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
                  Better yet, see us in person!
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  We welcome visitors during business hours. Call ahead if you would like to speak with someone specific.
                </p>

                <div className="space-y-4 text-foreground">
                  <div className="flex gap-3">
                    <MapPin className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <div>
                      <p className="font-heading font-bold">{SITE.name}</p>
                      <p className="text-muted-foreground text-sm">
                        {SITE.address.street}
                        <br />
                        {SITE.address.cityStateZip}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <div className="text-sm">
                      <p>
                        <span className="text-muted-foreground">Office: </span>
                        <a href={`tel:${SITE.phoneTel}`} className="font-medium text-foreground hover:text-primary">
                          {SITE.phoneDisplay}
                        </a>
                      </p>
                      <p className="mt-2">
                        <span className="text-muted-foreground">Sales: </span>
                        <a href={`mailto:${SITE.salesEmail}`} className="font-medium text-primary hover:underline">
                          {SITE.salesEmail}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-primary mb-4">Hours</h3>
                <ul className="space-y-2 text-sm">
                  {weekHours.map((row) => {
                    const active = today === row.dayIndex;
                    return (
                      <li
                        key={row.label}
                        className={cn(
                          "flex justify-between gap-4 border-b border-border/60 pb-2",
                          active && "font-semibold",
                        )}
                      >
                        <span className={cn(active && "text-highlight")}>{row.label}</span>
                        <span className={cn(active ? "text-highlight" : "text-muted-foreground")}>{row.hours}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="overflow-hidden rounded-md border border-border shadow-sm">
                <iframe
                  title="Kashmir Blue Energy location"
                  src={mapSrc}
                  className="h-[280px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
