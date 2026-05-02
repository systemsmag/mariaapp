import { useState } from "react";
import { Link } from "react-router-dom";
import { menuData } from "../../data/menu";
import useReveal from "../../hooks/useReveal";

export const MenuSection = () => {
  const [active, setActive] = useState(menuData[0].id);
  const ref = useReveal();
  const current = menuData.find((c) => c.id === active);

  return (
    <section
      id="menu"
      data-testid="menu-section"
      ref={ref}
      className="relative bg-[#0c0a09] py-24 md:py-40 border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="grid grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-4 reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-amber-600" />
              <span className="text-[11px] uppercase label-tracking text-amber-500">
                Meniul casei
              </span>
            </div>
            <h2 className="font-serif font-light text-stone-50 text-5xl md:text-7xl leading-[0.95] tracking-tight">
              O seară,
              <br />
              <span className="italic text-stone-400">cu felurile la rând.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 md:pt-6 reveal">
            <p className="text-stone-300 text-base md:text-lg font-light leading-relaxed max-w-xl">
              Bucătăria noastră se schimbă cu anotimpurile, cu piețele și cu
              pescarii care răspund la telefon dis-de-dimineață. Mai jos e ce
              gătim astăzi — alege trei, alege șapte, împărțim totul.
            </p>
          </div>
        </div>

        {/* Category tabs */}
        <div
          data-testid="menu-categories"
          className="flex flex-wrap gap-2 md:gap-3 border-b border-white/5 pb-6 mb-14 overflow-x-auto"
        >
          {menuData.map((cat) => (
            <button
              key={cat.id}
              type="button"
              data-testid={`menu-tab-${cat.id}`}
              onClick={() => setActive(cat.id)}
              className={`shrink-0 px-5 py-2.5 text-[11px] uppercase label-tracking transition-colors border ${
                active === cat.id
                  ? "bg-amber-600 border-amber-600 text-stone-950"
                  : "border-stone-800 text-stone-300 hover:border-stone-500 hover:text-stone-100"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="grid grid-cols-12 gap-8 md:gap-16">
          <div className="col-span-12 md:col-span-3">
            <div className="sticky top-32">
              <div className="text-[11px] uppercase label-tracking text-stone-500 mb-3">
                {current.subtitle}
              </div>
              <h3 className="font-serif italic font-light text-stone-100 text-4xl md:text-5xl leading-tight">
                {current.title}
              </h3>
            </div>
          </div>

          <div className="col-span-12 md:col-span-9">
            <ul className="divide-y divide-white/5" data-testid={`menu-list-${current.id}`}>
              {current.items.map((item) => (
                <li
                  key={item.name}
                  data-testid={`menu-item-${item.name.replace(/\s+/g, '-').toLowerCase()}`}
                  className="py-7 group transition-colors hover:bg-stone-900/40 -mx-4 px-4"
                >
                  <div className="flex items-baseline">
                    <h4 className="font-serif text-stone-50 text-2xl md:text-3xl font-normal">
                      {item.name}
                    </h4>
                    <span className="dotted-leader" />
                    <span className="font-serif text-amber-500 text-xl md:text-2xl whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  {item.description && (
                    <p className="mt-3 text-stone-400 text-sm md:text-base font-light max-w-2xl leading-relaxed">
                      {item.description}
                    </p>
                  )}
                  {item.portion && (
                    <p className="mt-2 text-[11px] uppercase label-tracking text-stone-600">
                      {item.portion}
                    </p>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-16 pt-10 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="text-stone-500 text-xs uppercase label-tracking">
                Acestea sunt câteva specialități · Meniul complet conține peste 90 de preparate
              </div>
              <Link
                to="/meniu"
                data-testid="menu-section-full-cta"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-stone-950 text-xs uppercase label-tracking transition-colors"
              >
                Vezi meniul complet →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
