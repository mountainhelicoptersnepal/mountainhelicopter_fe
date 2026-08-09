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
  { id: 1, title: "Manthali and the Tamakoshi River", description: "Ramechhap Airport, Manthali Bazaar, river roads, and dry lower hills", image: "/images/ramechhap-lukla-helicopter/Ramechhap-Lukla-helicopter-highlights1.jpg" },
  { id: 2, title: "Terraced Hills and Rural Settlements", description: "Terraced fields, small settlements, and winding hill roads", image: "/images/ramechhap-lukla-helicopter/Ramechhap-Lukla-helicopter-highlights2.png" },
  { id: 3, title: "River Valleys of the Lower Everest Region", description: "Deep valleys and drainage systems on the way toward Lukla", image: "/images/ramechhap-lukla-helicopter/Ramechhap-Lukla-helicopter-highlights3.png" },
  { id: 4, title: "Lukla and the Lower Khumbu Region", description: "Lukla town, airport area, and slopes around the Khumbu gateway", image: "/images/ramechhap-lukla-helicopter/Ramechhap-Lukla-helicopter-highlights4.jpg" },
  { id: 5, title: "Himalayan Skyline", description: "Snow-covered peaks that may appear on clear days", image: "/images/ramechhap-lukla-helicopter/Ramechhap-Lukla-helicopter-highlights5.png" }
];

export default function FlightHighlights() {
  return (
    <section className="w-full bg-[#f4f6f8] py-16 md:py-24">
      {/* Title */}
      <div className="mb-10 md:mb-14 text-center px-4">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#0f172a] tracking-tight">
          Attractions Seen on the Ramechhap to Lukla Helicopter Flight
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
