"use client";
import Link from "next/link";
import { useState } from "react";
import { CTAButton } from "./CTAButton";
import { Logo } from "./Logo";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/risks", label: "Risks" },
  { href: "/why-now", label: "Why Now" },
  { href: "/what-you-get", label: "What You Get" },
  { href: "/faq", label: "FAQ" },
  { href: "/#contact", label: "Request" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-gradient-to-b from-base via-base to-base/80 border-b border-accent/20 shadow-glowDim animate-slideDown">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300 group">
          <div className="p-1.5 rounded-lg bg-gradient-to-br from-accent to-accentDark group-hover:shadow-glowStrong transition-all duration-300">
            <Logo />
          </div>
          <span className="font-display text-xl font-semibold text-textBright hidden sm:inline">Jalwan</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-subtle">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="relative hover:text-accent transition-colors duration-300 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accentDark group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <CTAButton href="/#contact">Get Tested</CTAButton>
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-text hover:border-accent hover:text-accent transition-all duration-300 hover:bg-accent/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 transition-transform duration-300" style={{ transform: open ? 'rotate(90deg)' : 'rotate(0)' }}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-accent/20 bg-gradient-to-b from-base to-base/95 backdrop-blur animate-slideDown">
          <div className="max-w-6xl mx-auto px-6 py-4 space-y-3 text-sm text-subtle">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 hover:text-accent transition-colors duration-300 group"
                onClick={() => setOpen(false)}
              >
                <span className="relative">
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accentDark group-hover:w-full transition-all duration-300"></span>
                </span>
              </Link>
            ))}
            <CTAButton href="/#contact">Request Test</CTAButton>
          </div>
        </div>
      )}
    </header>
  );
}
