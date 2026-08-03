"use client";

import BlogCard from "@/components/shared/cards/BlogCard";
import { blogPosts } from "@/lib/blogs";

export default function BlogCardsList() {
  return (
    <section className="bg-[#002347]">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12 md:py-24 lg:px-16 lg:py-28">
        <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-manrope text-[11px] font-bold uppercase tracking-[0.22em] text-[#F2B632]">
              All Blogs
            </p>

            <h2 className="mt-3 font-fraunces text-[34px] font-semibold leading-tight text-white md:text-[46px]">
              Latest flight notes and guides.
            </h2>
          </div>

          <p className="font-manrope text-sm text-white/45">
            Showing all {blogPosts.length} launch articles
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.slug} className="h-full">
              <BlogCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
