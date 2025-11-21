import Image from "next/image";

export default function GetInTouchSection() {
  return (
    <section className="w-full bg-white py-16">
      {/* Top Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-3xl font-medium">OUR INFO</p>
        <h2 className="text-6xl font-bold text-red-600 mt-4">Get in Touch</h2>
        <p className="font-normal mx-w-[556px]  text-2xl leading-relaxed mt-4">
          My name is Debbie Tangen. I’m a Certified Dog Obedience Trainer.
          I train dogs to display manners.
        </p>
      </div>

      {/* Office Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 px-4 md:px-10  w-full">
        
        {/* Canada Office */}
        <div className="w-full flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">

  {/* Left Image Section */}
  <div className="relative w-full md:w-1/2 h-56 md:h-auto">
    <Image
      src="/canada flg copy.webp"
      alt="Canada Office"
      fill
      className="object-cover"
    />
  </div>

  {/* Right Text Section */}
  <div className="bg-[#007BFF] text-white p-6 md:w-1/2 flex flex-col justify-center">
    <h3 className="text-5xl font-medium mb-4 mt-16">Canada Office</h3>

    <ul className="space-y-3 text-sm leading-relaxed">
      <li className="flex items-start gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"><path fill="currentColor" d="M28 51.906c13.055 0 23.906-10.828 23.906-23.906c0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906m0-3.984C16.937 47.922 8.1 39.062 8.1 28c0-11.04 8.813-19.922 19.876-19.922c11.039 0 19.921 8.883 19.945 19.922c.023 11.063-8.883 19.922-19.922 19.922m-5.625-14.39c5.46 5.484 12.422 8.952 16.547 4.85a3.5 3.5 0 0 0 .398-.468c1.078-1.195 1.383-2.789 0-3.82c-1.078-.774-2.226-1.57-4.172-2.93c-1.359-.96-2.25-.727-3.304.328l-.938.914c-.281.258-.726.235-1.031.047c-.82-.492-2.203-1.594-3.516-2.906c-1.289-1.29-2.46-2.742-2.906-3.516c-.164-.258-.281-.68.047-.984l.914-.985c1.055-1.101 1.289-1.945.305-3.328l-2.883-4.078c-.985-1.383-2.414-1.125-3.985.047c-.117.094-.21.188-.304.281c-4.125 4.125-.633 11.086 4.828 16.547"/></svg>
        <div>
            <p className="text-xl font-semibold ">Phone Number:</p>
        <p className="text-sm font-normal ">1-438-795-3481</p>
        </div>
      </li>
      <li className="flex items-start gap-3 mt-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 32 32"><path fill="currentColor" d="M6.5 5A4.5 4.5 0 0 0 2 9.5v13A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5v-13A4.5 4.5 0 0 0 25.5 5zM28 10.403l-12 6.461l-12-6.461V9.5A2.5 2.5 0 0 1 6.5 7h19A2.5 2.5 0 0 1 28 9.5zM4 12.674l11.526 6.207a1 1 0 0 0 .948 0L28 12.674V22.5a2.5 2.5 0 0 1-2.5 2.5h-19A2.5 2.5 0 0 1 4 22.5z"/></svg>
       
        <div>
            <p className="text-xl font-semibold ">Email:</p>
        <p className="text-sm font-normal ">info@maheartfoundation.org</p>
        </div>
      </li>
      <li className="flex items-start gap-3 mt-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 16 16"><path fill="currentColor" d="M10.12 5.164L7.25 8.042L5.854 6.646l-.07-.058a.5.5 0 0 0-.638.765l1.75 1.75l.07.058a.5.5 0 0 0 .638-.058l3.224-3.233l.058-.07a.5.5 0 0 0-.766-.636m-.961 9.394C10.903 13.016 14 9.874 14 7A6 6 0 0 0 2 7c0 2.874 3.097 6.016 4.841 7.558c.668.59 1.65.59 2.318 0M8 2a5 5 0 0 1 5 5c0 1.108-.615 2.395-1.57 3.683c-.934 1.258-2.087 2.377-2.933 3.126a.737.737 0 0 1-.994 0c-.846-.749-2-1.867-2.933-3.126C3.615 9.395 3 8.108 3 7a5 5 0 0 1 5-5"/></svg>
       
        <div>
            <p className="text-xl font-semibold ">Address:</p>
        <p className="text-sm font-normal ">Montreal – Canada</p>
        </div>
      </li>
      <li className="flex items-start gap-3 mt-5 mb-20">
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 2a1 1 0 0 1 .993.883L13 7v4.586l2.707 2.707a1 1 0 0 1-1.32 1.497l-.094-.083l-3-3a1 1 0 0 1-.284-.576L11 12V7a1 1 0 0 1 1-1"/></g></svg>
        <span className="font-semibold"></span>
        
         <div>
            <p className="text-xl font-semibold ">Business Hours:</p>
        <p className="text-sm font-normal ">Monday – Friday: 10am – 5pm</p>
        <p className="text-sm font-normal" >Saturday – 10am – 5pm </p>
        <p className="text-sm font-normal ">Sunday – Closed</p>
        </div>
      </li>
    </ul>
  </div>
</div>


        {/* Cameroon Office */}
<div className="w-full flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">

  {/* Left Image Section */}
  <div className="relative w-full md:w-1/2 h-56 md:h-auto">
    <Image
      src="/CameroonOffice.png"
      alt="Cameroon Office"
      fill
      className="object-cover"
    />
  </div>

  {/* Right Text Section */}
  <div className="bg-[#007BFF] text-white p-6 md:w-1/2 flex flex-col justify-center">
    <h3 className="text-2xl font-bold mb-4">Cameroon Office</h3>

    <ul className="space-y-3 text-sm leading-relaxed">
      <li className="flex items-start gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"><path fill="currentColor" d="M28 51.906c13.055 0 23.906-10.828 23.906-23.906c0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906m0-3.984C16.937 47.922 8.1 39.062 8.1 28c0-11.04 8.813-19.922 19.876-19.922c11.039 0 19.921 8.883 19.945 19.922c.023 11.063-8.883 19.922-19.922 19.922m-5.625-14.39c5.46 5.484 12.422 8.952 16.547 4.85a3.5 3.5 0 0 0 .398-.468c1.078-1.195 1.383-2.789 0-3.82c-1.078-.774-2.226-1.57-4.172-2.93c-1.359-.96-2.25-.727-3.304.328l-.938.914c-.281.258-.726.235-1.031.047c-.82-.492-2.203-1.594-3.516-2.906c-1.289-1.29-2.46-2.742-2.906-3.516c-.164-.258-.281-.68.047-.984l.914-.985c1.055-1.101 1.289-1.945.305-3.328l-2.883-4.078c-.985-1.383-2.414-1.125-3.985.047c-.117.094-.21.188-.304.281c-4.125 4.125-.633 11.086 4.828 16.547"/></svg>
        <div>
            <p className="text-xl font-semibold ">Phone Number:</p>
        <p className="text-sm font-normal ">+237 682-084-962</p>
        </div>
      </li>
      <li className="flex items-start gap-3 mt-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 32 32"><path fill="currentColor" d="M6.5 5A4.5 4.5 0 0 0 2 9.5v13A4.5 4.5 0 0 0 6.5 27h19a4.5 4.5 0 0 0 4.5-4.5v-13A4.5 4.5 0 0 0 25.5 5zM28 10.403l-12 6.461l-12-6.461V9.5A2.5 2.5 0 0 1 6.5 7h19A2.5 2.5 0 0 1 28 9.5zM4 12.674l11.526 6.207a1 1 0 0 0 .948 0L28 12.674V22.5a2.5 2.5 0 0 1-2.5 2.5h-19A2.5 2.5 0 0 1 4 22.5z"/></svg>
       
        <div>
            <p className="text-xl font-semibold ">Email:</p>
        <p className="text-sm font-normal ">info@maheartfoundation.org</p>
        </div>
      </li>
      <li className="flex items-start gap-3 mt-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 16 16"><path fill="currentColor" d="M10.12 5.164L7.25 8.042L5.854 6.646l-.07-.058a.5.5 0 0 0-.638.765l1.75 1.75l.07.058a.5.5 0 0 0 .638-.058l3.224-3.233l.058-.07a.5.5 0 0 0-.766-.636m-.961 9.394C10.903 13.016 14 9.874 14 7A6 6 0 0 0 2 7c0 2.874 3.097 6.016 4.841 7.558c.668.59 1.65.59 2.318 0M8 2a5 5 0 0 1 5 5c0 1.108-.615 2.395-1.57 3.683c-.934 1.258-2.087 2.377-2.933 3.126a.737.737 0 0 1-.994 0c-.846-.749-2-1.867-2.933-3.126C3.615 9.395 3 8.108 3 7a5 5 0 0 1 5-5"/></svg>
       
        <div>
            <p className="text-xl font-semibold ">Address:</p>
        <p className="text-sm font-normal ">Monte Centre Entre CNPS, Yaounde</p>
        </div>
      </li>
      <li className="flex items-start gap-3 mt-5 mb-20">
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 2a1 1 0 0 1 .993.883L13 7v4.586l2.707 2.707a1 1 0 0 1-1.32 1.497l-.094-.083l-3-3a1 1 0 0 1-.284-.576L11 12V7a1 1 0 0 1 1-1"/></g></svg>
        <span className="font-semibold"></span>
        
         <div>
            <p className="text-xl font-semibold ">Business Hours:</p>
        <p className="text-sm font-normal ">Monday – Friday: 10am – 5pm</p>
        <p className="text-sm font-normal" >Saturday – 10am – 5pm </p>
        <p className="text-sm font-normal ">Sunday – Closed</p>
        </div>
      </li>
    </ul>
  </div>
</div>


      </div>
    </section>
  );
}
