import type { ComponentProps } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type SecondaryButtonProps = ComponentProps<typeof Link>;

const SecondaryButton = ({
  children,
  className,
  ...props
}: SecondaryButtonProps) => {
  return (
    <Link
      className={cn(
        "group relative isolate flex h-[46px] w-[222px] max-w-full shrink-0 items-center justify-center gap-[5px] overflow-hidden whitespace-nowrap border-2 border-white bg-transparent px-6 py-2 font-manrope text-[14px] font-bold uppercase text-white",
        className,
      )}
      {...props}
    >
      <span className="absolute inset-0 -translate-x-[101%] bg-white transition-transform duration-500 ease-out group-hover:translate-x-0" />

      <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-[#003366]">
        {children}
      </span>
    </Link>
  );
};

export default SecondaryButton;
