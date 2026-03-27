"use client";

import Image from "next/image";

export default function Obituary() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-12">

            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-sm tracking-[0.3em] text-gray-500 uppercase">
                    Obituary
                </h1>

                <h2 className="text-3xl md:text-4xl font-semibold mt-3 text-gray-900">
                    Mercy Azoh-Mbi        </h2>

            </div>

            {/* Content */}
            <div className="flex flex-col md:flex-row gap-10">

                {/* Left Image */}
                <div className="md:w-1/3">
                    <div className="relative w-full h-[410px] rounded-xl overflow-hidden shadow-md">
                        <Image
                            src="/lady-image.webp"
                            alt="Mercy Azoh-Mbi"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Right Text */}
                <div className="md:w-2/3 text-gray-700 leading-relaxed text-[15px]">

                    <p className="mb-4 font-medium text-gray-800">
                        Mrs Mercy Enow-Mbi Azoh-Mbi (51), Spouse of the Cameroon High Commissioner to
                        South Africa, passed away on Sunday, July 02, 2023, at the Pretoria Heart Hospital,
                        following a brief illness.
                    </p>

                    <p className="mb-4">
                        Mercy was born on September 02, 1972, to Mr John Egbe and Mrs Pauline Bessem
                        Egbe of Mutengene, in the Southwest Region of Cameroon. She was the last of eight
                        children. Their mother died rather early when Mercy was barely 15 years old. She was
                        raised in the foster care of her older siblings who admired and adored her for her innate
                        sense of responsibility, patience and peaceable nature.
                    </p>

                    <p className="mb-4">
                        After her primary and secondary education in Mutengene, Limbe and Yaoundé, she
                        pursued graduate studies at the University of Yaoundé, where she earned a Master’s
                        degree in Geology and the “Diplôme d’Etudes Approfondies” (DEA).
                    </p>

                    <p className="mb-4">
                        In 2003, Mercy met and married Solomon Azoh-Mbi, a career diplomat, and the couple
                        had two children: Paula-Aurelia Afeseh Azoh-Mbi (17) and Jay Mbeng Azoh-Mbi (15).
                        She was a loving wife and mother with open hands and an open heart for all. She was
                        graceful and generous, and loved entertaining people.
                    </p>




                </div>


            </div>
                <div className=" text-gray-700 leading-relaxed text-[15px]">

                <p className="mb-4">
                    Following her husband’s appointment in 2008 as Cameroon’s High Commissioner to
                    Canada, the family moved to Ottawa and, in 2020, relocated to South Africa upon
                    Solomon’s reassignment as High Commissioner to Pretoria. As a diplomatic spouse,
                    she contributed immensely in promoting Cameroon’s cultural diplomacy through
                    multiple private and public engagements and receptions in Canada and South Africa.
                </p>

                <p className="mb-4">
                    After barely seven months in Canada, Mercy’s life would go through some cataclysmic
                    changes from a misdiagnosed heart infection that almost claimed her life and left her a
                    quadrilateral amputee of all four limbs. The compelling saga of her sickness, suffering
                    and survival is chronicled in her newly released inspirational book entitled “Miracle of
                    Mercy”, published in the United States of America on June 09, 2023, and available on
                    Amazon.
                </p>

                <p className="mb-4">
                    Despite life’s challenges, Mercy remained indescribably radiant, ravishing and
                    resplendent, refusing to grumble or to be grumpy. She was a humorous and happy soul,
                    full of life, love and laughter. Behind her beguiling beauty and soft-spoken nature was a
                    penchant for exuberance and excellence in everything she undertook. She was
                    industrious and enterprising, setting up her own private small businesses.
                </p>


                <p className="mb-4">
                    In May 2018, Mercy established “The Mercy Azoh-Mbi Heart Foundation”, a Canada-
                    based Charity that seeks to educate and prevent cardiovascular diseases. Her vision

                    was to leverage her own experience as a survivor of heart disease to ensure that others
                    do not suffer the same fate as her.
                </p>
                <p className="mb-4">
                    She is survived by her husband of twenty years, two children Paula and Jay; three
                    stepchildren Apongho, Ariel and Vanessa; six siblings- Dr. Tom Agbor, Frida Agbor,
                    Alice Tabemonso, Cecilia Besong, Sarah Etta, Prudencia Tataw; five agnate siblings
                    and numerous nieces, nephews and cousins.
                </p>

                {/* Highlight Box */}
                <div className="mt-6 p-4 bg-gray-50 border-l-4 border-gray-300 italic text-gray-600">
                    She was buried at The Magnificat Meadows, Awing, the family homestead, which she
                    contributed immensely in constructing.
                </div>
            </div>
        </section>
    );
}