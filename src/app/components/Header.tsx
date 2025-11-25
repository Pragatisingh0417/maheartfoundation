"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [healthDropdown, setHealthDropdown] = useState(false);
  const [involvedDropdown, setInvolvedDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="flex w-full">

        {/* LEFT BLUE LOGO BLOCK */}
        <div className="bg-[#0175C2] w-[260px] flex justify-center items-center py-3">
          <Link href="/">
            <Image
              src="/heart-logo.png"
              alt="Foundation Logo"
              width={85}
              height={85}
              className="object-contain"
            />
          </Link>
        </div>

        {/* RIGHT NAV */}
        <div className="flex-1 flex justify-between items-center px-40">
          <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium">

            <Link href="/">Home</Link>

            {/* ABOUT US */}
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
            >
              <span className="flex items-center gap-1 cursor-pointer">
                <Link href="/about">About Us</Link>
                <ChevronDown size={16} />
              </span>

              {/* DROPDOWN */}
              <div
                className={`absolute top-7 left-0 bg-white shadow-lg rounded-md py-3 w-56 transition-all ${
                  aboutDropdown ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <Link href="/word-from-mercy" className="block px-4 py-2 hover:bg-[#0175C2] hover:text-white">
                  Word From Mercy
                </Link>
                <Link href="/board-of-directors" className="block px-4 py-2 hover:bg-[#0175C2] hover:text-white">
                  Board of Directors
                </Link>
                <Link href="/our-medical-advisory-team" className="block px-4 py-2 hover:bg-[#0175C2] hover:text-white">
                  Medical Advisory Board
                </Link>
                <Link href="/what-we-do" className="block px-4 py-2 hover:bg-[#0175C2] hover:text-white">
                  What We Do
                </Link>
              </div>
            </div>

            {/* HEART HEALTH */}
            <div
              className="relative"
              onMouseEnter={() => setHealthDropdown(true)}
              onMouseLeave={() => setHealthDropdown(false)}
            >
              <span className="flex items-center gap-1 cursor-pointer">
                <Link href="/heart-health">Heart Health</Link>
                <ChevronDown size={16} />
              </span>

              <div
                className={`absolute top-7 left-0 bg-white shadow-lg rounded-md py-3 w-56 transition-all ${
                  healthDropdown ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <Link href="/what-is-heart-disease" className="block px-4 py-2 hover:bg-[#0175C2] hover:text-white">
                  What is Heart Disease?
                </Link>
                <Link href="/heart-disease-facts-and-statistics" className="block px-4 py-2 hover:bg-[#0175C2] hover:text-white">
                  Facts & Statistics
                </Link>
                <Link href="/tips-for-a-healthy-heart" className="block px-4 py-2 hover:bg-[#0175C2] hover:text-white">
                  Healthy Heart Tips
                </Link>
              </div>
            </div>

            <Link href="/latest-news">Latest News</Link>
            <Link href="/jobs">Jobs</Link>

            {/* GET INVOLVED -- FIXED STATE */}
            <div
              className="relative"
              onMouseEnter={() => setInvolvedDropdown(true)}
              onMouseLeave={() => setInvolvedDropdown(false)}
            >
              <span className="flex items-center gap-1 cursor-pointer">
                <Link href="/get-involved">Get Involved</Link>
                <ChevronDown size={16} />
              </span>

              <div
                className={`absolute top-7 left-0 bg-white shadow-lg rounded-md py-3 w-56 transition-all ${
                  involvedDropdown ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <Link href="/fundraise" className="block px-4 py-2 hover:bg-[#0175C2] hover:text-white">
                  Fundraise
                </Link>
                <Link href="/volunteer" className="block px-4 py-2 hover:bg-[#0175C2] hover:text-white">
                  Volunteer
                </Link>
              </div>
            </div>

            {/* DONATE BUTTON */}
            <Link href="/make-a-donation">
              <button className="bg-[#FF2D2D] text-white font-semibold px-6 py-2 rounded-full hover:bg-red-600 transition">
                DONATE NOW
              </button>
            </Link>

            
          </nav>

          {/* MOBILE MENU TOGGLE */}
          <button
            className="md:hidden text-black text-2xl"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white w-full shadow-md px-10 space-y-4 transition-all duration-300 overflow-hidden ${
          mobileMenu ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link href="/" onClick={() => setMobileMenu(false)} className="block text-lg">
          Home
        </Link>

        {/* ABOUT Mobile */}
        <details>
          <summary className="text-lg cursor-pointer">About Us</summary>
          <div className="ml-4 mt-2 space-y-2">
            <Link href="/word-from-mercy">Word From Mercy</Link>
            <Link href="/board-of-directors">Board of Directors</Link>
            <Link href="/our-medical-advisory-team">Medical Advisory Board</Link>
            <Link href="/what-we-do">What We Do</Link>
          </div>
        </details>

        {/* HEART HEALTH Mobile */}
        <details>
          <summary className="text-lg cursor-pointer">Heart Health</summary>
          <div className="ml-4 mt-2 space-y-2">
            <Link href="/what-is-heart-disease">What is Heart Disease?</Link>
            <Link href="/heart-disease-facts-and-statistics">Facts & Statistics</Link>
            <Link href="/tips-for-a-healthy-heart">Healthy Heart Tips</Link>
          </div>
        </details>

        <Link href="/latest-news" className="block text-lg">Latest News</Link>
        <Link href="/get-involved" className="block text-lg">Get Involved</Link>

        <Link href="/make-a-donation">
          <button className="w-full bg-[#FF2D2D] text-white font-semibold px-6 py-2 rounded-full hover:bg-red-600 transition">
            DONATE NOW
          </button>
        </Link>
        <Link href="/make-a-donation">
          <button className="w-full bg-[#FF2D2D] text-white font-semibold px-6 py-2 rounded-full hover:bg-red-600 transition">
            Contact Us
          </button>
        </Link>
      </div>
    </header>
  );
}
