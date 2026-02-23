"use client";
import { motion } from "framer-motion";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Header() {
  const pathname = usePathname();

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-[999]">

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:grid grid-cols-[220px_1fr]">

        {/* LOGO COLUMN */}
       <div className="row-span-2 flex flex-col justify-center px-2 bg-black">
  <Link href="/">
    <Image
      src="/new-logo.jpg"
      alt="Logo"
      width={0}
      height={0}
      sizes="100vw"
      className="h-[140px] w-auto object-contain"
      priority
    />
  </Link>
</div>


        {/* TOP RIGHT BAR */}
        
<div className="flex items-center justify-between px-10 h-[80px] bg-black">

  {/* Left Empty Space (optional if needed for balance) */}
  <div className="w-1/6" />

  {/* Center Text */}
  <div className="w-1/3 text-center">
    <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className=" text-[26px] text-white flex items-center"
                  style={{
                    fontFamily: `"Bradley Hand ITC", "Bradley Hand", cursive`,
                  }}
                >
                  Devoted to promoting healthy hearts.
                </motion.h3>
  </div>

  {/* Right Side Content */}
  <div className="w-1/3 flex items-center justify-end gap-8">
    <Link href="/contact" className="text-[#d4af37] text-[20px] hover:text-white">
      Contact Us
    </Link>

    <div className="flex gap-4">
      <Social href="https://www.facebook.com/people/MA-Heart-Foundation/61574807995896/?sk=about" target="blank">
        <FaFacebookF />
      </Social>
      <Social href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F106902013%2Fadmin%2Fdashboard%2F" target="blank">
        <FaLinkedinIn />
      </Social>
      <Social href="#">
        <FaInstagram />
      </Social>
    </div>
  </div>

</div>


        {/* NAVIGATION BAR */}
        <div className="flex items-center h-[70px] bg-amber-50 px-10 relative">

          <nav className="mx-auto flex gap-12 font-semibold tracking-wide">

            <MainLink href="/" label="HOME" pathname={pathname} />

            <Dropdown
              label="ABOUT US"
              active={activeMenu === "about"}
              setActive={() => setActiveMenu("about")}
              clear={() => setActiveMenu(null)}
            >
              <MenuLink href="/vision-mission-values">Vision, Mission, Values</MenuLink>
              <MenuLink href="/word-from-mercy">A Word From Mercy</MenuLink>
              <MenuLink href="/our-inspiration">Our Inspiration</MenuLink>
              <MenuLink href="/what-we-do">What We Do</MenuLink>
              <MenuLink href="/board-of-directors">Board Of Directors</MenuLink>
              <MenuLink href="/our-medical-advisory-team">Medical Advisory Board</MenuLink>
              <MenuLink href="/management-team">Management Team</MenuLink>
              <MenuLink href="/our-partners">Our Partners</MenuLink>
            </Dropdown>

            <Dropdown
              label="GET INVOLVED"
              active={activeMenu === "involved"}
              setActive={() => setActiveMenu("involved")}
              clear={() => setActiveMenu(null)}
            >
              <MenuLink href="/fundraise">Fundraise</MenuLink>
              <MenuLink href="/volunteer">Volunteer</MenuLink>
              <MenuLink href="/make-a-donation">Donate</MenuLink>
            </Dropdown>

            {/* OUTREACH */}
            <Dropdown
              label="OUTREACH"
              active={activeMenu === "outreach"}
              setActive={() => setActiveMenu("outreach")}
              clear={() => {
                setActiveMenu(null);
                setActiveSubMenu(null);
              }}
            >
              <SubMenu
                label="School Outreach"
                active={activeSubMenu === "school"}
                setActive={() => setActiveSubMenu("school")}
              >
                <MenuLink href="/franky-campaign">Franky School Campaign</MenuLink>
                <MenuLink href="/mevick-school-campaign">Mevick School Campaign</MenuLink>
                                <MenuLink href="/World-Heart-Day-2025">World Heart Day @ Nil High School</MenuLink>

                <MenuLink href="/lycee-Bilingue-Mbalmayo">Lycée Bilingue Mbalmayo</MenuLink>

              </SubMenu>

              <SubMenu
                label="Community Outreach"
                active={activeSubMenu === "community"}
                setActive={() => setActiveSubMenu("community")}
              >

                <MenuLink href="/salvation-campaign">Salvation Baptist Church</MenuLink>
                                <MenuLink href="/dylet-bible-school-campaign">Dylet Bible School Campaign</MenuLink>
                                                <MenuLink href="/babadjou-rural-campaign">Babadjou Rural Campaign</MenuLink>


              </SubMenu>

              <SubMenu
                label="Corporate Outreach"
                active={activeSubMenu === "corporate"}
                setActive={() => setActiveSubMenu("corporate")}
              >
                <MenuLink href="/">CSPH</MenuLink>
                                <MenuLink href="/">CAMTEL</MenuLink>

              </SubMenu>
            </Dropdown>

            <Dropdown
              label="HEART HEALTH"
              active={activeMenu === "health"}
              setActive={() => setActiveMenu("health")}
              clear={() => setActiveMenu(null)}
            >
              <MenuLink href="/what-is-heart-disease">What Is Heart Disease?</MenuLink>
              <MenuLink href="/heart-disease-facts-and-statistics">Facts & Statistics</MenuLink>
              <MenuLink href="/tips-for-a-healthy-heart">Healthy Heart Tips</MenuLink>
            </Dropdown>

            <Dropdown
              label="NEWS"
              active={activeMenu === "news"}
              setActive={() => setActiveMenu("news")}
              clear={() => setActiveMenu(null)}
            >
              <MenuLink href="/latest-news">Latest News</MenuLink>
              <MenuLink href="/newsletter">Newsletter</MenuLink>
              <MenuLink href="/jobs">Jobs</MenuLink>
            </Dropdown>
          </nav>

          {/* RIGHT CTA BUTTONS (RESTORED) */}
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

      {/* MOBILE */}
      <div className="lg:hidden flex items-center justify-between bg-black px-4 h-[90px]">
        <Image src="/new-logo.jpg" alt="Logo" width={280} height={20} className="h-[80px]" />
        <button onClick={() => setMobileOpen(true)} className="text-white text-3xl">☰</button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 bg-black text-white z-[999] overflow-y-auto p-6">
          <button onClick={() => setMobileOpen(false)} className="mb-6">✕</button>

          <MobileAccordion label="ABOUT US">
            <MobileLink href="/vision-mission-values">Mission, Vision, Values</MobileLink>
            <MobileLink href="/word-from-mercy">Word From Mercy</MobileLink>
            <MobileLink href="/our-inspiration">Our Inspiration</MobileLink> 
            <MobileLink href="/what-we-do">What We Do</MobileLink>
             <MobileLink href="/board-of-directors">Board of Directors</MobileLink> 
             <MobileLink href="/our-medical-advisory-team">Medical Advisory Board</MobileLink>
              <MobileLink href="/management-team">Management Team</MobileLink> 
            <MobileLink href="/our-partners">Our Partners</MobileLink>
          </MobileAccordion>

          <MobileAccordion label="GET INVOLVED">
            <MobileLink href="/fundraise">Fundraise</MobileLink>
            <MobileLink href="/volunteer">Volunteer</MobileLink>
                        <MobileLink href="/make-a-donation">Donate</MobileLink>

          </MobileAccordion>

          <MobileAccordion label="OUTREACH">
            <MobileLink href="/franky-campaign">Franky School Campaign</MobileLink>
            <MobileLink href="/mevick-school-campaign">Mevick School Campaign</MobileLink>
            <MobileLink href="/World-Heart-Day-2025">World Heart Day @ Nil High School</MobileLink>
             <MobileLink href="/lycee-Bilingue-Mbalmayo">Lycee Bilingue Mbalmayo</MobileLink>
<MobileLink href="/salvation-campaign">Salvation Baptist Church</MobileLink>
 <MobileLink href="/babadjou-rural-campaign"> Babadjou Rural Campaign </MobileLink> 
<MobileLink href="/dylet-bible-school-campaign">Dylet Bible School Campaign</MobileLink> 
<MobileLink href="/">CSPH</MobileLink>
 <MobileLink href="/">CAMTEL</MobileLink>
          </MobileAccordion>

          <MobileAccordion label="HEART HEALTH">
            <MobileLink href="/what-is-heart-disease">What Is Heart Disease?</MobileLink>
            <MobileLink href="/heart-disease-facts-and-statistics">Facts & Statistics</MobileLink>
             <MobileLink href="/tips-for-a-healthy-heart">Healthy Heart Tips</MobileLink>
          </MobileAccordion>

          <MobileAccordion label="NEWS">
<MobileLink href="/latest-news">Latest News</MobileLink>
 <MobileLink href="/newsletter">Newsletter</MobileLink>
  <MobileLink href="/jobs">Jobs</MobileLink>         
   </MobileAccordion>
   
        </div>
      )}
    </header>
  );
}

