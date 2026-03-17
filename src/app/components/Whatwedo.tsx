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
      "Conduct free clinics to screen for heart disease and test individuals identified as high risk.",
    imgSrc: "/MA-1.png",
  },
  {
    name: "Treatment & Counseling",
    description:
      "Establish and coordinate a network of cardiologists and cardiac institutes across the  world willing to sponsor or provide free heart-related health services to  underprivileged populations.",
    imgSrc: "/MA-2.png",
  },
  {
    name: "Prevention, Education & Outreach",
    description:
      "Conduct outreach activities to educate the public about heart disease and its prevention.",
    imgSrc: "/MA-3.png",
  },
  {
    name: "Heart Health Centres & Clinics",
    description:
      "Promote community-based support centres for heart health in order foster awareness and action to prevent cardiovascular diseases.",
    imgSrc: "/MA-4.png",
  },
  {
    name: "Capacity Building",
    description:
      "Strengthen the capacity of medical institutions and practitioners in developing countries to  diagnosis and treat of heart conditions.",
    imgSrc: "/MA-5.png",
  },
  {
    name: "Research Funding",
    description:
      "Provide support to medical students and researchers in developing countries  in order to boost research in cardiac care.",
    imgSrc: "/MA-6.png",
  },
];

  return (
    <section className="relative w-full  p-10  overflow-hidden  bg-[#d4af37]">

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
            stroke="#ffffff"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            opacity="0.95"
          />
        </svg>
        {/* Grid */}
      <section className=" px-4 py-10">
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