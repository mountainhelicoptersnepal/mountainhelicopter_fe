import Link from "next/link";

const tourTabs = [
  { label: "OUR TOURS", href: "/tours" },
  { label: "EVEREST KALAPATTHAR", href: "/tours/everest-kalapatthar-kathmandu" },
  { label: "EVEREST GOKYO", href: "/tours/everest-gokyo-kathmandu" },
  { label: "GORAKSHEP TO KATHMANDU", href: "/tours/gorakshep-kathmandu-helicopter" },
  { label: "KATHMANDU TO LUKLA", href: "/tours/kathmandu-lukla-helicopter" },
  { label: "RAMECHHAP TO LUKLA", href: "/tours/ramechhap-lukla-helicopter" },
];

type TourTabsNavbarProps = {
  activeHref?: string;
};

export default function TourTabsNavbar({ activeHref }: TourTabsNavbarProps) {
  return (
    <div className="relative z-10 w-full bg-[#0D3D6E]">
      <div className="mx-auto flex min-h-[65px] max-w-7xl items-center gap-3 overflow-x-auto px-6 py-[15px] md:px-12 lg:px-16">
        {tourTabs.map((tab) => {
          const isActive = tab.href === activeHref;

          return (
            <Link
              key={tab.label}
              href={tab.href}
              className={`flex h-[35px] shrink-0 items-center justify-center whitespace-nowrap px-[16px] font-manrope text-[10px] font-semibold uppercase tracking-[1.1px] transition-all duration-300 sm:px-[22px] sm:text-[11px] ${
                isActive
                  ? "bg-[#f5b82e] text-[#06182c]"
                  : "text-white/80 hover:bg-[#f5b82e] hover:text-[#06182c]"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
