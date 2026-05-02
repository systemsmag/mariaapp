import { useEffect, useRef, useState } from "react";

// Subtle parallax image band — reusable separator between sections.
// On desktop uses a translate transform for smooth parallax;
// on mobile falls back to a static centered background to keep things performant.
export const ParallaxBand = ({
  image,
  alt = "",
  caption,
  attribution,
  height = "tall", // "short" | "tall"
  testId = "parallax-band",
}) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(max-width: 767px)").matches) return;
    let raf = null;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // -1 (band fully below viewport) → +1 (band fully above viewport)
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      setOffset(progress * 80); // px range
      raf = null;
    };
    const onScroll = () => {
      if (raf == null) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const heightClass =
    height === "short"
      ? "h-[280px] md:h-[340px]"
      : "h-[380px] md:h-[480px]";

  return (
    <section
      ref={ref}
      data-testid={testId}
      className={`relative overflow-hidden border-y border-white/5 ${heightClass}`}
      aria-label={caption || alt}
    >
      {/* Image layer — translates with scroll on desktop */}
      <div
        className="absolute inset-x-0 -top-24 -bottom-24 will-change-transform"
        style={{ transform: `translate3d(0, ${offset}px, 0)` }}
      >
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/55 to-stone-950/80" />
      <div className="absolute inset-0 bg-stone-950/20" />

      {/* Optional centered quote */}
      {caption && (
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="max-w-2xl text-center">
            <div className="font-serif italic text-stone-50 text-2xl md:text-4xl leading-snug tracking-tight">
              &ldquo;{caption}&rdquo;
            </div>
            {attribution && (
              <div className="mt-5 text-[11px] uppercase label-tracking text-amber-500">
                — {attribution}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Subtle film grain frame */}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
    </section>
  );
};
