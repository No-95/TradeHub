"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const footer = t.footer;
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left: Logo + About */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative h-14 w-14 overflow-hidden rounded-lg bg-white/10">
                <Image
                  src="/hdp-logo.png"
                  alt="HDP HOLDINGS"
                  fill
                  sizes="56px"
                  className="object-contain p-2"
                />
              </div>
              <div>
                <div className="text-xl font-bold tracking-tight">{t.siteName}</div>
                <div className="text-xs uppercase tracking-widest text-white/60">
                  {t.tagline}
                </div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Your trusted gateway into Vietnam&apos;s investment landscape.
              Connecting global ambition with local expertise.
            </p>
          </div>

          {/* Center: Contact Info */}
          <div className="lg:col-span-5">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-6">
              {footer.contactInformation}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <MapPin className="h-5 w-5 text-[#C9A84C]" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-1">
                    {footer.headquarters}
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {footer.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <Phone className="h-5 w-5 text-[#C9A84C]" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-1">
                    {footer.telephone}
                  </div>
                  <a
                    href="tel:+84869010169"
                    className="text-sm text-white/90 hover:text-[#C9A84C] transition-colors"
                  >
                    (+84) 869 010 169
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <Mail className="h-5 w-5 text-[#C9A84C]" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-1">
                    {footer.email}
                  </div>
                  <a
                    href="mailto:business@hdpholdings.com.vn"
                    className="text-sm text-white/90 hover:text-[#C9A84C] transition-colors"
                  >
                    business@hdpholdings.com.vn
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#C9A84C]"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-1">
                    {footer.taxId}
                  </div>
                  <p className="text-sm text-white/90 font-mono">0111083428</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Social Media */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-6">
              {footer.connectWithUs}
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/hdp-holdings-co-ltd-77a630190/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white/90 hover:bg-white/10 hover:border-[#C9A84C]/50 transition-all group"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white/70 group-hover:text-[#C9A84C] transition-colors">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="https://www.facebook.com/hdpholdings"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white/90 hover:bg-white/10 hover:border-[#C9A84C]/50 transition-all group"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white/70 group-hover:text-[#C9A84C] transition-colors">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook</span>
              </a>

              <a
                href="https://www.youtube.com/@HDPHOLDINGS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white/90 hover:bg-white/10 hover:border-[#C9A84C]/50 transition-all group"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white/70 group-hover:text-[#C9A84C] transition-colors">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/50 tracking-wide">
              &copy; {new Date().getFullYear()} HDP Holdings. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-xs text-white/50 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs text-white/50 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
