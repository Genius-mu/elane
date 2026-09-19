"use client";

import { useState } from "react";
import { Check, Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [department, setDepartment] = useState("Head Concierge");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const locations = [
    {
      city: "New York (Flagship)",
      address: "420 Madison Avenue, Floors 1–42",
      phone: "+1 (212) 555-0187",
      email: "ny.concierge@elanehotels.com",
    },
    {
      city: "London",
      address: "18 Berkeley Square, Mayfair",
      phone: "+44 (20) 7946 0192",
      email: "london@elanehotels.com",
    },
    {
      city: "Paris",
      address: "12 Place Vendôme, 1er Arrondissement",
      phone: "+33 (1) 42 68 55 00",
      email: "paris@elanehotels.com",
    },
    {
      city: "Tokyo",
      address: "Toranomon Hills Station Tower, Minato-ku",
      phone: "+81 (3) 5555 0144",
      email: "tokyo@elanehotels.com",
    },
  ];

  return (
    <div className="bg-[#17150F] pt-36 pb-32 text-[#E9E5DD]">
      <div className="shell">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="eyebrow">Private Correspondence</p>
          <h1 className="mt-4 font-display text-4xl font-light leading-[1.05] sm:text-6xl md:text-7xl">
            Concierge Dispatch
          </h1>
          <p className="mt-6 text-sm font-light leading-relaxed text-[#E9E5DD]/70 md:text-base">
            For bespoke reservation inquiries, confidential suite allocations, private aviation coordination, or culinary buyout requests. All correspondence is held in strict discretion.
          </p>
        </div>

        {/* Form and Global Locations Grid */}
        <div className="mt-20 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="rounded-sm border border-[rgba(233,229,221,0.12)] bg-[#1E1B15] p-8 md:p-12">
              <h2 className="font-display text-2xl font-light text-[#E9E5DD] sm:text-3xl">
                Send a Private Communication
              </h2>
              <p className="mt-2 text-xs text-[#E9E5DD]/55">
                Our Senior Concierge team responds to all formal inquiries within sixty minutes.
              </p>

              {submitted ? (
                <div className="mt-8 flex items-center gap-3 rounded-sm border border-[#7C6A4E]/50 bg-[#17150F] p-6 text-[#A89574]">
                  <Check className="h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="font-display text-lg text-[#E9E5DD]">Message Dispatched in Confidence</h3>
                    <p className="text-xs text-[#E9E5DD]/70">
                      Your inquiry has been allocated to the {department} desk. A senior representative will contact you directly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-[#E9E5DD]/50">Guest Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Marcus Vance"
                        className="mt-2 w-full rounded-sm border border-[rgba(233,229,221,0.12)] bg-[#17150F] p-3 text-xs text-[#E9E5DD] outline-none focus:border-[#7C6A4E]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-[#E9E5DD]/50">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. vance@familyoffice.com"
                        className="mt-2 w-full rounded-sm border border-[rgba(233,229,221,0.12)] bg-[#17150F] p-3 text-xs text-[#E9E5DD] outline-none focus:border-[#7C6A4E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#E9E5DD]/50">Department of Focus</label>
                    <select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="mt-2 w-full rounded-sm border border-[rgba(233,229,221,0.12)] bg-[#17150F] p-3 text-xs text-[#E9E5DD] outline-none focus:border-[#7C6A4E]"
                    >
                      <option value="Head Concierge">Head Concierge · Bespoke Travel & Transit</option>
                      <option value="Suite Reservations">Suite Reservations & Private Floors</option>
                      <option value="Gastronomy & Buyouts">Gastronomy, Wine Cellar & Buyouts</option>
                      <option value="Executive Management">Executive Management & Press</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#E9E5DD]/50">Message or Requirements</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Outline dates of interest, party size, private flight numbers, or special dietary considerations..."
                      className="mt-2 w-full rounded-sm border border-[rgba(233,229,221,0.12)] bg-[#17150F] p-3 text-xs text-[#E9E5DD] outline-none focus:border-[#7C6A4E]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full border border-[#7C6A4E] bg-[#7C6A4E] py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#17150F] transition-all hover:bg-[#A89574]"
                  >
                    Dispatch Private Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* International Offices */}
          <div className="lg:col-span-5 space-y-8">
            <span className="eyebrow">International Residences</span>

            <div className="space-y-6">
              {locations.map((loc) => (
                <div
                  key={loc.city}
                  className="rounded-sm border border-[rgba(233,229,221,0.08)] bg-[#17150F] p-6 space-y-2.5"
                >
                  <h3 className="font-display text-xl text-[#E9E5DD]">{loc.city}</h3>
                  <div className="flex items-start gap-2 text-xs text-[#E9E5DD]/60">
                    <MapPin className="h-3.5 w-3.5 text-[#A89574] mt-0.5 flex-shrink-0" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#E9E5DD]/60">
                    <Phone className="h-3.5 w-3.5 text-[#A89574] flex-shrink-0" />
                    <span>{loc.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#E9E5DD]/60">
                    <Mail className="h-3.5 w-3.5 text-[#A89574] flex-shrink-0" />
                    <span>{loc.email}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
