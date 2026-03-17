"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { CreditCard, Smartphone, Heart, FileText  } from "lucide-react";
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
Your support helps us expand heart health awareness, <br />
testing, and life-saving outreach programs around the world.

        </p>
      </section>
      <PageWithSidebar>
        {/* ===========================
          CONTENT SECTION
      ============================ */}
        <section className="max-w-7xl mx-auto px-6 py-16">
  <motion.h3
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.3 }}
    className="text-3xl text-red-600 flex items-center justify-center gap-2 text-center"
    style={{
      fontFamily: `"Bradley Hand ITC", "Bradley Hand", cursive`,
    }}
  >
    <Heart className="text-red-600" />
    Give from the heart... Give for a heart!
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
            <h4 className="text-xl font-semibold text-gray-900">Donate by Credit Card</h4>
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
            <h4 className="text-xl font-semibold text-gray-900">Donate with Mobile Money</h4>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Fast and simple donation using your mobile money account.
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
            <FileText  className="mx-auto w-12 h-12 text-red-600 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900">Donate by Mailing a Cheque</h4>
            <p className="mt-3 text-gray-700 leading-relaxed">
Donate conveniently by mailing a cheque to one of our hearts            </p>

            <Link href="/donate-by-mailing-cheque">
              <button className="mt-6 px-8 py-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition">
                Donate Now
              </button>
            </Link>
          </motion.div>


        </section>
      </PageWithSidebar>
     
     
    </main>
  );
}
