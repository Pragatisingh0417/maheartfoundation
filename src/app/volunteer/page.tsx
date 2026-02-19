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
      <section className="px-6 md:px-20 py-10 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-black mb-6">
              Volunteering is one of the most effective ways we can help others.
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              A little of your time can make a world of difference in the lives of others.
              We would like to thank you for considering the opportunity to volunteer with
              <span className="font-semibold"> The Mercy Azoh-Mbi Heart Foundation.</span>
            </p>
          </div>

          <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/volunteer-1.png"
              alt="Volunteers Needed"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>
</PageWithSidebar>

      {/* ============================
          3 WAYS TO VOLUNTEER
      ============================= */}
      <section className="px-6 md:px-20 py-10 bg-gray-50">
        <h2 className="text-3xl font-bold text-black mb-6">
          3 WAYS TO VOLUNTEER
        </h2>

        <p className="text-gray-700 mb-12 text-lg">
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
              className="p-12 bg-white rounded-2xl shadow-xl border border-gray-200 text-center transition"
            >
              <h3 className="text-2xl font-semibold text-black">{title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================
          VOLUNTEER WITH ADMIN TEAM (2 COLUMN)
      ============================= */}
      <section className="px-6 md:px-20 py-20 bg-white">
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

            <h3 className="text-2xl font-semibold mt-6">
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

        </div>
      </section>

      {/* ============================
          VOLUNTEER ABROAD (2 COLUMN REVERSE)
      ============================= */}
      <section className="px-6 md:px-20 py-20 bg-gray-50">
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
              <li>Public Health Professionals</li>
              <li>Cardiologists / Cardiac Surgeons</li>
            </ul>
          </div>

          <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/volunteer-image.jpg"
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
