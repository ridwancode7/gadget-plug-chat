import { Hero } from "@/components/site/Hero";
import { Products } from "@/components/site/Products";
import { About } from "@/components/site/About";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Seo } from "@/components/site/Seo";

const Index = () => (
  <>
    <Seo
      title="RGC Gadgets — Phones, Laptops & Expert Repairs"
      description="Buy quality smartphones, laptops, JBL speakers and accessories. Trusted phone & laptop repairs, unlocking and servicing. Chat on WhatsApp now."
    />
    <Hero />
    <Products />
    <About />
    <WhyUs />
    <Testimonials />
    <Contact />
  </>
);

export default Index;
