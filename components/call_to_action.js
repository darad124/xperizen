import React from 'react';
import Image from 'next/image';


const CallToAction = () => {
  return (
    <div class="w-full px-4 md:px-16 py-28 flex-col justify-start items-center gap-20 inline-flex">
    <div class="flex-col justify-start items-center gap-6 flex">
      <div class="w-full md:w-[768px] text-center text-orange-600 text-[56px] md:text-[72px] font-bold font-['Poppins'] leading-[67.20px] md:leading-[86.40px]">Crafting Extraordinary Moments</div>
      <div class="w-full md:w-[768px] text-center text-white text-lg md:text-xl font-normal font-['Poppins'] leading-[27px] md:leading-[32px]">
  {"At Xperizen, we're not just a brand – we're architects of unforgettable experiences. Our mission is to take you on a journey beyond the ordinary, where every moment becomes a cherished memory."}
</div>

    </div>
    <Image
  src="https://via.placeholder.com/1312x700"
  width={1312}
  height={700}
  layout="responsive"
  alt="A description for your image"
/>
  </div>
  
  );
};

export default CallToAction;
