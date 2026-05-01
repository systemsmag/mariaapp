import useReveal from "../../hooks/useReveal";

const images = [
  {
    url: "https://images.unsplash.com/photo-1750943036999-81e666b2296c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwzfHxkYXJrJTIwY2luZW1hdGljJTIwZmluZSUyMGRpbmluZyUyMGl0YWxpYW4lMjBmb29kfGVufDB8fHx8MTc3NzY2NzM0N3ww&ixlib=rb-4.1.0&q=85",
    alt: "Plated dish at candlelight",
    caption: "Plated · Service 21:08",
  },
  {
    url: "https://images.unsplash.com/photo-1777576507182-476359466980?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxjaW5lbWF0aWMlMjByZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBkYXJrfGVufDB8fHx8MTc3NzY2NzM0N3ww&ixlib=rb-4.1.0&q=85",
    alt: "Restaurant bar with glasses",
    caption: "The bar · Aperitivo",
  },
  {
    url: "https://images.unsplash.com/photo-1655685306705-2c24a18eb451?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY2luZW1hdGljJTIwZmluZSUyMGRpbmluZyUyMGl0YWxpYW4lMjBmb29kfGVufDB8fHx8MTc3NzY2NzM0N3ww&ixlib=rb-4.1.0&q=85",
    alt: "Macro shot of the kitchen",
    caption: "Pasta · Made by hand",
  },
  {
    url: "https://images.unsplash.com/photo-1764358868789-400fb3d39fb7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxjaW5lbWF0aWMlMjByZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBkYXJrfGVufDB8fHx8MTc3NzY2NzM0N3ww&ixlib=rb-4.1.0&q=85",
    alt: "Single rose on a table",
    caption: "Table 4 · Anniversary",
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
                Galleria
              </span>
            </div>
            <h2 className="font-serif font-light text-stone-50 text-4xl md:text-6xl leading-tight tracking-tight">
              Light, low.
              <br />
              <span className="italic text-stone-400">Hands, busy.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:pt-10 reveal">
            <p className="text-stone-400 text-base font-light leading-relaxed">
              A few quiet moments from a Friday service. Photographed by our
              friend Giulia, on film, on the way home.
            </p>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 grid-rows-6 gap-4 md:gap-6 h-[760px] md:h-[820px]">
          <BentoTile
            img={images[0]}
            className="col-span-12 md:col-span-7 row-span-4"
            testId="gallery-tile-1"
          />
          <BentoTile
            img={images[1]}
            className="col-span-6 md:col-span-5 row-span-3"
            testId="gallery-tile-2"
          />
          <BentoTile
            img={images[2]}
            className="col-span-6 md:col-span-5 row-span-3"
            testId="gallery-tile-3"
          />
          <BentoTile
            img={images[3]}
            className="col-span-12 md:col-span-7 row-span-2"
            testId="gallery-tile-4"
          />
        </div>
      </div>
    </section>
  );
};

const BentoTile = ({ img, className, testId }) => (
  <figure
    data-testid={testId}
    className={`relative overflow-hidden group reveal ${className}`}
  >
    <img
      src={img.url}
      alt={img.alt}
      className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />
    <figcaption className="absolute left-5 bottom-5 right-5 flex items-center justify-between text-[11px] uppercase label-tracking text-stone-200">
      <span>{img.caption}</span>
      <span className="text-amber-500">→</span>
    </figcaption>
    <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none" />
  </figure>
);
