"use client"

import Link from "next/link"
import Image from "next/image"
import Header from "@/components/Header"
import { ArrowLeft } from "lucide-react"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50/50 to-white">
      <Header />

      <section className="relative min-h-[calc(100vh-120px)] flex items-center justify-center py-20">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/8f4b2454-7b75-433a-ba45-5040883c10cb.png"
            alt="Coming Soon Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 opacity-0" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance text-primary">Coming Soon</h1>
            <p className="text-xl md:text-2xl text-primary">We're launching something exciting!</p>
          </div>

          {/* Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#f28018] hover:bg-[#f28018]/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Check Out For Other Events
          </Link>
        </div>
      </section>
    </div>
  )
}
