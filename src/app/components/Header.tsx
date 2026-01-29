"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Header() {
  // Desktop dropdown controls
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [healthDropdown, setHealthDropdown] = useState(false);
    const [outreachDropdown, setOutreachDropdown] = useState(false);

  const [involvedDropdown, setInvolvedDropdown] = useState(false);
  const [newsDropdown, setNewsDropdown] = useState(false);


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
    <header className="w-full bg-amber-50 shadow-md sticky top-0 z-50">

      {/* ================= TOP ROW ================= */}
<div className="flex items-center justify-between px-4 md:px-10 lg:px-20 h-[60px]">
        {/* LOGO */}
        <Link href="/" onClick={closeMobile} >
          <Image
            src="/main-logo.png"
            alt="Foundation Logo"
            width={180}
            height={200}
           className="object-contain max-h-[200px] mt-12"
          />

        </Link>

        {/* RIGHT TOP ACTIONS */}
        <div className="hidden md:flex items-center gap-10 text-[16px] font-medium px-36">

          <Link href="/contact" className="hover:text-[#d4af37]">
            Contact Us
          </Link>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-10">

            <Link
              href="https://www.facebook.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#d4af37]/15 hover:bg-[#d4af37]/25 transition"
            >
              <FaFacebookF className="text-gray-800 hover:text-[#d4af37]" />
            </Link>

            <Link
              href="https://www.linkedin.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#d4af37]/15 hover:bg-[#d4af37]/25 transition"
            >
              <FaLinkedinIn className="text-gray-800 hover:text-[#d4af37]" />
            </Link>

            <Link
              href="https://www.instagram.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#d4af37]/15 hover:bg-[#d4af37]/25 transition"
            >
              <FaInstagram className="text-gray-800 hover:text-[#d4af37]" />
            </Link>

          </div>
        </div>


        {/* MOBILE MENU ICON */}
        <button
          className="md:hidden text-black text-3xl"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          ☰
        </button>
      </div>

      {/* ================= BOTTOM ROW ================= */}
      <div className="hidden md:flex items-center h-[64px] relative">

        {/* CENTER MENU — TRUE CENTER OF SCREEN */}
        <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-10 text-[16px] font-medium whitespace-nowrap">

          <Link href="/">Home</Link>

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
              <div className="absolute top-7 left-0 bg-white shadow-lg rounded-md py-3 w-56 z-50">
                <Link href="/word-from-mercy" className="block px-4 py-2 hover:bg-[#d4af37]">
                  Mission, Vission, Values
                </Link>
                <Link href="/word-from-mercy" className="block px-4 py-2 hover:bg-[#d4af37]">
                  Word From Mercy
                </Link>
                <Link href="/word-from-mercy" className="block px-4 py-2 hover:bg-[#d4af37]">
                  Our Inspiration
                </Link>
                <Link href="/what-we-do" className="block px-4 py-2 hover:bg-[#d4af37]">
                  What We Do
                </Link>
                <Link href="/board-of-directors" className="block px-4 py-2 hover:bg-[#d4af37]">
                  Board of Directors
                </Link>
                <Link href="/our-medical-advisory-team" className="block px-4 py-2 hover:bg-[#d4af37]">
                  Medical Advisory Board
                </Link>
                <Link href="/what-we-do" className="block px-4 py-2 hover:bg-[#d4af37]">
                  Management Team
                </Link>
                <Link href="/what-we-do" className="block px-4 py-2 hover:bg-[#d4af37]">
                  Our Partners
                </Link>
              </div>
            )}
          </div>


 {/* OUTREACH */}
          <div className="relative" onMouseEnter={() => setOutreachDropdown(true)} onMouseLeave={() => setOutreachDropdown(false)} >
            <span className="flex items-center gap-1 cursor-pointer">
              <Link href="/contact">Outreach</Link> <ChevronDown size={16} />
            </span> 
            {outreachDropdown && (<div className="absolute top-7 left-0 bg-white shadow-lg rounded-md py-3 w-56">
              <Link href="/latest-news" className="block px-4 py-2 hover:bg-[#d4af37] hover:text-white">School Outreach</Link>
              <Link href="/newsletter" className="block px-4 py-2 hover:bg-[#d4af37] hover:text-white">Community Outreach</Link>
              <Link href="/jobs" className="block px-4 py-2 hover:bg-[#d4af37] hover:text-white">Corporate Outreach</Link>

            </div>)}
          </div>          {/* HEART HEALTH */}
          <div className="relative" onMouseEnter={() => setHealthDropdown(true)} onMouseLeave={() => setHealthDropdown(false)} >
            <span className="flex items-center gap-1 cursor-pointer">
              <Link href="/heart-health">Heart Health</Link> <ChevronDown size={16} /> </span>
            {healthDropdown && (<div className="absolute top-7 left-0 bg-white shadow-lg rounded-md py-3 w-56">
              <Link href="/what-is-heart-disease" className="block px-4 py-2 hover:bg-[#d4af37] hover:text-white">What is Heart Disease?</Link>
              <Link href="/heart-disease-facts-and-statistics" className="block px-4 py-2 hover:bg-[#d4af37] hover:text-white">Facts & Statistics</Link>
              <Link href="/tips-for-a-healthy-heart" className="block px-4 py-2 hover:bg-[#d4af37] hover:text-white">Healthy Heart Tips</Link> </div>)}
          </div>

          {/* GET INVOLVED */}
          <div className="relative" onMouseEnter={() => setInvolvedDropdown(true)} onMouseLeave={() => setInvolvedDropdown(false)} >
            <span className="flex items-center gap-1 cursor-pointer">
              <Link href="/contact">Get Involved</Link> <ChevronDown size={16} />
            </span> {involvedDropdown && (<div className="absolute top-7 left-0 bg-white shadow-lg rounded-md py-3 w-56">
              <Link href="/fundraise" className="block px-4 py-2 hover:bg-[#d4af37] hover:text-white">Fundraise</Link>
              <Link href="/volunteer" className="block px-4 py-2 hover:bg-[#d4af37] hover:text-white">Volunteer</Link>
              <Link href="/make-a-donation" target="blank" className="block px-4 py-2 hover:bg-[#d4af37] hover:text-white">Donate</Link>

            </div>)}
          </div>


          {/* NEWS */}
          <div className="relative" onMouseEnter={() => setNewsDropdown(true)} onMouseLeave={() => setNewsDropdown(false)} >
            <span className="flex items-center gap-1 cursor-pointer">
              <Link href="/contact">News</Link> <ChevronDown size={16} />
            </span> {newsDropdown && (<div className="absolute top-7 left-0 bg-white shadow-lg rounded-md py-3 w-56">
              <Link href="/latest-news" className="block px-4 py-2 hover:bg-[#d4af37] hover:text-white">Latest News</Link>
              <Link href="/newsletter" className="block px-4 py-2 hover:bg-[#d4af37] hover:text-white">Newsletter</Link>
              <Link href="/jobs" className="block px-4 py-2 hover:bg-[#d4af37] hover:text-white">Jobs</Link>

            </div>)}
          </div>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="ml-auto flex items-center gap-6 pr-20">

          <Link href="/make-a-donation">
            <button className="bg-red-600 text-white font-semibold px-7 py-2 rounded-full hover:bg-red-700 transition">
              DONATE
            </button>
          </Link>

          <Link href="/login" className="font-medium hover:text-[#d4af37] w-20 h-10 flex items-center justify-center rounded-full bg-[#d4af37]/15 hover:bg-[#d4af37]/25 transition  ">
            Login
          </Link>

        </div>
      </div>



      {/* ================= MOBILE MENU (UNCHANGED) ================= */}
      { /* keep your existing mobile menu here */}

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white w-full shadow-md px-6 transition-all duration-300 overflow-hidden ${mobileMenu ? "max-h-[600px] opacity-100 py-4" : "max-h-0 opacity-0"
          }`}
      >
        {/* HOME */}
        <Link
          href="/"
          className="py-3 block text-[17px]"
          onClick={closeMobile}
        >
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
              <Link href="/word-from-mercy" onClick={closeMobile}>
                Mission, Vission, Values
              </Link>
              <Link href="/word-from-mercy" onClick={closeMobile}>
                Word From Mercy
              </Link>
              <br />
              <Link href="/word-from-mercy" onClick={closeMobile}>
                Our Inspiration
              </Link>
              <Link href="/board-of-directors" onClick={closeMobile}>
                Board of Directors
              </Link>
              <br />
              <Link href="/our-medical-advisory-team" onClick={closeMobile}>
                Medical Advisory Board
              </Link>
              <br />
              <Link href="/what-we-do" onClick={closeMobile}>
                What We Do
              </Link>
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
              <Link href="/what-is-heart-disease" onClick={closeMobile}>
                What is Heart Disease?
              </Link>
              <br />
              <Link
                href="/heart-disease-facts-and-statistics"
                onClick={closeMobile}
              >
                Facts & Statistics
              </Link>
              <br />
              <Link href="/tips-for-a-healthy-heart" onClick={closeMobile}>
                Healthy Heart Tips
              </Link>
            </div>
          )}
        </div>

        {/* NEWS */}
        <Link
          href="/latest-news"
          className="py-3 block text-[17px]"
          onClick={closeMobile}
        >
          Latest News
        </Link>

        {/* JOBS */}
        <Link
          href="/jobs"
          className="py-3 block text-[17px]"
          onClick={closeMobile}
        >
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
              <Link href="/fundraise" onClick={closeMobile}>
                Fundraise
              </Link>
              <br />
              <Link href="/volunteer" onClick={closeMobile}>
                Volunteer
              </Link>
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
