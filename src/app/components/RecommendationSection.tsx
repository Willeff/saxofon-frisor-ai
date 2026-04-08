"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

type Treatment = { name: string; description: string };
type Goal = { id: string; label: string; emoji: string; treatments: Treatment[]; note: string };

const GOALS_NO: Goal[] = [
  {
    id: "low-maintenance", label: "Jeg vil ha mindre vedlikehold", emoji: "✦",
    note: "Disse behandlingene vokser vakkert ut og krever sjeldnere besøk.",
    treatments: [
      { name: "Balayage", description: "Naturlig, soltent farge uten synlig rot. Varer 4–6 måneder." },
      { name: "Lived-in farge", description: "Myke overganger som vokser ut pent. Minimalt vedlikehold." },
      { name: "Strukturert klipp", description: "Form som fungerer med og uten styling i hverdagen." },
    ],
  },
  {
    id: "volume", label: "Jeg vil ha mer volum", emoji: "◈",
    note: "Vi hjelper deg å få mer liv i håret – gjennom klipp, pleie og teknikk.",
    treatments: [
      { name: "Volumklipp", description: "Strategiske lag som løfter og gir bevegelse i tynt eller fint hår." },
      { name: "Kur-behandling", description: "Styrker hårstrukturen og gir mer kropp fra rot til tupp." },
      { name: "Blowout-styling", description: "Profesjonell tørking som maksimerer volum og glans." },
    ],
  },
  {
    id: "refresh-color", label: "Jeg vil friske opp fargen", emoji: "◇",
    note: "Frisk opp, forny eller forsterk – vi finner riktig løsning for deg.",
    treatments: [
      { name: "Gloss-behandling", description: "Intensiv glans og fargeforsterkning på 30 minutter." },
      { name: "Toning", description: "Justerer undertone og gir mer liv til eksisterende farge." },
      { name: "Heldekkende farge", description: "Full fornyelse med skreddersydd farge til din hudfarge." },
    ],
  },
  {
    id: "classic", label: "Jeg vil ha en klassisk herreklipp", emoji: "▲",
    note: "Presisjon og stil – fra tradisjonelt til moderne maskulint uttrykk.",
    treatments: [
      { name: "Herreklipp", description: "Tilpasset klipp med vask og finish. Klassisk eller moderne." },
      { name: "Skjeggstell", description: "Trimming og formgiving av skjegg for et helhetlig uttrykk." },
      { name: "Konturlinje", description: "Presis opprydding langs nakke og øre for et skarpt finish." },
    ],
  },
];

const GOALS_EN: Goal[] = [
  {
    id: "low-maintenance", label: "I want less maintenance", emoji: "✦",
    note: "These treatments grow out beautifully and require fewer visits.",
    treatments: [
      { name: "Balayage", description: "Natural, sun-kissed colour with no visible root. Lasts 4–6 months." },
      { name: "Lived-in colour", description: "Soft transitions that grow out gracefully. Minimal upkeep." },
      { name: "Structured cut", description: "A shape that works with or without styling every day." },
    ],
  },
  {
    id: "volume", label: "I want more volume", emoji: "◈",
    note: "We help bring your hair to life — through cut, care, and technique.",
    treatments: [
      { name: "Volume cut", description: "Strategic layers that lift and add movement to thin or fine hair." },
      { name: "Treatment", description: "Strengthens hair structure and adds body from root to tip." },
      { name: "Blowout styling", description: "Professional blow-dry that maximises volume and shine." },
    ],
  },
  {
    id: "refresh-color", label: "I want to refresh my colour", emoji: "◇",
    note: "Refresh, renew, or enhance — we'll find the right solution for you.",
    treatments: [
      { name: "Gloss treatment", description: "Intensive shine and colour boost in 30 minutes." },
      { name: "Toning", description: "Adjusts undertone and revives existing colour." },
      { name: "Full colour", description: "Complete renewal with a custom shade for your skin tone." },
    ],
  },
  {
    id: "classic", label: "I want a classic men's cut", emoji: "▲",
    note: "Precision and style — from traditional to modern masculine looks.",
    treatments: [
      { name: "Men's cut", description: "Tailored cut with wash and finish. Classic or modern." },
      { name: "Beard grooming", description: "Trimming and shaping for a polished overall look." },
      { name: "Contour line", description: "Clean-up along the neckline and ears for a sharp finish." },
    ],
  },
];

