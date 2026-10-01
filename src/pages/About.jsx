import React from 'react'

const About = () => {
  return (
    <div>
        <section className=' h-190 w-280 left-80 relative flex items-center justify-center bg-[#f5f1e6] 
        overflow-hidden rounded-3xl '>
        
          <div className="absolute left-1 top-40 w-28 h-80 bg-orange-300 rounded-2xl opacity-70"></div>
         <div className="absolute right-14 top-42 w-28 h-72 bg-yellow-300 rounded-2xl opacity-70"></div>
        <div className="absolute right-10 top-52 w-28 h-72 bg-purple-300 rounded-2xl opacity-70"></div>

{/* RIGHT BLUE TAB */}
<div className="absolute right-6 top-72 w-28 h-72 bg-blue-300 rounded-2xl opacity-70"></div>
<div className="relative bg-[#f7f3e9] w-[900px] h-[550px] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] p-10 flex gap-10">
    {/* LEFT PAGE */}
<div className="w-1/2 relative">
<div className="relative h-full 
bg-[repeating-linear-gradient(to_bottom,#f7f3e9,#f7f3e9_32px,#e2dac7_33px)] p-6">

  {/* RED MARGIN LINE */}
  <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-red-300 opacity-60"></div>

  {/* TEXT */}
  <div className="font-[Patrick_Hand] text-gray-700 text-[17px] leading-[32px]">

    <p className="mb-4 font-semibold">Dear Diary,</p>

    <p className="mb-4">
      It all started in the summer break of class 2...
    </p>

    <p className="mb-4">
      That’s when I realized I’m actually bad at sketching...
    </p>

  </div>

</div></div>
<div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#e0d8c5]"></div>

{/* RIGHT PAGE */}
<div className="w-1/2 relative flex items-center justify-center">
<div className="relative">

  <div className="bg-white p-3 shadow-lg rotate-3">
    <img 
      src="/your-photo.jpg"
      className="w-60 h-72 object-cover"
    />
  </div>

</div>
<img src="/trophy.png" className="absolute top-0 right-10 w-16 rotate-12" />

<img src="/sticker.png" className="absolute top-40 right-0 w-20" />

<img src="/angry.png" className="absolute bottom-20 right-5 w-16" />
<div className="absolute bottom-10 left-10 bg-white border-4 border-blue-800 text-blue-800 px-4 py-2 rounded-full font-bold rotate-[-5deg]">
  AAO OREO SHAKE PITE H
</div>
</div>
</div>
       
       
        </section>
    </div>
  )
}

export default About