import Image from "next/image";

export interface BlogCardProps {
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  dateTime: string;
  readTime: string;
}

const BlogCard = ({
  image,
  imageAlt,
  category,
  title,
  excerpt,
  date,
  dateTime,
  readTime,
}: BlogCardProps) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[10px] border border-[#6b7886] bg-[#002448]">
      <div className="relative aspect-[383/205] w-full shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover opacity-70 transition-opacity duration-500 group-hover:opacity-100"
        />

        <span className="absolute left-[14px] top-[18px] -translate-y-1 bg-[#f2b632] px-3 py-[5px] font-manrope text-[9px] font-extrabold uppercase leading-[13.5px] tracking-[1.98px] text-[#0a1929] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-8 bg-[#002448] p-6 transition-colors duration-300 group-hover:bg-[#0a1929] sm:gap-[47px]">
        <div className="flex flex-col gap-[15px]">
          <h3 className="font-fraunces text-[16.8px] font-bold leading-[21px] text-white transition-colors duration-300 group-hover:text-[#f2b632]">
            {title}
          </h3>

          <p className="line-clamp-3 font-manrope text-[14px] font-light leading-[22.75px] text-white/38">
            {excerpt}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between font-manrope text-[11px] leading-[16.5px] text-gold">
          <time dateTime={dateTime}>{date}</time>
          <span>{readTime}</span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
