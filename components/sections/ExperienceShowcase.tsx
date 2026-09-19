"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HOTEL_FACILITIES, HotelExperience } from "@/lib/data/hotel";

export default function ExperienceShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const currentItem: HotelExperience = HOTEL_FACILITIES[activeTab];

  return (
    <section className="relative z-20 bg-[#0D0C09] py-32 md:py-44 text-[#E9E5DD] overflow-hidden">
      {/* Subtle background ambient gradient */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-[#7C6A4E]/10 blur-[140px]" />

      <div className="shell">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <p className="eyebrow">Hotel Facilities & Amenities</p>
          <h2 className="mt-5 font-display text-4xl font-light leading-[1.1] sm:text-5xl md:text-6xl">
            Everything has its own rhythm.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#E9E5DD]/70 md:text-base">
            Dedicated spaces designed to restore physical clarity, elevate sensory perception, and accommodate unhurried leisure.
          </p>
        </div>

        {/* Horizontal Category Navigation Tabs */}
        <div className="mt-14 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex min-w-max items-center gap-8 border-b border-[rgba(233,229,221,0.12)] pb-4 md:gap-14">
            {HOTEL_FACILITIES.map((facility, index) => {
              const isActive = index === activeTab;
              return (
                <button
                  key={facility.id}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  className="group relative flex items-baseline gap-3 text-left transition-colors"
                >
                  <span
                    className={`font-mono text-xs transition-colors ${
                      isActive ? "text-[#A89574]" : "text-[#E9E5DD]/40 group-hover:text-[#E9E5DD]/70"
                    }`}
                  >
                    {facility.number}
                  </span>
                  <span
                    className={`font-display text-xl md:text-2xl transition-colors ${
                      isActive ? "text-[#E9E5DD]" : "text-[#E9E5DD]/45 group-hover:text-[#E9E5DD]/80"
                    }`}
                  >
                    {facility.title}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute inset-x-0 -bottom-4 h-[2px] bg-[#A89574]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Facility Display Stage */}
        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Smooth 3D Animated Image */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] bg-[#1E1B15] lg:col-span-7 shadow-2xl [perspective:1000px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0, scale: 1.08, rotateX: 2 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.96, rotateX: -2 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={currentItem.image}
                  alt={currentItem.headline}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C09]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 z-10">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#A89574]">
                    Facility {currentItem.number} · {currentItem.category}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Narrative Details */}
          <div className="lg:col-span-5 lg:pl-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <span className="eyebrow">{currentItem.category}</span>
                <h3 className="font-display text-3xl font-light leading-snug sm:text-4xl text-[#E9E5DD]">
                  {currentItem.headline}
                </h3>
                <p className="text-sm font-light leading-relaxed text-[#E9E5DD]/75 md:text-base">
                  {currentItem.description}
                </p>

                {/* Bullet List Details */}
                <div className="space-y-3 border-t border-[rgba(233,229,221,0.1)] pt-6">
                  {currentItem.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-[#E9E5DD]/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#A89574] mt-1 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#A89574] transition-colors hover:text-[#E9E5DD]"
                  >
                    <span>Explore All Amenities</span>
                    <span>→</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
