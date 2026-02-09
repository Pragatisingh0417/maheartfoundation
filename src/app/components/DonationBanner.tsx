"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/heart-banner-image.png",
    title: "Stronger Hearts,",
    subtitle: "Stronger Futures",
  },
  {
    image: "/images/Lady demonstrating CPR.jpeg",
    title: "",
    subtitle: "",
  },
  {
    image: "/images/World Heart Day Image.jpg",
    title: "",
    subtitle: "",
  },
  {
    image: "/banner image qq copy 1.webp",
    title: "",
    subtitle: "",
  },
];

export default function DonationBanner() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-[650px] overflow-hidden">
      {/* SLIDER */}
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative min-w-full h-full">
            <Image
              src={slide.image}
              alt={`slide-${index}`}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl h-full mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10 pt-16 z-10">
        {/* LEFT TEXT */}
        <div className="text-white max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
            {slides[current].title}
            <br />
            {slides[current].subtitle}
          </h1>

          {/* Gold underline */}
          {/* <svg viewBox="0 0 200 20" className="mt-4 w-52 h-8">
            <path
              d="M0 12 C40 -6 160 24 200 4"
              stroke="#d4af37"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
            />
          </svg> */}
        </div>

        {/* DONATION BOX – ONLY FIRST SLIDE */}
        {current === 0 && (
          <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900 text-center">
              MAKE A DONATION
            </h2>

            <p className="mt-4 text-gray-600 text-center">
              Your donation will go a long way in helping us achieve our mission.
            </p>

            <Link href="/donate" className="block mt-6">
              <button className="w-full px-6 py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition">
                DONATE NOW
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* ARROWS */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gold text-black w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-[#b8962e]"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gold text-black w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-[#b8962e]"
      >
        ›
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-gold" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
