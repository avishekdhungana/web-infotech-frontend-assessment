    // "use client";

    // import { useState, useEffect, useRef } from "react";

    // const categoryGroups = [
    //   {
    //     title: "Personal Services",
    //     items: [
    //       { name: "Home Tutor", icon: "📚", desc: "Personalized learning at home" },
    //       { name: "Electrician", icon: "⚡", desc: "Wiring, repairs and installations" },
    //       { name: "Plumber", icon: "🔧", desc: "Pipe repairs and plumbing solutions" },
    //     ],
    //   },
    //   {
    //     title: "Business",
    //     items: [
    //       { name: "Legal Services", icon: "⚖️", desc: "Corporate and personal law" },
    //       { name: "Marketing", icon: "📣", desc: "Digital growth and branding" },
    //       { name: "Consulting", icon: "💡", desc: "Expert business strategy" },
    //     ],
    //   },
    //   {
    //     title: "Digital",
    //     items: [
    //       { name: "Mobile Repair", icon: "📱", desc: "Screen and hardware fixes" },
    //       { name: "Web Development", icon: "💻", desc: "Modern websites and apps" },
    //       { name: "Digital Services", icon: "⚙️", desc: "Cloud and IT infrastructure" },
    //     ],
    //   },
    // ];

    // export default function Header() {
    //   const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    //   const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
    //   const menuRef = useRef<HTMLDivElement>(null);

    //   useEffect(() => {
    //     const handleKeyDown = (e: KeyboardEvent) => {
    //       if (e.key === "Escape") {
    //         setIsMegaMenuOpen(false);
    //         setIsMobileMenuOpen(false);
    //       }
    //     };
    //     window.addEventListener("keydown", handleKeyDown);
    //     return () => window.removeEventListener("keydown", handleKeyDown);
    //   }, []);

    //   useEffect(() => {
    //     if (isMobileMenuOpen) {
    //       document.body.style.overflow = "hidden";
    //     } else {
    //       document.body.style.overflow = "unset";
    //     }
    //   }, [isMobileMenuOpen]);

    //   useEffect(() => {
    //     const handleClickOutside = (event: MouseEvent) => {
    //       if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
    //         setIsMegaMenuOpen(false);
    //       }
    //     };
    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => document.removeEventListener("mousedown", handleClickOutside);
    //   }, []);

    //   return (
    //     <header className="sticky top-0 z-[100] border-b border-white/[0.08] bg-[#08090d]/80 backdrop-blur-md">
    //       <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
    //         <div className="flex items-center gap-3">
    //           <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold text-white shadow-lg shadow-indigo-500/20">
    //             N
    //           </div>
    //           <span className="text-xl font-bold tracking-tight text-white">
    //             NexaServe
    //           </span>
    //         </div>

    //         <nav className="hidden items-center gap-2 lg:flex" ref={menuRef}>
    //           <NavLink href="/">Home</NavLink>
    //           <NavLink href="/services">Services</NavLink>
            
    //           <button
    //             onMouseEnter={() => setIsMegaMenuOpen(true)}
    //             onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
    //             className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
    //               isMegaMenuOpen ? "bg-white/10 text-white" : "text-gray-400 hover:text-white"
    //             }`}
    //           >
    //             Categories
    //             <ChevronIcon isOpen={isMegaMenuOpen} />
    //           </button>

    //           <NavLink href="/resources">Resources</NavLink>
    //           <NavLink href="/about">About</NavLink>
    //         </nav>

    //         <div className="hidden items-center gap-4 lg:flex">
    //           <button className="text-sm font-medium text-gray-400 hover:text-white">Sign in</button>
    //           <button className="rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30">
    //             Get Started
    //           </button>
    //         </div>

    //         <button
    //           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    //           className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 lg:hidden"
    //         >
    //           {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
    //         </button>
    //       </div>

    //       {isMegaMenuOpen && (
    //         <div 
    //           className="absolute inset-x-0 top-[72px] hidden border-b border-white/[0.08] bg-[#0b0d12] shadow-2xl lg:block animate-in fade-in slide-in-from-top-2 duration-200"
    //           onMouseLeave={() => setIsMegaMenuOpen(false)}
    //         >
    //           <div className="mx-auto grid max-w-7xl grid-cols-4 gap-8 px-8 py-10">
    //             {categoryGroups.map((group) => (
    //               <div key={group.title}>
    //                 <h3 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-indigo-500">
    //                   {group.title}
    //                 </h3>
    //                 <div className="flex flex-col gap-1">
    //                   {group.items.map((item) => (
    //                     <a
    //                       key={item.name}
    //                       href="#"
    //                       className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-white/[0.04]"
    //                     >
    //                       <span className="text-xl">{item.icon}</span>
    //                       <div>
    //                         <p className="text-sm font-semibold text-white group-hover:text-indigo-400">{item.name}</p>
    //                         <p className="text-xs text-gray-500">{item.desc}</p>
    //                       </div>
    //                     </a>
    //                   ))}
    //                 </div>
    //               </div>
    //             ))}

    //             <div className="rounded-2xl bg-indigo-600/10 border border-indigo-500/20 p-6">
    //               <span className="rounded-full bg-indigo-500/20 px-2.5 py-1 text-[10px] font-bold uppercase text-indigo-400">
    //                 Trending
    //               </span>
    //               <h4 className="mt-4 font-semibold text-white">NexaServe for Business</h4>
    //               <p className="mt-2 text-xs leading-relaxed text-gray-400">
    //                 Verified professional tools for growing service providers.
    //               </p>
    //               <button className="mt-4 text-xs font-bold text-indigo-400 hover:text-indigo-300">
    //                 Learn more →
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       )}

    //       {isMobileMenuOpen && (
    //         <div className="fixed inset-0 top-[72px] z-[90] bg-[#08090d] lg:hidden">
    //           <nav className="flex h-full flex-col overflow-y-auto px-6 py-8">
    //             <div className="flex flex-col gap-2">
    //               <MobileNavLink href="/">Home</MobileNavLink>
    //               <MobileNavLink href="/services">Services</NavLink>
                
    //               <div className="flex flex-col">
    //                 <button 
    //                   onClick={() => setMobileAccordion(mobileAccordion === "cat" ? null : "cat")}
    //                   className="flex items-center justify-between py-4 text-lg font-medium text-white"
    //                 >
    //                   Categories
    //                   <ChevronIcon isOpen={mobileAccordion === "cat"} />
    //                 </button>
    //                 {mobileAccordion === "cat" && (
    //                   <div className="mt-2 flex flex-col gap-6 pl-4 border-l border-white/10">
    //                     {categoryGroups.map(group => (
    //                       <div key={group.title}>
    //                         <p className="mb-3 text-[10px] font-bold uppercase text-indigo-500 tracking-wider">{group.title}</p>
    //                         <div className="grid gap-4">
    //                           {group.items.map(item => (
    //                             <a key={item.name} href="#" className="flex items-center gap-3">
    //                               <span>{item.icon}</span>
    //                               <span className="text-sm text-gray-400">{item.name}</span>
    //                             </a>
    //                           ))}
    //                         </div>
    //                       </div>
    //                     ))}
    //                   </div>
    //                 )}
    //               </div>

    //               <MobileNavLink href="/resources">Resources</MobileNavLink>
    //               <MobileNavLink href="/about">About</MobileNavLink>
    //             </div>

    //             <div className="mt-auto pb-10 pt-10">
    //               <button className="w-full rounded-xl bg-indigo-600 py-4 font-bold text-white">
    //                 Get Started
    //               </button>
    //               <button className="mt-4 w-full py-2 text-sm font-medium text-gray-500">
    //                 Sign in to your account
    //               </button>
    //             </div>
    //           </nav>
    //         </div>
    //       )}
    //     </header>
    //   );
    // }

    // function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    //   return (
    //     <a
    //       href={href}
    //       className="rounded-full px-4 py-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
    //     >
    //       {children}
    //     </a>
    //   );
    // }

    // function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
    //   return (
    //     <a href={href} className="py-4 text-lg font-medium text-white border-b border-white/[0.05]">
    //       {children}
    //     </a>
    //   );
    // }

    // function ChevronIcon({ isOpen }: { isOpen: boolean }) {
    //   return (
    //     <svg
    //       className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
    //       viewBox="0 0 20 20"
    //       fill="none"
    //       stroke="currentColor"
    //     >
    //       <path d="M5 7.5L10 12.5L15 7.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    //     </svg>
    //   );
    // }

    // function MenuIcon() {
    //   return (
    //     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
    //       <path d="M3 5H17M3 10H17M3 15H17" strokeWidth="1.5" strokeLinecap="round" />
    //     </svg>
    //   );
    // }

    // function CloseIcon() {
    //   return (
    //     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
    //       <path d="M5 5L15 15M15 5L5 15" strokeWidth="1.5" strokeLinecap="round" />
    //     </svg>
    //   );
    // }