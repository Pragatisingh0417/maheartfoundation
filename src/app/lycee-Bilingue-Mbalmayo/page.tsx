"use client";

import Image from "next/image";

export default function LycéeCampaignPage() {
  return (
    <main className="w-full">

      {/* ============================
          HERO SECTION
      ============================= */}
      <section className="bg-[#b8962e] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
Heart Health Campaign at Lycée de Mbalmayo     </h1>
        {/* <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto opacity-90">
          Yaounde, Cameroon • April 25, 2025
        </p> */}
      </section>

      {/* ============================
          CONTENT SECTION
      ============================= */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        {/* White Card */}
        <div className="bg-white p-10 shadow-lg border rounded-2xl">

        
          {/* ========== Heading ========== */}
          <h2 className="text-2xl font-bold text-red-600 mb-6">
            About the Campaign
          </h2>

          {/* ========== Paragraphs ========== */}
          <p className="text-gray-800 leading-relaxed mb-6">
           On November 28, 2025, the Mercy Azoh-Mbi Heart Foundation carried out a screening and
sensitisation campaign at Government Bilingual Secondary School, Mbalmayo. The initiative
aimed to raise awareness of cardiovascular health, promote early detection, and empower
students and staff with lifesaving knowledge.
          </p>

          <p className="text-gray-800 leading-relaxed mb-6">
            Fifty participants, including students and volunteer medical doctors,
            attended the event. The activities, held from 10:00 AM to 1:00 PM,
            featured presentations on heart structure and function,
            cardiovascular disease risk factors, and common heart diseases.
            Students also engaged in practical sessions on measuring blood
            pressure and performing cardiopulmonary resuscitation (CPR).
          </p>

          <p className="text-gray-800 leading-relaxed mb-6">
            The campaign successfully established a working relationship with the
            school, and participating students gained valuable knowledge about
            cardiovascular diseases. A key challenge faced was a short planning
            period, which led to hurried preparations. Despite this, the campaign
            was considered a success in achieving its objectives and initiating
            the country office’s activities for 2025.
          </p>
 <h3 className="text-gray-800 leading-relaxed mb-2 mt-2 font-bold">
Key Highlights                         </h3>
<ul>

  <li>

    Over 70 students participated in interactive sensitisation sessions covering heart
function, risk factors, warning signs, and prevention strategies.
  </li>
  <li>
     Students received Basic Cardiac Life Support (BCLS) training, learning how to
recognise emergencies and perform chest compressions.
  </li>
  <li>
    25 teachers and administrators underwent free medical screening for hypertension,
diabetes, obesity, and kidney disease.
  </li>
  <li>
    Results revealed that 53% of participants had elevated blood pressure, including
several severe cases requiring urgent follow-up.
  </li>
  <li>

    The campaign fostered enthusiasm among students and gratitude from staff, many
of whom had not accessed routine health checks in years.
  </li>
</ul>

 <h3 className="text-gray-800 leading-relaxed mb-2 mt-2 font-bold">
  Impact
</h3>
<p>
  This activity strengthened the school’s capacity to respond to heart-related health
challenges, especially in a community where cases of cardiac complications—including a
student living with a transplanted heart—have been recorded.
</p>
 <h3 className="text-gray-800 leading-relaxed mb-2 mt-2 font-bold">
  Media Coverage
  </h3>
  <p>
    The event was featured on Canal 2 TV, Vision 4 TV, and The Guardian Post, amplifying the
message of prevention and awareness.
  </p>
 <h3 className="text-gray-800 leading-relaxed mb-2 mt-2 font-bold">
    Conclusion
  </h3>
  <p>
    By combining education, screening, and practical training, the Foundation continues to
champion health and hope from heart to heart, ensuring that schools and communities are
better equipped to fight cardiovascular disease.
  </p>
  </div>

    {/* ========== Image ========== */}
          <div className="w-full mt-10">
            {/* Replace with real image */}
           <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg mb-10">
                     <Image
                       src=""
                       alt="lycée Bilingue Mbalmayo   
"
                       fill
                       className="object-cover"
                     />
                   </div>

            {/* <p className="text-sm text-gray-600 mt-2 italic">
              Fig 1: A group picture with Franky Secondary students and MA Heart Team, Yaounde - Cameroon
            </p> */}
          </div>

      </section>

    </main>
  );
}
