"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Header() {
  // Desktop dropdown controls
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [healthDropdown, setHealthDropdown] = useState(false);
  const [involvedDropdown, setInvolvedDropdown] = useState(false);

  // Mobile menu controls
  const [mobileMenu, setMobileMenu] = useState(false);

  // Mobile dropdowns
  const [mAbout, setMAbout] = useState(false);
  const [mHealth, setMHealth] = useState(false);
  const [mInvolved, setMInvolved] = useState(false);

  // Close entire mobile menu on click
  const closeMobile = () => {
    setMobileMenu(false);
    setMAbout(false);
    setMHealth(false);
    setMInvolved(false);
  };

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="flex w-full items-center justify-between px-4 md:px-10 lg:px-20 py-3">

        {/* LOGO */}
        <div className="flex-shrink-0">
          <Link href="/" onClick={closeMobile}>
            <Image
              src="/NEW LOGO (1).JPG"
              alt="Foundation Logo"
              width={180}
              height={90}
              className="object-contain"
            />
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10 text-[15px] font-medium">

          <Link href="/">Home</Link>

          {/* ABOUT */}
          <div
            className="relative"
            onMouseEnter={() => setAboutDropdown(true)}
            onMouseLeave={() => setAboutDropdown(false)}
          >
            <span className="flex items-center gap-1 cursor-pointer">
              <Link href="/about">About Us</Link>
              <ChevronDown size={16} />
            </span>

            {aboutDropdown && (
              <div className="absolute top-7 left-0 bg-white shadow-lg rounded-md py-3 w-56">
                <Link href="/word-from-mercy" className="block px-4 py-2 hover:bg-[#0175C2] hover:text-white">Word From Mercy</Link>
                <Link href="/board-of-directors" className="block px-4 py-2 hover:bg-[#0175C2] hover:text-white">Board of Directors</Link>
                <Link href="/our-medical-advisory-team" className="block px-4 py-2 hover:bg-[#0175C2] hover:text-white">Medical Advisory Board</Link>
                <Link href="/what-we-do" className="block px-4 py-2 hover:bg-[#0175C2] hover:text-white">What We Do</Link>
              </div>
            )}
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

            {healthDropdown && (
              <div className="absolute top-7 left-0 bg-white shadow-lg rounded-md py-3 w-56">
                <Link href="/what-is-heart-disease" className="block px-4 py-2 hover:bg-[#0175C2] hover:text-white">What is Heart Disease?</Link>
                <Link href="/heart-disease-facts-and-statistics" className="block px-4 py-2 hover:bg-[#0175C2] hover:text-white">Facts & Statistics</Link>
                <Link href="/tips-for-a-healthy-heart" className="block px-4 py-2 hover:bg-[#0175C2] hover:text-white">Healthy Heart Tips</Link>
              </div>
            )}
          </div>

          <Link href="/latest-news">Latest News</Link>
          <Link href="/jobs">Jobs</Link>

          {/* GET INVOLVED */}
          <div
            className="relative"
            onMouseEnter={() => setInvolvedDropdown(true)}
            onMouseLeave={() => setInvolvedDropdown(false)}
          >
            <span className="flex items-center gap-1 cursor-pointer">
              <Link href="/get-involved">Get Involved</Link>
              <ChevronDown size={16} />
            </span>

            {involvedDropdown && (
              <div className="absolute top-7 left-0 bg-white shadow-lg rounded-md py-3 w-56">
                <Link href="/fundraise" className="block px-4 py-2 hover:bg-[#0175C2] hover:text-white">Fundraise</Link>
                <Link href="/volunteer" className="block px-4 py-2 hover:bg-[#0175C2] hover:text-white">Volunteer</Link>
              </div>
            )}
          </div>

          {/* DONATE */}
          <Link href="/make-a-donation">
            <button className="bg-[#FF2D2D] text-white font-semibold px-6 py-2 rounded-full hover:bg-red-600 transition">
              DONATE NOW
            </button>
          </Link>
        </nav>

        {/* MOBILE ICON */}
        <button
          className="md:hidden text-black text-3xl"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white w-full shadow-md px-6 transition-all duration-300 overflow-hidden ${
          mobileMenu ? "max-h-[600px] opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >

        {/* HOME */}
        <Link href="/" className="py-3 block text-[17px]" onClick={closeMobile}>
          Home
        </Link>

        {/* ABOUT */}
        <div className="w-full">
          <button
            className="flex justify-between w-full py-3 text-[17px]"
            onClick={() => setMAbout(!mAbout)}
          >
            About Us <ChevronDown size={18} />
          </button>

          {mAbout && (
            <div className="pl-4 py-2 space-y-3">
              <Link href="/word-from-mercy" onClick={closeMobile}>Word From Mercy</Link>  <br/>
              <Link href="/board-of-directors" onClick={closeMobile}>Board of Directors</Link>  <br/>
              <Link href="/our-medical-advisory-team" onClick={closeMobile}>Medical Advisory Board</Link>  <br/>
              <Link href="/what-we-do" onClick={closeMobile}>What We Do</Link>
            </div>
          )}
        </div>

        {/* HEART HEALTH */}
        <div className="w-full">
          <button
            className="flex justify-between w-full py-3 text-[17px]"
            onClick={() => setMHealth(!mHealth)}
          >
            Heart Health <ChevronDown size={18} />
          </button>

          {mHealth && (
            <div className="pl-4 py-2 space-y-3">
              <Link href="/what-is-heart-disease" onClick={closeMobile}>What is Heart Disease?</Link> <br />
              <Link href="/heart-disease-facts-and-statistics" onClick={closeMobile}>Facts & Statistics</Link>  <br/>
              <Link href="/tips-for-a-healthy-heart" onClick={closeMobile}>Healthy Heart Tips</Link>
            </div>
          )}
        </div>

        {/* NEWS */}
        <Link href="/latest-news" className="py-3 block text-[17px]" onClick={closeMobile}>
          Latest News
        </Link>

        {/* JOBS */}
        <Link href="/jobs" className="py-3 block text-[17px]" onClick={closeMobile}>
          Jobs
        </Link>

        {/* GET INVOLVED */}
        <div className="w-full">
          <button
            className="flex justify-between w-full py-3 text-[17px]"
            onClick={() => setMInvolved(!mInvolved)}
          >
            Get Involved <ChevronDown size={18} />
          </button>

          {mInvolved && (
            <div className="pl-4 py-2 space-y-3">
              <Link href="/fundraise" onClick={closeMobile}>Fundraise</Link> <br/>
              <Link href="/volunteer" onClick={closeMobile}>Volunteer</Link>
            </div>
          )}
        </div>

        {/* DONATE */}
        <Link href="/make-a-donation" onClick={closeMobile}>
          <button className="w-full bg-[#FF2D2D] text-white py-3 mt-4 rounded-full font-semibold">
            DONATE NOW
          </button>
        </Link>

      </div>
    </header>
  );
}
