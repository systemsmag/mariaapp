import useReveal from "../../hooks/useReveal";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1777221183847-31eed7010f4d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHw0fHxjaW5lbWF0aWMlMjByZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBkYXJrfGVufDB8fHx8MTc3NzY2NzM0N3ww&ixlib=rb-4.1.0&q=85";

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
                alt="Chef Matteo Ricci in the dining room"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 hover:scale-105 transition-all duration-[1200ms]"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
            </div>
            <div className="mt-6 text-xs uppercase label-tracking text-stone-500">
              Chef · Matteo Ricci
            </div>
          </div>

          {/* Text side */}
          <div className="col-span-12 md:col-span-7 md:pl-8">
            <div className="reveal">
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-10 bg-amber-600" />
                <span className="text-[11px] uppercase label-tracking text-amber-500">
                  La nostra storia
                </span>
              </div>
              <h2 className="font-serif font-light text-stone-50 text-4xl md:text-6xl leading-[1.05] tracking-tight">
                A small room. <br />
                <span className="italic text-stone-400">A loud heart.</span>
              </h2>
              <div className="mt-10 space-y-6 max-w-xl text-stone-300 text-base md:text-lg font-light leading-relaxed">
                <p>
                  Lucenta opened on a quiet street in Brera with twenty-six
                  seats and one rule — cook the way Matteo&rsquo;s grandmother
                  cooked, in Bari, with the windows open and the radio on.
                </p>
                <p>
                  Twelve years later the dough is still mixed by hand at dawn,
                  the ragù still simmers from morning till night, and the wood
                  for the oven still arrives every Tuesday from a forester in
                  Lombardy.
                </p>
                <p className="text-stone-400 italic font-serif text-xl md:text-2xl border-l border-amber-600 pl-6 mt-10">
                  &ldquo;We don&rsquo;t reinvent. We remember.&rdquo;
                </p>
              </div>

              <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
                {[
                  { k: "12", v: "Years open" },
                  { k: "72h", v: "Dough rise" },
                  { k: "1", v: "Wood oven" },
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
