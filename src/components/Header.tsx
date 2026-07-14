"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const navItems = [
  { labelKey: "about", href: "/about" },
  { labelKey: "contact", href: "/contact" },
  { labelKey: "news", href: "/news" },
  { labelKey: "marketInsight", href: "/market-insight" },
  { labelKey: "businessOpportunity", href: "/business-opportunity" },
] as const;

const languageOptions = [
  { label: "VIE", value: "VIE" },
  { label: "ENG", value: "ENG" },
  { label: "KR", value: "KR" },
] as const;

const NEXT_LANG: Record<string, "VIE" | "ENG" | "KR"> = {
  VIE: "ENG",
  ENG: "KR",
  KR: "VIE",
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const t = translations[lang];
  const navLabel = (key: keyof typeof t.nav) => t.nav[key];

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main header */}
      <header
        className={`sticky top-0 z-30 border-b transition-all duration-300 ${
          scrolled
            ? "border-brand/10 bg-white/95 backdrop-blur-md shadow-sm"
            : "border-transparent bg-white/70 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-[72px] items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded">
                <Image src="/hdp-logo.png" alt="HDP HOLDINGS" fill className="object-contain" />
              </div>
              <div className="leading-tight">
                <div className="text-base font-semibold tracking-tight text-neutral-900">HDP HOLDINGS</div>
                <div className="text-[10px] uppercase tracking-widest text-brand">Global Trade & Investment</div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-neutral-700">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-6 transition-colors hover:text-brand ${isActive(item.href) ? "text-brand" : ""}`}
                >
                  {navLabel(item.labelKey)}
                </Link>
              ))}
              <button
                onClick={() => setLang(NEXT_LANG[lang] ?? "ENG")}
                className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-semibold tracking-wide text-neutral-700 transition-colors hover:border-brand hover:text-brand"
              >
                {lang}
              </button>
            </nav>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden flex items-center justify-center rounded p-2 hover:bg-neutral-100"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {mobileOpen && (
            <div className="lg:hidden border-t border-brand/10 bg-white py-4 text-sm font-medium text-neutral-700 space-y-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="block rounded px-3 py-3 hover:bg-brand/5 hover:text-brand">
                  {navLabel(item.labelKey)}
                </Link>
              ))}
              <div className="px-3 pt-2">
                <button
                  onClick={() => setLang(NEXT_LANG[lang] ?? "ENG")}
                  className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-semibold tracking-wide text-neutral-700 transition-colors hover:border-brand hover:text-brand"
                >
                  {lang}
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
