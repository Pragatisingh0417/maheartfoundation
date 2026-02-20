"use client";

import Link from "next/link";

export default function OutreachActivities() {
  return (
    <section className="bg-[#fff6d8] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600">
Outreach          </h2>
 {/* Red underline */}
          <svg
            viewBox="0 0 200 20"
            className="mx-auto mt-2 w-36 h-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12 C40 -6 160 24 200 4"
              stroke="#d4af37"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              opacity="0.95"
            />
          </svg>        </div>

        {/* CENTERED DESCRIPTION */}
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-16">
          Through our outreach programs, we extend heart health education,
          awareness, and life-saving skills to schools, communities, and
          corporate organizations.
        </p>

        {/* CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* SCHOOL OUTREACH */}
          <div className="flex flex-col bg-white rounded-3xl shadow-sm hover:shadow-lg transition border border-[#d4af37]/30">
            <div className="h-2 bg-[#d4af37] rounded-t-3xl" />

            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-2xl font-semibold text-red-600 mb-4">
                School Outreach
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8">
                Our school outreach programs focus on educating students and
                teachers about heart health, CPR, and emergency response.
                By empowering young people with life-saving knowledge, we help
                build safer schools and healthier futures.
              </p>

              <Link href="/school-Outreach" className="mt-auto">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* COMMUNITY OUTREACH */}
          <div className="flex flex-col bg-white rounded-3xl shadow-sm hover:shadow-lg transition border border-[#d4af37]/30">
            <div className="h-2 bg-[#d4af37] rounded-t-3xl" />

            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-2xl font-semibold text-red-600 mb-4">
                Community Outreach
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8">
                Through community outreach, we bring heart health awareness,
                CPR training, and preventive education directly to the people.
                These programs help communities respond effectively to cardiac
                emergencies and reduce preventable heart-related deaths.
              </p>

              <Link href="/community-Outreach" className="mt-auto">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* CORPORATE OUTREACH */}
          <div className="flex flex-col bg-white rounded-3xl shadow-sm hover:shadow-lg transition border border-[#d4af37]/30">
            <div className="h-2 bg-[#d4af37] rounded-t-3xl" />

            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-2xl font-semibold text-red-600 mb-4">
                Corporate Outreach
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8">
                Our corporate outreach initiatives support organizations in
                creating heart-safe workplaces. We provide training, awareness
                programs, and preparedness strategies that help employees
                respond confidently during medical emergencies.
              </p>

              <Link href="/corporate-Outreach" className="mt-auto">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition">
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
