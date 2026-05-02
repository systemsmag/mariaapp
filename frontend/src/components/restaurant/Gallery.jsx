import useReveal from "../../hooks/useReveal";

const images = [
  {
    url: "https://mariasiion.ro/wp-content/uploads/2024/12/448453750_764204029256764_5345791775327686708_n-1024x767.jpg",
    alt: "Terasa restaurantului ziua",
    caption: "Terasa · Regie",
    tile: "lg",
  },
  {
    url: "https://mariasiion.ro/wp-content/uploads/2024/12/250341377_2091161227728040_3263187890321193339_n.jpg",
    alt: "Preparate tradiționale",
    caption: "Bucătărie · De casă",
    tile: "md",
  },
  {
    url: "https://mariasiion.ro/wp-content/uploads/2023/10/prawns-roasted-on-grill-and-rice-2021-08-26-17-21-01-utc.jpg",
    alt: "Pe grătar",
    caption: "Pe jar · Direct din ceaun",
    tile: "md",
  },
  {
    url: "https://mariasiion.ro/wp-content/uploads/2024/12/243823994_2067596680084495_454137217862327021_n.jpg",
    alt: "Atmosfera din restaurant",
    caption: "Atmosferă · La masă",
    tile: "md",
  },
  {
    url: "https://mariasiion.ro/wp-content/uploads/2024/12/207960568_1990429787801185_154270849901701442_n.jpg",
    alt: "Specialitate",
    caption: "Specialitate · Rețetă de casă",
    tile: "lg",
  },
  {
    url: "https://mariasiion.ro/wp-content/uploads/2024/12/244006302_2067596670084496_8279313120628745052_n.jpg",
    alt: "Detaliu farfurie",
    caption: "Plating · Mâini de mama",
    tile: "md",
  },
  {
    url: "https://mariasiion.ro/wp-content/uploads/2023/10/hobby-chef-making-fresh-tagliatelle-with-pasta-mac-2022-12-16-22-44-42-utc.jpg",
    alt: "Aluat făcut manual",
    caption: "Aluatul · La mână",
    tile: "md",
  },
  {
    url: "https://mariasiion.ro/wp-content/uploads/2024/12/0.jpg",
    alt: "Specialitatea casei",
    caption: "Casa · Tradiție",
    tile: "md",
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

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[260px] gap-3 md:gap-4">
          {images.map((img, idx) => (
            <BentoTile
              key={img.url}
              img={img}
              testId={`gallery-tile-${idx + 1}`}
              span={
                idx === 0
                  ? "col-span-2 row-span-2"
                  : idx === 4
                  ? "md:col-span-2 row-span-2"
                  : ""
              }
              delay={idx * 60}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const BentoTile = ({ img, testId, span, delay = 0 }) => (
  <figure
    data-testid={testId}
    className={`relative overflow-hidden group reveal ${span}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <img
      src={img.url}
      alt={img.alt}
      className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
      loading="lazy"
      decoding="async"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/10 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />
    <figcaption className="absolute left-4 bottom-4 right-4 flex items-center justify-between text-[10px] uppercase label-tracking text-stone-200">
      <span>{img.caption}</span>
      <span className="text-amber-500 group-hover:translate-x-1 transition-transform">
        →
      </span>
    </figcaption>
    <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none" />
  </figure>
);
