"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { JOURNAL_ARTICLES, HOTEL_STATS } from "@/lib/data/hotel";
import ScrollImage from "@/components/ui/ScrollImage";

export default function AboutPage() {
  const [selectedArticle, setSelectedArticle] = useState<(typeof JOURNAL_ARTICLES)[0] | null>(null);

  return (
    <div className="bg-[#17150F] pt-36 pb-32 text-[#E9E5DD]">
      <div className="shell">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="eyebrow">Heritage & Vision</p>
          <h1 className="mt-4 font-display text-4xl font-light leading-[1.05] sm:text-6xl md:text-7xl">
            The Monolith & The Light
          </h1>
          <p className="mt-6 text-sm font-light leading-relaxed text-[#E9E5DD]/70 md:text-base">
            Conceived four decades ago as an antidote to disposable luxury, ÉLANE stands as a 42-storey monument to architectural permanence, silence, and discreet human hospitality.
          </p>
        </div>

        {/* Large Architectural Hero Visual */}
        <div className="mt-16 w-full">
          <ScrollImage
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90"
            alt="Élane facade fluted limestone and bronze mullions"
            aspectRatio="aspect-[16/9]"
            depth={1.1}
            scale={1.04}
            rotation={0.5}
            parallax={25}
          />
        </div>

        {/* Heritage Story & Stats */}
        <div className="mt-24 grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5 space-y-6">
            <span className="eyebrow">Foundation Narrative</span>
            <h2 className="font-display text-3xl font-light sm:text-4xl">
              Constructed to outlast contemporary fashion.
            </h2>
            <div className="border-t border-[rgba(233,229,221,0.1)] pt-6">
              <div className="grid grid-cols-2 gap-6">
                {HOTEL_STATS.map((stat) => (
                  <div key={stat.label}>
                    <span className="font-display text-3xl text-[#A89574]">{stat.value}</span>
                    <p className="mt-1 text-[11px] uppercase tracking-wider text-[#E9E5DD]/50">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-sm font-light leading-relaxed text-[#E9E5DD]/75 md:text-base">
            <p>
              In 1987, when the hotel broke ground, contemporary hospitality was defined by gilded ornament, revolving doors, and vast public lobbies intended for social spectacle.
            </p>
            <p>
              Our founders rejected that premise entirely. Drawing inspiration from classical Japanese sukiya tea houses and brutalist European monoliths, they commissioned architects to carve a building from solid blocks of honed Burgundy stone.
            </p>
            <p>
              By sinking windows four feet behind the exterior limestone fins, each room creates deep shadow lines that shield residents from solar heat and urban vibration. Triple-laminated acoustic glazing ensures that even amidst morning city traffic, interior sound levels never exceed 24 decibels — equivalent to a rural forest at dawn.
            </p>
          </div>
        </div>

        {/* Three Architectural Pillars */}
        <div className="mt-28 border-t border-[rgba(233,229,221,0.12)] pt-20">
          <p className="eyebrow">Design Axioms</p>
          <h2 className="mt-4 font-display text-3xl font-light sm:text-5xl">
            The Three Principles
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
            <div className="rounded-sm border border-[rgba(233,229,221,0.1)] bg-[#1E1B15] p-8 space-y-4">
              <span className="font-mono text-xs text-[#A89574]">01</span>
              <h3 className="font-display text-2xl font-light">Substance</h3>
              <p className="text-xs leading-relaxed text-[#E9E5DD]/65">
                Every material used is genuine: unsealed travertine, solid walnut, cast bronze, and Belgian raw linen. There are no veneers or synthetic laminates anywhere on property.
              </p>
            </div>

            <div className="rounded-sm border border-[rgba(233,229,221,0.1)] bg-[#1E1B15] p-8 space-y-4">
              <span className="font-mono text-xs text-[#A89574]">02</span>
              <h3 className="font-display text-2xl font-light">Acoustic Stillness</h3>
              <p className="text-xs leading-relaxed text-[#E9E5DD]/65">
                Silence is our highest luxury. Walls are decoupled, ventilation systems run at sub-audible velocities, and doors close with magnetic hydraulic dampers.
              </p>
            </div>

            <div className="rounded-sm border border-[rgba(233,229,221,0.1)] bg-[#1E1B15] p-8 space-y-4">
              <span className="font-mono text-xs text-[#A89574]">03</span>
              <h3 className="font-display text-2xl font-light">Quiet Discretion</h3>
              <p className="text-xs leading-relaxed text-[#E9E5DD]/65">
                Our staff is trained in observation without intrusion. We remember preferences without demanding questionnaires, preserving total privacy for every guest.
              </p>
            </div>
          </div>
        </div>

        {/* Journal Section */}
        <div className="mt-32 border-t border-[rgba(233,229,221,0.12)] pt-20">
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow">Publications</p>
              <h2 className="mt-4 font-display text-3xl font-light sm:text-5xl">
                The Élane Journal
              </h2>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
            {JOURNAL_ARTICLES.map((article) => (
              <div
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="group cursor-pointer space-y-4"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] bg-[#1E1B15]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#E9E5DD]/50">
                  <span>{article.category}</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="font-display text-xl font-light transition-colors group-hover:text-[#A89574]">
                  {article.title}
                </h3>
                <p className="text-xs text-[#E9E5DD]/60 line-clamp-2">
                  {article.excerpt}
                </p>
                <span className="inline-block text-xs uppercase tracking-wider text-[#A89574]">
                  Read Essay →
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8">
          <div
            onClick={() => setSelectedArticle(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />
          <div className="relative z-10 max-h-[85vh] max-w-2xl overflow-y-auto rounded-sm border border-[rgba(233,229,221,0.15)] bg-[#17150F] p-8 md:p-12 text-[#E9E5DD] shadow-2xl">
            <span className="eyebrow">{selectedArticle.category} · {selectedArticle.readTime}</span>
            <h2 className="mt-4 font-display text-3xl font-light">{selectedArticle.title}</h2>
            <p className="mt-2 text-xs font-mono text-[#A89574]">{selectedArticle.author}</p>

            <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-sm">
              <Image src={selectedArticle.image} alt={selectedArticle.title} fill className="object-cover" />
            </div>

            <div className="mt-8 space-y-4 text-sm font-light leading-relaxed text-[#E9E5DD]/80">
              {selectedArticle.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="mt-10 rounded-full border border-[#7C6A4E] px-6 py-2.5 text-xs uppercase tracking-wider text-[#A89574] hover:bg-[#7C6A4E] hover:text-[#17150F]"
            >
              Close Essay
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
