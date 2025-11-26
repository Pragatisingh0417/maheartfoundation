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
  I wish you a warm welcome to the website of the Mercy Azoh-Mbi Heart Foundation.
</p>
        <p className="mt-4 text-gray-700 leading-relaxed">
In 2009, heart disease radically maimed, mutilated and morphed me into a helpless, almost hopeless woman. I was barely 37 years old. I deeply mourned the loss of my four limbs for years, but gradually began to appreciate the ultimate gift of life itself.        </p>

<p className="mt-4 text-gray-700 leading-relaxed">
  Upon realizing that heart disease is a major global public health challenge, especially in developing countries, and that far too many people simply die without a battle for survival, I reckoned that my life could be a galvanizing tale and testimony to this daunting health challenge.
</p>
<p className="mt-4 text-gray-700 leading-relaxed">Without hands and legs, I can still use my voice to mobilize others
   to extend a helping hand to the many people, young and old, suffering from heart disease around the world, often without
    proper knowledge about the disease, treatment opportunities and options available to them, and the means to cure themselves. 
    This is the reason behind the Mercy Azoh-Mbi Heart Foundation.   </p>

       <Link href="/word-from-mercy">
  <button className="mt-6 px-8 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition">
    Learn more
  </button>
</Link>

      </div>

      {/* RIGHT — Image */}
      <div className="w-full h-[520px] relative rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/Mercy Azoh-Mbi2.jpg"
          alt="Mercy profile"
          fill
          className="rounded-xl shadow-lg object-cover w-full "
        />
      </div>
    </section>
  );
}
