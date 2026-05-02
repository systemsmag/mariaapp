import { Star, Quote } from "lucide-react";
import useReveal from "../../hooks/useReveal";

const reviews = [
  {
    name: "Andrei P.",
    when: "acum 2 săptămâni",
    rating: 5,
    quote:
      "Cea mai bună mămăligă cu jumere din București. Atmosferă caldă, ospătari prietenoși și terasa enormă. Am mers cu prietenii la o petrecere de 10 oameni — am stat trei ore și nu ne-a grăbit nimeni.",
  },
  {
    name: "Maria D.",
    when: "acum 1 lună",
    rating: 5,
    quote:
      "Se simte că e o afacere de familie. Pastrama de berbecuț e divină, iar papanașii — cum nu am mai mâncat de la bunica. Recomand cu drag, mai ales seara, pe terasă.",
  },
  {
    name: "Vlad I.",
    when: "acum 3 săptămâni",
    rating: 5,
    quote:
      "Ceaunul lu' Pintea pentru patru e cât o nuntă. Carnea, mămăliga, murăturile — totul cu gust de casă. Și prețul e mai mult decât corect pentru cantitate.",
  },
  {
    name: "Ioana M.",
    when: "acum 2 luni",
    rating: 4,
    quote:
      "Locul preferat pentru aniversări de când suntem în Regie. Vinul de casă, salata de vinete și clătitele — combinația perfectă. Mereu plin, deci sună înainte.",
  },
];

const Stars = ({ value = 5 }) => (
  <div className="flex items-center gap-0.5" aria-label={`${value} stele din 5`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < value ? "fill-amber-500 text-amber-500" : "text-stone-700"
        }`}
      />
    ))}
  </div>
);

export const Reviews = () => {
  const ref = useReveal();

  return (
    <section
      id="recenzii"
      data-testid="reviews-section"
      ref={ref}
      className="relative bg-stone-950 py-24 md:py-32 border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 mb-14 md:mb-20">
          <div className="col-span-12 md:col-span-7 reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-amber-600" />
              <span className="text-[11px] uppercase label-tracking text-amber-500">
                Recenzii
              </span>
            </div>
            <h2 className="font-serif font-light text-stone-50 text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Ce zic oamenii
              <br />
              <span className="italic text-stone-400">de la mese.</span>
            </h2>
          </div>

          <div className="col-span-12 md:col-span-4 md:col-start-9 md:pt-6 reveal">
            <div className="flex items-center gap-3 mb-2">
              <Stars value={5} />
              <span className="font-serif text-stone-100 text-3xl">4.6</span>
            </div>
            <div className="text-xs uppercase label-tracking text-stone-500 mb-4">
              Peste 1.200 de recenzii pe Google
            </div>
            <a
              href="https://www.google.com/search?q=La+Maria+si+Ion+restaurant+Regie+Bucuresti"
              target="_blank"
              rel="noreferrer"
              data-testid="reviews-google-link"
              className="inline-flex items-center gap-2 text-xs uppercase label-tracking text-stone-300 hover:text-amber-500 transition-colors underline-animate"
            >
              Citește pe Google →
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {reviews.map((r, i) => (
            <article
              key={r.name}
              data-testid={`review-card-${i}`}
              className="reveal group bg-stone-900/40 border border-white/5 hover:border-amber-600/40 p-6 md:p-7 transition-colors flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Quote className="w-6 h-6 text-amber-600/50 mb-4" />
              <p className="text-stone-200 text-sm font-light leading-relaxed flex-1">
                {r.quote}
              </p>
              <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="font-serif text-stone-100 text-base">
                    {r.name}
                  </div>
                  <div className="text-[10px] uppercase label-tracking text-stone-500 mt-1">
                    {r.when}
                  </div>
                </div>
                <Stars value={r.rating} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
