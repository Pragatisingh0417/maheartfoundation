"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("FORM SUBMITTED", form);
  };

  return (
    <div className="w-full">
      {/* ⭐ Banner */}
      {/* ⭐ CONTACT BOX – MATCHING PROVIDED DESIGN */}
<section className="max-w-5xl mx-auto my-20 border border-gray-800 text-center">

  {/* Email Row */}
  <div className="border-b border-gray-800 py-6">
    <p className="text-lg">
      <span className="font-semibold">Email:</span>{" "}
      <a
        href="mailto:info@maheartfoundation.org"
        className="text-blue-600 underline"
      >
        info@maheartfoundation.org
      </a>
    </p>
  </div>

  {/* Offices Row */}
  <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-800">

    {/* Canada Office */}
    <div className="py-8 px-6 border-b md:border-b-0 md:border-r border-gray-800">
      <h3 className="font-bold text-lg mb-3">Canada Office</h3>
      <p>
        255 D&apos;Anjou Blvd, Suite 257F,
        <br />
        Châteauguay, Quebec, J6J 2R4
      </p>
      <p className="mt-3">
        Tel: 1-438-795-3481
      </p>
    </div>

    {/* Cameroon Office */}
    <div className="py-8 px-6">
      <h3 className="font-bold text-lg mb-3">Cameroon Office</h3>
      <p>
        Entrée CNPS,
        <br />
        Etug’Ebe, Yaounde
      </p>
      <p className="mt-3">
        Tel: +237 682-084-962
      </p>
    </div>

  </div>

  {/* Get In Touch */}
  <div className="py-10 px-6">
    <h3 className="font-bold text-lg mb-4">Get In Touch</h3>

    <p className="max-w-3xl mx-auto mb-6">
      Please communicate with us if you have any requests or questions
      about the Foundation.
    </p>

    

    {/* CONTACT FORM */}
    <form className="max-w-3xl mx-auto grid grid-cols-1 gap-5 text-left">
      <input
        type="text"
        placeholder="Your Name"
        className="border p-3"
      />

      <input
        type="email"
        placeholder="Your Email"
        className="border p-3"
      />

      <input
        type="text"
        placeholder="Your Phone"
        className="border p-3"
      />

      <textarea
        rows={4}
        placeholder="Your Message"
        className="border p-3"
      />

      <button
        type="submit"
        className="bg-red-600 text-white py-3 font-semibold"
      >
        Submit
      </button>
    </form>
  </div>

</section>

    </div>
  );
}
