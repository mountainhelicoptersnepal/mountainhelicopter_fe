"use client";

/** Scrolls to the bottom booking form, preselecting a flight type. */
export default function BookButton({
  service,
  label,
  className,
}: {
  service?: string;
  label: string;
  className: string;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        if (service) {
          window.dispatchEvent(
            new CustomEvent("lukla:book", { detail: service }),
          );
        }
        document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {label}
    </button>
  );
}
