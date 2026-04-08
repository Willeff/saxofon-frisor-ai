"use client";

import { useLanguage } from "../context/LanguageContext";

type Product = {
  name: string;
  brand: string;
  description: string;
  price: string;
  tag?: string;
};

const PRODUCTS_NO: Product[] = [
  {
    name: "OI Oil",
    brand: "Davines",
    description: "Multifunksjonell hårolje for glans, mykhet og beskyttelse. Anbefalt av våre stylister.",
    price: "kr 385",
    tag: "Stylistfavoritt",
  },
  {
    name: "Illumina Color Oil",
    brand: "Wella",
    description: "Pleie og fargeglans i én – holder fargen levende mellom hvert salonbesøk.",
    price: "kr 349",
  },
  {
    name: "Serioxyl Volumising Spray",
    brand: "L'Oréal Professionnel",
    description: "Volum og løft ved roten. Perfekt for fint og tynt hår som trenger ekstra fylde.",
    price: "kr 295",
    tag: "For tynt hår",
  },
  {
    name: "Gavekort",
    brand: "Saxoføn Frisør",
    description: "Gi bort en opplevelse. Kan brukes på alle tjenester og produkter. Valgfri verdi.",
    price: "Fra kr 500",
    tag: "Perfekt gave",
  },
];

const PRODUCTS_EN: Product[] = [
  {
    name: "OI Oil",
    brand: "Davines",
    description: "Multi-purpose hair oil for shine, softness and protection. Recommended by our stylists.",
    price: "NOK 385",
    tag: "Stylist favourite",
  },
  {
    name: "Illumina Color Oil",
    brand: "Wella",
    description: "Care and colour gloss in one — keeps colour vibrant between salon visits.",
    price: "NOK 349",
  },
  {
    name: "Serioxyl Volumising Spray",
    brand: "L'Oréal Professionnel",
    description: "Volume and lift at the root. Perfect for fine or thin hair that needs extra fullness.",
    price: "NOK 295",
    tag: "For fine hair",
  },
  {
    name: "Gift card",
    brand: "Saxoføn Frisør",
    description: "Give the gift of an experience. Valid for all services and products. Any value.",
    price: "From NOK 500",
    tag: "Perfect gift",
  },
];

const PRODUCTS_AR: Product[] = [
  {
    name: "OI Oil",
    brand: "Davines",
    description: "زيت شعر متعدد الاستخدامات للبريق والنعومة والحماية. موصى به من قبل مصففي شعرنا.",
    price: "385 كرون",
    tag: "المفضل لدى المصفف",
  },
  {
    name: "Illumina Color Oil",
    brand: "Wella",
    description: "عناية وبريق للون في واحد – يحافظ على حيوية اللون بين كل زيارة للصالون.",
    price: "349 كرون",
  },
  {
    name: "Serioxyl Volumising Spray",
    brand: "L'Oréal Professionnel",
    description: "حجم ورفع عند الجذور. مثالي للشعر الرفيع الذي يحتاج إلى كثافة إضافية.",
    price: "295 كرون",
    tag: "للشعر الرفيع",
  },
  {
    name: "بطاقة هدية",
    brand: "Saxoføn Frisør",
    description: "أهدِ تجربة لا تُنسى. صالحة لجميع الخدمات والمنتجات. بقيمة حسب اختيارك.",
    price: "من 500 كرون",
    tag: "هدية مثالية",
  },
];

const PRODUCTS_ES: Product[] = [
  {
    name: "OI Oil",
    brand: "Davines",
    description: "Aceite capilar multiuso para brillo, suavidad y protección. Recomendado por nuestros estilistas.",
    price: "385 NOK",
    tag: "Favorito de estilistas",
  },
  {
    name: "Illumina Color Oil",
    brand: "Wella",
    description: "Cuidado y brillo de color en uno – mantiene el color vibrante entre visitas al salón.",
    price: "349 NOK",
  },
  {
    name: "Serioxyl Volumising Spray",
    brand: "L'Oréal Professionnel",
    description: "Volumen y elevación en la raíz. Perfecto para cabello fino que necesita más cuerpo.",
    price: "295 NOK",
    tag: "Para cabello fino",
  },
  {
    name: "Tarjeta regalo",
    brand: "Saxoføn Frisør",
    description: "Regala una experiencia. Válida para todos los servicios y productos. Valor a elegir.",
    price: "Desde 500 NOK",
    tag: "Regalo perfecto",
  },
];

const PRODUCTS_MAP = { no: PRODUCTS_NO, en: PRODUCTS_EN, ar: PRODUCTS_AR, es: PRODUCTS_ES };

export default function ShopSection() {
  const { t, lang } = useLanguage();
  const products = PRODUCTS_MAP[lang];

  return (
    <section className="bg-[#0F0F0F] py-24 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-[12px] tracking-[0.3em] uppercase text-[#C4A882] mb-4">
              {t.shop.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-extralight tracking-wide text-white mb-4">
              {t.shop.heading}
            </h2>
            <p className="text-white/55 font-normal max-w-md text-[15px] leading-relaxed">
              {t.shop.subtitle}
            </p>
          </div>

          {/* Shopify badge */}
          <div className="self-start md:self-auto border border-white/10 px-5 py-4 text-center min-w-[180px]">
            <p className="text-[11px] tracking-[0.25em] uppercase text-white/35 mb-1">
              {t.shop.readyFor}
            </p>
            <p className="text-[15px] font-normal text-[#C4A882] tracking-wide">
              {t.shop.shopifyLabel}
            </p>
          </div>
        </div>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-[#0F0F0F] p-6 hover:bg-[#161616] transition-colors group flex flex-col"
            >
              <div className="aspect-square bg-[#1A1A1A] mb-5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C4A882]/10 to-transparent" />
                <span className="text-3xl font-extralight text-white/10 select-none">
                  {product.name.charAt(0)}
                </span>
                {product.tag && (
                  <span className="absolute top-3 left-3 text-[11px] tracking-[0.15em] uppercase bg-[#C4A882] text-[#0F0F0F] px-2 py-1 font-medium">
                    {product.tag}
                  </span>
                )}
              </div>

              <p className="text-[11px] tracking-[0.2em] uppercase text-[#C4A882] mb-1">
                {product.brand}
              </p>
              <h3 className="text-base font-light text-white mb-3 group-hover:text-[#C4A882] transition-colors">
                {product.name}
              </h3>
              <p className="text-[13px] text-white/50 font-normal leading-relaxed mb-5 flex-1">
                {product.description}
              </p>
              <div className="flex items-center justify-between border-t border-white/8 pt-4">
                <span className="text-[15px] font-normal text-white">
                  {product.price}
                </span>
                <button className="text-[11px] tracking-[0.15em] uppercase text-white/40 hover:text-white transition-colors font-medium">
                  {t.shop.buyLabel}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Shopify integration note */}
        <div className="mt-12 border border-white/8 p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-1">
            <p className="text-[12px] tracking-[0.25em] uppercase text-[#C4A882] mb-2">
              {t.shop.nextStep}
            </p>
            <h3 className="text-lg font-light text-white mb-2">
              {t.shop.shopifyHeading}
            </h3>
            <p className="text-[15px] text-white/50 font-normal leading-relaxed max-w-lg">
              {t.shop.shopifyBody}
            </p>
          </div>
          <div className="flex flex-col gap-2 text-[13px] text-white/40 font-normal min-w-[180px]">
            {t.shop.checkpoints.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-[#C4A882]">✓</span> {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
