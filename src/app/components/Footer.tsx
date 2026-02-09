"use client";

import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#0b0b0b] text-gray-300 pt-16 pb-10 px-20 md:px-16">

      {/* ================= MAIN GRID ================= */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-20">

        {/* COLUMN 1 */}
        <div>
          <ul className="space-y-3 text-sm leading-relaxed">
            <li><Link href="/mission-vision-values" className="hover:text-[#d4af37]">Mission, Vision & Values</Link></li>
            <li><Link href="/word-from-mercy" className="hover:text-[#d4af37]">Word From Mercy</Link></li>
            <li><Link href="/our-inspiration" className="hover:text-[#d4af37]">Our Inspiration</Link></li>
            <li><Link href="/what-we-do" className="hover:text-[#d4af37]">What We Do</Link></li>
            <li><Link href="/board-of-directors" className="hover:text-[#d4af37]">Board of Directors</Link></li>
            <li><Link href="/our-medical-advisory-team" className="hover:text-[#d4af37]">Medical Advisory Board</Link></li>
            <li><Link href="/management-team" className="hover:text-[#d4af37]">Management Team</Link></li>
          </ul>
        </div>

        {/* COLUMN 2 */}
        <div>
          <ul className="space-y-3 text-sm leading-relaxed">
            <li><Link href="/school-Outreach" className="hover:text-[#d4af37]">School Outreach</Link></li>
            <li><Link href="/community-Outreach" className="hover:text-[#d4af37]">Community Outreach</Link></li>
            <li><Link href="/corporate-Outreach" className="hover:text-[#d4af37]">Corporate Outreach</Link></li>

            <li><Link href="/heart-health" className="hover:text-[#d4af37]">Heart Health</Link></li>
            <li><Link href="/what-is-heart-disease" className="hover:text-[#d4af37]">What is Heart Disease?</Link></li>
            <li><Link href="/heart-disease-facts-and-statistics" className="hover:text-[#d4af37]">Facts & Statistics</Link></li>
            <li><Link href="/tips-for-a-healthy-heart" className="hover:text-[#d4af37]">Healthy Heart Tips</Link></li>

            <li><Link href="/fundraise" className="hover:text-[#d4af37]">Fundraise</Link></li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <ul className="space-y-3 text-sm leading-relaxed">
            <li><Link href="/latest-news" className="hover:text-[#d4af37]">Latest News</Link></li>
            <li><Link href="/newsletter" className="hover:text-[#d4af37]">Newsletter</Link></li>
            <li><Link href="/jobs" className="hover:text-[#d4af37]">Jobs</Link></li>
            <li><Link href="/our-partners" className="hover:text-[#d4af37]">Our Partners</Link></li>
            <li><Link href="/contact" className="hover:text-[#d4af37]">Contact Us</Link></li>
            <li><Link href="/volunteer" className="hover:text-[#d4af37]">Volunteer</Link></li>
            <li><Link href="/make-a-donation" className="hover:text-[#d4af37] font-semibold">Donate</Link></li>
          </ul>
        </div>

      </div>

      {/* ================= BOTTOM ================= */}
      <div className="mt-16 pt-6 border-t border-[#d4af37]/20 text-center text-xs text-gray-400">
        © {new Date().getFullYear()}{" "}
        <a
          href="https://gemwebservices.com/"
          target="_blank"
          className="hover:text-[#d4af37]"
        >
          GEM WEB SERVICES
        </a>{" "}
        All rights reserved.
      </div>
    </footer>
  );
}
