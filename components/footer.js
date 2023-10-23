import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      {/* Desktop Footer Content (hidden on small and medium screens) */}
      <div className="w-full h-[357px] px-4 md:px-16 py-20 shadow border-t border-white flex-col justify-start items-center gap-20 inline-flex lg:flex md:hidden hidden md:block">
        <div className="inline-flex items-end self-stretch justify-start gap-8">
          <div className="flex-col justify-start items-start gap-2.5 inline-flex">
            <Image className="w-[177.95px] h-[60px]" src="./logo.svg" alt="Logo" />
          </div>
          <div className="text-white text-base font-semibold font-['Poppins'] leading-normal flex items-start justify-start gap-8 lg:flex lg:items-center">
            <div>About</div>
            <div>Blog</div>
            <div>Tours and Events</div>
            <div>Contact Us</div>
          </div>
          <div className="flex items-center justify-end h-6 gap-3 grow shrink basis-0 lg:flex">
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
            <Image src="./X.svg" width={24} height={24} alt="Twitter logo" />
            <Image
              src="./Linkedin.svg"
              width={24}
              height={24}
              alt="LinkedIn logo"
            />
            <Image
              src="./Youtube.svg"
              width={24}
              height={24}
              alt="YouTube logo"
            />
          </div>
        </div>
        <div className="self-stretch h-[57px] flex-col justify-start items-center gap-8 flex">
          <div className="self-stretch h-px bg-white" />
          <div className="inline-flex items-start justify-start gap-6">
            <div className="text-white text-sm font-normal font-['Poppins'] leading-[21px]">
              2023 Experizen. All right reserved.
            </div>
            <div className="flex items-start justify-start gap-6">
              <div className="text-white text-sm font-normal font-['Poppins'] underline leading-[21px]">
                Privacy Policy
              </div>
              <div className="text-white text-sm font-normal font-['Poppins'] underline leading-[21px]">
                Terms of Service
              </div>
              <div className="text-white text-sm font-normal font-['Poppins'] underline leading-[21px]">
                Cookies Settings
              </div>
              <div className="text-orange-600 text-sm font-normal font-['Poppins'] leading-[21px]">
                Designed by Kingpin Design
              </div>
              <div className="relative w-6 h-6 bg-orange-600 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Footer Content (hidden on large screens) */}
      <div className="inline-flex flex-col items-center justify-start w-full gap-4 px-4 py-8 border border-black shadow md:px-16 lg:hidden">
        <div className="inline-flex flex-col items-center justify-start gap-4">
          <div className="flex items-start justify-center gap-4">
            <Image className="h-10 w-28" src="/logo.svg" alt="Logo" />
          </div>
          <div className="flex items-start justify-center gap-4 md:justify-start">
            <div className="text-white text-base font-semibold font-[Poppins] leading-normal">
              About
            </div>
            <div className="text-white text-base font-semibold font-[Poppins] leading-normal">
              Blog
            </div>
            <div className="text-white text-base font-semibold font-[Poppins] leading-normal">
              Tours and Events
            </div>
            <div className="text-white text-base font-semibold font-[Poppins] leading-normal">
              Contact Us
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 md:justify-end">
            <Image src="/Facebook.svg" width={24} height={24} alt="Facebook logo" />
            <Image src="/Instagram.svg" width={24} height={24} alt="Instagram logo" />
            <Image src="/X.svg" width={24} height={24} alt="Twitter logo" />
            <Image src="/Linkedin.svg" width={24} height={24} alt="LinkedIn logo" />
            <Image src="/Youtube.svg" width={24} height={24} alt="YouTube logo" />
          </div>
        </div>
        <div className="self-stretch h-[1px] bg-white w-4/5 md:w-full" />
        <div className="inline-flex flex-col items-center justify-start gap-4 md:items-start md:flex-row">
          <div className="text-white text-sm font-normal font-[Poppins] leading-[21px] md:mr-4">
            2023 Experizen. All right reserved.
          </div>
          <div className="flex items-start justify-center gap-4 md:justify-start">
            <div className="text-white text-sm font-normal font-[Poppins] underline leading-[21px]">
              Privacy Policy
            </div>
            <div className="text-white text-sm font-normal font-[Poppins] underline leading-[21px]">
              Terms of Service
            </div>
            <div className="text-white text-sm font-normal font-[Poppins] underline leading-[21px]">
              Cookies Settings
            </div>
          </div>
          <div className="text-orange-600 text-sm font-normal font-[Poppins] leading-[21px]">
            Designed by Kingpin Design
          </div>
          <div className="relative w-6 h-6 bg-orange-600 rounded" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
