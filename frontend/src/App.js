import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "@/components/restaurant/Header";
import { Hero } from "@/components/restaurant/Hero";
import { Story } from "@/components/restaurant/Story";
import { MenuSection } from "@/components/restaurant/MenuSection";
import { Gallery } from "@/components/restaurant/Gallery";
import { Contact } from "@/components/restaurant/Contact";
import { Footer } from "@/components/restaurant/Footer";
import MenuPage from "@/pages/MenuPage";
import LegalPage from "@/pages/LegalPage";

const HashScroller = () => {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (hash) {
      // Defer to ensure target section is mounted
      const id = hash.replace("#", "");
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
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

const Home = () => {
  return (
    <main data-testid="home-page" className="bg-stone-950 text-stone-100">
      <Header />
      <Hero />
      <Story />
      <MenuSection />
      <Gallery />
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meniu" element={<MenuPage />} />
          <Route path="/termeni-si-conditii" element={<LegalPage slug="termeni" />} />
          <Route path="/cookies" element={<LegalPage slug="cookies" />} />
          <Route path="/confidentialitate" element={<LegalPage slug="confidentialitate" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
