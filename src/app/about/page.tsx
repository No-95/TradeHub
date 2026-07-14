"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { MapPin, ArrowUpRight, Globe } from "lucide-react";
import QuoteSection from "@/app/about/components/QuoteSection";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const VALUES = [
  {
    labelKey: "trust",
    descKey: "trust",
  },
  {
    labelKey: "dedication",
    descKey: "dedication",
  },
  {
    labelKey: "honesty",
    descKey: "honesty",
  },
];

const OFFICES = [
  { cityKey: "hanoi" },
  { cityKey: "haiPhong" },
  { cityKey: "hoChiMinhCity" },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function OfficeCards({ lang }: { lang: "VIE" | "ENG" | "KR" }) {
  const about = translations[lang].about;

  const DEFAULT_BG = "/about/haiphong.png";

  const [bg, setBg] = useState(DEFAULT_BG);
  const [overlayOpacity, setOverlayOpacity] = useState("0.55");

  const cityMap: Record<string, string> = {
    hanoi: "/about/hanoi.png",
    haiPhong: "/about/haiphong.png",
    hoChiMinhCity: "/about/hcm.png",
  };

  const officeCopy: Record<string, { label: string; detail: string; sub: string }> = {
    hanoi: {
      label: lang === "VIE" ? "Hà Nội" : lang === "KR" ? "하노이" : "Hanoi",
      detail: lang === "VIE" ? "Dự án Nhà máy Điện mặt trời" : lang === "KR" ? "태양광 발전소 프로젝트" : "Solar Power Plant Project",
      sub: lang === "VIE" ? "Hà Đông, Hà Nội" : lang === "KR" ? "하동, 하노이" : "Ha Dong, Hanoi",
    },
    haiPhong: {
      label: lang === "VIE" ? "Hải Phòng" : lang === "KR" ? "하이퐁" : "Hai Phong",
      detail: lang === "VIE"
        ? "Khu công nghiệp Đình Vũ"
        : lang === "KR"
          ? "딘부 산업단지"
          : "Dinh Vu Industrial Park",
      sub: lang === "VIE" ? "Quận Lê Chân, Hải Phòng" : lang === "KR" ? "레찬 구, 하이퐁" : "Le Chan District, Hai Phong",
    },
    hoChiMinhCity: {
      label: lang === "VIE" ? "TP. Hồ Chí Minh" : lang === "KR" ? "호치민시" : "Ho Chi Minh City",
      detail: lang === "VIE"
        ? "Văn phòng Đại diện Khu vực"
        : lang === "KR"
          ? "지역 대표 사무소"
          : "Regional Representative Office",
      sub: lang === "VIE" ? "Quận 1, TP. Hồ Chí Minh" : lang === "KR" ? "1구, 호치민시" : "District 1, Ho Chi Minh City",
    },
  };

  const resetBg = useCallback(() => {
    setBg(DEFAULT_BG);
    setOverlayOpacity("0.55");
  }, [DEFAULT_BG]);

  const handleEnter = useCallback(
    (cityKey: string) => {
      setBg(cityMap[cityKey] || DEFAULT_BG);
      setOverlayOpacity("0.25");
    },
    [cityMap, DEFAULT_BG]
  );

  const officeEntry = (office: { cityKey: string }) => {
    const base = officeCopy[office.cityKey] ?? { label: office.cityKey, detail: '', sub: '' };
    return {
      label: base.label,
      detail: base.detail,
      sub: base.sub,
    };
  };

  const viewMapLabel = about.viewOnMap;
  const heading = about.offices;
  const description = about.officesDescription;

  return (
    <div className="relative">
      <img
        src={bg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        style={{ opacity: 1 }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="mb-16 text-center">
          <h2 className="text-3xl lg:text-4xl" style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 700, color: "#0e0e10" }}>
            {heading}
          </h2>
          <div className="mt-6 mx-auto max-w-2xl rounded-2xl border border-white/40 bg-white/15 backdrop-blur-md p-6 text-center">
            <p className="text-neutral-900 text-sm leading-relaxed">{description}</p>
          </div>
        </div>
        <div className="relative z-10 grid lg:grid-cols-3 gap-6">
          {OFFICES.map((office, i) => {
            const copy = officeEntry(office);
            return (
              <FadeIn key={office.cityKey} delay={i * 0.1}>
                <div
                  className="p-8 lg:p-10 flex flex-col gap-5 rounded-2xl border border-white/40 bg-white/15 backdrop-blur-md transition-all duration-300 hover:bg-white/25"
                  onMouseEnter={() => handleEnter(office.cityKey)}
                  onMouseLeave={resetBg}
                >
                  <MapPin size={18} className="text-[#005DA4]" />
                  <div>
                    <h3 className="text-2xl lg:text-3xl mb-2" style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 700, color: "#0e0e10" }}>
                      {copy.label}
                    </h3>
                    <p className="text-neutral-900 text-sm mb-1">{copy.detail}</p>
                    <p className="text-neutral-600 text-xs tracking-wide">{copy.sub}</p>
                  </div>
                  <div className="mt-auto">
                    <span className="text-xs text-[#005DA4] tracking-widest uppercase flex items-center gap-2">
                      {viewMapLabel} <ArrowUpRight size={12} />
                    </span>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const about = t.about;

  return (
    <div className="min-h-screen bg-white text-neutral-900" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white border-b border-[#e5e5e5] lg:h-[684px]">
        <img
          src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=1800&h=900&fit=crop&auto=format"
          alt="Vietnam investment landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Left panel overlay */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[40%] bg-gradient-to-r from-[#0a1628] via-[#0a1628]/92 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center">
          <div className="max-w-xl pt-10 pb-16 lg:py-0">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#C9A84C] mb-5">
              {about.aboutHdp}
            </p>
            <div className="h-px w-12 bg-[#C9A84C] mb-6" />

            <h1
              className="text-3xl sm:text-4xl lg:text-[3.4rem] leading-[1.15] font-bold text-white mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}
            >
              {about.heroTitle1}
              <br />
              {about.heroTitle2}
            </h1>

            <p className="text-sm sm:text-base leading-relaxed text-white/85 max-w-md">
              {about.heroDescription}
            </p>

            <div className="mt-8">
              <a
                href="#identity"
                className="inline-flex items-center gap-3 border border-[#C9A84C] text-[#C9A84C] px-8 py-3 text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-[#C9A84C] hover:text-white transition-colors"
              >
                {about.discoverOurStory}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />

        <div className="absolute bottom-8 left-6 lg:left-12 flex items-center gap-4">
          <Globe size={16} className="text-[#C9A84C]" />
          <div className="h-px w-10 bg-[#C9A84C]" />
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white">
            {about.globalTagline}
          </span>
        </div>
      </section>

      {/* ── Identity ── */}
      <section id="identity" className="py-24 lg:py-36 border-t border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn>
              <p className="text-xs tracking-[0.3em] uppercase text-[#005DA4] mb-6 font-semibold">{about.whoWeAre}</p>
              <h2
                className="text-4xl lg:text-5xl leading-tight mb-8"
                style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 700, color: "#0e0e10" }}
              >
                {about.identityTitle1}
                <br />
                {about.identityTitle2}
              </h2>
              <p className="text-neutral-700 leading-relaxed text-base lg:text-lg font-light mb-6">
                {about.identityDescription1}
              </p>
              <p className="text-neutral-700 leading-relaxed text-base lg:text-lg font-light">
                {about.identityDescription2}
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=700&h=850&fit=crop&auto=format"
                  alt="Modern office and business environment"
                  className="w-full object-cover bg-gray-100"
                  style={{ height: "480px" }}
                />
                <div
                  className="absolute -bottom-6 -left-6 bg-white border border-neutral-200 p-6"
                  style={{ width: "200px" }}
                >
                  <div
                    className="text-3xl mb-1"
                    style={{ fontFamily: "'DM Serif Display', serif", color: "#005DA4" }}
                  >
                    {about.fdi}
                  </div>
                  <div className="text-xs text-neutral-600 leading-snug tracking-wide">
                    {about.fdiDescription}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Quote / Testimonials ─ */}
      <QuoteSection />

      {/* ── Offices ─ */}
      <section className="bg-white border-t border-[#e5e5e5]">
        <OfficeCards lang={lang} />
      </section>

      {/* ── CTA Banner ─ */}
      <section className="bg-[#005DA4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="flex flex-col items-center justify-between gap-10 text-center">
            <div className="max-w-3xl">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl mb-4 text-white" style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 700, lineHeight: 1.1 }}>
                {about.ctaTitle}
              </h2>
              <p className="text-sm text-white/80 leading-relaxed">
                {about.ctaDescription}
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-white text-[#005DA4] px-10 py-5 text-sm tracking-widest uppercase hover:bg-neutral-100 transition-colors duration-300"
            >
              {about.contactUs}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
