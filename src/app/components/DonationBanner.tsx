"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
    image: "/banner image qq1 copy.webp",
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
    <section className="relative w-full min-h-[520px] md:h-[650px] overflow-hidden">

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
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    ))}
  </div>

  {/* CONTENT */}
  <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-12 md:gap-10 py-20 md:py-0 z-10">

    {/* LEFT TEXT */}
    <div className="text-white max-w-xl text-center md:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-xl">
        {slides[current].title}
        <br />
        {slides[current].subtitle}
      </h1>
    </div>

    {/* DONATION BOX – ONLY FIRST SLIDE */}
    {current === 0 && (
      <div className="w-full sm:max-w-md bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
        <h2 className="text-xl sm:text-2xl font-bold text-red-600 text-center">
          DONATE
        </h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-[16px] sm:text-[18px] text-red-600 text-center mt-2"
          style={{
            fontFamily: `"Bradley Hand ITC", "Bradley Hand", cursive`,
          }}
        >
          Give from the heart...Give for a heart
        </motion.h3>

        <Link href="/make-a-donation" className="block mt-4">
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
    className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 bg-[#b8962e] text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-lg"
  >
    ‹
  </button>

  <button
    onClick={nextSlide}
    className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 bg-[#b8962e] text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-lg"
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
          current === index ? "bg-[#b8962e]" : "bg-white/50"
        }`}
      />
    ))}
  </div>
</section>
  );
}
