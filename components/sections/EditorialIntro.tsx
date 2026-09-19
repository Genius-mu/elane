"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import ScrollImage from "@/components/ui/ScrollImage";
import { HOTEL_STATS } from "@/lib/data/hotel";

function CounterItem({ stat }: { stat: (typeof HOTEL_STATS)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="border-l border-[rgba(233,229,221,0.12)] pl-6 md:pl-8">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-4xl font-light tracking-tight text-[#E9E5DD] md:text-5xl lg:text-6xl"
      >
        {stat.value}
        {stat.suffix}
      </motion.span>
      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#E9E5DD]/50">
        {stat.label}
      </p>
    </div>
  );
}

export default function EditorialIntro() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="hotel-intro"
      ref={containerRef}
      className="relative z-20 bg-[#17150F] py-28 md:py-40 text-[#E9E5DD] overflow-hidden"
    >
      <div className="shell">
        {/* Editorial Eyebrow & Main Statement */}
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="eyebrow"
          >
            Philosophy · Architecture of Presence
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 font-display text-3xl font-light leading-[1.2] text-[#E9E5DD] sm:text-4xl md:text-5xl lg:text-6xl"
          >
            A quieter way to experience the city.
          </motion.h2>
        </div>

        {/* Asymmetric Composition: Large Image, Overlapping Architectural Image & Floating Text */}
        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Asymmetric Double Images */}
          <div className="relative lg:col-span-7">
            <div className="relative w-full max-w-lg lg:max-w-none">
              <ScrollImage
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
                alt="Fluted limestone architecture and minimalist interior corridor"
                aspectRatio="aspect-[4/5]"
                depth={0.8}
                scale={1.06}
                rotation={-1.2}
                parallax={30}
              />
            </div>

            {/* Overlapping Floating Secondary Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-10 -right-4 w-44 sm:w-60 md:w-72 lg:-right-8 lg:bottom-12 z-10 shadow-2xl"
            >
              <ScrollImage
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=85"
                alt="Architectural bronze details and fluted glass"
                aspectRatio="aspect-[3/4]"
                depth={1.4}
                scale={1.1}
                rotation={1.8}
                parallax={50}
              />
            </motion.div>
          </div>

          {/* Right Column: Floating Narrative & Architectural Credentials */}
          <div className="lg:col-span-5 lg:pl-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 text-[#E9E5DD]/75 leading-relaxed text-sm md:text-base font-sans"
            >
              <p>
                Conceived as an urban sanctuary rather than a transit stop, ÉLANE is grounded in the belief that true luxury is acoustic silence, deliberate proportion, and tactile substance.
              </p>
              <p>
                Forty-two storeys of French Burgundy limestone and triple-glazed bronze mullions insulate the interior from the city’s frenetic pulse. Natural daylight traces hand-honed travertine walls, illuminating an uncompromising collection of bespoke rooms, Michelin-caliber tasting salons, and restorative subterranean thermal waters.
              </p>
              <p>
                Every encounter is personal and discreet. Here, the city does not encroach — it becomes a luminous backdrop to stillness.
              </p>
            </motion.div>

            <div className="mt-10 pt-8 border-t border-[rgba(233,229,221,0.1)]">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#A89574] transition-colors hover:text-[#E9E5DD]"
              >
                <span>Read the Architectural Monograph</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Animated Numerical Metadata Grid */}
        <div className="mt-28 border-t border-[rgba(233,229,221,0.12)] pt-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {HOTEL_STATS.map((stat) => (
              <CounterItem key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
