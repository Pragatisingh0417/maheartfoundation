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
     <section className="relative w-full h-[420px] flex items-center justify-center text-center overflow-hidden">

  {/* Background Image */}
  <Image
    src="/HEART-image.jpg"  // ← change to your image name
    alt="What we do background"
    fill
    className="object-cover"
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

  {/* Content */}
  <div className="relative z-10 px-6">
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg"
    >
      What We Do
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto drop-shadow"
    >
      Our mission is to prevent heart disease through education, early intervention, 
      and community support.
    </motion.p>
  </div>

</section>


      {/* Programs / Initiatives */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Impact Section */}
      <section className="bg-red-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold text-gray-900"
          >
            Our Impact
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            <div className="bg-white rounded-xl shadow p-6">
              <p className="text-4xl font-bold text-red-600">10,000+</p>
              <p className="mt-2 text-gray-700">People Screened</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <p className="text-4xl font-bold text-red-600">5,000+</p>
              <p className="mt-2 text-gray-700">Undergoing Treatment Support</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <p className="text-4xl font-bold text-red-600">20+</p>
              <p className="mt-2 text-gray-700">Community Outreach Campaigns</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story / Case Study */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/HEART-image.jpg"
              alt="Impact Story"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-gray-900"
            >
              Mercy's Story: A Life Transformed
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-gray-700"
            >
              In 2009, Mercy’s life changed forever when she was diagnosed…  
              (short story about her experience, struggle, recovery, and impact)
            </motion.p>
            <Link href="/word-from-mercy">
  <button className="mt-4 px-8 py-3 bg-red-600 text-white rounded-full shadow hover:bg-red-700 transition">
    Read Full Story
  </button>
</Link>
            {/* <button className="mt-6 px-8 py-3 bg-red-600 text-white rounded-full shadow hover:bg-red-700 transition">
              Read Full Story
            </button> */}
          </div>
        </div>
      </section>

      {/* Call to Action / Get Involved */}
      <section className="bg-white py-16 px-4 text-center">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-gray-900"
        >
          Want to Help Make a Change?
        </motion.h4>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 flex justify-center gap-4"
        >
          <a
            href="/donate"
            className="px-8 py-3 bg-red-600 text-white rounded-full shadow hover:bg-red-700 transition"
          >
            Donate Now
          </a>
          <a
            href="/get-involved"
            className="px-8 py-3 border-2 border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition"
          >
            Volunteer / Join Us
          </a>
        </motion.div>
      </section>
    </div>
  );
}
