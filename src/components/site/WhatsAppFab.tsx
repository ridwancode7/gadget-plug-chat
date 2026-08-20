import { MessageCircle } from "lucide-react";
import { waLink } from "./constants";

export const WhatsAppFab = () => (
  <a
    href={waLink("Hello RGC Gadgets! I'd like to make an inquiry.")}
    target="_blank"
    rel="noopener"
    aria-label="Chat with us on WhatsApp"
    className="fixed bottom-6 right-6 z-40 w-14 h-14 md:w-16 md:h-16 rounded-full bg-whatsapp grid place-items-center text-whatsapp-foreground shadow-glow hover:scale-110 transition-smooth animate-pulse-ring"
  >
    <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
  </a>
);
