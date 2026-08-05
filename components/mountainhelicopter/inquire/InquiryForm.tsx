"use client";

import { useState } from "react";

export default function InquiryForm() {
  const [service, setService] = useState<string>("");
  const [passengers, setPassengers] = useState(2);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const services = ["Tour", "Charter", "Rescue", "Custom"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!service) return alert("Please select a service of interest");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const resetForm = () => {
    setSubmitted(false);
    setService("");
    setPassengers(2);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-[#0a2f5c]">
      <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-12 items-start">
        {/* ─── Left Panel ─── */}
        <div className="flex-1 text-white space-y-8 pt-4">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4 text-[#f5c518]">
              Ready to Fly?
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Tell us about
              <br />
              your flight.
            </h1>
          </div>
          <p className="text-blue-100 text-base leading-relaxed max-w-sm">
            Tour, charter, or rescue inquiry, share your details and our flight
            team will respond within 2 hours.
          </p>

          <div className="space-y-3">
            {[
              "Response < 2 Hrs",
              "7 Days a Week",
              "English · Nepali · Hindi",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3 backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-[#f5c518]" />
                <span className="text-xs font-bold tracking-widest uppercase">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-4">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-blue-200">
              Prefer to talk directly?
            </p>
            <div className="space-y-3 text-sm">
              <ContactRow icon="phone" text="+977-9712082949" />
              <ContactRow icon="phone" text="+977-9712082949" />
              <ContactRow
                icon="email"
                text="info@mountainhelicoptersnepal.com"
              />
            </div>
          </div>
        </div>

        {/* ─── Right Panel, Form ─── */}
        <div className="flex-1 w-full bg-white rounded-2xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          {/* Gold accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#f5c518]" />

          <div className="mb-8">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2 text-[#0a2f5c]">
              Inquiry Form
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Send us your details
            </h2>
            <p className="text-gray-500 text-sm">
              We respond within 2 hours, 7 days a week.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field
                  label="Full Name"
                  required
                  type="text"
                  placeholder="John Doe"
                />
                <Field
                  label="Email"
                  required
                  type="email"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <Field
                label="Phone (with country code)"
                required
                type="tel"
                placeholder="+977 ..."
              />

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase mb-3 text-[#0a2f5c]">
                  Service of Interest <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {services.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setService(s.toLowerCase())}
                      className={`px-4 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                        service === s.toLowerCase()
                          ? "bg-[#0a2f5c] text-white border-[#0a2f5c]"
                          : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tour dropdown (conditional) */}
              {service === "tour" && (
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-[#0a2f5c]">
                    Tour of Interest
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a2f5c]/20 focus:border-[#0a2f5c] transition-all text-sm text-gray-600 bg-white">
                    <option>Not sure yet, please advise</option>
                    <option>Everest Base Camp Tour</option>
                    <option>Annapurna Circuit Tour</option>
                    <option>Langtang Valley Tour</option>
                    <option>Muktinath Temple Tour</option>
                  </select>
                </div>
              )}

              {/* Passengers & Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-[#0a2f5c]">
                    Passengers
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setPassengers(Math.max(1, passengers - 1))}
                      className="w-10 h-10 rounded-full bg-[#0a2f5c] text-white font-bold flex items-center justify-center hover:opacity-90 transition-all"
                    >
                      −
                    </button>
                    <span className="text-lg font-bold w-6 text-center text-[#0a2f5c]">
                      {passengers}
                    </span>
                    <button
                      type="button"
                      onClick={() => setPassengers(passengers + 1)}
                      className="w-10 h-10 rounded-full bg-[#0a2f5c] text-white font-bold flex items-center justify-center hover:opacity-90 transition-all"
                    >
                      +
                    </button>
                  </div>
                </div>
                <Field label="Preferred Date" type="date" />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-[#0a2f5c]">
                  Message / Details
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a2f5c]/20 focus:border-[#0a2f5c] transition-all text-sm resize-none"
                  placeholder="Anything else we should know?"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-lg bg-[#0a2f5c] text-white font-semibold text-sm tracking-wide hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                    Sending...
                  </>
                ) : (
                  <>
                    Submit Inquiry
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </>
                )}
              </button>

              <p className="text-center text-[10px] text-gray-400 tracking-wider uppercase leading-relaxed">
                By submitting, you agree to be contacted by Mountain Helicopters
                about your inquiry. We don&apos;t share data with third parties.
              </p>
            </form>
          ) : (
            /* Success State */
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-[#0a2f5c] flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-[#0a2f5c]">
                Inquiry Sent!
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                We&apos;ll get back to you within 2 hours.
              </p>
              <button
                onClick={resetForm}
                className="px-6 py-2 rounded-lg bg-[#0a2f5c] text-white text-sm font-medium hover:opacity-90 transition-all"
              >
                Send Another
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Sub-components ─── */

function Field({
  label,
  required,
  type,
  placeholder,
}: {
  label: string;
  required?: boolean;
  type: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-bold tracking-widest uppercase mb-2 text-[#0a2f5c]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a2f5c]/20 focus:border-[#0a2f5c] transition-all text-sm"
      />
    </div>
  );
}

function ContactRow({ icon, text }: { icon: "phone" | "email"; text: string }) {
  return (
    <div className="flex items-center gap-3">
      {icon === "phone" ? (
        <svg
          className="w-5 h-5 text-[#f5c518]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      ) : (
        <svg
          className="w-5 h-5 text-[#f5c518]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      )}
      <span className="font-semibold">{text}</span>
    </div>
  );
}
