import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_DISPLAY, waLink } from "./constants";

export const CtaBand = ({
  title = "Ready to buy or fix your device?",
  text = "Send us a message on WhatsApp — we usually reply within minutes.",
  waMessage = "Hello RGC Gadgets! I'd like to make an inquiry.",
}: {
  title?: string;
  text?: string;
  waMessage?: string;
}) => (
  <section className="py-16 md:py-20 bg-surface">
    <div className="container">
      <div className="rounded-3xl bg-gradient-hero px-8 py-12 md:px-14 md:py-16 text-white text-center shadow-card">
        <h2 className="font-display font-bold text-2xl md:text-4xl mb-3">{title}</h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">{text}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="cta" size="xl">
            <a href={waLink(waMessage)} target="_blank" rel="noopener">
              <MessageCircle /> Chat on WhatsApp
            </a>
          </Button>
          <Button asChild variant="heroOutline" size="xl" className="rounded-full">
            <a href={`tel:+${PHONE_DISPLAY.replace(/\D/g, "")}`}>
              <Phone /> {PHONE_DISPLAY}
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);