import { CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import repairImg from "@/assets/repair-service.jpg";
import { waLink } from "./constants";

const points = [
  "Reliable, honest service every single time",
  "Quality, original gadgets at fair prices",
  "Skilled repairs by experienced technicians",
  "Customers across Nigeria — beyond our shop",
];

export const About = () => (
  <section id="about" className="py-20 md:py-28 bg-background">
    <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="relative order-2 lg:order-1">
        <div className="absolute -inset-4 bg-gradient-blue rounded-3xl rotate-2 opacity-20 blur-2xl" />
        <img
          src={repairImg}
          alt="A3 Prime Gadgets technician repairing a smartphone"
          loading="lazy"
          width={1024}
          height={768}
          className="relative rounded-3xl shadow-card w-full"
        />
        <div className="absolute -bottom-6 -right-6 bg-gradient-cta text-secondary-foreground rounded-2xl p-5 shadow-glow hidden md:block">
          <p className="font-display font-extrabold text-3xl">5+ yrs</p>
          <p className="text-sm opacity-90">of trusted service</p>
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <span className="text-secondary font-semibold uppercase tracking-wider text-sm">About Us</span>
        <h2 className="font-display font-bold text-3xl md:text-5xl mt-3 mb-6 text-foreground leading-tight">
          Helping you get the <span className="text-primary">best gadgets</span> & reliable repairs — without stress.
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          A3 Prime Gadgets is a team of tech enthusiasts dedicated to making quality
          devices and dependable repairs accessible to everyone. Whether you need a new
          phone, a laptop upgrade, or a quick fix — we treat every customer like family.
        </p>
        <ul className="space-y-3 mb-8">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-foreground">
              <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <Button asChild variant="cta" size="lg" className="rounded-full">
          <a href={waLink("Hi! I'd like to learn more about A3 Prime Gadgets.")} target="_blank" rel="noopener">
            <MessageCircle /> Talk to Us on WhatsApp
          </a>
        </Button>
      </div>
    </div>
  </section>
);
