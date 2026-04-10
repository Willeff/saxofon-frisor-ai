"use client";

import { useLanguage } from "../context/LanguageContext";
import { useInView } from "../hooks/useInView";

export default function ReviewsPreview() {
  const { t } = useLanguage();
  const reviews = t.reviews.items.slice(0, 3);
  const { ref, inView } = useInView();
  const v = inView ? "in-view" : "";

  return (
    <section ref={ref} className="bg-[#F7F4EF] py-14 md:py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center justify-between gap-4 mb-8 md:mb-10">
          <div>
            <p className={`text-[12px] tracking-[0.3em] uppercase text-[#C4A882] mb-3 anim-fade-in-up ${v}`}>
              {t.reviews.eyebrow}
            </p>
            <h2 className={`text-[clamp(1.6rem,3.5vw,2.6rem)] font-light tracking-wide text-[#1A1A1A] anim-fade-in-up stagger-1 ${v}`}>
              {t.reviews.heading}
            </h2>
          </div>

          {/* Google badge */}
          <a
            href="https://g.page/saxofonfrisor"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden sm:flex items-center gap-2 border border-[#E0D9D0] bg-white px-4 py-2.5 hover:border-[#C4A882] transition-all duration-300 hover:shadow-sm flex-none anim-fade-in-up stagger-2 ${v}`}
          >
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-3.5 h-3.5 text-[#C4A882]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <svg width="13" height="13" viewBox="0 0 18 18" aria-hidden className="flex-none">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
              <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            <span className="text-[13px] text-[#5C5650] font-normal">{t.reviews.reviewCount}</span>
          </a>
        </div>

        {/* Review cards — individually staggered */}
        <div className="grid sm:grid-cols-3 gap-3">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`card-hover bg-white border border-[#E0D9D0] p-5 md:p-6 anim-fade-in-up ${v}`}
              style={{ transitionDelay: `${390 + i * 130}ms` }}
            >
              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((j) => (
                  <svg key={j} className="w-3 h-3 text-[#C4A882]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[14px] text-[#4A4540] font-normal leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-[13px] text-[#1A1A1A] font-medium">{review.name}</p>
              <p className="text-[12px] text-[#7A746E] font-normal">{review.location}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
