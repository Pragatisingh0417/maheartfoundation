"use client";

import Image from "next/image";
import Link from "next/link";


export default function WordFromMercy() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

      {/* LEFT — Text Content */}
      <div>
        <h3 className="text-sm font-semibold tracking-wide text-gray-700">ABOUT US</h3>

        <h2 className="mt-2 text-4xl font-extrabold text-[#FD201F]">
          A Word from Mercy
        </h2>

        <p className="mt-4 text-gray-700 leading-relaxed">
          In 2009, at the age of 37, heart disease radically crippled me, mutilated me, and transformed me into a completely dependent, almost hopeless woman. I deeply mourned the loss of my four limbs for years, but gradually I began to appreciate the gift of life itself. I became aware that heart disease is a major global public health challenge, especially in developing countries, and that it is responsible for one-third of all deaths worldwide. Moreover, many people die without fighting for their lives. I believe that my experience could be a catalyst and testimony in the face of this enormous health challenge.
        </p>

       <Link href="/word-from-mercy">
  <button className="mt-6 px-8 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition">
    Learn more
  </button>
</Link>

      </div>

      {/* RIGHT — Image */}
      <div className="w-full h-[420px] relative rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/lady-image.webp"
          alt="Mercy profile"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
