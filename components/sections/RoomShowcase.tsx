"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ScrollImage from "@/components/ui/ScrollImage";
import BookingModal from "@/components/navigation/BookingModal";
import { ROOMS, Room } from "@/lib/data/hotel";

export default function RoomShowcase() {
  const [activeBookingRoomId, setActiveBookingRoomId] = useState<string | null>(null);

  return (
    <section className="relative z-20 bg-[#17150F] py-32 md:py-44 text-[#E9E5DD]">
      <div className="shell">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between border-b border-[rgba(233,229,221,0.12)] pb-10 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Accommodation · Living Spaces</p>
            <h2 className="mt-5 font-display text-4xl font-light leading-[1.1] sm:text-5xl md:text-6xl">
              Spaces designed for staying awhile.
            </h2>
          </div>
          <Link
            href="/rooms"
            className="group mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#A89574] transition-colors hover:text-[#E9E5DD] md:mt-0"
          >
            <span>View Complete Collection ({ROOMS.length})</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Editorial Vertical Room Showcase */}
        <div className="mt-20 space-y-36 md:space-y-48">
          {ROOMS.slice(0, 4).map((room: Room, index: number) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={room.id}
                className="group relative grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16"
              >
                {/* Image Stage */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Link href={`/rooms/${room.slug}`} className="block">
                    <ScrollImage
                      src={room.featuredImage}
                      alt={room.name}
                      aspectRatio="aspect-[16/11]"
                      depth={1.1}
                      scale={1.05}
                      rotation={isReversed ? 1.2 : -1.2}
                      parallax={35}
                    />
                  </Link>
                </div>

                {/* Content Stage */}
                <div
                  className={`lg:col-span-5 ${
                    isReversed ? "lg:order-1 lg:pr-6" : "lg:order-2 lg:pl-6"
                  }`}
                >
                  {/* Number & Category */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#A89574]">
                      {room.number}
                    </span>
                    <span className="h-px w-6 bg-[rgba(233,229,221,0.2)]" />
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#E9E5DD]/50">
                      {room.floor}
                    </span>
                  </div>

                  {/* Room Name & Tagline */}
                  <h3 className="mt-4 font-display text-3xl font-light tracking-tight text-[#E9E5DD] sm:text-4xl md:text-5xl">
                    <Link
                      href={`/rooms/${room.slug}`}
                      className="transition-colors hover:text-[#A89574]"
                    >
                      {room.name}
                    </Link>
                  </h3>

                  <p className="mt-4 text-sm font-light leading-relaxed text-[#E9E5DD]/75 md:text-base">
                    {room.tagline}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-[#E9E5DD]/55">
                    {room.description}
                  </p>

                  {/* Specifications Grid */}
                  <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-y border-[rgba(233,229,221,0.08)] py-4 text-xs text-[#E9E5DD]/60">
                    <span>{room.size}</span>
                    <span>·</span>
                    <span>{room.bed}</span>
                    <span>·</span>
                    <span>{room.occupancy}</span>
                    <span>·</span>
                    <span>{room.view}</span>
                  </div>

                  {/* Price & CTAs */}
                  <div className="mt-8 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#E9E5DD]/45 block">
                        From
                      </span>
                      <span className="font-display text-xl font-light text-[#E9E5DD]">
                        ${room.pricePerNight}{" "}
                        <span className="text-xs font-sans text-[#E9E5DD]/50">/ night</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <Link
                        href={`/rooms/${room.slug}`}
                        className="text-xs uppercase tracking-[0.16em] text-[#E9E5DD] transition-colors hover:text-[#A89574]"
                      >
                        Explore Suite →
                      </Link>

                      <button
                        type="button"
                        onClick={() => setActiveBookingRoomId(room.id)}
                        className="rounded-full border border-[rgba(233,229,221,0.25)] bg-[#1E1B15] px-5 py-2.5 text-xs uppercase tracking-[0.16em] text-[#E9E5DD] transition-all duration-300 hover:border-[#7C6A4E] hover:bg-[#7C6A4E] hover:text-[#17150F]"
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

      {/* Booking Drawer for selected room */}
      {activeBookingRoomId && (
        <BookingModal
          isOpen={!!activeBookingRoomId}
          onClose={() => setActiveBookingRoomId(null)}
          defaultRoomId={activeBookingRoomId}
        />
      )}
    </section>
  );
}
