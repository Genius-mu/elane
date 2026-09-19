"use client";

import { useState, useEffect } from "react";
import { Check, Mail, Phone, MapPin, Clock, Copy, ArrowRight, ShieldCheck, RefreshCw, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Location {
  id: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  timeZone: string;
  coords: { lat: number; lng: number };
  svgPos: { x: number; y: number }; // Relative coordinates for interactive SVG map preview
}

const LOCATIONS: Location[] = [
  {
    id: "ny",
    city: "New York",
    country: "Flagship Residence",
    address: "420 Madison Avenue, Floors 1–42",
    phone: "+1 (212) 555-0187",
    email: "ny.concierge@elanehotels.com",
    timeZone: "America/New_York",
    coords: { lat: 40.7128, lng: -74.006 },
    svgPos: { x: 26, y: 38 },
  },
  {
    id: "london",
    city: "London",
    country: "United Kingdom",
    address: "18 Berkeley Square, Mayfair",
    phone: "+44 (20) 7946 0192",
    email: "london@elanehotels.com",
    timeZone: "Europe/London",
    coords: { lat: 51.5074, lng: -0.1278 },
    svgPos: { x: 48, y: 28 },
  },
  {
    id: "paris",
    city: "Paris",
    country: "France",
    address: "12 Place Vendôme, 1er Arrondissement",
    phone: "+33 (1) 42 68 55 00",
    email: "paris@elanehotels.com",
    timeZone: "Europe/Paris",
    coords: { lat: 48.8566, lng: 2.3522 },
    svgPos: { x: 52, y: 32 },
  },
  {
    id: "tokyo",
    city: "Tokyo",
    country: "Japan",
    address: "Toranomon Hills Station Tower, Minato-ku",
    phone: "+81 (3) 5555 0144",
    email: "tokyo@elanehotels.com",
    timeZone: "Asia/Tokyo",
    coords: { lat: 35.6762, lng: 139.6503 },
    svgPos: { x: 84, y: 44 },
  },
];

export default function ContactPage() {
  const [selectedLocation, setSelectedLocation] = useState<Location>(LOCATIONS[0]);
  const [department, setDepartment] = useState("Head Concierge");
  const [formState, setFormState] = useState<"idle" | "encrypting" | "routing" | "success">("idle");
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [dispatchRef, setDispatchRef] = useState<string>("");
  const [times, setTimes] = useState<Record<string, string>>({});

  // Dynamic World Clocks
  useEffect(() => {
    const updateTimes = () => {
      const updated: Record<string, string> = {};
      LOCATIONS.forEach((loc) => {
        try {
          const formatter = new Intl.DateTimeFormat("en-US", {
            timeZone: loc.timeZone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          });
          updated[loc.id] = formatter.format(new Date());
        } catch {
          updated[loc.id] = "--:--:--";
        }
      });
      setTimes(updated);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("encrypting");

    // Generate unique reference
    const refCode = `ELN-${Math.floor(1000 + Math.random() * 9000)}-${selectedLocation.id.toUpperCase()}`;
    setDispatchRef(refCode);

    setTimeout(() => {
      setFormState("routing");
      setTimeout(() => {
        setFormState("success");
      }, 1200);
    }, 1000);
  };

  const handleReset = () => {
    setFormState("idle");
  };

  return (
    <div className="bg-[#17150F] pt-36 pb-32 text-[#E9E5DD] relative overflow-hidden min-h-screen">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#7C6A4E]/10 via-[#7C6A4E]/5 to-transparent blur-3xl opacity-60" />

      <div className="shell relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(233,229,221,0.15)] bg-[#1E1B15]/80 px-3.5 py-1 text-xs text-[#A89574] backdrop-blur-md">
            <ShieldCheck className="h-3.5 w-3.5 text-[#7C6A4E]" />
            <span className="eyebrow !text-[0.68rem] tracking-[0.22em] text-[#A89574]">Private Correspondence Desk</span>
          </div>
          <h1 className="mt-5 font-display text-4xl font-light leading-[1.05] sm:text-6xl md:text-7xl text-[#E9E5DD]">
            Concierge Dispatch
          </h1>
          <p className="mt-6 text-sm font-light leading-relaxed text-[#E9E5DD]/70 md:text-base max-w-2xl">
            For bespoke reservation inquiries, confidential suite allocations, private aviation coordination, or culinary buyout requests. All communications are encrypted and handled in absolute discretion.
          </p>
        </div>

        {/* Global Residence Clocks Banner */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {LOCATIONS.map((loc) => {
            const isSelected = selectedLocation.id === loc.id;
            return (
              <button
                key={loc.id}
                onClick={() => setSelectedLocation(loc)}
                className={`group text-left p-4 sm:p-5 rounded-sm border transition-all duration-300 relative overflow-hidden ${
                  isSelected
                    ? "border-[#7C6A4E] bg-[#1E1B15] shadow-lg shadow-[#7C6A4E]/10"
                    : "border-[rgba(233,229,221,0.08)] bg-[#17150F]/60 hover:border-[#7C6A4E]/40 hover:bg-[#1E1B15]/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#A89574] font-medium">{loc.city}</span>
                  <span className="flex h-2 w-2 rounded-full bg-[#7C6A4E] animate-pulse" />
                </div>
                <div className="mt-3 flex items-baseline gap-2 font-mono text-lg font-light text-[#E9E5DD]">
                  <Clock className="h-3.5 w-3.5 text-[#A89574]/80 self-center" />
                  <span>{times[loc.id] || "00:00:00"}</span>
                </div>
                <p className="mt-1 text-[10px] text-[#E9E5DD]/45 truncate">{loc.country}</p>
                {isSelected && (
                  <motion.div
                    layoutId="activeClockGlow"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#7C6A4E]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Map Visualizer */}
        <div className="mt-10 rounded-sm border border-[rgba(233,229,221,0.12)] bg-[#1E1B15] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[rgba(233,229,221,0.08)] pb-5">
            <div>
              <div className="flex items-center gap-2">
                <Compass className="h-4 w-4 text-[#A89574]" />
                <h3 className="font-display text-lg text-[#E9E5DD]">Global Residence Telemetry</h3>
              </div>
              <p className="mt-1 text-xs text-[#E9E5DD]/55">
                Active Desk: <span className="text-[#A89574] font-medium">{selectedLocation.city} ({selectedLocation.country})</span>
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs text-[#E9E5DD]/60 font-mono">
              <span>LAT: {selectedLocation.coords.lat}° N</span>
              <span>LNG: {selectedLocation.coords.lng}° W</span>
            </div>
          </div>

          {/* SVG Map Canvas */}
          <div className="relative mt-6 h-56 sm:h-72 w-full rounded border border-[rgba(233,229,221,0.06)] bg-[#12100B] overflow-hidden flex items-center justify-center">
            {/* World Grid Lines Background */}
            <svg className="absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#7C6A4E" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>

            {/* Connecting Flight/Dispatch Lines */}
            <svg className="absolute inset-0 h-full w-full pointer-events-none">
              <path
                d={`M ${LOCATIONS[0].svgPos.x}% ${LOCATIONS[0].svgPos.y}% L ${LOCATIONS[1].svgPos.x}% ${LOCATIONS[1].svgPos.y}% L ${LOCATIONS[2].svgPos.x}% ${LOCATIONS[2].svgPos.y}% L ${LOCATIONS[3].svgPos.x}% ${LOCATIONS[3].svgPos.y}%`}
                fill="none"
                stroke="#7C6A4E"
                strokeWidth="1"
                strokeDasharray="4 4"
                className="opacity-40"
              />
            </svg>

            {/* Location Nodes */}
            {LOCATIONS.map((loc) => {
              const isSelected = selectedLocation.id === loc.id;
              return (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLocation(loc)}
                  style={{ left: `${loc.svgPos.x}%`, top: `${loc.svgPos.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none"
                >
                  <div className="relative flex items-center justify-center">
                    {isSelected && (
                      <span className="absolute h-8 w-8 rounded-full bg-[#7C6A4E]/30 animate-ping" />
                    )}
                    <span
                      className={`h-3.5 w-3.5 rounded-full border transition-all duration-300 ${
                        isSelected
                          ? "bg-[#7C6A4E] border-[#E9E5DD] scale-125 shadow-md shadow-[#7C6A4E]"
                          : "bg-[#1E1B15] border-[#A89574] group-hover:bg-[#7C6A4E]"
                      }`}
                    />
                    <div
                      className={`absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#17150F]/90 px-2 py-1 text-[10px] tracking-wide border transition-all ${
                        isSelected
                          ? "border-[#7C6A4E] text-[#E9E5DD] font-medium"
                          : "border-[rgba(233,229,221,0.1)] text-[#E9E5DD]/60 group-hover:text-[#E9E5DD]"
                      }`}
                    >
                      {loc.city}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Layout: Form & Selected Location Info */}
        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Dispatch Form Container */}
          <div className="lg:col-span-7">
            <div className="rounded-sm border border-[rgba(233,229,221,0.12)] bg-[#1E1B15] p-8 md:p-12 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-[rgba(233,229,221,0.08)] pb-6">
                <div>
                  <h2 className="font-display text-2xl font-light text-[#E9E5DD] sm:text-3xl">
                    Private Correspondence Form
                  </h2>
                  <p className="mt-1 text-xs text-[#E9E5DD]/55">
                    Directly addressing: <span className="text-[#A89574] font-medium">{selectedLocation.city} Residence Concierge</span>
                  </p>
                </div>
                <span className="hidden sm:inline-block rounded border border-[#7C6A4E]/30 bg-[#17150F] px-2.5 py-1 text-[10px] uppercase tracking-widest text-[#A89574]">
                  60-Min SLA Response
                </span>
              </div>

              {/* Form State Machine */}
              <AnimatePresence mode="wait">
                {formState === "idle" && (
                  <motion.form
                    key="form-idle"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-6"
                  >
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-[#E9E5DD]/50">Guest Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Lord Marcus Vance"
                          className="mt-2 w-full rounded-sm border border-[rgba(233,229,221,0.12)] bg-[#17150F] p-3 text-xs text-[#E9E5DD] placeholder-[#E9E5DD]/30 outline-none focus:border-[#7C6A4E] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-[#E9E5DD]/50">Confidential Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. m.vance@vanceoffice.co.uk"
                          className="mt-2 w-full rounded-sm border border-[rgba(233,229,221,0.12)] bg-[#17150F] p-3 text-xs text-[#E9E5DD] placeholder-[#E9E5DD]/30 outline-none focus:border-[#7C6A4E] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-[#E9E5DD]/50">Telephone / Signal</label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 019-2834"
                          className="mt-2 w-full rounded-sm border border-[rgba(233,229,221,0.12)] bg-[#17150F] p-3 text-xs text-[#E9E5DD] placeholder-[#E9E5DD]/30 outline-none focus:border-[#7C6A4E] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-[#E9E5DD]/50">Department of Focus</label>
                        <select
                          value={department}
                          onChange={(e) => setDepartment(e.target.value)}
                          className="mt-2 w-full rounded-sm border border-[rgba(233,229,221,0.12)] bg-[#17150F] p-3 text-xs text-[#E9E5DD] outline-none focus:border-[#7C6A4E] transition-colors"
                        >
                          <option value="Head Concierge">Head Concierge · Bespoke Travel & Transit</option>
                          <option value="Suite Reservations">Suite Reservations & Private Penthouse</option>
                          <option value="Gastronomy & Buyouts">Gastronomy, Wine Cellar & Buyouts</option>
                          <option value="Executive Management">Executive Management & Private Press</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-[#E9E5DD]/50">Dispatch Specifications & Dates *</label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Outline requested dates of stay, party size, private aviation specs, dietary preferences, or security protocols..."
                        className="mt-2 w-full rounded-sm border border-[rgba(233,229,221,0.12)] bg-[#17150F] p-3 text-xs text-[#E9E5DD] placeholder-[#E9E5DD]/30 outline-none focus:border-[#7C6A4E] transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-3 rounded-full border border-[#7C6A4E] bg-[#7C6A4E] py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#17150F] transition-all hover:bg-[#A89574] hover:shadow-lg hover:shadow-[#7C6A4E]/20 active:scale-[0.99]"
                    >
                      <span>Dispatch Private Inquiry</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </motion.form>
                )}

                {(formState === "encrypting" || formState === "routing") && (
                  <motion.div
                    key="form-loading"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-16 text-center space-y-6"
                  >
                    <div className="relative inline-flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full border-2 border-[#7C6A4E]/30 border-t-[#7C6A4E] animate-spin" />
                      <ShieldCheck className="absolute h-6 w-6 text-[#A89574]" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-[#E9E5DD]">
                        {formState === "encrypting" ? "Encrypting Private Transmission..." : `Routing to ${selectedLocation.city} Desk...`}
                      </h3>
                      <p className="mt-2 text-xs text-[#E9E5DD]/55 font-mono">
                        {formState === "encrypting" ? "AES-256-GCM Handshake in Progress" : `Allocating Senior Duty Manager (${department})`}
                      </p>
                    </div>
                  </motion.div>
                )}

                {formState === "success" && (
                  <motion.div
                    key="form-success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-8 space-y-6"
                  >
                    <div className="rounded-sm border border-[#7C6A4E]/60 bg-[#17150F] p-6 md:p-8 space-y-4">
                      <div className="flex items-center gap-3 text-[#A89574]">
                        <div className="rounded-full bg-[#7C6A4E]/20 p-2">
                          <Check className="h-6 w-6 text-[#A89574]" />
                        </div>
                        <div>
                          <h3 className="font-display text-xl text-[#E9E5DD]">Communication Dispatched in Confidence</h3>
                          <p className="text-xs text-[#E9E5DD]/60">Assigned Desk: {selectedLocation.city} · {department}</p>
                        </div>
                      </div>

                      <div className="my-4 hairline" />

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-xs">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-[#E9E5DD]/40">Dispatch Reference</span>
                          <p className="mt-1 font-mono font-medium text-[#A89574]">{dispatchRef}</p>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-[#E9E5DD]/40">Response SLA</span>
                          <p className="mt-1 text-[#E9E5DD]/80">Within 60 Minutes (Priority Line)</p>
                        </div>
                      </div>

                      <p className="text-xs text-[#E9E5DD]/65 leading-relaxed pt-2">
                        A Senior Representative at our <span className="text-[#E9E5DD] font-medium">{selectedLocation.city} Residence</span> has received your inquiry. All communications remain protected under Elane Private Guest Discretion Protocols.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="flex items-center justify-center gap-2 w-full rounded-full border border-[rgba(233,229,221,0.2)] bg-[#17150F] py-3.5 text-xs text-[#E9E5DD]/80 hover:text-[#E9E5DD] hover:border-[#7C6A4E] transition-colors"
                    >
                      <RefreshCw className="h-3.5 w-3.5" />
                      <span>Dispatch Additional Inquiry</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Selected Location Direct Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-sm border border-[#7C6A4E]/40 bg-[#1E1B15] p-8 space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="eyebrow !text-[0.65rem] text-[#A89574]">Residence Profile</span>
                <span className="text-[10px] font-mono text-[#E9E5DD]/40 uppercase">{selectedLocation.id.toUpperCase()} Desk</span>
              </div>

              <div>
                <h3 className="font-display text-3xl text-[#E9E5DD]">{selectedLocation.city}</h3>
                <p className="mt-1 text-xs text-[#A89574] font-medium">{selectedLocation.country}</p>
              </div>

              <div className="space-y-4 text-xs text-[#E9E5DD]/75 border-t border-[rgba(233,229,221,0.08)] pt-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[#A89574] mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{selectedLocation.address}</span>
                </div>

                <div className="flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-[#A89574] flex-shrink-0" />
                    <a
                      href={`tel:${selectedLocation.phone.replace(/[^0-9+]/g, "")}`}
                      className="hover:text-[#A89574] transition-colors"
                    >
                      {selectedLocation.phone}
                    </a>
                  </div>
                  <span className="text-[10px] text-[#E9E5DD]/40">24/7 Priority Line</span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Mail className="h-4 w-4 text-[#A89574] flex-shrink-0" />
                    <span className="truncate">{selectedLocation.email}</span>
                  </div>
                  <button
                    onClick={() => handleCopyEmail(selectedLocation.email)}
                    title="Copy Email Address"
                    className="p-1.5 rounded hover:bg-[#17150F] text-[#A89574] hover:text-[#E9E5DD] transition-colors flex-shrink-0 relative"
                  >
                    {copiedEmail === selectedLocation.email ? (
                      <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Toast for Copy Email */}
              <AnimatePresence>
                {copiedEmail && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="text-[11px] text-center bg-[#17150F] border border-[#7C6A4E]/50 text-[#A89574] py-2 rounded-sm"
                  >
                    Email address copied to clipboard
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Residences Direct List */}
            <div className="rounded-sm border border-[rgba(233,229,221,0.08)] bg-[#17150F] p-6 space-y-4">
              <h4 className="text-xs uppercase tracking-wider text-[#A89574] font-medium">
                Other International Residences
              </h4>
              <div className="space-y-3 divide-y divide-[rgba(233,229,221,0.06)]">
                {LOCATIONS.filter((l) => l.id !== selectedLocation.id).map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc)}
                    className="pt-3 first:pt-0 w-full flex items-center justify-between text-left group transition-colors"
                  >
                    <div>
                      <p className="text-sm font-display text-[#E9E5DD] group-hover:text-[#A89574]">
                        {loc.city}
                      </p>
                      <p className="text-[10px] text-[#E9E5DD]/45">{loc.country}</p>
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 text-[#E9E5DD]/30 group-hover:text-[#A89574] group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
