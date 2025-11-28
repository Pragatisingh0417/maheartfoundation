import Image from "next/image";
import type { ReactNode } from "react";

// Lucide Icons
import { Phone, Mail, MapPin, Clock } from "lucide-react";

/* -------------------- MAIN SECTION -------------------- */
export default function GetInTouchSection() {
  return (
    <section className="w-full bg-white py-10">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto px-6">
        <p className="text-2xl md:text-3xl font-semibold tracking-wide text-gray-700">
          OUR INFO
        </p>

        <h2 className="text-4xl md:text-6xl font-extrabold text-red-600 mt-4 leading-tight">
          Get in Touch
        </h2>

        {/* <p className="font-light max-w-2xl mx-auto text-lg md:text-2xl leading-relaxed mt-4 text-gray-600">
          My name is Debbie Tangen. I’m a Certified Dog Obedience Trainer.
          I train dogs to display manners.
        </p> */}
      </div>

      {/* Office Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 px-6 md:px-12">
        <OfficeCard
          title="Canada Office"
          img="/canada flg copy.webp"
          phone="1-438-795-3481"
          email="info@maheartfoundation.org"
          address="Montreal – Canada"
          hours={[
            "Monday – Friday: 10am – 5pm",
            "Saturday – 10am – 5pm",
            "Sunday – Closed",
          ]}
        />

        <OfficeCard
          title="Cameroon Office"
          img="/CameroonOffice.png"
          phone="+237 682-084-962"
          email="info@maheartfoundation.org"
          address="Monte Centre Entre CNPS, Yaounde"
          hours={[
            "Monday – Friday: 10am – 5pm",
            "Saturday – 10am – 5pm",
            "Sunday – Closed",
          ]}
        />
      </div>
    </section>
  );
}

/* -------------------- OFFICE CARD -------------------- */

interface OfficeCardProps {
  title: string;
  img: string;
  phone: string;
  email: string;
  address: string;
  hours: string[];
}

function OfficeCard({ title, img, phone, email, address, hours }: OfficeCardProps) {
  return (
    <div className="w-full flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-xl border border-gray-100 group transition-all duration-300 hover:shadow-2xl">

      {/* Image */}
      <div className="relative w-full md:w-1/2 h-60 md:h-auto">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="bg-[#007BFF] text-white p-8 md:p-12 md:w-1/2 flex flex-col justify-center space-y-8">
        <h3 className="text-3xl md:text-4xl font-bold">{title}</h3>

        <ul className="space-y-6 text-base leading-relaxed">
          <ListItem icon={<Phone size={30} />} label="Phone:" value={phone} />
          <ListItem icon={<Mail size={30} />} label="Email:" value={email} />
          <ListItem icon={<MapPin size={30} />} label="Address:" value={address} />
          <ListItem icon={<Clock size={30} />} label="Business Hours:" value={hours} isList />
        </ul>
      </div>
    </div>
  );
}

/* -------------------- LIST ITEM -------------------- */

interface ListItemProps {
  icon: ReactNode;
  label: string;
  value: string | string[];
  isList?: boolean;
}

function ListItem({ icon, label, value, isList = false }: ListItemProps) {
  return (
    <li className="flex items-start gap-4">
      <div className="opacity-90">{icon}</div>

      <div>
        <p className="text-xl font-semibold">{label}</p>

        {isList && Array.isArray(value) ? (
          value.map((v, i) => (
            <p key={i} className="text-base opacity-90">{v}</p>
          ))
        ) : (
          <p className="text-base opacity-90">{value}</p>
        )}
      </div>
    </li>
  );
}
