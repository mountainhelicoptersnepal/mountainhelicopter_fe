"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Menu, Search, UserRound, X } from "lucide-react";
import Image from "next/image";

const SCROLL_THRESHOLD = 20;

const NAV_LINKS = [
  {
    label: "Tours",
    href: "/tours",
    dropdown: [
      {
        title: "Everest Base Camp",
        href: "/tours/everest-base-camp",
        description: "Experience the world's highest mountain region.",
      },
      {
        title: "Annapurna Base Camp",
        href: "/tours/annapurna-base-camp",
        description: "Discover the beautiful Annapurna Himalayas.",
      },
      {
        title: "Muktinath Tour",
        href: "/tours/muktinath",
        description: "Sacred helicopter pilgrimage experience.",
      },
      {
        title: "Langtang Valley",
        href: "/tours/langtang-valley",
        description: "Explore the hidden Himalayan valley.",
      },
      {
        title: "Gosaikunda Lake",
        href: "/tours/gosaikunda-lake",
        description: "Visit the holy alpine lake by helicopter.",
      },
    ],
  },
  {
    label: "Experiences",
    href: "/experiences",
    dropdown: [
      {
        title: "Breakfast Above the Clouds",
        href: "/experiences/everest-breakfast",
        description: "Hot coffee at 3,880 metres. Everest through the window.",
      },
      {
        title: "Stand at 5,545 Metres",
        href: "/experiences/kala-patthar",
        description:
          "The closest legal landing viewpoint to Everest without climbing it.",
      },
      {
        title: "A Table in the Sky",
        href: "/experiences/heli-picnic",
        description:
          "Aerial filming and photography flights designed around the light.",
      },
      {
        title: "Pilgrimage by Air",
        href: "/experiences/pilgrimage",
        description:
          "Muktinath, Gosaikunda, and sacred Himalayan destinations.",
      },
      {
        title: "Say It at 5,000 Metres",
        href: "/experiences/celebrations",
        description:
          "Proposals, anniversaries, birthdays, and private celebrations.",
      },
      {
        title: "The Golden Hour Flight",
        href: "/experiences/photo-flight",
        description:
          "Photography and filming flights designed around the light.",
      },
      {
        title: "Design Your Own Day",
        href: "/experiences/private-charter",
        description:
          "Start with a blank map of Nepal. We arrange the route, permits, landings, timing, and aircraft around the experience you imagine.",
      },
    ],
  },
  {
    label: "Fleet",
    href: "/fleet",
    dropdown: [],
  },
  {
    label: "Rescue",
    href: "/rescue",
    dropdown: [
      {
        title: "Mountain Rescue",
        href: "/rescue/mountain",
        description: "Fast emergency Himalayan rescue.",
      },
      {
        title: "Medical Rescue",
        href: "/rescue/medical",
        description: "Emergency medical helicopter service.",
      },
      {
        title: "Emergency Support",
        href: "/rescue/emergency",
        description: "24/7 rescue assistance.",
      },
    ],
  },
  {
    label: "Safety Report",
    href: "/safety",
    dropdown: [
      {
        title: "Safety Policy",
        href: "/safety/policy",
        description: "Our aviation safety standards.",
      },
      {
        title: "Safety Reports",
        href: "/safety/reports",
        description: "View operational safety reports.",
      },
    ],
  },
];

const SEARCH_PAGES = [
  {
    keywords: ["everest base camp", "everest", "ebc"],
    href: "/tours/everest-base-camp",
  },
  {
    keywords: ["annapurna base camp", "annapurna", "abc"],
    href: "/tours/annapurna-base-camp",
  },
  {
    keywords: ["muktinath helicopter", "muktinath"],
    href: "/tours/muktinath-pilgrimage",
  },
  {
    keywords: ["langtang valley", "langtang"],
    href: "/tours/langtang-valley",
  },
  {
    keywords: ["gosaikunda lake", "gosaikunda"],
    href: "/tours/gosaikunda-lake",
  },
  {
    keywords: ["safety report", "safety"],
    href: "/safety",
  },
  {
    keywords: ["contact us", "contact"],
    href: "/contact",
  },
  {
    keywords: ["about us", "about"],
    href: "/about",
  },
  {
    keywords: ["aircraft", "fleet"],
    href: "/fleet",
  },
  {
    keywords: ["tours", "tour"],
    href: "/tours",
  },
];

