// app/sections/FlightHighlights.tsx
"use client";

import React from "react";
import Image from "next/image";

interface Highlight {
  id: number;
  title: string;
  description: string;
  image: string;
}

const highlights: Highlight[] = [
  {
    id: 1,
    title: "Gorakshep and the Khumbu Glacier",
    description:
      "Soon after takeoff, passengers get a last look at the sandy Gorakshep basin, its lodges, and sections of the Khumbu Glacier. The exact departure direction depends on the wind and terrain on the day.",
    image:
      "/images/gorakshep-kathmandu-helicopter/Gorakshep-Kathmandu-helicopter-highlights1.png",
  },
  {
    id: 2,
    title: "Pumori, Nuptse, and Lhotse",
    description:
      "Several major upper-Khumbu peaks are visible in clear conditions, and Everest itself can sometimes be spotted, though it's partly screened from many angles by the surrounding giants.",
    image:
      "/images/gorakshep-kathmandu-helicopter/Gorakshep-Kathmandu-helicopter-highlights2.png",
  },
  {
    id: 3,
    title: "Lobuche and Pheriche",
    description:
      "The route often passes over Lobuche, Thukla, and Pheriche, which also doubles as the shuttle and regrouping point when the full Gorakshep group needs to be split across multiple lifts.",
    image:
      "/images/gorakshep-kathmandu-helicopter/Gorakshep-Kathmandu-helicopter-highlights3.webp",
  },
  {
    id: 4,
    title: "Ama Dablam and the Lower Khumbu Villages",
    description:
      "Ama Dablam is usually the easiest peak to pick out lower down the valley, with Pangboche and Tengboche appearing depending on the exact flight line.",
    image:
      "/images/gorakshep-kathmandu-helicopter/Gorakshep-Kathmandu-helicopter-highlights4.png",
  },
  {
    id: 5,
    title: "Dudh Koshi Valley and Lukla",
    description:
      "Forested slopes and the Dudh Koshi River system lead toward Lukla, where the helicopter typically makes a brief refueling stop before continuing.",
    image:
      "/images/gorakshep-kathmandu-helicopter/Gorakshep-Kathmandu-helicopter-highlights5.png",
  },
  {
    id: 6,
    title: "Terraced Hills and the Kathmandu Valley",
    description:
      "Beyond Lukla, the terrain flattens into the terraced mid-hills of Solukhumbu and central Nepal before the temple-studded Kathmandu Valley comes into view on the final approach.",
    image:
      "/images/gorakshep-kathmandu-helicopter/Gorakshep-Kathmandu-helicopter-highlights6.jpg",
  },
];

export default function FlightHighlights() {
  return (
    <section className="w-full bg-[#f4f6f8] py-16 md:py-24">
      {/* Title */}
      <div className="mb-10 max-w-7xl mx-auto md:mb-14 text-center px-4">
        <h2 className="[font-family:'Fraunces',serif] max-w-7xl mx-auto text-3xl md:text-4xl lg:text-5xl text-[#0f172a] tracking-tight">
          Major Attractions on the Gorakshep to Kathmandu Helicopter Flight
        </h2>
      </div>

      {/* Image Strip */}
      <div className="group flex h-[360px] w-full snap-x snap-mandatory gap-3 overflow-x-auto px-4 md:h-[500px] md:snap-none md:gap-0 md:overflow-hidden md:px-0 lg:h-[600px]">
        {highlights.map((item) => (
          <div
            key={item.id}
            className="group/highlight relative min-w-[78vw] snap-center cursor-pointer overflow-hidden rounded-md transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] md:min-w-0 md:flex-1 md:rounded-none md:group-hover:flex-[0.92] md:hover:!flex-[2]"
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 78vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out group-hover/highlight:scale-105"
              priority={item.id <= 2}
            />

            {/* Gradient Overlay - always visible but intensifies on hover */}
            <div className="absolute inset-0 bg-black/20 opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover/highlight:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 transition-opacity duration-500 md:opacity-45 md:group-hover/highlight:opacity-80" />

            {/* Text Content */}
            <div className="absolute bottom-8 left-1/2 w-full -translate-x-1/2 translate-y-0 px-5 text-center opacity-100 transition-all duration-500 ease-out md:bottom-12 md:translate-y-3 md:px-8 md:opacity-0 md:group-hover/highlight:translate-y-0 md:group-hover/highlight:opacity-100">
              <h3 className="mb-1 text-lg font-medium text-white md:text-xl lg:text-2xl">
                {item.title}
              </h3>
              <p className="text-sm font-light text-white/80 md:text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
