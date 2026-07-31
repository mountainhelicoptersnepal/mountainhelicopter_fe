"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

type Inquiry = {
  full_name: string | null;
  email: string | null;
  phone: string | null;
  group_size: number | string | null;
  service_type: string | null;
  preferred_date: string | null;
  message: string | null;
  status: string | null;
  source: string | null;
};

export default function AdminInquiries() {
  const [session, setSession] = useState<Session | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingInquiries, setIsLoadingInquiries] = useState(false);
  const [message, setMessage] = useState("");

  const loadInquiries = useCallback(async () => {
    setIsLoadingInquiries(true);
    setMessage("");

    const { data, error } = await supabase
      .from("inquiries")
      .select(
        "full_name,email,phone,group_size,service_type,preferred_date,message,status,source",
      );

    if (error) {
      setMessage(error.message);
      setInquiries([]);
    } else {
      setInquiries(data ?? []);
    }

    setIsLoadingInquiries(false);
  }, []);

  useEffect(() => {
    let isMounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!isMounted) return;
      setSession(data.session);
      if (data.session) {
        void loadInquiries();
      }
      setIsAuthLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      if (nextSession) {
        void loadInquiries();
      } else {
        setInquiries([]);
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, [loadInquiries]);

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
      setEmail("");
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
      <main className="flex min-h-screen items-center justify-center bg-[#f4f7fb] px-6 text-[#071825]">
        <p className="font-manrope text-sm font-semibold">Loading admin...</p>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f4f7fb] px-6 py-12 text-[#071825]">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md rounded-lg border border-[#dbe3ec] bg-white p-8 shadow-sm"
        >
          <p className="mb-3 font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#003366]">
            Admin
          </p>
          <h1 className="mb-2 font-fraunces text-4xl font-bold">
            Inquiry Login
          </h1>
          <p className="mb-8 font-manrope text-sm leading-6 text-[#667384]">
            Sign in with a Supabase Auth user that has admin access through RLS.
          </p>

          <label className="mb-5 block">
            <span className="mb-1.5 block font-manrope text-xs font-bold uppercase tracking-[0.18em] text-[#667384]">
              Email
            </span>
            <input
              required
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-lg border border-[#dbe3ec] px-3.5 py-3 font-manrope text-sm outline-none transition focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/20"
            />
          </label>

          <label className="mb-6 block">
            <span className="mb-1.5 block font-manrope text-xs font-bold uppercase tracking-[0.18em] text-[#667384]">
              Password
            </span>
            <input
              required
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full rounded-lg border border-[#dbe3ec] px-3.5 py-3 font-manrope text-sm outline-none transition focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/20"
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-[#003366] px-6 py-3.5 font-manrope text-sm font-bold text-white transition hover:bg-[#001A33] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>

          {message ? (
            <p className="mt-5 text-center font-manrope text-sm font-semibold text-[#b42318]">
              {message}
            </p>
          ) : null}
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#071825]">
      <header className="border-b border-[#dbe3ec] bg-white px-6 py-5 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-manrope text-xs font-bold uppercase tracking-[0.22em] text-[#003366]">
              Admin
            </p>
            <h1 className="mt-1 font-fraunces text-3xl font-bold">
              Website Inquiries
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={loadInquiries}
              disabled={isLoadingInquiries}
              className="rounded-lg border border-[#dbe3ec] bg-white px-4 py-2.5 font-manrope text-sm font-bold text-[#003366] transition hover:border-[#003366] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoadingInquiries ? "Refreshing..." : "Refresh"}
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg bg-[#003366] px-4 py-2.5 font-manrope text-sm font-bold text-white transition hover:bg-[#001A33]"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        {message ? (
          <p className="mb-5 rounded-lg border border-[#f3c1bb] bg-[#fff4f2] px-4 py-3 font-manrope text-sm font-semibold text-[#b42318]">
            {message}
          </p>
        ) : null}

        <div className="overflow-hidden rounded-lg border border-[#dbe3ec] bg-white">
          <div className="flex items-center justify-between border-b border-[#dbe3ec] px-5 py-4">
            <p className="font-manrope text-sm font-bold">
              {inquiries.length} inquiries
            </p>
            <p className="font-manrope text-xs text-[#667384]">
              Signed in as {session.user.email}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-[980px] w-full border-collapse text-left font-manrope text-sm">
              <thead className="bg-[#f8fafc] text-xs uppercase tracking-[0.16em] text-[#667384]">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Contact</th>
                  <th className="px-4 py-3">Service</th>
                  <th className="px-4 py-3">Group</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Message</th>
                </tr>
              </thead>
              <tbody>
                {inquiries.map((inquiry, index) => (
                  <tr
                    key={`${inquiry.email}-${inquiry.phone}-${index}`}
                    className="border-t border-[#edf1f6] align-top"
                  >
                    <td className="px-4 py-4 font-semibold">
                      {inquiry.full_name || "-"}
                    </td>
                    <td className="px-4 py-4">
                      <div>{inquiry.email || "-"}</div>
                      <div className="mt-1 text-[#667384]">
                        {inquiry.phone || "-"}
                      </div>
                    </td>
                    <td className="px-4 py-4">{inquiry.service_type || "-"}</td>
                    <td className="px-4 py-4">{inquiry.group_size || "-"}</td>
                    <td className="px-4 py-4">
                      {inquiry.preferred_date || "-"}
                    </td>
                    <td className="px-4 py-4">
                      <span className="rounded-full bg-[#e7f0fa] px-3 py-1 text-xs font-bold text-[#003366]">
                        {inquiry.status || "New"}
                      </span>
                    </td>
                    <td className="max-w-sm px-4 py-4 leading-6 text-[#394657]">
                      {inquiry.message || "-"}
                    </td>
                  </tr>
                ))}

                {!isLoadingInquiries && inquiries.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-4 py-10 text-center text-[#667384]"
                    >
                      No inquiries found.
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
