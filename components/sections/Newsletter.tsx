"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative z-20 border-t border-[rgba(233,229,221,0.1)] bg-[#0D0C09] py-24 md:py-32 text-[#E9E5DD]">
      <div className="shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Left: Title & Concept */}
          <div className="lg:col-span-6">
            <p className="eyebrow">Discreet Correspondence</p>
            <h2 className="mt-4 font-display text-3xl font-light tracking-tight text-[#E9E5DD] sm:text-4xl md:text-5xl">
              Private Notes
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#E9E5DD]/65 font-light">
              Occasional essays, seasonal gastronomic openings, and private suite releases dispatched with discretion.
            </p>
          </div>

          {/* Right: Minimal Form */}
          <div className="lg:col-span-6">
            {submitted ? (
              <div className="flex items-center gap-3 rounded-sm border border-[#7C6A4E]/40 bg-[#17150F] p-5 text-[#E9E5DD]">
                <Check className="h-5 w-5 text-[#A89574]" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#A89574]">
                    Address Placed on Register
                  </p>
                  <p className="text-xs text-[#E9E5DD]/60">
                    We honor quiet inboxes. No promotional mailings will be dispatched.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex items-center border-b border-[rgba(233,229,221,0.2)] pb-2 transition-colors focus-within:border-[#A89574]">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter private email address"
                    className="w-full bg-transparent text-sm text-[#E9E5DD] placeholder:text-[#E9E5DD]/35 outline-none font-light py-2"
                    required
                  />
                  <button
                    type="submit"
                    className="whitespace-nowrap px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#A89574] transition-colors hover:text-[#E9E5DD]"
                  >
                    Join Register →
                  </button>
                </div>
                <p className="text-[10px] text-[#E9E5DD]/40 tracking-wider">
                  Strictly confidential · We never share our register with external parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
