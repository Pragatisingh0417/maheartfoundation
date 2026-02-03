"use client";

import { useState } from "react";

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setSuccess("Thank you! We will contact you soon.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err: any) {
      setError(err.message || "Failed to submit form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
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

        {/* Offices */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-800">
          <div className="py-8 px-6 border-b md:border-b-0 md:border-r border-gray-800">
            <h3 className="font-bold text-lg mb-3">Canada Office</h3>
            <p>
              255 D&apos;Anjou Blvd, Suite 257F,
              <br />
              Châteauguay, Quebec, J6J 2R4
            </p>
            <p className="mt-3">Tel: 1-438-795-3481</p>
          </div>

          <div className="py-8 px-6">
            <h3 className="font-bold text-lg mb-3">Cameroon Office</h3>
            <p>
              Entrée CNPS,
              <br />
              Etug’Ebe, Yaounde
            </p>
            <p className="mt-3">Tel: +237 682-084-962</p>
          </div>
        </div>

        {/* Form */}
        <div className="py-10 px-6">
          <h3 className="font-bold text-lg mb-4">Get In Touch</h3>

          <p className="max-w-3xl mx-auto mb-6">
            Please communicate with us if you have any requests or questions
            about the Foundation.
          </p>

          <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto grid grid-cols-1 gap-5 text-left"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="border p-3"
              required
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="border p-3"
              required
            />

            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className="border p-3"
            />

            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="border p-3"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-red-600 text-white py-3 font-semibold disabled:opacity-50"
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            {success && <p className="text-green-600">{success}</p>}
            {error && <p className="text-red-600">{error}</p>}
          </form>
        </div>
      </section>
    </div>
  );
}
