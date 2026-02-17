"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PageWithSidebar from "../components/PageWithSidebar";

export default function OurInspirationPage() {
  return (
    <main className="w-full text-gray-800">

      {/* HERO */}
      <section className="bg-[#b8962e] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          OUR INSPIRATION
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto opacity-90">
Dedicated to creating a world where heart health is accessible for all.

        </p>
      </section>

<PageWithSidebar >
      {/* STORY SECTION — IMAGE + SINGLE PARAGRAPH */}
      <section className="bg-white py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-10">
            OUR INSPIRATION
          </h2>

          <div className="grid gap-12 items-start md:grid-cols-[420px_1fr]">
            {/* IMAGE */}
            <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/about-image1.webp"
                alt="Mercy Azoh-Mbi Story"
                fill
                className="object-cover"
              />
            </div>

            {/* SINGLE PARAGRAPH */}
            <div className="relative bg-gray-50 border border-gray-200 rounded-3xl p-10 md:p-12">
              {/* Accent Line */}
              <div className="absolute left-0 top-0 h-full w-2 bg-red-600 rounded-l-3xl" />

              <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                Shortly after arriving in Ottawa with her two young children following her husband’s
appointment as Cameroon’s High Commissioner (Ambassador) to Canada, Mercy’s life would
take a dramatic turn. On October 23, 2009, she complained of fatigue, fever, a head ache,
blurred vision … and was rushed to hospital for what she thought was a routine ailment. Amid
the H1N1 crisis, Emergency Room staff overlooked her medical history, misdiagnosed her
condition, prescribed Tamiflu, and sent her home, only for her to be rushed again to the
emergency department two days later following a rapid deterioration of her condition. When
she was placed in a wheelchair shortly thereafter, little did she know that she had just taken her
last steps on her own two feet. She was in fact in the throes of endocarditis, a virulent infection
of the heart valves. She soon slipped into a coma and spent several weeks wavering between
life and death.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line mt-2">


                Despite the cataclysmic prognosis from the doctors and the pressure brought to bear on him,
her husband refused to grant consent for her to be taken off life support. Mercy would later
make a miraculous recovery just when her caregivers had pointed out that she had only a few
hours to live. In the weeks and months that followed, she would undergo four heart surgeries
as well as the amputation of her two arms and two legs – the only options left to save her life.
Following intensive physical and psychological therapy and the fitting of prostheses, Mercy
became a virtual prosthetic woman: two prosthetic heart valves, two prosthetic arms and two
prosthetic legs. The bouts of depression and the suicidal thoughts she battled with following
her amputations were merely the clouds that foreshadowed the sunshine. Guided by her faith,
fortitude and the support of her family and community, Mercy has found a new calling as
champion for the afflicted. Through the Mercy Azoh-Mbi Heart Foundation, she aims to spread
rays of sunshine the world over so that others do not suffer unnecessarily from easily treatable
heart conditions.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
      </PageWithSidebar>

    </main>
  );
}
