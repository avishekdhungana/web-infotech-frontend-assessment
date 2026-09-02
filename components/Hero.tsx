"use client";

import React from "react";
import { 
  ArrowRight, 
  Play, 
  Search, 
  Star, 
  ShieldCheck, 
  TrendingUp,
  CheckCircle2
} from "lucide-react";
import { Fraunces, Inter } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600"],
  style: ["italic"],
});

const inter = Inter({ subsets: ["latin"] });

export default function Hero() {
  return (
    <section className={`relative overflow-hidden bg-white ${inter.className}`}>
    
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-indigo-50/50 blur-3xl" />
        <div className="absolute top-1/2 -left-24 h-72 w-72 rounded-full bg-blue-50/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 lg:grid lg:grid-cols-2 lg:gap-12 lg:pt-40 lg:pb-32">
        
       
        <div className="flex flex-col justify-center text-center lg:text-left">
          <div className="mx-auto lg:mx-0 flex w-fit items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/50 px-4 py-1.5 text-sm font-medium text-indigo-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
            </span>
            Trusted by 10,000+ users
          </div>

          <h1 className={`${fraunces.className} mt-8 text-4xl font-semibold leading-[1.1] text-slate-900 sm:text-6xl lg:text-7xl`}>
            Find someone who <br />
            <span className="text-indigo-600">actually knows</span> <br />
            what they&apos;re doing.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 lg:max-w-lg">
            Search verified electricians, tutors, and pros. See real reviews 
            and book trusted help in minutes from one simple platform.
          </p>

          {/* Search Bar Component Area */}
          <div className="mt-10 max-w-2xl">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:rounded-2xl sm:border sm:border-slate-200 sm:bg-white sm:p-2 sm:shadow-lg sm:shadow-slate-200/50">
              <div className="relative flex flex-1 items-center">
                <Search className="absolute left-4 h-5 w-5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="What service do you need?"
                  className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 text-slate-900 outline-none focus:border-indigo-500 sm:border-none sm:h-12"
                />
              </div>
              <button className="h-14 rounded-xl bg-indigo-600 px-8 font-bold text-white transition-all hover:bg-indigo-700 active:scale-[0.98] sm:h-12">
                Search
              </button>
            </div>
          </div>

          {/* CTAs & Stats */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <button className="flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-slate-800">
              Explore Services
              <ArrowRight size={18} />
            </button>
            <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition-colors hover:bg-slate-50">
              <Play size={18} className="fill-indigo-600 text-indigo-600" />
              Watch Demo
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-slate-100 pt-8 text-center lg:text-left">
            <div>
              <div className="text-2xl font-bold text-slate-900">124+</div>
              <div className="text-sm text-slate-500">Service Types</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">4.9/5</div>
              <div className="text-sm text-slate-500">User Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">24h</div>
              <div className="text-sm text-slate-500">Support</div>
            </div>
          </div>
        </div>

        {/* Right Visual (Interactive Mockup) */}
        <div className="relative mt-16 lg:mt-0">
          <div className="relative mx-auto max-w-[540px] lg:max-w-none">
            
            {/* The Main "Dashboard" UI */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-indigo-100">
              <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-slate-300" />
                  <div className="h-3 w-3 rounded-full bg-slate-300" />
                  <div className="h-3 w-3 rounded-full bg-slate-300" />
                </div>
                <div className="ml-4 rounded-md bg-white border border-slate-200 px-3 py-1 text-[10px] text-slate-400">
                  nexaserve.com/search/results
                </div>
              </div>

              <div className="p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div className="h-4 w-32 rounded bg-slate-100" />
                  <div className="h-4 w-12 rounded bg-indigo-50" />
                </div>
                
                {/* Mock List of Services */}
                <div className="space-y-4">
                  {[
                    { name: "Sarah Jenkins", role: "Math Tutor", rate: 4.9, img: "SJ", color: "bg-blue-100 text-blue-600" },
                    { name: "David Miller", role: "Electrician", rate: 4.8, img: "DM", color: "bg-amber-100 text-amber-600" },
                    { name: "Alex Rivera", role: "Web Dev", rate: 5.0, img: "AR", color: "bg-indigo-100 text-indigo-600" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 rounded-xl border border-slate-100 p-4 transition-colors hover:border-indigo-100 hover:bg-indigo-50/30">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold ${item.color}`}>
                        {item.img}
                      </div>
                      <div className="flex-1">
                        <div className="h-3 w-24 rounded bg-slate-200 mb-2" />
                        <div className="h-2 w-16 rounded bg-slate-100" />
                      </div>
                      <div className="flex items-center gap-1 text-sm font-bold text-slate-700">
                        <Star size={14} className="fill-amber-400 text-amber-400" />
                        {item.rate}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Badge 1: Verified */}
            <div className="absolute -left-6 top-1/4 hidden animate-bounce sm:flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl shadow-indigo-100 border border-slate-100 [animation-duration:3s]">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <ShieldCheck size={2} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Verified Pros</p>
                <p className="text-[10px] text-slate-500">Identity & Skill checked</p>
              </div>
            </div>

            
            <div className="absolute -right-4 bottom-12 hidden sm:flex items-center gap-3 rounded-2xl bg-slate-900 p-4 shadow-xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-white">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Trending Up</p>
                <p className="text-[10px] text-indigo-300">1.2k bookings today</p>
              </div>
            </div>

            {/* Quality Check Card */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-[280px] rounded-2xl border border-slate-200 bg-white/80 p-4 backdrop-blur-md shadow-lg sm:max-w-[320px]">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 size={16} className="text-indigo-600" />
                <span className="text-xs font-bold text-slate-800">Quality Guarantee</span>
              </div>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-7 w-7 rounded-full border-2 border-white bg-slate-200" />
                ))}
                <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-indigo-600 text-[10px] font-bold text-white">
                  +12
                </div>
                <span className="ml-4 text-[11px] text-slate-500 pt-1.5">Joined today</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}