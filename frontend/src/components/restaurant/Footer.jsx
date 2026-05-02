import { Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo, Wordmark } from "./Logo";

// ANPC compliance badges (Romanian consumer-protection)
// Using inline styled badges so they always render — replicating the
// standard look used on Romanian commercial sites.
const AnpcBadge = ({ href, label, sub, testId }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    data-testid={testId}
    title={label}
    className="group flex items-center gap-3 bg-white text-stone-900 pl-3 pr-4 py-2 rounded-sm shadow-sm hover:shadow-md transition-shadow w-[170px]"
  >
    {/* Romanian flag stripe */}
    <span className="flex h-9 w-1.5 shrink-0 overflow-hidden rounded-[1px]">
      <span className="flex-1 bg-[#002B7F]" />
      <span className="flex-1 bg-[#FCD116]" />
      <span className="flex-1 bg-[#CE1126]" />
    </span>
    <span className="leading-tight">
      <span className="block font-semibold tracking-wide text-[10px] text-[#002B7F]">
        ANPC
      </span>
      <span className="block font-bold text-xs text-stone-900">{label}</span>
      <span className="block text-[9px] text-stone-500 leading-tight">
        {sub}
      </span>
    </span>
  </a>
);

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-stone-950 border-t border-white/5 py-16 md:py-24 grain-overlay"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Top grid: brand · address · social */}
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-3 text-stone-100 mb-3">
              <Logo className="h-10 w-auto text-stone-100" />
              <Wordmark className="text-3xl" />
            </div>
            <p className="mt-8 max-w-md text-stone-400 font-light text-sm leading-relaxed">
              O masă caldă cu mâncare ca acasă — povești, mămăligă și un foc
              care nu se stinge niciodată.
            </p>
          </div>

          <div className="col-span-6 md:col-span-3 md:col-start-7">
            <div className="text-[11px] uppercase label-tracking text-stone-500 mb-5">
              Vino la noi
            </div>
            <ul className="space-y-2 text-stone-200 font-light">
              <li>Splaiul Independenței 290</li>
              <li>Complex Studențesc Regie, București</li>
              <li className="text-stone-400">0753 473 781</li>
              <li className="text-stone-400">support@mariasiion.ro</li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="text-[11px] uppercase label-tracking text-stone-500 mb-5">
              Urmărește-ne
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  data-testid="social-instagram"
                  className="inline-flex items-center gap-2 text-stone-200 hover:text-amber-500 transition-colors underline-animate"
                >
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  data-testid="social-facebook"
                  className="inline-flex items-center gap-2 text-stone-200 hover:text-amber-500 transition-colors underline-animate"
                >
                  <Facebook className="w-4 h-4" /> Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & ANPC row */}
        <div className="pt-10 border-t border-white/5 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <div className="text-[11px] uppercase label-tracking text-stone-500 mb-4">
              Informații
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-3 mb-6">
              <li>
                <Link
                  to="/termeni-si-conditii"
                  data-testid="footer-link-termeni"
                  className="text-sm font-light text-stone-300 hover:text-amber-500 transition-colors underline-animate"
                >
                  Termeni și Condiții
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  data-testid="footer-link-cookies"
                  className="text-sm font-light text-stone-300 hover:text-amber-500 transition-colors underline-animate"
                >
                  Cookies
                </Link>
              </li>
              <li>
                <Link
                  to="/confidentialitate"
                  data-testid="footer-link-confidentialitate"
                  className="text-sm font-light text-stone-300 hover:text-amber-500 transition-colors underline-animate"
                >
                  Confidențialitate
                </Link>
              </li>
            </ul>
            <div className="text-xs text-stone-500 font-light leading-relaxed max-w-xl">
              SC RESTAURANT LA MARIA SI ION SRL · CUI 43718579
              <br />
              Sediu: Splaiul Independenței 290, Complex Studențesc Regie, București
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 md:text-right">
            <div className="text-[11px] uppercase label-tracking text-stone-500 mb-4 md:text-right">
              Protecția consumatorului
            </div>
            <div className="flex flex-wrap md:justify-end items-center gap-3">
              <AnpcBadge
                href="https://anpc.ro/ce-este-sal/"
                label="SAL"
                sub="Soluționare Alternativă"
                testId="anpc-sal-badge"
              />
              <AnpcBadge
                href="https://ec.europa.eu/consumers/odr"
                label="SOL"
                sub="Soluționare Online"
                testId="anpc-sol-badge"
              />
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] uppercase label-tracking text-stone-500">
          <div>
            © {new Date().getFullYear()} La Maria și Ion · Toate drepturile rezervate
          </div>
          <a
            href="#top"
            data-testid="footer-back-to-top"
            className="hover:text-amber-500 transition-colors"
          >
            Sus, la început
          </a>
        </div>

        {/* Massive responsive wordmark — SVG always fits container */}
        <div
          data-testid="footer-wordmark"
          className="mt-20 md:mt-28 select-none pointer-events-none"
        >
          <svg
            viewBox="0 0 900 130"
            preserveAspectRatio="xMidYMid meet"
            className="block w-full h-auto"
            aria-hidden="true"
          >
            <text
              x="0"
              y="115"
              textLength="900"
              lengthAdjust="spacingAndGlyphs"
              fontFamily="'Cormorant Garamond', serif"
              fontStyle="italic"
              fontWeight="400"
              fontSize="140"
              fill="#1c1917"
              letterSpacing="-2"
            >
              La Maria și Ion.
            </text>
          </svg>
        </div>
      </div>
    </footer>
  );
};
