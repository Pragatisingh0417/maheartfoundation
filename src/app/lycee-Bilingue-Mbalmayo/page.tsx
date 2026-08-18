"use client";

import Image from "next/image";
import PageWithSidebar from "../components/PageWithSidebar";
import T from "../components/Translate";

export default function LycéeCampaignPage() {
  return (
    <main className="w-full">

      {/* ============================
          HERO SECTION
      ============================= */}
      <section className="bg-[#b8962e] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          <T>Lycee de Mbalmayo Campaign</T>
        </h1>
        <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto opacity-90">
          <T>Mbalmayo, Cameroon • November 25, 2025</T>
        </p>
      </section>

      {/* ============================
          CONTENT SECTION
      ============================= */}
      <PageWithSidebar>
        <section className="max-w-5xl mx-auto px-6">

          {/* White Card */}
          <div className="bg-white p-10 shadow-lg border rounded-2xl">

            {/* ========== Heading ========== */}
            <h2 className="text-2xl font-bold text-red-600 mb-6">
              <T>About the Campaign</T>
            </h2>

            {/* ========== Paragraphs ========== */}
            <p className="text-gray-800 leading-relaxed mb-6">
              <T>On November 28, 2025, the Mercy Azoh-Mbi Heart Foundation carried out a screening and sensitisation campaign at Government Bilingual Secondary School, Mbalmayo. The initiative aimed to raise awareness of cardiovascular health, promote early detection, and empower students and staff with lifesaving knowledge.</T>
            </p>

            <p className="text-gray-800 leading-relaxed mb-6">
              <T>Fifty participants, including students and volunteer medical doctors, attended the event. The activities, held from 10:00 AM to 1:00 PM, featured presentations on heart structure and function, cardiovascular disease risk factors, and common heart diseases. Students also engaged in practical sessions on measuring blood pressure and performing cardiopulmonary resuscitation (CPR).</T>
            </p>

            <p className="text-gray-800 leading-relaxed mb-6">
              <T>The campaign successfully established a working relationship with the school, and participating students gained valuable knowledge about cardiovascular diseases. A key challenge faced was a short planning period, which led to hurried preparations. Despite this, the campaign was considered a success in achieving its objectives and initiating the country office’s activities for 2025.</T>
            </p>

            <h3 className="text-gray-800 leading-relaxed mb-2 mt-2 font-bold">
              <T>Key Highlights</T>
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-800">
              <li>
                <T>Over 70 students participated in interactive sensitisation sessions covering heart function, risk factors, warning signs, and prevention strategies.</T>
              </li>
              <li>
                <T>Students received Basic Cardiac Life Support (BCLS) training, learning how to recognise emergencies and perform chest compressions.</T>
              </li>
              <li>
                <T>25 teachers and administrators underwent free medical screening for hypertension, diabetes, obesity, and kidney disease.</T>
              </li>
              <li>
                <T>Results revealed that 53% of participants had elevated blood pressure, including several severe cases requiring urgent follow-up.</T>
              </li>
              <li>
                <T>The campaign fostered enthusiasm among students and gratitude from staff, many of whom had not accessed routine health checks in years.</T>
              </li>
            </ul>

            <h3 className="text-gray-800 leading-relaxed mb-2 mt-2 font-bold">
              <T>Impact</T>
            </h3>
            <p className="text-gray-800 leading-relaxed mb-6">
              <T>This activity strengthened the school’s capacity to respond to heart-related health challenges, especially in a community where cases of cardiac complications—including a student living with a transplanted heart—have been recorded.</T>
            </p>

            <h3 className="text-gray-800 leading-relaxed mb-2 mt-2 font-bold">
              <T>Media Coverage</T>
            </h3>
            <p className="text-gray-800 leading-relaxed mb-6">
              <T>The event was featured on Canal 2 TV, Vision 4 TV, and The Guardian Post, amplifying the message of prevention and awareness.</T>
            </p>

            <h3 className="text-gray-800 leading-relaxed mb-2 mt-2 font-bold">
              <T>Conclusion</T>
            </h3>
            <p className="text-gray-800 leading-relaxed">
              <T>By combining education, screening, and practical training, the Foundation continues to champion health and hope from heart to heart, ensuring that schools and communities are better equipped to fight cardiovascular disease.</T>
            </p>
          </div>

          {/* ========== Image / Video ========== */}
          <div className="w-full mt-10">
            <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg mb-10 mt-10">
              <video
                src="/videos/Mbalmayo 2.mp4"
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls
              />
            </div>
          </div>

        </section>
      </PageWithSidebar>

    </main>
  );
}

