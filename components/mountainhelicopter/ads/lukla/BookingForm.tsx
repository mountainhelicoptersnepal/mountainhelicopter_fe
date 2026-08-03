"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { submitAdsLuklaBooking } from "@/lib/ads-lukla-bookings";
import { DIAL_CODES, FLIGHT_TYPES, PHONE_TEL } from "./constants";

const NAME_RE = /^[A-Za-zÀ-ɏ' .-]{2,60}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\d{5,15}$/;

type FieldErrors = Partial<
  Record<"name" | "email" | "phone" | "date" | "captcha", string>
>;

function randomCaptcha() {
  const a = Math.floor(Math.random() * 8) + 2;
  const b = Math.floor(Math.random() * 8) + 1;
  return { a, b, sum: a + b };
}

function today() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate(),
  ).padStart(2, "0")}`;
}

export default function BookingForm({
  idPrefix,
  heading = true,
}: {
  idPrefix: string;
  heading?: boolean;
}) {
  const minDate = useMemo(() => today(), []);
  const formStartedAt = useRef(0);
  // Fixed values on first render so SSR and client hydration match;
  // randomized client-side once mounted (see effect below).
  const [captcha, setCaptcha] = useState({ a: 3, b: 4, sum: 7 });
  const [type, setType] = useState<string>(FLIGHT_TYPES[0]);
  const [date, setDate] = useState("");
  const [pax, setPax] = useState("2");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryDialCode, setCountryDialCode] = useState("Nepal|+977");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const id = (name: string) => `${idPrefix}-${name}`;

  useEffect(() => {
    formStartedAt.current = Date.now();
    // Randomize only after mount: doing this during render would make the
    // server-rendered numbers differ from the client's, causing a hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCaptcha(randomCaptcha());
  }, []);

  const refreshCaptcha = () => {
    setCaptcha(randomCaptcha());
    setCaptchaAnswer("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setServerError("");

    if (website !== "") return; // honeypot tripped: silently drop

    const nextErrors: FieldErrors = {};
    if (!NAME_RE.test(name.trim())) {
      nextErrors.name = "Enter your name (at least 2 letters).";
    }
    if (!EMAIL_RE.test(email.trim())) {
      nextErrors.email = "Enter a valid email like you@example.com.";
    }
    const digits = phone.replace(/[\s()-]/g, "");
    if (!PHONE_RE.test(digits)) {
      nextErrors.phone = "Enter 5 to 15 digits, numbers only.";
    }
    if (!date || date < minDate) {
      nextErrors.date = "Pick a date from today onward.";
    }
    if (Date.now() - formStartedAt.current < 2500) {
      nextErrors.captcha = "Please take a moment and try again.";
    }
    if (parseInt(captchaAnswer, 10) !== captcha.sum) {
      nextErrors.captcha = "That answer is not right. Try the new question.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      refreshCaptcha();
      return;
    }

    setSubmitting(true);
    try {
      const [countryName, countryCode] = countryDialCode.split("|");
      await submitAdsLuklaBooking({
        flight_type: type,
        travel_date: date,
        passengers: pax === "More than 5" ? 6 : Number(pax),
        full_name: name.trim(),
        email: email.trim(),
        country_name: countryName,
        country_code: countryCode,
        phone_number: digits,
        captcha_question: `${captcha.a} + ${captcha.b}`,
        captcha_answer: Number(captchaAnswer),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Ads booking submission failed:", error);
      setServerError(
        error instanceof Error
          ? error.message
          : "Something went wrong sending your request. Please try WhatsApp instead.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-[14px] bg-white p-6 text-center text-[#12233F] shadow-[0_22px_60px_rgba(5,31,73,.45)] sm:p-8">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0C4396]">
          <svg
            className="h-7 w-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-fraunces text-xl font-extrabold text-[#051F49]">
          Request sent.
        </h3>
        <p className="mt-2 text-sm text-[#4A5B76]">
          A flight specialist will reply within 2 hours, 7 days a week.
        </p>
        <p className="mt-4 text-sm text-[#4A5B76]">
          Prefer to talk now?{" "}
          <a href={`tel:${PHONE_TEL}`} className="font-semibold text-[#0C4396]">
            {PHONE_TEL}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="on"
      aria-label="Booking request form"
      className="rounded-[14px] bg-white p-6 text-[#12233F] shadow-[0_22px_60px_rgba(5,31,73,.45)] sm:p-7"
    >
      {heading ? (
        <>
          <h2 className="font-fraunces text-[1.15rem] font-extrabold text-[#051F49]">
            Check your date<span className="text-[#F5AF00]">.</span>
          </h2>
          <p className="mb-4 mt-1 text-[13px] text-[#4A5B76]">
            A flight specialist replies within 2 hours, 7 days a week.
          </p>
        </>
      ) : null}

      <Field label="What do you want to fly?" htmlFor={id("type")}>
        <select
          id={id("type")}
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full rounded-[9px] border-[1.5px] border-[#D7E2F2] bg-white px-3.5 py-3 font-sans text-[15.5px] text-[#12233F] focus:border-[#0C4396] focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-[#0C4396]"
        >
          {FLIGHT_TYPES.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </Field>

      <div className="mb-3.5 grid grid-cols-2 gap-3">
        <Field label="Travel date" htmlFor={id("date")} error={errors.date}>
          <input
            id={id("date")}
            name="date"
            type="date"
            required
            min={minDate}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={inputClass(!!errors.date)}
          />
        </Field>
        <Field label="Passengers" htmlFor={id("pax")}>
          <select
            id={id("pax")}
            name="pax"
            value={pax}
            onChange={(e) => setPax(e.target.value)}
            className="w-full rounded-[9px] border-[1.5px] border-[#D7E2F2] bg-white px-3.5 py-3 font-sans text-[15.5px] text-[#12233F] focus:border-[#0C4396] focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-[#0C4396]"
          >
            {["1", "2", "3", "4", "5", "More than 5"].map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Your name" htmlFor={id("name")} error={errors.name}>
        <input
          id={id("name")}
          name="name"
          type="text"
          required
          placeholder="Full name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass(!!errors.name)}
        />
      </Field>

      <Field label="Email" htmlFor={id("email")} error={errors.email}>
        <input
          id={id("email")}
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          autoComplete="email"
          inputMode="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass(!!errors.email)}
        />
      </Field>

      <Field label="Phone / WhatsApp number" htmlFor={id("phone")} error={errors.phone}>
        <div className="grid grid-cols-[minmax(112px,38%)_1fr] gap-2.5">
          <select
            id={id("cc")}
            name="cc"
            aria-label="Country code"
            value={countryDialCode}
            onChange={(e) => setCountryDialCode(e.target.value)}
            className="rounded-[9px] border-[1.5px] border-[#D7E2F2] bg-white px-2 py-3 font-sans text-[14.5px] text-[#12233F] focus:border-[#0C4396] focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-[#0C4396]"
          >
            {DIAL_CODES.map(([country, code], i) => (
              <option key={`${country}-${i}`} value={`${country}|${code}`}>
                {country} ({code})
              </option>
            ))}
          </select>
          <input
            id={id("phone")}
            name="phone"
            type="tel"
            required
            placeholder="Phone number"
            autoComplete="tel-national"
            inputMode="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass(!!errors.phone)}
          />
        </div>
      </Field>

      {/* Honeypot: invisible to humans, bots fill it */}
      <div className="absolute left-[-9999px] top-[-9999px] h-0 overflow-hidden" aria-hidden="true">
        <label htmlFor={id("website")}>Website</label>
        <input
          id={id("website")}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      <Field
        label={
          <>
            Quick check: what is <span>{captcha.a}</span> + <span>{captcha.b}</span>?
          </>
        }
        htmlFor={id("captcha")}
      >
        <div className="grid grid-cols-[1fr_auto] gap-2.5">
          <input
            id={id("captcha")}
            name="captcha"
            type="text"
            inputMode="numeric"
            required
            placeholder="Answer"
            value={captchaAnswer}
            onChange={(e) => setCaptchaAnswer(e.target.value)}
            className={inputClass(!!errors.captcha)}
          />
          <button
            type="button"
            onClick={refreshCaptcha}
            aria-label="New question"
            className="w-[46px] rounded-[9px] border-[1.5px] border-[#D7E2F2] bg-white text-[19px] text-[#0C4396] hover:border-[#0C4396]"
          >
            &#8635;
          </button>
        </div>
        {errors.captcha ? (
          <p className="mt-1.5 text-[13px] text-[#B3261E]">{errors.captcha}</p>
        ) : null}
      </Field>

      <button
        type="submit"
        disabled={submitting}
        className="mt-1 w-full rounded-full bg-[#F5AF00] px-6 py-3.5 text-[15.5px] font-bold tracking-[.02em] text-[#051F49] shadow-[0_4px_14px_rgba(245,175,0,.35)] transition hover:bg-[#FFBE12] active:scale-[.98] disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Reserve My Seat Now"}
      </button>
      {serverError ? (
        <p className="mt-2 text-center text-[13px] text-[#B3261E]">{serverError}</p>
      ) : null}
      <p className="mt-2.5 text-center text-xs text-[#4A5B76]">
        Your request goes straight to our operations desk. No account or payment needed.
      </p>
      <p className="mt-3 border-t border-dashed border-[#D7E2F2] pt-3 text-center text-[13.5px] text-[#4A5B76]">
        Prefer to talk?{" "}
        <a href={`tel:${PHONE_TEL}`} className="font-semibold text-[#0C4396]">
          {PHONE_TEL}
        </a>
      </p>
    </form>
  );
}

function inputClass(invalid: boolean) {
  return `w-full rounded-[9px] border-[1.5px] bg-white px-3.5 py-3 font-sans text-[15.5px] text-[#12233F] focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-[#0C4396] ${
    invalid ? "border-[#B3261E]" : "border-[#D7E2F2] focus:border-[#0C4396]"
  }`;
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: React.ReactNode;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative mb-3.5">
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-[12.5px] font-semibold uppercase tracking-[.05em] text-[#4A5B76]"
      >
        {label}
      </label>
      {children}
      {error ? <p className="mt-1.5 text-[12.5px] text-[#B3261E]">{error}</p> : null}
    </div>
  );
}
