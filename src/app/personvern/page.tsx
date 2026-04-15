"use client";

import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";
import FloatingChat from "../components/FloatingChat";

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

export default function PersonvernPage() {
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
            Sist oppdatert: 15. april 2026
          </p>

          <Section title="1. Behandlingsansvarlig">
            <p>
              Saxoføn Frisør AS er behandlingsansvarlig for personopplysninger
              som behandles i forbindelse med bruk av nettsiden
              saxofonfrisor.no.
            </p>
            <p>
              Adresse: Fredensborgveien 22, 0177 Oslo
              <br />
              Organisasjonsnummer: 934 665 791
              <br />
              E-post:{" "}
              <a
                href="mailto:saxofon@hotmail.no"
                className="underline underline-offset-2 hover:text-[#C4A882] transition-colors"
              >
                saxofon@hotmail.no
              </a>
              <br />
              Telefon: +47 455 55 898
            </p>
          </Section>

          <Section title="2. Hvilke opplysninger vi behandler">
            <p>
              Når du bruker nettsiden vår, kan vi behandle følgende typer
              opplysninger:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                tekniske opplysninger som er nødvendige for at nettsiden skal
                fungere, for eksempel informasjon som sendes til serveren når
                en side lastes
              </li>
              <li>
                opplysninger om bruk av nettsiden gjennom analyseverktøy,
                dersom du har samtykket til dette
              </li>
              <li>
                opplysninger du selv oppgir dersom du kontakter oss eller
                bruker AI-chatten
              </li>
            </ul>
            <p>
              Vi ber deg om å ikke sende inn sensitive personopplysninger i
              chatten eller via nettsiden, for eksempel personnummer,
              helseopplysninger, betalingsinformasjon eller andre fortrolige
              opplysninger.
            </p>
          </Section>

          <Section title="3. Formål med behandlingen">
            <p>Vi behandler personopplysninger for å:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>levere og sikre nettsiden</li>
              <li>
                forstå hvordan nettsiden brukes og forbedre innhold,
                funksjonalitet og brukeropplevelse
              </li>
              <li>besvare henvendelser</li>
              <li>gjøre AI-chatten tilgjengelig som informasjonstjeneste</li>
              <li>
                oppfylle rettslige forpliktelser dersom det er nødvendig
              </li>
            </ul>
          </Section>

          <Section title="4. Rettslig grunnlag">
            <p>
              Behandling av personopplysninger som er nødvendige for drift og
              sikkerhet av nettsiden skjer på grunnlag av vår berettigede
              interesse i å levere en trygg og velfungerende nettside.
            </p>
            <p>
              Bruk av analyseverktøy og andre valgfrie teknologier skjer på
              grunnlag av samtykke, der dette kreves.
            </p>
          </Section>

          <Section title="5. Cookies, samtykke og analyse">
            <p>
              Nettsiden bruker Google Tag Manager og Google Analytics 4 for å
              forstå hvordan nettsiden brukes og for å forbedre innhold,
              funksjonalitet og brukeropplevelse.
            </p>
            <p>
              Analyseverktøy lastes bare etter at du har gitt samtykke gjennom
              cookie-banneret. Dersom du ikke samtykker, lastes ikke disse
              verktøyene.
            </p>
            <p>
              Vi bruker analyse for å måle generell bruk av nettsiden og for å
              forstå handlinger som for eksempel klikk på bestillingslenker,
              telefonlenker, e-postlenker og bruk av chatfunksjonen.
            </p>
            <p>
              Valget ditt lagres lokalt i nettleseren din, slik at nettsiden
              husker innstillingen din. Du kan når som helst endre eller
              trekke tilbake samtykket ditt via lenken for cookievalg på
              nettsiden.
            </p>
          </Section>

          <Section title="6. AI-chat">
            <p>
              Nettsiden tilbyr en AI-basert chat som kan svare på generelle
              spørsmål om tjenester, priser og åpningstider.
            </p>
            <p>
              Opplysninger du skriver inn i chatten sendes til vår server og
              videre til en ekstern AI-leverandør for å kunne generere svar.
              Chatten er kun ment for generelle spørsmål, og skal ikke brukes
              til å dele sensitive personopplysninger.
            </p>
            <p>
              For analyse og forbedring av tjenesten kan vi registrere at
              chatten åpnes, at en melding sendes, hvilket språk som brukes,
              samt meldingslengde og tekniske feilhendelser. Vi bruker ikke
              rå meldingstekst som analysedata i Google Analytics.
            </p>
            <p>
              Dersom du ønsker å bestille time eller dele informasjon som
              ikke passer i chatten, ber vi deg bruke ordinære kontakt- eller
              bookingkanaler.
            </p>
          </Section>

          <Section title="7. Tredjeparter og leverandører">
            <p>
              Vi kan bruke eksterne leverandører for drift av nettsiden og
              tilknyttede tjenester. Dette kan omfatte:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>leverandør av hosting og teknisk drift</li>
              <li>
                Google Tag Manager og Google Analytics som analyseverktøy
              </li>
              <li>
                Anthropic som leverandør av AI-funksjonalitet i chatten
              </li>
              <li>
                eksterne tjenester du selv velger å åpne via lenker på
                nettsiden, som booking, Google Maps og sosiale medier
              </li>
            </ul>
            <p>
              Når du klikker deg videre til eksterne tjenester, gjelder deres
              egne vilkår og personvernerklæringer.
            </p>
          </Section>

          <Section title="8. Overføring utenfor EØS">
            <p>
              Noen av leverandørene vi bruker kan behandle personopplysninger
              utenfor EØS. Dersom dette skjer, skal det være basert på gyldig
              rettslig grunnlag etter personvernregelverket, for eksempel
              EU-kommisjonens standard personvernbestemmelser eller annet
              lovlig overføringsgrunnlag.
            </p>
          </Section>

          <Section title="9. Lagringstid">
            <p>
              Vi lagrer personopplysninger så lenge det er nødvendig for
              formålet de ble samlet inn for, eller så lenge vi er rettslig
              forpliktet til det.
            </p>
            <p>
              Opplysninger som ikke lenger er nødvendige, skal slettes eller
              anonymiseres.
            </p>
          </Section>

          <Section title="10. Dine rettigheter">
            <p>Du kan ha rett til å:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                be om innsyn i hvilke personopplysninger vi har om deg
              </li>
              <li>be om retting av uriktige opplysninger</li>
              <li>be om sletting</li>
              <li>be om begrensning av behandlingen</li>
              <li>protestere mot behandlingen</li>
              <li>
                be om dataportabilitet der regelverket gir deg rett til det
              </li>
            </ul>
            <p>
              Du har også rett til å klage til Datatilsynet dersom du mener
              at vår behandling av personopplysninger er i strid med
              regelverket.
            </p>
          </Section>

          <Section title="11. Kontakt">
            <p>
              Dersom du har spørsmål om personvern eller ønsker å bruke
              rettighetene dine, kan du kontakte oss:
            </p>
            <p>
              Saxoføn Frisør AS
              <br />
              Fredensborgveien 22, 0177 Oslo
              <br />
              <a
                href="mailto:saxofon@hotmail.no"
                className="underline underline-offset-2 hover:text-[#C4A882] transition-colors"
              >
                saxofon@hotmail.no
              </a>
              <br />
              +47 455 55 898
            </p>
          </Section>

          <Section title="12. Endringer i erklæringen">
            <p>
              Vi kan oppdatere denne personvernerklæringen dersom det skjer
              endringer i nettsiden, tjenestene våre eller gjeldende
              regelverk. Oppdatert versjon vil alltid være tilgjengelig på
              denne siden.
            </p>
          </Section>

        </div>
      </section>

      <FooterSection />
      <FloatingChat />
    </main>
  );
}
