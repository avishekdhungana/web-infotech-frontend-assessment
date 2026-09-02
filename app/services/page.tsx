import Header from "../../components/header";
import Services from "../../components/Services";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";

const highlights = [
  {
    title: "Verified providers",
    copy: "Profiles, reviews, and skills checked before they appear in search.",
  },
  {
    title: "Fast matching",
    copy: "Find the right service by location, budget, and availability.",
  },
  {
    title: "Built for trust",
    copy: "Clear pricing, service details, and direct contact paths.",
  },
];

const steps = [
  {
    number: "01",
    title: "Describe what you need",
    copy: "Choose a category or search from the services below.",
  },
  {
    number: "02",
    title: "Compare options",
    copy: "Review service types, ratings, and quick descriptions.",
  },
  {
    number: "03",
    title: "Book with confidence",
    copy: "Connect with the provider that fits your timeline.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#08090d] text-white">
      <Header />

      <section className="relative overflow-hidden px-6 py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#d8a24d]/15 blur-3xl"
        />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium text-[#d8a24d]">Services page</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              A more direct way to discover local services.
            </h1>
            <p className="mt-5 max-w-2xl text-gray-400">
              Explore the categories from the mega menu in a dedicated page with
              clearer service details, stronger visual hierarchy, and an easier
              path to book the right provider.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/3 p-5">
                <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                <p className="mt-2 text-sm text-gray-400">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Services />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#d8a24d]">How it works</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                Simple steps, less guesswork.
              </h2>
            </div>
            <a
              href="/"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-200 transition-colors hover:bg-white/10 hover:text-white"
            >
              Back to home
            </a>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="rounded-3xl border border-white/10 bg-white/3 p-6">
                <p className="text-sm font-semibold tracking-[0.2em] text-[#d8a24d]">{step.number}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
