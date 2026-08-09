import {
  Clock3,
  Headphones,
  ShieldCheck,
  Tags,
  UsersRound,
  Wind,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Experienced Team",
    description:
      "Your Gokyo Lake journey is backed by a team with extensive experience in helicopter operations. Our pilots have logged thousands of hours flying in Nepal's high-altitude environment, where changing weather, dramatic terrain, and remote landing conditions demand exceptional skill and judgment. Supporting every flight is an experienced operations team that has been managing helicopter services since 2009, ensuring smooth coordination, safety, and reliable service from takeoff to landing.",
  },
  {
    icon: UsersRound,
    title: "Best Pricing",
    description:
      "When you book your Gokyo Lake helicopter tour with us, you're booking directly with the operator and not through a reseller or third-party agency. That means no agency markups, no hidden commissions, and no surprise fees. Our pricing is transparent from the start, so the amount you see is the amount you pay, giving you the best value and complete peace of mind.",
  },
  {
    icon: Clock3,
    title: "Professional Itinerary",
    description:
      "Every detail of your Gokyo Lake journey has been carefully refined through hundreds of successful flights. From landing procedures and flight timing to breakfast stops and passenger coordination, each part of the experience has been tested, improved, and perfected over years of operation. You're not part of an experiment; you're benefiting from a well-established operation designed to deliver a smooth, safe, and memorable adventure.",
  },
  {
    icon: Headphones,
    title: "24/7 Available",
    description:
      "From the moment you book your Gokyo Lake helicopter tour until you safely return, our team is available 24 hours a day, 7 days a week to assist you. Whether you have a last-minute question, need a weather update, or require support during your journey, we're always just a message or call away. WhatsApp, phone, and email are continuously monitored, ensuring you receive prompt assistance whenever you need it.",
  },
  {
    icon: Wind,
    title: "Environmentally Responsible",
    description:
      "Our commitment to responsible flying goes hand in hand with delivering unforgettable Gokyo Lake experiences. We operate one of the most fuel-efficient helicopters on this route and follow strict operational procedures at every landing site to help minimize our environmental impact. By combining efficient helicopters with responsible flight practices, we strive to protect the fragile environment while maintaining the highest standards of safety and performance.",
  },
  {
    icon: Tags,
    title: "Transparent Booking",
    description:
      "Booking your Gokyo Lake tour with us is simple, straightforward, and completely transparent. Before you confirm your reservation, you'll receive a detailed itinerary, clear pricing, and a full list of what's included in your tour. With no hidden charges or surprise fees, you can book with confidence, knowing exactly what to expect from start to finish.",
  },
];

export default function WhyBookWithUs() {
  return (
    <section className="bg-[#071a2c]">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:py-28">
        {/* HEADING */}
        <div className="text-center">
          <p className="flex items-center justify-center gap-3 font-manrope text-xs font-bold uppercase tracking-[0.24em] text-[#e0a321]">
            <span className="h-px w-7 bg-[#e0a321]" />
            Why Book Gokyo Lake With Mountain Helicopters Nepal
          </p>

          <h2 className="mt-5 font-fraunces text-3xl font-semibold leading-tight tracking-[-0.02em] text-white md:text-4xl lg:text-5xl">
            Six reasons to book for{" "}
            <span className="text-[#e0a321]">Gokyo Lake.</span>
          </h2>
        </div>

        {/* REASON CARDS */}
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="rounded-[24px] bg-white px-6 py-7 md:px-8 md:py-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#07325f] text-[#f0b323]">
                  <Icon size={21} strokeWidth={2} />
                </div>

                <h3 className="mt-6 font-fraunces text-xl font-semibold text-[#08294d]">
                  {reason.title}
                </h3>

                <p className="mt-3 max-w-xl font-manrope text-sm leading-7 text-slate-500">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
