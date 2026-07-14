"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Wrench } from "lucide-react";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full rounded-2xl border border-neutral-200 bg-white p-8 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
            <Wrench className="h-8 w-8 text-brand" />
          </div>
          <h1 className="text-2xl font-semibold text-brand">Coming Soon</h1>
          <p className="mt-3 text-sm text-neutral-600">
            This section is under development. Please check back later or return to the homepage.
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
