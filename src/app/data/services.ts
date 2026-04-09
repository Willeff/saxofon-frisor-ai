import type { Lang } from "../lib/translations";

export type Service = {
  category: string;
  title: string;
  description: string;
  price: string;
  tags: string[];
};

// Display filter IDs (language-neutral, what the user sees as filter chips)
export const DISPLAY_FILTERS = [
  "all",
  "men",
  "women",
  "highlights-balayage",
  "colour",
  "keratin",
  "children",
] as const;

export type DisplayFilter = (typeof DISPLAY_FILTERS)[number];

// Mapping from display filter to internal service tags
const FILTER_TAG_MAP: Record<Exclude<DisplayFilter, "all">, string[]> = {
  men: ["men"],
  women: ["women"],
  "highlights-balayage": ["highlights", "balayage"],
  colour: ["colour"],
  keratin: ["keratin"],
  children: ["children"],
};

export function filterServices(services: Service[], filter: DisplayFilter): Service[] {
  if (filter === "all") return services;
  const matchTags = FILTER_TAG_MAP[filter];
  return services.filter((s) => s.tags.some((t) => matchTags.includes(t)));
}

// Translated display filter labels
export const DISPLAY_FILTER_LABELS: Record<Lang, Record<DisplayFilter, string>> = {
  no: {
    all: "Vis alle",
    men: "Herreklipp",
    women: "Dameklipp",
    "highlights-balayage": "Striper / balayage",
    colour: "Farge",
    keratin: "Keratin / protein",
    children: "Barn",
  },
  en: {
    all: "Show all",
    men: "Men's cuts",
    women: "Women's cuts",
    "highlights-balayage": "Highlights / balayage",
    colour: "Colour",
    keratin: "Keratin / protein",
    children: "Children",
  },
  ar: {
    all: "عرض الكل",
    men: "قصات رجالية",
    women: "قصات نسائية",
    "highlights-balayage": "خصلات / بالياج",
    colour: "صبغة",
    keratin: "كيراتين / بروتين",
    children: "أطفال",
  },
  es: {
    all: "Ver todos",
    men: "Cortes de caballero",
    women: "Cortes de mujer",
    "highlights-balayage": "Mechas / balayage",
    colour: "Color",
    keratin: "Keratina / proteína",
    children: "Niños",
  },
};

// Category IDs (language-neutral)
export type CategoryId = "men" | "women" | "colour-cut" | "highlights-balayage" | "treatment";

export const CATEGORY_LABELS: Record<Lang, Record<CategoryId, string>> = {
  no: {
    men: "Herrer",
    women: "Damer",
    "colour-cut": "Farge og klipp",
    "highlights-balayage": "Striper og balayage",
    treatment: "Behandling",
  },
  en: {
    men: "Men",
    women: "Women",
    "colour-cut": "Colour & cut",
    "highlights-balayage": "Highlights & balayage",
    treatment: "Treatment",
  },
  ar: {
    men: "رجال",
    women: "نساء",
    "colour-cut": "صبغة وقص",
    "highlights-balayage": "خصلات وبالياج",
    treatment: "علاج",
  },
  es: {
    men: "Hombres",
    women: "Mujeres",
    "colour-cut": "Color y corte",
    "highlights-balayage": "Mechas y balayage",
    treatment: "Tratamiento",
  },
};

type ServiceEntry = {
  categoryId: CategoryId;
  price: string;
  tags: string[];
  title: Record<Lang, string>;
  description: Record<Lang, string>;
};

