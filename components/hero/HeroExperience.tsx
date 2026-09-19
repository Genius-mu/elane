"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import HeroScene3D from "@/components/three/HeroScene3D";
import BookingModal from "@/components/navigation/BookingModal";

export default function HeroExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [bookingOpen, setBookingOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  // Hero scale and vertical parallax
  const imageScale = useTransform(smoothProgress, [0, 1], [1, 0.9]);
  const imageTranslateY = useTransform(smoothProgress, [0, 1], ["0%", "18%"]);
  const imageRotateX = useTransform(smoothProgress, [0, 1], [0, 4]);
  const textTranslateY = useTransform(smoothProgress, [0, 1], ["0%", "45%"]);
  const textOpacity = useTransform(smoothProgress, [0, 0.75], [1, 0]);

  const scrollToIntro = () => {
    const el = document.getElementById("hotel-intro");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative h-[100svh] w-full overflow-hidden bg-[#17150F] [perspective:1200px]"
    >
      {/* Background 3D & Photography Layer */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{
          scale: imageScale,
          y: imageTranslateY,
          rotateX: imageRotateX,
          transformStyle: "preserve-3d",
        }}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2400&q=90"
          alt="Élane Penthouse Suite overlooking metropolis skyline at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Cinematic dark gradients for contrast and mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#17150F] via-[#17150F]/45 to-[#17150F]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_30%,transparent_40%,rgba(13,12,9,0.7)_100%)]" />

        {/* 3D Wireframe & Particle Motes Scene */}
        <HeroScene3D />
      </motion.div>

      {/* Hero Foreground Content */}
      <motion.div
        className="relative z-20 flex h-full items-end pb-[8vh]"
        style={{
          y: textTranslateY,
          opacity: textOpacity,
        }}
      >
        <div className="shell w-full text-[#E9E5DD]">
          {/* Eyebrow / Metadata */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-between border-b border-[rgba(233,229,221,0.15)] pb-4"
          >
            <div className="flex items-center gap-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A89574]" />
              <p className="eyebrow text-[11px] tracking-[0.3em] text-[#E9E5DD]/90">
                Five-Star International Sanctuary · Est. 1987
              </p>
            </div>
            <p className="font-mono text-xs tracking-widest text-[#A89574]">
              01 / 05
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-5xl font-display text-[clamp(2.75rem,8vw,7.5rem)] font-light leading-[0.98] tracking-tight text-[#E9E5DD]"
          >
            Stay above the ordinary.
          </motion.h1>

          {/* Subtext and CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-md font-sans text-sm leading-relaxed text-[#E9E5DD]/75 md:text-base">
              A curated collection of private suites, Michelin-caliber gastronomy, and acoustic stillness placed high above the metropolitan grid.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToIntro}
                className="group relative overflow-hidden rounded-full border border-[rgba(233,229,221,0.3)] bg-transparent px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-[#E9E5DD] transition-all duration-300 hover:border-[#E9E5DD] hover:bg-[#E9E5DD] hover:text-[#17150F]"
              >
                Discover the Hotel
              </button>

              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="rounded-full bg-[#7C6A4E] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-[#E9E5DD] transition-all duration-300 hover:bg-[#A89574] hover:text-[#17150F]"
              >
                Book a Stay
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#E9E5DD]/40">Scroll</span>
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3], y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="h-8 w-[1px] bg-gradient-to-b from-[#A89574] to-transparent origin-top"
        />
      </div>

      {/* Booking Drawer Instance */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </section>
  );
}
