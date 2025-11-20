"use client";

import Image from "next/image";

export default function DonationBanner() {
  return (
    <section className="relative w-full h-[550px] md:h-[600px] rounded-none overflow-hidden">

      {/* FULL BACKGROUND IMAGE */}
      <Image
        src="/heart-banner-image.png"
        alt="donation banner"
        fill
        priority
        className="object-cover object-center"
      />

      {/* DARK OVERLAY (optional) */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-6xl h-full mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* LEFT: Heading */}
        <div className="text-left text-white max-w-xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl">
            Stronger Hearts,
            <br />
            Stronger Futures
          </h1>

          {/* Red underline */}
          <svg
            viewBox="0 0 200 20"
            className="mt-4 w-40 h-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12 C40 -6 160 24 200 4"
              stroke="#e11d2b"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              opacity="0.95"
            />
          </svg>
        </div>

        {/* RIGHT: Donation Box */}
        <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-gray-900 text-center">MAKE A DONATION</h2>

          <p className="mt-4 text-sm text-gray-600 text-center">
Your donation will go a long way in helping us achieve our mission. You can visit our website to donate online or send a check to the Foundation, at the address indicated in this brochure. We are a duly registered Canadian charity; you will receive a tax receipt for your donation.          </p>

          <p className="mt-4 text-sm text-red-500 text-center">
You can choose to donate either with PayPal, Credit Card or Mobile Money.          </p>

          <div className="mt-6 flex flex-col gap-4">
            <button className="w-full px-6 py-3 rounded-full bg-red-600 text-white font-semibold shadow-md hover:bg-red-700 transition">
              Donate With Credit Card
            </button>

            <button className="w-full px-6 py-3 rounded-full bg-red-600 text-white font-semibold shadow-md hover:bg-red-700 transition">
              Donate With Mobile Money
            </button>
          </div>

          <p className="mt-4 text-xs text-gray-400 text-center">Thanks.</p>
        </div>
      </div>
    </section>
  );
}
