"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import PageWithSidebar from "../components/PageWithSidebar";

export default function FundraisePage() {
  return (
    <main className="w-full">

      {/* ===========================
          HERO BANNER
      ============================ */}
      <section className="bg-[#b8962e] text-white py-20 px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold">
                       Fundraise

                    </h1>
                    <p className="mt-6 text-lg  text-white leading-relaxed">
                       Help us expand our mission and save more lives through your support.

    </p>
                </section>
<PageWithSidebar>      {/* ===========================
          WHY FUNDRAISE
      ============================ */}
      <section className="max-w-5xl mx-auto px-6 ">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-red-600"
        >
          Why Fundraise?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-gray-700 leading-relaxed"
        >
          We raise funds because the seed money donated by Mercy and her family
          can only sustain the activities of the Foundation for a limited time.
          We can only succeed in achieving our mission by raising funds each year
          to make this project sustainable. This means offering our services in
          more parts of the world and saving more lives.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 text-gray-700 leading-relaxed"
        >
          Our fundraising department is available to provide support and advice.
        </motion.p>
      </section>

     

      {/* ===========================
          FUNDRAISING OPTIONS
      ============================ */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">

        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white shadow-xl rounded-2xl p-6 border border-red-400"
        >
          <h4 className="text-xl font-semibold text-red-600">
            Host a Fundraising Event
          </h4>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Invite friends at home or in a hall. You can host a private dinner,
            fashion show, fancy dress party—your imagination is the only limit.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white shadow-xl rounded-2xl p-6 border border-red-400"
        >
          <h4 className="text-xl font-semibold text-red-600">
            Participate in a Sporting Event
          </h4>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Join marathons, bike rides, or similar events. Raise funds by having
            friends and relatives sponsor your efforts.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white shadow-xl rounded-2xl p-6 border border-red-400"
        >
          <h4 className="text-xl font-semibold text-red-600">
            Raise Funds at Work or Neighborhood
          </h4>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Spread the word at your workplace or around your community. We’ll
            provide authorization letters and printed materials.
          </p>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white shadow-xl rounded-2xl p-6 border border-red-400"
        >
          <h4 className="text-xl font-semibold text-red-600">
            Connect Us with Corporate Donors
          </h4>
          <p className="mt-3 text-gray-700 leading-relaxed">
            If your company or partner organization supports social causes, you
            can connect us so we can submit a proposal.
          </p>
        </motion.div>
      </section>

      {/* ===========================
          DONATION CTA
      ============================ */}
      <section className="bg-red-600 text-white py-16 text-center px-6">
        <h3 className="text-3xl font-bold">Make A Donation</h3>
        <p className="mt-3 max-w-2xl mx-auto text-gray-100">
          Your contribution makes our work sustainable and helps us reach
          communities across the world.
        </p>

        <Link href="/make-a-donation">
          <button className="mt-6 px-8 py-3 bg-white text-red-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition">
            Donate Now
          </button>
        </Link>
      </section>

       {/* ===========================
          TIPS FOR SUCCESS
      ============================ */}
      <section className="bg-red-50 py-10 px-6 mt-10">
        <div className="max-w-5xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl font-bold text-gray-900"
          >
            Tips for a Successful Fundraising Event
          </motion.h3>

          <ul className="mt-6 space-y-3 text-gray-700 leading-relaxed">
            {[
              "Plan in advance. Have firm dates for your events or activities.",
              "Have a game plan: what you intend to do and how.",
              "Contact us early with your ideas so we can prepare support materials.",
              "Get help from family and friends. Teamwork gets results.",
              "Plan. Plan. Then execute."
            ].map((tip, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-start gap-2"
              >
                <span className="text-red-600 font-bold mt-1">•</span>
                {tip}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
      </PageWithSidebar>

    </main>
  );
}
