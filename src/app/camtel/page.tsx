"use client";

import PageWithSidebar from "../components/PageWithSidebar";
import T from "../components/Translate";

export default function Camtel() {
    return (
        <section className="">
            <PageWithSidebar>
                <div className="text-black bg-white">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-center">
                        <T>Coming soon</T>
                    </h1>
                </div>
            </PageWithSidebar>
        </section>
    );
}