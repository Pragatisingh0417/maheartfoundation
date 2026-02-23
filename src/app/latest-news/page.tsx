"use client";
import Image from "next/image";
import Link from "next/link";
import PageWithSidebar from "../components/PageWithSidebar";

export default function LatestNewsPage() {
    return (
        <main className="w-full">

            {/* ============================
          HERO SECTION
      ============================= */}
            <section className="bg-[#b8962e] text-white py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold">
                    Latest News
                </h1>
                <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto opacity-90">
                    Updates from our outreach and humanitarian efforts
                </p>
            </section>
<PageWithSidebar>
            {/* ============================
          CONTENT SECTION
      ============================= */}
         <section className="w-full  bg-white">
      <div className="max-w-7xl mx-auto px-6">

       

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
</PageWithSidebar>
        </main>
    );
}

type CardProps = {
  image: string;
  title: string;
  description: string;
  link: string;
};

function NewsCard({ image, title, description, link }: CardProps) {
  return (
    <div className="bg-[#d4af37] rounded-2xl overflow-hidden shadow-lg flex flex-col h-full">

      {/* IMAGE */}
      <div className="relative w-full h-60">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 text-white flex flex-col flex-1">
        <h3 className="text-sm font-bold uppercase">
          {title}
        </h3>

        <p className="text-sm text-gray-100 mt-3 leading-relaxed flex-grow">
          {description}
        </p>

        {/* BUTTON */}
        <Link href={link} className="mt-auto">
          <button className="w-full bg-red-500 hover:bg-red-600 transition py-3 rounded-full font-semibold">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}
