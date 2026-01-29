"use client";

import Link from "next/link";

export default function GetInvolved() {
  return (
    <section className="bg-white py-10 pt-4">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">

        {/* SECTION TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get Involved
          </h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* VOLUNTEER */}
          <div className="border border-[#d4af37]/30 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Volunteer
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8">
              Volunteering is one of the most effective ways we can help others.
              A little of your time can make a world of difference in the lives
              of others. We would like to thank you for considering the
              opportunity to volunteer with The Mercy Azoh-Mbi Heart Foundation.

               we welcome applications from the following professionals who are interested in volunteering to help the Foundation achieve its mission:
            </p>

            <Link href="/volunteer">
              <button className="w-full bg-[#d4af37] hover:bg-[#b8962e] text-black font-semibold py-3 rounded-full transition">
                Become a Volunteer
              </button>
            </Link>
          </div>

          {/* FUNDRAISE */}
          <div className="border border-[#d4af37]/30 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Fundraise
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8">
              We raise funds because the seed money donated by Mercy and her
              family can only sustain the activities of the Foundation for a
              limited time. We can only succeed in achieving our mission by
              raising funds each year to make this project sustainable. This
              means offering our services in more parts of the world and saving
              more lives.
              Our fundraising department is available to provide support and advice.


            </p>

            <Link href="/fundraise">
              <button className="w-full bg-[#d4af37] hover:bg-[#b8962e] text-black font-semibold py-3 rounded-full transition">
                Start Fundraising
              </button>
            </Link>
          </div>

          {/* DONATE */}
          <div className="border border-[#d4af37]/30 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Donate
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              Your donation will go a long way in helping us achieve our mission.
              You can donate online or send a check to the Foundation at the
              address indicated in this brochure. We are a duly registered
              Canadian charity; you will receive a tax receipt for your
              donation.
            </p>

            <p className="text-gray-600 leading-relaxed mb-15">
              You can choose to donate using PayPal, Credit Card, or Mobile
              Money.
            </p>

            <Link href="/make-a-donation">
              <button className="w-full bg-[#d4af37] hover:bg-[#b8962e] text-black font-semibold py-3 rounded-full transition">
                Donate Now
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
