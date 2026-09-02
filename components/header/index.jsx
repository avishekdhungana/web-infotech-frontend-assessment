'use client';

import { useState } from 'react';

const categories = [
  {
    title: 'Home Services',
    description: 'Verified experts for your household needs',
    color: 'from-blue-500/20 to-blue-600/5',
    iconBg: 'bg-blue-500/15 text-blue-400',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    items: [
      { name: 'Electrician', desc: 'Wiring & power repairs' },
      { name: 'Plumber', desc: 'Pipes & leak fixes' },
      { name: 'House Cleaner', desc: 'Deep cleaning & laundry' },
      { name: 'HVAC Repair', desc: 'AC & heating services' },
    ],
  },
  {
    title: 'Professional',
    description: 'Expert advice and learning support',
    color: 'from-emerald-500/20 to-emerald-600/5',
    iconBg: 'bg-emerald-500/15 text-emerald-400',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    items: [
      { name: 'Home Tutor', desc: 'Academics & skills' },
      { name: 'Legal Services', desc: 'Contracts & compliance' },
      { name: 'Marketing', desc: 'Growth & branding' },
      { name: 'Consulting', desc: 'Strategy & advice' },
    ],
  },
  {
    title: 'Digital',
    description: 'Tech repairs and creative solutions',
    color: 'from-violet-500/20 to-violet-600/5',
    iconBg: 'bg-violet-500/15 text-violet-400',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    items: [
      { name: 'Mobile Repair', desc: 'Screens & hardware' },
      { name: 'Web Development', desc: 'Sites & apps' },
      { name: 'Technology', desc: 'IT & software support' },
      { name: 'Design', desc: 'UI/UX & branding' },
    ],
  },
];
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative border-b border-white/[0.07] bg-[#08090d] text-white">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[15px] font-bold text-black shadow-lg shadow-white/10">
            N
          </div>
          <span className="text-lg font-semibold tracking-tight">NexaServe</span>
        </div>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {['Home', 'Services'].map((item) => (
            <a
              key={item}
              href={item === 'Services' ? '/services' : '/'}
              className="rounded-lg px-3.5 py-2 text-[13.5px] font-medium text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              {item}
            </a>
          ))}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[13.5px] font-medium transition-all ${
              menuOpen
                ? 'bg-white/8 text-white'
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            Categories
            <svg
              className={`h-3.5 w-3.5 transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`}
              viewBox="0 0 20 20"
              fill="none"
            >
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {['Resources', 'About'].map((item) => (
            <a
              key={item}
              href="#"
              className="rounded-lg px-3.5 py-2 text-[13.5px] font-medium text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <button className="rounded-lg px-3.5 py-2 text-[13.5px] font-medium text-gray-400 transition-colors hover:bg-white/5 hover:text-white">
            Sign in
          </button>
          <button className="rounded-xl bg-white px-4 py-2 text-[13.5px] font-semibold text-black transition-all hover:bg-gray-100">
            Get Started
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/3 lg:hidden"
        >
          {mobileMenuOpen ? (
            <svg className="h-4.5 w-4.5" viewBox="0 0 20 20" fill="none">
              <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg className="h-4.5 w-4.5" viewBox="0 0 20 20" fill="none">
              <path d="M4 6H16M4 10H16M4 14H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute left-0 right-0 top-18 z-50 border-t border-white/6 bg-[#0a0b10]/95 shadow-2xl shadow-black/60 backdrop-blur-2xl">
          <div className="mx-auto max-w-7xl px-5 py-9 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Browse by category
                </p>
                <h3 className="mt-1 text-[22px] font-semibold tracking-tight text-white">
                  What do you need help with?
                </h3>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {categories.map((cat) => (
                <div
                  key={cat.title}
                  className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-linear-to-b ${cat.color} p-6 transition-all duration-300 hover:border-white/16 hover:shadow-xl hover:shadow-black/40`}
                >
                  <div className="mb-5 flex items-center gap-3.5">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${cat.iconBg}`}>
                      {cat.icon}
                    </div>
                    <div>
                      <h4 className="text-[15px] font-semibold text-white">{cat.title}</h4>
                      <p className="text-[12.5px] text-gray-500">{cat.description}</p>
                    </div>
                  </div>

                  <div className="space-y-1">
                    {cat.items.map((item) => (
                      <a
                        key={item.name}
                        href="#"
                        className="flex items-center justify-between rounded-xl px-3 py-2.5 transition-all hover:bg-white/6"
                      >
                        <div>
                          <p className="text-[13.5px] font-medium text-gray-200 group-hover:text-white">
                            {item.name}
                          </p>
                          <p className="text-[12px] text-gray-500">{item.desc}</p>
                        </div>
                        <svg
                          className="h-4 w-4 text-gray-600 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {mobileMenuOpen && (
        <nav className="border-t border-white/[0.07] bg-[#08090d] px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-1">
            {['Home', 'Services'].map((item) => (
              <a key={item} href="#" className="rounded-xl px-3.5 py-3 text-[14px] font-medium text-gray-300 hover:bg-white/5">
                {item}
              </a>
            ))}

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex w-full items-center justify-between rounded-xl px-3.5 py-3 text-left text-[14px] font-medium text-gray-300 hover:bg-white/5"
            >
              Categories
              <svg className={`h-4 w-4 transition-transform ${menuOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="none">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {menuOpen && (
              <div className="ml-1 space-y-5 border-l border-white/10 py-3 pl-4">
                {categories.map((cat) => (
                  <div key={cat.title}>
                    <div className="mb-2 flex items-center gap-2.5 px-1">
                      <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${cat.iconBg}`}>
                        {cat.icon}
                      </div>
                      <span className="text-[13.5px] font-semibold text-white">{cat.title}</span>
                    </div>
                    {cat.items.map((item) => (
                      <a
                        key={item.name}
                        href="#"
                        className="block rounded-lg px-2.5 py-2 text-[13.5px] text-gray-400 hover:bg-white/5 hover:text-white"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {['Resources', 'About'].map((item) => (
              <a key={item} href="#" className="rounded-xl px-3.5 py-3 text-[14px] font-medium text-gray-300 hover:bg-white/5">
                {item}
              </a>
            ))}

            <div className="mt-5 space-y-2 border-t border-white/[0.07] pt-5">
              <button className="w-full rounded-xl py-3 text-[14px] font-medium text-gray-300 hover:bg-white/5">
                Sign in
              </button>
              <button className="w-full rounded-xl bg-white py-3 text-[14px] font-semibold text-black">
                Get Started
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
