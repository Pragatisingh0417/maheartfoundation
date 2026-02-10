"use client";

import Link from "next/link";

const newsletters = {
  2025: [
    { title: "January – March 2025", link: "#" },
    { title: "April – June 2025", link: "#" },
    { title: "July – September 2025", link: "#" },
    { title: "October – December 2025", link: "#" },
  ],

  // Example future year
  // 2026: [
  //   { title: "January – March 2026", link: "#" },
  //   { title: "April – June 2026", link: "#" },
  //   { title: "July – September 2026", link: "#" },
  //   { title: "October – December 2026", link: "#" },
  // ],
};

export default function NewsletterPage() {
  return (
    <section className="bg-white text-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* PAGE TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-red-600">
          Newsletter
        </h1>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Stay informed with our latest updates, initiatives, and stories.
          Browse past editions or subscribe to receive our newsletters directly.
        </p>

        {/* PAST EDITIONS */}
        <div className="space-y-16">
          {Object.entries(newsletters).map(([year, editions]) => (
            <div key={year}>
              <h2 className="text-2xl font-semibold mb-8">
                {year} Editions
              </h2>

              {/* 4 × 4 GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {editions.map((edition, index) => (
                  <Link
                    key={index}
                    href={edition.link}
                    className="group block p-6 border rounded-2xl text-center hover:bg-gray-50 hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <p className="font-medium text-gray-800 group-hover:text-red-600 transition">
                      {edition.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* NEWSLETTER SIGNUP */}
        <div className="mt-24 bg-gray-50 border rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Sign up to receive our newsletters
          </h2>

          <p className="text-gray-600 mb-6">
            Get the latest news delivered straight to your inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
