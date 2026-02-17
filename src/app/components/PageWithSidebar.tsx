"use client";

import SectionSidebar from "./SectionSidebar";

export default function PageWithSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full mx-auto px-6 md:px-20 py-16">
      <div className="flex gap-16">
        <SectionSidebar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
