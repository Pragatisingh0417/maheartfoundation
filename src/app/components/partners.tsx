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
  {
    name: "Partner Three",
    logo: "/partners/partner-3.png",
  },
  {
    name: "Partner Four",
    logo: "/partners/partner-4.png",
  },
  {
    name: "Partner Five",
    logo: "/partners/partner-5.png",
  },
  {
    name: "Partner Six",
    logo: "/partners/partner-6.png",
  },
];

export default function Partners() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">

        {/* SECTION HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Partners
          </h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mt-4 rounded-full"></div>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            We are grateful to our partners whose support and collaboration
            help us expand heart health awareness, outreach, and life-saving
            initiatives around the world.
          </p>
        </div>

        {/* PARTNER LOGOS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 rounded-xl border border-[#d4af37]/30 hover:border-[#d4af37] hover:shadow-md transition bg-white"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={140}
                height={80}
                className="object-contain   transition"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
