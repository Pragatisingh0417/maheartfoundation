"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = {
  about: {
    title: "ABOUT US",
    links: [
      { label: "Vision, Mission, Values", href: "/vision-mission-values" },
      { label: "A Word From Mercy", href: "/word-from-mercy" },
      { label: "Our Inspiration", href: "/our-inspiration" },
      { label: "What We Do", href: "/what-we-do" },
      { label: "Board Of Directors", href: "/board-of-directors" },
      { label: "Medical Advisory Board", href: "/our-medical-advisory-team" },
      { label: "Management Team", href: "/management-team" },
      { label: "Our Partners", href: "/our-partners" },
    ],
  },

  involved: {
    title: "GET INVOLVED",
    links: [
      { label: "Fundraise", href: "/fundraise" },
      { label: "Volunteer", href: "/volunteer" },
      { label: "Donate", href: "/make-a-donation" },
    ],
  },

  health: {
    title: "HEART HEALTH",
    links: [
      { label: "What Is Heart Disease?", href: "/what-is-heart-disease" },
      { label: "Facts & Statistics", href: "/heart-disease-facts-and-statistics" },
      { label: "Healthy Heart Tips", href: "/tips-for-a-healthy-heart" },
    ],
  },

  news: {
    title: "NEWS",
    links: [
      { label: "Latest News", href: "/latest-news" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "Jobs", href: "/jobs" },
    ],
  },

  outreach: {
    title: "OUTREACH",
    groups: [
      {
        subTitle: "School Outreach",
        links: [
          { label: "Franky School Campaign", href: "/franky-campaign" },
          { label: "Mevick School Campaign", href: "/mevick-school-campaign" },
          { label: "World Heart Day @ Nil High School", href: "/World-Heart-Day-2025" },
          { label: "Lycee Bilingue Mbalmayo", href: "/lycee-Bilingue-Mbalmayo" },
        ],
      },
      {
        subTitle: "Community Outreach",
        links: [
          {
            label: "Salvation Baptist Church Campaign",
            href: "/salvation-campaign",
          },
          { label: "Dylet Bible School Campaign", href: "/dylet-bible-school-campaign" },
          { label: "Babadjou Rural Campaign", href: "/babadjou-rural-campaign" },
        ],
      },
      {
        subTitle: "Corporate Outreach",
        links: [
          { label: "CSPH", href: "/csph" },
          { label: "Camtel", href: "/camtel" },
        ],
      },
    ],
  },
};

export default function SectionSidebar() {
  const pathname = usePathname();

  const currentSectionKey = Object.keys(sections).find((section) => {
    const sec = sections[section as keyof typeof sections];

    // Normal sections
    if ("links" in sec) {
      return sec.links.some((item) => item.href === pathname);
    }

    // Grouped sections (Outreach)
    if ("groups" in sec) {
      return sec.groups.some((group) =>
        group.links.some((item) => item.href === pathname)
      );
    }

    return false;
  });

  if (!currentSectionKey) return null;

  const currentSection =
    sections[currentSectionKey as keyof typeof sections];

  return (
    <aside className="hidden lg:block w-64">
      <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">

        {/* Section Title */}
        <p className="px-3 mb-5 text-red-600 font-bold text-lg">
          {currentSection.title}
        </p>

        {/* If section has grouped links (Outreach) */}
        {"groups" in currentSection ? (
          currentSection.groups.map((group, i) => (
            <div key={i} className="mb-6">
              
              {/* Sub Title */}
              <p className="px-3 mb-2 text-sm font-semibold text-black uppercase tracking-wide">
                {group.subTitle}
              </p>

              <ul className="space-y-2">
                {group.links.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 rounded-lg text-sm transition ${
                        pathname === item.href
                          ? "bg-red-600 text-white"
                          : "text-gray-700 hover:text-red-600"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <ul className="space-y-3">
            {currentSection.links.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`block px-3 py-2 rounded-lg font-medium transition ${
                    pathname === item.href
                      ? "bg-red-600 text-white"
                      : "text-black hover:text-red-600"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}