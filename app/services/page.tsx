"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Sparkles, Compass, ShieldCheck } from "lucide-react";
import { HOTEL_FACILITIES } from "@/lib/data/hotel";
import ScrollImage from "@/components/ui/ScrollImage";

export default function ServicesPage() {
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("Private Spa Ceremony");

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  return (
    <div className="bg-[#17150F] pt-36 pb-32 text-[#E9E5DD]">
      <div className="shell">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="eyebrow">Sanctuary & Amenities</p>
          <h1 className="mt-4 font-display text-4xl font-light leading-[1.05] sm:text-6xl md:text-7xl">
            Wellness & Services
          </h1>
          <p className="mt-6 text-sm font-light leading-relaxed text-[#E9E5DD]/70 md:text-base">
            Engineered as a subterranean and vertical retreat, our facilities combine ancient hydrotherapy disciplines, bespoke Biologique Recherche aesthetic therapies, and 24-hour Les Clefs d&#39;Or international concierge navigation.
          </p>
        </div>

        {/* Facilities Detailed Grid */}
        <div className="mt-24 space-y-36">
          {HOTEL_FACILITIES.map((facility, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={facility.id}
                id={facility.id}
                className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20"
              >
                {/* Visual */}
                <div className={`lg:col-span-7 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  <ScrollImage
                    src={facility.image}
                    alt={facility.headline}
                    aspectRatio="aspect-[16/11]"
                    depth={1.0}
                    scale={1.05}
                    rotation={isReversed ? 1.4 : -1.4}
                    parallax={30}
                  />
                </div>

                {/* Content */}
                <div className={`lg:col-span-5 ${isReversed ? "lg:order-1" : "lg:order-2"} space-y-6`}>
                  <div>
                    <span className="font-mono text-xs text-[#A89574]">{facility.number}</span>
                    <span className="mx-2 text-[#E9E5DD]/30">·</span>
                    <span className="eyebrow">{facility.category}</span>
                  </div>

                  <h2 className="font-display text-3xl font-light text-[#E9E5DD] sm:text-4xl">
                    {facility.headline}
                  </h2>

                  <p className="text-sm font-light leading-relaxed text-[#E9E5DD]/75">
                    {facility.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="border-t border-[rgba(233,229,221,0.1)] pt-6 space-y-3">
                    {facility.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs text-[#E9E5DD]/70">
                        <Sparkles className="h-4 w-4 text-[#A89574] mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Concierge & Private Request Form */}
        <div className="mt-32 rounded-sm border border-[rgba(233,229,221,0.12)] bg-[#1E1B15] p-8 md:p-14">
          <div className="max-w-2xl">
            <p className="eyebrow">Direct Consultation</p>
            <h3 className="mt-3 font-display text-3xl font-light text-[#E9E5DD]">
              Tailored Wellness & Itinerary Request
            </h3>
            <p className="mt-3 text-xs text-[#E9E5DD]/60">
              Submit your dates and specific focus (sleep restoration, private training, chartered aviation, or dietary protocol). Our Concierge Director will respond in confidence.
            </p>
          </div>

          {inquirySubmitted ? (
            <div className="mt-8 flex items-center gap-3 rounded-sm border border-[#7C6A4E]/50 bg-[#17150F] p-6 text-[#A89574]">
              <Check className="h-6 w-6 flex-shrink-0" />
              <div>
                <p className="font-display text-lg text-[#E9E5DD]">Consultation Inquiry Dispatched</p>
                <p className="text-xs text-[#E9E5DD]/70">
                  Head Concierge has received your request and will provide a personalized proposal within 2 hours.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleInquiry} className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="text-[10px] uppercase tracking-wider text-[#E9E5DD]/50">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lady Catherine Sterling"
                  className="mt-2 w-full rounded-sm border border-[rgba(233,229,221,0.12)] bg-[#17150F] p-3.5 text-xs text-[#E9E5DD] outline-none focus:border-[#7C6A4E]"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-[#E9E5DD]/50">Direct Email</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. catherine@sterlingholdings.com"
                  className="mt-2 w-full rounded-sm border border-[rgba(233,229,221,0.12)] bg-[#17150F] p-3.5 text-xs text-[#E9E5DD] outline-none focus:border-[#7C6A4E]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-[10px] uppercase tracking-wider text-[#E9E5DD]/50">Service of Focus</label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="mt-2 w-full rounded-sm border border-[rgba(233,229,221,0.12)] bg-[#17150F] p-3.5 text-xs text-[#E9E5DD] outline-none focus:border-[#7C6A4E]"
                >
                  <option value="Private Spa Ceremony">Private Spa Ceremony & Biologique Recherche</option>
                  <option value="Mineral Lap Pool Private Hours">Mineral Lap Pool Private Midnight Hours</option>
                  <option value="Personal Biomechanics Coaching">Personal Biomechanics & Reformer Coaching</option>
                  <option value="Chauffeured Maybach & Aviation">Chauffeured Maybach Fleet & Airside Greeting</option>
                  <option value="Curator Private Museum Access">Curator Private Museum & Architectural Tours</option>
                </select>
              </div>

              <div className="sm:col-span-2 pt-2">
                <button
                  type="submit"
                  className="rounded-full border border-[#7C6A4E] bg-[#7C6A4E] px-8 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-[#17150F] transition-all hover:bg-[#A89574]"
                >
                  Send Private Consultation Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
