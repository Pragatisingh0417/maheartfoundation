"use client";

import { motion } from "framer-motion";
import { Mail, FileText, Briefcase } from "lucide-react";
import PageWithSidebar from "../components/PageWithSidebar";
import T from "../components/Translate";

export default function AdminAssistantJobPage() {
  return (
    <main className="w-full bg-gray-50">
      <section className="bg-[#b8962e] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          <T>Jobs</T>
        </h1>
      </section>
      <PageWithSidebar>

        {/* ===========================
            JOB DETAILS CONTENT
        ============================ */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Job Card */}
            <div className="bg-white shadow-lg rounded-2xl p-6 border hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-2">
                <T>Administrative Assistant</T>
              </h3>

              <p className="text-gray-600 mb-4">
                <T>Join the Mercy Azoh-Mbi Heart Foundation and help support our growing international mission.</T>
              </p>

              <a
                href="/jobs/administrative-assistant"
                className="inline-block bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
              >
                <T>View Details</T>
              </a>
            </div>

          </div>
        </section>
      </PageWithSidebar>
    </main>
  );
}

