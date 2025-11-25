"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { CreditCard, Smartphone, Heart } from "lucide-react";

export default function MakeADonationPage() {
  return (
    <main className="w-full">

      {/* ===========================
          HERO BANNER
      ============================ */}
      <section className="relative w-full h-[420px] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/Ma-banner.jpeg" 
          alt="Donation Banner"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Make A Donation
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto drop-shadow">
            Your donation goes a long way in helping us save lives and reach more communities.
          </p>
        </motion.div>
      </section>

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
          Your donation will go a long way in helping us achieve our mission. 
          You can donate online or send a check to the Foundation at the address 
          indicated in this brochure. We are a duly registered Canadian charity; 
          you will receive a tax receipt for your donation.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-gray-700 leading-relaxed text-lg"
        >
          You can choose to donate using PayPal, Credit Card, or Mobile Money.
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 text-3xl font-bold text-red-600 flex items-center gap-2"
        >
          <Heart className="text-red-600" /> Donate Now
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
