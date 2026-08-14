"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

import BlogCard from "@/components/shared/cards/BlogCard";
import { blogPosts } from "@/lib/blogs";

type SearchPageContentProps = {
  initialQuery: string;
};

type PackageResult = {
  title: string;
  href: string;
  category: string;
  excerpt: string;
  meta: string;
  price: string;
  image: string;
  keywords: string[];
};

const packages: PackageResult[] = [
  {
    title: "Everest Kalapatthar Kathmandu Helicopter Tour",
    href: "/tours/everest-kalapatthar-kathmandu",
    category: "Tour Package",
    excerpt:
      "Fly to the Everest region and land near Kala Patthar for a same-morning Himalayan experience.",
    meta: "4-5 hrs | Khumbu",
    price: "From $3,000",
    image: "/images/everest-kalapatthar-kathmandu/Kala Patthar Landing- HEV-Hero.jpg",
    keywords: ["everest", "base camp", "ebc", "kala patthar", "helicopter"],
  },
  {
    title: "Everest Mountain Overfly with Gokyo Lake Landing",
    href: "/tours/everest-gokyo-kathmandu",
    category: "Tour Package",
    excerpt:
      "Fly close to Everest, then land beside the turquoise waters of Gokyo Lake.",
    meta: "4-5 hrs | Khumbu",
    price: "From $4,000",
    image: "/images/everest-gokyo-kathmandu/Gokyo-Landing-Hero.jpg",
    keywords: ["everest", "gokyo", "khumbu", "helicopter", "tour"],
  },
  {
    title: "Gorakshep to Kathmandu Helicopter",
    href: "/tours/gorakshep-kathmandu-helicopter",
    category: "Tour Package",
    excerpt:
      "Fast helicopter return from the Everest trekking route to Kathmandu.",
    meta: "45-60 min | Everest",
    price: "From $1,700",
    image: "/images/gorakshep-kathmandu-helicopter/Gorakshep-Kathmandu-helicopter-hero.JPG",
    keywords: ["gorakshep", "kathmandu", "everest", "return", "helicopter"],
  },
  {
    title: "Kathmandu to Lukla Helicopter Flight",
    href: "/tours/kathmandu-lukla-helicopter",
    category: "Tour Package",
    excerpt:
      "Direct helicopter transfer from Kathmandu to the gateway of the Everest region.",
    meta: "40-50 min | Lukla",
    price: "From $550",
    image: "/images/kathmandu-lukla-helicopter/kathmandu-Lukla-helicopter-hero.jpg",
    keywords: ["kathmandu", "lukla", "everest", "transfer", "helicopter"],
  },
  {
    title: "Ramechhap to Lukla Helicopter Flight",
    href: "/tours/ramechhap-lukla-helicopter",
    category: "Tour Package",
    excerpt:
      "Convenient helicopter transfer from Ramechhap to Lukla.",
    meta: "Short transfer | Lukla",
    price: "From $400",
    image: "/images/ramechhap-lukla-helicopter/Ramechhap-Lukla-helicopter-Hero.png",
    keywords: ["ramechhap", "lukla", "everest", "transfer", "helicopter"],
  },
  {
    title: "Mountain Rescue Services",
    href: "/rescue",
    category: "Rescue Package",
    excerpt:
      "Emergency helicopter evacuation and mountain rescue coordination across Nepal.",
    meta: "24-hour desk | Nepal",
    price: "Case based",
    image: "/images/rescue/section/emergency-medical-evacuation.jpg",
    keywords: ["rescue", "evacuation", "emergency", "insurance", "medical"],
  },
];

const searchableBlogs = blogPosts.map((post) => ({
  ...post,
  keywords: [
    post.focusKeyword,
    ...post.secondaryKeywords,
    post.title,
    post.category,
    post.excerpt,
  ],
}));

function scoreResult(
  query: string,
  item: {
    title: string;
    category: string;
    excerpt: string;
    keywords: string[];
  },
) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return 1;
  }

  const terms = normalizedQuery.split(/\s+/).filter(Boolean);
  const title = item.title.toLowerCase();
  const haystack = [item.title, item.category, item.excerpt, ...item.keywords]
    .join(" ")
    .toLowerCase();

  return terms.reduce((total, term) => {
    if (title.includes(term)) {
      return total + 4;
    }

    if (haystack.includes(term)) {
      return total + 1;
    }

    return total;
  }, 0);
}

function getMatches<T extends Parameters<typeof scoreResult>[1]>(
  query: string,
  items: T[],
) {
  const hasQuery = Boolean(query.trim());

  return items
    .map((item) => ({
      item,
      score: scoreResult(query, item),
    }))
    .filter((result) => (hasQuery ? result.score > 0 : true))
    .sort((a, b) => b.score - a.score)
    .map((result) => result.item);
}

