"use client";

import { useState } from "react";
import { Calendar, Users, Globe, LayoutGrid, ChevronDown, ArrowRight, Building2, MapPin } from "lucide-react";

const C = {
  background: "#0b1622",
  foreground: "#ede8dc",
  card: "#121f30",
  primary: "#c9a453",
  primaryForeground: "#0b1622",
  secondary: "#1a2b3e",
  muted: "#162030",
  mutedForeground: "#8a9fb8",
  border: "rgba(201,164,83,0.18)",
} as const;

const STATS = [
  { value: "350+", label: "Participating Companies", icon: Building2 },
  { value: "15", label: "Countries Represented", icon: Globe },
  { value: "1,300", label: "Exhibition Booths", icon: LayoutGrid },
  { value: "65,000", label: "Visitors & Buyers", icon: Users },
];

const PROGRAMS = [
  {
    title: "Woodworking Machinery Fair",
    desc: "A dedicated showcase for the latest woodworking machinery, materials, and production technologies.",
  },
  {
    title: "GaGu Living Design Competition",
    desc: "A prestigious furniture design award recognizing innovation and craftsmanship in Korean furniture.",
  },
  {
    title: "Global Furniture Zone",
    desc: "International exhibitor spotlight welcoming brands from across Asia-Pacific and beyond.",
  },
  {
    title: "Young Furniture Design Award",
    desc: "Celebrating emerging talent in furniture design, sponsored by the KFFIC and design academies.",
  },
  {
    title: "Furniture Academic Conference",
    desc: "Industry-leading speakers discuss global market trends, materials science, and design futures.",
  },
  {
    title: "B2B Matchmaking",
    desc: "Structured 1:1 business meetings between overseas buyers and Korean manufacturers, with factory tours.",
  },
];

const CATEGORIES = [
  "Home Living Furniture",
  "Office Furniture",
  "Furniture for Industrial Use",
  "Art Furniture",
  "Interior & Home Deco",
  "Kitchen & Tableware",
  "Home Appliances",
  "Woodworking Machinery & Materials",
  "Furniture Accessories",
];

const SUPPORTERS = [
  "Ministry of SMEs and Startups (Korea)",
  "Public Procurement Service",
  "KBIZ – Korea Federation of SMEs",
  "KOTRA – Korea Trade-Investment Promotion Agency",
  "KITA – Korea International Trade Association",
  "CAFA – Council of Asia-Pacific Furniture Associations",
];

