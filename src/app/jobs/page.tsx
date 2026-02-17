"use client";

import { motion } from "framer-motion";
import { Mail, FileText, Briefcase } from "lucide-react";
import PageWithSidebar from "../components/PageWithSidebar";

export default function AdminAssistantJobPage() {
  return (
    <main className="w-full bg-gray-50">

      {/* ===========================
          PAGE HEADER
      ============================ */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900">
            Administrative Assistant
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Join the Mercy Azoh-Mbi Heart Foundation and help support our growing international mission.
          </p>
        </motion.div>
      </section>
<PageWithSidebar>
      {/* ===========================
          JOB DETAILS CONTENT
      ============================ */}
      <section className="max-w-4xl mx-auto px-6 pb-20">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100"
        >
          {/* ABOUT THE FOUNDATION */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            About the Foundation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Mercy Azoh-Mbi Heart Foundation is a charitable organization founded in Canada in 2018,
            with offices in Montreal (Canada), Yaounde (Cameroon), and soon in Pretoria (South Africa).
          </p>

          {/* POSITION INTRO */}
          <p className="text-gray-700 leading-relaxed mb-8">
            The Foundation is looking for a responsible Administrative Assistant to support management and
            oversee the Foundation’s general administrative activities.
          </p>

          {/* RESPONSIBILITIES */}
          <h3 className="text-xl font-semibold text-red-600 mt-8 mb-4">Key Responsibilities</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Provide support to the country manager, the CEO, and the Foundation’s offices</li>
            <li>Provide support to healthcare professionals in program delivery</li>
            <li>Handle general office tasks and administrative duties</li>
            <li>Manage the Foundation’s CRM system</li>
            <li>Maintain up-to-date donor and stakeholder records</li>
            <li>Answer and direct phone calls</li>
            <li>Organize and schedule appointments</li>
            <li>Plan meetings and take detailed minutes</li>
            <li>Write and distribute correspondence, memos, and emails</li>
            <li>Assist in preparing scheduled reports</li>
            <li>Serve as the first point of contact for clients</li>
          </ul>

          {/* Other Responsibilities */}
          <h3 className="text-xl font-semibold text-red-600 mt-8 mb-4">Other Responsibilities</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Update the Foundation’s website as required</li>
            <li>Manage the Foundation’s social media platforms</li>
          </ul>

          {/* Requirements */}
          <h3 className="text-xl font-semibold text-red-600 mt-8 mb-4">Requirements & Skills</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Proven experience as a secretary or administrative assistant</li>
            <li>Comfortable with the Internet, social media, and website tools</li>
            <li>Ability to quickly master new software</li>
            <li>Proficiency with MS Office (Word, Excel, PowerPoint)</li>
            <li>Excellent time management and ability to prioritize</li>
            <li>Attention to detail and problem-solving skills</li>
            <li>Strong organizational and multitasking abilities</li>
            <li>Excellent communication skills in English and French</li>
            <li>A Bachelor’s degree is an asset</li>
          </ul>

          {/* Apply Section */}
          <div className="mt-12 p-6 bg-red-50 rounded-xl border border-red-200">
            <h3 className="text-xl font-semibold text-red-700 mb-3">
              How to Apply
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              To apply, submit your resumé urgently by email to:
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
