'use client';

import Image from 'next/image';
import { useState } from 'react';
import logo from '../n.png';

const navLinks = ['Home', 'Services', 'Resources', 'About'];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative border-b border-gray-100 bg-white dark:border-white/10 dark:bg-black">
      <div className="mx-auto flex h-20 max-w-7xl items-center px-6">
        <div className="flex shrink-0 items-center gap-2 md:mr-6 lg:mr-12">
          <Image src={logo} alt="Logo" className="h-9 w-9 rounded-lg object-cover" />
          <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            News Serve
          </span>
        </div>

        <nav className="hidden flex-1 items-center justify-center gap-5 md:flex lg:gap-8">
          <a href="#" className="text-base font-semibold text-gray-600 transition-colors hover:text-blue-500">
            Home
          </a>
          <a href="#" className="text-base font-semibold text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
            Services
          </a>

          <a href="#" className="text-base font-semibold text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
            Categories
          </a>

          <a href="#" className="text-base font-semibold text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
            Resources
          </a>
          <a href="#" className="text-base font-semibold text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
            About
          </a>
        </nav>

        <div className="hidden shrink-0 items-center gap-3 md:flex lg:gap-4">
          <button className="whitespace-nowrap text-base font-semibold text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
            Sign in
          </button>
          <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200 lg:px-5 lg:py-2.5">
            Get Started
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen((value) => !value)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
          className="text-2xl text-gray-900 dark:text-gray-100 md:hidden"
        >
          {mobileMenuOpen ? '×' : '☰'}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="border-t border-gray-100 px-6 py-5 dark:border-white/10 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-base font-semibold text-gray-700 transition-colors hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
                {link}
              </a>
            ))}
            <a href="#" className="text-base font-semibold text-gray-700 transition-colors hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">
              Categories
            </a>
            <button className="w-full rounded-lg bg-gray-900 py-3 font-medium text-white dark:bg-white dark:text-black">
              Get Started
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}