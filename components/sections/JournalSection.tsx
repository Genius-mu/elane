"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollImage from "@/components/ui/ScrollImage";
import { JOURNAL_ARTICLES } from "@/lib/data/hotel";

export default function JournalSection() {
  return (
    <section className="relative z-20 bg-[#17150F] py-32 md:py-44 text-[#E9E5DD]">
      <div className="shell">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between border-b border-[rgba(233,229,221,0.12)] pb-10 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Publications · Editorial Essays</p>
            <h2 className="mt-5 font-display text-4xl font-light leading-[1.1] sm:text-5xl md:text-6xl">
              From the Élane Journal
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#E9E5DD]/70 md:text-base">
              Essays on architectural discipline, seasonal gastronomy, and quiet urban explorations curated by our fellows.
            </p>
          </div>
          <Link
            href="/about"
            className="group mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#A89574] transition-colors hover:text-[#E9E5DD] md:mt-0"
          >
            <span>View All Volumes</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Three Magazine-Style Featured Stories */}
        <div className="mt-20 grid grid-cols-1 gap-14 lg:grid-cols-3 lg:gap-10">
          {JOURNAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col justify-between"
            >
              <div>
                {/* Large Photography Stage */}
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[2px] bg-[#1E1B15]">
                  <ScrollImage
                    src={article.image}
                    alt={article.title}
                    aspectRatio="aspect-[16/11]"
                    depth={0.8}
                    scale={1.05}
                    rotation={0.8}
                    parallax={25}
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="rounded-full bg-[#17150F]/80 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[#A89574] backdrop-blur-md">
                      {article.number} · {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Meta & Title */}
                <div className="mt-6 flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-[#E9E5DD]/50 font-mono">
                  <span>{article.category}</span>
                  <span>{article.date}</span>
                </div>

                <h3 className="mt-3 font-display text-2xl font-light leading-snug text-[#E9E5DD] transition-colors group-hover:text-[#A89574]">
                  {article.title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-[#E9E5DD]/65 font-light">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-8 border-t border-[rgba(233,229,221,0.08)] pt-4 flex items-center justify-between">
                <span className="text-[11px] text-[#E9E5DD]/45">
                  {article.author}
                </span>
                <span className="text-xs uppercase tracking-[0.16em] text-[#A89574] transition-transform group-hover:translate-x-1">
                  Read Essay →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
