import { Lang } from "./translations";

export type Message = {
  role: "assistant" | "user";
  content: string;
};

// Kept for legacy use — prefer translations.ts assistant.suggestions
export const SUGGESTIONS = [
  "Hva er åpningstidene?",
  "Tilbyr dere balayage?",
  "Har dere behandlinger for menn?",
  "Hva passer for tynt hår?",
  "Hvor ligger dere?",
  "Hva bør jeg velge hvis jeg vil ha lite vedlikehold?",
];

type ResponseMap = Record<string, string>;

const responses: Record<Lang, ResponseMap[]> = {
  no: [
    {
      keys: "åpning,åpent,åpnings,tid,klokkeslett",
      text: "Vi holder åpent mandag–lørdag 10:00–18:00. Søndag er vi stengt. Du kan bestille time direkte via nettstedet eller ringe oss.",
    },
    {
      keys: "balayage",
      text: "Absolutt – balayage er en av våre spesialiteter. Vi skaper naturlige, solkyssede resultater som vokser fint ut. Pris fra kr 1 800. Vi anbefaler en konsultasjon for å finne riktig tone.",
    },
    {
      keys: "menn,herre,mann,gutt",
      text: "Ja, vi jobber med både kvinner og menn. Vi tilbyr herreklipp, moderne styling og skjeggpleie. Mange av våre mannlige kunder er faste gjester – fra klassiske klipp til moderne frisyrer.",
    },
    {
      keys: "tynt,fint hår,lite hår",
      text: "For tynt hår anbefaler vi et klipp med lag som gir illusjon av volum, kombinert med lette stylingprodukter. En kur-behandling kan også styrke hårstrukturen over tid.",
    },
    {
      keys: "hvor,adresse,oslo,beliggenhet,finne",
      text: "Du finner oss i Fredensborgveien 22 i Oslo, lett tilgjengelig med kollektivtransport. Ring oss på +47 455 55 898 eller send e-post til saxofon@hotmail.no.",
    },
    {
      keys: "vedlikehold,lettstelt,enkel,lite stell",
      text: "Da anbefaler vi balayage eller en 'lived-in' farge – disse vokser naturlig ut uten synlig rot og krever sjeldnere besøk. Et klipp med riktig form krever også minimalt av styling i hverdagen.",
    },
    {
      keys: "pris,koster,kr,kroner",
      text: "Priser varierer etter tjeneste: dameklipp fra kr 650, herreklipp fra kr 450, farge fra kr 950 og balayage fra kr 1 800. Ta kontakt for et nøyaktig tilbud.",
    },
  ],
  en: [
    {
      keys: "open,hours,opening,time,schedule",
      text: "We're open Monday–Saturday 10:00–18:00. We're closed on Sundays. You can book an appointment online or call us.",
    },
    {
      keys: "balayage",
      text: "Absolutely – balayage is one of our specialties. We create natural, sun-kissed results that grow out beautifully. Starting from NOK 1,800. We recommend a consultation to find the right tone.",
    },
    {
      keys: "men,male,guy,gentleman",
      text: "Yes, we work with both women and men. We offer men's cuts, modern styling, and beard grooming. Many of our male clients are regulars – from classic cuts to modern styles.",
    },
    {
      keys: "thin,fine hair,little hair",
      text: "For thin hair we recommend a layered cut that creates the illusion of volume, combined with lightweight styling products. A treatment can also strengthen the hair structure over time.",
    },
    {
      keys: "where,address,location,find,directions",
      text: "You'll find us at Fredensborgveien 22 in Oslo, easily accessible by public transport. Call us on +47 455 55 898 or email saxofon@hotmail.no.",
    },
    {
      keys: "maintenance,low-maintenance,easy,simple",
      text: "We'd recommend balayage or a 'lived-in' colour – these grow out naturally without a visible root line and require fewer visits. A well-shaped cut also needs minimal daily styling.",
    },
    {
      keys: "price,cost,nok,fee",
      text: "Prices vary by service: women's cut from NOK 650, men's cut from NOK 450, colour from NOK 950, and balayage from NOK 1,800. Contact us for an exact quote.",
    },
  ],
  ar: [
    {
      keys: "فتح,ساعات,وقت,جدول,مواعيد",
      text: "نحن مفتوحون من الاثنين إلى السبت من 10:00 إلى 18:00. نحن مغلقون أيام الأحد. يمكنك حجز موعد عبر الإنترنت أو الاتصال بنا.",
    },
    {
      keys: "بالياج,balayage",
      text: "بالتأكيد – البالياج من تخصصاتنا. نحن نخلق نتائج طبيعية وجميلة تنمو بشكل رائع. السعر يبدأ من 1800 كرون. نوصي بالتشاور لإيجاد الدرجة المناسبة.",
    },
    {
      keys: "رجال,رجل,شعر الرجال",
      text: "نعم، نعمل مع كل من النساء والرجال. نقدم قصات للرجال وتصفيف عصري وعناية باللحية. كثير من عملائنا الذكور عملاء منتظمون.",
    },
    {
      keys: "رفيع,خفيف,شعر رفيع",
      text: "للشعر الرفيع نوصي بقصة طبقية تعطي وهم الحجم مع منتجات تصفيف خفيفة. يمكن أن تقوي العلاجات بنية الشعر بمرور الوقت أيضاً.",
    },
    {
      keys: "أين,عنوان,موقع,اتجاهات",
      text: "ستجدنا في Fredensborgveien 22 في أوسلو، يمكن الوصول إلينا بسهولة بوسائل النقل العام. اتصل بنا على +47 455 55 898 أو راسلنا على saxofon@hotmail.no.",
    },
    {
      keys: "صيانة,سهل,بسيط,عناية",
      text: "نوصي بالبالياج أو اللون 'المعاش فيه' – ينمو هذا بشكل طبيعي دون خط جذر مرئي ويتطلب زيارات أقل. القصة المشكّلة جيداً تحتاج أيضاً إلى حد أدنى من التصفيف اليومي.",
    },
    {
      keys: "سعر,تكلفة,كرون,رسوم",
      text: "تتفاوت الأسعار حسب الخدمة: قصة نساء من 650 كرون، قصة رجال من 450 كرون، لون من 950 كرون، وبالياج من 1800 كرون. تواصل معنا للحصول على عرض سعر دقيق.",
    },
  ],
  es: [
    {
      keys: "horario,abierto,hora,apertura,cierre",
      text: "Abrimos de lunes a sábado de 10:00 a 18:00. Los domingos permanecemos cerrados. Puedes reservar cita online o llamarnos.",
    },
    {
      keys: "balayage",
      text: "Por supuesto – el balayage es una de nuestras especialidades. Creamos resultados naturales, con efecto sol, que crecen de forma preciosa. Precio desde 1.800 NOK. Te recomendamos una consulta para encontrar el tono adecuado.",
    },
    {
      keys: "hombre,hombres,caballero,chico",
      text: "Sí, trabajamos tanto con mujeres como con hombres. Ofrecemos cortes masculinos, peinados modernos y cuidado de barba. Muchos de nuestros clientes masculinos son habituales – desde cortes clásicos a estilos actuales.",
    },
    {
      keys: "fino,delgado,poco pelo,cabello fino",
      text: "Para el cabello fino recomendamos un corte en capas que crea ilusión de volumen, combinado con productos de peinado ligeros. Un tratamiento también puede fortalecer la estructura del cabello con el tiempo.",
    },
    {
      keys: "dónde,dirección,ubicación,cómo llegar,donde",
      text: "Nos encontramos en Fredensborgveien 22, Oslo, fácilmente accesible en transporte público. Llámanos al +47 455 55 898 o escríbenos a saxofon@hotmail.no.",
    },
    {
      keys: "mantenimiento,fácil,sencillo,poco mantenimiento",
      text: "Recomendamos el balayage o un color 'lived-in' – crecen de forma natural sin una línea de raíz visible y requieren menos visitas. Un corte bien formado también necesita un mínimo de peinado diario.",
    },
    {
      keys: "precio,coste,corona,cuánto,cuanto",
      text: "Los precios varían según el servicio: corte de mujer desde 650 NOK, corte de hombre desde 450 NOK, color desde 950 NOK y balayage desde 1.800 NOK. Contáctanos para un presupuesto exacto.",
    },
  ],
};

const fallbacks: Record<Lang, string> = {
  no: "Godt spørsmål! For personlige råd tilpasset ditt hår anbefaler vi en gratis konsultasjon. Ta gjerne kontakt eller bestill time – vi hjelper deg gjerne.",
  en: "Great question! For personalised advice tailored to your hair we recommend a free consultation. Feel free to get in touch or book an appointment – we're happy to help.",
  ar: "سؤال رائع! للحصول على نصيحة شخصية مخصصة لشعرك نوصي باستشارة مجانية. لا تتردد في التواصل معنا أو حجز موعد – نحن سعداء بمساعدتك.",
  es: "¡Buena pregunta! Para un asesoramiento personalizado adaptado a tu cabello te recomendamos una consulta gratuita. No dudes en contactarnos o reservar una cita – estaremos encantados de ayudarte.",
};

export function getResponse(query: string, lang: Lang = "no"): string {
  const q = query.toLowerCase();
  for (const entry of responses[lang]) {
    if (entry.keys.split(",").some((k) => q.includes(k.trim()))) {
      return entry.text;
    }
  }
  // Fallback: try Norwegian keywords for non-Norwegian input as a catch-all
  return fallbacks[lang];
}
