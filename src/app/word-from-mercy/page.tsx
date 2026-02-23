"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PageWithSidebar from "../components/PageWithSidebar";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600"],
});
export default function WordFromMercy() {
  return (
    <main className="w-full">

      {/* HERO STRIP */}
      <section className="bg-[#b8962e] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          A Word from Mercy
        </h1>
      </section>

      <PageWithSidebar>


        <section className="w-full bg-gradient-to-b from-red-50 to-white p-10">

          {/* ================= HEADING + INTRO ================= */}
          <div className="mb-10 max-w-5xl">


            <p className=" text-gray-700 leading-relaxed">
              I wish you a warm welcome to the website of the Mercy Azoh-Mbi Heart Foundation.
            </p>
            <p className="mt-6  text-gray-700 leading-relaxed">
              In 2009, heart disease radically maimed, mutilated and morphed me into a helpless,
              almost hopeless woman. I was barely 37 years old. I deeply mourned the loss of my
              four limbs for years, but gradually began to appreciate the ultimate gift of life itself.
            </p>

          </div>


          {/* ================= CONTENT + IMAGE ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

            {/* TEXT BLOCK */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-3 text-gray-700 leading-relaxed text-[16px]"
            >


              <p>

                Upon realizing that heart disease is a major global public health challenge, especially in developing countries, and that far too many people simply die without a battle for survival, I reckoned that my life could be a galvanizing tale and testimony to this daunting health challenge.
              </p>


              <p>
                Without hands and legs, I can still use my voice to mobilize others to extend a
                helping hand to the many people, young and old, suffering from heart disease
                around the world, often without proper knowledge about the disease,
                treatment opportunities and options available to them, and the means to cure themselves.
                This is the reason behind the Mercy Azoh-Mbi Heart Foundation.
              </p>
              <p>
                I invite you to join us in the effort to educate and prevent heart disease
                and in the process, positively touch and transform lives.
                We are comforted that we may become comforters.
                Perhaps you’ll become a member of the Foundation.

              </p>

            </motion.div>


            {/* IMAGE BLOCK */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/Mercy Azoh-Mbi2.jpg"
                alt="Mercy"
                fill
                className="object-cover"
              />

              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className=" text-[20px] text-red-600 flex items-center"
                  style={{
                    fontFamily: `"Bradley Hand ITC", "Bradley Hand", cursive`,
                  }}
                >
                  MERCY AZOH-MBI <br />
                  FOUNDER
                </motion.h3>
              </div>
            </motion.div>

          </div>


          {/* ================= REMAINING CONTENT ================= */}
          <div className="mt-5 max-w-4xl space-y-6 text-gray-700 leading-relaxed text-[16px]">



            <p>
              Perhaps you’ll provide suggestions to help us better achieve our mission.
              Perhaps you’ll volunteer to provide help in our administrative services or events.
              Perhaps you’ll volunteer to do front-line work on the ground in a developing country.
              Perhaps you can help financially.
              Your gift can help this work become sustainable and even expand from community to community,
              and perhaps from country to country around the world so that people do not die needlessly from heart disease.
            </p>

            <p>
              Thank you for your contribution and commitment toward making a positive
              and lasting impact on the lives of many.
            </p>

          </div>

        </section>



      </PageWithSidebar>

    </main>
  );
}
