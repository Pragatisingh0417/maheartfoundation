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
    <section className="bg-[#b8962e] text-white py-30 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold">
Vision, Mission, Values      </h1>
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
          <section className="">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-red-600">Our Vision</h2>

              <p className="mt-8 text-[17px] text-gray-700 leading-relaxed border border-black rounded-2xl p-10">
              Contribute in the global effort to promote healthy hearts and reduce the high rate of mortality from heart diseases.
              </p>
            </motion.div>

            
          </section>

          {/* ======================================
              MISSION SECTION
          ====================================== */}
          <section className="bg-gradient-to-b from-gray-50 to-white relative rounded-2xl mt-20">


            <div className="">
              <h2 className="text-4xl font-bold text-center text-red-600">
                Our Mission
              </h2>

              <div className="grid md:grid-cols-3 gap-10 mt-16  ">
                {missionList.map((text, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    
                    <MissionCard text={text}  />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ======================================
              VALUES SECTION
          ====================================== */}
          <section className="py-20">
            <h2 className="text-4xl font-bold text-center text-red-600">Our Values</h2>

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
    <div className="bg-white p-5 rounded-2xl shadow-md border hover:shadow-lg transition duration-300">
      <p className="text-gray-700 text-[16px] leading-relaxed ">{text}</p>
    </div>
  );
}

/* -----------------------------------------
   VALUE CARD
------------------------------------------*/
function ValueCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white p-10 rounded-2xl shadow-lg border text-center">
      <p className="text-gray-600 leading-relaxed h-[50px] text-[15px]">{text}</p>
    </div>
  );
}



/* -----------------------------------------
   DATA
------------------------------------------*/
const missionList = [
  "Conduct outreach activities to educate the public about heart disease, its prevention and treatment, with emphasis on women and the underprivileged.",
  "Strengthen the capacity of medical institutions and practitioners to prevent, diagnose and cure heart conditions.",
  "Promote community based support centres for heart health to foster awareness and action in preventing heart disease.",
  "Establish and coordinate a network of cardiologists and cardiac institutes across the world that are willing to sponsor or provide free  heart related health services to underprivileged populations.",
  "Support medical students and researchers in developing countries in order to foster research in cardiac care.",
];

const values = [
  {
    title: "",
    text: " Accountability and transparency in managing the  affairs of the Foundation.",
  },
  {
    title: "",
    text: " Consummate care and compassion in service delivery.",
  },
  {
    title: "",
    text: " Credibility and trust in dealing with patients, partners and other stakeholders.",
  },
];
