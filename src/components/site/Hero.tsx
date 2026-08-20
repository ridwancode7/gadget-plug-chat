import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, ShieldCheck, Zap, Star } from "lucide-react";
import heroImg from "@/assets/hero-gadgets.jpg";
import { waLink } from "./constants";

export const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero">
    <div className="absolute inset-0 opacity-40">
      <img src={heroImg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(218_86%_14%)] via-[hsl(218_86%_14%)/0.7] to-transparent" />
    </div>
    {/* glow blobs */}
    <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
    <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-primary-glow/20 blur-3xl" />

    <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-16">
      <div className="text-white animate-fade-up">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm font-medium mb-6">
          <Star className="w-4 h-4 text-secondary fill-secondary" /> Trusted by 1,000+ happy customers
        </span>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6">
          Your Trusted <span className="text-secondary">Gadget Plug</span> for Phones, Laptops & Repairs
        </h1>
        <p className="text-lg text-white/80 max-w-xl mb-8 leading-relaxed">
          Buy quality devices, fix your gadgets, and get expert service — all in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild variant="cta" size="xl">
            <a href={waLink("Hi! I'd like to chat about your gadgets.")} target="_blank" rel="noopener">
              <MessageCircle /> Chat on WhatsApp
            </a>
          </Button>
          <Button asChild variant="heroOutline" size="xl" className="rounded-full">
            <a href="#products">View Products <ArrowRight /></a>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
          {[
            { icon: ShieldCheck, label: "100% Original" },
            { icon: Zap, label: "Same-Day Repairs" },
            { icon: Star, label: "5-Star Service" },
          ].map((f) => (
            <div key={f.label} className="text-white/90">
              <f.icon className="w-6 h-6 text-secondary mb-2" />
              <p className="text-sm font-medium">{f.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block relative animate-fade-up">
        <div className="relative animate-float">
          <img
            src={heroImg}
            alt="Premium smartphones, laptops, JBL speakers and accessories from RGC Gadgets"
            className="rounded-3xl shadow-blue w-full"
            width={1920}
            height={1080}
          />
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-card flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-whatsapp grid place-items-center">
              <MessageCircle className="w-6 h-6 text-whatsapp-foreground" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Reply within</p>
              <p className="font-display font-bold text-foreground">2 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
