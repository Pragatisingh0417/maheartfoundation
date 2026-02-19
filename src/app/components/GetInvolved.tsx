"use client";

import Link from "next/link";

export default function GetInvolved() {
  return (
    <section className="bg-white p-20">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">

        {/* SECTION TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600">
            Get Involved
          </h2>
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

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* VOLUNTEER */}
          <div className="flex flex-col border border-[#d4af37]/30 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">
              Volunteer
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8">
              Volunteering is one of the most effective ways to help others.
              A little of your time can make a world of difference in the lives
              of others.
            </p>

            {/* Button pinned to bottom */}
            <Link href="/volunteer" className="mt-auto">
              <button className="w-full h-12 bg-red-600  text-white font-semibold rounded-full transition">
                Become a Volunteer
              </button>
            </Link>
          </div>

          {/* FUNDRAISE */}
          <div className="flex flex-col border border-[#d4af37]/30 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">
              Fundraise
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8">
              We can only succeed in achieving our mission by raising funds each
              year to make this project sustainable. This means offering our
              services in more parts of the world and saving more lives.
            </p>

            <Link href="/fundraise" className="mt-auto">
              <button className="w-full h-12 bg-red-600  text-white font-semibold rounded-full transition">
                Start Fundraising
              </button>
            </Link>
          </div>

          {/* DONATE */}
          <div className="flex flex-col border border-[#d4af37]/30 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">
              Donate
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              Your donation will go a long way in helping us achieve our mission.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              You can donate by Credit Card, or Mobile Money.
            </p>

            <Link href="/make-a-donation" className="mt-auto">
              <button className="w-full h-12 bg-red-600  text-white font-semibold rounded-full transition">
                Donate Now
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
