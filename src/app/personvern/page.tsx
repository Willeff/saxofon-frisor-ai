"use client";

import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";
import FloatingChat from "../components/FloatingChat";
import { useConsent } from "../context/ConsentContext";

// MVP-personvernerklæring. Innholdet er bevisst forsiktig formulert og
// inneholder TODO-markører der konkrete fakta må fylles inn manuelt før
// produksjon. Teksten er foreløpig kun på norsk — flerspråklig versjon
// kan legges i `lib/translations.ts` senere hvis ønskelig.

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12 md:mb-14">
      <h2 className="text-[clamp(1.4rem,2.2vw,1.8rem)] font-light tracking-wide text-[#1A1A1A] mb-4">
        {title}
      </h2>
      <div className="text-[15px] md:text-[16px] text-[#1A1A1A]/80 font-normal leading-[1.85] space-y-4">
        {children}
      </div>
    </section>
  );
}

function Todo({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-[#FFF3CD] text-[#7A5A00] px-2 py-0.5 text-[13px] font-medium border border-[#E8D58A]">
      TODO: {children}
    </span>
  );
}

export default function PersonvernPage() {
  const { reopen } = useConsent();

  return (
    <main className="bg-[#F7F4EF] min-h-screen flex flex-col">
      <Navbar variant="light" />

      <section className="flex-1">
        <div className="max-w-3xl mx-auto px-6 md:px-16 py-16 md:py-24">

          <div className="flex items-center gap-4 mb-8">
            <span className="block w-10 h-px bg-[#C4A882]/50" />
            <p className="text-[12px] tracking-[0.3em] uppercase text-[#C4A882] font-light">
              Personvern
            </p>
          </div>

          <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-light tracking-wide text-[#1A1A1A] mb-4">
            Personvernerklæring
          </h1>
          <p className="text-[14px] text-[#1A1A1A]/60 mb-12">
            Sist oppdatert: <Todo>fyll inn dato før publisering</Todo>
          </p>

          <Section title="Behandlingsansvarlig">
            <p>
              Saxoføn Frisør, Fredensborgveien 22, 0177 Oslo, er
              behandlingsansvarlig for personopplysninger som samles inn
              gjennom denne nettsiden.
            </p>
            <p>
              Organisasjonsnummer: <Todo>fyll inn org.nr.</Todo>
              <br />
              Kontakt: saxofon@hotmail.no · +47 455 55 898
            </p>
          </Section>

          <Section title="Hvilke opplysninger vi kan behandle">
            <p>
              Når du besøker saxofonfrisor.no kan vi behandle følgende
              kategorier av opplysninger:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Tekniske opplysninger som er nødvendige for at nettsiden skal
                fungere (f.eks. forespørsler til vår server).
              </li>
              <li>
                Opplysninger om bruk av nettsiden via valgfrie analyseverktøy,
                kun dersom du har gitt samtykke (se neste avsnitt).
              </li>
              <li>
                Innhold du selv sender inn via AI-chatten eller
                kontaktskjemaer.
              </li>
            </ul>
            <p>
              <Todo>
                Bekreft eksakt liste over felter som logges på serveren
                (IP-adresse, user agent, tidspunkt osv.) og oppbevaringstid.
              </Todo>
            </p>
          </Section>

          <Section title="Bruk av analyseverktøy">
            <p>
              Nettsiden bruker per i dag ingen analyseverktøy som standard.
              Dersom analyseverktøy (f.eks. Google Analytics) tas i bruk,
              vil disse kun lastes etter at du har gitt et aktivt samtykke
              via cookie-banneret.
            </p>
            <p>
              <Todo>
                Når GA4 eller andre verktøy kobles på: list opp leverandør,
                hvilke data som samles inn, formål, lagringstid og eventuell
                overføring utenfor EØS.
              </Todo>
            </p>
          </Section>

          <Section title="Samtykke og hvordan du trekker det tilbake">
            <p>
              Første gang du besøker nettsiden får du opp et samtykkebanner
              hvor du kan godta eller avslå valgfrie analyseverktøy. Valget
              ditt lagres lokalt i nettleseren din.
            </p>
            <p>
              Du kan når som helst endre valget ditt ved å klikke på lenken{" "}
              <button
                type="button"
                onClick={reopen}
                className="underline underline-offset-2 text-[#1A1A1A] hover:text-[#C4A882] transition-colors"
              >
                «Endre cookievalg»
              </button>{" "}
              nederst på siden, eller ved å klikke knappen over.
            </p>
          </Section>

          <Section title="AI-chat">
            <p>
              Nettsiden tilbyr en AI-basert chat som kan svare på generelle
              spørsmål om tjenester, priser og åpningstider. Chatten er ment
              som en informasjonstjeneste, og er ikke et sted for å dele
              sensitive personopplysninger.
            </p>
            <p>
              <strong>Vennligst ikke skriv inn:</strong> personnummer,
              helseopplysninger, betalingsinformasjon eller annen sensitiv
              informasjon i chatten.
            </p>
            <p>
              Meldingene du skriver inn sendes til vår tjener for å kunne
              generere et svar via en ekstern språkmodell-leverandør.
            </p>
            <p>
              <Todo>
                Bekreft hvilken leverandør som brukes (f.eks. Anthropic),
                om meldinger logges, hvor lenge de eventuelt lagres, hvem som
                har tilgang, og om det skjer overføring utenfor EØS. Oppdater
                denne seksjonen med presise opplysninger før produksjon.
              </Todo>
            </p>
          </Section>

          <Section title="Tredjeparter og leverandører">
            <p>
              Nettsiden lenker til eksterne tjenester som booking
              (bestill.timma.no), Google Maps, Facebook, Instagram, TikTok og
              Google. Vi setter ingen sporings-cookies fra disse på vår egen
              side, men hvis du følger lenkene gjelder deres egne vilkår og
              personvernerklæringer.
            </p>
            <p>
              <Todo>
                Lag en oversikt over alle databehandlere (hosting,
                AI-leverandør, ev. analyseverktøy, e-postleverandør) og
                bekreft at databehandleravtaler er på plass.
              </Todo>
            </p>
          </Section>

          <Section title="Dine rettigheter">
            <p>
              Du har rett til innsyn, retting, sletting og dataportabilitet
              for personopplysninger vi behandler om deg, samt rett til å
              klage til Datatilsynet. For å utøve rettighetene dine kan du
              kontakte oss på saxofon@hotmail.no.
            </p>
            <p>
              <Todo>
                Bekreft formuleringen rundt rettigheter og at responsfristen
                følger kravene i personvernforordningen (GDPR).
              </Todo>
            </p>
          </Section>

          <Section title="Endringer i denne erklæringen">
            <p>
              Vi kan oppdatere denne personvernerklæringen ved endringer i
              nettsiden eller regelverket. Sist oppdatert-dato vises øverst
              på siden.
            </p>
          </Section>

          <Section title="Kontakt">
            <p>
              Spørsmål om personvern kan rettes til:
              <br />
              Saxoføn Frisør
              <br />
              Fredensborgveien 22, 0177 Oslo
              <br />
              saxofon@hotmail.no
              <br />
              +47 455 55 898
            </p>
          </Section>

        </div>
      </section>

      <FooterSection />
      <FloatingChat />
    </main>
  );
}
