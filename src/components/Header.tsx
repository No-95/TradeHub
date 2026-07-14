"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "News", href: "/news" },
  { label: "Market Insight", href: "/market-insight" },
  { label: "Business Opportunity", href: "/business-opportunity" },
];

const languageOptions = [
  { label: "VIE", value: "VIE" },
  { label: "ENG", value: "ENG" },
  { label: "KR", value: "KR" },
] as const;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();

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
      {/* Top utility bar */}
      <div className="border-b border-white/10 bg-brand text-brand-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 text-xs text-white/80 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
          <div className="flex flex-wrap items-center gap-2">
            {languageOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setLang(option.value)}
                className={`cursor-pointer transition-colors ${
                  lang === option.value ? "text-white" : "hover:text-white"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="cursor-pointer hover:text-white">Sitemap</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-30 border-b transition-all duration-300 ${
          scrolled
            ? "border-brand/10 bg-white/95 backdrop-blur-md shadow-sm"
            : "border-transparent bg-white/70 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded">
                <Image src="/hdp-logo.png" alt="HDP HOLDINGS" fill className="object-contain" />
              </div>
              <div className="leading-tight">
                <div className="text-lg font-semibold tracking-tight text-neutral-900">HDP HOLDINGS</div>
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
                  {item.label}
                </Link>
              ))}
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
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>
    </>
  );
}
