"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Header() {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [healthDropdown, setHealthDropdown] = useState(false);
  const [outreachDropdown, setOutreachDropdown] = useState(false);
  const [involvedDropdown, setInvolvedDropdown] = useState(false);
  const [newsDropdown, setNewsDropdown] = useState(false);

  const [schoolSub, setSchoolSub] = useState(false);
  const [communitySub, setCommunitySub] = useState(false);
  const [corporateSub, setCorporateSub] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMobile = () => setMobileMenu(!mobileMenu);
  const closeMobile = () => setMobileMenu(false);

  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const clearHover = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
  };

  const delayedClose = (fn: () => void) => {
    hoverTimeout.current = setTimeout(fn, 200);
  };

  return (
    <header className="w-full sticky top-0 z-50">
      {/* ================= DESKTOP HEADER GRID ================= */}
      <div className="hidden md:grid grid-cols-[190px_1fr]">

        {/* ===== LEFT BRAND COLUMN (SPANS BOTH ROWS) ===== */}
        <div className="row-span-2 flex flex-col justify-center px-10 bg-black">
          <Link href="/">
            <Image
              src="/MaHeartFoundationLogo-final.jpg"
              alt="Mercy Azoh-Mbi Heart Foundation Logo"
              width={180}
              height={180}
              className="object-contain mb-2"
              priority
            />
          </Link>

          <p className="text-[#d4af37] text-[10px] font-medium leading-tight">
            Health and hope from Heart to Heart
          </p>
        </div>

        {/* ===== TOP RIGHT ROW ===== */}
        <div className="flex items-center justify-end px-10 h-[80px] bg-black gap-8">
          <Link href="/contact" className="text-[#b8962e] hover:text-[#d4af37]">
            Contact Us
          </Link>

          <div className="flex gap-4">
            <Social href="https://facebook.com"><FaFacebookF /></Social>
            <Social href="https://linkedin.com"><FaLinkedinIn /></Social>
            <Social href="https://instagram.com"><FaInstagram /></Social>
          </div>
        </div>

        {/* ===== BOTTOM RIGHT ROW ===== */}
        <div className="flex items-center h-[64px] bg-amber-50 px-10">

          {/* CENTER NAV */}
          <nav className="mx-auto flex gap-10 text-[#b8962e] font-medium">

            <Link href="/">Home</Link>

            <Dropdown label="About Us" open={aboutDropdown}
              onOpen={() => { clearHover(); setAboutDropdown(true); }}
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
  onMouseEnter={() => {
    clearHover();
    setOutreachDropdown(true);
  }}
  onMouseLeave={() =>
    delayedClose(() => {
      setOutreachDropdown(false);
      setSchoolSub(false);
      setCommunitySub(false);
      setCorporateSub(false);
    })
  }
>
  <span className="flex items-center gap-1 cursor-pointer text-[#b8962e] hover:text-[#d4af37]">
    Outreach <ChevronDown size={16} />
  </span>

  {outreachDropdown && (
    <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-xl py-3 w-64 z-50">

      {/* SCHOOL OUTREACH */}
      <SubMenu
        label="School Outreach"
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
        <MenuLink href="/">
          Babadjou Rural Campaign
        </MenuLink>
        <MenuLink href="/">Dylet Bible School Campaign</MenuLink>
         <MenuLink href="/">Babadjou Rural Campaign</MenuLink>
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


            <Dropdown label="Heart Health" open={healthDropdown}
              onOpen={() => { clearHover(); setHealthDropdown(true); }}
              onClose={() => delayedClose(() => setHealthDropdown(false))}
            >
              <MenuLink href="/what-is-heart-disease">What is Heart Disease?</MenuLink>
              <MenuLink href="/heart-disease-facts-and-statistics">Facts & Statistics</MenuLink>
              <MenuLink href="/tips-for-a-healthy-heart">Healthy Heart Tips</MenuLink>
            </Dropdown>

            <Dropdown label="Get Involved" open={involvedDropdown}
              onOpen={() => { clearHover(); setInvolvedDropdown(true); }}
              onClose={() => delayedClose(() => setInvolvedDropdown(false))}
            >
              <MenuLink href="/fundraise">Fundraise</MenuLink>
              <MenuLink href="/volunteer">Volunteer</MenuLink>
              <MenuLink href="/make-a-donation">Donate</MenuLink>
            </Dropdown>

            <Dropdown label="News" open={newsDropdown}
              onOpen={() => { clearHover(); setNewsDropdown(true); }}
              onClose={() => delayedClose(() => setNewsDropdown(false))}
            >
              <MenuLink href="/latest-news">Latest News</MenuLink>
              <MenuLink href="/newsletter">Newsletter</MenuLink>
              <MenuLink href="/jobs">Jobs</MenuLink>
            </Dropdown>
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="ml-auto flex items-center gap-4">
            <Link href="/make-a-donation">
              <button className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700">
                DONATE
              </button>
            </Link>

            <Link
              href="/login"
              className="bg-[#d4af37] px-6 py-2 rounded-full font-semibold"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* ================= MOBILE HEADER ================= */}
      <div className="md:hidden flex items-center justify-between bg-black px-4 h-[72px]">
        <Link href="/">
          <Image
            src="/MaHeartFoundationLogo-final.jpg"
            alt="Logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </Link>

        <button onClick={toggleMobile} className="text-white text-3xl">
          ☰
        </button>
      </div>

      {mobileMenu && (
  <div className="fixed inset-0 bg-black text-white z-50 md:hidden overflow-y-auto">
    <div className="px-6 py-6">
      <div className="flex justify-between items-center mb-6">
        <span className="text-lg font-semibold">Menu</span>
        <button onClick={closeMobile} className="text-2xl">✕</button>
      </div>

      <MobileLink href="/" onClick={closeMobile}>Home</MobileLink>

      <MobileAccordion label="About Us">
        <MobileLink href="/vision-mission-values" onClick={closeMobile}>Mission, Vision, Values</MobileLink>
        <MobileLink href="/word-from-mercy" onClick={closeMobile}>Word From Mercy</MobileLink>
        <MobileLink href="/our-inspiration" onClick={closeMobile}>Our Inspiration</MobileLink>
        <MobileLink href="/what-we-do" onClick={closeMobile}>What We Do</MobileLink>
        <MobileLink href="/board-of-directors" onClick={closeMobile}>Board of Directors</MobileLink>
      </MobileAccordion>

      <MobileAccordion label="Outreach">
  <MobileAccordion label="School Outreach" nested>
    <MobileLink href="/franky-campaign" onClick={closeMobile}>
      Franky School Campaign
    </MobileLink>
    <MobileLink href="/mevick-school-campaign" onClick={closeMobile}>
      Mevick School Campaign
    </MobileLink>
  </MobileAccordion>

  <MobileAccordion label="Community Outreach" nested>
    <MobileLink href="/salvation-campaign" onClick={closeMobile}>
      Salvation Baptist Church
    </MobileLink>
    <MobileLink href="/outreach/community#events" onClick={closeMobile}>
      Babadjou Rural Campaign
    </MobileLink>
  </MobileAccordion>

  <MobileAccordion label="Corporate Outreach" nested>
    <MobileLink href="/outreach/corporate" onClick={closeMobile}>
      CSPH
    </MobileLink>
    <MobileLink href="/outreach/corporate#book" onClick={closeMobile}>
      CAMTEL
    </MobileLink>
  </MobileAccordion>
</MobileAccordion>


      <MobileAccordion label="Heart Health">
        <MobileLink href="/what-is-heart-disease" onClick={closeMobile}>What is Heart Disease?</MobileLink>
        <MobileLink href="/heart-disease-facts-and-statistics" onClick={closeMobile}>Facts & Statistics</MobileLink>
        <MobileLink href="/tips-for-a-healthy-heart" onClick={closeMobile}>Healthy Heart Tips</MobileLink>
      </MobileAccordion>

      <MobileAccordion label="Get Involved">
        <MobileLink href="/fundraise" onClick={closeMobile}>Fundraise</MobileLink>
        <MobileLink href="/volunteer" onClick={closeMobile}>Volunteer</MobileLink>
        <MobileLink href="/make-a-donation" onClick={closeMobile}>Donate</MobileLink>
      </MobileAccordion>

      <MobileAccordion label="News">
        <MobileLink href="/latest-news" onClick={closeMobile}>Latest News</MobileLink>
        <MobileLink href="/newsletter" onClick={closeMobile}>Newsletter</MobileLink>
        <MobileLink href="/jobs" onClick={closeMobile}>Jobs</MobileLink>
      </MobileAccordion>

      {/* ACTION BUTTON */}
      <Link href="/make-a-donation" onClick={closeMobile}>
        <button className="w-full mt-6 bg-red-600 py-3 rounded-full font-semibold">
          DONATE
        </button>
      </Link>
    </div>
  </div>
)}

    </header>
  );
}

