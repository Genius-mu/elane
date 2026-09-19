"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DINING_VENUES } from "@/lib/data/hotel";

export default function DiningSection() {
  return (
    <section className="relative z-20 bg-[#17150F] py-32 md:py-44 text-[#E9E5DD]">
      <div className="shell">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between border-b border-[rgba(233,229,221,0.12)] pb-10 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Gastronomy · Three Concepts</p>
            <h2 className="mt-5 font-display text-4xl font-light leading-[1.1] sm:text-5xl md:text-6xl">
              The city, served differently.
            </h2>
          </div>
          <Link
            href="/dining"
            className="group mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#A89574] transition-colors hover:text-[#E9E5DD] md:mt-0"
          >
            <span>Explore All Menus & Reserves</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 3 Asymmetric Editorial Dining Experiences */}
        <div className="mt-20 grid grid-cols-1 gap-14 lg:grid-cols-3 lg:gap-10">
          {DINING_VENUES.map((venue, index) => {
            const num = `0${index + 1}`;
            return (
              <div
                key={venue.id}
                className="group relative flex flex-col justify-between"
              >
                {/* Image Stage with subtle hover zoom */}
                <div
                  data-cursor="view"
                  className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-[#1E1B15]"
                >
                  <Image
                    src={venue.image}
                    alt={venue.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17150F]/70 via-transparent to-transparent opacity-80" />

                  {/* Corner Number Badge */}
                  <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                    <span className="font-mono text-xs text-[#A89574]">{num}</span>
                    <span className="h-px w-4 bg-[rgba(233,229,221,0.25)]" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#E9E5DD]/70">
                      {venue.cuisine}
                    </span>
                  </div>
                </div>

                {/* Text Panel that moves upward on hover */}
                <div className="mt-8 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-3xl font-light text-[#E9E5DD]">
                      {venue.name}
                    </h3>
                    <span className="text-[11px] text-[#A89574] font-mono">
                      {venue.hours.split(" ")[0]}
                    </span>
                  </div>

                  <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[#A89574]">
                    {venue.tagline}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-[#E9E5DD]/65">
                    {venue.description}
                  </p>

                  {/* Expanding Accent Line on hover */}
                  <div className="mt-6 h-[1px] w-full bg-[rgba(233,229,221,0.1)] overflow-hidden">
                    <div className="h-full w-full origin-left scale-x-0 bg-[#A89574] transition-transform duration-500 ease-out group-hover:scale-x-100" />
                  </div>

                  {/* Sample Highlight Dish */}
                  <div className="mt-4 flex items-center justify-between text-[11px] text-[#E9E5DD]/50">
                    <span>Signature: {venue.menuHighlights[0].dish}</span>
                    <Link
                      href="/dining"
                      className="text-[#E9E5DD]/70 transition-colors hover:text-[#A89574]"
                    >
                      Reserve Table →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
