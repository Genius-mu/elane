"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/lib/data/hotel";

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: "all", label: "All Plates" },
    { id: "Architecture", label: "Architecture" },
    { id: "Rooms", label: "Suites" },
    { id: "Dining", label: "Gastronomy" },
    { id: "Wellness", label: "Sanctuary" },
    { id: "Craft", label: "Details & Craft" },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (filter === "all") return true;
    return item.category.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className="bg-[#17150F] pt-36 pb-32 text-[#E9E5DD]">
      <div className="shell">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="eyebrow">Monograph & Visual Archive</p>
          <h1 className="mt-4 font-display text-4xl font-light leading-[1.05] sm:text-6xl md:text-7xl">
            Architectural Gallery
          </h1>
          <p className="mt-6 text-sm font-light leading-relaxed text-[#E9E5DD]/70 md:text-base">
            A photographic monograph exploring the interplay of light, heavy French limestone, unlacquered bronze mullions, and private living quarters across the estate.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-12 flex flex-wrap gap-3 border-b border-[rgba(233,229,221,0.12)] pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={`rounded-full px-5 py-2 text-xs uppercase tracking-[0.16em] transition-all ${
                filter === cat.id
                  ? "border border-[#7C6A4E] bg-[#7C6A4E] text-[#17150F]"
                  : "border border-[rgba(233,229,221,0.15)] text-[#E9E5DD]/70 hover:border-[#E9E5DD]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative cursor-pointer overflow-hidden rounded-[2px] bg-[#1E1B15] shadow-xl"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17150F]/90 via-[#17150F]/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-95" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#A89574]">
                    Plate {idx + 1} · {item.category}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-light text-[#E9E5DD]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#E9E5DD]/65 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              className="relative z-10 max-h-[90vh] max-w-4xl overflow-hidden rounded-sm border border-[rgba(233,229,221,0.15)] bg-[#17150F] text-[#E9E5DD] shadow-2xl"
            >
              <div className="relative aspect-[16/10] w-[85vw] max-w-4xl">
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  sizes="(max-width: 1200px) 90vw, 1000px"
                  className="object-cover"
                />
              </div>

              <div className="flex items-center justify-between p-6">
                <div>
                  <span className="eyebrow">{activeItem.category}</span>
                  <h3 className="font-display text-2xl font-light text-[#E9E5DD]">
                    {activeItem.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#E9E5DD]/70">
                    {activeItem.caption}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(233,229,221,0.2)] text-[#E9E5DD] hover:border-[#A89574] hover:text-[#A89574]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
