"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


export default function WhatWeDo() {
 type Program = {
  name: string;
  description: string;
  imgSrc: string;
};

const programs: Program[] = [
  {
    name: "Screening & Testing",
    description:
      "We run heart-disease awareness campaigns to educate communities, especially women, on early prevention and treatment.",
    imgSrc: "/MA-1.png",
  },
  {
    name: "Treatment & Counseling",
    description:
      "Providing free or subsidized heart disease screening camps, and supporting treatment for at-risk individuals.",
    imgSrc: "/MA-2.png",
  },
  {
    name: "Prevention, Education & Outreach",
    description:
      "Supporting research into heart disease and advocating for policy changes to improve healthcare infrastructure.",
    imgSrc: "/MA-3.png",
  },
  {
    name: "Heart Health Centres & Clinics",
    description:
      "Partnering with local organizations to reach rural and underserved areas, providing resources and training.",
    imgSrc: "/MA-4.png",
  },
  {
    name: "Capacity Building",
    description:
      "Partnering with local organizations to reach rural and underserved areas, providing resources and training.",
    imgSrc: "/MA-5.png",
  },
  {
    name: "Research Funding",
    description:
      "Partnering with local organizations to reach rural and underserved areas, providing resources and training.",
    imgSrc: "/MA-6.png",
  },
];

  return (
    <section className="relative w-full  p-10  overflow-hidden ">

      <div className="relative max-w-6xl mx-auto text-center ">
        <h2 className="text-red-600 text-3xl font-bold tracking-wider mb-3 mt-10">What We Do</h2>

        {/* Red underline */}
        <svg
          viewBox="0 0 200 20"
          className="mx-auto mt-2 w-36 h-6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 12 C40 -6 160 24 200 4"
            stroke="#d4af37"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            opacity="0.95"
          />
        </svg>
        {/* Grid */}
      <section className=" px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 mb-4 relative">
                  <Image
                    src={program.imgSrc}
                    alt={program.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{program.name}</h3>
                <p className="mt-3 text-gray-600 text-sm">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </section>





      </div>

    </section>
  );
}