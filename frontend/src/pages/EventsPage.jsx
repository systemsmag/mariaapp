import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, MapPin, Phone, Music } from "lucide-react";
import { Header } from "../components/restaurant/Header";
import { Footer } from "../components/restaurant/Footer";

const RESERVATION_PHONE = "0753 473 781";
const RESERVATION_TEL = "+40753473781";

const events = [
  {
    id: "costel-biju-8mai",
    artist: "Costel Biju",
    title: "Friday Night Party · Invitat Special",
    date: "Vineri, 8 Mai",
    time: "21:00",
    poster:
      "https://customer-assets.emergentagent.com/job_restaurant-io/artifacts/pvndj3uw_biju8mai.png",
    tag: "Live Music",
    description:
      "O seară de neuitat alături de Costel Biju — manele live, atmosferă electrică și meniul de casă La Maria și Ion. Locuri limitate, rezervare recomandată.",
  },
  {
    id: "tzanca-uraganu-15mai",
    artist: "Tzancă Uraganu'",
    title: "Concert Live · Tzancă Uraganu'",
    date: "Vineri, 15 Mai",
    time: "21:00",
    poster:
      "https://customer-assets.emergentagent.com/job_restaurant-io/artifacts/apr8ef4y_tzanca.png",
    tag: "Live Music",
    description:
      "Tzancă Uraganu' aduce uraganul de hituri direct pe terasa La Maria și Ion. Show, voie bună și mâncare ca la mama acasă. Rezervările se fac în avans.",
  },
];

const EventCard = ({ event, index }) => {
  const isReverse = index % 2 === 1;
  return (
    <article
      id={event.id}
      data-testid={`event-card-${event.id}`}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-24 md:mb-36 scroll-mt-32"
    >
      {/* Poster */}
      <div
        className={`col-span-12 lg:col-span-6 ${
          isReverse ? "lg:order-2" : ""
        }`}
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/40 via-amber-700/20 to-transparent blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative aspect-square overflow-hidden ring-1 ring-white/10">
            <img
              src={event.poster}
              alt={`Poster eveniment ${event.artist} la La Maria și Ion`}
              className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
          </div>
        </div>
      </div>

      {/* Details */}
      <div
        className={`col-span-12 lg:col-span-6 ${
          isReverse ? "lg:order-1 lg:pr-8" : "lg:pl-8"
        }`}
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-10 bg-amber-600" />
          <span className="text-[11px] uppercase label-tracking text-amber-500 inline-flex items-center gap-2">
            <Music className="w-3 h-3" /> {event.tag}
          </span>
        </div>

        <h2
          data-testid={`event-artist-${event.id}`}
          className="font-serif font-light text-stone-50 text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight"
        >
          {event.artist}
        </h2>
        <p className="mt-3 font-serif italic text-stone-400 text-xl md:text-2xl">
          {event.title}
        </p>

        <p className="mt-8 text-stone-300 text-base md:text-lg font-light leading-relaxed max-w-xl">
          {event.description}
        </p>

        {/* Event meta */}
        <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 max-w-lg">
          <div data-testid={`event-date-${event.id}`}>
            <dt className="text-[10px] uppercase label-tracking text-stone-500 inline-flex items-center gap-2">
              <Calendar className="w-3 h-3 text-amber-500" /> Data
            </dt>
            <dd className="mt-1.5 font-serif text-stone-100 text-xl">
              {event.date}
            </dd>
          </div>
          <div data-testid={`event-time-${event.id}`}>
            <dt className="text-[10px] uppercase label-tracking text-stone-500 inline-flex items-center gap-2">
              <Clock className="w-3 h-3 text-amber-500" /> Ora
            </dt>
            <dd className="mt-1.5 font-serif text-stone-100 text-xl">
              {event.time}
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-[10px] uppercase label-tracking text-stone-500 inline-flex items-center gap-2">
              <MapPin className="w-3 h-3 text-amber-500" /> Locație
            </dt>
            <dd className="mt-1.5 text-stone-300 text-sm font-light leading-relaxed">
              Splaiul Independenței 290 · Complex Studențesc Regie, București
            </dd>
          </div>
        </dl>

        {/* Reservation CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <a
            href={`tel:${RESERVATION_TEL}`}
            data-testid={`reserve-cta-${event.id}`}
            className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs uppercase label-tracking transition-colors"
          >
            <Phone className="w-4 h-4" />
            Rezervă · {RESERVATION_PHONE}
          </a>
          <span className="text-[11px] uppercase label-tracking text-stone-500">
            Locuri limitate
          </span>
        </div>
      </div>
    </article>
  );
};

const EventsPage = () => {
  return (
    <main
      data-testid="events-page"
      className="bg-stone-950 text-stone-100 min-h-screen"
    >
      <Header />

      <section className="pt-32 md:pt-40 pb-16 md:pb-24 border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Link
            to="/"
            data-testid="events-back-home"
            className="inline-flex items-center gap-2 text-[11px] uppercase label-tracking text-stone-500 hover:text-amber-500 transition-colors mb-10"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Înapoi acasă
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-amber-600" />
            <span className="text-[11px] uppercase label-tracking text-amber-500">
              Evenimente · Live Music
            </span>
          </div>

          <h1 className="font-serif font-light text-stone-50 text-5xl md:text-7xl leading-[1.02] tracking-tight max-w-4xl">
            Seri cu artiști.{" "}
            <span className="italic text-stone-400">
              Mese cu povești.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-stone-400 text-base md:text-lg font-light leading-relaxed">
            La Maria și Ion aduce pe scenă artiștii momentului. Două seri de
            neuitat în luna mai — manele live, voie bună și meniul de casă pe
            terasă. Rezervările se fac telefonic la{" "}
            <a
              href={`tel:${RESERVATION_TEL}`}
              data-testid="events-hero-phone"
              className="text-amber-500 hover:text-amber-400 underline-animate"
            >
              {RESERVATION_PHONE}
            </a>
            .
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {events.map((ev, i) => (
            <EventCard key={ev.id} event={ev} index={i} />
          ))}
        </div>
      </section>

      {/* Final reservation strip */}
      <section
        data-testid="events-reservation-strip"
        className="border-t border-white/5 bg-stone-900/40 py-16 md:py-24"
      >
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 text-center">
          <span className="text-[11px] uppercase label-tracking text-amber-500">
            Rezervări
          </span>
          <h3 className="mt-4 font-serif font-light text-stone-50 text-3xl md:text-5xl tracking-tight">
            Sună la{" "}
            <a
              href={`tel:${RESERVATION_TEL}`}
              className="text-amber-500 hover:text-amber-400 italic"
            >
              {RESERVATION_PHONE}
            </a>
          </h3>
          <p className="mt-5 text-stone-400 text-sm md:text-base font-light max-w-xl mx-auto">
            Pentru ambele evenimente locurile sunt limitate. Rezervă din timp
            ca să fii sigur de masa ta pe terasă.
          </p>
          <a
            href={`tel:${RESERVATION_TEL}`}
            data-testid="events-cta-bottom"
            className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs uppercase label-tracking transition-colors"
          >
            <Phone className="w-4 h-4" />
            Sună acum
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default EventsPage;
