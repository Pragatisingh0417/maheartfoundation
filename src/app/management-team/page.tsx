"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PageWithSidebar from "../components/PageWithSidebar";

type Advisor = {
  name: string;
  role: string;
  photo: string;
  shortBio: string;
  credentials: string;
};

const advisors: Advisor[] = [
  {
    name: "Paul T. Ayah",
    role: "CEO",
    photo: "/Paul T. Ayah - CEO.jpg",
    shortBio: "",
    credentials: "",
  },
  {
    name: "Dr. Sese Ekolle",
    role: "Cameroon Country Manager",
    photo: "/Dr. Sese Ekolle.jpeg",
    shortBio: "",
    credentials: "",
  },
  {
    name: "Joy Fajong",
    role: "Administrative Assistant",
    photo: "/Joy Fajong - Administrative Coordinator.jpeg",
    shortBio: "",
    credentials: "",
  },
];

export default function ManagementTeam() {
  return (
    <section className="w-full">
      {/* HERO */}
      <section className="bg-[#b8962e] text-white py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold">
        Our Management Team

      </h1>
        <p className="mt-6 text-lg text-white leading-relaxed">
         Meet the professionals who steer the Foundation's administartion and operations
      </p>
    </section>
<PageWithSidebar>
      {/* TEAM GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {advisors.map((advisor, idx) => (
          <motion.div
            key={advisor.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="group  rounded-3xl  transition-all duration-300"
          >
            {/* IMAGE */}
            <div className="relative w-full h-[300px]  flex items-center justify-center overflow-hidden rounded-t-3xl">
              <Image
                src={advisor.photo}
                alt={advisor.name}
                fill
                className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* CONTENT */}
            <div className="px-8 py-8 text-center">
              <h3 className="text-xl font-bold text-gray-900">
                {advisor.name}
              </h3>

              <p className="mt-1 text-sm font-semibold tracking-wide text-red-600 uppercase">
                {advisor.role}
              </p>

              <div className="w-12 h-[2px] bg-yellow-500 mx-auto my-5" />

              <p className="text-gray-700 leading-relaxed">
                {advisor.shortBio}
              </p>

              <p className="mt-3 text-sm italic text-gray-500">
                {advisor.credentials}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-24 text-center"
      >
        <p className="text-lg text-gray-700">
          Interested in collaborating or joining as an advisor?
        </p>

        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-10 py-4 bg-red-600 text-white rounded-full font-semibold shadow-lg hover:bg-red-700 transition"
          >
            Contact Us
          </motion.button>
        </Link>
      </motion.div>
      </PageWithSidebar>
    </section>
    
  );
}
