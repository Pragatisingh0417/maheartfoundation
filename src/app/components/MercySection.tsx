"use client";

import Image from "next/image";
import Link from "next/link";

export default function MercySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* ================= LEFT COLUMN ================= */}
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-red-600 mb-3">
            A Word from Mercy
          </h2>

          <div className="relative w-full h-[260px] mb-4 rounded-lg overflow-hidden shadow-sm">
            <Image
              src="/Mercy Azoh-Mbi2.jpg"
              alt="Mercy Azoh-Mbi"
              fill
              className="object-cover"
            />
          </div>

          <div className="text-sm text-gray-700 leading-relaxed space-y-3">
            <p>
              I wish you a warm welcome to the website of the Mercy Azoh-Mbi Heart Foundation.
            </p>

            <p>
              In 2009, heart disease radically maimed and transformed my life at just
              37 years old. I deeply mourned the loss of my four limbs for years,
              but gradually began to appreciate the ultimate gift of life itself.
            </p>

            <p>
              Upon realizing that heart disease is a major global public health challenge,
              especially in developing countries, and that far too many people simply die
              without a battle for survival, I reckoned that my life could be a galvanizing
              tale and testimony to this daunting health challenge.
            </p>

           
          </div>

          <Link href="/word-from-mercy" className="mt-4">
            <button className="px-5 py-2.5 bg-red-600 text-white rounded-full text-sm font-semibold hover:bg-red-700 transition">
              Read More
            </button>
          </Link>
        </div>

        {/* ================= RIGHT SIDE WRAPPER (Middle + Right + Newsletter) ================= */}
        <div className="md:col-span-2 flex flex-col gap-10">

          {/* ---------- Middle + Right Columns ---------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* ================= MIDDLE COLUMN ================= */}
            <div>
              <h2 className="text-xl font-bold text-red-600 mb-3">
                Our Inspiration
              </h2>

              <p className="text-sm text-gray-700 leading-relaxed mb-4">
               Shortly after arriving in Ottawa with her two young children following her husband’s appointment as Cameroon’s High Commissioner (Ambassador) to Canada, Mercy’s life would take a dramatic turn. On Octobe r 23, 2009, she complained of fatigue, fever, a head ache, blurred vision … and was rushed to hospital for what she thought was a routine ailment. Amid t he H1N1 crisis, Emergency Room staff overlooked her medical history, misdiagnosed her condition, prescribed Tamiflu, and sent her home, only for her to be rushed again to the emergency department two days later following a rapid deterioration of her condition. When she was placed in a wheelchair shortly thereafter, little did she know that she had just taken her last steps on her own two feet. She was in fact in the throes of endocarditis, a virulent infection of the heart valves. She soon slipped into a coma and spent several weeks wavering between life and death.
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
                The Book That Tells Our Story
              </h2>

              <div className="relative w-full h-[280px] mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/Image of book - Miracle of Mercy.jpg"
                  alt="Miracle of Mercy Book"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                Mercy’s story is chronicled in the best-selling memoir{" "}
                <em>
                  Miracle of Mercy: A True Story of Courage in the Face of Adversity
                </em>, available on Amazon.
              </p>

              <Link
                href="https://www.amazon.com/Miracle-Mercy-Story-Courage-Adversity/dp/1664280375/ref=sr_1_1?crid=A9TXJHFH7QBV&dib=eyJ2IjoiMSJ9.vdc_BXT8lHZFsJNnjVr0OxnmG-MBNSmMPcK91WcMwkE.dZbkf9Ux_widcBY15mbq1y746r1qnpWnhQJV3xshqvQ&dib_tag=se&keywords=mercy+azoh-mbi&qid=1771868890&sprefix=mercy+azoh-mbi%2Caps%2C179&sr=8-1"
                target="_blank"
  className="inline-block bg-red-600 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 hover:bg-red-700 hover:shadow-lg active:scale-95"
              >
                Get your copy today
              </Link>
            </div>

          </div>

          {/* ================= NEWSLETTER (NOW INDEPENDENT) ================= */}
          <div className="border border-red-200 rounded-xl p-6 bg-white">
            <h3 className="text-base font-semibold text-gray-900 mb-2 text-center">
              Sign up for our newsletter
            </h3>

            <p className="text-sm text-gray-600 mb-4 text-center">
              Stay informed about our outreach activities, events, and impact.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-red-600  text-white text-sm font-semibold rounded-full transition"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
