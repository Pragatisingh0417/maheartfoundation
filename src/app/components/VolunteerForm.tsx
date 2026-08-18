"use client";
import { useState } from "react";
import T from "./Translate";

export default function VolunteerForm() {
  const [area, setArea] = useState("");
  const [eventType, setEventType] = useState("");

  return (
    <section className="mx-auto md:px-20 py-14 bg-gray-100 max-w-4xl ">
      <h2 className="text-3xl font-bold text-red-600 mb-10">
        <T>Become a Volunteer</T>
      </h2>

      <form className=" grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-200">

        {/* First Name */}
        <div className="flex flex-col">
          <label className="font-semibold mb-2"><T>First Name</T> *</label>
          <input type="text" className="border border-gray-300 rounded-lg p-3" required />
        </div>

        {/* Last Name */}
        <div className="flex flex-col">
          <label className="font-semibold mb-2"><T>Last Name</T> *</label>
          <input type="text" className="border border-gray-300 rounded-lg p-3" required />
        </div>

        {/* Email */}
        <div className="flex flex-col md:col-span-2">
          <label className="font-semibold mb-2"><T>Email</T> *</label>
          <input type="email" className="border border-gray-300 rounded-lg p-3" required />
        </div>

        {/* ================= Area of Interest ================= */}
        <div className="flex flex-col md:col-span-2">
          <label className="font-semibold mb-2"><T>Area of Interest</T> *</label>
          <select
            className="border border-gray-300 rounded-lg p-3"
            value={area}
            onChange={(e) => {
              setArea(e.target.value);
              setEventType("");
            }}
            required
          >
            <option value=""><T>Select Area</T></option>
            <option value="Secretarial Services"><T>Secretarial Services</T></option>
            <option value="Fundraising"><T>Fundraising</T></option>
            <option value="Social Media Marketing"><T>Social Media Marketing</T></option>
            <option value="Web Development"><T>Web Development</T></option>
            <option value="Event Planning"><T>Event Planning</T></option>
            <option value="Program Management"><T>Program Management</T></option>
            <option value="Member Services"><T>Member Services</T></option>
            <option value="Communications"><T>Communications</T></option>
            <option value="event"><T>At an Event</T></option>
            <option value="abroad"><T>Abroad</T></option>
          </select>
        </div>

        {/* ================= IF AT EVENT ================= */}
        {area === "event" && (
          <>
            <div className="flex flex-col md:col-span-2">
              <label className="font-semibold mb-2"><T>Event Details</T></label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-3"
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="font-semibold mb-2"><T>Select Role</T></label>
              <select
                className="border border-gray-300 rounded-lg p-3"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
              >
                <option value=""><T>Select Role</T></option>
                <option><T>Helper</T></option>
                <option><T>Nurse</T></option>
                <option><T>Physician</T></option>
                <option><T>Cardiologist</T></option>
              </select>
            </div>
          </>
        )}

        {/* ================= IF ABROAD ================= */}
        {area === "abroad" && (
          <>
            <div className="flex flex-col md:col-span-2">
              <label className="font-semibold mb-2"><T>Country</T> *</label>
              <input
                type="text"
                className="border border-gray-300 rounded-lg p-3"
                required
              />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="font-semibold mb-2"><T>Select Profession</T> *</label>
              <select
                className="border border-gray-300 rounded-lg p-3"
              >
                <option value=""><T>Select Profession</T></option>
                <option><T>Nurse</T></option>
                <option><T>Physician</T></option>
                <option><T>Public Health Professional</T></option>
                <option><T>Cardiologist</T></option>
                <option><T>Cardiac Surgeon</T></option>
              </select>
            </div>
          </>
        )}

        {/* Message */}
        <div className="flex flex-col md:col-span-2">
          <label className="font-semibold mb-2">
            <T>Tell us about yourself and why you are interested in volunteering</T>
          </label>
          <textarea
            rows={5}
            className="border border-gray-300 rounded-lg p-3"
          ></textarea>
        </div>

        {/* Submit */}
        <button className="md:col-span-2 bg-black hover:bg-gray-900 text-white py-3 rounded-lg font-semibold transition">
          <T>Submit</T>
        </button>

      </form>
    </section>
  );
}

