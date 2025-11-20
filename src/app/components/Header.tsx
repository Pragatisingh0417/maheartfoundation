"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white text-black shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/heart-logo.png"        // Replace with your actual logo path
            alt="Foundation Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Nav Links */}
        <nav>
          <ul className="hidden md:flex items-center gap-10 text-[15px] font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/heart-health">Heart Health</Link></li>
            <li><Link href="/news">Latest News</Link></li>
            <li><Link href="/get-involved">Get Involved</Link></li>

            {/* Donate Button */}
            <li>
              <Link href="/donate">
                <button className="bg-[#FF2D2D] text-white font-semibold px-6 py-2 rounded-full hover:bg-red-600 transition">
                  DONATE NOW
                </button>
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}
