"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, Truck } from "lucide-react";

function scrollToHash(hash: string) {
  const id = hash.replace("/#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

const navLinks = [
  { href: "/#hero", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#how-it-works", label: "How It Works" },

];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 transition-transform group-hover:scale-110">
            <Truck className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span
              className={cn(
                "text-lg font-bold leading-tight transition-colors",
                scrolled ? "text-gray-900" : "text-white"
              )}
            >
              Nomvula
            </span>
            <span
              className={cn(
                "text-xs font-medium uppercase tracking-widest transition-colors",
                scrolled ? "text-orange-500" : "text-orange-300"
              )}
            >
              Courier
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => {
                if (pathname === "/" && link.href.startsWith("/#")) {
                  e.preventDefault();
                  scrollToHash(link.href);
                }
              }}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-orange-500",
                scrolled ? "text-gray-700" : "text-white/90"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className={cn(
            "lg:hidden p-3.5 rounded-lg transition-colors touch-manipulation",
            scrolled ? "text-gray-900" : "text-white"
          )}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 bg-white",
          isOpen ? "max-h-[calc(100vh-64px)] border-b" : "max-h-0"
        )}
      >
        <div className="px-4 py-4 space-y-2 sm:px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => {
                setIsOpen(false);
                if (pathname === "/" && link.href.startsWith("/#")) {
                  e.preventDefault();
                  scrollToHash(link.href);
                }
              }}
              className={cn(
                "block text-base font-medium py-3 transition-colors",
                pathname === link.href
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
