"use client";

import Link from "next/link";

export default function OutreachPage() {
  return (
    <main className="w-full">

      {/* ============================
          HERO SECTION
      ============================= */}
      <section className="bg-[#b8962e] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
Outreach        </h1>
        {/* <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto opacity-90">
          Resources for a healthy heart
        </p> */}
      </section>

      {/* ============================
          CLICKABLE BUTTON CARDS
      ============================= */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <Link
            href="/school-Outreach"
            className="p-8 bg-white border shadow-md rounded-2xl text-center hover:shadow-lg transition cursor-pointer"
          >
            <h3 className="text-xl font-bold text-gray-900">
School   Outreach         </h3>
          </Link>

          {/* Card 2 */}
          <Link
            href="/community-Outreach"
            className="p-8 bg-white border shadow-md rounded-2xl text-center hover:shadow-lg transition cursor-pointer"
          >
            <h3 className="text-xl font-bold text-gray-900">
             Community Outreach
            </h3>
          </Link>

          {/* Card 3 */}
          <Link
            href="/corporate-Outreach"
            className="p-8 bg-white border shadow-md rounded-2xl text-center hover:shadow-lg transition cursor-pointer"
          >
            <h3 className="text-xl font-bold text-gray-900">
             Corporate Outreach
            </h3>
          </Link>

        </div>
      </section>

    </main>
  );
}