function PackageCard({ packageItem }: { packageItem: PackageResult }) {
  return (
    <Link
      href={packageItem.href}
      className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-[#D8CEC0] bg-white shadow-sm outline-none transition duration-300 hover:-translate-y-1 hover:border-[#C79422] hover:shadow-xl focus:ring-2 focus:ring-[#F2B632]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0E2F4F]">
        <Image
          src={packageItem.image}
          alt={packageItem.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/0" />
        <div className="absolute left-4 top-4 rounded-[4px] bg-[#F2B632] px-3 py-2 font-manrope text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#0E2F4F]">
          {packageItem.category}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4 border-b border-[#E9DFD0] pb-4">
          <p className="font-manrope text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#9A6A12]">
            {packageItem.meta}
          </p>
          <p className="shrink-0 rounded-full bg-[#F7F2EA] px-3 py-1 font-manrope text-xs font-extrabold text-[#0E2F4F]">
            {packageItem.price}
          </p>
        </div>

        <h3 className="mt-5 font-fraunces text-[27px] font-semibold leading-tight text-[#0E2F4F] transition group-hover:text-[#9A6A12]">
          {packageItem.title}
        </h3>

        <p className="mt-3 line-clamp-3 font-manrope text-sm leading-7 text-[#475569]">
          {packageItem.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          <span className="font-manrope text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#0E2F4F]">
            View package
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0E2F4F] text-white transition group-hover:bg-[#F2B632] group-hover:text-[#0E2F4F]">
            <ArrowRight size={16} strokeWidth={2} className="shrink-0" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function SearchPageContent({
  initialQuery,
}: SearchPageContentProps) {
  const [searchValue, setSearchValue] = useState(initialQuery);
  const [query, setQuery] = useState(initialQuery.trim());
  const packageResults = getMatches(query, packages);
  const blogResults = getMatches(query, searchableBlogs);
  const totalResults = packageResults.length + blogResults.length;

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextQuery = searchValue.trim();
    const nextUrl = nextQuery
      ? `/search?q=${encodeURIComponent(nextQuery)}`
      : "/search";

    window.history.pushState(null, "", nextUrl);
    setQuery(nextQuery);
  };

  return (
    <main className="bg-[#F7F2EA] text-[#102A43]">
      <section className="relative overflow-hidden bg-[#0E2F4F] pt-28 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/blogs/blog-bg.jpg"
            alt="Himalayan helicopter route"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-16 md:px-12 lg:px-16">
          <p className="font-manrope text-[12px] font-extrabold uppercase tracking-[0.24em] text-[#F2B632]">
            Search Mountain Helicopters Nepal
          </p>
          <h1 className="mt-5 font-fraunces text-[42px] font-semibold leading-tight md:text-[68px]">
            Find packages and flight guides.
          </h1>

          <form
            action="/search"
            onSubmit={handleSearchSubmit}
            className="mt-8 flex max-w-2xl flex-col gap-3 rounded-[8px] bg-white p-2 shadow-lg sm:flex-row"
          >
            <label className="sr-only" htmlFor="site-search">
              Search
            </label>
            <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
              <Search className="h-5 w-5 shrink-0 text-[#9A6A12]" />
              <input
                id="site-search"
                name="q"
                type="search"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="Search Everest, Lukla, rescue..."
                className="h-12 min-w-0 flex-1 bg-transparent font-manrope text-sm text-[#102A43] outline-none placeholder:text-[#64748B]"
              />
            </div>
            <button
              type="submit"
              className="rounded-[6px] bg-[#F2B632] px-6 py-3 font-manrope text-sm font-extrabold text-[#0E2F4F] transition hover:bg-[#d9a12a]"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-14 md:px-12 md:py-20 lg:px-16">
        <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-manrope text-[12px] font-extrabold uppercase tracking-[0.22em] text-[#9A6A12]">
              Results
            </p>
            <h2 className="mt-2 font-fraunces text-[32px] font-semibold text-[#0E2F4F]">
              {query ? `Results for "${query}"` : "Popular packages and blogs"}
            </h2>
          </div>
          <p className="font-manrope text-sm text-[#64748B]">
            {totalResults} {totalResults === 1 ? "result" : "results"}
          </p>
        </div>

        {totalResults > 0 ? (
          <div className="space-y-14">
            <section>
              <div className="mb-6 flex items-center justify-between gap-4">
                <h3 className="font-fraunces text-[30px] font-semibold text-[#0E2F4F]">
                  Packages
                </h3>
                <span className="font-manrope text-sm text-[#64748B]">
                  {packageResults.length}
                </span>
              </div>

              {packageResults.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {packageResults.map((packageItem) => (
                    <PackageCard
                      key={packageItem.href}
                      packageItem={packageItem}
                    />
                  ))}
                </div>
              ) : (
                <p className="rounded-[8px] border border-[#D8CEC0] bg-white p-6 font-manrope text-sm text-[#64748B]">
                  No package results matched this search.
                </p>
              )}
            </section>

            <section>
              <div className="mb-6 flex items-center justify-between gap-4">
                <h3 className="font-fraunces text-[30px] font-semibold text-[#0E2F4F]">
                  Blogs
                </h3>
                <span className="font-manrope text-sm text-[#64748B]">
                  {blogResults.length}
                </span>
              </div>

              {blogResults.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {blogResults.map((post) => (
                    <BlogCard key={post.slug} {...post} />
                  ))}
                </div>
              ) : (
                <p className="rounded-[8px] border border-[#D8CEC0] bg-white p-6 font-manrope text-sm text-[#64748B]">
                  No blog results matched this search.
                </p>
              )}
            </section>
          </div>
        ) : (
          <div className="rounded-[8px] border border-[#D8CEC0] bg-white p-8 shadow-sm">
            <h3 className="font-fraunces text-[30px] font-semibold text-[#0E2F4F]">
              No matching result found.
            </h3>
            <p className="mt-3 max-w-2xl font-manrope text-sm leading-7 text-[#475569]">
              Try searching for Everest, Lukla, rescue, charter, cost, or
              season. The operations team can also help if you are looking for a
              custom route.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-[6px] bg-[#F2B632] px-6 py-3 font-manrope text-sm font-extrabold text-[#0E2F4F] transition hover:bg-[#d9a12a]"
            >
              Contact operations
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}
