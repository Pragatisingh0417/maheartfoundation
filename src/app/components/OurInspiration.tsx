"use client";

import Image from "next/image";

export default function OurInspiration() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
      {/* LEFT — Image */}
      <div className="w-full h-[420px] relative rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/Mercy-Azoh-Mbi-Heart-Foundation.jpg"
          alt="Inspiration group"
          fill
          className="object-cover"
        />
      </div>

      {/* RIGHT — Text Content */}
      <div>
        <h2 className="text-4xl font-extrabold text-[#FD201F]">
          Our Inspiration
        </h2>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Shortly after arriving in Ottawa with her two young children following her husband’s appointment as Cameroon’s High Commissioner (Ambassador) to Canada, Mercy’s life would take a dramatic turn. On October 23, 2009, she complained of fatigue, fever, a headache, blurred vision … Read more
        </p>

        <button className="mt-6 px-8 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition">
          Learn more
        </button>
      </div>

    </section>
  );
}
