"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Social({ href, children }: any) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 flex items-center justify-center rounded-full bg-[#d4af37] text-gray-800 hover:text-white transition"
    >
      {children}
    </Link>
  );
}

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#0b0b0b] text-gray-300 pt-16 pb-10 px-6 md:px-16">
      {/* ================= SUPPORT OUR MISSION ================= */}
     

      {/* ================= MAIN GRID ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* COLUMN 1 - ABOUT FOUNDATION */}
        <div>
          <Link href="/">
            <Image
              src="/new-logo.jpg"
              alt="Mercy Azoh-Mbi Heart Foundation Logo"
              width={180}
              height={80}
              className="object-contain mb-4"
              priority
            />
          </Link>

          <p className="text-sm leading-relaxed">
           Devoted to promoting healthy hearts
          </p>

          <div className="flex gap-4 mt-4">
            <Social href="https://www.facebook.com/people/MA-Heart-Foundation/61574807995896/?sk=about" target="blank"><FaFacebookF /></Social>
            <Social href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F106902013%2Fadmin%2Fdashboard%2F" target="blank"><FaLinkedinIn /></Social>
            <Social href="https://instagram.com"><FaInstagram /></Social>
          </div>
        </div>

        {/* COLUMN 2 - ABOUT */}
        <div>
          <h2 className="text-[#d4af37] font-semibold mb-4">About</h2>
          <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-[#d4af37]">Home</Link></li>

            <li><Link href="/vision-mission-values" className="hover:text-[#d4af37]">Mission, Vision & Values</Link></li>
            <li><Link href="/word-from-mercy" className="hover:text-[#d4af37]">Word From Mercy</Link></li>
            <li><Link href="/our-inspiration" className="hover:text-[#d4af37]">Our Inspiration</Link></li>
            <li><Link href="/what-we-do" className="hover:text-[#d4af37]">What We Do</Link></li>
            <li><Link href="/board-of-directors" className="hover:text-[#d4af37]">Board of Directors</Link></li>
            <li><Link href="/our-medical-advisory-team" className="hover:text-[#d4af37]">Medical Advisory Board</Link></li>
            <li><Link href="/management-team" className="hover:text-[#d4af37]">Management Team</Link></li>
                        <li><Link href="/our-partners" className="hover:text-[#d4af37]">Our Partners</Link></li>

          </ul>
        </div>

        {/* COLUMN 3 - RESOURCE & ACTION */}
        <div>
          <h2 className="text-[#d4af37] font-semibold mb-4">Resources & Action</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/school-Outreach" className="hover:text-[#d4af37]">School Outreach</Link></li>
            <li><Link href="/community-Outreach" className="hover:text-[#d4af37]">Community Outreach</Link></li>
            <li><Link href="/corporate-Outreach" className="hover:text-[#d4af37]">Corporate Outreach</Link></li>
            <li><Link href="/heart-health" className="hover:text-[#d4af37]">Heart Health</Link></li>
            <li><Link href="/fundraise" className="hover:text-[#d4af37]">Fundraise</Link></li>
            
            <li><Link href="/volunteer" className="hover:text-[#d4af37]">Volunteer</Link></li>
            <li><Link href="/make-a-donation" className="hover:text-[#d4af37]">Donate</Link></li>
            <li><Link href="/latest-news" className="hover:text-[#d4af37]">Latest News</Link></li>
            <li><Link href="/newsletter" className="hover:text-[#d4af37]">Newsletter</Link></li>
          </ul>
        </div>

        {/* COLUMN 4 - CONTACT */}
        <div>
          <h2 className="text-[#d4af37] font-semibold mb-4">Contact Us</h2>

          <div className="space-y-4 text-sm">

            

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#d4af37]" />
              <a href="mailto:info@maheartfoundation.org" className="hover:text-[#d4af37]">
                info@maheartfoundation.org
              </a>
            </div>
<div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#d4af37] mt-1" />
              <p>
                Entrée CNPS Etug'Ebe, Yaounde Cameroon
              </p>
             
            </div>

             <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#d4af37] mt-1" />
              <p>
               255 D'Anjou Blvd, Suite 257F, Châteauguay, Quebec, Canada J6J 2R4
              </p>
            </div>
          </div>
        </div>

        {/* COLUMN 5 - NEWSLETTER */}
        <div>
          <h2 className="text-[#d4af37] font-semibold mb-4">Newsletter</h2>

          <p className="text-sm mb-4">
            Subscribe to receive updates, heart health tips, and foundation news.
          </p>

          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#d4af37]"
            />
            <button
              type="submit"
              className="bg-[#d4af37] text-black font-semibold py-2 rounded-lg hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* ================= BOTTOM ================= */}
      <div className="mt-16 pt-6 border-t border-[#d4af37]/20 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} The Mercy Azoh-Mbi Heart Foundation. All rights reserved. Designed by{" "} <br />
        <a
          href="https://gemwebservices.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#d4af37]"
        >
          GEM WEB SERVICES
        </a>
      </div>
    </footer>
  );
}
