"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

type AdsBooking = {
  id: string;
  created_at: string;
  flight_type: string | null;
  travel_date: string | null;
  passengers: number | null;
  full_name: string | null;
  email: string | null;
  country_name: string | null;
  phone_number: string | null;
  phone_full: string | null;
  captcha_question: string | null;
  captcha_answer: number | null;
  status: string | null;
  source: string | null;
};

export default function AdsAdminBookings() {
  const [session, setSession] = useState<Session | null>(null);
  const [email, setEmail] = useState("ads@mhn.com");
  const [password, setPassword] = useState("");
  const [bookings, setBookings] = useState<AdsBooking[]>([]);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingBookings, setIsLoadingBookings] = useState(false);
  const [message, setMessage] = useState("");

  const loadBookings = useCallback(async () => {
    setIsLoadingBookings(true);
    setMessage("");

    const { data, error } = await supabase
      .from("ads_inquiry")
      .select(
        "id,created_at,flight_type,travel_date,passengers,full_name,email,country_name,phone_number,phone_full,captcha_question,captcha_answer,status,source",
      )
      .order("created_at", { ascending: false });

    if (error) {
      setMessage(error.message);
      setBookings([]);
    } else {
      setBookings(data ?? []);
    }

    setIsLoadingBookings(false);
  }, []);

  useEffect(() => {
    let isMounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!isMounted) return;
      setSession(data.session);
      if (data.session) {
        void loadBookings();
      }
      setIsAuthLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      if (nextSession) {
        void loadBookings();
      } else {
        setBookings([]);
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [loadBookings]);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setPassword("");
    }

    setIsSubmitting(false);
  };

  const handleLogout = async () => {
    setMessage("");
    await supabase.auth.signOut();
  };

  if (isAuthLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#061f47] px-6 text-white">
        <p className="font-manrope text-sm font-semibold">Loading ads admin...</p>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#061f47] px-6 py-12 text-[#12233F]">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md rounded-[14px] border-t-4 border-[#F5AF00] bg-white p-8 shadow-[0_22px_60px_rgba(5,31,73,.45)]"
        >
          <p className="mb-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#0C4396]">
            Ads Admin
          </p>
          <h1 className="mb-2 font-fraunces text-4xl font-bold text-[#051F49]">
            Lukla Leads
          </h1>
          <p className="mb-8 font-manrope text-sm leading-6 text-[#4A5B76]">
            Sign in with the Supabase ads user to view landing-page bookings.
          </p>

          <label className="mb-5 block">
            <span className="mb-1.5 block font-manrope text-xs font-bold uppercase tracking-[0.18em] text-[#4A5B76]">
              Email
            </span>
            <input
              required
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-[9px] border-[1.5px] border-[#D7E2F2] px-3.5 py-3 font-manrope text-sm outline-none transition focus:border-[#0C4396] focus:ring-2 focus:ring-[#0C4396]/20"
            />
          </label>

          <label className="mb-6 block">
            <span className="mb-1.5 block font-manrope text-xs font-bold uppercase tracking-[0.18em] text-[#4A5B76]">
              Password
            </span>
            <input
              required
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-[9px] border-[1.5px] border-[#D7E2F2] px-3.5 py-3 font-manrope text-sm outline-none transition focus:border-[#0C4396] focus:ring-2 focus:ring-[#0C4396]/20"
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-[#F5AF00] px-6 py-3.5 font-manrope text-sm font-bold text-[#051F49] shadow-[0_4px_14px_rgba(245,175,0,.35)] transition hover:bg-[#FFBE12] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>

          {message ? (
            <p className="mt-5 text-center font-manrope text-sm font-semibold text-[#B3261E]">
              {message}
            </p>
          ) : null}
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#12233F]">
      <header className="border-b border-[#D7E2F2] bg-white px-6 py-5 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#0C4396]">
              Ads Admin
            </p>
            <h1 className="mt-1 font-fraunces text-3xl font-bold text-[#051F49]">
              Lukla Landing Leads
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={loadBookings}
              disabled={isLoadingBookings}
              className="rounded-lg border border-[#D7E2F2] bg-white px-4 py-2.5 font-manrope text-sm font-bold text-[#0C4396] transition hover:border-[#0C4396] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoadingBookings ? "Refreshing..." : "Refresh"}
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg bg-[#0C4396] px-4 py-2.5 font-manrope text-sm font-bold text-white transition hover:bg-[#06326f]"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        {message ? (
          <p className="mb-5 rounded-lg border border-[#f3c1bb] bg-[#fff4f2] px-4 py-3 font-manrope text-sm font-semibold text-[#B3261E]">
            {message}
          </p>
        ) : null}

        <div className="overflow-hidden rounded-lg border border-[#D7E2F2] bg-white">
          <div className="flex flex-col gap-1 border-b border-[#D7E2F2] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-manrope text-sm font-bold">
              {bookings.length} bookings
            </p>
            <p className="font-manrope text-xs text-[#4A5B76]">
              Signed in as {session.user.email}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1080px] border-collapse text-left font-manrope text-sm">
              <thead className="bg-[#f8fafc] text-xs uppercase tracking-[0.16em] text-[#4A5B76]">
                <tr>
                  <th className="px-4 py-3">Created</th>
                  <th className="px-4 py-3">Passenger</th>
                  <th className="px-4 py-3">Contact</th>
                  <th className="px-4 py-3">Country</th>
                  <th className="px-4 py-3">Flight</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Pax</th>
                  <th className="px-4 py-3">Captcha</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border-t border-[#edf1f6] align-top">
                    <td className="px-4 py-4 text-[#4A5B76]">
                      {new Date(booking.created_at).toLocaleString()}
                    </td>
                    <td className="px-4 py-4 font-semibold">
                      {booking.full_name || "-"}
                    </td>
                    <td className="px-4 py-4">
                      <div>{booking.email || "-"}</div>
                      <div className="mt-1 text-[#4A5B76]">
                        {booking.phone_full || "-"}
                      </div>
                    </td>
                    <td className="px-4 py-4">{booking.country_name || "-"}</td>
                    <td className="px-4 py-4">{booking.flight_type || "-"}</td>
                    <td className="px-4 py-4">{booking.travel_date || "-"}</td>
                    <td className="px-4 py-4">{booking.passengers || "-"}</td>
                    <td className="px-4 py-4">
                      {booking.captcha_question
                        ? `${booking.captcha_question} = ${booking.captcha_answer}`
                        : "-"}
                    </td>
                    <td className="px-4 py-4">
                      <span className="rounded-full bg-[#E6F0F8] px-3 py-1 text-xs font-bold text-[#0C4396]">
                        {booking.status || "New"}
                      </span>
                    </td>
                  </tr>
                ))}

                {!isLoadingBookings && bookings.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="px-4 py-10 text-center text-[#4A5B76]">
                      No ads bookings found.
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
