// Team.js
import React from "react";
import Image from "next/image";
const Team = () => {
  const teamMembers = Array(6).fill({
    name: "Full name",
    title: "Job title",
    description:
      "Lorem ipsutum tristique lorem ghh gjjjjjjjjjjjjjj hjjjjjjjjjj.",
    image: "https://via.placeholder.com/395x395",
  });

  return (
    <div className="inline-flex flex-col items-start justify-start w-full gap-20 px-4 py-28">
      <div className="flex flex-col items-start justify-start gap-4 ">
        <div className="text-white text-base font-semibold font-['Poppins'] leading-normal">
          Our team
        </div>
        <div className="flex flex-col items-center self-stretch justify-start gap-6">
          <div className="self-stretch text-orange-600 text-5xl font-bold font-['Poppins'] leading-[57.60px]">
            Meet the People who make things happen
          </div>
          <div className="self-stretch text-white text-lg font-normal font-['Poppins'] leading-[27px]">
            A common concern a visitor experiences is how well will the product
            or service be supported. Introducing the team eases fears while
            showing confidence.
          </div>
        </div>
      </div>
      <div className="flex items-start justify-start gap-24 ">
        <div className="flex flex-wrap items-start self-stretch justify-start w-full ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="items-start self-stretch justify-start flex-grow gap-12 py-8"
            >
              <div className="inline-flex flex-col items-start justify-start w-full gap-6 shrink basis-0">
                <Image
                  src={member.image}
                  alt="Member Image"
                  width={395}
                  height={395}
                />
                <div className="flex flex-col items-center self-stretch justify-start gap-4">
                  <div className="flex flex-col items-center self-stretch justify-start">
                    <div className="self-stretch text-white text-xl font-semibold font-['Poppins'] leading-[30px]">
                      {member.name}
                    </div>
                    <div className="self-stretch text-white text-lg font-normal font-['Poppins'] leading-[27px]">
                      {member.title}
                    </div>
                  </div>
                  <div className="self-stretch text-white text-base font-normal font-['Poppins'] leading-normal">
                    {member.description}
                  </div>
                </div>
                <div className="justify-start items-start gap-3.5 inline-flex">
                  <Image
                    src="./Facebook.svg"
                    width={24}
                    height={24}
                    alt="Facebook logo"
                  />
                  <Image
                    src="./Instagram.svg"
                    width={24}
                    height={24}
                    alt="Instagram logo"
                  />
                  <Image
                    src="./X.svg"
                    width={24}
                    height={24}
                    alt="Twitter logo"
                  />

                  <Image
                    src="./Linkedin.svg"
                    width={24}
                    height={24}
                    alt="LinkedIn logo"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="inline-flex flex-col items-start justify-start gap-6 ">
        <div className="flex flex-col items-center justify-start gap-4 ">
          <div className="self-stretch text-white text-3xl font-bold font-['Poppins'] leading-[41.60px]">
            We’re hiring!
          </div>
          <div className="self-stretch text-white text-lg font-normal font-['Poppins'] leading-[27px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </div>
        </div>
        <div className="px-6 py-3 bg-black rounded-[13px] border border-white justify-center items-center gap-2 inline-flex">
          <div className="text-white text-base font-normal font-['Poppins'] leading-normal">
            Open positions
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
