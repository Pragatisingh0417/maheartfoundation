"use client";

import { motion } from "framer-motion";
import Image from "next/image"
import Link from "next/link";
;

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
    photo: "/Dr. Sese Ekolle - Cameroon Country Manager.jpeg",
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
    <div className="w-full bg-gray-50 py-16 px-4">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-extrabold text-gray-900">
          Our Management Team
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Meet the distinguished experts guiding our mission, research, and care.
        </p>
      </motion.div>

      {/* Advisors Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {advisors.map((advisor, idx) => (
          <motion.div
            key={advisor.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
          >
            <div className="relative h-60 w-full bg-white flex items-center justify-center">
  <Image
    src={advisor.photo}
    alt={advisor.name}
    fill
    className="object-contain p-4"
  />
</div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">
                {advisor.name}
              </h3>
              <p className="text-sm text-gray-500">{advisor.role}</p>
              <p className="mt-3 text-gray-700">{advisor.shortBio}</p>
              <p className="mt-2 text-gray-600 italic text-sm">
                {advisor.credentials}
              </p>

              {/* Expand / Modal Button */}
              
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-700 text-lg">
          Interested in collaborating or joining as an advisor?
        </p>
       <Link href="/contact">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="mt-4 px-8 py-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition"
  >
    Contact Us
  </motion.button>
</Link>
      </motion.div>
    </div>
  );
}
