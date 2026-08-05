import Image from "next/image";
import Link from "next/link";

const regions = [
  {
    title: "Everest Region",
    places: "EBC, GorakShep, Lobuche, Dingboche, Pheriche, Namche, Lukla",
    response: "1h 30m",
    cost: "USD 2,800 – 8,000",
    image: "/images/rescue/regions/everest.jpg",
    href: "/rescue/everest-helicopter-rescue",
  },
  {
    title: "Annapurna Region",
    places: "ABC, MBC, Chomrong, Ghandruk, Ghorepani, Poon Hill",
    response: "1h 15m",
    cost: "USD 2,500 – 5,000",
    image: "/images/rescue/regions/annapurna.jpg",
    href: "/rescue/annapurna-helicopter-rescue",
  },
  {
    title: "Muktinath & Lower Mustang",
    places: "Muktinath, Jomsom, Kagbeni, Marpha",
    response: "1h 45m",
    cost: "USD 3,000 – 6,000",
    image: "/images/rescue/regions/muktinath.jpg",
    href: "/rescue/muktinath-helicopter-rescue",
    featured: true,
  },
  {
    title: "Langtang Region",
    places: "Kyanjin Gompa, Langtang Village, Ghoda Tabela",
    response: "1h 15m",
    cost: "USD 3,000 – 5,500",
    image: "/images/rescue/regions/langtang.jpg",
    href: "/rescue/langtang-helicopter-rescue",
  },
  {
    title: "Gosaikunda",
    places: "Lauribinayak, Cholang Pati, Gosaikunda Lake",
    response: "1h 20m",
    cost: "USD 3,000 – 5,000",
    image: "/images/rescue/regions/gosaikunda.jpg",
    href: "/rescue/gosaikunda-helicopter-rescue",
  },
  {
    title: "Tilicho",
    places: "Tilicho Base Camp, Tilicho Lake, Manang approaches",
    response: "2h",
    cost: "USD 4,500 – 7,500",
    image: "/images/rescue/regions/tilicho.jpg",
    href: "/rescue/tilicho-helicopter-rescue",
  },
  {
    title: "Mardi Himal",
    places: "Mardi Base Camp, High Camp, Low Camp",
    response: "1h 10m",
    cost: "USD 2,500 – 4,500",
    image: "/images/rescue/regions/mardi-himal.jpg",
    href: "/rescue/mardi-helicopter-rescue",
  },
  {
    title: "Kala Patthar / GorakShep",
    places: "Kala Patthar landing point, GorakShep",
    response: "1h 30m",
    cost: "USD 4,000 – 8,500",
    image: "/images/rescue/regions/kala-patthar.jpg",
    href: "/rescue/kalapatthar-helicopter-rescue",
  },
  {
    title: "Makalu Base Camp",
    places: "Makalu Base Camp, Shipton La, Barun Valley",
    response: "2h 15m",
    cost: "USD 6,000 – 12,000+",
    image: "/images/rescue/regions/makalu.jpg",
    href: "/rescue/makalu-helicopter-rescue",
  },
  {
    title: "Gokyo Valley",
    places: "Gokyo Lakes, Cho La Pass, Machermo, Doley",
    response: "2h 45m",
    cost: "USD 4,000 – 7,000+",
    image: "/images/rescue/regions/makalu.jpg",
    href: "/rescue/gokyo-helicopter-rescue",
  },
];

type RegionCardProps = {
  title: string;
  places: string;
  response: string;
  cost: string;
  image: string;
  href: string;
  featured?: boolean;
};

function RegionCard({
  title,
  places,
  response,
  cost,
  image,
  href,
  featured = false,
}: RegionCardProps) {
  return (
    <Link
      href={href}
      aria-label={`View ${title} helicopter rescue details`}
      className={`group flex h-full min-h-[570px] flex-col overflow-hidden border bg-white transition-colors duration-300 ${
        featured
          ? "border-[#D69A28]"
          : "border-[#D9E0E6] hover:border-[#D69A28]"
      }`}
    >
      {/* Region image */}
      <div className="relative h-[280px] shrink-0 overflow-hidden bg-[#E4E7E9]">
        <Image
          src={image}
          alt={`Helicopter rescue coverage, ${title}, Nepal`}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/10 via-transparent to-transparent" />
      </div>

      {/* Card content */}
      <div className="flex flex-1 flex-col px-[26px] pb-[25px] pt-[27px]">
        <p className="font-manrope text-[11px] font-semibold uppercase leading-none tracking-[0.18em] text-[#C28218]">
          Rescue Region
        </p>

        <h3 className="mt-[14px] font-fraunces text-[23px] font-semibold leading-[29px] tracking-[-0.35px] text-[#003366]">
          {title}
        </h3>

        <p className="mt-[10px] min-h-[48px] font-manrope text-[14px] font-normal leading-[22px] tracking-0 text-[#0A1929]/55">
          {places}
        </p>

        {/* Response and cost */}
        <div className="mt-[20px] border-t border-[#DDE3E7] pt-[18px]">
          <div className="flex items-center justify-between gap-5">
            <span className="font-manrope text-[11px] font-semibold uppercase leading-[14px] tracking-[0.14em] text-[#758490]">
              Response Typical
            </span>

            <span className="shrink-0 font-manrope text-[13px] font-semibold leading-[18px] text-[#003366]">
              {response}
            </span>
          </div>

          <div className="mt-[10px] flex items-center justify-between gap-5">
            <span className="font-manrope text-[11px] font-semibold uppercase leading-[14px] tracking-[0.14em] text-[#758490]">
              Cost Typical
            </span>

            <span className="shrink-0 text-right font-manrope text-[13px] font-semibold leading-[18px] text-[#003366]">
              {cost}
            </span>
          </div>
        </div>

        {/* Details link */}
        <span className="mt-auto inline-flex w-fit items-center gap-[8px] pt-[22px] font-manrope text-[13px] font-semibold uppercase leading-[16px] tracking-[0.14em] text-[#0066B3]">
          <span className="border-b border-transparent pb-[2px] transition-colors group-hover:border-[#0066B3]">
            View Regional Details
          </span>

          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-[4px]"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

export default function Regions() {
  return (
    <section id="regions" className="scroll-mt-[125px] bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
        {/* Section heading */}
        <div className="max-w-[950px]">
          <p className="font-manrope text-[11px] font-semibold uppercase leading-none tracking-[0.18em] text-[#C28218]">
            , Coverage
          </p>

          <h2 className="mt-[18px] font-fraunces text-[38px] font-semibold leading-[1.06] tracking-[-0.8px] text-[#003366] sm:text-[44px] lg:text-[51.2px] lg:leading-[54.27px] lg:tracking-[-1.02px]">
            Our Rescue Helicopter Service
          </h2>
        </div>

        {/* Region cards */}
        <div className="mt-[40px] grid gap-x-[20px] gap-y-[22px] sm:grid-cols-2 xl:grid-cols-3">
          {regions.map((region) => (
            <RegionCard key={region.href} {...region} />
          ))}
        </div>
      </div>
    </section>
  );
}
