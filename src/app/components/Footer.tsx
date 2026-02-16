"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";


function Social({ href, children }: any) {
  return (
    <Link
      href={href}
      target="_blank"
      className="w-9 h-9 flex items-center justify-center rounded-full bg-[#d4af37] text-gray-800 hover:text-white"
    >
      {children}
    </Link>
  );
}


export default function FooterSection() {
  return (
    <footer className="w-full bg-[#0b0b0b] text-gray-300 pt-16 pb-10 px-20 md:px-16">

      {/* ================= MAIN GRID ================= */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-y-10 md:gap-x-20">

         {/* COLUMN 1 */}
        <div>
        <Link href="/">
            <Image
              src="/MaHeartFoundationLogo-final.jpg"
              alt="Mercy Azoh-Mbi Heart Foundation Logo"
              width={180}
              height={180}
              className="object-contain mb-2 h-[80px]"
              priority
            />
          </Link>
 <p>
              In 2009, heart disease radically maimed, mutilated and morphed me
              into a helpless, almost hopeless woman. I was barely 37 years old.
              I deeply mourned the loss of my four limbs for years, but gradually
              began to appreciate the ultimate gift of life itself.
            </p>        
             <div className="flex gap-4 mt-2">
                        <Social href="https://facebook.com"><FaFacebookF /></Social>
                        <Social href="https://linkedin.com"><FaLinkedinIn /></Social>
                        <Social href="https://instagram.com"><FaInstagram /></Social>
                      </div>
            
            </div>


        {/* COLUMN 1 */}
        <div>
          <h2 className="text-[#d4af37]"> About</h2>
          <ul className="space-y-3 text-sm leading-relaxed mt-2">
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
                    <h2 className="text-[#d4af37] "> Resource & Action</h2>

          <ul className="space-y-3 text-sm leading-relaxed mt-2">
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
          <ul className="space-y-3 text-sm leading-relaxed mt-5">
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
        © {new Date().getFullYear()}{" "} The Mercy Azoh-Mbi Heart Foundation. All rights reserved. Designed by: 
        <a
          href="https://gemwebservices.com/"
          target="_blank"
          className="hover:text-[#d4af37]"
        >
          GEM WEB SERVICES
        </a>{" "}
      </div>
    </footer>
  );
}
