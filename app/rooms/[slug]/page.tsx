"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { ROOMS } from "@/lib/data/hotel";
import BookingModal from "@/components/navigation/BookingModal";
import ScrollImage from "@/components/ui/ScrollImage";

export default function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const room = ROOMS.find((r) => r.slug === resolvedParams.slug);

  const [bookingOpen, setBookingOpen] = useState(false);

  if (!room) {
    notFound();
  }

  // Next room in collection
  const currentIndex = ROOMS.findIndex((r) => r.slug === room.slug);
  const nextRoom = ROOMS[(currentIndex + 1) % ROOMS.length];

  return (
    <div className="bg-[#17150F] pt-32 pb-32 text-[#E9E5DD]">
      <div className="shell">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/rooms"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#E9E5DD]/60 hover:text-[#A89574]"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            <span>All Accommodations</span>
          </Link>
        </div>

        {/* Room Header */}
        <div className="flex flex-col items-start justify-between border-b border-[rgba(233,229,221,0.12)] pb-10 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#A89574]">{room.number}</span>
              <span className="h-px w-6 bg-[rgba(233,229,221,0.2)]" />
              <span className="eyebrow">{room.floor}</span>
            </div>
            <h1 className="mt-4 font-display text-4xl font-light leading-[1.05] sm:text-6xl md:text-7xl">
              {room.name}
            </h1>
            <p className="mt-4 text-sm uppercase tracking-[0.16em] text-[#A89574]">
              {room.tagline}
            </p>
          </div>

          <div className="mt-8 flex items-center gap-6 lg:mt-0">
            <div>
              <span className="block text-[11px] uppercase tracking-wider text-[#E9E5DD]/45">
                From
              </span>
              <span className="font-display text-2xl font-light text-[#E9E5DD]">
                ${room.pricePerNight}{" "}
                <span className="text-xs font-sans text-[#E9E5DD]/50">/ night</span>
              </span>
            </div>

            <button
              type="button"
              onClick={() => setBookingOpen(true)}
              className="rounded-full border border-[#7C6A4E] bg-[#7C6A4E] px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-[#17150F] transition-all hover:bg-[#A89574]"
            >
              Book this Suite
            </button>
          </div>
        </div>

        {/* Featured Large Visual */}
        <div className="mt-14 w-full">
          <ScrollImage
            src={room.featuredImage}
            alt={room.name}
            aspectRatio="aspect-[16/9]"
            depth={1.2}
            scale={1.04}
            rotation={0.5}
            parallax={25}
            priority
          />
        </div>

        {/* Specifications Strip */}
        <div className="mt-14 grid grid-cols-2 gap-6 border-y border-[rgba(233,229,221,0.1)] py-8 sm:grid-cols-4">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#E9E5DD]/45">Internal Area</span>
            <span className="mt-1 font-display text-xl text-[#E9E5DD]">{room.size}</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#E9E5DD]/45">Bed Configuration</span>
            <span className="mt-1 font-display text-xl text-[#E9E5DD]">{room.bed}</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#E9E5DD]/45">Capacity</span>
            <span className="mt-1 font-display text-xl text-[#E9E5DD]">{room.occupancy}</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#E9E5DD]/45">Outlook & Exposure</span>
            <span className="mt-1 font-display text-xl text-[#E9E5DD]">{room.view}</span>
          </div>
        </div>

        {/* Architectural Narrative & Gallery Columns */}
        <div className="mt-20 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="eyebrow">Architectural Concept</h2>
            <h3 className="font-display text-3xl font-light leading-snug">
              Materiality, stillness, and private contemplation.
            </h3>
            <p className="text-sm font-light leading-relaxed text-[#E9E5DD]/75 md:text-base">
              {room.longDescription}
            </p>

            <div className="mt-10 border-t border-[rgba(233,229,221,0.1)] pt-8">
              <h4 className="eyebrow mb-4">Architectural Inclusions</h4>
              <div className="space-y-3">
                {room.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs text-[#E9E5DD]/75">
                    <Sparkles className="h-4 w-4 text-[#A89574] mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-10">
            {/* Gallery images */}
            {room.gallery.slice(1, 3).map((img, i) => (
              <div key={i} className="w-full">
                <ScrollImage
                  src={img}
                  alt={`${room.name} detail ${i + 1}`}
                  aspectRatio="aspect-[4/3]"
                  depth={0.8}
                  scale={1.05}
                  rotation={i === 0 ? -1.2 : 1.2}
                  parallax={30}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Complete Amenities Matrix */}
        <div className="mt-24 border-t border-[rgba(233,229,221,0.12)] pt-16">
          <div className="max-w-xl">
            <p className="eyebrow">Signature Comforts</p>
            <h3 className="mt-3 font-display text-3xl font-light">In-Suite Amenities</h3>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {room.amenities.map((amenity, idx) => (
              <div
                key={idx}
                className="rounded-sm border border-[rgba(233,229,221,0.08)] bg-[#1E1B15] p-5 text-xs text-[#E9E5DD]/80"
              >
                <div className="flex items-center gap-2 text-[#A89574] mb-2">
                  <Check className="h-4 w-4" />
                  <span className="font-mono text-[10px] uppercase">Considered</span>
                </div>
                {amenity}
              </div>
            ))}
          </div>
        </div>

        {/* Next Suite Teaser */}
        <div className="mt-28 border-t border-[rgba(233,229,221,0.12)] pt-12 flex items-center justify-between">
          <Link
            href="/rooms"
            className="text-xs uppercase tracking-[0.2em] text-[#E9E5DD]/60 hover:text-[#A89574]"
          >
            ← Accommodations Index
          </Link>

          <Link
            href={`/rooms/${nextRoom.slug}`}
            className="group flex items-center gap-3 text-right"
          >
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-[#E9E5DD]/45">Next Suite</span>
              <span className="font-display text-xl text-[#E9E5DD] group-hover:text-[#A89574]">
                {nextRoom.name}
              </span>
            </div>
            <ArrowRight className="h-5 w-5 text-[#A89574] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultRoomId={room.id}
      />
    </div>
  );
}
