"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = {
  about: [
    { label: "Mission, Vision, Values", href: "/vision-mission-values" },
    { label: "Word From Mercy", href: "/word-from-mercy" },
    { label: "Our Inspiration", href: "/our-inspiration" },
    { label: "What We Do", href: "/what-we-do" },
    { label: "Board Of Directors", href: "/board-of-directors" },
    { label: "Medical Advisory Board", href: "/our-medical-advisory-team" },
    { label: "Management Team", href: "/management-team" },
    { label: "Our Partners", href: "/our-partners" },
  ],
  involved: [
    { label: "Fundraise", href: "/fundraise" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "Donate", href: "/make-a-donation" },
  ],
  health: [
    { label: "What Is Heart Disease?", href: "/what-is-heart-disease" },
    { label: "Facts & Statistics", href: "/heart-disease-facts-and-statistics" },
    { label: "Healthy Heart Tips", href: "/tips-for-a-healthy-heart" },
  ],
  news: [
    { label: "Latest News", href: "/latest-news" },
    { label: "Newsletter", href: "/newsletter" },
    { label: "Jobs", href: "/jobs" },
  ],
};

export default function SectionSidebar() {
  const pathname = usePathname();

  const currentSection = Object.keys(sections).find((section) =>
    sections[section as keyof typeof sections].some(
      (item) => item.href === pathname
    )
  );

  if (!currentSection) return null;

  return (
    <aside className="hidden lg:block w-64">
      <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
        <ul className="space-y-3">
          {sections[currentSection as keyof typeof sections].map(
            (item, index) => (
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
            )
          )}
        </ul>
      </div>
    </aside>
  );
}
