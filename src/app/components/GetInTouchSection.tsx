import Image from "next/image";

export default function GetInTouchSection() {
  return (
    <section className="w-full bg-white py-16">
      
      {/* Top Heading */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <p className="text-2xl md:text-3xl font-medium">OUR INFO</p>
        <h2 className="text-4xl md:text-6xl font-bold text-red-600 mt-4">
          Get in Touch
        </h2>

        <p className="font-normal max-w-2xl mx-auto text-lg md:text-2xl leading-relaxed mt-4">
          My name is Debbie Tangen. I’m a Certified Dog Obedience Trainer.
          I train dogs to display manners.
        </p>
      </div>

      {/* Office Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 px-4 md:px-10 w-full">

        {/* CANADA OFFICE */}
        <div className="w-full flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">

          {/* Left Image */}
          <div className="relative w-full md:w-1/2 h-60 md:h-auto">
            <Image
              src="/canada flg copy.webp"
              alt="Canada Office"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="bg-[#007BFF] text-white p-6 md:p-10 md:w-1/2 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-semibold mb-6">
              Canada Office
            </h3>

            <ul className="space-y-6 text-sm leading-relaxed">

              {/* Phone */}
              <li className="flex items-start gap-4">
                <svg width="40" height="40" viewBox="0 0 56 56" fill="currentColor">
                  <path d="M28 51.906c13.055 0 23.906-10.828 23.906-23.906c0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906" />
                </svg>
                <div>
                  <p className="text-xl font-semibold">Phone Number:</p>
                  <p className="text-base">1-438-795-3481</p>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-4">
                <svg width="40" height="40" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M6.5 5A4.5 4.5 0 0 0 2 9.5v13..." />
                </svg>
                <div>
                  <p className="text-xl font-semibold">Email:</p>
                  <p className="text-base">info@maheartfoundation.org</p>
                </div>
              </li>

              {/* Address */}
              <li className="flex items-start gap-4">
                <svg width="40" height="40" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M10.12 5.164L7.25 8.042..." />
                </svg>
                <div>
                  <p className="text-xl font-semibold">Address:</p>
                  <p className="text-base">Montreal – Canada</p>
                </div>
              </li>

              {/* Business Hours */}
              <li className="flex items-start gap-4 pb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c5.523 0 10 4.477..." />
                </svg>
                <div>
                  <p className="text-xl font-semibold">Business Hours:</p>
                  <p className="text-base">Monday – Friday: 10am – 5pm</p>
                  <p className="text-base">Saturday – 10am – 5pm</p>
                  <p className="text-base">Sunday – Closed</p>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* CAMEROON OFFICE */}
        <div className="w-full flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">

          {/* Left Image */}
          <div className="relative w-full md:w-1/2 h-60 md:h-auto">
            <Image
              src="/CameroonOffice.png"
              alt="Cameroon Office"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="bg-[#007BFF] text-white p-6 md:p-10 md:w-1/2 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-semibold mb-6">
              Cameroon Office
            </h3>

            <ul className="space-y-6 text-sm leading-relaxed">

              {/* Phone */}
              <li className="flex items-start gap-4">
                <svg width="40" height="40" viewBox="0 0 56 56" fill="currentColor">
                  <path d="M28 51.906c13.055 0 ..." />
                </svg>
                <div>
                  <p className="text-xl font-semibold">Phone Number:</p>
                  <p className="text-base">+237 682-084-962</p>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-4">
                <svg width="40" height="40" fill="currentColor">
                  <path d="M6.5 5A4.5 4.5 ..." />
                </svg>
                <div>
                  <p className="text-xl font-semibold">Email:</p>
                  <p className="text-base">info@maheartfoundation.org</p>
                </div>
              </li>

              {/* Address */}
              <li className="flex items-start gap-4">
                <svg width="40" height="40" fill="currentColor">
                  <path d="M10.12 5.164..." />
                </svg>
                <div>
                  <p className="text-xl font-semibold">Address:</p>
                  <p className="text-base">Monte Centre Entre CNPS, Yaounde</p>
                </div>
              </li>

              {/* Business Hours */}
              <li className="flex items-start gap-4 pb-6">
                <svg width="40" height="40" fill="currentColor">
                  <path d="M12 2c5.523..." />
                </svg>
                <div>
                  <p className="text-xl font-semibold">Business Hours:</p>
                  <p className="text-base">Monday – Friday: 10am – 5pm</p>
                  <p className="text-base">Saturday – 10am – 5pm</p>
                  <p className="text-base">Sunday – Closed</p>
                </div>
              </li>

            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
