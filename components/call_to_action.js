import React from 'react';
import Image from 'next/image';


const CallToAction = () => {
  return (
    <div className="inline-flex flex-col items-center justify-start w-full gap-20 px-4 md:px-16 py-28">
    <div className="flex flex-col items-center justify-start gap-6">
      <div className="w-full  text-center text-orange-600 text-[50px] md:text-[72px] font-bold font-['Poppins'] leading-[67.20px] md:leading-[86.40px]">Crafting Extraordinary <br className='hidden lg:block'/> Moments</div>
      <div className="w-full  text-center text-white text-lg md:text-xl font-normal font-['Poppins'] leading-[27px] md:leading-[32px]">
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
