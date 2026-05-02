import { ChevronDown, Star } from "lucide-react";
import { Link } from "react-router-dom";
import useReveal from "../../hooks/useReveal";

const HERO_IMG =
  "https://mariasiion.ro/wp-content/uploads/2024/12/448453750_764204029256764_5345791775327686708_n-1024x767.jpg";

export const Hero = () => {
  const ref = useReveal();
  return (
    <section
      id="top"
      data-testid="hero-section"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden grain-overlay"
    >
      {/* Background image — eager load (also preloaded in <head>) */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Terasa restaurantului La Maria și Ion în Regie, București"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          width="1024"
          height="767"
        />
        {/* Heavier moody overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/85 via-stone-950/70 to-stone-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/40 to-stone-950/30" />
        <div className="absolute inset-0 bg-stone-950/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 min-h-screen flex flex-col">
        <div className="flex-1 flex items-end pt-32 pb-16 md:pb-20">
          <div className="max-w-4xl reveal">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-amber-600" />
              <span className="text-[11px] uppercase label-tracking text-amber-500">
                Bun venit · Regie, București
              </span>
            </div>

            <h1 className="font-display font-medium text-stone-50 leading-[0.92] tracking-tight text-6xl sm:text-7xl md:text-8xl lg:text-[9rem]">
              La Maria si Ion
            </h1>

            <p className="mt-8 max-w-xl text-stone-300 text-base md:text-lg font-light leading-relaxed">
              Bucătărie românească autentică pe terasa din Regie. Mămăligă,
              mâncare la jar, vin la cană și o masă ca acasă — exact așa cum
              îți amintești.
            </p>

            {/* Trust badge */}
            <div className="mt-6 flex items-center gap-3 text-stone-400">
              <div className="flex items-center gap-0.5" aria-label="4.6 din 5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < 4 ? "fill-amber-500 text-amber-500" : "fill-amber-500/60 text-amber-500/60"
                    }`}
                  />
                ))}
              </div>
              <span className="text-[11px] uppercase label-tracking">
                4.6 · Peste 1.200 de recenzii pe Google
              </span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="tel:+40753473781"
                data-testid="hero-reserve-cta"
                className="inline-flex items-center gap-3 px-8 py-4 bg-amber-600 hover:bg-amber-700 text-stone-950 text-xs uppercase label-tracking transition-colors"
              >
                Sună pentru rezervare
                <ChevronDown className="w-4 h-4 -rotate-90" />
              </a>
              <Link
                to="/meniu"
                data-testid="hero-menu-cta"
                className="inline-flex items-center gap-3 px-8 py-4 border border-stone-600 text-stone-100 hover:border-amber-600 hover:text-amber-500 text-xs uppercase label-tracking transition-colors"
              >
                Vezi meniul
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom meta strip */}
        <div className="hidden md:flex items-end justify-between pb-10 text-xs uppercase label-tracking text-stone-400">
          <div>
            <div className="text-stone-500 mb-2">Program</div>
            <div className="text-stone-200">Luni — Duminică · 12:00 — 24:00</div>
          </div>
          <div className="flex items-center gap-3 text-stone-300 animate-pulse">
            <ChevronDown className="w-4 h-4" />
            <span>Coboară</span>
          </div>
          <div className="text-right">
            <div className="text-stone-500 mb-2">Ne găsești</div>
            <div className="text-stone-200">Splaiul Independenței 290, Regie</div>
          </div>
        </div>
      </div>
    </section>
  );
};
