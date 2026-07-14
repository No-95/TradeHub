type Track = {
  id: number;
  name: string;
  target: string;
  region: string;
  status: 'Open for partnership' | 'Actively recruiting';
};

const tracks: Track[] = [
  {
    id: 1,
    name: 'Regional Distribution Partners',
    target: 'Importers & Logistics Providers',
    region: 'Southeast Asia / East Asia',
    status: 'Open for partnership',
  },
  {
    id: 2,
    name: 'Co-Investment Frameworks',
    target: 'Institutional Investors & Private Equity',
    region: 'Global Digital Infrastructure',
    status: 'Actively recruiting',
  },
  {
    id: 3,
    name: 'Supply Chain Integration',
    target: 'Certified Manufacturers & Enterprise Suppliers',
    region: 'International Trade Hubs',
    status: 'Open for partnership',
  },
];

export default function ActiveTracks() {
  return (
    <section id="openings" className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Active Strategic Tracks — 2026
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Immediate partnership opportunities aligned with our current growth
            objectives.
          </p>
        </div>
        <div className="mt-16 flow-root">
          <div className="-mx-6 -my-2 overflow-x-auto sm:-mx-8 lg:-mx-0">
            <div className="inline-block min-w-full align-middle py-2 sm:px-8 lg:px-0">
              <table className="min-w-full divide-y divide-slate-200 bg-white shadow-sm ring-1 ring-slate-900/5 sm:rounded-lg">
                <thead className="bg-slate-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 sm:pl-6"
                    >
                      Strategic Track
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
                    >
                      Target Partner Profile
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
                    >
                      Region
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {tracks.map((track) => (
                    <tr key={track.id} className="hover:bg-slate-50 transition-colors">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-900 sm:pl-6">
                        {track.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-600">
                        {track.target}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-slate-600">
                        {track.region}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            track.status === 'Open for partnership'
                              ? 'bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20'
                              : 'bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10'
                          }`}
                        >
                          {track.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
