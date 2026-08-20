import { ShieldCheck, BadgeDollarSign, PackageSearch, Zap, HeartHandshake, Clock } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Trusted & Reliable", desc: "Honest dealings and warranties you can count on." },
  { icon: BadgeDollarSign, title: "Affordable Prices", desc: "Best value for new and UK-used devices." },
  { icon: PackageSearch, title: "Wide Product Range", desc: "Phones, laptops, audio, gaming and accessories." },
  { icon: Zap, title: "Fast Repairs", desc: "Most fixes done same-day by skilled technicians." },
  { icon: HeartHandshake, title: "Customer-First", desc: "We listen, advise and deliver real satisfaction." },
  { icon: Clock, title: "Quick Response", desc: "We reply on WhatsApp within minutes, every day." },
];

export const WhyUs = () => (
  <section id="why" className="py-20 md:py-28 bg-gradient-hero relative overflow-hidden">
    <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl" />
    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

    <div className="container relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-14 text-white">
        <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Why Choose Us</span>
        <h2 className="font-display font-bold text-3xl md:text-5xl mt-3 mb-4">
          Built on Trust. Powered by Expertise.
        </h2>
        <p className="text-white/80 text-lg">
          Six reasons thousands of customers keep coming back to RGC Gadgets.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f) => (
          <div
            key={f.title}
            className="group bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-secondary/40 transition-smooth"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-cta grid place-items-center mb-5 shadow-glow group-hover:scale-110 transition-smooth">
              <f.icon className="w-7 h-7 text-secondary-foreground" />
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-2">{f.title}</h3>
            <p className="text-white/70 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
