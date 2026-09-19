"use client";

import Link from "next/link";
import ScrollImage from "@/components/ui/ScrollImage";
import { SIGNATURE_EXPERIENCES } from "@/lib/data/hotel";

export default function ExperienceGrid() {
  return (
    <section className="relative z-20 bg-[#0D0C09] py-32 md:py-44 text-[#E9E5DD] overflow-hidden">
      <div className="shell">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="eyebrow">Curated Itineraries & Access</p>
          <h2 className="mt-5 font-display text-4xl font-light leading-[1.1] sm:text-5xl md:text-6xl">
            More than a stay.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#E9E5DD]/70 md:text-base">
            Bespoke encounters designed for guests who require frictionless travel, rare cultural entry, and moments that leave no trace of the ordinary.
          </p>
        </div>

        {/* Asymmetric Overlapping Layout */}
        <div className="mt-24 space-y-28 md:space-y-36">
          {/* Row 1: Large Featured Experience with Overlapping Accent */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="relative lg:col-span-7">
              <ScrollImage
                src={SIGNATURE_EXPERIENCES[0].image}
                alt={SIGNATURE_EXPERIENCES[0].title}
                aspectRatio="aspect-[16/10]"
                depth={1.2}
                scale={1.05}
                rotation={-1.5}
                parallax={35}
              />
            </div>
            <div className="lg:col-span-5 lg:pl-6 space-y-4">
              <span className="eyebrow">{SIGNATURE_EXPERIENCES[0].tag}</span>
              <h3 className="font-display text-3xl font-light text-[#E9E5DD] sm:text-4xl">
                {SIGNATURE_EXPERIENCES[0].title}
              </h3>
              <p className="text-xs uppercase tracking-[0.16em] text-[#A89574]">
                {SIGNATURE_EXPERIENCES[0].subtitle}
              </p>
              <p className="text-sm font-light leading-relaxed text-[#E9E5DD]/70">
                {SIGNATURE_EXPERIENCES[0].description}
              </p>
              <div className="pt-4">
                <Link
                  href="/services"
                  className="text-xs uppercase tracking-[0.2em] text-[#A89574] transition-colors hover:text-[#E9E5DD]"
                >
                  Request Private Dining Arrangement →
                </Link>
              </div>
            </div>
          </div>

          {/* Row 2: Asymmetric Two-Column Split (Helicopter & Midnight Pool) */}
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16 items-start">
            {/* Left Column: Tilted offset card */}
            <div className="lg:col-span-5 lg:pt-12 space-y-6">
              <div className="w-full">
                <ScrollImage
                  src={SIGNATURE_EXPERIENCES[1].image}
                  alt={SIGNATURE_EXPERIENCES[1].title}
                  aspectRatio="aspect-[4/5]"
                  depth={0.8}
                  scale={1.08}
                  rotation={1.8}
                  parallax={45}
                />
              </div>
              <div>
                <span className="eyebrow">{SIGNATURE_EXPERIENCES[1].tag}</span>
                <h4 className="mt-2 font-display text-2xl font-light text-[#E9E5DD]">
                  {SIGNATURE_EXPERIENCES[1].title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[#E9E5DD]/65">
                  {SIGNATURE_EXPERIENCES[1].description}
                </p>
              </div>
            </div>

            {/* Right Column: Staggered Large Visual */}
            <div className="lg:col-span-7 space-y-6">
              <div className="w-full">
                <ScrollImage
                  src={SIGNATURE_EXPERIENCES[2].image}
                  alt={SIGNATURE_EXPERIENCES[2].title}
                  aspectRatio="aspect-[16/11]"
                  depth={1.4}
                  scale={1.06}
                  rotation={-1.2}
                  parallax={30}
                />
              </div>
              <div className="max-w-md">
                <span className="eyebrow">{SIGNATURE_EXPERIENCES[2].tag}</span>
                <h4 className="mt-2 font-display text-2xl font-light text-[#E9E5DD]">
                  {SIGNATURE_EXPERIENCES[2].title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[#E9E5DD]/65">
                  {SIGNATURE_EXPERIENCES[2].description}
                </p>
              </div>
            </div>
          </div>

          {/* Row 3: Three Minimalist Micro-Experiences */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 border-t border-[rgba(233,229,221,0.1)] pt-16">
            {SIGNATURE_EXPERIENCES.slice(3, 6).map((exp) => (
              <div key={exp.title} className="group space-y-4">
                <div className="relative aspect-[3/2] overflow-hidden rounded-[2px] bg-[#1E1B15]">
                  <ScrollImage
                    src={exp.image}
                    alt={exp.title}
                    aspectRatio="aspect-[3/2]"
                    depth={0.6}
                    scale={1.04}
                    rotation={0.5}
                    parallax={20}
                  />
                </div>
                <span className="eyebrow">{exp.tag}</span>
                <h4 className="font-display text-xl font-light text-[#E9E5DD] transition-colors group-hover:text-[#A89574]">
                  {exp.title}
                </h4>
                <p className="text-xs leading-relaxed text-[#E9E5DD]/60">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
