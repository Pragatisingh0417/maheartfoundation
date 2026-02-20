"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import VolunteerForm from "../components/VolunteerForm";
import PageWithSidebar from "../components/PageWithSidebar";

export default function VolunteerPage() {
  return (
    <main className="w-full">

      {/* ============================
          BANNER SECTION
      ============================= */}
       <section className="bg-[#b8962e] text-white py-20 px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold">
                     Volunteer

                    </h1>
                  
                </section>
<PageWithSidebar>
      {/* ============================
          INTRO SECTION (2 COLUMN)
      ============================= */}
      <section className="bg-white max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-black mb-10">
              Volunteering is one of the most effective ways we can help others.
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              A little of your time can make a world of difference in the lives of others.
              We would like to thank you for considering the opportunity to volunteer with
              <span className="font-semibold"> The Mercy Azoh-Mbi Heart Foundation.</span>
            </p>

            <h2 className="text-xl mt-4 font-bold text-black mb-5 mt-5">
          3 WAYS TO VOLUNTEER
        </h2>
          <p className="text-gray-700 mb-2 text-lg">
          You can leverage your skills, talents and experience in three ways:
        </p>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-10">
          {[
            "Within Our Administrative Team",
            "During Events",
            "Abroad",
          ].map((title, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className=" bg-white rounded-2xl shadow-xl border border-gray-200 px-4 text-center transition"
            >
              <h3 className="text-base font-semibold text-black mt-3 p-2">{title}</h3>
            </motion.div>
          ))}
        </div>
          </div>

          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/Volunteer AI artwork2.png"
              alt="Volunteers Needed"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>
</PageWithSidebar>

      {/* ============================
          VOLUNTEER WITH ADMIN TEAM (2 COLUMN)
      ============================= */}
      <section className="px-6 md:px-20 py-20">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/volunteer-2.png"
              alt="Administrative Volunteer"
              fill
              className="object-cover"
            />
          </div>

          <div className="text-gray-700 space-y-6 text-lg">
            <h2 className="text-3xl font-bold text-black">
              VOLUNTEER WITH OUR ADMINISTRATIVE TEAM
            </h2>

            <p>
              For someone looking for career opportunities, this is an opportunity to give 
              back while gaining experience, enhancing your resume, and improving job prospects.
            </p>

            <p>
              For someone retired or approaching retirement, this is an opportunity to use your 
              skills and experience to leave a lasting impact on others.
            </p>

            <p className="font-semibold">Bring your talents to our administrative team:</p>

            <ul className="list-disc ml-8 space-y-2">
              <li>You can serve from anywhere in the world</li>
              <li>Flexible schedule</li>
              <li>You determine your availability</li>
            </ul>

<div className="mt-12 flex justify-center">
  <div className="relative border-2 border-black rounded-2xl w-full max-w-2xl p-5 pt-12">

    {/* Title Inside Box */}
    <h3 className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-4 text-red-600 font-semibold">
      Available Positions
    </h3>

    {/* Vertical Divider */}
    <div className="absolute top-12 bottom-2 left-1/2 w-[2px] bg-black"></div>

    {/* Content */}
    <div className="grid grid-cols-2 gap-y-1 text-center">
      <p>Secretarial Services</p>
      <p>Fundraising</p>

      <p>Social Media Marketing</p>
      <p>Web Development</p>

      <p>Event Planning</p>
      <p>Program Management</p>

      <p>Member Services</p>
      <p>Communications</p>
    </div>

  </div>
</div>
          </div>

        </div>
      </section>

      {/* ============================
          VOLUNTEER ABROAD (2 COLUMN REVERSE)
      ============================= */}
      <section className="px-6 md:px-20  bg-gray-50">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl font-bold text-black">
              VOLUNTEER ABROAD
            </h2>

            <p>
              If you have a few weeks or months to spare and want to broaden your horizons 
              while helping others, volunteering abroad may be the right opportunity for you.
            </p>

            <p>
              We welcome healthcare professionals such as:
            </p>

            <ul className="list-disc ml-8 space-y-2">
              <li>Nurses</li>
              <li>Doctors</li>
              <li>Cardiologists</li>
                            <li> Cardiac Surgeons</li>

            </ul>
          </div>

          <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/Babadjou 1.jpg"
              alt="Volunteer Abroad"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* ============================
          VOLUNTEER FORM
      ============================= */}
      <section className="bg-white py-20">
        <VolunteerForm />
      </section>
    </main>
  );
}
