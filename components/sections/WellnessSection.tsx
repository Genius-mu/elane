"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function WellnessSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
  });

  // Vertical parallax slow travel
  const imageTranslateY = useTransform(smoothProgress, [0, 1], ["-14%", "14%"]);
  const contentTranslateY = useTransform(smoothProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] w-full overflow-hidden bg-[#17150F] flex items-center justify-center py-28"
    >
      {/* Background Parallax Image */}
      <motion.div
        className="absolute inset-0 h-[128%] -top-[14%] w-full will-change-transform"
        style={{ y: imageTranslateY }}
      >
        <Image
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2400&q=90"
          alt="Monolithic indoor lap pool framed by fluted limestone columns"
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* Deep moody overlay */}
        <div className="absolute inset-0 bg-[#17150F]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#17150F] via-transparent to-[#17150F]" />
      </motion.div>

      {/* Foreground Editorial Statement */}
      <motion.div
        className="relative z-10 shell text-center text-[#E9E5DD]"
        style={{ y: contentTranslateY }}
      >
        <p className="eyebrow mx-auto max-w-md">Subterranean Sanctuary · Level -02</p>

        <h2 className="mx-auto mt-6 max-w-4xl font-display text-[clamp(2.5rem,7vw,6.5rem)] font-light leading-[1.05] tracking-tight text-[#E9E5DD]">
          Make room for stillness.
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-[#E9E5DD]/80 md:text-base font-light">
          Deep within the limestone substructure lies a twenty-five meter mineral pool, heated cedar meditation chambers, and cellular water therapy designed to dissolve cognitive fatigue.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <Link
            href="/services"
            className="rounded-full border border-[rgba(233,229,221,0.3)] bg-[#17150F]/80 px-8 py-3.5 text-xs uppercase tracking-[0.2em] text-[#E9E5DD] backdrop-blur-sm transition-all duration-300 hover:border-[#E9E5DD] hover:bg-[#E9E5DD] hover:text-[#17150F]"
          >
            Discover the Spa & Pool
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
