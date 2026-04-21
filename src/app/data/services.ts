import type { Lang } from "../lib/translations";

// ─── Types ──────────────────────────────────────────────────────────────────

export type Addon = {
  name: string;
  duration: string;
  price: string;
};

export type Service = {
  category: string;
  categoryId: CategoryId;
  title: string;
  description: string;
  price: string;
  tags: string[];
  addons?: Addon[];
};

// ─── Categories (source of truth for filtering and display) ─────────────────

export type CategoryId =
  | "dameklipp"
  | "herreklipp"
  | "herre-langt-farge-striper"
  | "farge"
  | "striper-balayage"
  | "keratin"
  | "behandling";

// Timma is source of truth — category names must match 1:1. The categoryId
// below is just an internal slug; the display strings are the Timma names.
export const CATEGORY_LABELS: Record<Lang, Record<CategoryId, string>> = {
  no: {
    dameklipp: "Dameklipp",
    herreklipp: "Herreklipp",
    "herre-langt-farge-striper": "Herreklipp - langt / striper",
    farge: "Farge",
    "striper-balayage": "Striper / balayage",
    keratin: "Keratin - proteinbehandling",
    behandling: "Behandling / tilleggstjenester",
  },
  en: {
    dameklipp: "Dameklipp",
    herreklipp: "Herreklipp",
    "herre-langt-farge-striper": "Herreklipp - langt / striper",
    farge: "Farge",
    "striper-balayage": "Striper / balayage",
    keratin: "Keratin - proteinbehandling",
    behandling: "Behandling / tilleggstjenester",
  },
  ar: {
    dameklipp: "Dameklipp",
    herreklipp: "Herreklipp",
    "herre-langt-farge-striper": "Herreklipp - langt / striper",
    farge: "Farge",
    "striper-balayage": "Striper / balayage",
    keratin: "Keratin - proteinbehandling",
    behandling: "Behandling / tilleggstjenester",
  },
  es: {
    dameklipp: "Dameklipp",
    herreklipp: "Herreklipp",
    "herre-langt-farge-striper": "Herreklipp - langt / striper",
    farge: "Farge",
    "striper-balayage": "Striper / balayage",
    keratin: "Keratin - proteinbehandling",
    behandling: "Behandling / tilleggstjenester",
  },
};

// ─── Display filters (explicit mapping, NO text search) ─────────────────────

export const DISPLAY_FILTERS = [
  "all",
  "dameklipp",
  "herreklipp",
  "herre-langt-farge-striper",
  "farge",
  "striper-balayage",
  "keratin",
  "behandling",
] as const;

export type DisplayFilter = (typeof DISPLAY_FILTERS)[number];

// Filter ID → which CategoryIds it matches. 1:1 today, but kept as a map so a
// future "combined" filter can map to multiple categoryIds without touching
// call sites.
const FILTER_CATEGORY_MAP: Record<Exclude<DisplayFilter, "all">, CategoryId[]> = {
  dameklipp: ["dameklipp"],
  herreklipp: ["herreklipp"],
  "herre-langt-farge-striper": ["herre-langt-farge-striper"],
  farge: ["farge"],
  "striper-balayage": ["striper-balayage"],
  keratin: ["keratin"],
  behandling: ["behandling"],
};

export function filterServices(services: Service[], filter: DisplayFilter): Service[] {
  if (filter === "all") return services;
  const cats = FILTER_CATEGORY_MAP[filter];
  return services.filter((s) => cats.includes(s.categoryId));
}

// Filter chip labels mirror CATEGORY_LABELS 1:1 so nothing abbreviates Timma.
export const DISPLAY_FILTER_LABELS: Record<Lang, Record<DisplayFilter, string>> = {
  no: {
    all: "Vis alle",
    dameklipp: "Dameklipp",
    herreklipp: "Herreklipp",
    "herre-langt-farge-striper": "Herreklipp - langt / striper",
    farge: "Farge",
    "striper-balayage": "Striper / balayage",
    keratin: "Keratin - proteinbehandling",
    behandling: "Behandling / tilleggstjenester",
  },
  en: {
    all: "Show all",
    dameklipp: "Dameklipp",
    herreklipp: "Herreklipp",
    "herre-langt-farge-striper": "Herreklipp - langt / striper",
    farge: "Farge",
    "striper-balayage": "Striper / balayage",
    keratin: "Keratin - proteinbehandling",
    behandling: "Behandling / tilleggstjenester",
  },
  ar: {
    all: "عرض الكل",
    dameklipp: "Dameklipp",
    herreklipp: "Herreklipp",
    "herre-langt-farge-striper": "Herreklipp - langt / striper",
    farge: "Farge",
    "striper-balayage": "Striper / balayage",
    keratin: "Keratin - proteinbehandling",
    behandling: "Behandling / tilleggstjenester",
  },
  es: {
    all: "Ver todos",
    dameklipp: "Dameklipp",
    herreklipp: "Herreklipp",
    "herre-langt-farge-striper": "Herreklipp - langt / striper",
    farge: "Farge",
    "striper-balayage": "Striper / balayage",
    keratin: "Keratin - proteinbehandling",
    behandling: "Behandling / tilleggstjenester",
  },
};

