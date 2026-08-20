import { About } from "@/components/site/About";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Seo } from "@/components/site/Seo";

const AboutPage = () => (
  <>
    <Seo
      title="About RGC Gadgets — Trusted Gadget Store & Repair Shop"
      description="RGC Gadgets sells quality phones, laptops and accessories and repairs devices in Mowe, Ogun State. Learn about our team, values and service promise."
    />
    <PageHero
      eyebrow="About Us"
      title="A Gadget Plug Built on Honesty and Real Service"
      subtitle="We started RGC Gadgets to make quality devices and dependable repairs easy to get, without inflated prices or guesswork."
    />
    <About />
    <WhyUs />
    <Testimonials />
    <CtaBand
      title="Come say hello"
      text="Visit us in Mowe, Ogun State, or start the conversation on WhatsApp today."
      waMessage="Hi RGC Gadgets! I'd like to know more about you."
    />
  </>
);

export default AboutPage;