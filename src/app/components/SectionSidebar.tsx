"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = {
  about: {
    title: "About Us",
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
    title: "Get Involved",
    links: [
      { label: "Fundraise", href: "/fundraise" },
      { label: "Volunteer", href: "/volunteer" },
      { label: "Donate", href: "/make-a-donation" },
    ],
  },
  health: {
    title: "Heart Health",
    links: [
      { label: "What Is Heart Disease?", href: "/what-is-heart-disease" },
      { label: "Facts & Statistics", href: "/heart-disease-facts-and-statistics" },
      { label: "Healthy Heart Tips", href: "/tips-for-a-healthy-heart" },
    ],
  },
  news: {
    title: "News",
    links: [
      { label: "Latest News", href: "/latest-news" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "Jobs", href: "/jobs" },
    ],
  },
};

export default function SectionSidebar() {
  const pathname = usePathname();

  const currentSectionKey = Object.keys(sections).find((section) =>
    sections[section as keyof typeof sections].links.some(
      (item) => item.href === pathname
    )
  );

  if (!currentSectionKey) return null;

  const currentSection =
    sections[currentSectionKey as keyof typeof sections];

  return (
    <aside className="hidden lg:block w-64">
      <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
        
        {/* Dynamic Title */}
        <p className="px-3 mb-4 text-red-600 font-semibold text-lg">
          {currentSection.title}
        </p>

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
      </div>
    </aside>
  );
}
