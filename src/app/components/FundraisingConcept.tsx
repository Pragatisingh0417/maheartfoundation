"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function FundraisingConceptForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    conceptTitle: "",
    description: "",
    timeline: "",
    targetAmount: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Thank you! Your fundraising concept has been submitted.");
  };

  return (
    <section className="bg-gray-50 py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-red-600"
        >
          Submit Your Fundraising Concept
        </motion.h2>

        <p className="mt-4 text-center text-gray-600">
          Have an idea to raise funds for our mission? Share your concept with
          us and our team will review and get back to you.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-white shadow-xl rounded-2xl p-8 space-y-6"
        >
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <InputField
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone & Organization */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <InputField
              label="Organization (Optional)"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
            />
          </div>

          {/* Concept Title */}
          <InputField
            label="Fundraising Concept Title"
            name="conceptTitle"
            value={formData.conceptTitle}
            onChange={handleChange}
            required
          />

          {/* Description */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Detailed Description
            </label>
            <textarea
              name="description"
              rows={5}
              required
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b8962e]"
              placeholder="Describe your fundraising idea, how it works, target audience, etc."
            />
          </div>

          {/* Timeline & Target */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Proposed Timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
            />
            <InputField
              label="Estimated Fundraising Target ($)"
              name="targetAmount"
              value={formData.targetAmount}
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
          <div className="text-center pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-[#b8962e] text-white px-10 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition"
            >
              Submit
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: any;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block mb-2 font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#b8962e]"
      />
    </div>
  );
}