import useReveal from "../../hooks/useReveal";

const ABOUT_IMG =
  "https://mariasiion.ro/wp-content/uploads/2023/10/hobby-chef-making-fresh-tagliatelle-with-pasta-mac-2022-12-16-22-44-42-utc.jpg";

export const Story = () => {
  const ref = useReveal();

  return (
    <section
      id="story"
      data-testid="story-section"
      ref={ref}
      className="relative bg-stone-950 py-24 md:py-40 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 md:gap-16 items-center">
          {/* Image side */}
          <div className="col-span-12 md:col-span-5 reveal">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={ABOUT_IMG}
                alt="Bucătarul Maria și Ion în sala de mese"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 hover:scale-105 transition-all duration-[1200ms]"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
            </div>
            <div className="mt-6 text-xs uppercase label-tracking text-stone-500">
              Gazdele · Maria și Ion
            </div>
          </div>

          {/* Text side */}
          <div className="col-span-12 md:col-span-7 md:pl-8">
            <div className="reveal">
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-10 bg-amber-600" />
                <span className="text-[11px] uppercase label-tracking text-amber-500">
                  Povestea noastră
                </span>
              </div>
              <h2 className="font-serif font-light text-stone-50 text-4xl md:text-6xl leading-[1.05] tracking-tight">
                O odaie mică. <br />
                <span className="italic text-stone-400">O inimă mare.</span>
              </h2>
              <div className="mt-10 space-y-6 max-w-xl text-stone-300 text-base md:text-lg font-light leading-relaxed">
                <p>
                  La Maria și Ion s-a deschis pe o uliță liniștită, cu douăzeci
                  și șase de scaune și o singură regulă — să gătim așa cum
                  gătea bunica, cu focul în vatră, ferestrele larg deschise și
                  radioul pornit.
                </p>
                <p>
                  Doisprezece ani mai târziu, aluatul tot la mână se frământă
                  în zori, tochitura tot fierbe încet de dimineață până seara,
                  iar lemnele pentru cuptor sosesc în fiecare marți de la un
                  pădurar din Bucovina.
                </p>
                <p className="text-stone-400 italic font-serif text-xl md:text-2xl border-l border-amber-600 pl-6 mt-10">
                  &bdquo;Noi nu inventăm. Noi ne aducem aminte.&rdquo;
                </p>
              </div>

              <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
                {[
                  { k: "12", v: "Ani de când gătim" },
                  { k: "90+", v: "Preparate de casă" },
                  { k: "1", v: "Cuptor cu lemne" },
                ].map((s) => (
                  <div key={s.v} data-testid={`stat-${s.v.toLowerCase().replace(/\s/g, '-')}`}>
                    <div className="font-serif text-amber-500 text-4xl md:text-5xl">
                      {s.k}
                    </div>
                    <div className="text-[11px] uppercase label-tracking text-stone-500 mt-2">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
