"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type MultiSelectOption = {
  value: string;
  label: string;
};

interface MultiSelectProps {
  options: MultiSelectOption[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
  loading?: boolean;
}

export function MultiSelect({
  options,
  value,
  onChange,
  placeholder = "Select items…",
  disabled = false,
  loading = false,
}: MultiSelectProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const uniqueOptions = options.filter(
    (option, index, arr) => arr.findIndex((item) => item.value === option.value) === index
  );
  const uniqueValue = Array.from(new Set(value.filter(Boolean)));

  /* close on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggle = (id: string) => {
    onChange(uniqueValue.includes(id) ? uniqueValue.filter((v) => v !== id) : [...uniqueValue, id]);
  };

  const remove = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(uniqueValue.filter((v) => v !== id));
  };

  const filtered = uniqueOptions.filter((o) =>
    o.label.toLowerCase().includes(search.toLowerCase())
  );

  const selectedItems = uniqueValue.flatMap((v) => {
    const label = uniqueOptions.find((o) => o.value === v)?.label;
    return label ? [{ id: v, label }] : [];
  });

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Trigger */}
      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => !disabled && !loading && setOpen((p) => !p)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            if (!disabled && !loading) {
              setOpen((p) => !p);
            }
          }
        }}
        className={cn(
          "flex min-h-10 w-full flex-wrap items-center gap-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          (disabled || loading) && "cursor-not-allowed opacity-50"
        )}
      >
        {loading ? (
          <span className="text-muted-foreground">Loading…</span>
        ) : selectedItems.length === 0 ? (
          <span className="text-muted-foreground">{placeholder}</span>
        ) : (
          selectedItems.map(({ id, label }) => (
            <Badge
              key={id}
              variant="secondary"
              className="flex items-center gap-1 pr-1"
            >
              {label}
              <button
                type="button"
                onClick={(e) => remove(id, e)}
                className="rounded-full hover:bg-muted-foreground/20 p-0.5"
                disabled={disabled}
              >
                <X size={10} />
              </button>
            </Badge>
          ))
        )}
        <ChevronDown
          size={16}
          className={cn(
            "ml-auto shrink-0 text-muted-foreground transition-transform",
            open && "rotate-180"
          )}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-1 w-full rounded-md border bg-popover text-popover-foreground shadow-md">
          {/* Search */}
          <div className="p-2 border-b">
            <input
              autoFocus
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search…"
              className="w-full rounded-sm border border-input bg-transparent px-2 py-1 text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>

          {/* Options */}
          <ul
            role="listbox"
            aria-multiselectable="true"
            className="max-h-52 overflow-y-auto p-1"
          >
            {filtered.length === 0 ? (
              <li className="px-2 py-4 text-center text-sm text-muted-foreground">
                No results
              </li>
            ) : (
              filtered.map((opt) => {
                const selected = value.includes(opt.value);
                return (
                  <li
                    key={opt.value}
                    role="option"
                    aria-selected={selected}
                    onClick={() => toggle(opt.value)}
                    className={cn(
                      "flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm",
                      "hover:bg-accent hover:text-accent-foreground",
                      selected && "bg-accent/50"
                    )}
                  >
                    <Check
                      size={14}
                      className={cn(
                        "shrink-0 transition-opacity",
                        selected ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <span className="capitalize">{opt.label}</span>
                  </li>
                );
              })
            )}
          </ul>

          {/* Footer */}
          {uniqueValue.length > 0 && (
            <div className="border-t p-2">
              <button
                type="button"
                onClick={() => onChange([])}
                className="w-full rounded-sm px-2 py-1 text-xs text-muted-foreground hover:bg-accent hover:text-accent-foreground text-left"
              >
                Clear all ({uniqueValue.length} selected)
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
