"use client";

const REVIEWS = [
  {
    name: "Maria S.",
    location: "Oslo",
    text: "Beste frisørsalong jeg har vært hos. Har brukt dem i over 10 år og er alltid fornøyd med resultatet.",
  },
  {
    name: "Lena H.",
    location: "Grünerløkka",
    text: "Imponerende kompetanse med balayage. Min frisør forsto nøyaktig hva jeg ønsket – og leverte.",
  },
  {
    name: "Kristoffer M.",
    location: "Majorstuen",
    text: "Rask og presis herreklipp. Hyggelig atmosfære og et veldig profesjonelt team.",
  },
  {
    name: "Anne-Lise W.",
    location: "Frogner",
    text: "Alltid imøtekommende og dyktige. Har aldri vært misfornøyd. Anbefales på det sterkeste.",
  },
];

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className ?? "w-3.5 h-3.5 text-[#C4A882]"} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const GoogleG = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" aria-hidden className="flex-none">
    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
    <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
    <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
  </svg>
);

export default function ReviewsSection() {
  return (
    <section className="bg-[#F7F4EF] border-t border-[#E5DDD4] py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10 md:mb-14">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="block w-10 h-px bg-[#C4A882]/50" />
              <p className="text-[12px] tracking-[0.3em] uppercase text-[#C4A882] font-light">
                Anmeldelser
              </p>
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-light tracking-[0.02em] leading-[1.18] text-[#1A1A1A]">
              Det kundene sier.
            </h2>
          </div>

          {/* Google rating badge */}
          <a
            href="https://g.page/saxofonfrisor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 self-start sm:self-auto border border-[#E5DDD4] bg-white px-4 py-3 hover:border-[#C4A882] transition-colors"
          >
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <StarIcon key={i} className="w-4 h-4 text-[#C4A882]" />
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              <GoogleG size={14} />
              <span className="text-[#1A1A1A] font-medium text-[15px]">4.9</span>
              <span className="text-[#5C5650] text-[15px] font-normal">· 681 anmeldelser</span>
            </div>
          </a>
        </div>

        {/* Review cards */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="bg-white border border-[#E5DDD4] px-6 py-6 md:px-7 md:py-7 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[16px] text-[#2A2520] font-normal leading-relaxed flex-1">
                «{review.text}»
              </p>

              {/* Attribution */}
              <div className="flex items-center justify-between pt-4 border-t border-[#F0E8E0]">
                <div>
                  <p className="text-[15px] font-medium text-[#1A1A1A]">{review.name}</p>
                  <p className="text-[13px] text-[#5C5650] font-normal">{review.location}</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <GoogleG size={12} />
                  <span className="text-[12px] text-[#7A746E] font-normal">Google</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
