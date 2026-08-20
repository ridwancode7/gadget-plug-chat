import { Link } from "react-router-dom";
import { Wrench, Battery, Droplets, Cpu, KeyRound, MonitorSmartphone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Seo } from "@/components/site/Seo";
import { waLink } from "@/components/site/constants";
import repairImg from "@/assets/repair-service.jpg";

const services = [
  { icon: MonitorSmartphone, title: "Screen Replacement", desc: "Cracked or dead display on iPhone, Samsung, Tecno, Infinix and more — replaced with quality panels." },
  { icon: Battery, title: "Battery Replacement", desc: "Phone dying too fast? We fit fresh batteries and check charging boards." },
  { icon: Droplets, title: "Water Damage Recovery", desc: "Full teardown, ultrasonic cleaning and board treatment to bring devices back." },
  { icon: Cpu, title: "Laptop Servicing", desc: "Cleaning, thermal paste, keyboard and hinge fixes, RAM and SSD upgrades." },
  { icon: KeyRound, title: "Unlocking & Software", desc: "Network unlocks, OS installs, flashing and software troubleshooting." },
  { icon: Wrench, title: "Board-Level Repairs", desc: "Charging ports, no-power faults and micro-soldering handled in-house." },
];

const steps = [
  { n: "01", title: "Tell us the fault", desc: "Message us on WhatsApp with your device model and what's wrong." },
  { n: "02", title: "Free diagnosis", desc: "We test the device and give you an honest quote before any work starts." },
  { n: "03", title: "Repair & test", desc: "Our technicians fix it and run full checks so nothing is left broken." },
  { n: "04", title: "Pick up or delivery", desc: "Collect at our shop in Mowe or we dispatch it back to you." },
];

const Repairs = () => (
  <>
    <Seo
      title="Phone & Laptop Repairs in Mowe, Ogun | RGC Gadgets"
      description="Screen and battery replacement, water damage recovery, laptop servicing, unlocking and board-level repairs. Free diagnosis, most fixes same day."
    />
    <PageHero
      eyebrow="Repairs & Servicing"
      title="Expert Phone & Laptop Repairs You Can Trust"
      subtitle="Free diagnosis, honest quotes and most repairs completed the same day by experienced technicians."
      waMessage="Hi RGC Gadgets! My device needs a repair."
    />

    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-card rounded-2xl p-7 border border-border shadow-soft hover:shadow-card hover:border-primary/30 transition-smooth">
              <div className="w-12 h-12 rounded-xl bg-gradient-blue grid place-items-center mb-5 shadow-blue">
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="font-display font-bold text-xl text-foreground mb-2">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
              <Button asChild variant="whatsapp" className="w-full rounded-full">
                <a href={waLink(`Hi RGC Gadgets! I need help with: ${s.title}.`)} target="_blank" rel="noopener">
                  <MessageCircle /> Get a quote
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24 bg-surface">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <img
          src={repairImg}
          alt="RGC Gadgets technician repairing a smartphone"
          loading="lazy"
          width={1024}
          height={768}
          className="rounded-3xl shadow-card w-full"
        />
        <div>
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">How It Works</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mt-3 mb-8">
            Four simple steps to a working device
          </h2>
          <ol className="space-y-6">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-5">
                <span className="font-display font-extrabold text-2xl text-primary/40">{s.n}</span>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-muted-foreground mt-8">
            Repair not worth it?{" "}
            <Link to="/shop" className="text-primary font-semibold hover:underline">
              Browse replacement devices
            </Link>
            .
          </p>
        </div>
      </div>
    </section>

    <CtaBand
      title="Send us your device details"
      text="Share the model and the fault on WhatsApp and we'll tell you what it takes to fix it."
      waMessage="Hi RGC Gadgets! Here's my device and the fault:"
    />
  </>
);

export default Repairs;