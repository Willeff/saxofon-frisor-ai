import { Lang } from "./translations";
import { getServices } from "../data/services";

export type Message = {
  role: "assistant" | "user";
  content: string;
};

/* ─── helpers ─── */

function listServices(lang: Lang, tagFilter: (tags: string[]) => boolean, max = 10): string {
  const all = getServices(lang);
  const matches = all.filter((s) => tagFilter(s.tags));
  if (matches.length === 0) return "";
  return matches
    .slice(0, max)
    .map((s) => `• ${s.title} – ${s.price}`)
    .join("\n");
}

/* ─── response builders ─── */

type ResponseEntry = {
  keys: string;
  build: (lang: Lang) => string;
};

const ENTRIES: Record<Lang, ResponseEntry[]> = {
  /* ═══════════ NORSK ═══════════ */
  no: [
    {
      keys: "åpning,åpent,åpnings,tid,klokkeslett,stengt,søndag,lørdag",
      build: () =>
        "Vi holder åpent mandag–lørdag kl. 10–18. Søndag er vi stengt.\n\nDu kan bestille time direkte på nettsiden, eller ring oss på 455 55 898.",
    },
    {
      keys: "balayage,striper,forskjell,highlights,lysning",
      build: (lang) => {
        const list = listServices(lang, (t) => t.includes("highlights") || t.includes("balayage"));
        return `Ja, vi tilbyr både balayage og striper!\n\nBalayage gir en myk, solkysst effekt som vokser naturlig ut – perfekt om du ønsker lite vedlikehold. Striper gir en jevnere lyshet med tydeligere kontrast.\n\nHer er tjenestene vi tilbyr innenfor striper og balayage:\n${list}\n\nØnsker du et naturlig resultat, eller noe lysere og tydeligere?`;
      },
    },
    {
      keys: "menn,herre,mann,gutt,herreklipp,skjegg,fade,skin",
      build: (lang) => {
        const list = listServices(lang, (t) => t.includes("men") && !t.includes("children"));
        return `Ja, vi har et bredt utvalg for menn!\n\nHer er våre herretjenester:\n${list}\n\nHva slags klipp er du ute etter?`;
      },
    },
    {
      keys: "dameklipp,dame,kvinne,kvinner,jente",
      build: (lang) => {
        const list = listServices(lang, (t) => t.includes("women") && t.includes("cut") && !t.includes("children") && !t.includes("colour") && !t.includes("highlights"));
        return `Her er våre dameklipp-tjenester:\n${list}\n\nTrenger du bare et klipp, eller vurderer du farge eller behandling i tillegg?`;
      },
    },
    {
      keys: "velge,usikker,hjelp,vet ikke,anbefal,råd,hvilken,hvordan vet",
      build: () =>
        "Det hjelper å vite litt om hva du er ute etter. Her er noen spørsmål som kan gjøre det enklere:\n\n• Ønsker du bare klipp, eller vurderer du farge/behandling?\n• Foretrekker du noe lettstelt, eller er du klar for litt vedlikehold?\n• Har du noen utfordringer med håret (tørt, tynt, skadet)?\n\nFortell meg litt om hva du tenker, så hjelper jeg deg videre.",
    },
    {
      keys: "tynt,fint hår,lite hår,volum,tynnere,tynner",
      build: (lang) => {
        const keratin = getServices(lang).find((s) => s.title === "Keratin- og proteinbehandling kort hår");
        const keratinInfo = keratin ? `\n\nVi tilbyr også ${keratin.title} (fra ${keratin.price}) som styrker hårstrukturen innenfra.` : "";
        return `For tynt eller fint hår anbefaler vi et klipp med lag og bevegelse – det gir illusjon av fylde uten å tynge håret. Lette stylingprodukter som volumspray eller mousse hjelper også mye.${keratinInfo}\n\nEr håret ditt naturlig fint, eller har det blitt tynnere over tid?`;
      },
    },
    {
      keys: "adresse,oslo,beliggenhet,kart,veibeskrivelse,ligger,hvor ligger,hvor er dere,hvor finner",
      build: () =>
        "Vi ligger i Fredensborgveien 22 i Oslo sentrum, rett ved Bislett. Lett tilgjengelig med trikk, buss og t-bane.\n\nRing oss på 455 55 898 eller send e-post til saxofon@hotmail.no.",
    },
    {
      keys: "vedlikehold,lettstelt,enkel,lite stell,lav,grodd,vokse ut",
      build: (lang) => {
        const balayageService = getServices(lang).find((s) => s.title === "Striper eller balayage – halvt hode");
        const balayagePrice = balayageService ? ` (fra ${balayageService.price})` : "";
        return `Balayage${balayagePrice} er det beste valget for lite vedlikehold – fargen vokser naturlig ut uten synlig rotlinje, og du trenger sjeldnere oppfriskning.\n\nEt godt klipp med riktig form gjør også mye – da trenger du minimalt med styling i hverdagen.\n\nØnsker du noe med farge, eller er du mest ute etter et lettstelt klipp?`;
      },
    },
    {
      keys: "pris,koster,kr,kroner,billig,dyr,hva koster",
      build: (lang) => {
        const services = getServices(lang);
        const menCut = services.find((s) => s.title === "Klassisk herreklipp");
        const damestuss = services.find((s) => s.title === "Damestuss");
        const colour = services.find((s) => s.title === "Farge ettervekst");
        const balayage = services.find((s) => s.title === "Striper eller balayage – halvt hode");
        const keratin = services.find((s) => s.title === "Keratin- og proteinbehandling kort hår");

        return `Her er et utvalg av prisene våre:\n\n• Klassisk herreklipp – ${menCut?.price ?? "399 kr"}\n• Damestuss – ${damestuss?.price ?? "499 kr"}\n• Farge ettervekst – ${colour?.price ?? "889 kr"}\n• Striper / balayage (halvt hode) – ${balayage?.price ?? "1889 kr"}\n• Keratin- og proteinbehandling (kort hår) – ${keratin?.price ?? "2499 kr"}\n\nEndelig pris avhenger av hårlengde og behandling. Hvilken type behandling er du interessert i?`;
      },
    },
    {
      keys: "skadet,ødelagt,tørt,slitt,etter farge,reparere,friskere,friskt,etter bleking,bleket",
      build: (lang) => {
        const list = listServices(lang, (t) => t.includes("keratin"));
        return `For skadet eller slitt hår har vi to behandlinger som gjør stor forskjell:\n\n${list}\n\nProteinbehandling bygger opp hårstrukturen innenfra og er spesielt bra etter farging eller bleking. Keratin-behandling gir i tillegg en glattende effekt og reduserer krøll.\n\nMellom salonbesøk anbefaler vi sulfatfri sjampo og en fuktighetgivende hårmaske.\n\nEr håret ditt skadet av bleking, eller er det generelt tørt og slitt?`;
      },
    },
    {
      keys: "keratin,protein,glatt,glatting,krøll,frizz",
      build: (lang) => {
        const list = listServices(lang, (t) => t.includes("keratin"));
        return `Vi tilbyr to typer behandlinger i denne kategorien:\n\n${list}\n\nKeratin-behandling gir glattere, mer håndterbart hår og reduserer krøll og frizz. Proteinbehandling styrker og reparerer hårstrukturen – spesielt anbefalt hvis håret er skadet etter farging eller bleking.\n\nEr målet ditt å reparere håret, eller ønsker du først og fremst et glattere resultat?`;
      },
    },
    {
      keys: "farge,farging,ettervekst,rot,røtter,hårfarge,ombre",
      build: (lang) => {
        const list = listServices(lang, (t) => t.includes("colour"));
        return `Vi har flere fargetjenester:\n\n${list}\n\nVær oppmerksom på at bleking prises separat fra vanlig farging.\n\nTrenger du bare oppfriskning av røttene, eller vurderer du helfarging?`;
      },
    },
    {
      keys: "barn,barneflipp,barneklipp,unge,kid,sønn,datter",
      build: (lang) => {
        const list = listServices(lang, (t) => t.includes("children"));
        return `Ja, vi klipper barn fra 6 år!\n\n${list}\n\nVi sørger for en trygg og hyggelig opplevelse. Vil du bestille time for gutt eller jente?`;
      },
    },
    {
      keys: "bestill,bestille,time,booking,ledig,kalender,book",
      build: () =>
        "Du kan bestille time direkte på bestill.timma.no/saxofon – velg behandling og finn en ledig tid som passer.\n\nDu kan også ringe oss på 455 55 898.\n\nVet du hvilken behandling du vil bestille?",
    },
  ],

  /* ═══════════ ENGLISH ═══════════ */
  en: [
    {
      keys: "open,hours,opening,time,schedule,closed,sunday",
      build: () =>
        "We're open Monday–Saturday 10:00–18:00. Closed on Sundays.\n\nYou can book directly on our website or call us on +47 455 55 898.",
    },
    {
      keys: "balayage,highlights,difference,streaks",
      build: (lang) => {
        const list = listServices(lang, (t) => t.includes("highlights") || t.includes("balayage"));
        return `Yes, we offer both balayage and highlights!\n\nBalayage gives a soft, sun-kissed effect that grows out naturally – great for low maintenance. Highlights give a more even brightness with defined contrast.\n\nHere are our highlight & balayage services:\n${list}\n\nAre you looking for a natural result, or something brighter and more defined?`;
      },
    },
    {
      keys: "men,male,guy,gentleman,beard,fade,skin",
      build: (lang) => {
        const list = listServices(lang, (t) => t.includes("men") && !t.includes("children"));
        return `Yes, we have a wide range for men!\n\nHere are our men's services:\n${list}\n\nWhat kind of cut are you looking for?`;
      },
    },
    {
      keys: "women,woman,ladies,lady,girl",
      build: (lang) => {
        const list = listServices(lang, (t) => t.includes("women") && t.includes("cut") && !t.includes("children") && !t.includes("colour") && !t.includes("highlights"));
        return `Here are our women's cut services:\n${list}\n\nDo you just need a cut, or are you considering colour or a treatment as well?`;
      },
    },
    {
      keys: "thin,fine hair,little hair,volume,thinner",
      build: (lang) => {
        const keratin = getServices(lang).find((s) => s.title === "Keratin- og proteinbehandling kort hår");
        const keratinInfo = keratin ? `\n\nWe also offer ${keratin.title} (from ${keratin.price}) which strengthens the hair from within.` : "";
        return `For thin or fine hair, we recommend a layered cut that adds movement and the illusion of volume. Lightweight products like volumising spray or mousse also help a lot.${keratinInfo}\n\nIs your hair naturally fine, or has it become thinner over time?`;
      },
    },
    {
      keys: "where,address,location,find,directions",
      build: () =>
        "We're at Fredensborgveien 22 in central Oslo, near Bislett. Easy to reach by tram, bus and metro.\n\nCall us on +47 455 55 898 or email saxofon@hotmail.no.",
    },
    {
      keys: "maintenance,low-maintenance,easy,simple,grow out",
      build: (lang) => {
        const b = getServices(lang).find((s) => s.title === "Striper eller balayage – halvt hode");
        const price = b ? ` (from ${b.price})` : "";
        return `Balayage${price} is the best choice for low maintenance – the colour grows out naturally without a visible root line, so you need fewer touch-ups.\n\nA well-shaped cut also goes a long way – you'll need minimal styling day to day.\n\nAre you looking for a colour option, or mainly a low-maintenance cut?`;
      },
    },
    {
      keys: "price,cost,nok,fee,how much,expensive",
      build: () =>
        "Here's a selection of our prices:\n\n• Classic men's cut – 399 kr\n• Damestuss (women's trim) – 499 kr\n• Root colour – 889 kr\n• Highlights / balayage (half head) – 1889 kr\n• Keratin & protein treatment (short hair) – 2499 kr\n\nFinal price depends on hair length and treatment. Which type of treatment are you interested in?",
    },
    {
      keys: "damaged,dry,brittle,bleach,repair,after colour,healthier,after bleach",
      build: (lang) => {
        const list = listServices(lang, (t) => t.includes("keratin"));
        return `For damaged or worn hair, we have two treatments that make a real difference:\n\n${list}\n\nProtein treatment rebuilds hair structure from within – especially good after colouring or bleaching. Keratin treatment also smooths and reduces frizz.\n\nBetween visits we recommend sulphate-free shampoo and a hydrating hair mask.\n\nIs your hair damaged from bleaching, or is it generally dry and worn?`;
      },
    },
    {
      keys: "keratin,protein,smooth,frizz,curly",
      build: (lang) => {
        const list = listServices(lang, (t) => t.includes("keratin"));
        return `We offer two types of treatment in this category:\n\n${list}\n\nKeratin treatment smooths hair and reduces frizz. Protein treatment strengthens and repairs – especially recommended after colouring or bleaching.\n\nIs your goal to repair the hair, or mainly to get a smoother result?`;
      },
    },
    {
      keys: "colour,color,root,roots,dye",
      build: (lang) => {
        const list = listServices(lang, (t) => t.includes("colour"));
        return `We offer a range of colour services:\n\n${list}\n\nNote that bleaching is priced separately from regular colour.\n\nDo you just need a root touch-up, or are you considering a full colour?`;
      },
    },
    {
      keys: "child,children,kid,boy,girl,son,daughter",
      build: (lang) => {
        const list = listServices(lang, (t) => t.includes("children"));
        return `Yes, we cut children's hair from age 6!\n\n${list}\n\nWe make sure it's a safe and comfortable experience. Would you like to book for a boy or girl?`;
      },
    },
    {
      keys: "book,appointment,available,calendar",
      build: () =>
        "You can book directly at bestill.timma.no/saxofon – choose a treatment and find available times.\n\nYou can also call us on +47 455 55 898.\n\nDo you know which treatment you'd like to book?",
    },
    {
      keys: "choose,unsure,help,don't know,recommend,advice,which",
      build: () =>
        "It helps to know a bit about what you're after. Here are some questions to make it easier:\n\n• Do you just want a cut, or are you considering colour/treatment?\n• Do you prefer something low-maintenance?\n• Do you have any hair challenges (dry, thin, damaged)?\n\nTell me a bit about what you're thinking and I'll help you narrow it down.",
    },
  ],

  /* ═══════════ ARABIC ═══════════ */
  ar: [
    {
      keys: "فتح,ساعات,وقت,جدول,مواعيد,مغلق",
      build: () =>
        "نحن مفتوحون من الاثنين إلى السبت من 10:00 إلى 18:00. مغلقون أيام الأحد.\n\nيمكنك الحجز عبر الموقع أو الاتصال على 455 55 898.",
    },
    {
      keys: "بالياج,خصلات,فرق,balayage",
      build: (lang) => {
        const list = listServices(lang, (t) => t.includes("highlights") || t.includes("balayage"));
        return `نعم، نقدم البالياج والخصلات!\n\nالبالياج يعطي تأثيراً طبيعياً ناعماً ينمو بشكل جميل. الخصلات تعطي إضاءة أكثر تحديداً.\n\nخدماتنا في هذا المجال:\n${list}\n\nهل تفضلين نتيجة طبيعية أم شيء أكثر وضوحاً؟`;
      },
    },
    {
      keys: "رجال,رجل,لحية,فيد",
      build: (lang) => {
        const list = listServices(lang, (t) => t.includes("men") && !t.includes("children"));
        return `نعم، لدينا مجموعة واسعة للرجال!\n\nخدماتنا للرجال:\n${list}\n\nما نوع القصة التي تبحث عنها؟`;
      },
    },
    {
      keys: "نساء,نسائ,سيدات",
      build: (lang) => {
        const list = listServices(lang, (t) => t.includes("women") && t.includes("cut") && !t.includes("children") && !t.includes("colour") && !t.includes("highlights"));
        return `قصاتنا النسائية:\n${list}\n\nهل تحتاجين قصة فقط، أم تفكرين في صبغة أو علاج أيضاً؟`;
      },
    },
    {
      keys: "رفيع,خفيف,شعر رفيع,حجم",
      build: () =>
        "للشعر الرفيع نوصي بقصة طبقية تعطي حركة ووهم الكثافة. منتجات التصفيف الخفيفة مثل بخاخ الحجم تساعد كثيراً.\n\nكما نقدم علاج البروتين (من 800 كرونة) الذي يقوي بنية الشعر.\n\nهل شعرك رفيع طبيعياً، أم أصبح أرفع مع الوقت؟",
    },
    {
      keys: "أين,عنوان,موقع,اتجاهات",
      build: () =>
        "نحن في Fredensborgveien 22 في وسط أوسلو، بالقرب من Bislett. سهل الوصول بالمواصلات العامة.\n\nاتصل على 455 55 898 أو راسلنا على saxofon@hotmail.no.",
    },
    {
      keys: "سعر,تكلفة,كرون,رسوم,كم",
      build: () =>
        "مجموعة من أسعارنا:\n\n• قصة رجالية كلاسيكية – 399 كرونة\n• قصة نسائية (دامستوس) – 499 كرونة\n• صبغة الجذور – 889 كرونة\n• خصلات / بالياج (نصف الرأس) – 1889 كرونة\n• علاج الكيراتين والبروتين (شعر قصير) – 2499 كرونة\n\nالسعر النهائي يعتمد على طول الشعر. ما العلاج الذي يهمك؟",
    },
    {
      keys: "تالف,جاف,هش,تبييض,إصلاح,بعد الصبغة,علاج",
      build: (lang) => {
        const list = listServices(lang, (t) => t.includes("keratin"));
        return `للشعر التالف لدينا علاجان فعّالان:\n\n${list}\n\nعلاج البروتين يعيد بناء بنية الشعر – ممتاز بعد الصبغة أو التبييض. الكيراتين ينعم الشعر ويقلل التجعد.\n\nهل شعرك متضرر من التبييض، أم أنه جاف بشكل عام؟`;
      },
    },
    {
      keys: "كيراتين,بروتين,تنعيم,تجعد",
      build: (lang) => {
        const list = listServices(lang, (t) => t.includes("keratin"));
        return `نقدم نوعين من العلاج:\n\n${list}\n\nالكيراتين ينعم الشعر ويقلل التجعد. البروتين يقوي ويصلح الشعر التالف.\n\nهل هدفك إصلاح الشعر أم الحصول على نتيجة أكثر نعومة؟`;
      },
    },
    {
      keys: "صبغة,لون,جذور",
      build: (lang) => {
        const list = listServices(lang, (t) => t.includes("colour"));
        return `خدمات الصبغة لدينا:\n\n${list}\n\nملاحظة: التبييض يسعّر بشكل منفصل.\n\nهل تحتاجين تجديد الجذور فقط، أم صبغة كاملة؟`;
      },
    },
    {
      keys: "أطفال,طفل,ولد,بنت",
      build: (lang) => {
        const list = listServices(lang, (t) => t.includes("children"));
        return `نعم، نقص شعر الأطفال من سن 6 سنوات!\n\n${list}\n\nنحرص على أن تكون التجربة مريحة وآمنة. هل تريد الحجز لولد أم بنت؟`;
      },
    },
    {
      keys: "حجز,موعد,متاح",
      build: () =>
        "يمكنك الحجز مباشرة على bestill.timma.no/saxofon.\n\nأو اتصل على 455 55 898.\n\nهل تعرف أي علاج تريد حجزه؟",
    },
    {
      keys: "صيانة,سهل,بسيط,عناية",
      build: () =>
        "البالياج (من 1889 كرونة) هو الخيار الأفضل للعناية القليلة – ينمو بشكل طبيعي دون خط جذر واضح.\n\nقصة جيدة الشكل أيضاً تقلل الحاجة للتصفيف اليومي.\n\nهل تبحثين عن خيار لون أم قصة سهلة العناية؟",
    },
  ],

  /* ═══════════ ESPAÑOL ═══════════ */
  es: [
    {
      keys: "horario,abierto,hora,apertura,cierre,cerrado,domingo",
      build: () =>
        "Abrimos de lunes a sábado de 10:00 a 18:00. Cerrados los domingos.\n\nPuedes reservar en nuestra web o llamarnos al +47 455 55 898.",
    },
    {
      keys: "balayage,mechas,diferencia,highlights",
      build: (lang) => {
        const list = listServices(lang, (t) => t.includes("highlights") || t.includes("balayage"));
        return `¡Sí, ofrecemos tanto balayage como mechas!\n\nEl balayage da un efecto natural y suave que crece sin marcas – perfecto para poco mantenimiento. Las mechas dan un brillo más uniforme y definido.\n\nNuestros servicios de mechas y balayage:\n${list}\n\n¿Buscas un resultado natural o algo más luminoso y definido?`;
      },
    },
    {
      keys: "hombre,hombres,caballero,barba,degradado",
      build: (lang) => {
        const list = listServices(lang, (t) => t.includes("men") && !t.includes("children"));
        return `¡Sí, tenemos una amplia gama para hombres!\n\nNuestros servicios para caballero:\n${list}\n\n¿Qué tipo de corte buscas?`;
      },
    },
    {
      keys: "mujer,mujeres,señora,chica",
      build: (lang) => {
        const list = listServices(lang, (t) => t.includes("women") && t.includes("cut") && !t.includes("children") && !t.includes("colour") && !t.includes("highlights"));
        return `Nuestros cortes de mujer:\n${list}\n\n¿Solo necesitas un corte, o estás considerando también color o tratamiento?`;
      },
    },
    {
      keys: "fino,delgado,poco pelo,volumen",
      build: () =>
        "Para el cabello fino recomendamos un corte en capas que añade movimiento e ilusión de volumen. Productos ligeros como spray voluminizador ayudan mucho.\n\nTambién ofrecemos tratamiento de proteínas (desde 800 kr) que fortalece la estructura capilar.\n\n¿Tu cabello es naturalmente fino, o se ha vuelto más delgado con el tiempo?",
    },
    {
      keys: "dónde,dirección,ubicación,cómo llegar,donde",
      build: () =>
        "Estamos en Fredensborgveien 22, en el centro de Oslo, cerca de Bislett. Fácil acceso en transporte público.\n\nLlámanos al +47 455 55 898 o escríbenos a saxofon@hotmail.no.",
    },
    {
      keys: "precio,coste,corona,cuánto,cuanto,caro",
      build: () =>
        "Algunos de nuestros precios:\n\n• Corte clásico de caballero – 399 kr\n• Damestuss (recorte de mujer) – 499 kr\n• Color de raíz – 889 kr\n• Mechas / balayage (media cabeza) – 1.889 kr\n• Tratamiento de keratina y proteína (pelo corto) – 2.499 kr\n\nEl precio final depende del largo del cabello. ¿Qué tratamiento te interesa?",
    },
    {
      keys: "dañado,seco,frágil,decoloración,reparar,después del tinte,tratamiento",
      build: (lang) => {
        const list = listServices(lang, (t) => t.includes("keratin"));
        return `Para cabello dañado tenemos dos tratamientos muy efectivos:\n\n${list}\n\nLas proteínas reconstruyen la estructura capilar – ideal después de tintes o decoloración. La keratina también alisa y reduce el encrespamiento.\n\nEntre visitas recomendamos champú sin sulfatos y mascarillas hidratantes.\n\n¿Tu cabello está dañado por decoloración, o es sequedad general?`;
      },
    },
    {
      keys: "keratina,proteína,alisar,encrespamiento,rizado",
      build: (lang) => {
        const list = listServices(lang, (t) => t.includes("keratin"));
        return `Ofrecemos dos tipos de tratamiento:\n\n${list}\n\nLa keratina alisa y reduce el encrespamiento. Las proteínas fortalecen y reparan el cabello dañado.\n\n¿Tu objetivo es reparar el cabello o conseguir un resultado más liso?`;
      },
    },
    {
      keys: "color,tinte,raíz,raíces",
      build: (lang) => {
        const list = listServices(lang, (t) => t.includes("colour"));
        return `Nuestros servicios de color:\n\n${list}\n\nNota: la decoloración se cobra aparte.\n\n¿Necesitas solo retocar las raíces, o estás pensando en un color completo?`;
      },
    },
    {
      keys: "niño,niña,infantil,hijo,hija",
      build: (lang) => {
        const list = listServices(lang, (t) => t.includes("children"));
        return `¡Sí, cortamos el pelo a niños desde 6 años!\n\n${list}\n\nNos aseguramos de que sea una experiencia cómoda y segura. ¿Quieres reservar para niño o niña?`;
      },
    },
    {
      keys: "reservar,cita,disponible,calendario",
      build: () =>
        "Puedes reservar directamente en bestill.timma.no/saxofon – elige tu tratamiento y encuentra un horario disponible.\n\nTambién puedes llamarnos al +47 455 55 898.\n\n¿Sabes qué tratamiento quieres reservar?",
    },
    {
      keys: "mantenimiento,fácil,sencillo,poco mantenimiento",
      build: () =>
        "El balayage (desde 1.889 kr) es la mejor opción para poco mantenimiento – crece naturalmente sin línea de raíz visible.\n\nUn buen corte con la forma adecuada también reduce la necesidad de peinado diario.\n\n¿Buscas una opción con color o principalmente un corte fácil de mantener?",
    },
  ],
};

