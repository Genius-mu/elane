"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, Clock, Utensils, GlassWater } from "lucide-react";
import { DINING_VENUES } from "@/lib/data/hotel";
import ScrollImage from "@/components/ui/ScrollImage";

export default function DiningPage() {
  const [reservedVenue, setReservedVenue] = useState<string | null>(null);
  const [confirmedVenue, setConfirmedVenue] = useState<string | null>(null);

  const handleReserve = (venueName: string) => {
    setConfirmedVenue(venueName);
    setTimeout(() => {
      setConfirmedVenue(null);
    }, 4000);
  };

  return (
    <div className="bg-[#17150F] pt-36 pb-32 text-[#E9E5DD]">
      <div className="shell">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="eyebrow">Culinary Concepts & Cellars</p>
          <h1 className="mt-4 font-display text-4xl font-light leading-[1.05] sm:text-6xl md:text-7xl">
            Gastronomy
          </h1>
          <p className="mt-6 text-sm font-light leading-relaxed text-[#E9E5DD]/70 md:text-base">
            Three distinctive culinary destinations anchored in hyper-seasonal provenance, artisanal fermentation, and rare cellars. We approach gastronomy not as culinary acrobatics, but as the quiet contemplation of exceptional ingredients.
          </p>
        </div>

        {/* Venues Showcase */}
        <div className="mt-24 space-y-36">
          {DINING_VENUES.map((venue, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={venue.id}
                id={venue.id}
                className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20"
              >
                {/* Visual Stage */}
                <div className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  <ScrollImage
                    src={venue.image}
                    alt={venue.name}
                    aspectRatio="aspect-[16/11]"
                    depth={1.1}
                    scale={1.05}
                    rotation={isReversed ? 1.2 : -1.2}
                    parallax={30}
                  />
                  <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-[#E9E5DD]/45">
                    <span>{venue.chef}</span>
                    <span>{venue.hours}</span>
                  </div>
                </div>

                {/* Details Column */}
                <div className={`lg:col-span-5 ${isReversed ? "lg:order-1" : "lg:order-2"} space-y-6`}>
                  <div>
                    <span className="font-mono text-xs text-[#A89574]">0{index + 1}</span>
                    <span className="mx-2 text-[#E9E5DD]/30">·</span>
                    <span className="eyebrow">{venue.cuisine}</span>
                  </div>

                  <h2 className="font-display text-4xl font-light text-[#E9E5DD] sm:text-5xl">
                    {venue.name}
                  </h2>

                  <p className="text-xs uppercase tracking-[0.16em] text-[#A89574]">
                    {venue.tagline}
                  </p>

                  <p className="text-sm font-light leading-relaxed text-[#E9E5DD]/75">
                    {venue.description}
                  </p>

                  {/* Highlights Menu */}
                  <div className="border-t border-[rgba(233,229,221,0.1)] pt-6">
                    <h4 className="eyebrow mb-4">Sample Tasting Plates</h4>
                    <div className="space-y-4">
                      {venue.menuHighlights.map((dish, i) => (
                        <div key={i} className="text-xs">
                          <p className="font-medium text-[#E9E5DD]">{dish.dish}</p>
                          <p className="text-[#E9E5DD]/55">{dish.description}</p>
                          {dish.pairing && (
                            <p className="mt-1 font-mono text-[10px] text-[#A89574]">
                              Pairing: {dish.pairing}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking confirmation notice or button */}
                  <div className="pt-4">
                    {confirmedVenue === venue.name ? (
                      <div className="inline-flex items-center gap-2 rounded-full border border-[#7C6A4E] bg-[#1E1B15] px-6 py-3 text-xs text-[#A89574]">
                        <Check className="h-4 w-4" />
                        <span>Table Request Dispatched to Maître d&#39;</span>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleReserve(venue.name)}
                        className="rounded-full border border-[#7C6A4E] bg-[#7C6A4E] px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-[#17150F] transition-all hover:bg-[#A89574]"
                      >
                        Reserve Table at {venue.name}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