const GOALS_AR: Goal[] = [
  {
    id: "low-maintenance", label: "أريد صيانة أقل", emoji: "✦",
    note: "هذه العلاجات تنمو بشكل جميل وتتطلب زيارات أقل.",
    treatments: [
      { name: "بالياج", description: "لون طبيعي مشمس بدون جذر مرئي. يدوم 4–6 أشهر." },
      { name: "لون معاش فيه", description: "تدرجات ناعمة تنمو بأناقة. صيانة بسيطة جداً." },
      { name: "قصة منظمة", description: "شكل يناسبك مع أو بدون تصفيف يومي." },
    ],
  },
  {
    id: "volume", label: "أريد المزيد من الحجم", emoji: "◈",
    note: "نساعدك على إضفاء الحيوية على شعرك – من خلال القص والعناية والتقنية.",
    treatments: [
      { name: "قصة حجمية", description: "طبقات استراتيجية ترفع الشعر وتضيف حركة للشعر الرفيع." },
      { name: "علاج مكثف", description: "يقوي بنية الشعر ويضيف حجماً من الجذر إلى الأطراف." },
      { name: "تجفيف احترافي", description: "تجفيف احترافي يعظم الحجم والبريق." },
    ],
  },
  {
    id: "refresh-color", label: "أريد تجديد لون شعري", emoji: "◇",
    note: "جدد، انعش، أو عزز – سنجد الحل المناسب لك.",
    treatments: [
      { name: "علاج اللمعان", description: "لمعان مكثف وتعزيز للون في 30 دقيقة." },
      { name: "تونينج", description: "يضبط النبرة ويعيد الحياة إلى اللون الموجود." },
      { name: "لون كامل", description: "تجديد كامل بلون مخصص يناسب لون بشرتك." },
    ],
  },
  {
    id: "classic", label: "أريد قصة رجالية كلاسيكية", emoji: "▲",
    note: "دقة وأناقة – من التقليدي إلى المظهر الذكوري الحديث.",
    treatments: [
      { name: "قصة رجالية", description: "قصة مخصصة مع غسيل وتشطيب. كلاسيكية أو حديثة." },
      { name: "العناية باللحية", description: "تشذيب وتشكيل للحية لمظهر متكامل." },
      { name: "خط التحديد", description: "ترتيب دقيق على الرقبة والأذنين لنهاية حادة." },
    ],
  },
];

const GOALS_ES: Goal[] = [
  {
    id: "low-maintenance", label: "Quiero menos mantenimiento", emoji: "✦",
    note: "Estos tratamientos crecen de forma preciosa y requieren menos visitas.",
    treatments: [
      { name: "Balayage", description: "Color natural con efecto sol sin raíz visible. Dura 4–6 meses." },
      { name: "Color lived-in", description: "Transiciones suaves que crecen con elegancia. Mínimo mantenimiento." },
      { name: "Corte estructurado", description: "Una forma que funciona con o sin peinado diario." },
    ],
  },
  {
    id: "volume", label: "Quiero más volumen", emoji: "◈",
    note: "Te ayudamos a dar vida a tu cabello – con corte, cuidado y técnica.",
    treatments: [
      { name: "Corte con volumen", description: "Capas estratégicas que elevan y aportan movimiento al cabello fino." },
      { name: "Tratamiento capilar", description: "Fortalece la estructura del cabello y añade cuerpo de raíz a puntas." },
      { name: "Brushing profesional", description: "Secado profesional que maximiza el volumen y el brillo." },
    ],
  },
  {
    id: "refresh-color", label: "Quiero renovar mi color", emoji: "◇",
    note: "Refresca, renueva o potencia – encontraremos la solución adecuada para ti.",
    treatments: [
      { name: "Tratamiento gloss", description: "Brillo intensivo y potenciación del color en 30 minutos." },
      { name: "Toning", description: "Ajusta el subtono y revive el color existente." },
      { name: "Color completo", description: "Renovación total con un tono personalizado a tu tono de piel." },
    ],
  },
  {
    id: "classic", label: "Quiero un corte clásico de caballero", emoji: "▲",
    note: "Precisión y estilo – de lo tradicional al look masculino más moderno.",
    treatments: [
      { name: "Corte de caballero", description: "Corte personalizado con lavado y acabado. Clásico o moderno." },
      { name: "Arreglo de barba", description: "Recorte y perfilado para un aspecto impecable." },
      { name: "Línea de contorno", description: "Repaso preciso en nuca y orejas para un acabado definido." },
    ],
  },
];

