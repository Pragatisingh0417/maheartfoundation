"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="p-10 flex items-center justify-center bg-gray-100 px-6">
      
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login
        </h1>

        {/* Form */}
        <form className="space-y-5">

          {/* Email */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-sm">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#03228f]"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-sm">Password</label>
            
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
                className="w-full border border-gray-300 rounded-lg p-3 pr-12 focus:outline-none focus:border-[#03228f]"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-sm text-gray-500 hover:text-[#03228f]"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-[#03228f] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#000000] hover:bg-[#2a2929] text-white py-3 rounded-lg font-semibold transition"
          >
            Login
          </button>

        </form>

        {/* Register Link */}
        {/* <p className="text-sm text-center mt-6">
          Don’t have an account?{" "}
          <Link href="/register" className="text-[#03228f] font-semibold hover:underline">
            Sign Up
          </Link>
        </p> */}

      </div>
    </section>
  );
}
