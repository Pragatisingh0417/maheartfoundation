"use client";

import Image from "next/image";
import Link from "next/link";

const campaigns = [
  {
    title: "CSPH",
    location: "Yaounde, Cameroon",
    image: "/",
    href: "/",
  },
   {
    title: "CAMTEL",
    location: "Yaounde, Cameroon",
    image: "/",
    href: "/",
  },
  
   
];

export default function CorporateOutreachPage() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-10">

        {/* PAGE HEADER */}
        <div className="mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Community Outreach
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] mt-4 rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl">
            Our Community outreach programs focus on educating young people about
            heart health, early prevention, and life-saving skills through
            practical and interactive sessions.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {campaigns.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              {/* IMAGE */}
              <div className="relative h-[260px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#d4af37] transition">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {item.location}
                </p>

                <div className="mt-5 inline-block text-sm font-semibold text-[#d4af37]">
                  View Campaign →
                </div>
              </div>
            </Link>
          ))}
        </div>

        

      </div>
    </section>
  );
}
