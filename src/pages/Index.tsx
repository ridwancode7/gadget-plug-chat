import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Products } from "@/components/site/Products";
import { About } from "@/components/site/About";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "A3 Prime Gadgets — Phones, Laptops & Expert Repairs";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Buy quality smartphones, laptops, JBL speakers and accessories. Trusted phone & laptop repairs, unlocking and servicing. Chat on WhatsApp now.");
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
};

export default Index;
