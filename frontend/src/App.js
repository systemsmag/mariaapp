import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/restaurant/Header";
import { Hero } from "@/components/restaurant/Hero";
import { Story } from "@/components/restaurant/Story";
import { MenuSection } from "@/components/restaurant/MenuSection";
import { Gallery } from "@/components/restaurant/Gallery";
import { Contact } from "@/components/restaurant/Contact";
import { Footer } from "@/components/restaurant/Footer";

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
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
