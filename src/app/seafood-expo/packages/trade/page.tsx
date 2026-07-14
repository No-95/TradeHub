import Link from "next/link";

const pkg = {
  title: "TRADE",
  subtitle: "B2B matchmaking and trade-focused buyer introductions.",
  price: "Contact for price",
  features: [
    "All CORE benefits included",
    "Selective 1:1 buyer matching",
    "AI Live Commerce and presentation support",
    "Private negotiation and interpretation assistance",
  ],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 px-6 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <Link href="/seafood-expo/packages" className="inline-flex items-center gap-2 text-cyan-700 hover:text-cyan-900 transition">
            ← Back to packages
          </Link>
          <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-800">Package details</span>
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
          <div className="bg-gradient-to-r from-cyan-600 to-slate-800 px-8 py-12 text-white">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">{pkg.title} package</p>
                <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{pkg.subtitle}</h1>
              </div>
              <div className="rounded-3xl bg-white/10 px-5 py-4 text-center text-sm font-semibold text-white">
                {pkg.price}
              </div>
            </div>
          </div>

          <div className="space-y-10 px-8 py-12 sm:px-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900">Included services</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {pkg.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-600 text-white">✓</div>
                    <p className="text-slate-700">{feature}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid gap-4 sm:grid-cols-2">
              <Link href="/seafood-expo/register" className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-600/20 hover:bg-cyan-700 transition">
                Register this package
              </Link>
              <Link href="/seafood-expo/packages" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-900 hover:bg-slate-50 transition">
                Return to packages
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
