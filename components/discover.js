import React from "react";
import Image from "next/image";
import Card from "./card";

const Discover = () => {
  return (
    <div className="w-full lg:h-[1072px] px-16 py-28  flex-col justify-start items-center gap-20 inline-flex">
    <div className="h-[149px] flex-col justify-start items-center gap-4 flex">
        <div className="text-center text-white text-base font-normal font-['Poppins'] leading-normal">Latest</div>
        <div className="self-stretch h-[109px] flex-col justify-start items-center gap-6 flex">
            <div className="self-stretch text-center text-white text-5xl font-bold font-['Poppins'] leading-[57.60px]">Discover the Past</div>
            <div className="self-stretch text-center text-white text-lg font-normal font-['Poppins'] leading-[27px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
        </div>
    </div>
    <div className="flex flex-col items-start self-stretch justify-start h-full gap-16 lg:flex-row">
      <Card />
      <Card />
      <Card />
    </div>
</div>
  );
};

export default Discover;
