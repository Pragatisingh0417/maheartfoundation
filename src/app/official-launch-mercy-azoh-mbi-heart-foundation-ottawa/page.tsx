"use client";

import Image from "next/image";
import Link from "next/link";

export default function OttawaLaunch() {
  return (
    <section className="bg-white">

      {/* HERO SECTION */}
      <div className="relative w-full py-20  bg-[#b8962e] flex items-center justify-center px-6">
        <h1 className="text-white text-2xl md:text-4xl font-bold text-center max-w-4xl leading-snug">
          Launching of the Foundation and Book Launch in Ottawa
        </h1>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-16">

        <p className="text-gray-500 text-sm mb-6">
          September 19, 2024 • Ottawa, Canada
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          A Memorable Event Celebrated with Dignitaries
        </h2>

        <div className="space-y-6 text-gray-800 leading-relaxed text-[16px]">

          <p>
On September 19, 2024, the hall of the Gloucester Presbyterian Church in Ottawa hosted the grand
launch of the Mercy Azoh-Mbi Heart Foundation in Canada under the distinguished patronage of Star
Motors of Canada, represented by Yves Laberge, Vice President and General Manager. The event also
marked the launch of the book, &quot;Miracle of Mercy,&quot; in Canada.          </p>

         
          <p>
            Among the notable guests were Mrs. Amina Gerba, Independent Canadian Senator for Quebec, Her
Excellency Souriya Otmani, Ambassador of the Kingdom of Morocco and Dean of the Diplomatic Corps,
and His Excellency Philip Ngwese Ngole, Cameroon High Commissioner in Ottawa. The 120 guests
present came from Montreal, the Ottawa-Gatineau region, Toronto, and the United States.
          </p>

          <p>
            The event commenced with a prayer by Rev. Denise Allen-Macartney, followed by a minute of silence in
memory of Mrs. Mercy Azoh-Mbi. Attendees then watched brief video projections on "Miracle of
Mercy" and the genesis of the Foundation. Speeches were delivered by Paul Ayah, CEO of the
Foundation and co-author of the book; H.E. Solomon Azoh-Mbi, chairperson of the Foundation and
Cameroon High Commissioner in South Africa; and by Mr. Yves Laberge, H.E. Philip Ngwese Ngole, and
Her Ex. Souriya Otmani.
          </p>

          <p>
The two-hour event culminated with refreshments and vibrant cultural dances performed by the MECA
Montreal cultural group.
          </p>

        </div>

       

      </div>
    </section>
  );
}
