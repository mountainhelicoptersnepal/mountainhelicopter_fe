import type { ComponentProps } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type PrimaryButtonProps = ComponentProps<typeof Link> & {
  showArrow?: boolean;
};

const PrimaryButton = ({
  children,
  className,
  showArrow = true,
  ...props
}: PrimaryButtonProps) => {
  return (
    <Link
      className={cn(
        "group relative isolate flex h-[46px] w-[157px] shrink-0 items-center justify-center gap-[5px] overflow-hidden whitespace-nowrap bg-[#F2B632] px-6 py-2 font-manrope text-[14px] font-bold uppercase text-[#003366] hover:border-2 hover:border-gold",
        className,
      )}
      {...props}
    >
      <span className="absolute inset-0 -translate-x-[101%] bg-white transition-transform duration-500 ease-out group-hover:translate-x-0" />

      <span className="relative z-10 flex items-center gap-[5px] transition-colors duration-300 group-hover:text-gold">
        {children}
        {showArrow ? (
          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M5.93876 0.999057C5.88208 0.946237 5.83661 0.882541 5.80508 0.811769C5.77354 0.740997 5.75659 0.664598 5.75522 0.58713C5.75385 0.509663 5.76811 0.432713 5.79712 0.360872C5.82614 0.289032 5.86933 0.223772 5.92412 0.168985C5.9789 0.114199 6.04416 0.0710085 6.116 0.0419909C6.18785 0.0129732 6.26479 -0.00127704 6.34226 8.97911e-05C6.41973 0.00145662 6.49613 0.0184125 6.5669 0.0499464C6.63767 0.0814803 6.70137 0.126946 6.75419 0.183631L9.83127 3.26071C9.93931 3.36889 10 3.51553 10 3.66842C10 3.82132 9.93931 3.96796 9.83127 4.07614L6.75419 7.15322C6.70137 7.2099 6.63767 7.25537 6.5669 7.2869C6.49613 7.31843 6.41973 7.33539 6.34226 7.33676C6.26479 7.33812 6.18785 7.32387 6.116 7.29486C6.04416 7.26584 5.9789 7.22265 5.92412 7.16786C5.86933 7.11307 5.82614 7.04781 5.79712 6.97597C5.76811 6.90413 5.75385 6.82718 5.75522 6.74972C5.75659 6.67225 5.77354 6.59585 5.80508 6.52508C5.83661 6.45431 5.88208 6.39061 5.93876 6.33779L8.03118 4.24538H0.576952C0.423935 4.24538 0.277184 4.18459 0.168985 4.07639C0.0607853 3.96819 0 3.82144 0 3.66842C0 3.51541 0.0607853 3.36866 0.168985 3.26046C0.277184 3.15226 0.423935 3.09147 0.576952 3.09147H8.03118L5.93876 0.999057Z"
              fill="currentColor"
            />
          </svg>
        ) : null}
      </span>
    </Link>
  );
};

export default PrimaryButton;
