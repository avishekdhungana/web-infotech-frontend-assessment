"use client";

import React from "react";

const FOOTER_LINKS = [
  {
    heading: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#", badge: "Hiring" },
      { name: "Press", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    heading: "For customers",
    links: [
      { name: "How it works", href: "#" },
      { name: "Browse services", href: "#" },
      { name: "Reviews", href: "#" },
      { name: "Help center", href: "#" },
    ],
  },
  {
    heading: "For providers",
    links: [
      { name: "Become a provider", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Success stories", href: "#" },
      { name: "Resources", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { name: "Terms of service", href: "#" },
      { name: "Privacy policy", href: "#" },
      { name: "Cookie policy", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#08090d] pt-24 pb-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
             <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[15px] font-bold text-black shadow-lg shadow-white/10">
            N
          </div>
              <span className="text-xl font-bold tracking-tight">
                NexaServe
              </span>
            </div>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-gray-500">
              The world's most trusted platform for finding verified local professionals. Book with confidence, every single time.
            </p>
            
            <div className="mt-10">
              <p className="text-sm font-semibold text-white mb-4">Stay updated</p>
              <form className="flex max-w-sm gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="h-11 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none focus:border-indigo-500/50"
                />
                <button className="h-11 rounded-xl bg-white px-4 text-sm font-bold text-black hover:bg-gray-200 transition-colors">
                  Join
                </button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {FOOTER_LINKS.map((column) => (
              <div key={column.heading}>
                <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-500">
                  {column.heading}
                </h4>
                <ul className="mt-6 space-y-4">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="group flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-white"
                      >
                        {link.name}
                        {link.badge && (
                          <span className="rounded-full bg-indigo-500/10 px-2 py-0.5 text-[10px] font-bold text-indigo-400 border border-indigo-500/20">
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-10 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} NexaServe Technologies Inc.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-600">
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Systems operational
              </span>
              <span>v2.4.0</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {[
              { 
                name: "Twitter", 
                icon: (
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                ) 
              },
              { 
                name: "Instagram", 
                icon: (
                  <>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
                  </>
                ) 
              },
              { 
                name: "LinkedIn", 
                icon: (
                  <>
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </>
                ) 
              }
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                aria-label={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-gray-500 transition-all hover:border-white/10 hover:bg-white/10 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}