const GOALS_MAP = { no: GOALS_NO, en: GOALS_EN, ar: GOALS_AR, es: GOALS_ES };

export default function RecommendationSection() {
  const { t, lang } = useLanguage();
  const [selected, setSelected] = useState<string | null>(null);

  const goals = GOALS_MAP[lang];
  const activeGoal = goals.find((g) => g.id === selected);

  return (
    <section className="bg-[#F2EDE5] py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-10 md:mb-14">
          <p className="text-[12px] tracking-[0.3em] uppercase text-[#C4A882] mb-3 md:mb-4">
            {t.recommendation.eyebrow}
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2.9rem)] font-extralight tracking-wide text-[#1A1A1A] mb-3 md:mb-4">
            {t.recommendation.heading}
          </h2>
          <p className="text-[15px] md:text-[16px] text-[#5C5650] font-normal max-w-md">
            {t.recommendation.subtitle}
          </p>
        </div>

        {/* Goal selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 md:mb-12">
          {goals.map((goal) => (
            <button
              key={goal.id}
              onClick={() => setSelected(selected === goal.id ? null : goal.id)}
              className={`text-left px-5 py-4 md:px-6 md:py-5 border transition-all ${
                selected === goal.id
                  ? "border-[#1A1A1A] bg-[#1A1A1A] text-white"
                  : "border-[#D4C5B0] bg-white text-[#1A1A1A] hover:border-[#C4A882]"
              }`}
            >
              <span className="text-lg mr-3 text-[#C4A882]">{goal.emoji}</span>
              <span className="text-[15px] font-normal tracking-wide">{goal.label}</span>
            </button>
          ))}
        </div>

        {/* Results */}
        {activeGoal && (
          <div className="bg-white border border-[#E5DDD4] p-6 md:p-10">
            <p className="text-[12px] tracking-[0.25em] uppercase text-[#C4A882] mb-2">
              {t.recommendation.recommendationLabel}
            </p>
            <p className="text-[15px] text-[#5C5650] font-normal mb-6 md:mb-8">
              {activeGoal.note}
            </p>

            <div className="grid md:grid-cols-3 gap-6 md:gap-6">
              {activeGoal.treatments.map((treatment, i) => (
                <div key={treatment.name} className={`flex flex-col ${i > 0 ? "pt-5 md:pt-0 border-t md:border-t-0 border-[#E5DDD4]" : ""}`}>
                  <div className="flex items-center gap-3 mb-2 md:mb-3">
                    <span className="text-[13px] text-[#C4A882] font-normal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-light text-[#1A1A1A]">
                      {treatment.name}
                    </h3>
                  </div>
                  <p className="text-[15px] text-[#4A4540] font-normal leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-10 pt-5 md:pt-6 border-t border-[#E5DDD4]">
              <a
                href="https://bestill.timma.no/saxofon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto text-center px-8 py-3.5 bg-[#C4A882] text-[#0F0F0F] text-[12px] tracking-[0.18em] uppercase font-medium hover:bg-[#1A1A1A] hover:text-white transition-colors"
              >
                {t.recommendation.book}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
