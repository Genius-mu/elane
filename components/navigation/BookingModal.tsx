"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Users, ChevronRight, Check } from "lucide-react";
import { ROOMS } from "@/lib/data/hotel";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRoomId?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  defaultRoomId = "residence",
}: BookingModalProps) {
  const [arrivalDate, setArrivalDate] = useState("2026-09-18");
  const [departureDate, setDepartureDate] = useState("2026-09-22");
  const [adults, setAdults] = useState(2);
  const [selectedRoomId, setSelectedRoomId] = useState(defaultRoomId);
  const [specialRequests, setSpecialRequests] = useState("");
  const [status, setStatus] = useState<"idle" | "searching" | "confirmed">("idle");

  const selectedRoom = ROOMS.find((r) => r.id === selectedRoomId) || ROOMS[0];

  const handleCheckAvailability = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("searching");
    setTimeout(() => {
      setStatus("confirmed");
    }, 1200);
  };

  const handleReset = () => {
    setStatus("idle");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 280 }}
            className="relative z-10 flex h-full w-full max-w-xl flex-col bg-[#17150F] border-l border-[rgba(233,229,221,0.12)] text-[#E9E5DD] shadow-2xl overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[rgba(233,229,221,0.1)] bg-[#17150F]/90 px-8 py-6 backdrop-blur-md">
              <div>
                <p className="eyebrow">Reservation Inquiry</p>
                <h3 className="mt-1 font-display text-2xl font-light">Book a Stay</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(233,229,221,0.15)] text-[#E9E5DD]/70 transition-colors hover:border-[#7C6A4E] hover:text-white"
                aria-label="Close reservation panel"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 px-8 py-8">
              {status === "confirmed" ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center py-12 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#7C6A4E] bg-[#7C6A4E]/10 text-[#A89574]">
                    <Check className="h-8 w-8" />
                  </div>
                  <p className="eyebrow mt-6">Inquiry Received</p>
                  <h4 className="mt-2 font-display text-3xl">Direct Access Confirmed</h4>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#E9E5DD]/70">
                    Your reservation window for <span className="text-[#E9E5DD] font-medium">{selectedRoom.name}</span> ({arrivalDate} to {departureDate}) has been placed with our Senior Concierge. A private bespoke itinerary will be dispatched to your email within the hour.
                  </p>

                  <div className="mt-8 w-full rounded-sm border border-[rgba(233,229,221,0.1)] bg-[#1E1B15] p-5 text-left">
                    <div className="flex justify-between border-b border-[rgba(233,229,221,0.08)] pb-3 text-xs">
                      <span className="text-[#E9E5DD]/50">Suite</span>
                      <span className="text-[#E9E5DD]">{selectedRoom.name}</span>
                    </div>
                    <div className="flex justify-between border-b border-[rgba(233,229,221,0.08)] py-3 text-xs">
                      <span className="text-[#E9E5DD]/50">Length of Stay</span>
                      <span className="text-[#E9E5DD]">4 Nights · {adults} Guests</span>
                    </div>
                    <div className="flex justify-between pt-3 text-xs">
                      <span className="text-[#E9E5DD]/50">Estimated Rate</span>
                      <span className="font-display text-sm text-[#A89574]">${selectedRoom.pricePerNight * 4} USD</span>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#7C6A4E] bg-[#7C6A4E] px-8 py-3 text-xs uppercase tracking-[0.2em] text-[#17150F] transition-colors hover:bg-[#A89574]"
                  >
                    Return to Experience
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleCheckAvailability} className="space-y-8">
                  {/* Dates */}
                  <div>
                    <label className="eyebrow block">Dates of Stay</label>
                    <div className="mt-3 grid grid-cols-2 gap-4">
                      <div className="rounded-sm border border-[rgba(233,229,221,0.12)] bg-[#1E1B15] p-3 transition-colors focus-within:border-[#7C6A4E]">
                        <span className="block text-[10px] uppercase tracking-[0.2em] text-[#E9E5DD]/50">Arrival</span>
                        <div className="mt-1 flex items-center gap-2">
                          <Calendar className="h-3.5 w-3.5 text-[#A89574]" />
                          <input
                            type="date"
                            value={arrivalDate}
                            onChange={(e) => setArrivalDate(e.target.value)}
                            className="w-full bg-transparent text-xs text-[#E9E5DD] outline-none"
                            required
                          />
                        </div>
                      </div>
                      <div className="rounded-sm border border-[rgba(233,229,221,0.12)] bg-[#1E1B15] p-3 transition-colors focus-within:border-[#7C6A4E]">
                        <span className="block text-[10px] uppercase tracking-[0.2em] text-[#E9E5DD]/50">Departure</span>
                        <div className="mt-1 flex items-center gap-2">
                          <Calendar className="h-3.5 w-3.5 text-[#A89574]" />
                          <input
                            type="date"
                            value={departureDate}
                            onChange={(e) => setDepartureDate(e.target.value)}
                            className="w-full bg-transparent text-xs text-[#E9E5DD] outline-none"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="eyebrow block">Party Size</label>
                    <div className="mt-3 flex items-center justify-between rounded-sm border border-[rgba(233,229,221,0.12)] bg-[#1E1B15] p-4">
                      <div className="flex items-center gap-3">
                        <Users className="h-4 w-4 text-[#A89574]" />
                        <div>
                          <p className="text-sm font-medium">Guests</p>
                          <p className="text-xs text-[#E9E5DD]/50">Adults and accompanied children</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(233,229,221,0.2)] text-sm transition-colors hover:border-[#7C6A4E]"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-sm font-medium">{adults}</span>
                        <button
                          type="button"
                          onClick={() => setAdults(Math.min(6, adults + 1))}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(233,229,221,0.2)] text-sm transition-colors hover:border-[#7C6A4E]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Room Selection */}
                  <div>
                    <div className="flex items-center justify-between">
                      <label className="eyebrow block">Select Space</label>
                      <span className="text-[11px] text-[#A89574]">From ${selectedRoom.pricePerNight} / night</span>
                    </div>

                    <div className="mt-3 grid gap-3">
                      {ROOMS.map((room) => {
                        const isSelected = room.id === selectedRoomId;
                        return (
                          <div
                            key={room.id}
                            onClick={() => setSelectedRoomId(room.id)}
                            className={`group relative flex cursor-pointer items-center gap-4 rounded-sm border p-3 transition-all ${
                              isSelected
                                ? "border-[#7C6A4E] bg-[#1E1B15]"
                                : "border-[rgba(233,229,221,0.08)] bg-[#17150F] hover:border-[rgba(233,229,221,0.2)]"
                            }`}
                          >
                            <div className="relative h-14 w-18 flex-shrink-0 overflow-hidden rounded-[2px]">
                              <Image
                                src={room.featuredImage}
                                alt={room.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-baseline justify-between">
                                <h5 className="truncate font-display text-sm text-[#E9E5DD]">{room.name}</h5>
                                <span className="text-xs text-[#A89574] font-mono">${room.pricePerNight}</span>
                              </div>
                              <p className="truncate text-xs text-[#E9E5DD]/50">{room.size} · {room.view}</p>
                            </div>
                            <div
                              className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                                isSelected ? "border-[#7C6A4E] bg-[#7C6A4E]" : "border-[rgba(233,229,221,0.2)]"
                              }`}
                            >
                              {isSelected && <div className="h-1.5 w-1.5 rounded-full bg-[#17150F]" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="eyebrow block">Concierge Notes (Optional)</label>
                    <textarea
                      rows={2}
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      placeholder="Dietary preferences, arrival flight details, pillow preference..."
                      className="mt-3 w-full rounded-sm border border-[rgba(233,229,221,0.12)] bg-[#1E1B15] p-3 text-xs text-[#E9E5DD] outline-none placeholder:text-[#E9E5DD]/30 focus:border-[#7C6A4E]"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "searching"}
                      className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#E9E5DD] py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#17150F] transition-all hover:bg-[#FFFFFF]"
                    >
                      {status === "searching" ? (
                        <span>Checking Allocation...</span>
                      ) : (
                        <>
                          <span>Check Availability</span>
                          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                    <p className="mt-3 text-center text-[10px] tracking-wider text-[#E9E5DD]/40">
                      Discreet reservation request · No deposit processed at this stage
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
