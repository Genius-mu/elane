"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ROOMS } from "@/lib/data/hotel";
import BookingModal from "@/components/navigation/BookingModal";
import ScrollImage from "@/components/ui/ScrollImage";

export default function RoomsPage() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "residence" | "suite" | "room">("all");
  const [activeBookingRoomId, setActiveBookingRoomId] = useState<string | null>(null);

  const filteredRooms = ROOMS.filter((room) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "residence") return room.id.includes("residence");
    if (selectedCategory === "suite") return room.id.includes("suite");
    if (selectedCategory === "room") return room.id.includes("room") || room.id.includes("atelier");
    return true;
  });

  return (
    <div className="bg-[#17150F] pt-36 pb-32 text-[#E9E5DD]">
      <div className="shell">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="eyebrow">Accommodations Archive</p>
          <h1 className="mt-4 font-display text-4xl font-light leading-[1.05] sm:text-6xl md:text-7xl">
            Private Quarters
          </h1>
          <p className="mt-6 text-sm font-light leading-relaxed text-[#E9E5DD]/70 md:text-base">
            Each suite at ÉLANE is an architectural sanctuary conceived with honest materials: French limestone, oiled brushed oak, unlacquered bronze, and Belgian linens. Insulated by acoustic triple-glazing, your horizon dissolves into quiet stillness.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-12 flex flex-wrap gap-4 border-b border-[rgba(233,229,221,0.12)] pb-6">
          {[
            { id: "all", label: "All Quarters" },
            { id: "residence", label: "Residences" },
            { id: "suite", label: "Suites" },
            { id: "room", label: "Ateliers" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedCategory(tab.id as any)}
              className={`rounded-full px-5 py-2 text-xs uppercase tracking-[0.16em] transition-all ${
                selectedCategory === tab.id
                  ? "border border-[#7C6A4E] bg-[#7C6A4E] text-[#17150F]"
                  : "border border-[rgba(233,229,221,0.15)] text-[#E9E5DD]/70 hover:border-[#E9E5DD]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Rooms Listing */}
        <div className="mt-16 space-y-28 md:space-y-36">
          {filteredRooms.map((room, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={room.id}
                className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16"
              >
                {/* Visual Frame */}
                <div className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  <Link href={`/rooms/${room.slug}`}>
                    <ScrollImage
                      src={room.featuredImage}
                      alt={room.name}
                      aspectRatio="aspect-[16/11]"
                      depth={0.9}
                      scale={1.05}
                      rotation={isReversed ? 1.2 : -1.2}
                      parallax={30}
                    />
                  </Link>
                </div>

                {/* Details Column */}
                <div className={`lg:col-span-5 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#A89574]">{room.number}</span>
                    <span className="h-px w-6 bg-[rgba(233,229,221,0.2)]" />
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#E9E5DD]/50">
                      {room.floor}
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-3xl font-light text-[#E9E5DD] sm:text-4xl">
                    <Link href={`/rooms/${room.slug}`} className="transition-colors hover:text-[#A89574]">
                      {room.name}
                    </Link>
                  </h2>

                  <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[#A89574]">
                    {room.tagline}
                  </p>

                  <p className="mt-4 text-xs font-light leading-relaxed text-[#E9E5DD]/70">
                    {room.longDescription}
                  </p>

                  {/* Highlights */}
                  <div className="mt-6 space-y-2 border-t border-[rgba(233,229,221,0.08)] pt-4">
                    {room.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#E9E5DD]/60">
                        <span className="h-1 w-1 rounded-full bg-[#A89574] mt-1.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Specs & Actions */}
                  <div className="mt-8 flex items-center justify-between border-t border-[rgba(233,229,221,0.1)] pt-6">
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-[#E9E5DD]/40">Starting At</span>
                      <span className="font-display text-xl text-[#E9E5DD]">
                        ${room.pricePerNight} <span className="text-xs font-sans text-[#E9E5DD]/50">/ night</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <Link
                        href={`/rooms/${room.slug}`}
                        className="text-xs uppercase tracking-[0.16em] text-[#E9E5DD] hover:text-[#A89574]"
                      >
                        Details →
                      </Link>
                      <button
                        type="button"
                        onClick={() => setActiveBookingRoomId(room.id)}
                        className="rounded-full border border-[#7C6A4E] bg-[#7C6A4E] px-6 py-2.5 text-xs uppercase tracking-[0.16em] text-[#17150F] transition-colors hover:bg-[#A89574]"
                      >
                        Reserve
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {activeBookingRoomId && (
        <BookingModal
          isOpen={!!activeBookingRoomId}
          onClose={() => setActiveBookingRoomId(null)}
          defaultRoomId={activeBookingRoomId}
        />
      )}
    </div>
  );
}
