"use client";

import { FormEvent, useState } from "react";
import { submitInquiry } from "@/lib/inquiries";

type SupabaseLikeError = {
  message?: string;
};

export default function InquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await submitInquiry({
        full_name: String(formData.get("name") || ""),
        email: String(formData.get("email") || ""),
        phone: String(formData.get("phone") || ""),
        group_size: String(formData.get("group") || ""),
        service_type: String(formData.get("service") || ""),
        preferred_date: String(formData.get("date") || "") || null,
        message: String(formData.get("message") || ""),
      });

      form.reset();
      setSubmitStatus("success");
      setSubmitMessage(
        "Inquiry submitted successfully. We will contact you soon.",
      );
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : (error as SupabaseLikeError)?.message ||
            "Unable to submit your inquiry. Please try again.";

      console.error("Inquiry submission failed:", error);
      setSubmitStatus("error");
      setSubmitMessage(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="inquiry-form"
      className="relative overflow-hidden bg-[#003366] text-white"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:radial-gradient(circle,#FFFFFF_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
          <div>
            <span className="mb-4 block font-manrope text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#f5a623]">
              Ready to fly?
            </span>

            <h2 className="mb-6 font-fraunces text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.02em]">
              Tell us about your flight.
            </h2>

            <p className="mb-10 font-manrope text-lg leading-relaxed text-white/85">
              Tour, charter, or rescue inquiry, share your details and our
              flight team responds within 2 hours.
            </p>

            <div>
              <span className="mb-5 block font-manrope text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#f5a623]">
                What happens next
              </span>

              <div className="relative ml-3.5 border-l border-white/20 pb-8 pl-10">
                <div className="absolute -left-[13px] top-0 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#f5a623] font-manrope text-xs font-bold text-[#003366]">
                  1
                </div>
                <h4 className="mb-1 font-manrope font-bold">
                  We read your inquiry
                </h4>
                <p className="font-manrope text-sm leading-relaxed text-white/70">
                  A real flight coordinator, not a bot, reviews your dates,
                  route, and group size.
                </p>
              </div>

              <div className="relative ml-3.5 border-l border-white/20 pb-8 pl-10">
                <div className="absolute -left-[13px] top-0 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#f5a623] font-manrope text-xs font-bold text-[#003366]">
                  2
                </div>
                <h4 className="mb-1 font-manrope font-bold">
                  You get a real quote in &lt; 2 hrs
                </h4>
                <p className="font-manrope text-sm leading-relaxed text-white/70">
                  Availability, exact pricing with all fees included, and pilot
                  allocation.
                </p>
              </div>

              <div className="relative ml-3.5 pl-10">
                <div className="absolute -left-[13px] top-0 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#f5a623] font-manrope text-xs font-bold text-[#003366]">
                  3
                </div>
                <h4 className="mb-1 font-manrope font-bold">Confirm & fly</h4>
                <p className="font-manrope text-sm leading-relaxed text-white/70">
                  30% deposit locks your slot. Free reschedule if weather
                  grounds the flight.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border-t-4 border-[#f5a623] bg-white p-8 text-[#0A1929] shadow-2xl md:p-10">
            <span className="mb-2 block font-manrope text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#003366]">
              Inquiry form
            </span>

            <h3 className="mb-2 font-manrope text-2xl font-bold text-[#0A1929] md:text-3xl">
              Send us your details
            </h3>

            <p className="mb-8 font-manrope text-[#6B7886]">
              We respond within 2 hours, 7 days a week.
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block font-manrope text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#6B7886]">
                    Full name *
                  </span>
                  <input
                    required
                    type="text"
                    name="name"
                    className="w-full rounded-lg border border-[#E2E8F0] px-3.5 py-3 font-manrope text-sm transition focus:border-[#003366] focus:outline-none focus:ring-2 focus:ring-[#003366]/30"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block font-manrope text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#6B7886]">
                    Email *
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="w-full rounded-lg border border-[#E2E8F0] px-3.5 py-3 font-manrope text-sm transition focus:border-[#003366] focus:outline-none focus:ring-2 focus:ring-[#003366]/30"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block font-manrope text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#6B7886]">
                    Phone / WhatsApp *
                  </span>
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="+977 …"
                    className="w-full rounded-lg border border-[#E2E8F0] px-3.5 py-3 font-manrope text-sm transition focus:border-[#003366] focus:outline-none focus:ring-2 focus:ring-[#003366]/30"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block font-manrope text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#6B7886]">
                    Group size
                  </span>
                  <select
                    name="group"
                    className="w-full rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-3 font-manrope text-sm transition focus:border-[#003366] focus:outline-none focus:ring-2 focus:ring-[#003366]/30"
                  >
                    <option value="1">1 passenger</option>
                    <option value="2">2 passengers</option>
                    <option value="3">3 passengers</option>
                    <option value="4">4 passengers</option>
                    <option value="5">5 passengers</option>
                    <option value="5">Charter full helicopter</option>
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block font-manrope text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#6B7886]">
                  Service of interest *
                </span>

                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {["Tour", "Charter", "Rescue", "Custom"].map((item) => (
                    <label key={item} className="block cursor-pointer">
                      <input
                        type="radio"
                        name="service"
                        value={item}
                        defaultChecked={item === "Tour"}
                        className="peer sr-only"
                      />
                      <span className="block rounded-lg bg-[#E6F0F8] p-3 text-center font-manrope text-sm font-semibold text-[#0A1929] transition hover:bg-[#E6F0F8]/70 peer-checked:bg-[#003366] peer-checked:text-white">
                        {item}
                      </span>
                    </label>
                  ))}
                </div>
              </label>

              <label className="block">
                <span className="mb-1.5 block font-manrope text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#6B7886]">
                  Preferred date
                </span>
                <input
                  type="date"
                  name="date"
                  className="w-full rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-3 font-manrope text-sm transition focus:border-[#003366] focus:outline-none focus:ring-2 focus:ring-[#003366]/30"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block font-manrope text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#6B7886]">
                  Your message
                </span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Destination, dates, special requests…"
                  className="w-full rounded-lg border border-[#E2E8F0] px-3.5 py-3 font-manrope text-sm transition focus:border-[#003366] focus:outline-none focus:ring-2 focus:ring-[#003366]/30"
                />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border-b-2 border-[#f5a623] bg-[#003366] px-8 py-4 font-manrope font-bold text-white transition hover:bg-[#001A33]"
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {submitMessage ? (
                <p
                  className={`text-center font-manrope text-sm font-semibold ${
                    submitStatus === "success"
                      ? "text-[#1d7a46]"
                      : "text-[#b42318]"
                  }`}
                >
                  {submitMessage}
                </p>
              ) : null}

              <p className="text-center font-manrope text-xs text-[#6B7886]">
                Your details are used only to answer this inquiry. Never sold,
                never spammed.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
