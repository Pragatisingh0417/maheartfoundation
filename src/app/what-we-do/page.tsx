"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


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

export default function WhatWeDoPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
    {/* HERO */}
      <section className="bg-[#b8962e] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
What We Do
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto opacity-90">
Our mission is to prevent heart disease through education, early intervention, and community support.



        </p>
      </section>


      {/* Programs / Initiatives */}
      <section className="py-16 px-4">
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
  );
}