/* COMPONENTS */

function Dropdown({ label, active, setActive, clear, children }: any) {
  return (
    <div
      className="relative"
      onMouseEnter={setActive}
      onMouseLeave={clear}
    >
      <button className="uppercase text-red-600 font-semibold flex items-center gap-1 h-[70px]">
        {label}
        <ChevronDown size={16} />
      </button>

      {active && (
        <div className="absolute top-full left-0 bg-white shadow-2xl rounded-2xl py-4 w-64 z-50">
          {children}
        </div>
      )}
    </div>
  );
}

function SubMenu({ label, active, setActive, children }: any) {
  return (
    <div className="relative" onMouseEnter={setActive}>
      <div className="px-4 py-2 text-red-600 font-medium flex justify-between items-center hover:bg-[#d4af37] hover:text-white cursor-pointer">
        {label}
        <ChevronDown size={14} className="-rotate-90" />
      </div>

      {active && (
        <div className="absolute top-0 left-full bg-white shadow-2xl rounded-2xl py-3 w-64 z-50">
          {children}
        </div>
      )}
    </div>
  );
}

function MenuLink({ href, children }: any) {
  return (
    <Link href={href} className="block px-4 py-2 text-red-600 hover:bg-[#d4af37] hover:text-white">
      {children}
    </Link>
  );
}

function MobileAccordion({ label, children }: any) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-4">
      <button onClick={() => setOpen(!open)} className="w-full text-left uppercase font-semibold py-3 flex justify-between">
        {label}
        <ChevronDown size={18} className={`${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="pl-4">{children}</div>}
    </div>
  );
}

function MobileLink({ href, children }: any) {
  return <Link href={href} className="block py-2 text-gray-300">{children}</Link>;
}

function MainLink({ href, label, pathname }: any) {
  const active = pathname === href;

  return (
    <Link
      href={href}
      className="relative uppercase text-red-600 font-semibold flex items-center h-[70px]"
    >
      {label}
      {active && (
        <span className="absolute left-0 bottom-3 w-full h-[2px] bg-red-600"></span>
      )}
    </Link>
  );
}


function Social({ href, children }: any) {
  return (
    <Link href={href} className="w-9 h-9 flex items-center justify-center rounded-full bg-[#d4af37] text-gray-800">
      {children}
    </Link>
  );
}
