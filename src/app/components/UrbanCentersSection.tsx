"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function UrbanCentersSection() {
    return (
        <section className="w-full">

            {/** ===========================
       **   HERO BANNER
       ** =========================== */}
            <div className="relative w-full h-[600px]">
                <Image
                    src="/heart-banner-image-2.jpg" // replace with your image
                    alt="Urban Centers"
                    fill
                    className="object-cover"
                />

                {/* Blue overlay */}
                <div className="absolute inset-0 bg-blue-900/50"></div>

                {/* TEXT CONTENT */}
                <div className="absolute inset-0 flex flex-col justify-center px-6 max-w-5xl mx-auto text-white">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                        Urban Centers: The Frontline in the Fight <br />
                        Against Cardiovascular Disease
                    </h1>

                    <p className="mt-4 text-base sm:text-lg max-w-3xl">
                        Urban centres, where the vast majority of the world’s population now resides,
                        are the frontline in our fight against cardiovascular disease. By harnessing
                        a wide array of sectors, we can significantly reduce premature loss of life.
                    </p>

                    {/* BUTTON */}
                    <button className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 transition rounded-full text-lg font-semibold max-w-fit">
                        Heart Health Tips
                    </button>

                    {/* STATS ROW */}
                    <div className="flex items-center gap-12 mt-10">

                        {/* Left stat */}
                        <div className="text-white">
                            <Image
                                src="/chart-icon.png"
                                width={60}
                                height={60}
                                alt="chart"
                                className="mb-3"
                            />
                            <p className="text-4xl font-bold">20.5m</p>
                            <p className="text-lg">Deaths every year from CVD</p>
                        </div>

                        {/* Right stat */}
                        <div className="text-white">
                            <p className="text-6xl font-extrabold text-red-400">%</p>
                            <p className="text-4xl font-bold">33%</p>
                            <p className="text-lg">Of all deaths are from CVD</p>
                        </div>

                    </div>
                </div>
            </div>

            {/** ===========================
 **   BOTTOM CARDS (OVERLAPPING)
 ** =========================== */}
            <div className="relative">

                {/* Card wrapper positioned OVER the image */}
                <div className="
      absolute 
      -top-50 
      left-1/2 
      -translate-x-1/2 
      z-20 
      w-full 
      max-w-6xl 
      px-6
      bg-white
  ">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

                        {/* CARD 1 */}
                        <Card
                            title="Volunteer"
                            text="Serving with heart, learning with every step. Volunteering is where kindness becomes action"
                        />

                        {/* CARD 2 */}
                        <Card
                            title="Donate"
                            text="Extend a hand to someone in need. Donate today and change a life."
                        />

                        {/* CARD 3 */}
                        <Card
                            title="Fundraise"
                            text="Help us raise the funds that change lives. Be a part of the mission—every effort counts"
                        />

                    </div>
                </div>

                {/* White background AFTER the cards */}
                <div className="bg-white h-[200px] mt-30"></div>
            </div>


        </section>
    );
}


/* ------------------------------------
   REUSABLE CARD COMPONENT
--------------------------------------*/
function Card({ title, text }: { title: string; text: string }) {
    return (
        <div className="border rounded-2xl shadow-md p-10 text-center">
            <h3 className="text-3xl font-bold mb-4">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{text}</p>
            <div className="mt-6 flex justify-center">
                <ChevronDown className="w-6 h-6 text-gray-700" />
            </div>
        </div>
    );
}
