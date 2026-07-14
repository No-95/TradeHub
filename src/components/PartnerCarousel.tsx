"use client";

import Image from "next/image";

const partnerLogos = Array.from({ length: 15 }, (_, i) => `/logo/${i + 1}.jpg`);

export default function PartnerCarousel() {
  return (
    <section className="bg-white border-y border-neutral-100">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-neutral-400">
          Trusted Partners & Clients
        </p>
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee items-center gap-10">
            {[...partnerLogos, ...partnerLogos].map((src, idx) => (
              <div
                key={src + idx}
                className="relative h-16 w-24 shrink-0 sm:h-20 sm:w-28"
              >
                <Image
                  src={src}
                  alt={`Partner ${(idx % 15) + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 96px, 112px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
