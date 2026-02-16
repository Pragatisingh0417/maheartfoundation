"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";


export default function WhatWeDo() {
  const items = [
    {
      title: "SCREENING & TESTING",
      desc: "Conduct free clinics whereby individuals are screened for possible heart diseases and carry out specific tests for those identified as being of high risk.",
      icon: "/img-1.png",
    },
    {
      title: "TREATMENT & COUNSELING",
      desc: "Conduct free clinics whereby individuals are screened for possible heart diseases and carry out specific tests for those identified as being of high risk.",
      icon: "/img-2.png",
    },
    {
      title: "PREVENTION, EDUCATION & OUTREACH",
      desc: "Conduct free clinics whereby individuals are screened for possible heart diseases and carry out specific tests for those identified as being of high risk.",
      icon: "/img-3.png",
    },
    {
      title: "HEART HEALTH CENTRES & CLINICS",
      desc: "Conduct free clinics whereby individuals are screened for possible heart diseases and carry out specific tests for those identified as being of high risk.",
      icon: "/img-4.png",
    },
    {
      title: "CAPACITY BUILDING",
      desc: "Strengthen the capacity of medical institutions and practitioners in developing countries to improve their ability to diagnose and treat heart conditions.",
      icon: "/img-5.png",
    },
    {
      title: "RESEARCH FUNDING",
      desc: "Provide support to medical students and researchers in developing countries to foster research in cardiac care.",
      icon: "/img-6.png",
    },
  ];

  return (
    <section className="relative w-full bg-[#b8962e] p-10  overflow-hidden ">

      <div className="relative max-w-6xl mx-auto text-center ">
        <h2 className="text-red-600 text-3xl font-bold tracking-wider mb-3 mt-10">What We Do</h2>

        <div className="w-32 h-[2px] bg-red-500 mx-auto mb-10"></div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4  border-white border-2 rounded-xl p-10 bg-[#b8962e] shadow-lg"
            >
              <div className="w-[186px] h-[px186] rounded-full flex items-center justify-center bg-white overflow-hidden">
  <Image
    src={item.icon}
    alt={item.title}
    width={70}
    height={70}
    className="object-contain"
  />
</div>


              <div className="text-left">
                <h3 className="text-white text-lg font-semibold leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>


        


      </div>

        </section>
  );
}