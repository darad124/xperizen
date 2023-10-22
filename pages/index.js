import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Discover from "@/components/discover";
import ContactUs from "@/components/contact";

const HomePage = () => {
  return (
    <div >
      <div
        className="w-full bg-center max-w-full bg-cover h-[400px] md:h-[800px] bg-black bg-opacity-30"
        style={{
          backgroundImage: "url(./home1img.jpg)",
          filter: "blur(0.5px)",
        }}
      >
        <div className="flex items-center justify-center pt-10 md:pt-[154px]">
          <div className="w-1/2 md:w-[173.5px] lg:w-[347px]">
            <Image
              className="w-full h-auto "
              src={"./logo.svg"}
              alt="Logo"
              layout="responsive"
              width={347}
              height={117}
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-10">
        <div className="w-full md:w-[980px] text-center text-zinc-100 text-2xl md:text-5xl font-bold font-['Poppins'] lg:leading-[57.60px]">
  {"Life is not a problem to be solved, but a reality to be experienced."} <br />- Soren Kierkegaard
  <br />
</div>

        </div>
      </div>
      <div className="w-full h-auto lg:h-[302px] px-4 flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-[616px] lg:h-[134px] m-4 text-white text-[30px] lg:text-[56px] font-bold font-['Poppins'] lg:leading-[67.20px] text-center lg:text-left">
          Step into the past with Experizen
        </div>
        <div className="lg:w-[616px] w-full h-[134px] flex flex-col space-y-6">
          <div className="w-full lg:w-[616px] text-white px-4 lg:px-0 text-lg font-normal font-['Poppins'] lg:leading-[27px] text-center lg:text-left">
            Experience history like never before and immerse yourself in the
            sights, sounds, and stories of century past.
          </div>
          <div className="relative inline-flex flex-col items-start justify-start w-full h-16 gap-1 pt-4 sm:gap-4">
            <div className="absolute inline-flex items-start self-stretch justify-start h-auto gap-2 right-6 sm:gap-4 lg:left-0">
              <button className="px-3 py-1.5 sm:px-6 sm:py-3 bg-orange-600 rounded-[6.5px] sm:rounded-[13px] justify-center items-center gap-1 sm:gap-2 flex ">
                <div className="text-xs sm:text-base text-white font-normal font-['Poppins'] leading-normal">
                  Explore
                </div>
              </button>
              <button className="flex items-center justify-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-6 sm:py-3 bg-black   hover:scale-105 transition-transform animate-pulse">
                    <div className="text-white whitespace-nowrap text-xs sm:text-base font-normal font-['Poppins'] leading-normal">
                      Book Now
                    </div>
                    <div className="relative w-6 h-6 transition-transform transform group-hover:translate-x-2">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="text-2xl text-white"
                      />
                    </div>
                  </button>
            </div>
          </div>
        </div>
      </div>
      <div className="items-center justify-center w-full h-full ">
        <div className="lg:px-16 px-4 py-[112px] lg:flex-row flex flex-col ">
          <div className="flex  w-full h-full lg:h-[640px]">
            <div className="justify-between w-full">
              <div className="text-center lg:text-left text-white text-base font-semibold font-['Poppins'] leading-normal">
                Uncover
              </div>
              <div className="w-full text-white lg:text-5xl text-center lg:text-left text-2xl font-bold font-['Poppins'] lg:leading-[57.60px]">
                Step Back in Time and Experience History.
              </div>
              <div className="w-full text-white lg:text-lg font-normal font-['Poppins'] pt-[24px] leading-[27px] text-center lg:text-left">
                At Experizen, we transport you back in time to experience life
                as it was centuries ago.{" "}
                <span className="hidden lg:inline">
                  Immerse yourself in the sights, sounds and stories of the
                  past, and gain a deeper understanding of our shared history.
                  Our time travel experiences are meticulously crafted to
                  provide an authentic and educational experience through time.
                </span>
              </div>

              <div className="relative inline-flex flex-col items-start justify-start w-full h-16 gap-1 pt-4 sm:gap-4">
                <div className="absolute inline-flex items-start self-stretch justify-start h-auto gap-2 right-6 sm:gap-4 lg:left-0">
                  <button className="px-3 py-1.5 sm:px-6 sm:py-3 bg-orange-600   justify-center items-center gap-1 sm:gap-2 flex">
                    <div className="text-white text-xs sm:text-base whitespace-nowrap lg:text-base font-normal font-['Poppins'] leading-normal">
                      Learn More
                    </div>
                  </button>
                  <button className="flex items-center justify-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-6 sm:py-3 bg-black  hover:scale-105 transition-transform animate-pulse">
                    <div className="text-white whitespace-nowrap text-xs sm:text-base font-normal font-['Poppins'] leading-normal">
                      Book Now
                    </div>
                    <div className="relative w-6 h-6 transition-transform transform group-hover:translate-x-2">
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="text-2xl text-white"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full lg:h-[640px] lg:pl-[80px] lg:pt-[0] pt-4 ">
            <Image
              src="https://via.placeholder.com/616x640" // replace with your image path
              alt="Description of the image" // replace with your image description
              width={500} // replace with your image width
              height={300} // replace with your image height
            />
          </div>
        </div>
      </div>
      <Discover />
      <ContactUs />
    </div>
  );
};

export default HomePage;
