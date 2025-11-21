"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  { id: 1, name: "Review 1", text: "Lorem ipsum dolor sit amet..." },
  { id: 2, name: "Review 2", text: "Lorem ipsum dolor sit amet..." },
  { id: 3, name: "Review 3", text: "Lorem ipsum dolor sit amet..." },
  { id: 4, name: "Review 4", text: "Lorem ipsum dolor sit amet..." },
];

export default function ReviewSlider() {
  const [index, setIndex] = useState(1); // ⭐ Start at Card 2 as center

  const next = () => index < cards.length - 1 && setIndex(index + 1);
  const prev = () => index > 0 && setIndex(index - 1);

  return (
    <div className="relative w-full max-w-9xl mx-auto py-10 overflow-hidden">

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow"
      >
        <ChevronLeft size={22} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow"
      >
        <ChevronRight size={22} />
      </button>

      {/* SLIDER TRACK */}
      <div
        className="flex transition-all duration-500"
        style={{
          transform: `translateX(-${index * 70}%)`,
        }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className={`
              bg-white p-6 rounded-xl shadow-lg shrink-0
              transition-all duration-500
            `}
            style={{
              width: "60%",     // full center card
              marginRight: "40px",
            }}
          >
            <h3 className="font-semibold text-lg">{card.name}</h3>
            <p className="text-gray-600 mt-3 text-sm">{card.text}</p>
          </div>
        ))}
      </div>

      {/* SLICE MASKS */}
      <div className="pointer-events-none absolute inset-0 flex justify-between">
        <div className="w-[15%] bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        <div className="w-[15%] bg-gradient-to-l from-white via-white/80 to-transparent"></div>
      </div>
    </div>
  );
}
