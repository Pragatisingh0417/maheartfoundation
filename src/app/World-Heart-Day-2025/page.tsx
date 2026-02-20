"use client";

import Image from "next/image";
import PageWithSidebar from "../components/PageWithSidebar";

export default function WorldHeartDayCampaignPage() {
    return (
        <main className="w-full">

            {/* ============================
          HERO SECTION
      ============================= */}
            <section className="bg-[#b8962e] text-white py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold">
                    World Heart Day 2025 – “Don’t Miss a Beat!”
                </h1>
                <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto opacity-90">
                    Nil International Bilingual High School, Emana – Yaoundé  <br />
                    September 26, 2025
                </p>
                <p>

                    Organized by: The Mercy Azoh-Mbi Heart Foundation
                </p>
            </section>
<PageWithSidebar>
            {/* ============================
          CONTENT SECTION
      ============================= */}
            <section className="max-w-5xl mx-auto px-6 ">

                {/* White Card */}
                <div className="bg-white p-10 shadow-lg border rounded-2xl">


                    {/* ========== Heading ========== */}
                    <h2 className="text-2xl font-bold text-red-600 mb-6">
                        About the Campaign
                    </h2>

                    {/* ========== Paragraphs ========== */}
                    <p className="text-gray-800 leading-relaxed mb-6">
                        The Mercy Azoh-Mbi Heart Foundation joined the global community to celebrate World
                        Heart Day 2025 under the theme “Don’t Miss a Beat!” — a call to action for everyone to
                        protect their hearts through prevention, early detection, and healthy living.
                    </p>

                    <p className="text-gray-800 leading-relaxed mb-6">
                        This year’s celebration at Nil International Bilingual High School brought together over
                        1,000 enthusiastic students, teachers, and administrators for a morning filled with learning,
                        laughter, and life-saving lessons. With media partners Canal 2 TV and The Guardian Post
                        capturing every moment, the event shone a bright light on the importance of youth
                        engagement in heart health.
                    </p>

                    <h3 className="text-gray-800 leading-relaxed mb-6 font-bold">
                        Highlights of the Day:
                    </h3>
                    <ul>

                        <li> <span className="font-bold">• A Heartfelt Opening:  </span>

                            The Foundation’s Country Manager encouraged students to become
                            ‘health champions’ in their homes and communities.
                        </li>
                        <li> <span className="font-bold">• Health Talks with Heart:  </span>

                            Dr. Sese Ekolle led engaging presentations on how the heart
                            works, risk factors, and lifestyle choices that save lives.
                        </li>
                        <li> <span className="font-bold">• Spotlight on Hypertension: </span>

                            Students learned how high blood pressure silently harms the
                            body and why regular check-ups matter.
                        </li>
                        <li> <span className="font-bold">• Life-Saving Skills in Action:  </span>

                            Dr. Salle and medical student volunteers demonstrated CPR
                            using the DR ABCD algorithm, then guided students through hands-on practice.
                        </li>
                        <li> <span className="font-bold">• Interactive Q&A: </span>
                            Students asked insightful questions about diet, exercise, and heart
                            disease, sparking meaningful conversations.
                        </li>

                    </ul>

                    <h3 className="text-gray-800 leading-relaxed mb-2 font-bold mt-2">
                        Media and Impact:
                    </h3>
                    <p className="text-gray-800 leading-relaxed mb-6"> Coverage by Canal 2 TV and The Guardian Post helped spread the message across Cameroon
                        and beyond, highlighting the Foundation’s leadership in heart health advocacy.</p>

                    <h3 className="text-gray-800 leading-relaxed mb-2 mt-2 font-bold">
                        Looking Ahead:</h3>
                    <p className="text-gray-800 leading-relaxed mb-6">Despite challenges like crowd management and limited time, the campaign proved that
                        when schools, health professionals, and media collaborate, change happens. Future sessions
                        will expand into half- or full-day workshops to deepen impact.</p>

                    <h3 className="text-gray-800 leading-relaxed mb-2 mt-2 font-bold">
                         A Day to Remember:</h3>
                    <p className="text-gray-800 leading-relaxed mb-6">The 2025 World Heart Day campaign was a vibrant success. Students left empowered,
                        teachers inspired, and volunteers fulfilled. The Mercy Azoh-Mbi Heart Foundation remains
                        steadfast in its mission to spread awareness, save lives, and ensure that no heartbeat is
                        missed.</p>
                </div>

                
                    {/* ========== Image ========== */}
                    <div className="w-full mt-10">
                        {/* Replace with real image */}
                        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg mb-10">
                            <Image
                                src="/"
                                alt="World-Heart-Day-2025"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <p className="text-sm text-gray-600 mt-2 italic">
                            Fig 1: A group picture with World-Heart-Day-2025 MA Heart Team, Yaounde - Cameroon
                        </p>
                    </div>
            </section>
</PageWithSidebar>
        </main>
    );
}
