"use client";

import PageWithSidebar from "@/app/components/PageWithSidebar";
import { motion } from "framer-motion";
import { Mail, FileText, Briefcase } from "lucide-react";
import T from "@/app/components/Translate";

export default function AdministrativeAssistant() {
  return (
    <main className="w-full bg-gray-50">
      <section className="bg-[#b8962e] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          <T>Administrative Assistant</T>
        </h1>
      </section>
      <PageWithSidebar>
        {/* ===========================
            JOB DETAILS CONTENT
        ============================ */}
        <section className="max-w-7xl mx-auto px-6 pb-20">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100"
          >
            {/* ABOUT THE FOUNDATION */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              <T>About the Foundation</T>
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              <T>The Mercy Azoh-Mbi Heart Foundation is a charitable organization founded in Canada in 2018, with offices in Montreal (Canada), Yaounde (Cameroon), and soon in Pretoria (South Africa).</T>
            </p>

            {/* POSITION INTRO */}
            <p className="text-gray-700 leading-relaxed mb-8">
              <T>The Foundation is looking for a responsible Administrative Assistant to support management and oversee the Foundation’s general administrative activities.</T>
            </p>

            {/* RESPONSIBILITIES */}
            <h3 className="text-xl font-semibold text-red-600 mt-8 mb-4"><T>Key Responsibilities</T></h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><T>Provide support to the country manager, the CEO, and the Foundation’s offices</T></li>
              <li><T>Provide support to healthcare professionals in program delivery</T></li>
              <li><T>Handle general office tasks and administrative duties</T></li>
              <li><T>Manage the Foundation’s CRM system</T></li>
              <li><T>Maintain up-to-date donor and stakeholder records</T></li>
              <li><T>Answer and direct phone calls</T></li>
              <li><T>Organize and schedule appointments</T></li>
              <li><T>Plan meetings and take detailed minutes</T></li>
              <li><T>Write and distribute correspondence, memos, and emails</T></li>
              <li><T>Assist in preparing scheduled reports</T></li>
              <li><T>Serve as the first point of contact for clients</T></li>
            </ul>

            {/* Other Responsibilities */}
            <h3 className="text-xl font-semibold text-red-600 mt-8 mb-4"><T>Other Responsibilities</T></h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><T>Update the Foundation’s website as required</T></li>
              <li><T>Manage the Foundation’s social media platforms</T></li>
            </ul>

            {/* Requirements */}
            <h3 className="text-xl font-semibold text-red-600 mt-8 mb-4"><T>Requirements & Skills</T></h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><T>Proven experience as a secretary or administrative assistant</T></li>
              <li><T>Comfortable with the Internet, social media, and website tools</T></li>
              <li><T>Ability to quickly master new software</T></li>
              <li><T>Proficiency with MS Office (Word, Excel, PowerPoint)</T></li>
              <li><T>Excellent time management and ability to prioritize</T></li>
              <li><T>Attention to detail and problem-solving skills</T></li>
              <li><T>Strong organizational and multitasking abilities</T></li>
              <li><T>Excellent communication skills in English and French</T></li>
              <li><T>A Bachelor’s degree is an asset</T></li>
            </ul>

            {/* Apply Section */}
            <div className="mt-12 p-6 bg-red-50 rounded-xl border border-red-200">
              <h3 className="text-xl font-semibold text-red-700 mb-3">
                <T>How to Apply</T>
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <T>To apply, submit your resumé urgently by email to:</T>
              </p>

              <a
                href="mailto:info@maheartfoundation.org"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full shadow hover:bg-red-700 transition"
              >
                <Mail className="w-5 h-5" />
                info@maheartfoundation.org
              </a>
            </div>
          </motion.div>
        </section>
      </PageWithSidebar>
    </main>
  );
}

