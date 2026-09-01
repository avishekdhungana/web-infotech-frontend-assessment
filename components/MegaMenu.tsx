"use client";

import { useState } from "react";

const categories = [
  {
    title: "Business",
    description: "Everything you need to grow and run your company",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: [
      { name: "Accounting", icon: "📊" },
      { name: "Legal Services", icon: "⚖️" },
      { name: "Marketing", icon: "📣" },
      { name: "Consulting", icon: "💡" },
    ],
  },
  {
    title: "Individual",
    description: "Everyday services designed around your life",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: [
      { name: "Healthcare", icon: "🩺" },
      { name: "Travel", icon: "✈️" },
      { name: "Home Services", icon: "🏠" },
      { name: "Education", icon: "📚" },
    ],
  },
  {
    title: "Digital",
    description: "Modern tech and creative services",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: [
      { name: "Web Development", icon: "💻" },
      { name: "Technology", icon: "⚙️" },
      { name: "Finance", icon: "💰" },
      { name: "Design", icon: "🎨" },
    ],
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative border-b border-white/[0.08] bg-[#08090d] text-white">
      {/* Top bar */}
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-bold text-black shadow-lg shadow-white/10">
            N
          </div>
          <span className="text-lg font-semibold tracking-tight sm:text-xl">
            NexaServe
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          <a
            href="#"
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/[0.05] hover:text-white"
          >
            Home
          </a>

          <a
            href="#"
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/[0.05] hover:text-white"
          >
            Services
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition-all ${
              menuOpen
                ? "bg-white/[0.09] text-white"
                : "text-gray-300 hover:bg-white/[0.05] hover:text-white"
            }`}
          >
            Categories
            <svg
              className={`h-4 w-4 transition-transform duration-200 ${menuOpen ? "rotate-180" : ""}`}
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <a
            href="#"
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/[0.05] hover:text-white"
          >
            Resources
          </a>

          <a
            href="#"
            className="rounded-lg px-3.5 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/[0.05] hover:text-white"
          >
            About
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 sm:flex">
          <button className="rounded-lg px-3.5 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/[0.05] hover:text-white">
            Sign in
          </button>
          <button className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-gray-100 hover:shadow-lg hover:shadow-white/10">
            Get Started
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-gray-200 transition-colors hover:bg-white/[0.08] lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none">
              <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none">
              <path d="M4 6H16M4 10H16M4 14H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* ───── Desktop Mega Menu ───── */}
      {menuOpen && (
        <div className="absolute left-0 right-0 top-[76px] z-50 border-t border-white/[0.08] bg-[#0b0d12]/95 shadow-2xl shadow-black/50 backdrop-blur-2xl">
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-7 flex items-end justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Explore categories
                </p>
                <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-white">
                  Find the right service for you
                </h3>
              </div>
              <button className="hidden text-sm font-medium text-gray-400 transition-colors hover:text-white sm:block">
                View all services →
              </button>
            </div>

            {/* Category cards */}
            <div className="grid gap-4 md:grid-cols-3">
              {categories.map((category) => (
                <div
                  key={category.title}
                  className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition-all duration-200 hover:border-white/[0.14] hover:bg-white/[0.045]"
                >
                  {/* Category header */}
                  <div className="mb-4 flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-gray-300 transition-colors group-hover:bg-white/[0.1] group-hover:text-white">
                      {category.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{category.title}</h4>
                      <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="space-y-0.5">
                    {category.items.map((item) => (
                      <a
                        key={item.name}
                        href="#"
                        className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-gray-400 transition-all hover:bg-white/[0.06] hover:text-white"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="text-base leading-none opacity-80">{item.icon}</span>
                          {item.name}
                        </span>
                        <svg
                          className="h-3.5 w-3.5 text-gray-600 opacity-0 transition-all group-hover:opacity-100"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M6 3l5 5-5 5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA bar */}
            <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/[0.07] bg-gradient-to-r from-white/[0.03] to-white/[0.06] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-sm">
                  🔍
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    Looking for something specific?
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500">
                    Browse our complete service directory
                  </p>
                </div>
              </div>
              <button className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/15">
                View all →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ───── Mobile Menu ───── */}
      {mobileMenuOpen && (
        <nav className="border-t border-white/[0.08] bg-[#08090d] px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-1">
            <a
              href="#"
              className="rounded-xl px-3.5 py-3 text-sm font-medium text-gray-300 hover:bg-white/[0.05] hover:text-white"
            >
              Home
            </a>
            <a
              href="#"
              className="rounded-xl px-3.5 py-3 text-sm font-medium text-gray-300 hover:bg-white/[0.05] hover:text-white"
            >
              Services
            </a>

            {/* Categories accordion */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex w-full items-center justify-between rounded-xl px-3.5 py-3 text-left text-sm font-medium text-gray-300 hover:bg-white/[0.05] hover:text-white"
            >
              Categories
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${menuOpen ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {menuOpen && (
              <div className="ml-2 space-y-4 border-l border-white/10 py-2 pl-4">
                {categories.map((category) => (
                  <div key={category.title}>
                    <div className="mb-2 flex items-center gap-2 px-2">
                      <span className="text-gray-400">{category.icon}</span>
                      <h4 className="text-sm font-semibold text-white">{category.title}</h4>
                    </div>
                    <div className="space-y-0.5">
                      {category.items.map((item) => (
                        <a
                          key={item.name}
                          href="#"
                          className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-gray-500 hover:bg-white/[0.05] hover:text-white"
                        >
                          <span className="text-sm">{item.icon}</span>
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <a
              href="#"
              className="rounded-xl px-3.5 py-3 text-sm font-medium text-gray-300 hover:bg-white/[0.05] hover:text-white"
            >
              Resources
            </a>
            <a
              href="#"
              className="rounded-xl px-3.5 py-3 text-sm font-medium text-gray-300 hover:bg-white/[0.05] hover:text-white"
            >
              About
            </a>

            {/* Mobile CTAs */}
            <div className="mt-5 space-y-2 border-t border-white/[0.08] pt-5">
              <button className="w-full rounded-xl py-3 text-sm font-medium text-gray-300 hover:bg-white/[0.05] hover:text-white">
                Sign in
              </button>
              <button className="w-full rounded-xl bg-white py-3 text-sm font-semibold text-black hover:bg-gray-100">
                Get Started
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}