"use client";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Highlights", href: "#highlights" },
  { label: "When to Call", href: "#when-to-call" },
  { label: "Process", href: "#process" },
  { label: "Coverage", href: "#coverage" },
  { label: "Costs", href: "#costs" },
  { label: "What's Covered", href: "#whats-covered" },
  { label: "FAQ", href: "#faq" },
  { label: "Why Us", href: "#why-us" },
];

export default function KalaPattharRescueSubNavbar() {
  const handleScroll = (event, href) => {
    event.preventDefault();

    const target = document.querySelector(href);

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="sticky top-[75px] z-40 border-t border-[#071825]/10 bg-[#efeeeb]/95 backdrop-blur-md">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-[80px] 2xl:px-[125px]">
        <div className="flex h-[48px] items-center gap-7 overflow-x-auto whitespace-nowrap lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleScroll(event, item.href)}
              className="shrink-0 font-manrope text-[9px] font-bold uppercase tracking-[0.22em] text-[#647386] transition-colors duration-300 hover:text-[#071825]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}