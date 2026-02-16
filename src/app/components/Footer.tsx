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
      <div className="max-w-7xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-[#111] to-[#0f0f0f] border border-[#d4af37]/30 rounded-2xl px-8 py-8 md:px-12 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Support Our Mission
            </h2>
            <p className="text-gray-400 max-w-xl text-sm md:text-base">
              Your support helps us expand heart health awareness, testing,  education, and life-saving
              outreach programs around the world.
            </p>
          </div>

          {/* RIGHT BUTTON */}
          <Link
            href="/make-a-donation"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition duration-300 whitespace-nowrap"
          >
            Donate Now
          </Link>

        </div>
      </div>

      {/* ================= MAIN GRID ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* COLUMN 1 - ABOUT FOUNDATION */}
        <div>
          <Link href="/">
            <Image
              src="/MaHeartFoundationLogo-final.jpg"
              alt="Mercy Azoh-Mbi Heart Foundation Logo"
              width={180}
              height={80}
              className="object-contain mb-4"
              priority
            />
          </Link>

          <p className="text-sm leading-relaxed">
            In 2009, heart disease radically maimed, mutilated and morphed me
            into a helpless, almost hopeless woman. I was barely 37 years old.
            I deeply mourned the loss of my four limbs for years, but gradually
            began to appreciate the ultimate gift of life itself.
          </p>

          <div className="flex gap-4 mt-4">
            <Social href="https://facebook.com"><FaFacebookF /></Social>
            <Social href="https://linkedin.com"><FaLinkedinIn /></Social>
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
          </ul>
        </div>

        {/* COLUMN 3 - RESOURCE & ACTION */}
        <div>
          <h2 className="text-[#d4af37] font-semibold mb-4">Resource & Action</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/school-Outreach" className="hover:text-[#d4af37]">School Outreach</Link></li>
            <li><Link href="/community-Outreach" className="hover:text-[#d4af37]">Community Outreach</Link></li>
            <li><Link href="/corporate-Outreach" className="hover:text-[#d4af37]">Corporate Outreach</Link></li>
            <li><Link href="/heart-health" className="hover:text-[#d4af37]">Heart Health</Link></li>
            <li><Link href="/fundraise" className="hover:text-[#d4af37]">Fundraise</Link></li>
            <li><Link href="/latest-news" className="hover:text-[#d4af37]">Latest News</Link></li>
            <li><Link href="/newsletter" className="hover:text-[#d4af37]">Newsletter</Link></li>
            <li><Link href="/volunteer" className="hover:text-[#d4af37]">Volunteer</Link></li>
            <li><Link href="/make-a-donation" className="hover:text-[#d4af37] font-semibold">Donate</Link></li>
          </ul>
        </div>

        {/* COLUMN 4 - CONTACT */}
        <div>
          <h2 className="text-[#d4af37] font-semibold mb-4">Contact Us</h2>

          <div className="space-y-4 text-sm">

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#d4af37] mt-1" />
              <p>
                Monte Centre Entre CNPS, Yaounde


              </p>
            </div>

            

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#d4af37]" />
              <a href="mailto:info@maheartfoundation.org" className="hover:text-[#d4af37]">
                info@maheartfoundation.org
              </a>
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
        © {new Date().getFullYear()} The Mercy Azoh-Mbi Heart Foundation. All rights reserved. Designed by{" "}
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
