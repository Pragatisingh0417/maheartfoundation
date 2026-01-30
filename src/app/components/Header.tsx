"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Header() {
  // ================= STATES =================
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [healthDropdown, setHealthDropdown] = useState(false);
  const [outreachDropdown, setOutreachDropdown] = useState(false);
  const [schoolSub, setSchoolSub] = useState(false);
  const [communitySub, setCommunitySub] = useState(false);
  const [corporateSub, setCorporateSub] = useState(false);
  const [involvedDropdown, setInvolvedDropdown] = useState(false);
  const [newsDropdown, setNewsDropdown] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);

  // 🔑 Hover delay ref (GLOBAL FIX)
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const clearHover = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
  };

  const delayedClose = (fn: () => void) => {
    hoverTimeout.current = setTimeout(fn, 200);
  };

  return (
    <header className="w-full bg-black sticky top-0 z-50">

      {/* ================= TOP ROW ================= */}
      <div className="flex items-center justify-between px-4 py-10 md:px-10 lg:px-20 h-[60px]">
        <Link href="/">
          <Image
            src="/NEW LOGO (1).JPG"
            alt="Foundation Logo"
            width={180}
            height={200}
            className="object-contain max-h-[200px] bg-amber-50 "
          />
        </Link>

        <div className="hidden md:flex items-center gap-10 text-[16px] font-medium px-36">
          <Link href="/contact" className="text-[#b8962e] hover:text-[#d4af37]">
            Contact Us
          </Link>

          <div className="flex items-center gap-8">
            <Social href="https://facebook.com"><FaFacebookF /></Social>
            <Social href="https://linkedin.com"><FaLinkedinIn /></Social>
            <Social href="https://instagram.com"><FaInstagram /></Social>
          </div>
        </div>
      </div>

      {/* ================= MAIN MENU ================= */}
      <div className="hidden md:flex items-center h-[64px] relative bg-amber-50">

        <nav className="absolute left-1/2 -translate-x-1/2 flex gap-10 text-[#b8962e] font-medium">

          <Link href="/">Home</Link>

          {/* ABOUT */}
          {/* ABOUT */}
<Dropdown
  label="About Us"
  href="/about"
  open={aboutDropdown}
  onOpen={() => {
    clearHover();
    setAboutDropdown(true);
  }}
  onClose={() => delayedClose(() => setAboutDropdown(false))}
>
  <MenuLink href="/vision-mission-values">Mission, Vision, Values</MenuLink>
  <MenuLink href="/word-from-mercy">Word From Mercy</MenuLink>
  <MenuLink href="/our-inspiration">Our Inspiration</MenuLink>
  <MenuLink href="/what-we-do">What We Do</MenuLink>
  <MenuLink href="/board-of-directors">Board of Directors</MenuLink>
  <MenuLink href="/our-medical-advisory-team">Medical Advisory Board</MenuLink>
  <MenuLink href="/management-team">Management Team</MenuLink>
  <MenuLink href="/our-partners">Our Partners</MenuLink>
</Dropdown>


          {/* OUTREACH */}
          <div
            className="relative"
            onMouseEnter={() => { clearHover(); setOutreachDropdown(true); }}
            onMouseLeave={() =>
              delayedClose(() => {
                setOutreachDropdown(false);
                setSchoolSub(false);
                setCommunitySub(false);
                setCorporateSub(false);
              })
            }
          >
            <span className="flex items-center gap-1 cursor-pointer">
              Outreach <ChevronDown size={16} />
            </span>

            {outreachDropdown && (
              <div className="absolute top-7 left-0 bg-white shadow-lg rounded-md py-3 w-64 z-50 pointer-events-auto">
                {/* SCHOOL OUTREACH */}
                <SubMenu
                  label="School Outreach"
                  href="school-Outreach"
                  open={schoolSub}
                  onOpen={() => {
                    clearHover();
                    setSchoolSub(true);
                    setCommunitySub(false);
                    setCorporateSub(false);
                  }}
                  onClose={() => delayedClose(() => setSchoolSub(false))}
                >
                  <MenuLink href="/franky-campaign">Franky School Campaign</MenuLink>
                  <MenuLink href="/mevick-school-campaign">Mevick School Campaign</MenuLink>
                  <MenuLink href="/">World Heart Day @ Nil High School</MenuLink>
                  <MenuLink href="/">Lycée Bilingue Mbalmayo</MenuLink>
                </SubMenu>

                {/* COMMUNITY OUTREACH */}
                <SubMenu
                  label="Community Outreach"

                  open={communitySub}
                  onOpen={() => {
                    clearHover();
                    setCommunitySub(true);
                    setSchoolSub(false);
                    setCorporateSub(false);
                  }}
                  onClose={() => delayedClose(() => setCommunitySub(false))}
                >
                  <MenuLink href="/salvation-campaign">Salvation Baptist Church</MenuLink>
                  <MenuLink href="/outreach/community#cpr">Dylet Bible School Campaign</MenuLink>
                  <MenuLink href="/outreach/community#events">Babadjou Rural Campaign</MenuLink>
                </SubMenu>

                {/* CORPORATE OUTREACH */}
                <SubMenu
                  label="Corporate Outreach"
                  open={corporateSub}
                  onOpen={() => {
                    clearHover();
                    setCorporateSub(true);
                    setSchoolSub(false);
                    setCommunitySub(false);
                  }}
                  onClose={() => delayedClose(() => setCorporateSub(false))}
                >
                  <MenuLink href="/outreach/corporate">CSPH</MenuLink>
                  <MenuLink href="/outreach/corporate#book">CAMTEL</MenuLink>
                </SubMenu>


              </div>
            )}
          </div>

          {/* HEART HEALTH */}
          <Dropdown
            label="Heart Health"
            open={healthDropdown}
            onOpen={() => { clearHover(); setHealthDropdown(true); }}
            onClose={() => delayedClose(() => setHealthDropdown(false))}
          >
            <MenuLink href="/what-is-heart-disease">What is Heart Disease?</MenuLink>
            <MenuLink href="/heart-disease-facts-and-statistics">Facts & Statistics</MenuLink>
            <MenuLink href="/tips-for-a-healthy-heart">Healthy Heart Tips</MenuLink>
          </Dropdown>

          {/* GET INVOLVED */}
          <Dropdown
            label="Get Involved"
            open={involvedDropdown}
            onOpen={() => { clearHover(); setInvolvedDropdown(true); }}
            onClose={() => delayedClose(() => setInvolvedDropdown(false))}
          >
            <MenuLink href="/fundraise">Fundraise</MenuLink>
            <MenuLink href="/volunteer">Volunteer</MenuLink>
            <MenuLink href="/make-a-donation">Donate</MenuLink>
          </Dropdown>

          {/* NEWS */}
          <Dropdown
            label="News"
            open={newsDropdown}
            onOpen={() => { clearHover(); setNewsDropdown(true); }}
            onClose={() => delayedClose(() => setNewsDropdown(false))}
          >
            <MenuLink href="/latest-news">Latest News</MenuLink>
            <MenuLink href="/newsletter">Newsletter</MenuLink>
            <MenuLink href="/jobs">Jobs</MenuLink>
          </Dropdown>

        </nav>

        {/* RIGHT ACTIONS */}
        <div className="ml-auto flex items-center gap-6 pr-20">
          <Link href="/make-a-donation">
            <button className="bg-red-600 text-white font-semibold px-7 py-2 rounded-full hover:bg-red-700">
              DONATE
            </button>
          </Link>

          <Link
            href="/login"
            className="font-medium text-white w-20 h-10 flex items-center justify-center rounded-full bg-[#d4af37]"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

/* ================= HELPERS ================= */

function Social({ href, children }: any) {
  return (
    <Link
      href={href}
      target="_blank"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-[#d4af37] text-gray-800 hover:text-white transition"
    >
      {children}
    </Link>
  );
}

function MenuLink({ href, children }: any) {
  return (
    <Link href={href} className="block px-4 py-2 hover:bg-[#d4af37] hover:text-white">
      {children}
    </Link>
  );
}

function Dropdown({ label, open, onOpen, onClose, children }: any) {
  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <span className="flex items-center gap-1 cursor-pointer">
        {label} <ChevronDown size={16} />
      </span>

      {open && (
        <div className="absolute top-7 left-0 bg-white shadow-lg rounded-md py-3 w-56 z-50 pointer-events-auto">
          {children}
        </div>
      )}
    </div>
  );
}

function SubMenu({ label, open, onOpen, onClose, children }: any) {
  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <div className="px-4 py-2 flex justify-between items-center hover:bg-[#d4af37] hover:text-white cursor-pointer">
        {label}
        <ChevronDown size={14} className="-rotate-90" />
      </div>

      {open && (
        <div className="absolute top-0 left-full bg-white shadow-lg rounded-md py-2 w-56 pointer-events-auto">
          {children}
        </div>
      )}
    </div>
  );
}
