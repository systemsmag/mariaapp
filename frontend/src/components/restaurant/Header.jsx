import { useEffect, useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";

const links = [
  { label: "Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-stone-950/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <a
          href="#top"
          data-testid="logo-link"
          className="flex items-center gap-3 group"
        >
          <span className="font-serif italic text-amber-600 text-2xl leading-none">M</span>
          <div className="leading-none">
            <div className="font-serif text-xl tracking-wide text-stone-100">
              La Maria si Ion
            </div>
            <div className="text-[10px] uppercase label-tracking text-stone-500 mt-1">
              Trattoria · Pizzeria
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-${l.label.toLowerCase()}-link`}
              className="text-xs uppercase label-tracking text-stone-300 hover:text-amber-500 transition-colors underline-animate"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          data-testid="reserve-cta-header"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase label-tracking border border-stone-700 text-stone-100 hover:bg-amber-600 hover:border-amber-600 hover:text-stone-950 transition-colors"
        >
          Reserve
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-stone-100 p-2"
        >
          {open ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          data-testid="mobile-menu"
          className="md:hidden bg-stone-950/95 backdrop-blur-xl border-t border-white/5"
        >
          <div className="px-6 py-8 flex flex-col gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-${l.label.toLowerCase()}-link`}
                className="text-sm uppercase label-tracking text-stone-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              data-testid="reserve-cta-mobile"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs uppercase label-tracking border border-amber-600 text-amber-500 mt-2"
            >
              Reserve a table
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
