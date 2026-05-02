import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "../components/restaurant/Header";
import { Footer } from "../components/restaurant/Footer";

const CONTENT = {
  termeni: {
    label: "Documente legale",
    title: "Termeni și Condiții",
    intro:
      "Bun venit pe site-ul Restaurantului La Maria și Ion. Te rugăm să citești cu atenție acești termeni înainte de a folosi acest site sau de a face o rezervare.",
    sections: [
      {
        h: "1. Definiții",
        p: "„Restaurantul” se referă la SC RESTAURANT LA MARIA SI ION SRL, cu sediul în Splaiul Independenței 290, Complex Studențesc Regie, București, CUI 43718579. „Utilizator” înseamnă orice persoană care vizitează site-ul.",
      },
      {
        h: "2. Folosirea site-ului",
        p: "Site-ul are scop informativ — prezintă restaurantul, meniul și datele de contact. Conținutul (texte, fotografii, design, meniu) este protejat de drepturile de autor și nu poate fi reprodus fără acordul scris al Restaurantului.",
      },
      {
        h: "3. Rezervări",
        p: "Rezervările se fac telefonic la numărul 0753 473 781. O rezervare este confirmată doar după confirmarea verbală din partea echipei. Restaurantul își rezervă dreptul de a modifica sau anula o rezervare în cazuri excepționale, anunțând clientul în prealabil.",
      },
      {
        h: "4. Limitarea răspunderii",
        p: "Facem tot posibilul ca informațiile de pe site (preparate, prețuri, program) să fie corecte, însă acestea pot fi schimbate fără notificare prealabilă. Pentru oferte și prețuri actualizate, te rugăm să ne contactezi direct.",
      },
      {
        h: "5. Modificarea termenilor",
        p: "Restaurantul își rezervă dreptul de a modifica oricând acești termeni. Versiunea valabilă este cea publicată pe această pagină.",
      },
      {
        h: "6. Litigii",
        p: "Orice neînțelegere se va rezolva pe cale amiabilă. În caz contrar, ești îndreptățit să te adresezi ANPC sau să folosești platforma SOL a Comisiei Europene (linkurile sunt disponibile în footer-ul site-ului).",
      },
    ],
  },
  cookies: {
    label: "Documente legale",
    title: "Politica de Cookies",
    intro:
      "Acest site folosește cookies pentru a îmbunătăți experiența ta de navigare. Mai jos găsești ce cookies folosim și cum le poți gestiona.",
    sections: [
      {
        h: "1. Ce este un cookie?",
        p: "Un cookie este un fișier mic de text salvat de browser-ul tău atunci când vizitezi un site. Cookies ne ajută să îți reținem preferințele și să măsurăm cum este folosit site-ul.",
      },
      {
        h: "2. Cookies pe care le folosim",
        p: "Folosim cookies strict necesare (pentru funcționarea site-ului) și, opțional, cookies de analiză anonime (pentru a înțelege cum este folosit site-ul). Nu folosim cookies de publicitate.",
      },
      {
        h: "3. Cum poți controla cookies",
        p: "Poți șterge sau bloca toate cookies din setările browser-ului tău. Reține că, dacă blochezi anumite cookies, este posibil ca unele funcții ale site-ului să nu mai funcționeze corect.",
      },
      {
        h: "4. Cookies de la terți",
        p: "Pe paginile cu hartă încorporată, Google Maps poate seta cookies-uri proprii. Nu controlăm aceste cookies — citește politica Google pentru detalii.",
      },
    ],
  },
  confidentialitate: {
    label: "Documente legale",
    title: "Politica de Confidențialitate",
    intro:
      "Confidențialitatea ta este importantă pentru noi. Mai jos găsești ce date colectăm, de ce și cum le protejăm.",
    sections: [
      {
        h: "1. Operatorul de date",
        p: "SC RESTAURANT LA MARIA SI ION SRL, CUI 43718579, cu sediul în Splaiul Independenței 290, Complex Studențesc Regie, București, este operatorul datelor cu caracter personal colectate prin acest site.",
      },
      {
        h: "2. Ce date colectăm",
        p: "Pentru rezervări telefonice colectăm: nume, număr de telefon, ora și data rezervării. Site-ul nu cere conturi sau formulare online — datele tale sunt comunicate doar verbal sau prin telefon.",
      },
      {
        h: "3. Scop și temei legal",
        p: "Folosim datele exclusiv pentru a te servi (rezervări, informații despre evenimente). Temeiul legal este consimțământul tău și executarea contractului (servirea mesei).",
      },
      {
        h: "4. Cât păstrăm datele",
        p: "Păstrăm datele rezervării doar atât timp cât este nevoie pentru servire (de regulă 1 zi după vizită) sau cât cere legea contabilă (5 ani — pentru bonurile fiscale).",
      },
      {
        h: "5. Drepturile tale",
        p: "Conform GDPR, ai dreptul de acces, rectificare, ștergere, restricționare sau opoziție. Te poți adresa nouă la support@mariasiion.ro sau Autorității Naționale de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).",
      },
      {
        h: "6. Securitate",
        p: "Folosim măsuri tehnice și organizatorice rezonabile pentru a-ți proteja datele și nu le vindem și nu le împărtășim cu terți în scop comercial.",
      },
    ],
  },
};

export default function LegalPage({ slug }) {
  const data = CONTENT[slug] || CONTENT.termeni;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <main
      data-testid={`legal-page-${slug}`}
      className="bg-stone-950 text-stone-100 min-h-screen"
    >
      <Header />

      <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 border-b border-white/5">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <Link
            to="/"
            data-testid="back-home-link"
            className="inline-flex items-center gap-2 text-[11px] uppercase label-tracking text-stone-400 hover:text-amber-500 transition-colors mb-10"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Înapoi acasă
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-amber-600" />
            <span className="text-[11px] uppercase label-tracking text-amber-500">
              {data.label}
            </span>
          </div>
          <h1 className="font-serif font-light text-stone-50 text-5xl md:text-6xl leading-[1] tracking-tight">
            {data.title}
          </h1>
          <p className="mt-8 text-stone-400 text-base md:text-lg font-light leading-relaxed">
            {data.intro}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          {data.sections.map((s) => (
            <article
              key={s.h}
              data-testid={`legal-section-${s.h.replace(/\s+/g, "-").toLowerCase()}`}
              className="mb-12"
            >
              <h2 className="font-serif font-light text-stone-100 text-2xl md:text-3xl mb-4 tracking-tight">
                {s.h}
              </h2>
              <p className="text-stone-400 text-base font-light leading-relaxed">
                {s.p}
              </p>
            </article>
          ))}

          <div className="mt-16 pt-8 border-t border-white/5 text-xs text-stone-500 leading-relaxed">
            SC RESTAURANT LA MARIA SI ION SRL · CUI 43718579
            <br />
            Splaiul Independenței 290, Complex Studențesc Regie, București
            <br />
            Contact: support@mariasiion.ro · 0753 473 781
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
