import Image from "next/image";
import Link from "next/link";

import type { BlogPost, BlogSection } from "@/lib/blogs";
import BlogFaqAccordion from "./BlogFaqAccordion";

type BlogDetailPageProps = {
  post: BlogPost;
};

function BlogSectionBlock({ section }: { section: BlogSection }) {
  if (section.type === "heading") {
    return (
      <h2 className="mt-10 font-fraunces text-[26px] font-semibold leading-tight text-[#0E2F4F] sm:text-[28px] md:mt-12 md:text-[34px]">
        {section.text}
      </h2>
    );
  }

  if (section.type === "paragraph") {
    return (
      <p className="mt-5 font-manrope text-[15px] leading-7 text-[#334155] sm:text-[16px] sm:leading-8">
        {section.text}
      </p>
    );
  }

  if (section.type === "list") {
    return (
      <ul className="mt-5 space-y-3 sm:mt-6">
        {section.items.map((item) => (
          <li
            key={item}
            className="flex gap-3 font-manrope text-[15px] leading-7 text-[#334155] sm:text-[16px]"
          >
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C79422]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="mt-6 max-w-[calc(100vw-48px)] overflow-x-auto rounded-[8px] border border-[#D8CEC0] bg-white shadow-sm sm:mt-7 md:max-w-full">
      <table className="w-full min-w-[560px] border-collapse font-manrope text-[13px] sm:min-w-[620px] sm:text-sm">
        <thead>
          <tr className="bg-[#0E2F4F] text-left text-white">
            {section.columns.map((column) => (
              <th
                key={column}
                className="px-4 py-3 font-extrabold sm:px-5 sm:py-4"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {section.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t border-[#E9DFD0]">
              {row.map((cell, cellIndex) => (
                <td
                  key={`${rowIndex}-${cellIndex}`}
                  className="px-4 py-3 leading-6 text-[#334155] sm:px-5 sm:py-4"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function BlogDetailPage({ post }: BlogDetailPageProps) {
  return (
    <main className="overflow-x-hidden bg-[#fdfdfd] text-[#102A43]">
      <section className="relative min-h-[460px] overflow-hidden sm:min-h-[520px] lg:min-h-[560px]">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 mx-auto flex min-h-[460px] w-full max-w-7xl items-end px-5 pb-10 pt-28 sm:min-h-[520px] sm:px-6 sm:pb-14 md:px-12 lg:min-h-[560px] lg:px-16 lg:pb-16">
          <div className="max-w-4xl">
            <Link
              href="/blogs"
              className="font-manrope text-[11px] font-bold uppercase tracking-[0.18em] text-[#F2B632] transition hover:text-white sm:text-[12px] sm:tracking-[0.22em]"
            >
              Back to Blogs
            </Link>
            <p className="mt-6 font-manrope text-[11px] font-bold uppercase tracking-[0.18em] text-[#F2B632] sm:mt-8 sm:text-[12px] sm:tracking-[0.22em]">
              {post.category}
            </p>
            <h1 className="mt-4 max-w-[12ch] font-fraunces text-[34px] font-semibold leading-[1.05] tracking-[0] text-white min-[420px]:max-w-[14ch] min-[420px]:text-[40px] sm:mt-5 sm:max-w-3xl sm:text-[52px] md:text-[64px]">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-manrope text-[13px] leading-5 text-white/80 sm:mt-6 sm:gap-x-5 sm:text-sm">
              <time dateTime={post.dateTime}>{post.date}</time>
              <span>{post.readTime}</span>
              <span>Mountain Helicopters Nepal</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:grid-cols-[minmax(0,760px)_minmax(260px,300px)] lg:gap-12 lg:px-16 lg:py-24">
        <article className="min-w-0 max-w-[760px]">
          <div className="mb-8 border-l-4 border-[#C79422] bg-white px-5 py-5 shadow-sm sm:mb-10 sm:px-6">
            <p className="font-manrope text-[17px] leading-8 text-[#243B53] sm:text-[19px] sm:leading-9">
              {post.excerpt}
            </p>
          </div>

          {post.content.map((section, index) => (
            <BlogSectionBlock
              key={`${section.type}-${index}`}
              section={section}
            />
          ))}

          <section className="mt-12 border-t border-[#D8CEC0] pt-8 sm:mt-14 sm:pt-10">
            <h2 className="font-fraunces text-[28px] font-semibold text-[#0E2F4F] sm:text-[30px]">
              Frequently Asked Questions
            </h2>
            <BlogFaqAccordion faqs={post.faqs} />
          </section>

          <div className="mt-10 rounded-[8px] bg-[#0E2F4F] p-5 text-white shadow-sm sm:mt-12 sm:p-7">
            <p className="font-manrope text-[16px] font-bold leading-7 sm:text-[17px] sm:leading-8">
              {post.cta}
            </p>
          </div>
        </article>

        <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[8px] border border-[#D8CEC0] bg-white p-5 shadow-sm sm:p-6">
            <p className="font-manrope text-[11px] font-bold uppercase tracking-[0.22em] text-[#9A6A12]">
              Related Trips
            </p>
            <div className="mt-5 space-y-3">
              {post.internalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block border-b border-[#E9DFD0] pb-3 font-manrope text-sm font-semibold leading-6 text-[#334155] transition hover:text-[#9A6A12]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-[8px] border border-[#D8CEC0] bg-[#FBF8F2] p-5 sm:mt-6 sm:p-6">
            <p className="font-manrope text-[11px] font-bold uppercase tracking-[0.22em] text-[#9A6A12]">
              Need a clear answer?
            </p>
            <p className="mt-4 font-manrope text-sm leading-7 text-[#475569]">
              Send the team your date, group size, and preferred route. They can
              confirm the realistic flight window before you plan the rest of
              the day.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex w-full items-center justify-center rounded-[6px] bg-[#F2B632] px-5 py-3 font-manrope text-sm font-extrabold text-[#0E2F4F] transition hover:bg-[#d9a12a]"
            >
              Contact the team
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
