"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export interface ScrollImageProps {
  src: string;
  alt: string;
  depth?: number;
  scale?: number;
  rotation?: number;
  parallax?: number;
  intensity?: number;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
  sizes?: string;
}

export default function ScrollImage({
  src,
  alt,
  depth = 0.5,
  scale = 1.08,
  rotation = 1.5,
  parallax = 40,
  intensity = 1,
  className = "",
  aspectRatio = "aspect-[4/5]",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: ScrollImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  // Calculate transforms based on scroll progress (0 to 1)
  const translateY = useTransform(
    smoothProgress,
    [0, 1],
    [`-${parallax * intensity * 0.8}%`, `${parallax * intensity * 0.8}%`]
  );

  const imageScale = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [scale, 1, scale * 0.98]
  );

  const rotateZ = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [-rotation * intensity, 0, rotation * intensity * 0.7]
  );

  const rotateX = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [3 * depth, 0, -2 * depth]
  );

  return (
    <div
      ref={containerRef}
      data-cursor="view"
      className={`group relative overflow-hidden rounded-[2px] bg-[#1E1B15] [perspective:1200px] ${aspectRatio} ${className}`}
    >
      <motion.div
        className="relative h-[130%] w-full -top-[15%] will-change-transform"
        style={{
          y: translateY,
          scale: imageScale,
          rotateZ: rotateZ,
          rotateX: rotateX,
          transformStyle: "preserve-3d",
        }}
        transition={{ ease: "easeOut", duration: 0.6 }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-105"
        />
        {/* Ambient subtle vignette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17150F]/40 via-transparent to-[#17150F]/20 opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
      </motion.div>
    </div>
  );
}
