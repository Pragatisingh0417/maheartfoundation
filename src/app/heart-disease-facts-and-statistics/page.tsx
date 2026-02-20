"use client";

import Image from "next/image";
import Link from "next/link";
import PageWithSidebar from "../components/PageWithSidebar";

export default function FactsAndStatsPage() {
  return (
    <main className="w-full">
      {/* HERO */}
      <section className="">
        <div className="bg-[#b8962e] py-20 px-6 text-center text-white ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Heart Disease Facts & Statistics
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto opacity-90">
            Key facts and figures about cardiovascular disease — worldwide and in the United States.
          </p>
        </div>
      </section>
<PageWithSidebar>      {/* CONTENT + SIDEBAR */}
      <section className="max-w-7xl mx-auto px-6  gap-10">
        {/* MAIN */}
        <article className="lg:col-span-3 space-y-8 text-gray-800 text-base leading-relaxed">

          {/* Worldwide */}
          <div>
            <h2 className="text-2xl font-bold text-red-600">World-wide</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                Cardiovascular diseases (CVDs), commonly referred to as heart disease
                or stroke, are the number 1 cause of death around the world.
              </li>
              <li>
                1 in 3 deaths globally are as a result of CVD; the majority of premature
                heart disease and stroke is preventable.
              </li>
              <li>
                In 2010 CVD cost US$ 863 billion — estimated to rise by 22% to US$ 1,044
                billion by 2030.
              </li>
              <li>
                80% of CVD deaths occur in low- to middle-income countries.
              </li>
            </ul>
          </div>

          {/* In the United States */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">In the United States</h2>
            <p className="mt-4">
              Heart disease is the leading cause of death for both men and women. Below are
              a few key statistics and facts:
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>About 630,000 Americans die from heart disease each year — that's 1 in every 4 deaths.</li>
              <li>Every year roughly 735,000 Americans have a heart attack — ~525,000 are first attacks, 210,000 are recurrent.</li>
              <li>Someone in the U.S. has a heart attack every 40 seconds; each minute more than one person dies from a heart disease-related event.</li>
              <li>Heart disease costs the United States about $200 billion each year (health care, medication, lost productivity).</li>
              <li>Heart disease is the leading cause of death across most racial and ethnic groups; for some groups it is second only to cancer.</li>
            </ul>
          </div>

          {/* Early Action */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Early Action is Important for Heart Attack</h2>
            <p className="mt-4">
              Know the warning signs and act quickly — survival chances improve when treatment begins early.
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Chest pain or discomfort.</li>
              <li>Pain in arms, back, neck, jaw, or upper stomach.</li>
              <li>Shortness of breath.</li>
              <li>Nausea, lightheadedness, or cold sweats.</li>
            </ul>

            <p className="mt-4 text-sm text-gray-600">
              In a 2005 survey most respondents (92%) recognized chest pain as a heart attack symptom, but only 27% were aware of all major symptoms and knew to call emergency services immediately.
            </p>
          </div>

          {/* Callouts / Facts Box */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border-l-4 border-gray-500 p-6 rounded-lg">
              <h3 className="font-semibold text-lg">Fast fact</h3>
              <p className="mt-2 text-sm">
                About 47% of sudden cardiac deaths occur outside a hospital — many people don't act on early warning signs.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-gray-500 p-6 rounded-lg">
              <h3 className="font-semibold text-lg">Economic impact</h3>
              <p className="mt-2 text-sm">
                The global economic burden of CVD is massive and rising, with huge impacts on healthcare systems and productivity.
              </p>
            </div>
          </div>

          {/* Links for further reading */}
          <div className="mt-6">
            <h3 className="text-xl font-bold">More resources</h3>
            <p className="mt-3 text-sm text-gray-700">
              Kindly check out the following for more detailed statistics and breakdowns:
            </p>

            <ul className="mt-3 list-disc pl-6 space-y-2 text-sm">
              <li> <Link href="/heart-disease-facts-and-statistics"></Link> <a className="text-gray-700 underline" href="#">Heart disease facts and stats (global)</a></li>
              <li><a className="text-gray-700 underline" href="#">In the United States — detailed stats</a></li>
              <li> <Link href="/what-is-heart-disease"> </Link> <a className="text-gray-700 underline" href="#">What is heart disease? (overview)</a></li>
              <li><Link href="/heart-health/healthy-heart-tips" className="text-gray-700 underline">Tips for a healthy heart</Link></li>
            </ul>
          </div>
        </article>

        
      </section>
</PageWithSidebar>

      {/* FOOTER CTA */}
      <section className="w-full bg-[#b8962e] text-white py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Want more heart health resources?</h3>
            <p className="mt-1 text-sm">Explore prevention tips, facts, and guides to protect your heart.</p>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/tips-for-a-healthy-heart" className="px-6 py-3 bg-red-500 rounded-full text-white font-semibold">Tips For A Healthy Heart</Link>
            <Link href="/what-is-heart-disease" className="px-6 py-3 border border-white rounded-full text-white">What is heart disease?</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
