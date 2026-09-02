const SERVICES = [
  {
    name: "Electrician",
    description: "Wiring, repairs and installations from licensed pros.",
    badge: "Popular",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
      </svg>
    ),
  },
  {
    name: "Home tutor",
    description: "One-on-one lessons for school, college or a new skill.",
    badge: "Trending",
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
    badge: "Fast response",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v4H5v4h4v10h6V11h4V7h-4V3H9z" />
      </svg>
    ),
  },
  {
    name: "Photographer",
    description: "Events, portraits and product shoots.",
    badge: "Top rated",
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
    badge: "Remote ready",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3M16 9l4 3-4 3M13.5 6l-3 12" />
      </svg>
    ),
  },
  {
    name: "Event planner",
    description: "Weddings, parties and everything in between.",
    badge: "Full service",
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
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
          <p className="mb-3 text-sm font-medium text-[#d8a24d]">
            Services near you
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Popular services near you
          </h2>
          <p className="mt-3 text-gray-400">
            These are the ones people book most. Pick one to see verified
            pros in your area, or search for something else above.
          </p>
          </div>

          <a
            href="/services"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-200 transition-colors hover:bg-white/10 hover:text-white"
          >
            Browse all services
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <a
              key={service.name}
              href="#"
              className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/3 p-5 transition-all hover:-translate-y-1 hover:border-[#d8a24d]/40 hover:bg-white/5 hover:shadow-xl hover:shadow-black/20"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d8a24d]/10 text-[#d8a24d] transition-colors group-hover:bg-[#d8a24d] group-hover:text-black">
                {service.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-medium text-white">{service.name}</h3>
                  <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium text-gray-400">
                    {service.badge}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  {service.description}
                </p>
                <p className="mt-3 text-sm font-medium text-[#d8a24d] transition-colors group-hover:text-[#f0c97c]">
                  Explore service →
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}