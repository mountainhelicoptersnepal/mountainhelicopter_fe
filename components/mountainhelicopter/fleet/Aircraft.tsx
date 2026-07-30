import AircraftCard from "@/components/shared/cards/AircraftCard";

const WHATSAPP_PHONE = "9712082949";

function buildWhatsappUrl(aircraft: string) {
  const message = `Hi — I'd like to enquire about the ${aircraft}.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

const aircraft = [
  {
    image: "/images/fleet/aircraft-1-as350.jpg",
    imageAlt: "Airbus AS350 B3e flying over snow-covered Himalayan peaks",
    badge: "Flagship Aircraft",
    watermark: "01",
    eyebrow: "The Altitude Record Holder",
    title: "9N-ALD Airbus AS 350 B3e (H125)",
    description:
      "The H125 is the same airframe that landed on Everest's summit in 2005, and it's still the aircraft most operators in Nepal reach for when altitude is the problem to solve. 9N-ALD runs on a single Arriel 2D engine with enough reserve power to handle hot, thin air without flinching, and the cabin's built wide enough that all five passenger seats get a real view, not just the ones by the window.",
    capabilities: [
      "Dual flight controls",
      "Wide-glass cabin design",
      "Configurable for charter, sightseeing, cargo, or medical evacuation",
      "Maintained in-house by CAAN-certified engineers",
    ],
    idealFor: [
      "Everest Base Camp",
      "Kailash Darshan",
      "Langtang Valley",
      "Charter Flights",
      "Rescue Operations",
    ],
    contentBg: "bg-white",
    reverse: false,
    bookHref: "/contact",
    enquireHref: buildWhatsappUrl("9N-ALD Airbus AS 350 B3e (H125)"),
  },
  {
    image: "/images/fleet/aircraft-2-bell407.jpg",
    imageAlt: "Bell 407GXi helicopter on snowy mountain terrain",
    badge: "Best for Groups",
    watermark: "02",
    eyebrow: "The Panoramic Cruiser",
    title: "9N-AOP Airbus",
    description:
      "9N-AOP is the newest addition to our fleet, delivered to Nepal in early 2025. It's a five-seat Airbus, built for the same high-altitude flying that's defined our fleet since 2009, and it joins 9N-ALD in giving us the range to run charter, sightseeing, and rescue flights back to back without downtime between them.",
    capabilities: [
      "Dual flight controls",
      "Wide-glass cabin design",
      "Configurable for charter, sightseeing, cargo, or medical evacuation",
      "Maintained in-house by CAAN-certified engineers",
    ],
    idealFor: [
      "Annapurna Base Camp",
      "Scenic Mountain Flight",
      "Muktinath Pilgrimage",
      "Group Charter",
      "VIP Experiences",
    ],
    contentBg: "bg-[#f8fafc]",
    reverse: true,
    bookHref: "/contact",
    enquireHref: buildWhatsappUrl("9N-AOP Airbus"),
  },
] as const;

export default function Aircraft() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:py-28">
        <div className="flex flex-col">
          {aircraft.map((item) => (
            <AircraftCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
