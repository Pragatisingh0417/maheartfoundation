"use client";

import Image from "next/image";
import Link from "next/link";

export default function MercySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

        {/* ================= LEFT COLUMN ================= */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            A Word from Mercy
          </h2>

          {/* Image */}
          <div className="relative w-full h-[360px] mb-6 rounded-xl overflow-hidden shadow-md">
            <Image
              src="/Mercy Azoh-Mbi2.jpg"
              alt="Mercy Azoh-Mbi"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <p className="text-gray-700 leading-relaxed mb-4">
            I wish you a warm welcome to the website of the Mercy Azoh-Mbi Heart
            Foundation.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            In 2009, heart disease radically maimed, mutilated and morphed me
            into a helpless, almost hopeless woman. I was barely 37 years old.
          </p>

          <Link href="/word-from-mercy">
            <button className="mt-4 px-6 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition">
              Read More
            </button>
          </Link>
        </div>

        {/* ================= MIDDLE COLUMN ================= */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Our Inspiration
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Upon realizing that heart disease is a major global public health
            challenge, especially in developing countries, and that far too
            many people simply die without a battle for survival, Mercy’s life
            became a galvanizing testimony to this daunting health challenge.
          </p>

          <p className="text-gray-700 leading-relaxed mb-10">
            Without hands and legs, Mercy continues to use her voice to mobilize
            others to extend a helping hand to people suffering from heart
            disease around the world.
          </p>

          {/* Newsletter */}
          <div className="border border-[#d4af37]/40 rounded-xl p-6 bg-[#fff6d8]">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Sign up for our newsletter
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              Stay informed about our outreach activities, events, and impact.
            </p>

            {/* Mailchimp placeholder */}
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />
              <button
                type="submit"
                className="bg-[#d4af37] hover:bg-[#b8962e] text-black font-semibold py-2 rounded-full transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The Book:
            <br />
            <span className="text-red-600">
              MIRACLE OF MERCY
            </span>
          </h2>

          {/* Book Image */}
          <div className="relative w-full h-[320px] mb-6 rounded-xl overflow-hidden shadow-md">
            <Image
              src="/images/Image of book - Miracle of Mercy.jpg"
              alt="Miracle of Mercy Book"
              fill
              className="object-contain bg-white"
            />
          </div>

          {/* Book Text */}
          <p className="text-gray-700 leading-relaxed mb-4">
            Mercy’s story, which is the raison-d’être of the Foundation, is
            chronicled in the best-selling memoir <em>Miracle of Mercy: A True
            Story of Courage in the Face of Adversity</em>, available on Amazon.
          </p>

          <Link
            href="https://www.amazon.com"
            target="_blank"
            className="text-red-600 font-semibold hover:underline"
          >
            Get your copy today
          </Link>
        </div>

      </div>
    </section>
  );
}
