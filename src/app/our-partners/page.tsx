import PageWithSidebar from "../components/PageWithSidebar";
import Image from "next/image";

const partners = [
    {
        name: "Partner One",
        logo: "/LUKMEF-Logo (2).jpg",
    },
    { 
        name: "Partner Two", 
        logo: "/50-years-ohi-rgb-logo.svg",
    },
    {
        name: "Partner Three",
        logo: "/CAMESA_logo2.jpeg",
    },
];
export default function OurPartners() {

    return (
        <>
            <section>
                <section className="bg-[#b8962e] text-white py-20 px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold">
                        Our Partners

                    </h1>
                    <p className="mt-6 text-lg  text-white leading-relaxed">
                        We are grateful to our partners whose support and collaboration
                        help us expand heart health awareness, outreach, and life-saving
                        initiatives around the world.      </p>
                </section>
                <PageWithSidebar>
                    {/* PARTNER LOGOS */}
                    <div className="max-w-4xl flex flex-wrap justify-center gap-10 mt-10">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center w-56 h-32 p-6 rounded-2xl border border-[#d4af37]/30 bg-white hover:border-[#d4af37] hover:shadow-md transition"
                            >
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    width={160}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                    </PageWithSidebar>
            </section>
        </>

    )
}