"use client";

import Image from "next/image";

const partners = [
  {
    name: "Partner One",
    logo: "/LUKMEF-Logo (2).jpg",
  },
  {
    name: "Partner Two",
    logo: "/50-years-ohi-rgb-logo.svg",
  },
];

export default function Partners() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-10">

        {/* SECTION HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Partners
          </h2>

          <div className="w-24 h-1 bg-[#d4af37] mx-auto mt-4 rounded-full" />

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            We are grateful to our partners whose support and collaboration
            help us expand heart health awareness, outreach, and life-saving
            initiatives around the world.
          </p>
        </div>

        {/* PARTNER LOGOS */}
        <div className="flex flex-wrap justify-center gap-10">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-56 h-32 p-6 rounded-2xl border border-[#d4af37]/30 bg-white hover:border-[#d4af37] hover:shadow-md transition"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
