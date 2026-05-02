import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "../components/restaurant/Header";
import { Footer } from "../components/restaurant/Footer";

export default function NotFound() {
  return (
    <main
      data-testid="not-found-page"
      className="bg-stone-950 text-stone-100 min-h-screen"
    >
      <Header />

      <section className="relative min-h-[80vh] flex items-center pt-32 pb-20">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 text-center">
          <div className="font-serif italic text-amber-600/30 text-[28vw] md:text-[18vw] leading-none select-none">
            404
          </div>
          <div className="-mt-8 md:-mt-16 relative z-10">
            <div className="text-[11px] uppercase label-tracking text-amber-500 mb-6">
              Hopa
            </div>
            <h1 className="font-serif font-light text-stone-50 text-4xl md:text-6xl leading-tight tracking-tight mb-6">
              Pagina asta nu e <br className="hidden md:inline" />
              <span className="italic text-stone-400">pe meniu.</span>
            </h1>
            <p className="text-stone-400 text-base md:text-lg font-light max-w-xl mx-auto mb-10">
              Probabil un link vechi sau o adresă greșită. Hai înapoi la masă —
              te așteaptă mămăliga.
            </p>
            <Link
              to="/"
              data-testid="not-found-home-link"
              className="inline-flex items-center gap-3 px-8 py-4 bg-amber-600 hover:bg-amber-700 text-stone-950 text-xs uppercase label-tracking transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Înapoi acasă
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
