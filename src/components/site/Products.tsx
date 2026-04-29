import { Smartphone, Laptop, Headphones, Gamepad2, Wrench, Cpu, KeyRound, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "./constants";
import phoneImg from "@/assets/product-phone.jpg";
import laptopImg from "@/assets/product-laptop.jpg";
import audioImg from "@/assets/product-audio.jpg";
import gamingImg from "@/assets/product-gaming.jpg";
import repairImg from "@/assets/repair-service.jpg";

const items = [
  { icon: Smartphone, title: "Smartphones", desc: "New & UK-used phones from top brands at honest prices.", img: phoneImg },
  { icon: Laptop, title: "Laptops & Tablets", desc: "Reliable laptops and tablets for work, study and creators.", img: laptopImg },
  { icon: Headphones, title: "Speakers & Accessories", desc: "JBL speakers, earbuds, chargers, cables and more.", img: audioImg },
  { icon: Gamepad2, title: "Gaming Devices", desc: "Controllers, consoles and gaming gear for every level.", img: gamingImg },
  { icon: Wrench, title: "Phone Repairs", desc: "Screen, battery and board-level fixes — done right.", img: repairImg },
  { icon: Cpu, title: "Laptop Servicing", desc: "Cleaning, upgrades, OS installs and full diagnostics.", img: repairImg },
  { icon: KeyRound, title: "Unlocking & Software", desc: "Network unlocks, iCloud help and software fixes.", img: repairImg },
];

export const Products = () => (
  <section id="products" className="py-20 md:py-28 bg-surface">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-secondary font-semibold uppercase tracking-wider text-sm">What We Offer</span>
        <h2 className="font-display font-bold text-3xl md:text-5xl mt-3 mb-4 text-foreground">
          Products & Services in One Place
        </h2>
        <p className="text-muted-foreground text-lg">
          From the latest gadgets to expert repairs — everything you need under one trusted roof.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <article
            key={it.title}
            className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-smooth border border-border hover:border-primary/30 flex flex-col"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                width={768}
                height={576}
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
              />
              <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/95 backdrop-blur grid place-items-center shadow-soft">
                <it.icon className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div className="p-6 flex flex-col gap-4 flex-1">
              <div className="flex-1">
                <h3 className="font-display font-bold text-xl text-foreground mb-2">{it.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{it.desc}</p>
              </div>
              <Button asChild variant="whatsapp" className="w-full rounded-full">
                <a
                  href={waLink(`Hi! I'm interested in ${it.title}. Please share details.`)}
                  target="_blank"
                  rel="noopener"
                >
                  <MessageCircle /> Inquire on WhatsApp
                </a>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
