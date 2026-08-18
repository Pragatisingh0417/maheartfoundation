"use client";

import Image from "next/image";
import PageWithSidebar from "../components/PageWithSidebar";
import T from "../components/Translate";

export default function WorldHeartDayCampaignPage() {
    return (
        <main className="w-full">

            {/* ============================
          HERO SECTION
      ============================= */}
            <section className="bg-[#b8962e] text-white py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold">
                    <T>World Heart Day 2025 – “Don’t Miss a Beat!”</T>
                </h1>
                <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto opacity-90">
                    <T>Nil International Bilingual High School, Emana – Yaoundé</T><br />
                    <T>September 26, 2025</T>
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
                            <T>About the Campaign</T>
                        </h2>

                        {/* ========== Paragraphs ========== */}
                        <p className="text-gray-800 leading-relaxed mb-6">
                            <T>The Mercy Azoh-Mbi Heart Foundation joined the global community to celebrate World Heart Day 2025 under the theme “Don’t Miss a Beat!” — a call to action for everyone to protect their hearts through prevention, early detection, and healthy living.</T>
                        </p>

                        <p className="text-gray-800 leading-relaxed mb-6">
                            <T>This year’s celebration at Nil International Bilingual High School brought together over 1,000 enthusiastic students, teachers, and administrators for a morning filled with learning, laughter, and life-saving lessons. With media partners Canal 2 TV and The Guardian Post capturing every moment, the event shone a bright light on the importance of youth engagement in heart health.</T>
                        </p>

                        <h3 className="text-gray-800 leading-relaxed mb-6 font-bold">
                            <T>Highlights of the Day:</T>
                        </h3>
                        <ul>
                            <li className="mb-2">
                                <span className="font-bold">• <T>A Heartfelt Opening</T>: </span>
                                <T>The Foundation’s Country Manager encouraged students to become ‘health champions’ in their homes and communities.</T>
                            </li>
                            <li className="mb-2">
                                <span className="font-bold">• <T>Health Talks with Heart</T>: </span>
                                <T>Dr. Sese Ekolle led engaging presentations on how the heart works, risk factors, and lifestyle choices that save lives.</T>
                            </li>
                            <li className="mb-2">
                                <span className="font-bold">• <T>Spotlight on Hypertension</T>: </span>
                                <T>Students learned how high blood pressure silently harms the body and why regular check-ups matter.</T>
                            </li>
                            <li className="mb-2">
                                <span className="font-bold">• <T>Life-Saving Skills in Action</T>: </span>
                                <T>Dr. Salle and medical student volunteers demonstrated CPR using the DR ABCD algorithm, then guided students through hands-on practice.</T>
                            </li>
                            <li className="mb-2">
                                <span className="font-bold">• <T>Interactive Q&A</T>: </span>
                                <T>Students asked insightful questions about diet, exercise, and heart disease, sparking meaningful conversations.</T>
                            </li>
                        </ul>

                        <h3 className="text-gray-800 leading-relaxed mb-2 font-bold mt-4">
                            <T>Media and Impact:</T>
                        </h3>
                        <p className="text-gray-800 leading-relaxed mb-6">
                            <T>Coverage by Canal 2 TV and The Guardian Post helped spread the message across Cameroon and beyond, highlighting the Foundation’s leadership in heart health advocacy.</T>
                        </p>

                        <h3 className="text-gray-800 leading-relaxed mb-2 mt-4 font-bold">
                            <T>Looking Ahead:</T>
                        </h3>
                        <p className="text-gray-800 leading-relaxed mb-6">
                            <T>Despite challenges like crowd management and limited time, the campaign proved that when schools, health professionals, and media collaborate, change happens. Future sessions will expand into half- or full-day workshops to deepen impact.</T>
                        </p>

                        <h3 className="text-gray-800 leading-relaxed mb-2 mt-4 font-bold">
                            <T>A Day to Remember:</T>
                        </h3>
                        <p className="text-gray-800 leading-relaxed mb-6">
                            <T>The 2025 World Heart Day campaign was a vibrant success. Students left empowered, teachers inspired, and volunteers fulfilled. The Mercy Azoh-Mbi Heart Foundation remains steadfast in its mission to spread awareness, save lives, and ensure that no heartbeat is missed.</T>
                        </p>
                    </div>

                    {/* ========== Image ========== */}
                    <div className="w-full mt-10">
                        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg mb-10">
                            <video
                                src="/videos/World Heart Day at Nil International 1.mp4"
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

