"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import T from "./Translate";

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
      {/* ================= MAIN GRID ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 ">

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

          <p className="text-sm leading-relaxed text-center">
            <T>Devoted to promoting healthy hearts</T>
          </p>

          <div className="flex gap-4 mt-4 text-center px-6">
            <Social href="https://www.facebook.com/people/MA-Heart-Foundation/61574807995896/?sk=about"><FaFacebookF /></Social>
            <Social href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F106902013%2Fadmin%2Fdashboard%2F"><FaLinkedinIn /></Social>
            <Social href="https://instagram.com"><FaInstagram /></Social>
          </div>
        </div>

        {/* COLUMN 2 - ABOUT */}
        <div>
          <h2 className="text-[#d4af37] font-semibold mb-4"><T>About</T></h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[#d4af37]"><T>Home</T></Link></li>
            <li><Link href="/vision-mission-values" className="hover:text-[#d4af37]"><T>Mission, Vision & Values</T></Link></li>
            <li><Link href="/word-from-mercy" className="hover:text-[#d4af37]"><T>Word From Mercy</T></Link></li>
            <li><Link href="/our-inspiration" className="hover:text-[#d4af37]"><T>Our Inspiration</T></Link></li>
            <li><Link href="/what-we-do" className="hover:text-[#d4af37]"><T>What We Do</T></Link></li>
            <li><Link href="/board-of-directors" className="hover:text-[#d4af37]"><T>Board of Directors</T></Link></li>
            <li><Link href="/our-medical-advisory-team" className="hover:text-[#d4af37]"><T>Medical Advisory Board</T></Link></li>
            <li><Link href="/management-team" className="hover:text-[#d4af37]"><T>Management Team</T></Link></li>
            <li><Link href="/our-partners" className="hover:text-[#d4af37]"><T>Our Partners</T></Link></li>
          </ul>
        </div>

        {/* COLUMN 3 - RESOURCE & ACTION */}
        <div>
          <h2 className="text-[#d4af37] font-semibold mb-4"><T>Resources & Action</T></h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/outreach" className="hover:text-[#d4af37]"><T>Outreach</T></Link></li>
            <li><Link href="/heart-health" className="hover:text-[#d4af37]"><T>Heart Health</T></Link></li>
            <li><Link href="/fundraise" className="hover:text-[#d4af37]"><T>Fundraise</T></Link></li>
            <li><Link href="/volunteer" className="hover:text-[#d4af37]"><T>Volunteer</T></Link></li>
            <li><Link href="/make-a-donation" className="hover:text-[#d4af37]"><T>Donate</T></Link></li>
            <li><Link href="/latest-news" className="hover:text-[#d4af37]"><T>Latest News</T></Link></li>
            <li><Link href="/newsletter" className="hover:text-[#d4af37]"><T>Newsletter</T></Link></li>
          </ul>
        </div>

        {/* COLUMN 4 - CONTACT */}
        <div>
          <h2 className="text-[#d4af37] font-semibold mb-4"><T>Contact Us</T></h2>

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
                Entrée CNPS Etug'Ebe, <br /> Yaounde Cameroon
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
          <h2 className="text-[#d4af37] font-semibold mb-4"><T>Newsletter</T></h2>

          <p className="text-sm mb-4">
            <T>Subscribe to receive updates, heart health tips, and Foundation news.</T>
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
              <T>Subscribe</T>
            </button>
          </form>
        </div>

      </div>

      {/* ================= BOTTOM ================= */}
      <div className="mt-16 pt-6 border-t border-[#d4af37]/20 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} The Mercy Azoh-Mbi Heart Foundation. <T>All rights reserved.</T>{" "}<br />
        <T>Designed by</T>{" "}
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

