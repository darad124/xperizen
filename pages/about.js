import CallToAction from "@/components/call_to_action";
import Team from "@/components/team";
import Image from 'next/image'

import Timeline from "@/components/timeline";
const teamMembers = [
  {
    name: "Full name",
    title: "Job title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "https://via.placeholder.com/395x395",
  },
  // More team members...
];

const About = () => {
  return (
    <div className="inline-flex flex-col items-start justify-start w-full ">
      <CallToAction />
      <Timeline />
      <div className="w-full h-full lg:px-16 px-4 lg:py-28 py-6 justify-center items-start lg:gap-20 flex flex-wrap">
        <div className="flex-col justify-center items-center lg:gap-4 flex-wrap flex whitespace-normal">
          <div className="text-white text-base font-semibold font-['Poppins'] leading-normal">
            Our vision
          </div>
          <div className="lg:w-[768px] text-center">
            <span className="text-white lg:text-2xl font-bold font-['Poppins'] lg:leading-[33.60px]">
              We are the masters of experience-selling. Xperizen specialises in
              curating exceptional events and immersive tours that transport you
              to a world of authenticity and wonder. Whether you&apos;re a
              traveler seeking adventure or a local in search of something new,
            </span>

            <span className="text-orange-600 lg:text-2xl font-bold font-['Poppins'] lg:leading-[33.60px]">
              Xperizen
            </span>
            <span className="text-white lg:text-2xl font-bold font-['Poppins'] lg:leading-[33.60px]">
              {" "}
              is your gateway to extraordinary moments.
            </span>
          </div>
        </div>
      </div>
      <div className="w-full  lg:px-16 px-4 lg:py-28 py-6 flex-col justify-center items-start gap-20  inline-flex">
        <div className=" flex-col justify-start items-start gap-4 flex ">
          <div className="text-center text-white text-base font-semibold font-['Poppins'] leading-normal">
            Our values
          </div>
          <div className="self-stretch lg:h-[136px] flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch text-orange-600 lg:text-5xl text-3xl font-bold font-['Poppins'] lg:leading-[57.60px]">
              What Sets Us Apart.
            </div>
            <div className="self-stretch text-white lg:text-lg font-normal font-['Poppins'] lg:leading-[27px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare.
            </div>
          </div>
        </div>
        <div className="self-stretch   justify-start items-start gap-12  flex">
          <div className="self-stretch justify-start items-start gap-12 lg:flex-row flex-col flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
              <Image
                src="https://via.placeholder.com/405x240"
                alt="Placeholder Image"
                layout="fill"
                objectFit="cover"
              />

              <div className="self-stretch  flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch text-white lg:text-4xl text-2xl font-bold font-['Poppins'] lg:leading-[41.60px]">
                  Authenticity Redefined
                </div>
                <div className="self-stretch text-white text-base font-normal font-['Poppins'] leading-normal">
                  We don&apos;t just create experiences; we craft authenticity.
                  Our events and tours are designed to immerse you in the heart
                  and soul of every destination, leaving you with memories that
                  last a lifetime.
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
            <Image
                src="https://via.placeholder.com/405x240"
                alt="Placeholder Image"
                layout="fill"
                objectFit="cover"
              />
              <div className="self-stretch h-[186px] flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch text-white lg:text-4xl text-2xl font-bold font-['Poppins'] lg:leading-[41.60px]">
                  Creativity Unleashed
                </div>
                <div className="self-stretch text-white text-base font-normal font-['Poppins'] leading-normal">
                  Our team of visionaries and creatives are the driving force
                  behind every Xperizen adventure. We push boundaries, explore
                  the uncharted, and bring innovation to life, all for the sake
                  of crafting moments that captivate your senses.
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
            <Image
                src="https://via.placeholder.com/405x240"
                alt="Placeholder Image"
                layout="fill"
                objectFit="cover"
              />
              <div className="self-stretch h-[186px] flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch text-white lg:text-4xl text-2xl font-bold font-['Poppins'] lg:leading-[41.60px]">
                  Endless Exploration
                </div>
                <div className="self-stretch text-white text-base font-normal font-['Poppins'] leading-normal">
                  With Xperizen, the world is your playground. Whether
                  you&apos;re embarking on a solo journey, travelling with
                  friends, or seeking corporate adventures, we have a tailored
                  experience waiting for you.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Team teamMembers={teamMembers} />
    </div>
  );
};

export default About;
