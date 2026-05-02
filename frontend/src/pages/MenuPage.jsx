import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import { fullMenu } from "../data/menuFull";
import { Header } from "../components/restaurant/Header";
import { Footer } from "../components/restaurant/Footer";

const MENU_PDF_URL =
  "https://customer-assets.emergentagent.com/job_restaurant-io/artifacts/el3512v8_meniu%20%281%29.pdf";

const MenuItem = ({ item }) => (
  <li
    data-testid={`full-menu-item-${item.name.replace(/\s+/g, "-").toLowerCase().slice(0, 60)}`}
    className="py-5 group hover:bg-stone-900/40 -mx-3 px-3 transition-colors"
  >
    <div className="flex items-baseline">
      <h4 className="font-serif text-stone-50 text-lg md:text-xl font-normal pr-2">
        {item.name}
      </h4>
      <span className="dotted-leader" />
      <span className="font-serif text-amber-500 text-base md:text-lg whitespace-nowrap">
        {item.price}
      </span>
    </div>
    {item.description && (
      <p className="mt-1.5 text-stone-400 text-sm font-light leading-relaxed max-w-3xl">
        {item.description}
      </p>
    )}
    {item.portion && (
      <p className="mt-1 text-[10px] uppercase label-tracking text-stone-600">
        {item.portion}
      </p>
    )}
  </li>
);

const Category = ({ cat, refSetter }) => (
  <section
    id={cat.id}
    ref={refSetter}
    data-testid={`full-menu-category-${cat.id}`}
    className="scroll-mt-32 mb-16 md:mb-20"
  >
    <div className="flex items-baseline gap-4 mb-8 border-b border-white/5 pb-5">
      <h3 className="font-serif italic font-light text-stone-100 text-3xl md:text-4xl tracking-tight">
        {cat.title}
      </h3>
      <span className="text-[11px] uppercase label-tracking text-stone-600 ml-auto">
        {cat.items.length} preparate
      </span>
    </div>
    <ul className="divide-y divide-white/5">
      {cat.items.map((item) => (
        <MenuItem key={item.name + item.price} item={item} />
      ))}
    </ul>
  </section>
);

export default function MenuPage() {
  const [activeId, setActiveId] = useState(fullMenu[0]?.categories[0]?.id);

  // Track active section in viewport for sticky sidebar highlighting
  useEffect(() => {
    const allCats = fullMenu.flatMap((c) => c.categories);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    allCats.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Reset scroll on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      data-testid="full-menu-page"
      className="bg-stone-950 text-stone-100 min-h-screen"
    >
      <Header />

      {/* Page header */}
      <section className="relative pt-36 pb-12 md:pt-44 md:pb-16 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Link
            to="/"
            data-testid="back-home-link"
            className="inline-flex items-center gap-2 text-[11px] uppercase label-tracking text-stone-400 hover:text-amber-500 transition-colors mb-10"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Înapoi acasă
          </Link>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-amber-600" />
                <span className="text-[11px] uppercase label-tracking text-amber-500">
                  Meniul casei
                </span>
              </div>
              <h1 className="font-serif font-light text-stone-50 text-5xl md:text-7xl leading-[0.95] tracking-tight">
                Meniul complet
                <br />
                <span className="italic text-stone-400">La Maria și Ion.</span>
              </h1>
              <p className="mt-8 max-w-xl text-stone-400 text-base md:text-lg font-light leading-relaxed">
                Toate preparatele, cu gramaje și prețuri, exact așa cum le
                găsești pe masa noastră. Prețurile sunt în lei.
              </p>
            </div>

            <div className="col-span-12 md:col-span-4 flex md:justify-end items-end">
              <a
                href={MENU_PDF_URL}
                target="_blank"
                rel="noreferrer"
                download="meniu-la-maria-si-ion.pdf"
                data-testid="full-menu-download-pdf"
                className="inline-flex items-center gap-2 px-6 py-3 border border-stone-700 text-stone-100 hover:bg-amber-600 hover:border-amber-600 hover:text-stone-950 text-xs uppercase label-tracking transition-colors"
              >
                <Download className="w-4 h-4" />
                Descarcă PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Menu body */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8 md:gap-12">
            {/* Sticky side index */}
            <aside className="hidden md:block col-span-3">
              <nav
                data-testid="full-menu-side-index"
                className="sticky top-32 max-h-[calc(100vh-9rem)] overflow-y-auto pr-4"
              >
                {fullMenu.map((chapter) => (
                  <div key={chapter.chapter} className="mb-8">
                    <div className="text-[10px] uppercase label-tracking text-amber-500 mb-3">
                      {chapter.chapter}
                    </div>
                    <ul className="space-y-1.5">
                      {chapter.categories.map((cat) => (
                        <li key={cat.id}>
                          <a
                            href={`#${cat.id}`}
                            data-testid={`side-link-${cat.id}`}
                            className={`block text-sm font-light transition-colors py-1 border-l-2 pl-3 ${
                              activeId === cat.id
                                ? "text-stone-50 border-amber-600"
                                : "text-stone-500 border-transparent hover:text-stone-200"
                            }`}
                          >
                            {cat.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </aside>

            {/* Main column */}
            <div className="col-span-12 md:col-span-9">
              {fullMenu.map((chapter) => (
                <div key={chapter.chapter} className="mb-20">
                  <div className="mb-12 md:mb-16">
                    <div className="text-[11px] uppercase label-tracking text-amber-500 mb-3">
                      Capitolul {chapter.chapter}
                    </div>
                    <h2 className="font-serif font-light text-stone-50 text-4xl md:text-5xl tracking-tight">
                      {chapter.chapter}.
                    </h2>
                  </div>
                  {chapter.categories.map((cat) => (
                    <Category key={cat.id} cat={cat} />
                  ))}
                </div>
              ))}

              <div className="mt-16 pt-10 border-t border-white/5 text-stone-500 text-xs uppercase label-tracking">
                Toate prețurile sunt în lei · Bacșișul este inclus
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
