import { lazy, Suspense, useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "@/components/restaurant/Header";
import { Hero } from "@/components/restaurant/Hero";
import { Story } from "@/components/restaurant/Story";
import { MenuSection } from "@/components/restaurant/MenuSection";
import { Gallery } from "@/components/restaurant/Gallery";
import { Reviews } from "@/components/restaurant/Reviews";
import { Contact } from "@/components/restaurant/Contact";
import { Footer } from "@/components/restaurant/Footer";
import { StickyCallButton } from "@/components/restaurant/StickyCallButton";
import { CookieBanner } from "@/components/restaurant/CookieBanner";
import { ParallaxBand } from "@/components/restaurant/ParallaxBand";

// Code-split heavier secondary pages
const MenuPage = lazy(() => import("@/pages/MenuPage"));
const LegalPage = lazy(() => import("@/pages/LegalPage"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const HashScroller = () => {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      };
      const t1 = setTimeout(tryScroll, 50);
      const t2 = setTimeout(tryScroll, 350);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);
  return null;
};

// Per-page document title — simple, no extra dependency
const titles = {
  "/": "La Maria și Ion · Restaurant tradițional în Regie, București",
  "/meniu": "Meniul complet · La Maria și Ion",
  "/termeni-si-conditii": "Termeni și Condiții · La Maria și Ion",
  "/cookies": "Politica de Cookies · La Maria și Ion",
  "/confidentialitate": "Politica de Confidențialitate · La Maria și Ion",
};
const TitleManager = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const t =
      titles[pathname] || "Pagina nu există · La Maria și Ion";
    document.title = t;
  }, [pathname]);
  return null;
};

const PageLoader = () => (
  <div
    data-testid="page-loader"
    className="min-h-screen bg-stone-950 flex items-center justify-center"
  >
    <div className="font-serif italic text-amber-600/60 text-xl tracking-wide animate-pulse">
      La Maria &amp; Ion…
    </div>
  </div>
);

const Home = () => {
  return (
    <main data-testid="home-page" className="bg-stone-950 text-stone-100">
      <Header />
      <Hero />
      <Story />
      <ParallaxBand
        testId="parallax-band-1"
        image="https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=1600&q=80"
        alt="Penne carbonara"
        caption="Noi nu inventăm. Gătim cum am învățat de acasă."
        attribution="Maria și Ion"
        height="tall"
      />
      <MenuSection />
      <Gallery />
      <ParallaxBand
        testId="parallax-band-2"
        image="https://mariasiion.ro/wp-content/uploads/2024/12/448453750_764204029256764_5345791775327686708_n-1024x767.jpg"
        alt="Terasa La Maria si Ion seara"
        caption="O terasă mare, o masă cu suflet."
        attribution="Regie, București"
        height="short"
      />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HashScroller />
        <TitleManager />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meniu" element={<MenuPage />} />
            <Route path="/termeni-si-conditii" element={<LegalPage slug="termeni" />} />
            <Route path="/cookies" element={<LegalPage slug="cookies" />} />
            <Route path="/confidentialitate" element={<LegalPage slug="confidentialitate" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <StickyCallButton />
        <CookieBanner />
      </BrowserRouter>
    </div>
  );
}

export default App;