// ─── Addon presets (match fasit exactly) ────────────────────────────────────

const DAME_ADDONS: Addon[] = [
  { name: "Hårvask", duration: "+0 min", price: "99 kr" },
  { name: "Føn og styling", duration: "+15 min", price: "299 kr" },
  { name: "Glossing/toner/minicolour", duration: "+15 min", price: "799 kr" },
];

const HERRE_ADDONS: Addon[] = [
  { name: "Toner/glossing/minicolour", duration: "+15 min", price: "499 kr" },
  { name: "Vask", duration: "+15 min", price: "99 kr" },
  { name: "Hårkur", duration: "+15 min", price: "249 kr" },
];

const FARGE_ADDONS: Addon[] = [
  { name: "Glossing / minicolour", duration: "+30 min", price: "799 kr" },
  { name: "Damestuss", duration: "+30 min", price: "499 kr" },
  { name: "Dameklipp / ny form", duration: "+45 min", price: "699 kr" },
];

const BALAYAGE_ADDONS: Addon[] = [
  { name: "Glossing / minicolour / toner", duration: "+30 min", price: "799 kr" },
  { name: "Damestuss", duration: "+30 min", price: "499 kr" },
  { name: "Dameklipp / ny form", duration: "+45 min", price: "699 kr" },
];

const KERATIN_ADDONS: Addon[] = [
  { name: "Damestuss", duration: "+30 min", price: "499 kr" },
  { name: "Dameklipp / ny form", duration: "+45 min", price: "699 kr" },
];

// Styling/pleie and Bleking use the same set as Farge per fasit.
const STYLING_ADDONS = FARGE_ADDONS;
const BLEKING_ADDONS = FARGE_ADDONS;

// ─── Service entries (Timma fasit is source of truth) ───────────────────────

type ServiceEntry = Omit<Service, "category">;