/* ================= HELPERS ================= */

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

function MenuLink({ href, children }: any) {
  return (
    <Link href={href} className="block px-4 py-2 hover:bg-[#d4af37] hover:text-white">
      {children}
    </Link>
  );
}

function Dropdown({
  label,
  open,
  onOpen,
  onClose,
  children,
}: any) {
  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        className="flex items-center gap-1 cursor-pointer text-[#b8962e] hover:text-[#d4af37]"
      >
        {label}
        <ChevronDown size={16} />
      </button>

      {open && (
        <div className="absolute left-1/2 top-8 -translate-x-1/2 bg-white shadow-xl rounded-xl py-3 w-64 z-50">
          {children}
        </div>
      )}
    </div>
  );
}


function MobileLink({ href, children, onClick }: any) {
  return (
    <Link href={href} onClick={onClick} className="block py-3 border-b border-white/10">
      {children}
    </Link>
  );
}
function MobileAccordion({ label, children }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-3 text-lg"
      >
        {label}
        <ChevronDown
          size={18}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && <div className="pl-4 pb-2">{children}</div>}
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
      <div className="px-4 py-2 flex justify-between items-center cursor-pointer hover:bg-[#d4af37] hover:text-white">
        {label}
        <ChevronDown size={14} className="-rotate-90" />
      </div>

      {open && (
        <div className="absolute top-0 left-full bg-white shadow-xl rounded-xl py-2 w-64 z-50">
          {children}
        </div>
      )}
    </div>
  );
}
