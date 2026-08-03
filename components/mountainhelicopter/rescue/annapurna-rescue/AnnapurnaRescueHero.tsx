"use client";

import Link from "next/link";
import {
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Search,
  ShoppingCart,
  UserRound,
  X,
} from "lucide-react";
import { useState } from "react";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const navigation = [
  { label: "Tours", href: "#tours" },
  { label: "Experiences", href: "#experiences" },
  { label: "Fleet", href: "#fleet" },
  { label: "Rescue", href: "#rescue" },
  { label: "Safety", href: "#safety" },
];

export default function AnnapurnaRescueHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      className={`${inter.variable} ${playfair.variable} relative min-h-[860px] overflow-hidden bg-[#081a2f] text-white`}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/rescue/regions/annapurna.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,18,34,0.35)_0%,rgba(5,18,34,0.48)_25%,rgba(5,18,34,0.72)_60%,rgba(5,18,34,0.86)_100%)]" />
      <div className="absolute inset-0 bg-[#06111f]/20" />

      {/* Navbar */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-5 md:px-8 lg:px-10">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <img
              src="/images/logo-white.png"
              alt="Mountain Helicopters Nepal"
              className="h-auto w-[110px] md:w-[132px]"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-10 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-manrope text-[15px] font-medium text-white transition hover:text-[#f3b323]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop icons */}
          <div className="hidden items-center gap-5 lg:flex">
            <button className="text-white transition hover:text-[#f3b323]">
              <Menu size={22} />
            </button>
            <button className="text-white transition hover:text-[#f3b323]">
              <Search size={22} />
            </button>
            <button className="text-white transition hover:text-[#f3b323]">
              <ShoppingCart size={22} />
            </button>
            <button className="text-white transition hover:text-[#f3b323]">
              <UserRound size={22} />
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="text-white lg:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute inset-x-0 top-0 z-30 min-h-screen bg-[#06111f] px-5 py-5 lg:hidden">
            <div className="flex items-center justify-between">
              <img
                src="/images/logo-white.png"
                alt="Mountain Helicopters Nepal"
                className="w-[110px]"
              />
              <button className="text-white" onClick={() => setMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <nav className="mt-10 flex flex-col gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-manrope text-lg font-medium text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1280px] items-center px-5 pb-20 pt-16 md:px-8 lg:px-10">
        <div className="max-w-[900px]">
          {/* Heading */}
          <h1 className="max-w-[980px] font-fraunces text-[46px] font-semibold leading-[0.98] tracking-[-1.6px] text-white sm:text-[58px] md:text-[72px] lg:text-[65px]">
            Annapurna Helicopter
            <br />
            <span className="italic text-[#f3b323]">
              Rescue - Emergency
            </span>{" "}
            evacuation services and costs.
          </h1>

          {/* Paragraph */}
          <div className="mt-8 max-w-[760px] space-y-4 font-manrope text-[18px] leading-[1.6] text-white/85">
            <p>
              This Annapurna helicopter rescue is an emergency service for those
              trekkers, climbers and expedition members that are caught in an
              emergency in the Annapurna area. Most Annapurna Helicopter Tours
              in Nepal are the kind of aerial views on the top from the above.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="tel:+9779712082949"
              className="inline-flex h-[46px] items-center justify-center gap-2 bg-[#e62b2f] px-6 font-manrope text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#cc2024]"
            >
              <Phone size={15} />
              Call Emergency Line
            </a>

            <a
              href="https://wa.me/9779712082949"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[46px] items-center justify-center gap-2 bg-[#0d6fc0] px-6 font-manrope text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#095ea6]"
            >
              <MessageCircle size={15} />
              WhatsApp Dispatch
            </a>

            <a
              href="mailto:info@mountainhelicoptersnepal.com"
              className="inline-flex h-[46px] items-center justify-center gap-2 border border-white/40 bg-transparent px-6 font-manrope text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
            >
              <Mail size={15} />
              Email Coordination
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
