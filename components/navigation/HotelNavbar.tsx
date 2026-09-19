"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import BookingModal from "./BookingModal";

export default function HotelNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Stay", href: "/rooms" },
    { label: "Experience", href: "/services" },
    { label: "Dining", href: "/dining" },
    { label: "Gallery", href: "/gallery" },
    { label: "Journal", href: "/about" },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-[rgba(233,229,221,0.08)] bg-[#17150F]/85 py-4 backdrop-blur-md"
            : "border-b border-transparent bg-transparent py-7"
        }`}
      >
        <div className="shell flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="font-display text-2xl font-light tracking-[0.24em] text-[#E9E5DD] transition-opacity hover:opacity-80"
          >
            ÉLANE
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-10 md:flex">
            <ul className="flex items-center gap-9 text-xs uppercase tracking-[0.2em]">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`group relative py-1 transition-colors ${
                        isActive
                          ? "text-[#A89574]"
                          : "text-[#E9E5DD]/70 hover:text-[#E9E5DD]"
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute inset-x-0 -bottom-0.5 h-[1px] origin-left bg-[#A89574] transition-transform duration-300 ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="h-4 w-[1px] bg-[rgba(233,229,221,0.15)]" />

            {/* Book A Stay CTA */}
            <button
              type="button"
              onClick={() => setBookingOpen(true)}
              className="rounded-full border border-[rgba(233,229,221,0.3)] px-6 py-2 text-xs uppercase tracking-[0.2em] text-[#E9E5DD] transition-all duration-300 hover:border-[#7C6A4E] hover:bg-[#7C6A4E] hover:text-[#17150F]"
            >
              Book a Stay
            </button>
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              type="button"
              onClick={() => setBookingOpen(true)}
              className="rounded-full border border-[rgba(233,229,221,0.25)] px-4 py-1.5 text-[11px] uppercase tracking-[0.16em] text-[#E9E5DD]"
            >
              Book
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              className="p-1 text-[#E9E5DD]"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] flex flex-col justify-between bg-[#17150F] p-8 text-[#E9E5DD]"
          >
            <div className="flex items-center justify-between border-b border-[rgba(233,229,221,0.1)] pb-6">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-2xl tracking-[0.24em]"
              >
                ÉLANE
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="p-2"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="my-auto py-10">
              <p className="eyebrow mb-6">Navigation</p>
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-display text-3xl transition-colors hover:text-[#A89574]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display text-3xl transition-colors hover:text-[#A89574]"
                  >
                    Contact & Concierge
                  </Link>
                </li>
              </ul>
            </div>

            <div className="border-t border-[rgba(233,229,221,0.1)] pt-6">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setBookingOpen(true);
                }}
                className="w-full rounded-full bg-[#E9E5DD] py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#17150F]"
              >
                Book a Stay
              </button>
              <p className="mt-4 text-center text-xs text-[#E9E5DD]/50">
                42 Floors · 186 Private Suites · Est. 1987
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Booking Drawer */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </>
  );
}
