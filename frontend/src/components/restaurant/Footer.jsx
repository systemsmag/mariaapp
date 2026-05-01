import { Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-stone-950 border-t border-white/5 py-16 md:py-24 grain-overlay"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-5">
            <div className="font-serif italic text-amber-600 text-3xl mb-2">
              Lucenta
            </div>
            <div className="text-[11px] uppercase label-tracking text-stone-500">
              Trattoria · Pizzeria
            </div>
            <p className="mt-8 max-w-md text-stone-400 font-light text-sm leading-relaxed">
              A small Italian table in Brera, Milano. Cooking from memory since
              2012.
            </p>
          </div>

          <div className="col-span-6 md:col-span-3 md:col-start-7">
            <div className="text-[11px] uppercase label-tracking text-stone-500 mb-5">
              Visit
            </div>
            <ul className="space-y-2 text-stone-200 font-light">
              <li>Via dell&apos;Orso 14</li>
              <li>20121 Milano</li>
              <li className="text-stone-400">+39 02 1234 5678</li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="text-[11px] uppercase label-tracking text-stone-500 mb-5">
              Follow
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

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] uppercase label-tracking text-stone-500">
          <div>© {new Date().getFullYear()} Lucenta · All rights reserved</div>
          <div className="flex items-center gap-6">
            <a href="#top" className="hover:text-amber-500 transition-colors">
              Back to top
            </a>
            <span>P.IVA 0123456 7890</span>
          </div>
        </div>

        {/* Massive wordmark */}
        <div className="mt-20 md:mt-32 select-none pointer-events-none">
          <div className="font-serif italic text-stone-900 text-[22vw] leading-[0.85] tracking-tighter">
            Lucenta.
          </div>
        </div>
      </div>
    </footer>
  );
};
