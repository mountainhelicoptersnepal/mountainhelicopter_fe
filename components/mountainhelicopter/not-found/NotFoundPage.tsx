import { CalendarDays, MessageSquare, Plane } from "lucide-react";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";

const launchItems = [
  {
    title: "All 8 Tours Detailed",
    text: "Pricing, itineraries, season guides",
    icon: Plane,
  },
  {
    title: "Real-time Booking",
    text: "Check availability and book online",
    icon: CalendarDays,
  },
  {
    title: "Flight Advisor",
    text: "Personalized tour recommendations",
    icon: MessageSquare,
  },
] as const;

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-[#F5F8FB] text-[#003366]">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center px-6 py-20 text-center md:px-12 mt-8">
        <p className="font-manrope text-[11px] font-extrabold uppercase tracking-[0.34em] text-[#F5A623]">
          What&apos;s Coming
        </p>

        <h1 className="mt-7 max-w-5xl font-manrope text-[clamp(2.6rem,7vw,5rem)] font-extrabold leading-[1.08] tracking-normal text-[#003366]">
          Our full website is launching soon.
        </h1>

        <p className="mt-7 max-w-3xl font-manrope text-lg font-medium leading-relaxed text-[#6F7F8D] md:text-xl">
          We&apos;re building a complete experience covering all eight tours,
          charter capabilities, rescue operations, our fleet, and direct online
          booking. For now, please use the inquiry form above or reach us by
          phone, WhatsApp, or email.
        </p>

        <PrimaryButton
          href="/inquire"
          className="mt-10 w-[180px] shadow-[0_12px_28px_rgba(242,182,50,0.24)]"
        >
          Send Inquiry
        </PrimaryButton>

        <div className="mt-20 grid w-full max-w-5xl gap-6 md:grid-cols-3">
          {launchItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="flex min-h-[160px] flex-col items-center justify-center rounded-[18px] border border-[#DDE7EF] bg-white px-6 py-8 shadow-[0_8px_28px_rgba(0,51,102,0.04)]"
              >
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-lg bg-[#E6F0F8] text-[#003366]">
                  <Icon className="h-7 w-7" strokeWidth={2.2} />
                </div>

                <h2 className="mt-6 font-manrope text-xl font-extrabold leading-tight text-[#07182A]">
                  {item.title}
                </h2>

                <p className="mt-3 font-manrope text-base font-medium leading-snug text-[#6F7F8D]">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-20 inline-flex max-w-full items-center justify-center gap-3 rounded-full bg-[#003F7D] px-7 py-4 font-manrope text-[12px] font-extrabold uppercase tracking-[0.26em] text-white shadow-[0_10px_24px_rgba(0,63,125,0.18)]">
          <span className="h-3 w-3 shrink-0 rounded-full bg-[#F5A623]" />
          <span>Launch Notification · Estimated Launch · Soon</span>
        </div>
      </section>
    </main>
  );
}
