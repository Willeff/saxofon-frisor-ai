export type Service = {
  category: string;
  title: string;
  description: string;
  price: string;
  tags: string[];
};

export const FILTER_TAGS = [
  "Vis alle",
  "Herrer",
  "Damer",
  "Klipp",
  "Farge",
  "Striper",
  "Balayage",
  "Skjegg",
  "Barn",
  "Kort hår",
  "Mellomlangt hår",
  "Langt hår",
  "Ekstra langt hår",
] as const;

export type FilterTag = (typeof FILTER_TAGS)[number];

export const SERVICES: Service[] = [
  // — Herrer —
  {
    category: "Herrer",
    title: "Klassisk herreklipp",
    description: "For deg som ønsker enten stuss eller kort frisyre",
    price: "399 kr",
    tags: ["Herrer", "Klipp", "Kort hår"],
  },
  {
    category: "Herrer",
    title: "Herreklipp og skjeggtrim",
    description:
      "Klassisk herreklipp for hårlengder over skuldrene, inkludert skjeggtrim. Hårvask kan legges til om ønskelig.",
    price: "499 kr",
    tags: ["Herrer", "Klipp", "Skjegg"],
  },
  {
    category: "Herrer",
    title: "Herreklipp langt hår",
    description:
      "Herreklipp langt hår – for hårlengder under skuldrene. Hårvask kan legges til ved ønske.",
    price: "599 kr",
    tags: ["Herrer", "Klipp", "Langt hår"],
  },
  {
    category: "Herrer",
    title: "Maskinklipp",
    description: "Klipp av hår med maskin",
    price: "199 kr",
    tags: ["Herrer", "Klipp", "Kort hår"],
  },
  {
    category: "Herrer",
    title: "Skinfade herreklipp",
    description:
      "Presis klipp med mulighet for fade, tilpasset din stil. Spar 10% ved drop-in. Skjeggtrim 100 kr ekstra | Hårvask kan legges til ved ønske.",
    price: "449 kr",
    tags: ["Herrer", "Klipp", "Kort hår"],
  },
  {
    category: "Herrer",
    title: "Skjeggtrim",
    description: "Trimming og forming av skjegg med maskin",
    price: "249 kr",
    tags: ["Herrer", "Skjegg"],
  },
  {
    category: "Herrer",
    title: "Barneklipp gutt",
    description: "Klipp av kort hår fra 6 år, uten vask.",
    price: "349 kr",
    tags: ["Herrer", "Barn", "Klipp", "Kort hår"],
  },
  {
    category: "Herrer",
    title: "Herreklipp og farge",
    description:
      "Klassisk klipp og farge for menn med kort hår (gjelder ikke bleking).",
    price: "989 kr",
    tags: ["Herrer", "Klipp", "Farge", "Kort hår"],
  },
  {
    category: "Herrer",
    title: "Herreklipp og striper",
    description:
      "Til deg som ønsker både klipp og lysere nyanser/spill i kort hår.",
    price: "1 189 kr",
    tags: ["Herrer", "Klipp", "Striper", "Kort hår"],
  },

  // — Damer —
  {
    category: "Damer",
    title: "Klassisk dameklipp",
    description:
      "Stuss av langt hår (2–5 cm). Denne behandlingen inkluderer ikke hårvask.",
    price: "499 kr",
    tags: ["Damer", "Klipp", "Langt hår"],
  },
  {
    category: "Damer",
    title: "Dameklipp klassisk med vask",
    description: "Stuss av lengder (2–5 cm). Hårvask er inkludert i behandlingen.",
    price: "649 kr",
    tags: ["Damer", "Klipp"],
  },
  {
    category: "Damer",
    title: "Dameklipp kort hår",
    description: "Klipp og styling inkludert vask og føning",
    price: "689 kr",
    tags: ["Damer", "Klipp", "Kort hår"],
  },
  {
    category: "Damer",
    title: "Dameklipp langt hår",
    description: "Klipp og styling inkludert vask og føning",
    price: "889 kr",
    tags: ["Damer", "Klipp", "Langt hår"],
  },
  {
    category: "Damer",
    title: "Større forandring",
    description:
      "Dameklipp (kort til langt hår) – for deg som ønsker en helt ny frisyre, enten det gjelder kort hår, langt hår, oppklipp (layers), bob eller andre forandringer. Hårvask er ikke inkludert. Vask kan legges til for 200 kr (valgfritt).",
    price: "599 kr",
    tags: ["Damer", "Klipp"],
  },
  {
    category: "Damer",
    title: "Barneklipp jente",
    description: "Klipp av langt hår fra 6 år",
    price: "399 kr",
    tags: ["Damer", "Barn", "Klipp", "Langt hår"],
  },

  // — Farge og klipp —
  {
    category: "Farge og klipp",
    title: "Farge og klipp (kort)",
    description:
      "Farge og klipp, hårlengder ovenfor kjevehøyde. Vask og føning inkludert.",
    price: "1 489 kr",
    tags: ["Damer", "Farge", "Klipp", "Kort hår"],
  },
  {
    category: "Farge og klipp",
    title: "Farge og klipp (mellomlangt)",
    description:
      "Farging og klipping av hår som rekker til over skuldrene. Vask og føning er inkludert.",
    price: "1 789 kr",
    tags: ["Damer", "Farge", "Klipp", "Mellomlangt hår"],
  },
  {
    category: "Farge og klipp",
    title: "Farge og klipp (langt)",
    description:
      "Farging av ettervekst (maks 3 cm) og klipp. Gjelder ikke fargebehandlinger som krever bleking. Vask og føning er inkludert.",
    price: "2 399 kr",
    tags: ["Damer", "Farge", "Klipp", "Langt hår"],
  },
  {
    category: "Farge og klipp",
    title: "Farge og klipp (ekstra langt)",
    description:
      "Farging og klipping av hår som rekker under skulderbladene. Vask og føning er inkludert.",
    price: "2 589 kr",
    tags: ["Damer", "Farge", "Klipp", "Ekstra langt hår"],
  },
  {
    category: "Farge og klipp",
    title: "Farge ettervekst og klipp",
    description:
      "Farging av ettervekst (maks 3 cm) og klipp. Gjelder ikke fargebehandlinger som krever bleking. Vask og føning er inkludert.",
    price: "1 289 kr",
    tags: ["Damer", "Farge", "Klipp"],
  },
  {
    category: "Farge og klipp",
    title: "Farge ettervekst",
    description:
      "Farging av ettervekst (maks 3 cm). Gjelder ikke fargebehandlinger som krever bleking. Vask og føning er inkludert.",
    price: "889 kr",
    tags: ["Damer", "Farge"],
  },
  {
    category: "Farge og klipp",
    title: "Farge (kort)",
    description:
      "Fargebehandling for hår over kjevehøyde, inkludert vask og føning",
    price: "1 289 kr",
    tags: ["Damer", "Farge", "Kort hår"],
  },
  {
    category: "Farge og klipp",
    title: "Farge (mellomlangt)",
    description:
      "Farging av hår som rekker til over skuldrene. Vask og føning er inkludert.",
    price: "1 589 kr",
    tags: ["Damer", "Farge", "Mellomlangt hår"],
  },
  {
    category: "Farge og klipp",
    title: "Farge (langt)",
    description:
      "Farging av hår som rekker ned til skulderbladene. Vask og føning er inkludert.",
    price: "1 789 kr",
    tags: ["Damer", "Farge", "Langt hår"],
  },
  {
    category: "Farge og klipp",
    title: "Farge (ekstra langt)",
    description:
      "Farging av hår som rekker ned til skulderbladene. Vask og føning er inkludert.",
    price: "1 989 kr",
    tags: ["Damer", "Farge", "Ekstra langt hår"],
  },

  // — Striper og balayage —
  {
    category: "Striper og balayage",
    title: "Striper eller balayage (halvt hode)",
    description:
      "Striper eller balayage med folie inkl. toner (minicolour)",
    price: "1 790 kr",
    tags: ["Damer", "Striper", "Balayage"],
  },
  {
    category: "Striper og balayage",
    title: "Striper eller balayage (mellomlangt/fullt hode)",
    description:
      "Striper eller balayage med folie inkl. toner (minicolour)",
    price: "2 390 kr",
    tags: ["Damer", "Striper", "Balayage", "Mellomlangt hår"],
  },
  {
    category: "Striper og balayage",
    title: "Striper eller balayage (langt hår, fullt hode)",
    description:
      "Striper eller balayage med folie inkl. toner (minicolour)",
    price: "3 199 kr",
    tags: ["Damer", "Striper", "Balayage", "Langt hår"],
  },
  {
    category: "Striper og balayage",
    title: "Striper ettervekst (fullt hode)",
    description:
      "Ettervekst striper med folie (minicolour og glossing er ikke inkludert i prisen)",
    price: "2 299 kr",
    tags: ["Damer", "Striper"],
  },
  {
    category: "Striper og balayage",
    title: "Striper ettervekst (halvt hode)",
    description:
      "Ettervekst striper med folie (minicolour og glossing er ikke inkludert i prisen)",
    price: "1 690 kr",
    tags: ["Damer", "Striper"],
  },
  {
    category: "Striper og balayage",
    title: "Minicolour / Toner (kort)",
    description:
      "Oppfriskning av hårfarge med minicolour eller toner, for hår som rekker ovenfor kjevehøyde. Vask og føning er inkludert.",
    price: "899 kr",
    tags: ["Damer", "Farge", "Kort hår"],
  },
  {
    category: "Striper og balayage",
    title: "Minicolour / Toner (mellomlangt)",
    description:
      "Oppfriskning av hårfarge med minicolour eller toner, for hår som rekker til over skuldrene. Vask og føning er inkludert.",
    price: "1 199 kr",
    tags: ["Damer", "Farge", "Mellomlangt hår"],
  },
  {
    category: "Striper og balayage",
    title: "Minicolour / Toner (langt)",
    description:
      "Oppfriskning av hårfarge med minicolour eller toner, for hår som rekker ned til skulderbladene. Vask og føning er inkludert.",
    price: "1 599 kr",
    tags: ["Damer", "Farge", "Langt hår"],
  },
];
