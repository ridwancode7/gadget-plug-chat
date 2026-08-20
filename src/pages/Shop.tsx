import { Link } from "react-router-dom";
import { MessageCircle, Smartphone, Laptop, Headphones, Gamepad2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Seo } from "@/components/site/Seo";
import { waLink } from "@/components/site/constants";
import phoneImg from "@/assets/product-phone.jpg";
import laptopImg from "@/assets/product-laptop.jpg";
import audioImg from "@/assets/product-audio.jpg";
import gamingImg from "@/assets/product-gaming.jpg";

const categories = [
  {
    icon: Smartphone,
    title: "Smartphones",
    img: phoneImg,
    desc: "Brand new and clean UK-used iPhones, Samsung, Tecno, Infinix and more.",
    bullets: ["Battery health checked before sale", "Original chargers and cables", "Swap and top-up options available"],
  },
  {
    icon: Laptop,
    title: "Laptops & Tablets",
    img: laptopImg,
    desc: "Work, school and creator machines from HP, Dell, Lenovo, Apple and Asus.",
    bullets: ["RAM and SSD upgrades on request", "Windows or macOS set up for you", "iPads and Android tablets in stock"],
  },
  {
    icon: Headphones,
    title: "Speakers & Audio",
    img: audioImg,
    desc: "JBL speakers, earbuds, headphones and party sound for every budget.",
    bullets: ["Genuine JBL products", "Wireless earbuds and headsets", "Test before you pay in-store"],
  },
  {
    icon: Gamepad2,
    title: "Gaming & Accessories",
    img: gamingImg,
    desc: "Consoles, controllers, power banks, chargers, cases and screen protectors.",
    bullets: ["Controllers and gaming pads", "Fast-charge power banks", "Cases, glass and cables"],
  },
];

const Shop = () => (
  <>
    <Seo
      title="Shop Phones, Laptops & Accessories | RGC Gadgets"
      description="Browse smartphones, laptops, tablets, JBL speakers, gaming gear and accessories at RGC Gadgets. Order on WhatsApp with nationwide delivery."
    />
    <PageHero
      eyebrow="Shop"
      title="Quality Gadgets at Prices That Make Sense"
      subtitle="New and neatly used devices, tested before they leave our shop. Tell us your budget and we'll match you with the right device."
      waMessage="Hi RGC Gadgets! I'd like to see what's available in your shop."
    />

    <section className="py-16 md:py-24 bg-background">
      <div className="container space-y-14">
        {categories.map((c, i) => (
          <article key={c.title} className="grid lg:grid-cols-2 gap-10 items-center">
            <div className={i % 2 ? "lg:order-2" : ""}>
              <img
                src={c.img}
                alt={`${c.title} available at RGC Gadgets`}
                loading="lazy"
                width={1024}
                height={768}
                className="rounded-3xl shadow-card w-full object-cover aspect-[4/3]"
              />
            </div>
            <div className={i % 2 ? "lg:order-1" : ""}>
              <div className="w-12 h-12 rounded-xl bg-gradient-blue grid place-items-center mb-5 shadow-blue">
                <c.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-3">{c.title}</h2>
              <p className="text-muted-foreground text-lg mb-5 leading-relaxed">{c.desc}</p>
              <ul className="space-y-2 mb-7">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-foreground">
                    <ShieldCheck className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="whatsapp" size="lg" className="rounded-full">
                <a href={waLink(`Hi RGC Gadgets! I'm interested in ${c.title}. What do you have available?`)} target="_blank" rel="noopener">
                  <MessageCircle /> Ask about {c.title}
                </a>
              </Button>
            </div>
          </article>
        ))}

        <p className="text-center text-muted-foreground">
          Device already giving you trouble?{" "}
          <Link to="/repairs" className="text-primary font-semibold hover:underline">
            See our repair services
          </Link>
          .
        </p>
      </div>
    </section>

    <CtaBand
      title="Can't find the exact device?"
      text="Send us the model and your budget — we source devices for customers every week."
      waMessage="Hi RGC Gadgets! I'm looking for a specific device."
    />
  </>
);

export default Shop;