"use client";

import Image from "next/image";

export default function FrankySchoolCampaign() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-10">

        {/* PAGE HEADER */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            School Outreach
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] mt-4 rounded-full"></div>
        </div>

        {/* CAMPAIGN TITLE */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
          FRANKY SECONDARY SCHOOL CAMPAIGN  
          <span className="block text-base font-normal text-gray-600 mt-1">
            Yaounde, Cameroon
          </span>
        </h2>

        {/* IMAGE */}
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg mb-10">
          <Image
            src="/outreach/franky-secondary-school.jpg"
            alt="Franky Secondary School Campaign"
            fill
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-[17px]">

          <p>
            The <strong>“Franky Campaign”</strong> was a heart health
            sensitization event organized by The Mercy Azoh-Mbi Heart
            Foundation’s Cameroon office at Franky Bilingual Secondary and High
            School in Yaounde on April 25, 2025. The campaign aimed to raise
            awareness about heart health and early prevention among young
            people.
          </p>

          <p>
            Fifty participants, including students and volunteer medical
            doctors, attended the event. The activities, held from 10:00 AM to
            1:00 PM, featured presentations on heart structure and function,
            cardiovascular disease risk factors, and common heart diseases.
            Students also engaged in practical sessions on measuring blood
            pressure and performing cardiopulmonary resuscitation (CPR).
          </p>

          <p>
            The campaign successfully established a working relationship with
            the school, and participating students gained valuable knowledge
            about cardiovascular diseases. A key challenge faced was a short
            planning period, which led to hurried preparations. Despite this,
            the campaign was considered a success in achieving its objectives
            and initiating the country office’s activities for 2025.
          </p>

        </div>

      </div>
    </section>
  );
}
