"use client";

export default function NewsletterBanner() {
  return (
    <section className="w-full bg-[#0B72D9] py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* TEXT */}
        <h2 className="text-white text-2xl sm:text-3xl font-bold text-center md:text-left">
          Keep Updated About Our Newsletter
        </h2>

        {/* BUTTON */}
        <button className="px-8 py-3 bg-red-500 text-white rounded-full text-lg font-semibold shadow-md hover:bg-red-600 transition">
          Sign In
        </button>
      </div>
    </section>
  );
}
