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
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <p className="font-jetbrains-mono text-[11px] font-medium uppercase leading-[16.5px] tracking-[1.98px] text-gold">
          , Fleets
        </p>

        <h2 className="mt-4 max-w-[600px] text-center font-fraunces text-[32px] font-semibold leading-[1.05] tracking-[-0.02em] text-primary-blue sm:text-[40px] lg:text-[42px]">
          Explore Our <span className="text-gold">Fleets</span>
        </h2>

        <div className="mt-12 flex w-full flex-col gap-16 lg:mt-16 lg:gap-24">
          {aircraft.map((item) => (
            <AircraftCard key={item.registration} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
