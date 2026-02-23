"use client";
import { useState } from "react";

export default function VolunteerForm() {
  const [area, setArea] = useState("");
  const [eventType, setEventType] = useState("");

  return (
    <section className="mx-auto md:px-20 py-14 bg-gray-100 max-w-4xl ">
      <h2 className="text-3xl font-bold text-red-600 mb-10">
        Become a Volunteer
      </h2>

      <form className=" grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-200">

        {/* First Name */}
        <div className="flex flex-col">
          <label className="font-semibold mb-2">First Name *</label>
          <input type="text" className="border border-gray-300 rounded-lg p-3" required />
        </div>

        {/* Last Name */}
        <div className="flex flex-col">
          <label className="font-semibold mb-2">Last Name *</label>
          <input type="text" className="border border-gray-300 rounded-lg p-3" required />
        </div>

        {/* Email */}
        <div className="flex flex-col md:col-span-2">
          <label className="font-semibold mb-2">Email *</label>
          <input type="email" className="border border-gray-300 rounded-lg p-3" required />
        </div>

        {/* ================= Area of Interest ================= */}
        <div className="flex flex-col md:col-span-2">
          <label className="font-semibold mb-2">Area of Interest *</label>
          <select
            className="border border-gray-300 rounded-lg p-3"
            value={area}
            onChange={(e) => {
              setArea(e.target.value);
              setEventType("");
            }}
            required
          >
            <option value="">Select Area</option>
            <option>Secretarial Services</option>
            <option>Fundraising</option>
            <option>Social Media Marketing</option>
            <option>Web Development</option>
            <option>Event Planning</option>
            <option>Program Management</option>
            <option>Member Services</option>
            <option>Communications</option>
            <option value="event">At an Event</option>
            <option value="abroad">Abroad</option>
          </select>
        </div>

        {/* ================= IF AT EVENT ================= */}
        {area === "event" && (
          <>
            <div className="flex flex-col md:col-span-2">
              <label className="font-semibold mb-2">Event Details</label>
              <input
                type="text"
                placeholder="Enter event name or details"
                className="border border-gray-300 rounded-lg p-3"
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="font-semibold mb-2">Select Role</label>
              <select
                className="border border-gray-300 rounded-lg p-3"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
              >
                <option value="">Select Role</option>
                <option>Helper</option>
                <option>Nurse</option>
                <option>Physician</option>
                <option>Cardiologist</option>
              </select>
            </div>
          </>
        )}

        {/* ================= IF ABROAD ================= */}
        {area === "abroad" && (
          <>
            <div className="flex flex-col md:col-span-2">
              <label className="font-semibold mb-2">Country *</label>
              <input
                type="text"
                placeholder="Enter country name"
                className="border border-gray-300 rounded-lg p-3"
                required
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="font-semibold mb-2">Select Profession *</label>
              <select
                className="border border-gray-300 rounded-lg p-3"
              >
                <option value="">Select Profession</option>
                <option>Nurse</option>
                <option>Physician</option>
                <option>Public Health Professional</option>
                <option>Cardiologist</option>
                <option>Cardiac Surgeon</option>
              </select>
            </div>
          </>
        )}

        {/* Message */}
        <div className="flex flex-col md:col-span-2">
          <label className="font-semibold mb-2">
            Tell us about yourself and why you are interested in volunteering
          </label>
          <textarea
            rows={5}
            className="border border-gray-300 rounded-lg p-3"
          ></textarea>
        </div>

        {/* Submit */}
        <button className="md:col-span-2 bg-black hover:bg-gray-900 text-white py-3 rounded-lg font-semibold transition">
          Submit
        </button>

      </form>
    </section>
  );
}
