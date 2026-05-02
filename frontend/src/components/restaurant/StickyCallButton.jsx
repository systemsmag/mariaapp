import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

// Floating "Sună acum" button — visible only on mobile (md:hidden).
// Adds a subtle entrance animation after a short delay so it doesn't compete with hero on first paint.
export const StickyCallButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href="tel:+40753473781"
      data-testid="sticky-call-button"
      aria-label="Sună la La Maria și Ion"
      className={`md:hidden fixed bottom-20 right-4 z-40 flex items-center gap-2 bg-amber-600 text-stone-950 pl-4 pr-5 py-3.5 rounded-full shadow-2xl shadow-black/50 transition-all duration-700 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 animate-ping" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-50" />
      </span>
      <Phone className="w-4 h-4" />
      <span className="text-xs uppercase font-semibold tracking-widest">
        Sună acum
      </span>
    </a>
  );
};
