"use client";

import Link from "next/link";

export default function NewsletterPage() {
  return (
    <section className="bg-white text-gray-900 py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* PAGE TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Newsletter
        </h1>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-14">
          Stay informed with our latest updates, initiatives, and stories.
          Browse past editions or subscribe to receive our newsletters directly.
        </p>

        {/* PAST EDITIONS */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">
            Consult Past Editions of Our Newsletter
          </h2>

          <ul className="space-y-4">
            <li>
              <Link
                href="#"
                className="block p-4 border rounded-xl hover:bg-gray-50 transition"
              >
                January – March 2025
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="block p-4 border rounded-xl hover:bg-gray-50 transition"
              >
                April – June 2025
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="block p-4 border rounded-xl hover:bg-gray-50 transition"
              >
                July – September 2025
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="block p-4 border rounded-xl hover:bg-gray-50 transition"
              >
                October – December 2025
              </Link>
            </li>
          </ul>
        </div>

        {/* NEWSLETTER SIGNUP */}
        <div className="bg-gray-50 border rounded-2xl p-8 md:p-12 text-center">
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