export default function Kofurn() {
  const [hoveredProgram, setHoveredProgram] = useState<number | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [hoveredSupporter, setHoveredSupporter] = useState<number | null>(null);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ backgroundColor: C.background, color: C.foreground, minHeight: "100vh", fontFamily: "'Barlow', sans-serif" }}>
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          paddingBottom: "6rem",
          overflow: "hidden",
          background: "linear-gradient(135deg, #061020 0%, #0b1622 50%, #0d1e30 100%)",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&h=900&fit=crop&auto=format"
            alt="Modern furniture showroom"
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.15 }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0b1622 30%, transparent 70%)" }} />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage: `linear-gradient(${C.border} 1px, transparent 1px), linear-gradient(90deg, ${C.border} 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        <div style={{ position: "relative", zIndex: 10, maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <div style={{ width: "3rem", height: "1px", backgroundColor: C.primary }} />
            <span style={{ color: C.primary, fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 600, fontFamily: "'DM Mono', monospace" }}>
              Global Furniture Business Roadshow
            </span>
          </div>

          <h1 style={{ fontFamily: "'Playfair Display', serif", color: C.foreground, fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 900, lineHeight: 0.95, marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
            KOFURN
            <br />
            <span style={{ fontStyle: "italic", color: C.primary }}>2026</span>
          </h1>

          <p style={{ fontSize: "1.125rem", color: C.mutedForeground, fontWeight: 300, maxWidth: "36rem", marginBottom: "2.5rem", lineHeight: 1.7 }}>
            Korea&apos;s largest international furniture and interior fair — connecting global exhibitors, designers, and buyers since 1981.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", marginBottom: "3rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Calendar size={16} style={{ color: C.primary, flexShrink: 0 }} />
              <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>August 27 – 30, 2026</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <MapPin size={16} style={{ color: C.primary, flexShrink: 0 }} />
              <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>KINTEX Halls 7–8, South Korea</span>
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem" }}>
            <a
              href="https://kofurnglobal.or.kr"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: C.primary, color: C.primaryForeground, padding: "0.875rem 1.75rem", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}
            >
              Register Now <ArrowRight size={14} />
            </a>
            <button
              onClick={() => scrollTo("#about")}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", border: `1px solid ${C.border}`, color: C.foreground, padding: "0.875rem 1.75rem", fontSize: "0.875rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", background: "none", cursor: "pointer" }}
            >
              Learn More
            </button>
          </div>
        </div>

        <button
          onClick={() => scrollTo("#stats")}
          style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", background: "none", border: "none", cursor: "pointer", color: C.mutedForeground, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.25rem" }}
          className="animate-bounce"
        >
          <span style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace" }}>Scroll</span>
          <ChevronDown size={16} />
        </button>
      </section>

      {/* ── STATS BAR ── */}
      <section id="stats" style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, backgroundColor: C.card }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }} className="lg:grid-cols-4">
            {STATS.map(({ value, label, icon: Icon }) => (
              <div key={label} style={{ padding: "2.5rem 2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <Icon size={20} style={{ color: C.primary }} />
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: C.primary, lineHeight: 1 }}>
                  {value}
                </div>
                <div style={{ fontSize: "0.75rem", color: C.mutedForeground, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500, lineHeight: 1.4 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "7rem 0", backgroundColor: C.background }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ display: "grid", gap: "4rem", alignItems: "center" }} className="lg:grid-cols-2">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                <div style={{ width: "2rem", height: "1px", backgroundColor: C.primary }} />
                <span style={{ color: C.primary, fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 600, fontFamily: "'DM Mono', monospace" }}>Est. 1981</span>
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: "2rem" }}>
                Korea&apos;s Premier
                <br />
                <span style={{ fontStyle: "italic", color: C.primary }}>Furniture Platform</span>
              </h2>
              <p style={{ fontSize: "1rem", color: C.mutedForeground, lineHeight: 1.75, marginBottom: "1.5rem" }}>
                KOFURN — Korea International Furniture &amp; Interior Fair — is organized by KFFIC (Korea Federation of Furniture Industry Cooperatives) and serves as the definitive platform connecting manufacturers, designers, and buyers across Asia-Pacific and the global market.
              </p>
              <p style={{ fontSize: "1rem", color: C.mutedForeground, lineHeight: 1.75, marginBottom: "2.5rem" }}>
                As a proud member of CAFA (Council of Asia-Pacific Furniture Associations) spanning 20 member countries, KFFIC plays an active role in establishing international furniture industry standards and driving cross-border trade.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: "3rem", height: "1px", backgroundColor: C.border }} />
                <span style={{ fontSize: "0.75rem", color: C.mutedForeground, letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace" }}>
                  Member of CAFA · 20 Countries
                </span>
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop&auto=format"
                  alt="Modern interior furniture exhibition"
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
              <div style={{ position: "absolute", bottom: "-1.25rem", left: "-1.25rem", backgroundColor: C.primary, color: C.primaryForeground, padding: "1rem 1.25rem" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 900 }}>43rd</div>
                <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>Edition</div>
              </div>
              <div style={{ position: "absolute", top: "1.25rem", right: "1.25rem", border: `1px solid ${C.primary}4D`, backgroundColor: `${C.background}CC`, backdropFilter: "blur(8px)", padding: "0.75rem 1rem" }}>
                <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: C.mutedForeground, marginBottom: "0.25rem", fontFamily: "'DM Mono', monospace" }}>Organized by</div>
                <div style={{ fontSize: "0.875rem", fontWeight: 600 }}>KFFIC</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EVENT INFO BAND ── */}
      <section id="event" style={{ backgroundColor: C.primary }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ display: "grid" }} className="md:grid-cols-3">
            {[
              { icon: Calendar, label: "Dates", title: "Aug 27 – 30, 2026", sub: "Thursday to Sunday" },
              { icon: Globe, label: "Scale", title: "International", sub: "15 countries · 350 exhibitors" },
            ].map(({ icon: Icon, label, title, sub }) => (
              <div
                key={label}
                style={{
                  padding: "2.5rem 2rem",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1.25rem",
                }}
              >
                <Icon size={22} style={{ color: `${C.primaryForeground}B3`, flexShrink: 0, marginTop: "0.125rem" }} />
                <div>
                  <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, color: `${C.primaryForeground}99`, marginBottom: "0.25rem", fontFamily: "'DM Mono', monospace" }}>{label}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.125rem", fontWeight: 700, color: C.primaryForeground }}>{title}</div>
                  <div style={{ fontSize: "0.875rem", color: `${C.primaryForeground}B3`, marginTop: "0.25rem" }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section id="programs" style={{ padding: "7rem 0", backgroundColor: C.card }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div style={{ width: "2rem", height: "1px", backgroundColor: C.primary }} />
              <span style={{ color: C.primary, fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 600, fontFamily: "'DM Mono', monospace" }}>Special Shows</span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.15 }}>
              Event<br /><span style={{ fontStyle: "italic", color: C.primary }}>Programs</span>
            </h2>
          </div>

          <div style={{ display: "grid", gap: "1px", backgroundColor: C.border }} className="md:grid-cols-2 lg:grid-cols-3">
            {PROGRAMS.map((p, i) => (
              <div
                key={p.title}
                onMouseEnter={() => setHoveredProgram(i)}
                onMouseLeave={() => setHoveredProgram(null)}
                style={{ backgroundColor: hoveredProgram === i ? C.secondary : C.card, padding: "2rem", transition: "background-color 0.2s", cursor: "default" }}
              >
                <div style={{ fontSize: "0.75rem", color: `${C.primary}80`, marginBottom: "1rem", fontWeight: 500, fontFamily: "'DM Mono', monospace" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.125rem", fontWeight: 700, marginBottom: "1rem", color: hoveredProgram === i ? C.primary : C.foreground, transition: "color 0.2s", lineHeight: 1.3 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: C.mutedForeground, lineHeight: 1.7 }}>{p.desc}</p>
                <div style={{ marginTop: "1.5rem", height: "1px", backgroundColor: hoveredProgram === i ? C.primary : C.border, width: hoveredProgram === i ? "3rem" : "2rem", transition: "all 0.3s" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXHIBITOR CATEGORIES ── */}
      <section id="exhibitors" style={{ padding: "7rem 0", backgroundColor: C.background }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ display: "grid", gap: "3rem", alignItems: "start" }} className="lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <div style={{ width: "2rem", height: "1px", backgroundColor: C.primary }} />
                <span style={{ color: C.primary, fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 600, fontFamily: "'DM Mono', monospace" }}>What to Expect</span>
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: "1.5rem" }}>
                Exhibitor<br /><span style={{ fontStyle: "italic", color: C.primary }}>Categories</span>
              </h2>
              <p style={{ color: C.mutedForeground, fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "2rem" }}>
                From home living to industrial solutions, KOFURN covers the full spectrum of the modern furniture and interior industry.
              </p>
              <div style={{ aspectRatio: "1/1", overflow: "hidden", maxWidth: "18rem" }}>
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop&auto=format"
                  alt="Contemporary furniture design"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            <div className="lg:col-span-3">
              {CATEGORIES.map((cat, i) => (
                <div
                  key={cat}
                  onMouseEnter={() => setHoveredCategory(i)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: `1px solid ${hoveredCategory === i ? `${C.primary}80` : C.border}`,
                    padding: "1.25rem 0",
                    cursor: "default",
                    transition: "border-color 0.2s",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                    <span style={{ fontSize: "0.75rem", color: `${C.primary}80`, fontWeight: 500, width: "1.5rem", fontFamily: "'DM Mono', monospace" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span style={{ fontSize: "1rem", fontWeight: 500, color: hoveredCategory === i ? C.primary : C.foreground, letterSpacing: "0.025em", transition: "color 0.2s" }}>
                      {cat}
                    </span>
                  </div>
                  <ArrowRight
                    size={14}
                    style={{ color: hoveredCategory === i ? C.primary : C.mutedForeground, transform: hoveredCategory === i ? "translateX(4px)" : "none", transition: "all 0.2s" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SUPPORTING ORGANIZATIONS ── */}
      <section id="partners" style={{ padding: "5rem 0", backgroundColor: C.card, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "3rem", justifyContent: "center" }}>
            <div style={{ width: "2rem", height: "1px", backgroundColor: C.primary }} />
            <span style={{ color: C.primary, fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 600, fontFamily: "'DM Mono', monospace" }}>Supporting Organizations</span>
            <div style={{ width: "2rem", height: "1px", backgroundColor: C.primary }} />
          </div>
          <div style={{ display: "grid", gap: "1px", backgroundColor: C.border }} className="grid-cols-2 md:grid-cols-3">
            {SUPPORTERS.map((s, i) => (
              <div
                key={s}
                onMouseEnter={() => setHoveredSupporter(i)}
                onMouseLeave={() => setHoveredSupporter(null)}
                style={{ backgroundColor: hoveredSupporter === i ? C.secondary : C.card, padding: "1.5rem 1.75rem", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", transition: "background-color 0.2s" }}
              >
                <span style={{ fontSize: "0.75rem", color: hoveredSupporter === i ? C.foreground : C.mutedForeground, letterSpacing: "0.05em", lineHeight: 1.5, fontWeight: 500, textTransform: "uppercase", transition: "color 0.2s" }}>
                  {s}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REGISTER CTA ── */}
      <section style={{ padding: "7rem 0", backgroundColor: C.background, position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage: `linear-gradient(${C.border} 1px, transparent 1px), linear-gradient(90deg, ${C.border} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div style={{ position: "relative", zIndex: 10, maxWidth: "56rem", margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem", justifyContent: "center" }}>
            <div style={{ width: "2rem", height: "1px", backgroundColor: C.primary }} />
            <span style={{ color: C.primary, fontSize: "0.75rem", letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 600, fontFamily: "'DM Mono', monospace" }}>KOFURN 2026</span>
            <div style={{ width: "2rem", height: "1px", backgroundColor: C.primary }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "1.5rem" }}>
            Join the Global<br /><span style={{ fontStyle: "italic", color: C.primary }}>Furniture Stage</span>
          </h2>
          <p style={{ color: C.mutedForeground, fontSize: "1.125rem", lineHeight: 1.7, maxWidth: "36rem", margin: "0 auto 2.5rem" }}>
            Whether you&apos;re an exhibitor, buyer, or designer — KOFURN 2026 is where Asia&apos;s furniture industry converges. Secure your place at Korea&apos;s most influential trade fair.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            <a
              href="https://kofurnglobal.or.kr"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: C.primary, color: C.primaryForeground, padding: "1rem 2rem", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}
            >
              Register as Exhibitor <ArrowRight size={14} />
            </a>
            <a
              href="https://kofurnglobal.or.kr"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", border: `1px solid ${C.border}`, color: C.foreground, padding: "1rem 2rem", fontSize: "0.875rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}
            >
              Visit as Buyer
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
