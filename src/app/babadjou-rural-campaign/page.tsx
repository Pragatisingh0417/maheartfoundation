"use client";

import Image from "next/image";

export default function BabadjouRuralCampaign() {
    return (
        <main className="w-full">

            {/* ============================
          HERO SECTION
      ============================= */}
            <section className="bg-[#b8962e] text-white py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold">
Babadjou Health Campaign Summary                </h1>
                {/* <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto opacity-90">
                    Nil International Bilingual High School, Emana – Yaoundé  <br />
                    September 26, 2025
                </p> */}
                {/* <p>

                    Organized by: The Mercy Azoh-Mbi Heart Foundation
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
                        The Mercy Azoh-Mbi Heart Foundation partnered with The Cameroon English-speaking
Medical Students Association (CAMESA) to run a one-week cardiovascular health campaign
BAbadjou, in Bamboutos Division, Cameroon. The team screened 621 people, most of them
rural farmers over 45 years old, with women making up the majority.
                    </p>

                    <p className="text-gray-800 leading-relaxed mb-6">
                        Hypertension was the main finding, with 90 cases identified — a prevalence of 14.5%,
consistent with national figures. Seventy-three were newly diagnosed, including 25 with
asymptomatic hypertension and 48 with mild hypertension. Seventeen were already on
treatment and received refills. No cases of hypertensive nephropathy were detected.
                    </p>

                   
                  

                  
                    <p className="text-gray-800 leading-relaxed mb-6"> 
                      All patients received free medication, lifestyle counselling, and referral to local health
centres. Obesity was observed among some participants, showing clustering of
cardiovascular risk factors.
                        </p>

                    
                    <p className="text-gray-800 leading-relaxed mb-6">
                        Logistics were coordinated smoothly with CAMESA, covering transport, lodging, meals, and
medical supplies. Challenges included transport delays, rainy season terrain, and a lack of
ECG equipment.
                        </p>

                    
                    <p className="text-gray-800 leading-relaxed mb-6">
                        The campaign demonstrated the hidden burden of hypertension in rural communities,
especially among women. It highlighted the importance of community-based screening,
early treatment, and sustained outreach. Recommendations include acquiring independent
screening equipment and strengthening contingency planning.
                        </p>
                        
                    <p className="text-gray-800 leading-relaxed mb-6">

                            Overall, the campaign bridged healthcare gaps and reinforced the need for prevention,
education, and stronger systems to reduce cardiovascular disease in Cameroon.
                        </p>
                </div>
                 {/* ========== Image ========== */}
                    <div className="w-full mt-10">
                        {/* Replace with real image */}
                        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg mb-10">
                            <Image
                                src="/Babadjou 3.jpg"
                                alt="World-Heart-Day-2025"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* <p className="text-sm text-gray-600 mt-2 italic">
                            Fig 1: A group picture with World-Heart-Day-2025 MA Heart Team, Yaounde - Cameroon
                        </p> */}
                    </div>
            </section>

        </main>
    );
}
