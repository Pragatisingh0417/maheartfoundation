"use client";

import Image from "next/image";
import Link from "next/link";


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
Shortly after arriving in Ottawa with her two young children following her husband’s appointment as Cameroon’s High Commissioner (Ambassador) to Canada, Mercy’s life would take a dramatic turn. On October 23, 2009, she complained of fatigue, fever, a headache, blurred vision … and was rushed to hospital for what she thought was a routine ailment. Amid the H1N1 crisis, Emergency Room staff overlooked her medical history, misdiagnosed her condition, prescribed Tamiflu, and sent her home, only to be rushed again to the emergency department two days later following a rapid deterioration of her condition. When she was placed in a wheelchair shortly thereafter, little did she know that she had just taken her last steps on her own two feet. She was in fact in the throes of endocarditis, a virulent infection of the heart valves. She soon slipped into a coma and spent several weeks wavering between life and death.        </p>

       <Link href="/about">
  <button className="mt-6 px-8 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition">
    Learn more
  </button>
</Link>
      </div>

    </section>
  );
}
