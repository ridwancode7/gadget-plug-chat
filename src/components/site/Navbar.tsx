import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_NAME, waLink } from "./constants";

const links = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Repairs", to: "/repairs" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled ? "bg-background/85 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-blue grid place-items-center font-display font-bold text-primary-foreground shadow-blue">
            RGC
          </div>
          <span className={`font-display font-bold text-lg ${scrolled ? "text-foreground" : "text-white"}`}>
            {BUSINESS_NAME}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-smooth hover:text-secondary ${
                  scrolled ? "text-foreground" : "text-white/90"
                } ${isActive ? "text-secondary" : ""}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="cta" size="default" className="rounded-full">
            <a href={waLink("Hello RGC Gadgets, I'd like to make an inquiry.")} target="_blank" rel="noopener">
              <MessageCircle /> WhatsApp
            </a>
          </Button>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border shadow-card">
          <div className="container py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-foreground font-medium"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild variant="cta" className="rounded-full mt-2">
              <a href={waLink("Hello RGC Gadgets, I'd like to make an inquiry.")} target="_blank" rel="noopener">
                <MessageCircle /> Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
