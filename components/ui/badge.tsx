import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border border-transparent px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",

        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90",

        destructive: "bg-destructive text-white hover:bg-destructive/90",

        outline:
          "border-border text-foreground hover:bg-accent hover:text-accent-foreground",

        success: "bg-green-600 text-white hover:bg-green-700",

        /* ---------------------------------- */
        /* 🔥 STATUS VARIANTS */
        /* ---------------------------------- */

        pending: "bg-yellow-100 text-yellow-700 border-yellow-300",

        contacted: "bg-blue-100 text-blue-700 border-blue-300",

        processing: "bg-purple-100 text-purple-700 border-purple-300",

        cancelled: "bg-red-100 text-red-700 border-red-300",
        gardient:
          "cursor-pointer text-white bg-gradient-to-r from-[#5EA500] via-[#009689] to-[#0092B8] hover:from-[#0092B8] hover:via-[#009689] hover:to-[#5EA500] transition-all duration-300",
        orange: "bg-[#F60900] text-white hover:g-[#F54900]",
        ghost: "bg-grey/30 shadow border text-slate-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span";

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