const SERVICE_ENTRIES: ServiceEntry[] = [
  // — Men —
  {
    categoryId: "men",
    price: "399 kr",
    tags: ["men", "cut"],
    title: {
      no: "Klassisk herreklipp",
      en: "Classic men's cut",
      ar: "قصة رجالية كلاسيكية",
      es: "Corte clásico de caballero",
    },
    description: {
      no: "For deg som ønsker enten stuss eller kort frisyre.",
      en: "For those who want a buzz cut or short hairstyle.",
      ar: "لمن يرغب في قصة قصيرة أو تسريحة قصيرة.",
      es: "Para quienes desean un corte rapado o peinado corto.",
    },
  },
  {
    categoryId: "men",
    price: "499 kr",
    tags: ["men", "cut", "beard"],
    title: {
      no: "Herreklipp og skjeggtrim",
      en: "Men's cut & beard trim",
      ar: "قصة رجالية وتشذيب اللحية",
      es: "Corte de caballero y recorte de barba",
    },
    description: {
      no: "Klassisk herreklipp inkludert skjeggtrim. Hårvask kan legges til.",
      en: "Classic men's cut including beard trim. Hair wash can be added.",
      ar: "قصة رجالية كلاسيكية تشمل تشذيب اللحية. يمكن إضافة غسل الشعر.",
      es: "Corte clásico incluyendo recorte de barba. Se puede añadir lavado.",
    },
  },
  {
    categoryId: "men",
    price: "599 kr",
    tags: ["men", "cut"],
    title: {
      no: "Herreklipp langt hår",
      en: "Men's cut – long hair",
      ar: "قصة رجالية للشعر الطويل",
      es: "Corte de caballero – pelo largo",
    },
    description: {
      no: "For hårlengder under skuldrene. Hårvask kan legges til.",
      en: "For hair below the shoulders. Hair wash can be added.",
      ar: "للشعر تحت الكتفين. يمكن إضافة غسل الشعر.",
      es: "Para cabello por debajo de los hombros. Se puede añadir lavado.",
    },
  },
  {
    categoryId: "men",
    price: "199 kr",
    tags: ["men", "cut"],
    title: {
      no: "Maskinklipp",
      en: "Clipper cut",
      ar: "قص بالماكينة",
      es: "Corte a máquina",
    },
    description: {
      no: "Klipp av hår med maskin.",
      en: "Hair cut with clippers.",
      ar: "قص الشعر بالماكينة.",
      es: "Corte de pelo con máquina.",
    },
  },
  {
    categoryId: "men",
    price: "449 kr",
    tags: ["men", "cut"],
    title: {
      no: "Skinfade herreklipp",
      en: "Skin fade men's cut",
      ar: "قصة سكن فيد رجالية",
      es: "Corte con degradado",
    },
    description: {
      no: "Presis klipp med fade, tilpasset din stil. Skjeggtrim +100 kr.",
      en: "Precise cut with fade, tailored to your style. Beard trim +100 kr.",
      ar: "قصة دقيقة مع تدرج. تشذيب اللحية +100 كرونة.",
      es: "Corte preciso con degradado. Recorte de barba +100 kr.",
    },
  },
  {
    categoryId: "men",
    price: "249 kr",
    tags: ["men", "beard"],
    title: {
      no: "Skjeggtrim",
      en: "Beard trim",
      ar: "تشذيب اللحية",
      es: "Recorte de barba",
    },
    description: {
      no: "Trimming og forming av skjegg med maskin.",
      en: "Trimming and shaping of beard with clippers.",
      ar: "تشذيب وتشكيل اللحية بالماكينة.",
      es: "Recorte y perfilado de barba con máquina.",
    },
  },
  {
    categoryId: "men",
    price: "349 kr",
    tags: ["men", "children", "cut"],
    title: {
      no: "Barneklipp gutt",
      en: "Boy's haircut",
      ar: "قصة شعر للأولاد",
      es: "Corte de niño",
    },
    description: {
      no: "Klipp fra 6 år, uten vask.",
      en: "Cut from age 6, without wash.",
      ar: "قص من سن 6 سنوات، بدون غسل.",
      es: "Corte desde 6 años, sin lavado.",
    },
  },
  {
    categoryId: "men",
    price: "989 kr",
    tags: ["men", "cut", "colour"],
    title: {
      no: "Herreklipp og farge",
      en: "Men's cut & colour",
      ar: "قصة رجالية وصبغة",
      es: "Corte y color de caballero",
    },
    description: {
      no: "Klipp og farge for menn (gjelder ikke bleking).",
      en: "Cut and colour for men (bleaching not included).",
      ar: "قصة وصبغة للرجال (لا تشمل التبييض).",
      es: "Corte y color para hombres (no incluye decoloración).",
    },
  },
  {
    categoryId: "men",
    price: "1 189 kr",
    tags: ["men", "cut", "highlights"],
    title: {
      no: "Herreklipp og striper",
      en: "Men's cut & highlights",
      ar: "قصة رجالية وخصلات",
      es: "Corte de caballero y mechas",
    },
    description: {
      no: "Klipp og lysere nyanser/spill i håret.",
      en: "Cut and lighter tones in the hair.",
      ar: "قص مع درجات أفتح في الشعر.",
      es: "Corte y tonos más claros en el pelo.",
    },
  },

  // — Women —
  {
    categoryId: "women",
    price: "499 kr",
    tags: ["women", "cut"],
    title: {
      no: "Klassisk dameklipp",
      en: "Classic women's cut",
      ar: "قصة نسائية كلاسيكية",
      es: "Corte clásico de mujer",
    },
    description: {
      no: "Stuss av langt hår (2–5 cm). Uten hårvask.",
      en: "Trim of long hair (2–5 cm). Without hair wash.",
      ar: "تقليم الشعر الطويل (2-5 سم). بدون غسل.",
      es: "Recorte de pelo largo (2–5 cm). Sin lavado.",
    },
  },
  {
    categoryId: "women",
    price: "649 kr",
    tags: ["women", "cut"],
    title: {
      no: "Dameklipp med vask",
      en: "Women's cut with wash",
      ar: "قصة نسائية مع غسل",
      es: "Corte de mujer con lavado",
    },
    description: {
      no: "Stuss av lengder (2–5 cm). Hårvask inkludert.",
      en: "Trim of lengths (2–5 cm). Hair wash included.",
      ar: "تقليم الأطوال (2-5 سم). غسل الشعر مشمول.",
      es: "Recorte de largos (2–5 cm). Lavado incluido.",
    },
  },
  {
    categoryId: "women",
    price: "689 kr",
    tags: ["women", "cut"],
    title: {
      no: "Dameklipp kort hår",
      en: "Women's cut – short hair",
      ar: "قصة نسائية للشعر القصير",
      es: "Corte de mujer – pelo corto",
    },
    description: {
      no: "Klipp og styling inkl. vask og føning.",
      en: "Cut and styling incl. wash and blow-dry.",
      ar: "قص وتصفيف يشمل الغسل والتجفيف.",
      es: "Corte y peinado con lavado y secado.",
    },
  },
  {
    categoryId: "women",
    price: "889 kr",
    tags: ["women", "cut"],
    title: {
      no: "Dameklipp langt hår",
      en: "Women's cut – long hair",
      ar: "قصة نسائية للشعر الطويل",
      es: "Corte de mujer – pelo largo",
    },
    description: {
      no: "Klipp og styling inkl. vask og føning.",
      en: "Cut and styling incl. wash and blow-dry.",
      ar: "قص وتصفيف يشمل الغسل والتجفيف.",
      es: "Corte y peinado con lavado y secado.",
    },
  },
  {
    categoryId: "women",
    price: "599 kr",
    tags: ["women", "cut"],
    title: {
      no: "Større forandring",
      en: "Major restyling",
      ar: "تغيير كبير",
      es: "Cambio de look",
    },
    description: {
      no: "For deg som ønsker en helt ny frisyre. Vask kan legges til for 200 kr.",
      en: "For a completely new hairstyle. Wash can be added for 200 kr.",
      ar: "لمن ترغب في تسريحة جديدة تماماً. يمكن إضافة الغسل مقابل 200 كرونة.",
      es: "Para un peinado completamente nuevo. Lavado se puede añadir por 200 kr.",
    },
  },
  {
    categoryId: "women",
    price: "399 kr",
    tags: ["women", "children", "cut"],
    title: {
      no: "Barneklipp jente",
      en: "Girl's haircut",
      ar: "قصة شعر للبنات",
      es: "Corte de niña",
    },
    description: {
      no: "Klipp av langt hår fra 6 år.",
      en: "Long hair cut from age 6.",
      ar: "قص شعر طويل من سن 6 سنوات.",
      es: "Corte de pelo largo desde 6 años.",
    },
  },

  // — Colour & cut —
  {
    categoryId: "colour-cut",
    price: "fra 1 489 kr",
    tags: ["women", "colour", "cut"],
    title: {
      no: "Farge og klipp",
      en: "Colour & cut",
      ar: "صبغة وقص",
      es: "Color y corte",
    },
    description: {
      no: "Farge og klipp, pris avhenger av hårlengde. Vask og føning inkludert.",
      en: "Colour and cut, price depends on hair length. Wash and blow-dry included.",
      ar: "صبغة وقص، السعر يعتمد على طول الشعر. الغسل والتجفيف مشمولان.",
      es: "Color y corte, precio según largo del cabello. Lavado y secado incluidos.",
    },
  },
  {
    categoryId: "colour-cut",
    price: "1 289 kr",
    tags: ["women", "colour", "cut"],
    title: {
      no: "Farge ettervekst og klipp",
      en: "Root colour & cut",
      ar: "صبغة الجذور وقص",
      es: "Color de raíz y corte",
    },
    description: {
      no: "Farging av ettervekst (maks 3 cm) og klipp. Gjelder ikke bleking. Vask og føning inkludert.",
      en: "Root colour (max 3 cm) and cut. Not for bleaching treatments. Wash and blow-dry included.",
      ar: "صبغة الجذور (حتى 3 سم) وقص. لا تشمل التبييض. الغسل والتجفيف مشمولان.",
      es: "Color de raíz (máx. 3 cm) y corte. No incluye decoloración. Lavado y secado incluidos.",
    },
  },
  {
    categoryId: "colour-cut",
    price: "889 kr",
    tags: ["women", "colour"],
    title: {
      no: "Farge ettervekst",
      en: "Root colour",
      ar: "صبغة الجذور",
      es: "Color de raíz",
    },
    description: {
      no: "Farging av ettervekst (maks 3 cm). Gjelder ikke bleking. Vask og føning inkludert.",
      en: "Root colour (max 3 cm). Not for bleaching treatments. Wash and blow-dry included.",
      ar: "صبغة الجذور (حتى 3 سم). لا تشمل التبييض. الغسل والتجفيف مشمولان.",
      es: "Color de raíz (máx. 3 cm). No incluye decoloración. Lavado y secado incluidos.",
    },
  },
  {
    categoryId: "colour-cut",
    price: "fra 1 289 kr",
    tags: ["women", "colour"],
    title: {
      no: "Helfarging",
      en: "Full colour",
      ar: "صبغة كاملة",
      es: "Color completo",
    },
    description: {
      no: "Fargebehandling, pris avhenger av hårlengde. Vask og føning inkludert.",
      en: "Full colour treatment, price depends on hair length. Wash and blow-dry included.",
      ar: "علاج صبغة كامل، السعر يعتمد على طول الشعر. الغسل والتجفيف مشمولان.",
      es: "Tratamiento de color completo, precio según largo del cabello. Lavado y secado incluidos.",
    },
  },

  // — Highlights & balayage —
  {
    categoryId: "highlights-balayage",
    price: "1 790 kr",
    tags: ["women", "highlights", "balayage"],
    title: {
      no: "Striper eller balayage (halvt hode)",
      en: "Highlights or balayage (half head)",
      ar: "خصلات أو بالياج (نصف الرأس)",
      es: "Mechas o balayage (media cabeza)",
    },
    description: {
      no: "Med folie inkl. toner (minicolour).",
      en: "With foils incl. toner (minicolour).",
      ar: "بالفويل مع تونر (ميني كولور).",
      es: "Con papel de aluminio incl. tóner (minicolour).",
    },
  },
  {
    categoryId: "highlights-balayage",
    price: "2 390 kr",
    tags: ["women", "highlights", "balayage"],
    title: {
      no: "Striper eller balayage (fullt hode)",
      en: "Highlights or balayage (full head)",
      ar: "خصلات أو بالياج (كامل الرأس)",
      es: "Mechas o balayage (cabeza completa)",
    },
    description: {
      no: "Med folie inkl. toner (minicolour).",
      en: "With foils incl. toner (minicolour).",
      ar: "بالفويل مع تونر (ميني كولور).",
      es: "Con papel de aluminio incl. tóner (minicolour).",
    },
  },
  {
    categoryId: "highlights-balayage",
    price: "3 199 kr",
    tags: ["women", "highlights", "balayage"],
    title: {
      no: "Striper eller balayage (langt hår, fullt hode)",
      en: "Highlights or balayage (long hair, full head)",
      ar: "خصلات أو بالياج (شعر طويل، كامل الرأس)",
      es: "Mechas o balayage (pelo largo, cabeza completa)",
    },
    description: {
      no: "Med folie inkl. toner (minicolour).",
      en: "With foils incl. toner (minicolour).",
      ar: "بالفويل مع تونر (ميني كولور).",
      es: "Con papel de aluminio incl. tóner (minicolour).",
    },
  },
  {
    categoryId: "highlights-balayage",
    price: "fra 1 690 kr",
    tags: ["women", "highlights"],
    title: {
      no: "Striper ettervekst",
      en: "Root highlights",
      ar: "خصلات الجذور",
      es: "Mechas de raíz",
    },
    description: {
      no: "Ettervekst striper med folie. Minicolour og glossing ikke inkludert.",
      en: "Root highlights with foils. Minicolour and glossing not included.",
      ar: "خصلات الجذور بالفويل. الميني كولور والتلميع غير مشمولين.",
      es: "Mechas de raíz con papel de aluminio. Minicolour y gloss no incluidos.",
    },
  },
  {
    categoryId: "highlights-balayage",
    price: "fra 899 kr",
    tags: ["women", "colour"],
    title: {
      no: "Minicolour / Toner",
      en: "Minicolour / Toner",
      ar: "ميني كولور / تونر",
      es: "Minicolour / Tóner",
    },
    description: {
      no: "Oppfriskning av hårfarge, pris avhenger av hårlengde. Vask og føning inkludert.",
      en: "Colour refresh, price depends on hair length. Wash and blow-dry included.",
      ar: "تجديد لون الشعر، السعر يعتمد على طول الشعر. الغسل والتجفيف مشمولان.",
      es: "Refresco de color, precio según largo del cabello. Lavado y secado incluidos.",
    },
  },

  // — Keratin / protein treatments —
  {
    categoryId: "treatment",
    price: "fra 1 500 kr",
    tags: ["women", "men", "keratin"],
    title: {
      no: "Keratin-behandling",
      en: "Keratin treatment",
      ar: "علاج الكيراتين",
      es: "Tratamiento de keratina",
    },
    description: {
      no: "Glatting og gjenoppbygging av hårstrukturen. Reduserer krøll og gir et glattere, friskere resultat. Pris avhenger av hårlengde.",
      en: "Smoothing and rebuilding of hair structure. Reduces frizz and gives a smoother, healthier result. Price depends on hair length.",
      ar: "تنعيم وإعادة بناء بنية الشعر. يقلل التجعد ويعطي نتيجة أكثر نعومة وصحة. السعر يعتمد على طول الشعر.",
      es: "Alisado y reconstrucción de la estructura capilar. Reduce el encrespamiento. Precio según largo del cabello.",
    },
  },
  {
    categoryId: "treatment",
    price: "fra 800 kr",
    tags: ["women", "men", "keratin"],
    title: {
      no: "Proteinbehandling",
      en: "Protein treatment",
      ar: "علاج البروتين",
      es: "Tratamiento de proteínas",
    },
    description: {
      no: "Styrker og reparerer skadet hår innenfra. Ideell etter farging eller bleking. Pris avhenger av hårlengde.",
      en: "Strengthens and repairs damaged hair from within. Ideal after colouring or bleaching. Price depends on hair length.",
      ar: "يقوّي ويصلح الشعر التالف من الداخل. مثالي بعد الصباغة أو التبييض. السعر يعتمد على طول الشعر.",
      es: "Fortalece y repara el cabello dañado desde dentro. Ideal después de coloración o decoloración. Precio según largo.",
    },
  },
];

// Helper to get localized services
export function getServices(lang: Lang): Service[] {
  return SERVICE_ENTRIES.map((entry) => ({
    category: CATEGORY_LABELS[lang][entry.categoryId],
    title: entry.title[lang],
    description: entry.description[lang],
    price: entry.price,
    tags: entry.tags,
  }));
}
