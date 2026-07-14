"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const partnerLogos = Array.from({ length: 15 }, (_, i) => `/logo/${i + 1}.jpg`);

export default function PartnerCarousel() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const home = t.home;

  return (
    <section className="bg-white border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-neutral-500">
          {home.partnersTitle}
        </p>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee items-center gap-10">
            {partnerLogos.map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt={`Partner ${idx + 1}`}
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
