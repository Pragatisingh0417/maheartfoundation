"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Smartphone } from "lucide-react";
import PageWithSidebar from "../components/PageWithSidebar";

export default function CreditPage() {
  return (
    <main className="w-full">

      {/* Hero / Banner */}
      <section className="bg-[#b8962e] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Donate with Credit Card
        </h1>
        {/* <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto opacity-90">
          Quick, secure donations using mobile money.

        </p> */}
      </section>
      <PageWithSidebar>
        {/* Content */}
        <section className="max-w-4xl mx-auto px-6 py-10">


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className=" flex items-center gap-3 text-red-600 text-2xl font-bold"
          >
            <Smartphone className="w-8 h-8" />
            <span>How to Donate Via Credit Card</span>
          </motion.div>



<div className="mt-8 bg-white shadow-xl rounded-2xl p-6 md:p-8">
  <h3 className="text-xl font-bold text-gray-800 mb-6">
    Donation Details
  </h3>

  <form className="space-y-5">
    
    {/* Amount */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Donation Amount
      </label>
      <input
        type="number"
        placeholder="Enter amount"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
    </div>

    {/* Name */}
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          First Name
        </label>
        <input
          type="text"
          placeholder="First Name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Last Name
        </label>
        <input
          type="text"
          placeholder="Last Name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
        />
      </div>
    </div>

    {/* Email */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Email Address
      </label>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
      />
    </div>

    {/* Phone */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Phone Number
      </label>
      <input
        type="text"
        placeholder="Enter phone number"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
      />
    </div>

    {/* Card Details */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Card Number
      </label>
      <input
        type="text"
        placeholder="1234 5678 9012 3456"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
      />
    </div>

    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Expiry Date
        </label>
        <input
          type="text"
          placeholder="MM/YY"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          CVV
        </label>
        <input
          type="password"
          placeholder="***"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
        />
      </div>
    </div>

    {/* Message */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Message (Optional)
      </label>
      <textarea
        rows={3}
        placeholder="Write a message..."
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500"
      />
    </div>

    {/* Button */}
    <button
      type="submit"
      className="w-full bg-red-600 text-white py-3 rounded-full font-semibold hover:bg-red-700 transition"
    >
      Donate Now
    </button>
  </form>
</div>
        </section>



        {/* Thank You */}
        <section className="py-5 px-20">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold text-red-600"
          >
            Thank You
          </motion.h3>

        </section>
      </PageWithSidebar>
    </main>
  );
}
