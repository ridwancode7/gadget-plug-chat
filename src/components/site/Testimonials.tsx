import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Tunde A.", role: "Verified Customer", text: "Great service, my phone was fixed same day! Very professional team." },
  { name: "Chioma E.", role: "Verified Customer", text: "Affordable and original gadgets, highly recommend RGC to anyone." },
  { name: "Michael O.", role: "Repeat Buyer", text: "Very reliable, I always buy my devices here. They never disappoint." },
];

export const Testimonials = () => (
  <section id="reviews" className="py-20 md:py-28 bg-surface">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Testimonials</span>
        <h2 className="font-display font-bold text-3xl md:text-5xl mt-3 mb-4 text-foreground">
          What Our Customers Say
        </h2>
        <p className="text-muted-foreground text-lg">Real reviews from real people who chose RGC Gadgets.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="relative bg-card rounded-2xl p-7 shadow-soft hover:shadow-card transition-smooth border border-border"
          >
            <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-foreground leading-relaxed mb-6">"{r.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-blue grid place-items-center text-primary-foreground font-bold">
                {r.name[0]}
              </div>
              <div>
                <p className="font-semibold text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
