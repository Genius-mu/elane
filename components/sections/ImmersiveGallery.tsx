"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/lib/data/hotel";

function GalleryTile({
  item,
  index,
  onSelect,
}: {
  item: GalleryItem;
  index: number;
  onSelect: (item: GalleryItem) => void;
}) {
  const tileRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: tileRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
  });

  // Calculate parallax and depth shift per tile
  const parallaxOffset = (index % 3 - 1) * 60 * item.depth;
  const translateY = useTransform(smoothProgress, [0, 1], [`${parallaxOffset}%`, `-${parallaxOffset}%`]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1 + item.depth * 0.04, 0.96]);
  const rotateZ = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [(item.rotation || 0) * -1, item.rotation || 0, (item.rotation || 0) * 0.8]
  );

  return (
    <motion.div
      ref={tileRef}
      style={{
        y: translateY,
        scale,
        rotateZ,
      }}
      onClick={() => onSelect(item)}
      className="group relative cursor-pointer overflow-hidden rounded-[2px] bg-[#1E1B15] shadow-2xl [perspective:1000px]"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
        />

        {/* Ambient Dark Gradient & Hover Reveal Caption */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#17150F]/90 via-[#17150F]/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-95" />

        <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 ease-out group-hover:-translate-y-1">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#A89574]">
            {item.category}
          </span>
          <h4 className="mt-1 font-display text-lg font-light text-[#E9E5DD]">
            {item.title}
          </h4>
          <p className="mt-1 line-clamp-2 text-xs text-[#E9E5DD]/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            {item.caption}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ImmersiveGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  return (
    <section className="relative z-20 bg-[#17150F] py-32 md:py-48 text-[#E9E5DD] overflow-hidden">
      <div className="shell">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between border-b border-[rgba(233,229,221,0.12)] pb-10 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Exhibition · Architectural Monograph</p>
            <h2 className="mt-5 font-display text-4xl font-light leading-[1.1] sm:text-5xl md:text-6xl">
              Photographic Wall
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#E9E5DD]/70 md:text-base">
              A spatial curation of material textures, filtered daylight, and quiet interior vignettes captured across the estate.
            </p>
          </div>
          <Link
            href="/gallery"
            className="group mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#A89574] transition-colors hover:text-[#E9E5DD] md:mt-0"
          >
            <span>View Full Archive ({GALLERY_ITEMS.length} Works)</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 3D Photographic Wall Grid with Staggered Depth */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 [perspective:1400px]">
          {GALLERY_ITEMS.map((item, index) => (
            <GalleryTile
              key={item.id}
              item={item}
              index={index}
              onSelect={setSelectedPhoto}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-lg"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 max-h-[90vh] max-w-4xl overflow-hidden rounded-sm border border-[rgba(233,229,221,0.15)] bg-[#17150F] text-[#E9E5DD] shadow-2xl"
            >
              <div className="relative aspect-[16/10] w-[85vw] max-w-4xl">
                <Image
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  fill
                  sizes="(max-width: 1200px) 90vw, 1000px"
                  className="object-cover"
                />
              </div>

              <div className="flex items-center justify-between p-6">
                <div>
                  <span className="eyebrow">{selectedPhoto.category}</span>
                  <h3 className="font-display text-2xl font-light text-[#E9E5DD]">
                    {selectedPhoto.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#E9E5DD]/70">
                    {selectedPhoto.caption}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(null)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(233,229,221,0.2)] text-[#E9E5DD] transition-colors hover:border-[#A89574] hover:text-[#A89574]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
