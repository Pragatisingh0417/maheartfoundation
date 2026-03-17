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

          {/* <div className="mt-5 ">
            <p className="mb-3">
              To donate by Orange Money:
            </p>
            <p>
              1. Send your donation to the following number: +237-640-775-706


            </p>
            <p>
              2. To enable us acknowledge your donation when it arrives, please notify us of your donation by sending an email to:

              info@maheartfoundation.org, together with your name and phone number.
            </p>


          </div> */}

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
