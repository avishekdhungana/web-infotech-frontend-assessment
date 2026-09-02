
const SERVICES = [
  {
    name: "Electrician",
    description: "Wiring, repairs and installations from licensed pros.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
      </svg>
    ),
  },
  {
    name: "Home tutor",
    description: "One-on-one lessons for school, college or a new skill.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6.5A2.5 2.5 0 016.5 4H20v13H6.5A2.5 2.5 0 004 19.5v-13z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 17H6.5A2.5 2.5 0 004 19.5" />
      </svg>
    ),
  },
  {
    name: "Plumber",
    description: "Leaks, fittings and everything under the sink.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v4H5v4h4v10h6V11h4V7h-4V3H9z" />
      </svg>
    ),
  },
  {
    name: "Photographer",
    description: "Events, portraits and product shoots.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h3l2-2h6l2 2h3v11H4V8z" />
        <circle cx="12" cy="13" r="3.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Web developer",
    description: "Websites and small apps built to spec.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3M16 9l4 3-4 3M13.5 6l-3 12" />
      </svg>
    ),
  },
  {
    name: "Event planner",
    description: "Weddings, parties and everything in between.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5">
        <rect x="4" y="5" width="16" height="15" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 10h16M8 3v4M16 3v4" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="bg-[#08090d] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            Popular services near you
          </h2>
          <p className="mt-3 text-gray-400">
            These are the ones people book most. Pick one to see verified
            pros in your area, or search for something else above.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <a
              key={service.name}
              href="#"
              className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-[#d8a24d]/40 hover:bg-white/[0.05]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#d8a24d]/10 text-[#d8a24d]">
                {service.icon}
              </div>
              <div>
                <h3 className="font-medium text-white">{service.name}</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}