const SERVICE_ENTRIES: ServiceEntry[] = [
  // ═══ Dameklipp ═══
  {
    categoryId: "dameklipp",
    title: "Damestuss",
    description:
      "For deg som ønsker å stusse tuppene, vanligvis ca. 3–5 cm, uten å endre formen på frisyren.",
    price: "499 kr",
    tags: ["women", "cut"],
    addons: DAME_ADDONS,
  },
  {
    categoryId: "dameklipp",
    title: "Dameklipp / ny form",
    description:
      "For deg som ønsker mer enn en stuss, som layers, bob, oppklipp eller en ny form på frisyren.",
    price: "699 kr",
    tags: ["women", "cut"],
    addons: DAME_ADDONS,
  },
  {
    categoryId: "dameklipp",
    title: "Barneklipp jente",
    description: "Klipp av langt hår. Fra 6 år.",
    price: "399 kr",
    tags: ["women", "children", "cut"],
    addons: DAME_ADDONS,
  },

  // ═══ Herreklipp ═══
  {
    categoryId: "herreklipp",
    title: "Klassisk herreklipp",
    description:
      "For deg som ønsker en klassisk klipp, enten som stuss eller en kortere frisyre.",
    price: "399 kr",
    tags: ["men", "cut"],
    addons: HERRE_ADDONS,
  },
  {
    categoryId: "herreklipp",
    title: "Moderne herreklipp",
    description:
      "For deg som ønsker en mer moderne klipp, som skinfade, mullet, texture crop eller annen tydeligere form.",
    price: "449 kr",
    tags: ["men", "cut"],
    addons: HERRE_ADDONS,
  },
  {
    categoryId: "herreklipp",
    title: "Maskinklipp",
    description:
      "Klipp med maskin i ønsket lengde for et rent og enkelt resultat.",
    price: "199 kr",
    tags: ["men", "cut"],
    addons: HERRE_ADDONS,
  },
  {
    categoryId: "herreklipp",
    title: "Herreklipp klassisk og skjeggtrim",
    description:
      "For deg som ønsker klassisk herreklipp kombinert med trimming og forming av skjegget.",
    price: "499 kr",
    tags: ["men", "cut", "beard"],
    addons: HERRE_ADDONS,
  },
  {
    categoryId: "herreklipp",
    title: "Skjeggtrim",
    description:
      "Trimming og forming av skjegg for et velstelt og ryddig resultat. Behandlingen utføres uten bruk av høvel/blade.",
    price: "199 kr",
    tags: ["men", "beard"],
    addons: HERRE_ADDONS,
  },
  {
    categoryId: "herreklipp",
    title: "Barneklipp gutt",
    description: "Klipp av kort hår. Fra 6 år.",
    price: "349 kr",
    tags: ["men", "children", "cut"],
    addons: HERRE_ADDONS,
  },

  // ═══ Herre – langt hår og farge/striper ═══
  {
    categoryId: "herre-langt-farge-striper",
    title: "Herreklipp langt hår",
    description:
      "For deg med hår som går ned til nakken eller lengre, og som ønsker klipp og forming tilpasset lengden.",
    price: "499 kr",
    tags: ["men", "cut"],
    addons: HERRE_ADDONS,
  },
  {
    categoryId: "herre-langt-farge-striper",
    title: "Herreklipp og farge",
    description:
      "For deg som ønsker klassisk herreklipp kombinert med farge. Gjelder ikke bleking.",
    price: "999 kr",
    tags: ["men", "cut", "colour"],
    addons: HERRE_ADDONS,
  },
  {
    categoryId: "herre-langt-farge-striper",
    title: "Herreklipp og striper",
    description:
      "For deg som ønsker herreklipp kombinert med lysere nyanser eller spill i håret. Gjelder hettestriper for menn.",
    price: "1199 kr",
    tags: ["men", "cut", "highlights"],
    addons: HERRE_ADDONS,
  },
  {
    categoryId: "herre-langt-farge-striper",
    title: "Herrebleking – hår under ørene",
    description:
      "For deg som ønsker å lysne håret. Gjelder bleking av hår under ørene.",
    price: "589 kr",
    tags: ["men", "colour"],
    addons: HERRE_ADDONS,
  },
  {
    categoryId: "herre-langt-farge-striper",
    title: "Herrefarge – hår under ørene",
    description:
      "For deg som ønsker å friske opp eller endre hårfargen. Gjelder farge av hår under ørene.",
    price: "589 kr",
    tags: ["men", "colour"],
    addons: HERRE_ADDONS,
  },
  {
    categoryId: "herre-langt-farge-striper",
    title: "Herrestriper",
    description:
      "For deg som ønsker lysere nyanser eller spill i håret uten klipp. Gjelder hettestriper for menn.",
    price: "999 kr",
    tags: ["men", "highlights"],
    addons: HERRE_ADDONS,
  },

  // ═══ Farge ═══
  {
    categoryId: "farge",
    title: "Farge ettervekst",
    description: "Farging av ettervekst, 3–5 cm. Bleking er ikke inkludert.",
    price: "1199 kr",
    tags: ["women", "colour"],
    addons: FARGE_ADDONS,
  },
  {
    categoryId: "farge",
    title: "Farge kort hår",
    description: "Helfarge for hår opp til ørene.",
    price: "1499 kr",
    tags: ["women", "colour"],
    addons: FARGE_ADDONS,
  },
  {
    categoryId: "farge",
    title: "Farge mellomlangt hår",
    description: "Helfarge for hår over skuldrene.",
    price: "1699 kr",
    tags: ["women", "colour"],
    addons: FARGE_ADDONS,
  },
  {
    categoryId: "farge",
    title: "Farge langt hår",
    description: "Helfarge for hår ned til skulderbladene.",
    price: "1999 kr",
    tags: ["women", "colour"],
    addons: FARGE_ADDONS,
  },
  {
    categoryId: "farge",
    title: "Farge ekstra langt og tykt hår",
    description:
      "Helfarge for hår som går under skulderbladene og/eller er ekstra tykt.",
    price: "3199 kr",
    tags: ["women", "colour"],
    addons: FARGE_ADDONS,
  },

  // ═══ Striper / balayage ═══
  {
    categoryId: "striper-balayage",
    title: "Striper eller balayage – halvt hode",
    description: "Striper eller balayage med folie på halve håret.",
    price: "1889 kr",
    tags: ["women", "highlights", "balayage"],
    addons: BALAYAGE_ADDONS,
  },
  {
    categoryId: "striper-balayage",
    title: "Striper eller balayage – fullt hode",
    description:
      "Striper eller balayage med folie på fullt hode for mellomlangt hår.",
    price: "2489 kr",
    tags: ["women", "highlights", "balayage"],
    addons: BALAYAGE_ADDONS,
  },
  {
    categoryId: "striper-balayage",
    title: "Striper eller balayage – langt hår, fullt hode",
    description:
      "Striper eller balayage med folie på fullt hode for langt hår.",
    price: "3299 kr",
    tags: ["women", "highlights", "balayage"],
    addons: BALAYAGE_ADDONS,
  },
  {
    categoryId: "striper-balayage",
    title: "Striper ettervekst – halvt hode",
    description: "Ettervekststriper med folie på halve håret.",
    price: "1789 kr",
    tags: ["women", "highlights"],
    addons: BALAYAGE_ADDONS,
  },
  {
    categoryId: "striper-balayage",
    title: "Striper ettervekst – fullt hode",
    description: "Ettervekststriper med folie på fullt hode.",
    price: "2399 kr",
    tags: ["women", "highlights"],
    addons: BALAYAGE_ADDONS,
  },

  // ═══ Keratin / behandling ═══
  {
    categoryId: "keratin",
    title: "Keratin- og proteinbehandling kort hår",
    description:
      "For deg som ønsker glattere, sterkere og mer glansfullt hår med mindre frizz. Gjelder for hår som stopper under ørene.",
    price: "2499 kr",
    tags: ["women", "keratin"],
    addons: KERATIN_ADDONS,
  },
  {
    categoryId: "keratin",
    title: "Keratin- og proteinbehandling mellomlangt hår",
    description:
      "For deg som ønsker glattere, sterkere og mer glansfullt hår med mindre frizz. Gjelder for hår som går til skuldrene.",
    price: "2999 kr",
    tags: ["women", "keratin"],
    addons: KERATIN_ADDONS,
  },
  {
    categoryId: "keratin",
    title: "Keratin- og proteinbehandling langt hår",
    description:
      "For deg som ønsker glattere, sterkere og mer glansfullt hår med mindre frizz. Gjelder for hår som går ned til skulderbladene.",
    price: "3699 kr",
    tags: ["women", "keratin"],
    addons: KERATIN_ADDONS,
  },
  {
    categoryId: "keratin",
    title: "Keratin- og proteinbehandling ekstra langt hår",
    description:
      "For deg som ønsker glattere, sterkere og mer glansfullt hår med mindre frizz. Gjelder for hår som går under skulderbladene.",
    price: "4499 kr",
    tags: ["women", "keratin"],
    addons: KERATIN_ADDONS,
  },

  // ═══ Bleking ═══
  {
    categoryId: "behandling",
    title: "Bleking ettervekst",
    description: "For deg som ønsker å lysne etterveksten.",
    price: "1199 kr",
    tags: ["women", "colour", "bleach"],
    addons: BLEKING_ADDONS,
  },
  {
    categoryId: "behandling",
    title: "Bleking kort hår",
    description: "For deg som ønsker å lysne hår opp til ørene.",
    price: "1499 kr",
    tags: ["women", "colour", "bleach"],
    addons: BLEKING_ADDONS,
  },
  {
    categoryId: "behandling",
    title: "Bleking mellomlangt hår",
    description: "For deg som ønsker å lysne hår over skuldrene.",
    price: "1699 kr",
    tags: ["women", "colour", "bleach"],
    addons: BLEKING_ADDONS,
  },
  {
    categoryId: "behandling",
    title: "Bleking langt hår",
    description: "For deg som ønsker å lysne hår ned til skulderbladene.",
    price: "1999 kr",
    tags: ["women", "colour", "bleach"],
    addons: BLEKING_ADDONS,
  },

  // ═══ Styling / pleie / annet ═══
  {
    categoryId: "behandling",
    title: "Vask og føn",
    description: "Legg til hårvask og føn for et rent og enkelt resultat.",
    price: "399 kr",
    tags: ["women", "treatment"],
    addons: STYLING_ADDONS,
  },
  {
    categoryId: "behandling",
    title: "Vask og styling (bølgete)",
    description:
      "Legg til hårvask og styling med bølger for et mer formet resultat.",
    price: "599 kr",
    tags: ["women", "treatment"],
    addons: STYLING_ADDONS,
  },
  {
    categoryId: "behandling",
    title: "Hårkur",
    description: "Legg til hårkur for ekstra pleie og fukt til håret.",
    price: "599 kr",
    tags: ["women", "treatment"],
    addons: STYLING_ADDONS,
  },
  {
    categoryId: "behandling",
    title: "Extensions",
    description:
      "For deg som ønsker lengre eller fyldigere hår med tape extensions. Pris avtales etter ønsket lengde og mengde hår. Ta kontakt på telefon eller e-post for vurdering og prisestimat. Ca. pris fra 3999 til 7999 kr.",
    price: "1 kr",
    tags: ["women", "treatment"],
    addons: STYLING_ADDONS,
  },
];

// ─── Public API ─────────────────────────────────────────────────────────────

// Dedupe by title so the UI never shows the same service twice even if the
// raw source list contains accidental duplicates.
function dedupeByTitle(entries: ServiceEntry[]): ServiceEntry[] {
  const seen = new Set<string>();
  return entries.filter((e) => {
    const key = e.title.trim().toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function getServices(lang: Lang): Service[] {
  return dedupeByTitle(SERVICE_ENTRIES).map((entry) => ({
    ...entry,
    category: CATEGORY_LABELS[lang][entry.categoryId],
  }));
}
