import Link from "next/link";

const packages = [
  { id: "core", title: "CORE", description: "Basic participation package for expo access and market immersion." },
  { id: "trade", title: "TRADE", description: "B2B matchmaking package with buyer introductions and trade support." },
  { id: "market-entry", title: "MARKET ENTRY", description: "Deeper market entry advisory and customized partnership planning." },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 px-6 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">Seafood Packages</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Choose your package</h1>
          <p className="mt-4 text-slate-600">Select the package that best fits your seafood export goals and partner engagement needs.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <Link
              key={pkg.id}
              href={`/seafood-expo/packages/${pkg.id}`}
              className="group rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-cyan-400 hover:shadow-xl"
            >
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">{pkg.title}</div>
              <h2 className="mt-4 text-2xl font-semibold text-slate-950">{pkg.title}</h2>
              <p className="mt-4 text-slate-600">{pkg.description}</p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600">
                View package details →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
