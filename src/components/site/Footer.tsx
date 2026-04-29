import { Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";
import { BUSINESS_NAME, LOCATION, waLink } from "./constants";

export const Footer = () => (
  <footer className="bg-gradient-hero text-white pt-16 pb-8">
    <div className="container grid md:grid-cols-4 gap-10 mb-12">
      <div className="md:col-span-2">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-cta grid place-items-center font-display font-bold shadow-glow">
            A3
          </div>
          <span className="font-display font-bold text-xl">{BUSINESS_NAME}</span>
        </div>
        <p className="text-white/70 max-w-md leading-relaxed mb-5">
          Your trusted plug for phones, laptops, accessories and expert repairs.
          Quality you can rely on — service you can trust.
        </p>
        <div className="flex gap-3">
          {[Facebook, Instagram, Twitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary grid place-items-center transition-smooth"
              aria-label="Social link"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
        <ul className="space-y-2 text-white/70">
          {[
            ["Products", "#products"],
            ["About Us", "#about"],
            ["Why Choose Us", "#why"],
            ["Reviews", "#reviews"],
            ["Contact", "#contact"],
          ].map(([l, h]) => (
            <li key={h}>
              <a href={h} className="hover:text-secondary transition-smooth">{l}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display font-bold text-lg mb-4">Contact</h4>
        <ul className="space-y-2 text-white/70 text-sm">
          <li>{LOCATION}</li>
          <li>
            <a
              href={waLink("Hello!")}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 text-white hover:text-secondary transition-smooth"
            >
              <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="container border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-white/50">
      <p>© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
      <p>Crafted with care for tech lovers in Nigeria.</p>
    </div>
  </footer>
);
