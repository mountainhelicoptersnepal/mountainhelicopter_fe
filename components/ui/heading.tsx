import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/utils";

const sizeClasses = {
  "display-lg": "text-display-lg leading-[var(--line-height-display)]",
  "display-md": "text-display-md leading-[var(--line-height-display)]",
  "display-sm": "text-display-sm leading-[var(--line-height-display)]",
  "heading-2xl": "text-heading-2xl leading-[var(--line-height-heading)]",
  "heading-xl": "text-heading-xl leading-[var(--line-height-heading)]",
  "heading-lg": "text-heading-lg leading-[var(--line-height-heading)]",
  "heading-md": "text-heading-md leading-[var(--line-height-heading)]",
  "heading-sm": "text-heading-sm leading-[var(--line-height-heading)]",
  "heading-xs": "text-heading-xs leading-[var(--line-height-heading)]",
} as const;

const weightClasses = {
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
} as const;

type HeadingSize = keyof typeof sizeClasses;
type HeadingWeight = keyof typeof weightClasses;

type HeadingProps<T extends ElementType> = {
  as?: T;
  size?: HeadingSize;
  weight?: HeadingWeight;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "size">;

export function Heading<T extends ElementType = "h2">({
  as,
  size = "heading-xl",
  weight = "bold",
  className,
  children,
  ...props
}: HeadingProps<T>) {
  const Component = as ?? "h2";

  return (
    <Component
      className={cn(
        "text-balance tracking-normal text-ink",
        sizeClasses[size],
        weightClasses[weight],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