function findSearchDestination(searchValue: string) {
  const query = searchValue.trim().toLowerCase();

  if (!query) {
    return null;
  }

  const matchingPage = SEARCH_PAGES.find(({ keywords }) =>
    keywords.some((keyword) => query.includes(keyword)),
  );

  return (
    matchingPage?.href ?? `/tours?search=${encodeURIComponent(searchValue)}`
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return <NavbarContent key={pathname} pathname={pathname} />;
}

function NavbarContent({ pathname }: { pathname: string }) {
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<number | null>(null);

  const desktopSearchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);
  const mobileControlsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
      setShowSearch(false);
      setActiveDropdown(null);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Node)) {
        return;
      }

      const clickedDesktopSearch = desktopSearchRef.current?.contains(target);

      const clickedMobileSearch = mobileSearchRef.current?.contains(target);

      const clickedMobileControls =
        mobileControlsRef.current?.contains(target);

      if (!clickedDesktopSearch && !clickedMobileSearch && !clickedMobileControls) {
        setShowSearch(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const closeNavigation = () => {
    setActiveDropdown(null);
    setMobileDropdown(null);
    setShowMobileMenu(false);
    setShowSearch(false);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const destination = findSearchDestination(searchValue);

    if (!destination) {
      return;
    }

    router.push(destination);

    closeNavigation();
    setSearchValue("");
  };

  const toggleSearch = () => {
    setShowSearch((currentValue) => !currentValue);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu((currentValue) => !currentValue);
    setShowSearch(false);
  };

  const isHomeTop = pathname === "/" && !isScrolled;
  const navTextColor = isHomeTop ? "text-white" : "text-[#071825]";
  const logoSrc = isHomeTop
    ? "/images/logo.png"
    : "/images/navbar-logo-clear.png";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1000] w-full max-w-[100vw] transition-all duration-300 ${
        isHomeTop ? "bg-transparent" : "bg-white shadow-sm backdrop-blur-md"
      }`}
    >
      <nav className="relative z-10 mx-auto flex h-[75px] w-full max-w-7xl items-center justify-between overflow-x-clip px-4 py-[10px] sm:px-6 md:px-8 xl:px-12 2xl:px-16">
        {/* Logo */}

        <Link
          href="/"
          onClick={closeNavigation}
          aria-label="Go to homepage"
          className="flex shrink-0 flex-col leading-none"
        >
          <Image
            src={logoSrc}
            alt="Mountain Helicopters Logo"
            width={112}
            height={54}
            className="h-auto w-[112px] sm:w-[128px]"
          />
        </Link>

        {/* Desktop navigation */}

        <div
          className={`hidden min-w-0 items-center gap-5 text-[14px] font-semibold uppercase xl:flex 2xl:gap-8 2xl:text-[16px] ${navTextColor}`}
        >
          {NAV_LINKS.map((link, index) => {
            const isCurrentPath =
              pathname === link.href || pathname.startsWith(`${link.href}/`);

            const hasDropdown = link.dropdown.length > 0;
            const isDropdownOpen = activeDropdown === index;

            return (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => {
                  if (hasDropdown) {
                    setActiveDropdown(index);
                  }
                }}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  onClick={closeNavigation}
                  className="group relative flex items-center gap-1 transition hover:text-[#f7b51e]"
                >
                  {link.label}

                  {hasDropdown ? (
                    <ChevronDown
                      size={16}
                      aria-hidden="true"
                      className={`transition-transform duration-300 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  ) : null}

                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] bg-[#f5b82e] transition-all duration-300 ${
                      isCurrentPath ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>

                {/* Desktop dropdown */}

                {hasDropdown ? (
                  <div
                    className={`absolute left-0 top-10 w-[300px] origin-top rounded-xl border border-gray-100 bg-white p-3 shadow-2xl transition-all duration-300 ${
                      isDropdownOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible translate-y-5 opacity-0"
                    }`}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeNavigation}
                        className="group block rounded-lg p-3 transition hover:bg-[#f7b51e]/10"
                      >
                        <h3 className="text-sm font-bold text-[#071825] transition group-hover:text-[#f7b51e]">
                          {item.title}
                        </h3>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        {/* Desktop right section */}

        <div
          className={`hidden shrink-0 items-center gap-4 xl:flex 2xl:gap-6 ${navTextColor}`}
        >
          <div ref={desktopSearchRef} className="flex items-center gap-3">
            <form
              onSubmit={handleSearchSubmit}
              className={`overflow-hidden transition-all duration-700 ${
                showSearch
                  ? "w-[180px] opacity-100 2xl:w-[240px]"
                  : "w-0 opacity-0"
              }`}
            >
              <input
                type="search"
                placeholder="Search..."
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                autoFocus={showSearch}
                aria-label="Search website"
                className="h-10 w-full rounded-full bg-white/95 px-5 text-sm text-[#333] outline-none"
              />
            </form>

            <button
              type="button"
              onClick={toggleSearch}
              aria-label={showSearch ? "Close search" : "Open search"}
              aria-expanded={showSearch}
              className="cursor-pointer transition hover:text-[#f7b51e]"
            >
              <Search size={25} />
            </button>
          </div>

          <Link
            href="/account"
            onClick={closeNavigation}
            aria-label="Open account"
            className="transition hover:text-[#f7b51e]"
          >
            <UserRound size={25} />
          </Link>
        </div>

        {/* Mobile navigation buttons */}

        <div
          ref={mobileControlsRef}
          className={`relative z-20 flex shrink-0 items-center gap-3 sm:gap-4 xl:hidden ${navTextColor}`}
        >
          <button
            type="button"
            onClick={toggleSearch}
            aria-label={showSearch ? "Close search" : "Open search"}
            aria-expanded={showSearch}
            className="pointer-events-auto flex h-11 w-11 touch-manipulation select-none items-center justify-center"
          >
            <Search size={23} />
          </button>

          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={showMobileMenu ? "Close menu" : "Open menu"}
            aria-expanded={showMobileMenu}
            className="pointer-events-auto flex h-11 w-11 touch-manipulation select-none items-center justify-center"
          >
            {showMobileMenu ? <X size={29} /> : <Menu size={29} />}
          </button>
        </div>
      </nav>

      {/* Mobile search */}

      <div
        ref={mobileSearchRef}
        className={`relative z-20 overflow-hidden px-5 transition-all duration-500 xl:hidden ${
          showSearch ? "max-h-20 pb-3" : "max-h-0"
        }`}
      >
        <form onSubmit={handleSearchSubmit}>
          <input
            type="search"
            placeholder="Search Everest, Annapurna..."
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            aria-label="Search website"
            className="h-11 w-full rounded-full bg-white px-5 text-sm outline-none"
          />
        </form>
      </div>

      {/* Mobile menu */}

      <div
        className={`relative z-20 mx-4 overflow-hidden rounded-xl bg-[#071825]/95 backdrop-blur-md transition-all duration-500 sm:mx-5 xl:hidden ${
          showMobileMenu ? "max-h-[700px]" : "max-h-0"
        }`}
      >
        <div className="px-6 py-5 text-sm font-semibold uppercase text-white">
          {NAV_LINKS.map((link, index) => {
            const hasDropdown = link.dropdown.length > 0;
            const isDropdownOpen = mobileDropdown === index;

            return (
              <div key={link.href}>
                {hasDropdown ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileDropdown(isDropdownOpen ? null : index)
                      }
                      aria-expanded={isDropdownOpen}
                      className="flex w-full items-center justify-between border-b border-white/10 py-4"
                    >
                      {link.label}

                      <ChevronDown
                        size={18}
                        aria-hidden="true"
                        className={`transition-transform ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isDropdownOpen ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <Link
                        href={link.href}
                        onClick={closeNavigation}
                        className="block px-4 py-3 text-xs normal-case text-gray-300 transition hover:text-[#f7b51e]"
                      >
                        View all {link.label}
                      </Link>

                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={closeNavigation}
                          className="block px-4 py-3 text-xs normal-case text-gray-300 transition hover:text-[#f7b51e]"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={closeNavigation}
                    className="block border-b border-white/10 py-4"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            );
          })}

          <Link
            href="/account"
            onClick={closeNavigation}
            className="mt-5 flex items-center gap-3"
          >
            <UserRound size={22} />
            Account
          </Link>
        </div>
      </div>
    </header>
  );
}
