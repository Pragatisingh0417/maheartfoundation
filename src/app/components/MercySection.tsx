"use client";

import Image from "next/image";
import Link from "next/link";

export default function MercySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 border border-gray-2 mt-10 mb-10">
      
      {/* ================= MAIN GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* ================= LEFT COLUMN ================= */}
        <div className="flex gap-6 items-start">

          <div className="relative w-[100px] h-[100px] rounded-lg overflow-hidden shadow-sm shrink-0">
            <Image
              src="/Mercy Azoh-Mbi2.jpg"
              alt="Mercy Azoh-Mbi"
              fill
              className="object-cover"
            />
          </div>

          <div className="text-sm text-gray-700 leading-relaxed flex-1">
            <p>
              I wish you a warm welcome to the website of the Mercy Azoh-Mbi Heart Foundation.
            </p>

            <p className="mt-2">
              In 2009, heart disease radically maimed and transformed my life at just
              37 years old. I deeply mourned the loss of my four limbs for years,
              but gradually began to appreciate the ultimate gift of life itself.
            </p>

            <Link href="/word-from-mercy">
              <button className="mt-4 px-5 py-2.5 bg-red-600 text-white rounded-full text-sm font-semibold hover:bg-red-700 transition">
                Read More
              </button>
            </Link>
          </div>

        </div>

        {/* ================= RIGHT SIDE (MIDDLE + RIGHT) ================= */}
        <div className="md:col-span-2 flex flex-col gap-10">

          {/* ---------- Middle + Right Columns ---------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* ================= MIDDLE COLUMN ================= */}
            <div>
              <h2 className="text-xl font-bold text-red-600 mb-3">
                Our Inspiration
              </h2>

              <p className="text-sm text-gray-700 leading-relaxed mb-6">
                Shortly after arriving in Ottawa with her two young children following her husband’s appointment as Cameroon’s High Commissioner (Ambassador) to Canada, Mercy’s life would take a dramatic turn.
                On Octobe r 23, 2009, she complained of fatigue, fever, a head ache, blurred vision.
              </p>

              <Link href="/our-inspiration">
                <button className="px-5 py-2.5 bg-red-600 text-white rounded-full text-sm font-semibold hover:bg-red-700 transition">
                  Read More
                </button>
              </Link>
            </div>

            {/* ================= RIGHT COLUMN ================= */}
            <div>
              <h2 className="text-xl font-bold text-red-600 mb-3">
                The Book that Tells Our Story
              </h2>

              <div className="flex gap-6 items-start">

                <div className="relative w-[100px] h-[150px] rounded-lg overflow-hidden shrink-0">
                  <Image
                    src="/images/Image of book - Miracle of Mercy.jpg"
                    alt="Miracle of Mercy Book"
                    fill
                    className="object-contain object-left"
                  />
                </div>

                <div className="flex flex-col gap-3 text-sm text-gray-700 leading-relaxed flex-1">

                  <p>
                    Mercy’s story is chronicled in the best-selling memoir{" "}
                    <em>
                      Miracle of Mercy: A True Story of Courage in the Face of Adversity
                    </em>, available on Amazon.
                  </p>

                  <Link
                    href="https://www.amazon.com/Miracle-Mercy-Story-Courage-Adversity/dp/1664280375/ref=sr_1_1?crid=A9TXJHFH7QBV&dib=eyJ2IjoiMSJ9.vdc_BXT8lHZFsJNnjVr0OxnmG-MBNSmMPcK91WcMwkE.dZbkf9Ux_widcBY15mbq1y746r1qnpWnhQJV3xshqvQ&dib_tag=se&keywords=mercy+azoh-mbi&qid=1771868890&sprefix=mercy+azoh-mbi%2Caps%2C179&sr=8-1"
                    target="_blank"
                    className="w-fit bg-red-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-md transition-all duration-300 hover:bg-red-700 hover:shadow-lg active:scale-95"
                  >
                    Get your copy today
                  </Link>

                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ================= NEWSLETTER (FULL WIDTH CENTERED) ================= */}
      <div className="mt-12 border border-red-200 rounded-xl p-6 bg-white max-w-3xl mx-auto">

        <h2 className="text-2xl md:text-2xl font-semibold mb-3 text-center">
          Newsletter
        </h2>

        <h3 className="text-base  text-gray-900 mb-5 text-center">
          Subscribe to receive updates, heart health tips, and Foundation news.
        </h3>

        <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-red-600 text-white text-sm font-semibold rounded-full transition"
          >
            Subscribe
          </button>
        </form>

      </div>

    </section>
  );
}