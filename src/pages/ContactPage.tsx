import { Contact } from "@/components/site/Contact";
import { PageHero } from "@/components/site/PageHero";
import { Seo } from "@/components/site/Seo";
import { LOCATION } from "@/components/site/constants";

const hours = [
  ["Monday – Friday", "8:00 AM – 7:00 PM"],
  ["Saturday", "9:00 AM – 7:00 PM"],
  ["Sunday", "By appointment on WhatsApp"],
];

const ContactPage = () => (
  <>
    <Seo
      title="Contact RGC Gadgets — WhatsApp, Call or Visit"
      description="Reach RGC Gadgets on WhatsApp at +234 813 296 5636, call us, or visit our shop in Mowe, Ogun State for gadgets and repairs."
    />
    <PageHero
      eyebrow="Contact"
      title="Talk to Us — We Reply Fast"
      subtitle={`WhatsApp is the quickest way to reach us. You can also call or visit our shop in ${LOCATION}.`}
    />
    <Contact />
    <section className="pb-20 md:pb-28 bg-background">
      <div className="container max-w-2xl">
        <div className="bg-surface border border-border rounded-3xl p-8">
          <h2 className="font-display font-bold text-2xl text-foreground mb-5">Opening Hours</h2>
          <ul className="divide-y divide-border">
            {hours.map(([d, t]) => (
              <li key={d} className="flex justify-between py-3 text-foreground">
                <span className="font-medium">{d}</span>
                <span className="text-muted-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </>
);

export default ContactPage;