/* ─── fallbacks (no "gratis konsultasjon") ─── */

const fallbacks: Record<Lang, string> = {
  no: "Hmm, det har jeg ikke et ferdig svar på akkurat nå. Men du kan sjekke tjenestene våre lenger opp på siden, eller ring oss på 455 55 898 – vi svarer gjerne direkte.\n\nEr det noe annet jeg kan hjelpe med?",
  en: "Hmm, I don't have a ready answer for that right now. But you can check our services further up on the page, or call us on +47 455 55 898 – we're happy to help.\n\nIs there anything else I can help with?",
  ar: "لا أملك إجابة جاهزة لهذا حالياً. يمكنك الاطلاع على خدماتنا في الأعلى، أو الاتصال على 455 55 898.\n\nهل هناك شيء آخر يمكنني مساعدتك به؟",
  es: "No tengo una respuesta preparada para eso ahora mismo. Pero puedes ver nuestros servicios más arriba en la página, o llamarnos al +47 455 55 898.\n\n¿Hay algo más en lo que pueda ayudarte?",
};

/* ─── main response function ─── */

export function getResponse(query: string, lang: Lang = "no"): string {
  const q = query.toLowerCase();

  for (const entry of ENTRIES[lang]) {
    if (entry.keys.split(",").some((k) => q.includes(k.trim()))) {
      return entry.build(lang);
    }
  }

  return fallbacks[lang];
}
