"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function VolunteerPage() {
  return (
    <main className="w-full">

      {/* ============================
          BANNER SECTION
      ============================= */}
      <section className="relative w-full h-[300px] md:h-[420px]">
        <Image
          src="/volunteer-image.jpg" // Change to your banner image
          alt="Volunteer Banner"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wide">
            VOLUNTEER
          </h1>
        </div>
      </section>

      {/* ============================
          INTRO SECTION
      ============================= */}
      <section className="px-6 md:px-20 py-14">
        <h2 className="text-3xl font-bold text-black-700 mb-4">
          Volunteering is one of the most effective ways we can help others.
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed">
          A little of your time can make a world of difference in the lives of others.
          We would like to thank you for considering the opportunity to volunteer with
          <span className="font-semibold"> The Mercy Azoh-Mbi Heart Foundation.</span>
        </p>
      </section>

      {/* ============================
          3 WAYS TO VOLUNTEER (NO IMAGES)
      ============================= */}
      <section className="px-6 md:px-20 pb-16">
        <h2 className="text-3xl font-bold text-black mb-8">
          3 WAYS TO VOLUNTEER
        </h2>

        <p className="text-gray-700 mb-10 text-lg">
          You can leverage your skills, talents and experience in three ways:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "Within Our Administrative Team",
            "During Events",
            "Abroad",
          ].map((title, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-10 bg-white rounded-2xl shadow-lg border border-gray-200 text-center"
            >
              <h3 className="text-2xl font-semibold text-black-600">{title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================
          VOLUNTEER WITH ADMIN TEAM
      ============================= */}
      <section className="px-6 md:px-20 py-14 bg-black-50">
        <h2 className="text-3xl font-bold text-black-700 mb-6">
          VOLUNTEER WITH OUR ADMINISTRATIVE TEAM
        </h2>

        <div className="text-gray-700 space-y-4 text-lg">
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

          <h3 className="text-2xl font-semibold text-black-700 mt-6">
            Available Positions:
          </h3>

          <ul className="list-disc ml-8 space-y-2">
            <li>Secretarial Services</li>
            <li>Fundraising</li>
            <li>Social Media Marketing</li>
            <li>Web Development</li>
            <li>Event Planning</li>
            <li>Program Management</li>
            <li>Member Services</li>
            <li>Communications</li>
          </ul>
        </div>
      </section>

      {/* ============================
          VOLUNTEER ABROAD
      ============================= */}
      <section className="px-6 md:px-20 py-14">
        <h2 className="text-3xl font-bold text-black-700 mb-6">VOLUNTEER ABROAD</h2>

        <p className="text-gray-700 text-lg mb-6">
          If you have a few weeks or months to spare and want to broaden your horizons 
          while helping others, volunteering abroad may be the right opportunity for you.
        </p>

        <p className="text-gray-700 text-lg mb-4">
          We welcome healthcare professionals such as:
        </p>

        <ul className="list-disc ml-8 space-y-2 text-lg text-gray-700">
          <li>Nurses</li>
          <li>Doctors</li>
          <li>Public Health Professionals</li>
          <li>Cardiologists / Cardiac Surgeons</li>
        </ul>
      </section>

      {/* ============================
          VOLUNTEER FORM
      ============================= */}
      <section className="px-6 md:px-20 py-14 bg-gray-100">
        <h2 className="text-3xl font-bold text-black-700 mb-10">Become a Volunteer</h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-200">

          {/* First Name */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2">First Name *</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg p-3"
              required
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2">Last Name *</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg p-3"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-semibold mb-2">Email *</label>
            <input
              type="email"
              className="border border-gray-300 rounded-lg p-3"
              required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col md:col-span-2">
            <label className="font-semibold mb-2">Comment or Message</label>
            <textarea
              rows={5}
              className="border border-gray-300 rounded-lg p-3"
            ></textarea>
          </div>

          {/* Submit */}
          <button className="md:col-span-2 bg-black-700 hover:bg-black-800 text-white py-3 rounded-lg font-semibold transition">
            Submit
          </button>

        </form>
      </section>

    </main>
  );
}
