import { Clock, MapPin, Phone, Mail } from "lucide-react";
import useReveal from "../../hooks/useReveal";

export const Contact = () => {
  const ref = useReveal();

  return (
    <section
      id="contact"
      data-testid="contact-section"
      ref={ref}
      className="relative bg-[#0c0a09] py-24 md:py-40 border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-7 reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-amber-600" />
              <span className="text-[11px] uppercase label-tracking text-amber-500">
                Ne găsești
              </span>
            </div>
            <h2 className="font-serif font-light text-stone-50 text-5xl md:text-7xl leading-[0.95] tracking-tight">
              Vino la cină.
              <br />
              <span className="italic text-stone-400">Rămâi pentru un pahar de vin.</span>
            </h2>
            <p className="mt-8 max-w-xl text-stone-400 text-base md:text-lg font-light leading-relaxed">
              Rezervările sunt recomandate, dar nu obligatorii. Te primim cu
              drag și fără rezervare la bar, de la 12:00. Pentru grupuri mai
              mari de șase persoane, te rugăm să ne suni direct.
            </p>
          </div>

          <div className="col-span-12 md:col-span-5 md:pt-6 reveal">
            <a
              href="tel:+40753473781"
              data-testid="phone-cta"
              className="inline-flex items-center gap-3 px-8 py-4 bg-amber-600 hover:bg-amber-700 text-stone-950 text-xs uppercase label-tracking transition-colors"
            >
              <Phone className="w-4 h-4" />
              0753 473 781
            </a>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Map */}
          <div className="col-span-12 md:col-span-7 reveal">
            <div className="relative aspect-[4/3] md:aspect-[3/2] overflow-hidden border border-stone-800">
              <iframe
                title="Locația La Maria și Ion"
                data-testid="location-map"
                src="https://www.google.com/maps?q=Splaiul+Independentei+290+Bucuresti+Complex+Studentesc+Regie&output=embed"
                className="w-full h-full grayscale contrast-125 brightness-[0.7]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none" />
            </div>
          </div>

          {/* Info */}
          <div className="col-span-12 md:col-span-5 reveal">
            <ul className="divide-y divide-white/5 border-y border-white/5">
              <InfoRow
                icon={<MapPin className="w-4 h-4" />}
                label="Adresă"
                value={
                  <>
                    Splaiul Independenței 290
                    <br />
                    Complex Studențesc Regie, București
                  </>
                }
                testId="contact-address"
              />
              <InfoRow
                icon={<Clock className="w-4 h-4" />}
                label="Program"
                value={
                  <>
                    Luni — Duminică
                    <br />
                    12:00 — 24:00
                  </>
                }
                testId="contact-hours"
              />
              <InfoRow
                icon={<Phone className="w-4 h-4" />}
                label="Telefon"
                value="0753 473 781"
                testId="contact-phone"
              />
              <InfoRow
                icon={<Mail className="w-4 h-4" />}
                label="Email"
                value="support@mariasiion.ro"
                testId="contact-email"
              />
            </ul>

            <div className="mt-10 text-[11px] uppercase label-tracking text-stone-500 leading-relaxed">
              Ținută · Lejeră, dar îngrijită
              <br />
              Bacșișul · Inclus · Acceptăm cash și card
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoRow = ({ icon, label, value, testId }) => (
  <li className="py-6 grid grid-cols-12 gap-4 items-start" data-testid={testId}>
    <div className="col-span-1 text-amber-500 mt-1">{icon}</div>
    <div className="col-span-3 text-[11px] uppercase label-tracking text-stone-500 mt-1">
      {label}
    </div>
    <div className="col-span-8 font-serif text-stone-100 text-lg md:text-xl leading-snug">
      {value}
    </div>
  </li>
);
