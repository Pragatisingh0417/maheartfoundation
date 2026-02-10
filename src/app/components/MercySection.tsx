"use client";

import Image from "next/image";
import Link from "next/link";

export default function MercySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

        {/* ================= LEFT COLUMN ================= */}
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-red-600 mb-3">
            A Word from Mercy
          </h2>

          {/* Image (smaller) */}
          <div className="relative w-full h-[300px] mb-4 rounded-lg overflow-hidden shadow-sm">
            <Image
              src="/Mercy Azoh-Mbi2.jpg"
              alt="Mercy Azoh-Mbi"
              fill
              className="object-cover"
            />
          </div>

          {/* Text (show first 2 paragraphs visually) */}
          <div className="text-sm text-gray-700 leading-relaxed space-y-3 line-clamp-[8]">
            <p>
              I wish you a warm welcome to the website of the Mercy Azoh-Mbi Heart
              Foundation.
            </p>

            <p>
              In 2009, heart disease radically maimed, mutilated and morphed me
              into a helpless, almost hopeless woman. I was barely 37 years old.
              I deeply mourned the loss of my four limbs for years, but gradually
              began to appreciate the ultimate gift of life itself.
            </p>

            <p>
              Upon realizing that heart disease is a major global public health
              challenge, especially in developing countries, and that far too
              many people simply die without a battle for survival, I reckoned
              that my life could be a galvanizing tale and testimony to this
              daunting health challenge.
            </p>
          </div>

          <Link href="/word-from-mercy" className="mt-auto pt-4">
            <button className="px-5 py-2.5 bg-red-600 text-white rounded-full text-sm font-semibold hover:bg-red-700 transition">
              Read More
            </button>
          </Link>
        </div>

        {/* ================= MIDDLE COLUMN ================= */}
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-red-600 mb-3">
            Our Inspiration
          </h2>

          {/* Show only first paragraph visually */}
          <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-19 ">
Shortly after arriving in Ottawa with her two young children following her husband’s appointment as Cameroon’s High Commissioner (Ambassador) to Canada, Mercy’s life would take a dramatic turn. On Octobe
r 23, 2009, she complained of fatigue, fever, a head ache, blurred vision … 
and was rushed to hospital for what she thought was a routine ailment. Amid t
he H1N1 crisis, Emergency Room staff overlooked her medical history, misdiagnosed her condition, 

prescribed Tamiflu, and sent her home, only for her to be rushed again to the emergency department two
 days later following a rapid deterioration of her condition. When she was placed in a wheelchair shortly 
 thereafter, little did she know that she had just taken her last steps on her own two feet. She was in fact 
 in the throes of endocarditis, a virulent infection of the heart valves. She soon slipped into a coma and spent 
 several weeks wavering between life and death.          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-4 line-clamp-10">


  Despite the cataclysmic prognosis from the doctors and the pressure brought to bear on him, her husband refused to grant consent for her to be taken off life support. Mercy would later make a miraculous recovery just when her
   caregivers had pointed out that she had only a few hours to live. In the weeks and months that followed,

 </p>

          <Link href="/our-inspiration" className="mt-auto">
            <button className="px-5 py-2.5 bg-red-600 text-white rounded-full text-sm font-semibold hover:bg-red-700 transition">
              Read More
            </button>
          </Link>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-red-600 mb-3">
            The Book That Tells Our Story
          </h2>

          {/* Book Image (smaller) */}
          <div className="relative w-full h-[300px] mb-4 rounded-lg overflow-hidden">
            <Image
              src="/images/Image of book - Miracle of Mercy.jpg"
              alt="Miracle of Mercy Book"
              fill
              className="object-contain"
            />
          </div>

          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Mercy’s story, which is the raison-d’être of the Foundation, is
            chronicled in the best-selling memoir{" "}
            <em>Miracle of Mercy: A True Story of Courage in the Face of Adversity</em>,
            available on Amazon.
          </p>

          <Link
            href="https://www.amazon.com"
            target="_blank"
            className="mt-auto text-red-600 text-sm font-semibold hover:underline"
          >
            Get your copy today
          </Link>
        </div>

        {/* ================= NEWSLETTER (SPAN 2 COLS) ================= */}
<div className="md:col-span-3 md:col-start-1 justify-self-center w-full max-w-4xl border border-[#d4af37]/40 rounded-xl p-5 bg-[#fff6d8]">
  <h3 className="text-base font-semibold text-gray-900 mb-2 text-center">
    Sign up for our newsletter
  </h3>

  <p className="text-sm text-gray-600 mb-3 text-center">
    Stay informed about our outreach activities, events, and impact.
  </p>

  <form className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
    <input
      type="email"
      placeholder="Enter your email"
      className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
    />
    <button
      type="submit"
      className="px-6 py-2 bg-[#d4af37] hover:bg-[#b8962e] text-black text-sm font-semibold rounded-full transition"
    >
      Subscribe
    </button>
  </form>
</div>


      </div>
    </section>
  );
}
