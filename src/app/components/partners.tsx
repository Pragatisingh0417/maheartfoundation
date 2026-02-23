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
    <section className="bg-[#d4af37] py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-10">

        {/* SECTION HEADER */}
        <div className="text-center mb-10">
         <div className="text-center mb-5">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600">
           Our Partners
          </h2>
 {/* Red underline */}
          <svg
            viewBox="0 0 200 20"
            className="mx-auto mt-2 w-36 h-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12 C40 -6 160 24 200 4"
              stroke="#ffffff"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              opacity="0.95"
            />
          </svg>        </div>


          <p className=" text-white max-w-2xl mx-auto">
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
              className="flex items-center justify-center w-30 h-30 p-6 rounded-2xl border border-[#d4af37]/30 bg-white hover:border-[#d4af37] hover:shadow-md transition"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={100}
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
