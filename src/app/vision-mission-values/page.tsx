"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionSidebar from "../components/SectionSidebar";


export default function VissionPage() {
 return (
  <main className="w-full text-gray-800">

    {/* ======================================
        HERO SECTION (UNCHANGED)
    ====================================== */}
    <section className="bg-[#b8962e] text-red-600 py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold">
        VISSION, MISSION AND VALUES
      </h1>
    </section>

    {/* ======================================
        SIDEBAR + CONTENT WRAPPER
    ====================================== */}
    <div className="max-w-8xl mx-auto px-6 md:px-20 py-16">
      <div className="flex gap-16">

        {/* LEFT SIDEBAR (AUTO DETECTS ABOUT SECTION) */}
        <SectionSidebar />

        {/* RIGHT MAIN CONTENT */}
        <div className="flex-1">

          {/* ======================================
              OUR VISION
          ====================================== */}
          <section className="py-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-red-600">Our Vision</h2>

              <p className="mt-8 text-lg text-gray-700 leading-relaxed">
                We aim to reduce global deaths from cardiovascular diseases through
                accessibility, awareness, and medical support.
              </p>
            </motion.div>

            <Link href="/heart-health">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-10 px-8 py-3 bg-red-600 hover:bg-red-700 transition text-white rounded-full font-semibold flex items-center gap-2 mx-auto shadow-lg"
              >
                More On Heart Disease <ChevronRight size={18} />
              </motion.button>
            </Link>
          </section>

          {/* ======================================
              MISSION SECTION
          ====================================== */}
          <section className="bg-gradient-to-b from-gray-50 to-white py-24 relative rounded-2xl mt-20">

            <div className="absolute inset-0 bg-[url('/pattern-light.png')] opacity-5"></div>

            <div className="relative z-10 px-6">
              <h2 className="text-4xl font-bold text-center text-red-600">
                Our Mission
              </h2>

              <div className="grid md:grid-cols-2 gap-10 mt-16">
                {missionList.map((text, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <MissionCard text={text} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ======================================
              VALUES SECTION
          ====================================== */}
          <section className="py-24">
            <h2 className="text-4xl font-bold text-center">Our Core Values</h2>

            <div className="grid sm:grid-cols-3 gap-10 mt-16">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <ValueCard title={v.title} text={v.text} />
                </motion.div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>

  </main>
);

}

/* -----------------------------------------
   MISSION CARD
------------------------------------------*/
function MissionCard({ text }: { text: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-lg transition duration-300">
      <p className="text-gray-700 text-lg leading-relaxed">{text}</p>
    </div>
  );
}

/* -----------------------------------------
   VALUE CARD
------------------------------------------*/
function ValueCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white p-10 rounded-2xl shadow-lg border text-center">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
}

/* -----------------------------------------
   STORY SECTION
------------------------------------------*/
function StorySection({
  title,
  text,
  image,
  reverse,
}: {
  title: string;
  text: string;
  image: string;
  reverse: boolean;
}) {
  return (
    <section className="py-24 bg-red-50/40">
      <div
        className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-14 px-6 items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-700">{text}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: reverse ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src={image}
            width={520}
            height={520}
            alt="Mercy Founder"
            className="rounded-2xl shadow-2xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* -----------------------------------------
   DATA
------------------------------------------*/
const missionList = [
  "Conduct outreach activities to raise awareness about heart disease.",
  "Promote community cardiovascular health support centers.",
  "Support medical students & researchers in cardiac care.",
  "Strengthen medical institutions’ diagnostic & treatment capacities.",
  "Coordinate global cardiologist networks for free care.",
];

const values = [
  {
    title: "Accountability & Transparency",
    text: "Responsible management of the Foundation’s affairs.",
  },
  {
    title: "Care & Compassion",
    text: "Empathetic and human-driven cardiovascular services.",
  },
  {
    title: "Credibility & Trust",
    text: "Reliable partnerships with patients and stakeholders.",
  },
];
