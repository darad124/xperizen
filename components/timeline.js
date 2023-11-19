import React from "react";
import Image from "next/image";

const Timeline = () => {
  const data = Array(5).fill(0);
  return (
    <div className="w-full h- lg:px-16 px-4 lg:py-28 py-6  justify-start items-start lg:gap-20 flex flex-col lg:flex-row">
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
        <div className="text-white text-base font-semibold font-['Poppins'] leading-normal">
          Our story
        </div>
        <div className="self-stretch text-white lg:text-5xl text-2xl justify-center font-bold font-['Poppins'] lg:leading-[57.60px]">
          Share your journey from
          the beginning to now
        </div>
      </div>
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
      const data = Array(5).fill(0); // Create an array of 5 elements


    {data.map((_, index) => (
     <div key={index} className="lg:w-[616px] h-[164px] justify-start items-start lg:gap-10 inline-flex">
     <div className="flex-col justify-start items-center gap-4 inline-flex">
    
     <Image 
  src="/Relume.png"
  width={48}
  height={48}
  alt="Relume logo"
  className="w-8 h-8 lg:w-16 lg:h-16"
/>

     
     <div className="w-[0px] h-[100px] border-2 border-white"></div>

     </div>
     <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 flex flex-wrap">
       <div className="self-stretch text-white text-base font-semibold font-['Poppins'] leading-normal">Year • Month</div>
       <div className="self-stretch text-white text-2xl lg:text-5xl font-bold font-['Poppins'] leading-[41.60px]">Summary of event</div>
       <div className="self-stretch text-white text-base whitespace-normal overflow-wrap  font-normal font-['Poppins'] leading-normal">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
</div>

     </div>
   </div>
    ))}
  

      </div>
    </div>
  );
};

export default Timeline;
