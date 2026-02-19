"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { CreditCard, Smartphone, Heart } from "lucide-react";
import PageWithSidebar from "../components/PageWithSidebar";

export default function MakeADonationPage() {
  return (
    <main className="w-full">

      {/* ===========================
          HERO BANNER
      ============================ */}
     <section className="bg-[#b8962e] text-white py-20 px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold">
                       Make A Donation


                    </h1>
                    <p className="mt-6 text-lg  text-white leading-relaxed">
Your donation goes a long way in helping us save lives and reach more communities.


    </p>
                </section>
<PageWithSidebar>
      {/* ===========================
          CONTENT SECTION
      ============================ */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-700 leading-relaxed text-lg"
        >
         Your Support helps us expand heart awareness, testing, education life-saving outreach programs around the world
        </motion.p>

        

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 text-3xl font-bold text-red-600 flex items-center gap-2"
        >
          <Heart className="text-red-600" /> Give from the heart ...give for a heart!
        </motion.h3>
      </section>

      {/* ===========================
          DONATION OPTIONS
      ============================ */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* CREDIT CARD */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="bg-white shadow-xl rounded-2xl p-8 text-center border border-red-100"
        >
          <CreditCard className="mx-auto w-12 h-12 text-red-600 mb-4" />
          <h4 className="text-xl font-semibold text-gray-900">Donate With Credit Card</h4>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Secure online donation using any major credit card.
          </p>

          <Link href="/donate-with-mobile-money">
            <button className="mt-6 px-8 py-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition">
              Donate Now
            </button>
          </Link>
        </motion.div>

        {/* MOBILE MONEY */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="bg-white shadow-xl rounded-2xl p-8 text-center border border-red-100"
        >
          <Smartphone className="mx-auto w-12 h-12 text-red-600 mb-4" />
          <h4 className="text-xl font-semibold text-gray-900">Donate With Mobile Money</h4>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Fast and simple donation using your mobile money account.
          </p>

          <Link href="/donate-with-mobile-money">
            <button className="mt-6 px-8 py-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition">
              Donate Now
            </button>
          </Link>
        </motion.div>

       
      </section>
</PageWithSidebar>
      {/* ===========================
          THANK YOU
      ============================ */}
      <section className="bg-red-600 text-white text-center py-16 px-6">
        <h3 className="text-3xl font-bold">THANK YOU</h3>
        <p className="mt-3 max-w-2xl mx-auto text-gray-100 text-lg">
          Your contribution helps us save lives and continue our mission around the world.
        </p>
      </section>
    </main>
  );
}
