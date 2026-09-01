export default function Hero() {
  return (
    <section className="bg-[#08090d] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm text-gray-400">
          Trusted services directory
        </p>

        <h1 className="max-w-3xl text-5xl font-semibold leading-tight">
          Find the right services.
          <span className="block text-gray-500">All in one place.</span>
        </h1>

        <p className="mt-6 max-w-xl text-gray-400">
          Discover trusted professionals, businesses and services with ease.
        </p>

        <div className="mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="What service are you looking for?"
            className="h-12 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 text-sm outline-none placeholder:text-gray-600"
          />

          <button className="rounded-xl bg-white px-6 text-sm font-semibold text-black hover:bg-gray-200">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}