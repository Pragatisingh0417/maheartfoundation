"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#0b0b0b] text-gray-300 pt-16 pb-10 px-6 md:px-16">

      {/* ================= MINI CTA ================= */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="bg-[#111] border border-[#d4af37]/30 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Support Our Mission
            </h3>
            <p className="mt-2 text-gray-400 max-w-xl">
              Your support helps us expand heart health awareness, education,
              and life-saving outreach programs around the world.
            </p>
          </div>

          <Link href="/make-a-donation">
            <button className="px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold transition">
              Donate Now
            </button>
          </Link>
        </div>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">

        {/* ABOUT FOUNDATION */}
        <div>
          <Image
            src="/new-logo.png"
            alt="MA Heart Foundation Logo"
            width={150}
            height={150}
            className="mb-4"
          />

          <p className="text-sm leading-relaxed mb-6">
            The Mercy Azoh-Mbi Heart Foundation is dedicated to improving heart
            health awareness, prevention, and life-saving education across
            communities worldwide, with a special focus on underserved regions.
          </p>

          {/* SOCIALS */}
          <div className="flex items-center gap-4">
            <Link
              href="https://www.facebook.com/people/MA-Heart-Foundation/61574807995896/?sk=about"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#d4af37]/15 hover:bg-[#d4af37]/25 transition"
            >
              <FaFacebookF className="text-[#d4af37]" />
            </Link>

            <Link
              href="https://www.linkedin.com/company/106902013/"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#d4af37]/15 hover:bg-[#d4af37]/25 transition"
            >
              <FaLinkedinIn className="text-[#d4af37]" />
            </Link>
          </div>
        </div>

       

        {/* ABOUT LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-[#d4af37] mb-5">
            About Us
          </h3>

          <ul className="space-y-3 text-sm">
            <li><Link href="/mission-vision-values" className="hover:text-[#d4af37]">Mission, Vision & Values</Link></li>
            <li><Link href="/word-from-mercy" className="hover:text-[#d4af37]">Word From Mercy</Link></li>
            <li><Link href="/our-inspiration" className="hover:text-[#d4af37]">Our Inspiration</Link></li>
            <li><Link href="/what-we-do" className="hover:text-[#d4af37]">What We Do</Link></li>
            <li><Link href="/board-of-directors" className="hover:text-[#d4af37]">Board of Directors</Link></li>
            <li><Link href="/our-medical-advisory-team" className="hover:text-[#d4af37]">Medical Advisory Board</Link></li>
            <li><Link href="/management-team" className="hover:text-[#d4af37]">Management Team</Link></li>
            <li><Link href="/our-partners" className="hover:text-[#d4af37]">Our Partners</Link></li>
                        <li><Link href="/our-partners" className="hover:text-[#d4af37]">Contact us</Link></li>

          </ul>
        </div>
{/* RESOURCES & ACTIONS */}
<div>
  <h3 className="text-lg font-semibold text-[#d4af37] mb-5">
    Resources & Actions
  </h3>

  <ul className="space-y-3 text-sm">
    <li><Link href="/outreach/schools" className="hover:text-[#d4af37]">School Outreach</Link></li>
    <li><Link href="/outreach/community" className="hover:text-[#d4af37]">Community Outreach</Link></li>
    <li><Link href="/outreach/corporate" className="hover:text-[#d4af37]">Corporate Outreach</Link></li>

    <li className="pt-2"><Link href="/heart-health" className="hover:text-[#d4af37]">Heart Health</Link></li>
    <li><Link href="/what-is-heart-disease" className="hover:text-[#d4af37]">What is Heart Disease?</Link></li>
    <li><Link href="/heart-disease-facts-and-statistics" className="hover:text-[#d4af37]">Facts & Statistics</Link></li>
    <li><Link href="/tips-for-a-healthy-heart" className="hover:text-[#d4af37]">Healthy Heart Tips</Link></li>

    <li className="pt-2"><Link href="/fundraise" className="hover:text-[#d4af37]">Fundraise</Link></li>
    <li><Link href="/volunteer" className="hover:text-[#d4af37]">Volunteer</Link></li>
    <li><Link href="/make-a-donation" className="hover:text-[#d4af37]">Donate</Link></li>

    <li className="pt-2"><Link href="/latest-news" className="hover:text-[#d4af37]">Latest News</Link></li>
    <li><Link href="/newsletter" className="hover:text-[#d4af37]">Newsletter</Link></li>
    <li><Link href="/jobs" className="hover:text-[#d4af37]">Jobs</Link></li>
  </ul>
</div>


 {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-[#d4af37] mb-5">
            Contact Us
          </h3>

          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#d4af37]" />
              <span>1-438-795-3481</span>
            </li>

            <li className="flex items-center gap-3 break-all">
              <MdEmail className="text-[#d4af37]" />
              <span>info@maheartfoundation.org</span>
            </li>

            <li className="flex items-start gap-3">
              <FaLocationDot className="text-[#d4af37] mt-1" />
              <span>
                255 D’Anjou Blvd, Suite 257F,
                <br />
                Châteauguay, QC J6J 2R4
              </span>
            </li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-lg font-semibold text-[#d4af37] mb-5">
            Newsletter
          </h3>

          <p className="text-sm text-gray-400 mb-4">
            Subscribe to receive updates on our outreach programs, events, and
            impact.
          </p>

          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 rounded-full bg-[#111] border border-gray-600 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            />

            <button
              type="submit"
              className="w-full bg-[#d4af37] hover:bg-[#b8962e] text-black font-semibold py-2 rounded-full transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="mt-16 pt-6 border-t border-[#d4af37]/20 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} MA Heart Foundation. All rights reserved.
        <br />
        Made by{" "}
        <a
          href="https://gemwebservices.com/"
          target="_blank"
          className="hover:text-[#d4af37]"
        >
          GEM WEB SERVICES
        </a>
      </div>
    </footer>
  );
}
