import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const KEY = "lmi-cookie-choice-v1";

export const CookieBanner = () => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    try {
      const choice = localStorage.getItem(KEY);
      if (!choice) {
        const t = setTimeout(() => setShown(true), 800);
        return () => clearTimeout(t);
      }
    } catch (e) {
      // localStorage unavailable — ignore
    }
  }, []);

  const persist = (value) => {
    try {
      localStorage.setItem(KEY, value);
    } catch (e) {
      // ignore
    }
    setShown(false);
  };

  if (!shown) return null;

  return (
    <div
      data-testid="cookie-banner"
      role="dialog"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 md:pb-6 md:px-6 animate-in fade-in slide-in-from-bottom-4 duration-700"
    >
      <div className="max-w-4xl mx-auto bg-stone-900/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/60 rounded-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center p-5 md:p-6">
          <div className="md:col-span-7">
            <div className="text-[10px] uppercase label-tracking text-amber-500 mb-2">
              🍪 Cookies
            </div>
            <p className="text-stone-200 text-sm leading-relaxed font-light">
              Folosim cookies pentru ca site-ul să funcționeze normal și pentru
              a înțelege cum este folosit. Detalii în{" "}
              <Link
                to="/cookies"
                className="underline hover:text-amber-500 transition-colors"
              >
                Politica de Cookies
              </Link>
              .
            </p>
          </div>
          <div className="md:col-span-5 flex items-center gap-3 md:justify-end">
            <button
              type="button"
              onClick={() => persist("declined")}
              data-testid="cookie-decline"
              className="text-xs uppercase label-tracking text-stone-300 hover:text-stone-100 transition-colors px-3 py-2"
            >
              Doar necesare
            </button>
            <button
              type="button"
              onClick={() => persist("accepted")}
              data-testid="cookie-accept"
              className="text-xs uppercase label-tracking bg-amber-600 hover:bg-amber-700 text-stone-950 px-5 py-2.5 transition-colors"
            >
              Accept toate
            </button>
            <button
              type="button"
              aria-label="Închide"
              onClick={() => persist("dismissed")}
              data-testid="cookie-close"
              className="md:hidden absolute top-3 right-3 text-stone-400 hover:text-stone-100"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
