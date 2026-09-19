"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-20 border-t border-[rgba(233,229,221,0.12)] bg-[#17150F] text-[#E9E5DD]">
      <div className="shell">
        {/* Main Footer Directory */}
        <div className="grid grid-cols-1 gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link
              href="/"
              className="font-display text-3xl font-light tracking-[0.24em] text-[#E9E5DD] hover:opacity-85"
            >
              ÉLANE
            </Link>
            <p className="max-w-xs text-xs font-light leading-relaxed text-[#E9E5DD]/60">
              An international hotel and private residence collection grounded in architectural permanence, sensory stillness, and unhurried hospitality.
            </p>
            <div className="pt-2 text-[11px] font-mono text-[#A89574]">
              42 Floors · 186 Suites · Est. 1987
            </div>
          </div>

          {/* Directory Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {/* Stay & Suites */}
            <div className="space-y-4">
              <p className="eyebrow text-[10px]">Accommodations</p>
              <ul className="space-y-2.5 text-xs text-[#E9E5DD]/70">
                <li>
                  <Link href="/rooms" className="transition-colors hover:text-[#A89574]">
                    The Residence
                  </Link>
                </li>
                <li>
                  <Link href="/rooms" className="transition-colors hover:text-[#A89574]">
                    The Signature Suite
                  </Link>
                </li>
                <li>
                  <Link href="/rooms" className="transition-colors hover:text-[#A89574]">
                    The Skyline Suite
                  </Link>
                </li>
                <li>
                  <Link href="/rooms" className="transition-colors hover:text-[#A89574]">
                    The Courtyard Suite
                  </Link>
                </li>
                <li>
                  <Link href="/rooms" className="transition-colors hover:text-[#A89574]">
                    The Atelier Room
                  </Link>
                </li>
              </ul>
            </div>

            {/* Gastronomy & Sanctuary */}
            <div className="space-y-4">
              <p className="eyebrow text-[10px]">Experience</p>
              <ul className="space-y-2.5 text-xs text-[#E9E5DD]/70">
                <li>
                  <Link href="/dining" className="transition-colors hover:text-[#A89574]">
                    ORIGIN Tasting Salon
                  </Link>
                </li>
                <li>
                  <Link href="/dining" className="transition-colors hover:text-[#A89574]">
                    LUMEN Evening Bar
                  </Link>
                </li>
                <li>
                  <Link href="/dining" className="transition-colors hover:text-[#A89574]">
                    TERRACE Breakfast & Hearth
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="transition-colors hover:text-[#A89574]">
                    Thermal Spa & Hydrotherapy
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="transition-colors hover:text-[#A89574]">
                    Mineral Lap Pool
                  </Link>
                </li>
              </ul>
            </div>

            {/* Houses & Press */}
            <div className="space-y-4">
              <p className="eyebrow text-[10px]">Locations & Press</p>
              <ul className="space-y-2.5 text-xs text-[#E9E5DD]/70">
                <li>
                  <span className="text-[#E9E5DD]">New York</span> · Tower 42
                </li>
                <li>
                  <span className="text-[#E9E5DD]">London</span> · Mayfair Garden
                </li>
                <li>
                  <span className="text-[#E9E5DD]">Paris</span> · Place Vendôme
                </li>
                <li>
                  <span className="text-[#E9E5DD]">Tokyo</span> · Toranomon Hills
                </li>
                <li className="pt-2">
                  <Link href="/contact" className="text-[#A89574] transition-colors hover:text-[#E9E5DD]">
                    Concierge Dispatch →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="hairline" />

        {/* Bottom Metadata & Social Bar */}
        <div className="flex flex-col gap-6 py-8 text-[11px] text-[#E9E5DD]/50 sm:flex-row sm:items-center sm:justify-between font-light">
          <p>© 2026 ÉLANE HOTELS & RESIDENCES. ALL RIGHTS RESERVED.</p>

          <div className="flex items-center gap-6">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#A89574]">
              Instagram
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#A89574]">
              Pinterest
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#A89574]">
              LinkedIn
            </a>
            <span className="text-[rgba(233,229,221,0.2)]">|</span>
            <Link href="/about" className="transition-colors hover:text-[#A89574]">
              Privacy & Discretion
            </Link>
            <Link href="/about" className="transition-colors hover:text-[#A89574]">
              Accessibility
            </Link>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-[#A89574] transition-colors hover:text-[#E9E5DD]"
          >
            <span>Return to Summit</span>
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
