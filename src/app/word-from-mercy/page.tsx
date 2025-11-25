"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WordFromMercy() {
  return (
    <section className="w-full bg-gradient-to-b from-red-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* ------------ LEFT SIDE (TEXT) ----------------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white p-10 rounded-3xl shadow-xl border border-red-100 relative"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-100/20 via-transparent to-red-200/10 pointer-events-none" />

          <p className="text-sm font-semibold text-red-600 tracking-wide">
            ABOUT US
          </p>

          <h2 className="mt-2 text-4xl font-extrabold text-gray-900 leading-tight">
            A Word from <span className="text-red-600">Mercy</span>
          </h2>

          <div className="space-y-4 text-gray-700 leading-relaxed mt-6 text-[15px]">
            <p>
              In 2009, at the age of 37, heart disease radically crippled me, mutilated me, 
              and transformed me into a completely dependent, almost hopeless woman…
            </p>

            <p>
              I lost my hands and legs, but not my voice. With that voice, I can mobilize others 
              and help the many people—especially women—suffering from heart disease…
            </p>

            <p>
              I invite you to join us in this fight to raise awareness and prevent heart disease…
            </p>

            <p>
              Perhaps you will become a member of the Foundation. Perhaps you will volunteer…  
              Your contribution can help make this work sustainable and expand it from 
              community to community.
            </p>

            <p>
              Thank you for your contribution and commitment to making a positive and 
              lasting impact on the lives of others.
            </p>
          </div>

          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mt-8 px-8 py-3 bg-red-600 text-white rounded-full font-semibold shadow-md hover:bg-red-700 transition-all duration-300 hover:shadow-xl"
          >
            Learn More
          </motion.button> */}
        </motion.div>

        {/* ------------ RIGHT SIDE (IMAGE) ----------------- */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl group"
        >
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            <Image
              src="/lady-image.webp"
              alt="Mercy"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Overlay Name Tag */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900">Mercy Azoh-Mbi</h3>
            <p className="text-sm text-gray-600">Founder</p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
