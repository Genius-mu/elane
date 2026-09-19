"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollImage from "@/components/ui/ScrollImage";
import { TESTIMONIALS } from "@/lib/data/hotel";

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = TESTIMONIALS[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative z-20 bg-[#0D0C09] py-32 md:py-44 text-[#E9E5DD] overflow-hidden">
      <div className="shell">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Left Column: Adjacent Architectural Portrait */}
          <div className="relative lg:col-span-5">
            <ScrollImage
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85"
              alt="Quiet guest suite at dusk"
              aspectRatio="aspect-[4/5]"
              depth={0.7}
              scale={1.05}
              rotation={-1.2}
              parallax={30}
            />
            <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#E9E5DD]/40">
              <span>Private Guest Guestbook</span>
              <span>In Confidence</span>
            </div>
          </div>

          {/* Right Column: Minimalist Large Quote */}
          <div className="lg:col-span-7 lg:pl-6">
            <span className="eyebrow">Guest Impressions</span>

            <div className="relative mt-8 min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <blockquote className="font-display text-2xl font-light leading-relaxed text-[#E9E5DD] sm:text-3xl md:text-4xl">
                    “{current.quote}”
                  </blockquote>

                  <div className="mt-8 border-t border-[rgba(233,229,221,0.12)] pt-6 flex items-baseline justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-[#E9E5DD]">
                        — {current.author}
                      </p>
                      <p className="mt-1 text-xs text-[#E9E5DD]/50">
                        {current.location} · {current.stay}
                      </p>
                    </div>

                    {/* Subtle dot indicators */}
                    <div className="flex items-center gap-2">
                      {TESTIMONIALS.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setCurrentIndex(idx)}
                          aria-label={`Go to testimonial ${idx + 1}`}
                          className={`h-1.5 rounded-full transition-all ${
                            idx === currentIndex
                              ? "w-6 bg-[#A89574]"
                              : "w-1.5 bg-[rgba(233,229,221,0.2)] hover:bg-[rgba(233,229,221,0.4)]"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
