"use client";

import Image from "next/image";

const partners = Array.from({ length: 15 }, (_, i) => ({
  id: `partner-${i + 1}`,
  src: `/logo/${i + 1}.jpg`,
  alt: `Partner ${i + 1}`,
  width: 160,
  height: 80,
}));

const duplicated = [...partners, ...partners];

export default function PartnersCarousel() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">Trusted by leading organizations</h2>
          <p className="mt-4 text-neutral-600">A selection of public partners and institutions we collaborate with across trade, investment, and industry programs.</p>
        </div>
      </div>

      <div className="mt-12 relative">
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="relative overflow-hidden">
          <div className="flex w-max animate-marquee">
            {duplicated.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="mx-4 flex h-24 w-40 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white px-3 py-3"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={partner.width}
                  height={partner.height}
                  className="h-full w-full object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
