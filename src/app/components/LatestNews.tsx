"use client";

import Image from "next/image";
import Link from "next/link";

export default function LatestNews() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-red-600">
            Latest News
          </h2>

          <svg
            viewBox="0 0 200 20"
            className="mx-auto mt-2 w-36 h-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12 C40 -6 160 24 200 4"
              stroke="#d4af37"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              opacity="0.95"
            />
          </svg>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <NewsCard
            image="/lady-image.webp"
            title="OBITUARY"
            description="The Azoh-Mbi and Egbe families of Awing, Santa and Eyanchang Manyu – Central, announce the transition into eternity..."
            link="/"
          />

          {/* CARD 2 */}
          <NewsCard
            image="/Mercy-Azoh-Mbi-Heart-Foundation.jpg"
            title="OFFICIAL LAUNCH OF THE MERCY AZOH-MBI HEART FOUNDATION IN OTTAWA"
            description=""
            link="/official-launch-mercy-azoh-mbi-heart-foundation-ottawa"
          />

          {/* CARD 3 */}
          <NewsCard
            image="/imgi_15_IMG_1500-scaled.webp"
            title="OFFICIAL LAUNCH OF THE MERCY AZOH-MBI HEART FOUNDATION IN YAOUNDE"
            description=""
            link="/official-launch-mercy-azoh-mbi-heart-foundation-cameroon"
          />

        </div>
      </div>
    </section>
  );
}


/* ---------------------------
   REUSABLE CARD COMPONENT 
---------------------------- */

type CardProps = {
  image: string;
  title: string;
  description: string;
  link: string;
};

function NewsCard({ image, title, description, link }: CardProps) {
  return (
    <div className="bg-[#d4af37] rounded-2xl overflow-hidden shadow-lg flex flex-col">

      {/* IMAGE */}
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 text-white flex flex-col flex-1">
        <h3 className="text-lg font-bold uppercase">
          {title}
        </h3>

        <p className="text-sm text-gray-100 mt-3 leading-relaxed">
          {description}
        </p>

        {/* BUTTON */}
        <Link href={link} className="mt-6">
          <button className="w-full bg-red-500 hover:bg-red-600 transition py-3 rounded-full font-semibold">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}
