export default function CTA() {
  return (
    <section className="bg-[#08090d] px-6 pb-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-10 sm:p-14 md:flex-row md:items-center md:justify-between">
          <div className="max-w-lg">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Know a skill worth booking?
            </h2>
            <p className="mt-3 text-gray-400">
              List your services, set your own rates, and get matched with
              people looking for exactly what you do.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <button className="h-12 rounded-xl bg-[#d8a24d] px-6 text-sm font-semibold text-black transition-colors hover:bg-[#e6b563]">
              Become a provider
            </button>
            <button className="h-12 rounded-xl border border-white/15 px-6 text-sm font-medium text-white transition-colors hover:bg-white/5">
              Learn how it works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
