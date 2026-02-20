"use client";

import Image from "next/image";
import PageWithSidebar from "../components/PageWithSidebar";

export default function BoardOfDirectors() {
  const directors = [
    {
      name: "SOLOMON AZOH-MBI",
      role: "Chairperson",
      image: "/Bod-1.jpg",
      bio: `Mr. Solomon Azoh-Mbi joined the Cameroon Foreign Service as a career diplomat in 1985. He served in various capacities in the Cameroon Ministry of External Relations until 1988, when he was appointed Deputy Chief of Service in charge of official visits at the Department Protocol at the Civil Cabinet of the Presidency. Between 1991 and 1995, he served as Attaché at the General Secretariat at the Presidency, then as Chargé de Mission, where he also served as Senior Diplomatic Adviser to the President. From 2004 to 2008, he was Board Chair of the National School of Administration and Magistracy (ENAM) in Yaounde. In 2008 he was appointed Cameroon’s High Commissioner to Canada, Cuba and Jamaica, with residence in Ottawa. He has been Cameroon’s High Commissioner to South Africa since 2021.`,
    },
    {
      name: "JAY M. NFONOYIM",
      role: "Director",
      image: "/Bod-3.jpg",
      bio: `Dr. Jay Nonoyim is Program Director, Chief of Critical Care and Clinical Medicine at the Richmond University Medical Center, and Clinical Assistant Professor of Medicine at New York Medical College. He also served as director of the Surgical Trauma ICU at Elmhurst Hospital Center and Assistant Professor of Surgery at Mt. Sinai Medical School. He has close to four decades of experience in the field of medicine. His areas of expertise are Saddle Pulmonary Embolism, Emphysema, and Angioplasty. He is affiliated with numerous hospitals in New York, including the Richmond University Medical Center and the Staten Island University Hospital.

He studied at the Universidad Tenologica De Santiago and did his Intensive Care training at the Icahn School of Medicine at Mt. Sinai. He is a member of the American Board of Internal Medicine.`,
    },
    {
      name: "NTARIBO ASHU-AGBORNGAH",
      role: "Treasurer",
      image: "/Bod-5.jpg",
      bio: `Ntaribo is a career diplomat. He currently serves as Director of Protocol, Ceremonies and Consular Affairs at the Ministry of External Relations in Yaounde, Cameroon. Prior to this appointment, he served as First Secretary at the Cameroon High Commission in Ottawa, and as deputy to the head of cabinet for Chantal Biya, Cameroon’s First Lady, at the Circle of Friends of Cameroon, a charitable organization initiated by Cameroon’s first lady. He holds a bachelor’s degree in English Private Law from University of Yaounde and a doctorat de troisième cycle in International Relations from the International Relations Institute of Cameroon (IRIC).`,
    },
    {
      name: "ALISA TONGG",
      role: "Director",
      image: "/Bod-6.jpg",
      bio: `An award-winning celebrant and storyteller, Alisa is an everyday philanthropist and ordained minister who brings the Aloha Spirit everywhere she goes. She is also the founder of the Bacon & Lox Society, a creative collective and celebration congregation, and a former Director of the MIT Freshman/Alumni Summer Internship Program. Whether it’s creating a new food + wine festival to rebrand a region, championing fresher food in school cafeterias, serving on the board of a pediatric cancer charity or fundraising for her local non-profit hospital, Alisa uses her 20+ years experience of event planning, fundraising and community relations to make a lasting impact.`,
    },
    {
      name: "DENISE ALLEN-MACARTNEY",
      role: "Director",
      image: "/Denise A-M2018.JPG",
      bio: `An ordained minister, Denise pastors Gloucester Presbyterian Church in Ottawa, thanks to which she keeps discovering God’s deep compassion for people and their neighbourhoods. Earlier, she served six years as Director of Communications for Fidus Systems. Through her own business, Dynamic Writing, Denise provided training and communications consulting services to government agencies, corporate, and non-profit clients across Canada.`,
    },
    {
      name: "PAULA AZOH-MBI",
      role: "Director",
      image: "/Bod-2.png",
      bio: `Paula studied at the American International School of Johannesburg (AISJ) where she completed High School and obtained the International Baccalaureate in June 2024. She looks forward to reading Law at the University of Pretoria in South Africa in the new academic year. Paula took up her mother’s seat on the board when she turned 18.`,
    },
    {
      name: "PAUL T. AYAH",
      role: "Secretary & CEO",
      image: "/Paul T. Ayah - CEO.jpg",
      bio: `Paul held various positions in industry until 1995 before founding STF Traducation, a language services firm that provides translation and language training services to government and corporate clients. He studied at Keele University and University of London, as well as Université de Montréal and McGill University. A committed community servant, Paul has served in multiple leadership roles within the Cameroonian community in Canada.`,
    },
  ];

  return (
    <main className="w-full bg-gray-50">
      {/* HERO */}
      <section className="bg-[#b8962e] py-20 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide">
          Board of Directors
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg opacity-90">
          Meet the dedicated leaders guiding the Mercy Azoh-Mbi Heart Foundation
        </p>
      </section>
      <PageWithSidebar>
        {/* DIRECTORS */}
        <section className="max-w-6xl mx-auto px-6 py-24 space-y-28">
          {directors.map((d, i) => (
            <div
              key={i}
              className={`grid gap-12 items-start ${i % 2 === 0
                  ? "md:grid-cols-[380px_1fr]"
                  : "md:grid-cols-[1fr_380px]"
                }`}
            >
              {/* IMAGE */}
              <div
                className={`${i % 2 !== 0 ? "md:order-2" : ""
                  } rounded-2xl overflow-hidden `}
              >
                <Image
                  src={d.image}
                  alt={d.name}
                  width={400}
                  height={500}
                  className="w-70 h-[300px] object-cover mx-auto rounded-xl"
                />

              </div>

              {/* CONTENT */}
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900">{d.name}</h2>
                <p className="mt-1 text-lg font-semibold text-red-600">
                  {d.role}
                </p>

                <div className="w-16 h-[3px] bg-yellow-500 my-6" />

                <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                  {d.bio}
                </p>
              </div>
            </div>
          ))}
        </section>
      </PageWithSidebar>
    </main>
  );
}
