import { useState } from "react";
import { MessageCircle, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { LOCATION, PHONE_DISPLAY, waLink, WHATSAPP_NUMBER } from "./constants";

export const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) {
      toast({ title: "Please fill in your name and message." });
      return;
    }
    const text = `Hello RGC Gadgets! My name is ${name}. ${message}`;
    window.open(waLink(text), "_blank");
    toast({ title: "Opening WhatsApp...", description: "We'll reply within minutes." });
    setName("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Get In Touch</span>
          <h2 className="font-display font-bold text-3xl md:text-5xl mt-3 mb-4 text-foreground">
            Ready to Buy or Repair? <span className="text-primary">Let's Chat.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Send us a quick message and we'll continue the conversation on WhatsApp.
          </p>

          <div className="space-y-4 mb-8">
            <a
              href={waLink("Hello RGC Gadgets!")}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-4 p-4 rounded-2xl bg-whatsapp/10 border border-whatsapp/20 hover:bg-whatsapp/15 transition-smooth"
            >
              <div className="w-12 h-12 rounded-xl bg-whatsapp grid place-items-center">
                <MessageCircle className="w-6 h-6 text-whatsapp-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">WhatsApp (preferred)</p>
                <p className="font-semibold text-foreground">+{WHATSAPP_NUMBER}</p>
              </div>
            </a>
            <a
              href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`}
              className="flex items-center gap-4 p-4 rounded-2xl bg-surface border border-border hover:border-primary/30 transition-smooth"
            >
              <div className="w-12 h-12 rounded-xl bg-primary grid place-items-center">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Call us</p>
                <p className="font-semibold text-foreground">{PHONE_DISPLAY}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface border border-border">
              <div className="w-12 h-12 rounded-xl bg-secondary grid place-items-center">
                <MapPin className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Visit our shop</p>
                <p className="font-semibold text-foreground">{LOCATION}</p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-card rounded-3xl p-8 shadow-card border border-border space-y-5"
        >
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Your Name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="h-12"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us what you need — a phone, laptop, or repair..."
              rows={6}
            />
          </div>
          <Button type="submit" variant="cta" size="xl" className="w-full">
            <Send /> Send via WhatsApp
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Your message opens a WhatsApp chat — no spam, ever.
          </p>
        </form>
      </div>
    </section>
  );
};
