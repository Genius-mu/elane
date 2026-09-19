"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export default function HotelStory() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
  });

  // Image moves slower than text and subtly rotates
  const imageTranslateY = useTransform(smoothProgress, [0, 1], ["-12%", "12%"]);
  const imageRotate = useTransform(smoothProgress, [0, 1], [-1.5, 1.5]);
  const textTranslateY = useTransform(smoothProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section
      ref={containerRef}
      className="relative z-20 bg-[#17150F] py-32 md:py-48 text-[#E9E5DD] overflow-hidden"
    >
      <div className="shell">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Left: Large Hotel Suite Photograph with Parallax Travel & Subtle Rotation */}
          <div className="relative lg:col-span-7">
            <div className="relative aspect-[4/5] sm:aspect-[16/13] w-full overflow-hidden rounded-[2px] bg-[#1E1B15] shadow-2xl [perspective:1000px]">
              <motion.div
                className="relative h-[126%] w-full -top-[13%] will-change-transform"
                style={{
                  y: imageTranslateY,
                  rotateZ: imageRotate,
                  transformStyle: "preserve-3d",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=90"
                  alt="Élane Signature Suite with monolithic stone bath overlooking evening skyline"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17150F]/50 via-transparent to-transparent" />
              </motion.div>
            </div>
            <div className="mt-4 flex items-center justify-between text-[11px] text-[#E9E5DD]/45 font-mono">
              <span>Plate 04 · The Signature Suite</span>
              <span>42nd Parallel East</span>
            </div>
          </div>

          {/* Right: Architectural Narrative & Progressive Story */}
          <motion.div
            className="lg:col-span-5 lg:pl-4 space-y-8"
            style={{ y: textTranslateY }}
          >
            <div>
              <p className="eyebrow">The Hotel Narrative</p>
              <h2 className="mt-4 font-display text-4xl font-light leading-[1.1] text-[#E9E5DD] sm:text-5xl">
                A new perspective on hospitality.
              </h2>
            </div>

            <div className="space-y-5 text-sm leading-relaxed text-[#E9E5DD]/75 font-light">
              <p>
                When ÉLANE was commissioned in 1987, the brief was straightforward yet uncompromising: strip away the ceremonial theater of generic five-star hotels and restore the quiet dignity of genuine personal sanctuary.
              </p>
              <p>
                Rather than monumental lobbies designed for public spectacle, guests enter through a discreet bronze portico into a succession of intimate acoustic chambers. Light is treated as a physical material, filtered through fluted limestone fins that shift in tone from pale chalk at dawn to deep amber at sunset.
              </p>
              <blockquote className="border-l border-[#A89574] pl-5 font-display text-lg italic text-[#E9E5DD]/90">
                “We did not design rooms to be inspected; we designed them to be inhabited in complete peace.”
              </blockquote>
              <p>
                Every furniture piece was custom drawn for its specific alcove. Every door handle is solid unlacquered bronze, designed to age in dialogue with the hand that turns it.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-full border border-[rgba(233,229,221,0.25)] bg-[#1E1B15] px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-[#E9E5DD] transition-all duration-300 hover:border-[#7C6A4E] hover:bg-[#7C6A4E] hover:text-[#17150F]"
              >
                <span>Discover Our Story</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
