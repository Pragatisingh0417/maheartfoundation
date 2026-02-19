"use client";

import { motion } from "framer-motion";
import Image from "next/image"
import Link from "next/link";
import PageWithSidebar from "../components/PageWithSidebar";
;

type Advisor = {
  name: string;
  photo: string;
  shortBio: string;
  credentials: string;
  fullBio: string;
};

const advisors: Advisor[] = [
  {
    name: "Dr. Nche Zama",
    photo: "/Dr. Nche Zama.webp",
    shortBio: "",
    credentials: "",
    fullBio:
      "Dr. Nche Zama is a renowned cardiothoracic surgeon who completed training at the Cleveland Clinic and Harvard University. He holds a PhD in chemistry, a Harvard master’s degree in management, and a medical degree. He is recognized as one of the top cardiothoracic surgeons in the US and is often sought out for his expertise.",
  },
  {
    name: "Dr. Thierry Mesana",
    photo: "/Dr. Thierry Mesana.jpg",
    shortBio: "",
    credentials: "",
    fullBio:
      "Dr. Thierry Mesana is the President and Chief Executive Officer of the University of Ottawa Heart Institute and Professor of Cardiac Surgery at the University of Ottawa. He is recognized as one of the leading heart valve surgeons in the world. He received his medical degree at the Université de la Méditerranée, Marseille, France, where he trained in thoracic and cardiovascular surgery, and received his PhD in biophysics and biomechanics at the same university.",
  },
  
  {
    name: "Dr. Gopichand Mannam",
    photo: "/Dr. Gopichand Mannam.webp",
    shortBio: "",
    credentials: "",
    fullBio:
      "Dr. Gopichand Mannam is a consultant Cardio Thoracic Surgeon based in India, with expertise in the field of Cardio-Thoracic surgery, having performed over 25000 cardiac surgeries. He is credited with the nascence of beating heart coronary bypass surgery and undersized donor heart transplantation in India. He pioneered minimally invasive atrial septal defect closure and mitral valve replacement in India. Dr Mannam has provided extended cardiac surgery services to children in developing countries such as Ethiopia and Libya. He was named the “Doctor of The Year” in India 2005, and TV5 “Business Leader of The Year” in 2013.",
  },
  {
    name: "Dr. Mpoki M. Ulisubisya",
    photo: "/Dr. Mpoki M. Ulisubisya.jpg",
    shortBio: "",
    credentials: "",
    fullBio:
      "A former Cardiac Anaesthesiologist at the Jakaya Kikwete Cardiac Institute (Muhimbili National Hospital) in Dar Es Salaam and one of the first doctors to be trained as a Cardiothoracic Anaesthesiologist in Tanzania, Dr. Mpoki serves as the High Commissioner of Tanzania to Canada",
  },

  {
    name: "Dr. Jay M. Nfonoyim",
    photo: "/Dr. Jay M. Nfonoyim.jpg",
    shortBio: "",
    credentials: "",
    fullBio:
      "Dr. Jay Nfonoyim is Program Director, Chief of Critical Care and Clinical Medicine at the Richmond University Medical Center, and Clinical Assistant Professor of Medicine at New York Medical College. He also served as director of the Surgical Trauma ICU at Elmhurst Hospital Center and Assistant Professor of Surgery at Mt. Sinai Medical School. He has close to four decades of experience in the field of medicine. His areas of expertise are Saddle Pulmonary Embolism, Emphysema, and Angioplasty.",
  },
];

export default function MedicalAdvisoryTeam() {
  return (
    <div className="w-full">
      {/* Hero Section */}
       <section className="bg-[#b8962e] text-white py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold">
        Medical Advisory Board


      </h1>
        <p className="mt-6 text-lg text-white leading-relaxed">
Meet the experts who serve as the Foundation's clinical compass, to ensure that every program, message, and strategic decision is grounded in credible, up-to-date cardiovascular science.        </p>
    </section>
<PageWithSidebar>
      {/* Advisors Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {advisors.map((advisor, idx) => (
          <motion.div
            key={advisor.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className=" rounded-2xl  overflow-hidden"
          >
            <div className="relative h-60 w-full flex items-center justify-center">
  <Image
    src={advisor.photo}
    alt={advisor.name}
    fill
    className="object-contain p-4"
  />
</div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800">
                {advisor.name}
              </h3>
              <p className="mt-3 text-gray-700">{advisor.shortBio}</p>
              <p className="mt-2 text-gray-600 italic text-sm">
                {advisor.credentials}
              </p>

              {/* Expand / Modal Button */}
              <details className="mt-4 group">
                <summary className="cursor-pointer text-red-600 font-medium">
                  Read Bio
                </summary>
                <p className="mt-2 text-gray-700">{advisor.fullBio}</p>
              </details>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-700 text-lg">
          Interested in collaborating or joining as an advisor?
        </p>
       <Link href="/contact">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="mt-4 px-8 py-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition"
  >
    Contact Us
  </motion.button>
</Link>
      </motion.div>

      </PageWithSidebar>
    </div>
  );
}
