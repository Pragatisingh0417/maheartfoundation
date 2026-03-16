"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PageWithSidebar from "../components/PageWithSidebar";


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

      <PageWithSidebar>
        {/* Programs / Initiatives */}
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


      </PageWithSidebar>

    </div>
  );
}
