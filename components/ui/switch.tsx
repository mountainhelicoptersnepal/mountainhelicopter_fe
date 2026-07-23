"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SwitchProps {
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: "sm" | "default";
  className?: string;
}

function Switch({
  checked,
  onCheckedChange,
  disabled = false,
  size = "default",
  className,
}: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => {
        if (disabled) return;
        onCheckedChange?.(!checked);
      }}
      className={cn(
        "relative inline-flex items-center rounded-full transition-colors focus:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",

        // size
        size === "default" && "h-5 w-9",
        size === "sm" && "h-4 w-7",

        // colors
        checked ? "bg-blue-500" : "bg-gray-300",

        className,
      )}
    >
      <span
        className={cn(
          "absolute rounded-full bg-white transition-transform duration-200",

          // thumb size
          size === "default" && "h-4 w-4",
          size === "sm" && "h-3 w-3",

          // base position
          "left-1",

          // movement
          checked
            ? size === "default"
              ? "translate-x-4"
              : "translate-x-3"
            : "translate-x-0",
        )}
      />
    </button>
  );
}

export { Switch };
