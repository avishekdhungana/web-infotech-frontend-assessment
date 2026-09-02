"use client";

import Image from "next/image";
import { useState } from "react";
import heroImage from "../hero.png";

const CATEGORIES = [
  "Electrician",
  "Home tutor",
  "Plumber",
  "Photographer",
  "Web developer",
  "Event planner",
];

export default function Hero() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  function handleCategoryClick(category: string) {
    if (activeCategory === category) {
      setActiveCategory(null);
      setQuery("");
      return;
    }
    setActiveCategory(category);
    setQuery(category);
  }

  return (
    <section className="relative overflow-hidden bg-[#08090d] px-6 py-24 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/4 h-105 w-105 rounded-full bg-[#d8a24d]/10 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm text-[#d8a24d]">
            For people who&apos;d rather not guess who to call
          </p>

          <h1 className="max-w-xl text-5xl font-semibold leading-[1.1] tracking-tight">
            Find someone who actually knows what they&apos;re doing.
          </h1>

          <p className="mt-6 max-w-md text-gray-400">
            Search verified electricians, tutors, plumbers and hundreds of
            other local pros — see their real reviews before you book.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What do you need help with?"
              className="h-12 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 text-sm outline-none placeholder:text-gray-600 focus:border-[#d8a24d]/50"
            />
            <button
              type="submit"
              className="h-12 rounded-xl bg-[#d8a24d] px-6 text-sm font-semibold text-black transition-colors hover:bg-[#e6b563]"
            >
              Search
            </button>
          </form>

          <div className="mt-4 flex flex-wrap gap-2">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryClick(category)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs transition-colors ${
                    isActive
                      ? "border-[#d8a24d] bg-[#d8a24d]/10 text-[#d8a24d]"
                      : "border-white/10 text-gray-400 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-gray-500">
            <div className="flex -space-x-2">
              {["RB", "SK", "AM", "PT"].map((initials) => (
                <div
                  key={initials}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#08090d] bg-white/10 text-[10px] font-medium text-gray-300"
                >
                  {initials}
                </div>
              ))}
            </div>
            <span>Joined by 3,000+ people booking services this month</span>
          </div>
        </div>

        <div className=" flex mr-0 relative aspect-4/3 w-full h-full  rounded-2x">
          <Image
            src={heroImage}
            alt="A service professional at work"
            fill
            className=" h-full  object-cover"
          />
        </div>
      </div>
    </section>
  );
}