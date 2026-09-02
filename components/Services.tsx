"use client";

import React from "react";

const SERVICES = [
  {
    name: "Electrician",
    description: "Wiring, repairs and installations from licensed pros.",
    badge: "Popular",
    rating: "4.9",
    count: "1.2k",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
      </svg>
    ),
  },
  {
    name: "Home tutor",
    description: "One-on-one lessons for school, college or a new skill.",
    badge: "Trending",
    rating: "4.8",
    count: "850",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6.5A2.5 2.5 0 016.5 4H20v13H6.5A2.5 2.5 0 004 19.5v-13z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 17H6.5A2.5 2.5 0 004 19.5" />
      </svg>
    ),
  },
  {
    name: "Plumber",
    description: "Leaks, fittings and everything under the sink.",
    badge: "Fast response",
    rating: "4.7",
    count: "2.1k",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v4H5v4h4v10h6V11h4V7h-4V3H9z" />
      </svg>
    ),
  },
  {
    name: "Photographer",
    description: "Events, portraits and product shoots.",
    badge: "Top rated",
    rating: "5.0",
    count: "400",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h3l2-2h6l2 2h3v11H4V8z" />
        <circle cx="12" cy="13" r="3.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Web developer",
    description: "Websites and small apps built to spec.",
    badge: "Remote",
    rating: "4.9",
    count: "600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 3 4 3M16 9l4 3-4 3M13.5 6l-3 12" />
      </svg>
    ),
  },
  {
    name: "Event planner",
    description: "Weddings, parties and everything in between.",
    badge: "Full service",
    rating: "4.8",
    count: "1.1k",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-6 w-6">
        <rect x="4" y="5" width="16" height="15" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 10h16M8 3v4M16 3v4" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="bg-[#08090d] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Services near you</span>
            </div>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Verified Professionals <br />
              <span className="text-gray-500 text-3xl sm:text-4xl">Available right now.</span>
            </h2>
          </div>

          <a
            href="/services"
            className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold transition-all hover:bg-white/10"
          >
            Browse all 124 services
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <a
              key={service.name}
              href="#"
              className="group relative flex flex-col rounded-3xl border border-white/5 bg-[#0d0e14] p-8 transition-all hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-500 transition-all group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white">
                  {service.icon}
                </div>
                <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-400 border border-white/5 group-hover:border-indigo-500/30 group-hover:text-indigo-400 transition-colors">
                  {service.badge}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {service.description}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
                <div className="flex items-center gap-1.5 text-sm font-bold text-white">
                   <svg className="h-4 w-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                   </svg>
                  {service.rating}
                  <span className="text-xs font-normal text-gray-500 ml-1">({service.count} reviews)</span>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 transition-all group-hover:bg-indigo-600 group-hover:text-white">
                   <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                   </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}