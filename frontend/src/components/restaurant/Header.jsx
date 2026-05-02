import { useEffect, useState } from "react";
import { Menu as MenuIcon, X, Download } from "lucide-react";
import { Logo, Wordmark } from "./Logo";

const MENU_PDF_URL =
  "https://customer-assets.emergentagent.com/job_restaurant-io/artifacts/1se2sw4l_meniu%20%281%29.pdf";

const links = [
  { label: "Poveste", testid: "story", href: "#story" },
  { label: "Meniu", testid: "menu", href: "#menu" },
  { label: "Galerie", testid: "gallery", href: "#gallery" },
  { label: "Contact", testid: "visit", href: "#contact" },
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
          className="flex items-center gap-3 group text-stone-100"
        >
          <Logo className="h-9 w-auto text-stone-100" />
          <Wordmark className="text-xl text-stone-100 hidden sm:inline-block" />
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-${l.testid}-link`}
              className="text-xs uppercase label-tracking text-stone-300 hover:text-amber-500 transition-colors underline-animate"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={MENU_PDF_URL}
          target="_blank"
          rel="noreferrer"
          download="meniu-la-maria-si-ion.pdf"
          data-testid="download-menu-cta-header"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase label-tracking border border-stone-700 text-stone-100 hover:bg-amber-600 hover:border-amber-600 hover:text-stone-950 transition-colors"
        >
          <Download className="w-3.5 h-3.5" />
          Descarcă Meniul
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
                data-testid={`mobile-nav-${l.testid}-link`}
                className="text-sm uppercase label-tracking text-stone-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href={MENU_PDF_URL}
              target="_blank"
              rel="noreferrer"
              download="meniu-la-maria-si-ion.pdf"
              onClick={() => setOpen(false)}
              data-testid="download-menu-cta-mobile"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs uppercase label-tracking border border-amber-600 text-amber-500 mt-2"
            >
              <Download className="w-3.5 h-3.5" />
              Descarcă Meniul
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
