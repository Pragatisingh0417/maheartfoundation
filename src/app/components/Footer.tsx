"use client";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#007BFF] text-white pt-14 pb-10 px-6 md:px-16">
      {/* TOP: Logo + Social Icons */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
        <Image
          src="/heart-logo.png"
          alt="Logo"
          width={140}
          height={140}
          className="rounded-lg"
        />

       {/* SOCIALS */}
<div className="flex items-center gap-4">
  <Link
    href="https://www.facebook.com/people/MA-Heart-Foundation/61574807995896/?sk=about"
    target="_blank"
  >
    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition">
      <FaFacebookF className="cursor-pointer hover:text-gray-200 text-xl md:text-base" />
    </div>
  </Link>

  <Link
    href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F106902013%2Fadmin%2Fdashboard%2F"
    target="_blank"
  >
    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition">
      <FaLinkedinIn className="cursor-pointer hover:text-gray-200 text-xl md:text-base" />
    </div>
  </Link>
</div>

      </div>

      {/* DIVIDER */}
      <div className="w-full border-t-2 border-white mb-10"></div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* CONTACT US */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-xl" />
              <span>1-438-795-3481</span>
            </li>

            <li className="flex items-center gap-3 break-all">
              <MdEmail className="text-xl" />
              <span>info@maheartfoundation.org</span>
            </li>

            <li className="flex items-start gap-3">
              <FaLocationDot className="text-2xl mt-1" />
              <span>
                255 D’Anjou Blvd, Suite 257F,
                <br />
                Châteauguay, QC J6J 2R4
              </span>
            </li>
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">About</h3>
          <ul className="space-y-3 text-lg">
            <li className="hover:text-gray-200 cursor-pointer">
              <Link href="/fundraise">Fundraise</Link>
            </li>

            <li className="hover:text-gray-200 cursor-pointer">
              <Link href="/make-a-donation">Make A Donation</Link>
            </li>

            <li className="hover:text-gray-200 cursor-pointer">
              <Link href="/what-we-do">What We Do</Link>
            </li>

            <li className="hover:text-gray-200 cursor-pointer">
              <Link href="/volunteer">Volunteer</Link>
            </li>

            <li className="hover:text-gray-200 cursor-pointer">
              <Link href="/get-involved">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-lg">
            <li className="hover:text-gray-200 cursor-pointer">
              <Link href="/tips-for-a-healthy-heart">Tips For A Healthy Heart</Link>
            </li>

            <li className="hover:text-gray-200 cursor-pointer">
              <Link href="/make-a-donation">Donate</Link>
            </li>

            <li className="hover:text-gray-200 cursor-pointer">
              <Link href="/our-medical-advisory-team">Our Medical Advisory</Link>
            </li>

            

            <li className="hover:text-gray-200 cursor-pointer">
              <Link href="/jobs">Jobs</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center mt-12 text-sm opacity-90">
        © {new Date().getFullYear()} MA Heart Foundation. All rights reserved.
      </div>
    </footer>
  );
}
