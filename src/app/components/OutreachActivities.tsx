"use client";

import Link from "next/link";

export default function OutreachActivities() {
  return (
    <section className="bg-[#fff6d8] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">

        {/* SECTION HEADER */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Outreach Activities
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Through our outreach programs, we extend heart health education,
            awareness, and life-saving skills to schools, communities, and
            corporate organizations.
          </p>
        </div>

        {/* OUTREACH LIST */}
        <div className="space-y-8">

          {/* SCHOOL OUTREACH */}
          <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="w-full md:w-2 bg-[#d4af37]"></div>

            <div className="p-8 flex-1">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                School Outreach
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our school outreach programs focus on educating students and
                teachers about heart health, CPR, and emergency response.
                By empowering young people with life-saving knowledge, we help
                build safer schools and healthier futures.
              </p>

              <Link href="/outreach/schools">
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* COMMUNITY OUTREACH */}
          <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="w-full md:w-2 bg-[#d4af37]"></div>

            <div className="p-8 flex-1">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Community Outreach
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Through community outreach, we bring heart health awareness,
                CPR training, and preventive education directly to the people.
                These programs help communities respond effectively to cardiac
                emergencies and reduce preventable heart-related deaths.
              </p>

              <Link href="/outreach/community">
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* CORPORATE OUTREACH */}
          <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="w-full md:w-2 bg-[#d4af37]"></div>

            <div className="p-8 flex-1">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Corporate Outreach
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our corporate outreach initiatives support organizations in
                creating heart-safe workplaces. We provide training, awareness
                programs, and preparedness strategies that help employees
                respond confidently during medical emergencies.
              </p>

              <Link href="/outreach/corporate">
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
