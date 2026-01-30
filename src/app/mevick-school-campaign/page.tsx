"use client";

import Image from "next/image";

export default function MevickSchoolCampaign() {
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

      
 {/* 2 CAMPAIGN TITLE */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 mt-20">
        MEVICK SECONDARY SCHOOL CAMPAIGN 
          <span className="block text-base font-normal text-gray-600 mt-1">
            Yaounde, Cameroon
          </span>
        </h2>

        {/* IMAGE */}
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg mb-10">
          <Image
            src="/Ma-banner.jpeg"
            alt="MEVICK SECONDARY SCHOOL CAMPAIGN"
            fill
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-[17px]">

          <p>
            The <strong>“ Mevick Secondary”</strong> School Sensitization Campaign, organized by the MA Heart Foundation’s Cameroon country office on March 20, 2025, aimed to raise heart health awareness among young people for early prevention. The campaign targeted students from Mevick Bilingual Grammar School in Yaoundé, with key objectives including sensitizing students, establishing future collaborations with the school, increasing public visibility through media, recruiting volunteers, and launching the Cameroon office’s activities for the year.
          </p>

          <p>
           The event had 74 participants, including 60 students, four volunteer medical doctors, and three medical students. Activities from 11:00 AM to 4:00 PM included presentations on heart structure and function, cardiovascular disease risk factors, and common heart conditions like coronary heart disease and sudden cardiac arrest. Practical sessions on blood pressure measurement and cardiopulmonary resuscitation (CPR) were also conducted.


          </p>

          <p>
            Despite challenges such as short planning time and electrical issues, the campaign successfully met its objectives, establishing a working relationship with the school and educating students on cardiovascular health. The campaign served as a crucial test event for the Cameroon office, providing valuable lessons for future activities.


          </p>

        </div>
      </div>
    </section>
  );
}
