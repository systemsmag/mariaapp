import useReveal from "../../hooks/useReveal";

const images = [
  {
    url: "https://mariasiion.ro/wp-content/uploads/2024/12/448453750_764204029256764_5345791775327686708_n-1024x767.jpg",
    alt: "Terasa restaurantului ziua",
    caption: "Terasa · Regie",
  },
  {
    url: "https://mariasiion.ro/wp-content/uploads/2024/12/250341377_2091161227728040_3263187890321193339_n.jpg",
    alt: "Preparate tradiționale",
    caption: "Bucătărie · De casă",
  },
  {
    url: "https://mariasiion.ro/wp-content/uploads/2024/12/243823994_2067596680084495_454137217862327021_n.jpg",
    alt: "Atmosfera din restaurant",
    caption: "Atmosferă · La masă",
  },
  {
    url: "https://mariasiion.ro/wp-content/uploads/2024/12/207960568_1990429787801185_154270849901701442_n.jpg",
    alt: "Specialitate",
    caption: "Specialitate · Rețetă de casă",
  },
];

export const Gallery = () => {
  const ref = useReveal();

  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      ref={ref}
      className="relative bg-stone-950 py-24 md:py-40 border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 md:col-span-7 reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-amber-600" />
              <span className="text-[11px] uppercase label-tracking text-amber-500">
                Galerie
              </span>
            </div>
            <h2 className="font-serif font-light text-stone-50 text-4xl md:text-6xl leading-tight tracking-tight">
              Lumină joasă.
              <br />
              <span className="italic text-stone-400">Mâini harnice.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:pt-10 reveal">
            <p className="text-stone-400 text-base font-light leading-relaxed">
              Câteva clipe tihnite de pe terasa și din bucătăria noastră.
              Vino să prinzi una pe viu.
            </p>
          </div>
        </div>

        {/* 4-tile asymmetric bento */}
        <div className="grid grid-cols-12 grid-rows-6 gap-4 md:gap-6 h-[760px] md:h-[820px]">
          <BentoTile img={images[0]} className="col-span-12 md:col-span-7 row-span-4" testId="gallery-tile-1" delay={0} />
          <BentoTile img={images[1]} className="col-span-6 md:col-span-5 row-span-3" testId="gallery-tile-2" delay={80} />
          <BentoTile img={images[2]} className="col-span-6 md:col-span-5 row-span-3" testId="gallery-tile-3" delay={160} />
          <BentoTile img={images[3]} className="col-span-12 md:col-span-7 row-span-2" testId="gallery-tile-4" delay={240} />
        </div>
      </div>
    </section>
  );
};

const BentoTile = ({ img, className, testId, delay = 0 }) => (
  <figure
    data-testid={testId}
    className={`relative overflow-hidden group reveal ${className}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <img
      src={img.url}
      alt={img.alt}
      className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
      loading="lazy"
      decoding="async"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />
    <figcaption className="absolute left-5 bottom-5 right-5 flex items-center justify-between text-[11px] uppercase label-tracking text-stone-200">
      <span>{img.caption}</span>
      <span className="text-amber-500 group-hover:translate-x-1 transition-transform">→</span>
    </figcaption>
    <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none" />
  </figure>
);
