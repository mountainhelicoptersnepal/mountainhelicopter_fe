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
    title: "Khumbu Valley",
    description: "Epic valley flight path",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Namche Bazaar",
    description: "Famous Sherpa trading hub",
    image:
      "https://images.unsplash.com/photo-1518098268026-4e89f1a2cdae?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Tengboche Monastery",
    description: "Spiritual heart of the Khumbu",
    image:
      "https://images.unsplash.com/photo-1589802829985-817e51171b92?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Khumbu Glacier",
    description: "Ancient ice river valley",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Dingboche Village",
    description: "High altitude settlement",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Ama Dablam",
    description: "Matterhorn of the Himalayas",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Kala Patthar",
    description: "Best Everest viewpoint",
    image:
      "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Lhotse Face",
    description: "Dramatic south wall ascent",
    image:
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=800&auto=format&fit=crop",
  },
];

export default function FlightHighlights() {
  return (
    <section className="w-full bg-[#f4f6f8] py-16 md:py-24">
      {/* Title */}
      <div className="mb-10 md:mb-14 text-center px-4">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#0f172a] tracking-tight">
          Highlights Along The flight Route
        </h2>
      </div>

      {/* Image Strip */}
      <div className="flex w-full h-[400px] md:h-[500px] lg:h-[600px] group">
        {highlights.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden flex-1 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:flex-[0.5] hover:!flex-[3] cursor-pointer"
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 12vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-105"
              priority={item.id <= 2}
            />

            {/* Gradient Overlay - always visible but intensifies on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 hover:opacity-100 transition-opacity duration-500" />

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 translate-y-2 opacity-0 hover:opacity-100 hover:translate-y-0 transition-all duration-500 ease-out">
              <h3 className="text-white text-lg md:text-xl lg:text-2xl font-medium mb-1">
                {item.title}
              </h3>
              <p className="text-white/80 text-sm md:text-base font-light">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
