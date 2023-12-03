import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full" >
      {/* Desktop Footer Content (hidden on small and medium screens) */}
      <div className="w-full h-[357px] px-4 md:px-16 py-20 shadow border-t border-white flex-col justify-start items-center gap-20  lg:flex hidden md:flex">
        <div className="inline-flex items-end self-stretch justify-start gap-8">
          <div className="flex-col justify-start items-start gap-2.5 inline-flex">
            <Image
              className="w-[177.95px] h-[60px]"
              src="./logo.svg" // Adjust the path to your logo image
              alt="Logo"
              width={177.95} // Specify the width in pixels
              height={60} // Specify the height in pixels
              layout="fixed" // Set the layout to "fixed"
            />
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
      <div className="inline-flex flex-col items-center justify-start w-full gap-4 py-8 border border-black shadow md:px-16 lg:hidden md:hidden">
      <div className="w-full h-[191px] px-16 py-4 border-t border-slate-500 flex-col justify-center items-center gap-6 inline-flex">
    <div className="w-[357px] justify-between items-end inline-flex">
        <div className="flex-col justify-start items-start gap-2.5 inline-flex">
        <Image
              className="w-[120px] h-[34px]"
              src="./logo.svg" // Adjust the path to your logo image
              alt="Logo"
              width={120} // Specify the width in pixels
              height={34} // Specify the height in pixels
              layout="fixed" // Set the layout to "fixed"
            />
        </div>
        <div className="flex items-center justify-center gap-3">
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
    <div className="h-[101px] flex-col justify-start items-center gap-4 flex">
        <div className="self-stretch h-px bg-white" />
        <div className="flex flex-col items-center justify-center gap-3">
            <div className="text-white text-xs font-normal font-['Poppins'] leading-[18px]">2023 Experizen. All right reserved.</div>
            <div className="flex flex-row gap-2 text-white text-xs font-normal font-['Poppins'] underline leading-[18px]">
  <a href="#" className="whitespace-nowrap">Privacy Policy</a>
  <a href="#" className="whitespace-nowrap">Terms of Service</a>
  <a href="#" className="whitespace-nowrap">Cookies Settings</a>
</div>

            <div className="inline-flex items-center justify-center gap-2">
                <div className="text-orange-600 text-xs font-normal font-['Poppins'] underline leading-[18px]">Designed by Kingpin Design</div>
                <div className="relative w-6 h-6 bg-orange-600 rounded" />
            </div>
        </div>
    </div>
</div>
      </div>
    </div>
  );
};

export default Footer;
