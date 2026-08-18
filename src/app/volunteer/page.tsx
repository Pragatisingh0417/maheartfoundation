"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import VolunteerForm from "../components/VolunteerForm";
import PageWithSidebar from "../components/PageWithSidebar";
import T from "../components/Translate";

export default function VolunteerPage() {
  return (
    <main className="w-full">

      {/* ============================
          BANNER SECTION
      ============================= */}
      <section className="bg-[#b8962e] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          <T>Volunteer</T>
        </h1>
        <p className="mt-3 text-lg text-white leading-relaxed">
          <T>Helping others strengthens your sense of purpose and personal identity.</T>
        </p>
      </section>
      <PageWithSidebar>
        {/* ============================
            INTRO SECTION (2 COLUMN)
        ============================= */}
        <section className="bg-white max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-10">
                <T>Volunteering is one of the most effective ways we can help others.</T>
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed">
                <T>A little of your time can make a world of difference in the lives of others. We would like to thank you for considering the opportunity to volunteer with</T>{" "}
                <span className="font-semibold"><T>The Mercy Azoh-Mbi Heart Foundation.</T></span>
              </p>

              <h2 className="text-xl mt-4 font-bold text-red-600 mb-5">
                <T>3 WAYS TO VOLUNTEER</T>
              </h2>
              <p className="text-gray-700 mb-2 text-lg text-samll ">
                <T>You can leverage your skills, talents and experience in three ways:</T>
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
                    <h3 className="text-base font-semibold text-black mt-3 p-2"><T>{title}</T></h3>
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
            <h2 className="text-3xl font-bold text-red-600 ">
              <T>Volunteer with our administrative team</T>
            </h2>

            <p>
              <T>For someone looking for career opportunities, this is an opportunity to give back while gaining experience, enhancing your resume, and improving job prospects.</T>
            </p>

            <p>
              <T>For someone retired or approaching retirement, this is an opportunity to use your skills and experience to leave a lasting impact on others.</T>
            </p>

            <p className="font-semibold"><T>Bring your talents to our administrative team:</T></p>

            <ul className="list-disc ml-8 space-y-2">
              <li><T>You can serve from anywhere in the world</T></li>
              <li><T>Flexible schedule</T></li>
              <li><T>You determine your availability</T></li>
            </ul>

            <div className="mt-12 flex justify-center">
              <div className="relative border-2 border-black rounded-2xl w-full max-w-2xl p-5 pt-12">

                {/* Title Inside Box */}
                <h3 className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-4 text-red-600 font-semibold">
                  <T>Available Positions</T>
                </h3>

                {/* Vertical Divider */}
                <div className="absolute top-12 bottom-2 left-1/2 w-[2px] bg-black"></div>

                {/* Content */}
                <div className="grid grid-cols-2 gap-y-1 text-center">
                  <p><T>Secretarial Services</T></p>
                  <p><T>Fundraising</T></p>

                  <p><T>Social Media Marketing</T></p>
                  <p><T>Web Development</T></p>

                  <p><T>Event Planning</T></p>
                  <p><T>Program Management</T></p>

                  <p><T>Member Services</T></p>
                  <p><T>Communications</T></p>
                </div>
              </div>

            </div>
            <p className="text-red-600 text-center"><T>Fill out the form below to get started</T></p>

          </div>

        </div>
      </section>

      {/* ============================
          VOLUNTEER ABROAD (2 COLUMN REVERSE)
      ============================= */}
      <section className="px-6 md:px-20 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl font-bold text-red-600">
              <T>Volunteer Abroad</T>
            </h2>

            <p>
              <T>If you have a few weeks or months to spare and want to broaden your horizons while helping others, volunteering abroad may be the right opportunity for you.</T>
            </p>

            <p>
              <T>We welcome healthcare professionals such as:</T>
            </p>

            <ul className="list-disc ml-8 space-y-2">
              <li><T>Nurses</T></li>
              <li><T>Doctors</T></li>
              <li><T>Cardiologists</T></li>
              <li><T>Cardiac Surgeons</T></li>
            </ul>
            <p className="text-red-600"><T>Fill out the form below to get started</T></p>

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

