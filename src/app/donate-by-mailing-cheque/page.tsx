"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Smartphone } from "lucide-react";
import PageWithSidebar from "../components/PageWithSidebar";

export default function MailingChequePage() {
    return (
        <main className="w-full">

            {/* Hero / Banner */}
              <section className="bg-[#b8962e] text-white py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold">
Donate by  Mailing Cheque
                </h1>
                <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto opacity-90">
Donate conveniently by mailing a chaeque to us.
                </p>
            </section>

<PageWithSidebar>
            {/* Content */}
            <section className="max-w-4xl mx-auto px-6 py-10">
                        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className=" flex items-center gap-3 text-red-600 text-2xl font-bold"
        >
          <Smartphone className="w-8 h-8" />
          <span>How to Donate via Mobile Money</span>
        </motion.div>

           
<p className="mt-5 mb-2">
                        1. Write a check payable to "THE MERCY AZOH-MBI HEART FOUNDATION"

</p>

<p className=" mb-2">
 2. To enable us to acknowledge your donation after the cheque is received, please enclose the following information
                        with your cheque: your name, email and phone number.
</p>
<p className=" mb-2">
   3.   Also send an email to info@maheartfoundation.org with a copy of the cheque.
                        
                            Mail your check to:
</p>
<p>
    4. Mail your check to:

</p>
<p className="mt-3">
     THE MERCY AZOH-MBI HEART FOUNDATION
</p>
<p>
    255 D’Anjou Blvd, Suite 257F 
</p>
<p>
   Chateauguay, Qc Canada J6J 2R4
</p>
                

               
            </section>

          
            {/* Thank You */}
           <section className="py-5  px-20">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl font-bold text-red-600"
        >
          Thank You
        </motion.h3>
        
      </section>
</PageWithSidebar>
        </main>
    );
}
