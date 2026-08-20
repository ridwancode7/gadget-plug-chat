import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "./constants";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  waMessage?: string;
}

export const PageHero = ({ eyebrow, title, subtitle, waMessage }: PageHeroProps) => (
  <section className="relative bg-gradient-hero pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
    <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
    <div className="absolute -bottom-40 left-1/4 w-96 h-96 rounded-full bg-primary-glow/20 blur-3xl" />
    <div className="container relative z-10 max-w-3xl text-white">
      <span className="text-secondary font-semibold uppercase tracking-wider text-sm">{eyebrow}</span>
      <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl mt-3 mb-5 leading-tight">
        {title}
      </h1>
      <p className="text-white/80 text-lg leading-relaxed">{subtitle}</p>
      {waMessage && (
        <Button asChild variant="cta" size="lg" className="rounded-full mt-8">
          <a href={waLink(waMessage)} target="_blank" rel="noopener">
            <MessageCircle /> Chat on WhatsApp
          </a>
        </Button>
      )}
    </div>
  </section>
);