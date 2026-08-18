"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { CreditCard, Smartphone, Heart, FileText  } from "lucide-react";
import PageWithSidebar from "../components/PageWithSidebar";
import T from "../components/Translate";

export default function MakeADonationPage() {
  return (
    <main className="w-full">

      {/* ===========================
          HERO BANNER
      ============================ */}
      <section className="bg-[#b8962e] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          <T>Make A Donation</T>
        </h1>
        <p className="mt-6 text-lg text-white leading-relaxed">
          <T>Your support helps us expand heart health awareness, testing, and life-saving outreach programs around the world.</T>
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
            <T>Give from the heart... Give for a heart!</T>
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
            <h4 className="text-xl font-semibold text-gray-900"><T>Donate by Credit Card</T></h4>
            <p className="mt-3 text-gray-700 leading-relaxed">
              <T>Secure online donation using any major credit card.</T>
            </p>

            <Link href="https://donate.stripe.com/00w8wPcVN3j90r96pndAk00" target="blank">
              <button className="mt-6 px-8 py-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition">
                <T>Donate Now</T>
              </button>
            </Link>
          </motion.div>

          {/* MOBILE MONEY */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="bg-white shadow-xl rounded-2xl p-8 text-center border border-red-100"
          >
            <Smartphone className="mx-auto w-12 h-12 text-red-600 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900"><T>Donate with Mobile Money</T></h4>
            <p className="mt-3 text-gray-700 leading-relaxed">
              <T>Fast and simple donation using your mobile money account.</T>
            </p>

            <Link href="/donate-with-mobile-money">
              <button className="mt-6 px-8 py-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition">
                <T>Donate Now</T>
              </button>
            </Link>
          </motion.div>

          {/* MAILING CHEQUE */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="bg-white shadow-xl rounded-2xl p-8 text-center border border-red-100"
          >
            <FileText className="mx-auto w-12 h-12 text-red-600 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900"><T>Donate by Mailing a Cheque</T></h4>
            <p className="mt-3 text-gray-700 leading-relaxed">
              <T>Donate conveniently by mailing a cheque to one of our hearts</T>
            </p>

            <Link href="/donate-by-mailing-cheque">
              <button className="mt-6 px-8 py-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition">
                <T>Donate Now</T>
              </button>
            </Link>
          </motion.div>

          {/* INTERAC */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="bg-white shadow-xl rounded-2xl p-8 text-center border border-red-100"
          >
            <FileText className="mx-auto w-12 h-12 text-red-600 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900"><T>Donate through Interac</T></h4>
            <p className="mt-3 text-gray-700 leading-relaxed">
              <T>You can Donate by sending an Interac transfer to:</T>{" "}
              <span className="text-red-600 font-semibold">donate@maheartfoundation.org</span>.{" "}
              <T>Your donation will be deposited directly into our account; no need for a secret question/answer.</T>
            </p>
          </motion.div>

          {/* WIRE TRANSFER */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="bg-white shadow-xl rounded-2xl p-8 text-center border border-red-100"
          >
            <FileText className="mx-auto w-12 h-12 text-red-600 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900"><T>Donate by wire transfer</T></h4>
            <p className="mt-3 text-gray-700 leading-relaxed">
              <T>If you prefer to Donate by wire transfer, email us at</T>{" "}
              <span className="text-red-600 font-semibold">payah@maheartfoundation.org</span>{" "}
              <T>for our wire transfer credentials.</T>
            </p>
          </motion.div>

        </section>
      </PageWithSidebar>
    </main>
  );
}

