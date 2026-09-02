"use client";

import React from "react";

export default function CTA() {
  return (
    <section className="bg-[#08090d] px-6 pb-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0d0e14] p-8 sm:p-16">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-indigo-600/10 blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-blue-600/10 blur-[100px]" />

          <div className="relative z-10 flex flex-col items-center text-center lg:flex-row lg:text-left lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-1.5 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-indigo-500" />
                <span className="text-xs font-medium text-gray-300 uppercase tracking-widest">Partner with us</span>
              </div>
              
              <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
                Know a skill worth booking? <br />
                <span className="text-gray-500">Start earning today.</span>
              </h2>
              
              <p className="mt-6 text-lg text-gray-400">
                List your services, set your own rates, and get matched with 
                people looking for exactly what you do. Join our 3,000+ experts.
              </p>
            </div>

            <div className="mt-10 flex w-full flex-col gap-4 sm:flex-row sm:justify-center lg:mt-0 lg:w-auto">
              <button className="group relative flex h-14 items-center justify-center gap-2 overflow-hidden rounded-2xl bg-indigo-600 px-8 font-bold text-white transition-all hover:bg-indigo-500 active:scale-95">
                Become a provider
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button className="flex h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 font-bold text-white transition-all hover:bg-white/10 hover:border-white/20 active:scale-95">
                Learn how it works
              </button>
            </div>
          </div>

          <div className="relative z-10 mt-16 grid grid-cols-2 gap-8 border-t border-white/5 pt-10 sm:grid-cols-4">
            {[
              { label: "Providers", value: "3,000+" },
              { label: "Bookings", value: "120k" },
              { label: "Countries", value: "12+" },
              { label: "Avg. Rating", value: "4.9/5" }
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}