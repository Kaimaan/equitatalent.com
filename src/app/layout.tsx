// 'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navItems = [
  { label: "Palvelut", href: "/palvelut" },
  { label: "Ehdokkaille", href: "/ehdokkaille" },
  { label: "Tiimi", href: "/tiimi" },
  { label: "Avoimet Tehtävät", href: "/avoimet-tehtavat" },
  { label: "Yhteydenotto", href: "/yhteydenotto" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Sticky header with logo and nav */}
        <header className="sticky top-0 z-20 w-full bg-white/80 backdrop-blur border-b border-gray-100 shadow-sm">
          <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 sm:py-4 relative">
            <div className="flex items-center gap-2">
              <Link href="/">
                <Image src="/images/equita-logo.svg" alt="Equita Logo" width={110} height={36} priority className="drop-shadow-md" />
              </Link>
            </div>
            {/* Desktop nav */}
            <nav className="hidden md:block">
              <ul className="flex gap-7">
                {navItems.map((item) => (
                  <li key={item.href}>
                    {item.href.startsWith("/") ? (
                      <Link
                        href={item.href}
                        className="font-medium text-gray-700 hover:text-blue-700 transition-colors px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="font-medium text-gray-700 hover:text-blue-700 transition-colors px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            {/* Hamburger button for mobile */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
              aria-label="Avaa valikko"
              onClick={() => setMobileNavOpen((open) => !open)}
            >
              <span className="block w-6 h-0.5 bg-gray-800 mb-1 rounded transition-all" style={{ transform: mobileNavOpen ? 'rotate(45deg) translateY(7px)' : 'none' }}></span>
              <span className={`block w-6 h-0.5 bg-gray-800 mb-1 rounded transition-all ${mobileNavOpen ? 'opacity-0' : ''}`}></span>
              <span className="block w-6 h-0.5 bg-gray-800 rounded transition-all" style={{ transform: mobileNavOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }}></span>
            </button>
            {/* Mobile nav overlay */}
            {mobileNavOpen && (
              <div className="fixed inset-0 z-30 bg-black/40 flex justify-end md:hidden" onClick={() => setMobileNavOpen(false)}>
                <nav
                  className="bg-white w-64 h-full shadow-lg p-8 flex flex-col gap-6 animate-slide-in-right"
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    className="self-end mb-6 text-2xl text-gray-500 hover:text-gray-800 focus:outline-none"
                    aria-label="Sulje valikko"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    ×
                  </button>
                  <ul className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        {item.href.startsWith("/") ? (
                          <Link
                            href={item.href}
                            className="font-medium text-gray-700 hover:text-blue-700 text-lg transition-colors"
                            onClick={() => setMobileNavOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <a
                            href={item.href}
                            className="font-medium text-gray-700 hover:text-blue-700 text-lg transition-colors"
                            onClick={() => setMobileNavOpen(false)}
                          >
                            {item.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </header>
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-gray-100 flex flex-col">
          {children}
          {/* Simple footer */}
          <footer className="w-full py-6 flex justify-center items-center text-gray-400 text-sm border-t border-gray-100 bg-white/70 mt-auto">
            &copy; 2024 Equita Talent Partners
          </footer>
        </div>
      </body>
    </html>
  );
}

// Add slide-in animation for mobile menu
// In your globals.css, add:
// @keyframes slide-in-right { from { transform: translateX(100%); } to { transform: translateX(0); } }
// .animate-slide-in-right { animation: slide-in-right 0.2s ease; }
