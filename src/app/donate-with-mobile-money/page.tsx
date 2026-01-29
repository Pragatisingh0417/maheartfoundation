"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Smartphone } from "lucide-react";

export default function MobileMoneyDonationPage() {
  return (
    <main className="w-full">

      {/* Hero / Banner */}
      <section className="relative w-full h-[380px] flex items-center justify-center overflow-hidden">
        <Image
          src="/CameroonOffice.png"  // Add a relevant banner image in /public
          alt="Donate via Mobile Money"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Donate with Mobile Money
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Quick, secure donations using mobile money platforms.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-700 leading-relaxed text-lg"
        >
          Your donation will go a long way in helping us achieve our mission.  
          We accept mobile money donations to make it easy for people in many regions  
          to contribute. After you make your donation, please share your transaction  
          reference with us so we can issue a tax-receipt or acknowledgment.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-gray-700 leading-relaxed text-lg"
        >
          Supported mobile money platforms: e.g. M-Pesa, Airtel Money, etc.  
          (You can tailor this to exactly which ones you support.)
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex items-center gap-3 text-red-600 text-2xl font-bold"
        >
          <Smartphone className="w-8 h-8" />
          <span>How to Donate via Mobile Money</span>
        </motion.div>

        {/* Instructions / Details */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 list-disc list-inside space-y-3 text-gray-700"
        >
          <li>Open your mobile money app or dial the USSD menu.</li>
          <li>Select “Send Money” or “Pay Bill” (depending on platform).</li>
          <li>
            Enter the following details:
            <ul className="list-none ml-5 space-y-1 mt-1">
              <li><strong>Pay Bill / Merchant Number:</strong> <em>[YOUR-NUMBER-HERE]</em></li>
              <li><strong>Account Name / Reference:</strong> MaHeart Foundation</li>
              <li><strong>Amount:</strong> The donation amount you wish to send</li>
            </ul>
          </li>
          <li>Confirm the transaction and note your reference / transaction ID.</li>
          <li>You can email or WhatsApp us the reference ID so that we can send you a tax receipt.</li>
        </motion.ul>
      </section>

      {/* CTA to Copy Details or Send */}
      <section className="bg-red-50 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-800 text-lg"
          >
            If you prefer, we can also send you a QR code or payment details directly.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link href="/contact">
              <button className="px-6 py-3 bg-red-600 text-white rounded-full shadow hover:bg-red-700 transition">
                Contact Us for Details
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-6 py-3 border-2 border-red-600 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition">
                Other Donation Methods
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Thank You */}
      <section className="py-16 px-6 text-center">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl font-bold text-gray-900"
        >
          Thank You for Your Generosity
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-gray-700 max-w-2xl mx-auto leading-relaxed"
        >
          Your support via mobile money helps us save lives and extend our reach.  
          We deeply appreciate your kindness and commitment.
        </motion.p>
      </section>

    </main>
  );
}
