import AircraftCard from "@/components/shared/cards/AircraftCard";

const aircraft = [
  {
    registration: "9N-ALD",
    image: "/images/fleet/aircraft-1-as350.jpg",
    imageAlt: "Airbus AS350 B3e flying over snow-covered Himalayan peaks",
    specs: [
      { label: "Make & Model", value: "Airbus Helicopters H125 (AS350 B3e)" },
      { label: "Manufacturer", value: "Airbus Helicopters" },
      { label: "Year of Manufacturer", value: "June 2014" },
      {
        label: "Engline and Horse Power",
        value: "Safran Arriel 2D 802 shp (Max Take-off power)",
      },
      {
        label: "Empty Weight",
        value: "1301.91kg (May change as per aircraft configuration)",
      },
      { label: "Maximum weight", value: "2250 kg" },
      { label: "Engine Type", value: "Turboshaft" },
      {
        label: "Service Ceiling (Maximum Altitude Flight)",
        value: "23,000 ft.",
      },
      { label: "Seat Capacity", value: "" },
      { label: "Rate of Climb", value: "Depends" },
      { label: "Power Plant", value: "1 × Safran Arriel 2D" },
      { label: "Cruising Speed", value: "136 knots" },
      { label: "Endurance", value: "4H 27M at MTOW" },
      { label: "Takeoff Power", value: "802 shp" },
    ],
    reverse: false,
  },
  {
    registration: "9N-AOP",
    image: "/images/fleet/aircraft-2-bell407.jpg",
    imageAlt: "Bell 407GXi helicopter on snowy mountain terrain",
    specs: [
      { label: "Make & Model", value: "Airbus Helicopters H125 (AS350 B3e)" },
      { label: "Manufacturer", value: "Airbus Helicopters" },
      { label: "Year of Manufacturer", value: "April 2016" },
      {
        label: "Engline and Horse Power",
        value: "Safran Arriel 2D 802 shp (Max Take-off power)",
      },
      {
        label: "Empty Weight",
        value: "1330kg (May change as per aircraft configuration)",
      },
      { label: "Maximum weight", value: "2250 kg" },
      { label: "Engine Type", value: "Turboshaft" },
      {
        label: "Service Ceiling (Maximum Altitude Flight)",
        value: "23,000 ft.",
      },
      { label: "Seat Capacity", value: "" },
      { label: "Rate of Climb", value: "Depends" },
      { label: "Power Plant", value: "1 × Safran Arriel 2D" },
      { label: "Cruising Speed", value: "136 knots" },
      { label: "Endurance", value: "4H 27M at MTOW" },
      { label: "Takeoff Power", value: "802 shp" },
    ],
    reverse: true,
  },
] as const;

export default function Aircraft() {
  return (
    <section className="w-full bg-[#fafcfd]">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-16 py-16 md:py-24 lg:py-28">
        <div className="flex flex-col gap-16 lg:gap-24">
          {aircraft.map((item) => (
            <AircraftCard key={item.registration} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
