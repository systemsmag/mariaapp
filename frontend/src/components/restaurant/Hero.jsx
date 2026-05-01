import { ChevronDown } from "lucide-react";
import useReveal from "../../hooks/useReveal";

const HERO_IMG =
  "https://images.unsplash.com/photo-1709548145082-04d0cde481d4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjByZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBkYXJrfGVufDB8fHx8MTc3NzY2NzM0N3ww&ixlib=rb-4.1.0&q=85";

export const Hero = () => {
  const ref = useReveal();
  return (
    <section
      id="top"
      data-testid="hero-section"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden grain-overlay"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Lucenta restaurant interior at night"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/55 to-stone-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-transparent to-stone-950/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 min-h-screen flex flex-col">
        <div className="flex-1 flex items-end pt-32 pb-16 md:pb-24">
          <div className="max-w-3xl reveal">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-amber-600" />
              <span className="text-[11px] uppercase label-tracking text-amber-500">
                Est. MMXII · Brera, Milano
              </span>
            </div>
            <h1 className="font-serif font-light text-stone-50 leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem]">
              Fuoco,
              <br />
              <span className="italic text-amber-500/95">memoria</span>,
              <br />
              farina.
            </h1>
            <p className="mt-10 max-w-xl text-stone-300 text-base md:text-lg font-light leading-relaxed">
              An Italian table built around a wood-fired hearth. Nonna&rsquo;s
              recipes, hand-pulled mozzarella, and a 72-hour dough — served
              quietly, in candlelight.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="#contact"
                data-testid="hero-reserve-cta"
                className="inline-flex items-center gap-3 px-8 py-4 bg-amber-600 hover:bg-amber-700 text-stone-950 text-xs uppercase label-tracking transition-colors"
              >
                Reserve a table
                <ChevronDown className="w-4 h-4 -rotate-90" />
              </a>
              <a
                href="#menu"
                data-testid="hero-menu-cta"
                className="inline-flex items-center gap-3 px-8 py-4 border border-stone-600 text-stone-100 hover:border-amber-600 hover:text-amber-500 text-xs uppercase label-tracking transition-colors"
              >
                View the menu
              </a>
            </div>
          </div>
        </div>

        {/* Bottom meta strip */}
        <div className="hidden md:flex items-end justify-between pb-10 text-xs uppercase label-tracking text-stone-400">
          <div>
            <div className="text-stone-500 mb-2">Dinner</div>
            <div className="text-stone-200">Tue — Sun · 19:00 — 23:30</div>
          </div>
          <div className="flex items-center gap-3 text-stone-300 animate-pulse">
            <ChevronDown className="w-4 h-4" />
            <span>Scroll</span>
          </div>
          <div className="text-right">
            <div className="text-stone-500 mb-2">Find us</div>
            <div className="text-stone-200">Via dell&apos;Orso 14, Milano</div>
          </div>
        </div>
      </div>
    </section>
  );
};
