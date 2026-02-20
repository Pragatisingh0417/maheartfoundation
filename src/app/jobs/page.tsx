"use client";

import { motion } from "framer-motion";
import { Mail, FileText, Briefcase } from "lucide-react";
import PageWithSidebar from "../components/PageWithSidebar";

export default function AdminAssistantJobPage() {
  return (
    <main className="w-full bg-gray-50">
 <section className="bg-[#b8962e] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
        Jobs
        </h1>
      </section>
      <PageWithSidebar>

      {/* ===========================
          PAGE HEADER
      ============================ */}
      {/* <section className="max-w-7xl pb-10 mx-auto">
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
      </section> */}
      {/* ===========================
          JOB DETAILS CONTENT
      ============================ */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
  {/* <h2 className="text-3xl font-bold mb-10 text-center">
    Open Positions
  </h2> */}

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    
    {/* Job Card */}
    <div className="bg-white shadow-lg rounded-2xl p-6 border hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-semibold mb-2">
Administrative Assistant
      </h3>

      <p className="text-gray-600 mb-4">
        Join the Mercy Azoh-Mbi Heart Foundation and help support our growing international mission.


      </p>

      <a
        href="/jobs/administrative-assistant"
        className="inline-block bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
      >
        View Details
      </a>
    </div>

  </div>
</section>
</PageWithSidebar>
    </main>
  );
}
