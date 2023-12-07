import ImageListItem from "@/components/imagecomponent";
const Tour = () => {
    const images = [
        { src: './exp1.jpeg',   title: 'Cultural Immersion.', 
        description: 'Explore the captivating setting of a traditional Yoruba village, where each day unfolds with authentic experiences that take you back in time' },
        { src: './exp2.jpeg', title: 'Guided Village Events', 
        description: 'Delve into the soul of Yoruba traditions with immersive village events that breathe life into centuries-old customs.' },
        { src: './exp3.jpeg', title: 'Traditional Workshops.', description: 'Unleash your inner artisan with hands-on workshops in basket weaving, tie and dye, and blacksmithing, guided by skilled local craftsmen' },
        { src: './exp4.jpeg', title: 'Delectable Cuisine.   ', description: 'Savour the rich flavours of Yoruba cuisine as our chefs prepare mouthwatering local dishes that will tantalise your taste buds.' },
        { src: './exp5.jpeg', title: 'Engaging Community Interactions...', description: 'Connect with the welcoming local community and gain insights into their way of life, fostering cultural understanding and appreciation' },
        { src: './exp6.jpeg', title: 'Cultural Performances.', description: 'Be mesmerised by vibrant traditional dance performances that will leave you in awe of the Yoruba cultural heritage.' },
        {
            src: './exp7.jpeg',
            title: 'Moonlight Storytelling.',
            description: 'Gather \'round for moonlight storytelling sessions where ancient tales and legends come to life under the night sky.'
          },
          
        { src: './exp8.jpeg', title: 'Horseback Riding Adventures.', description: 'Embark on thrilling horseback riding adventures through the picturesque landscapes of the Yoruba village.' },
        { src: './exp9.jpeg', title: 'Yoruba Ceremonies.', description: 'Connect with the welcoming local community and gain insights into their way of life, fostering cultural understanding and appreciation' },
       
        // Add more images here...
      ];
  return (
    <div>
      <div className="relative flex flex-col w-full px-16 py-12 bg-black md:h-screen border-box md:py-28">
        <div
          className="absolute inset-0 bg-opacity-20"
          style={{
            backgroundImage: "url(./experience.svg)",
            filter: "blur(0.5px) brightness(0.5)",
            zIndex: 1,
          }}
        />
        <div className="flex md:flex-row flex-col w-full md:gap-20 gap-6 mt-auto text-white z-10  font-['Poppins']">
          <div className="flex flex-col w-full md:gap-6 ">
            <h1 className=" md:text-[56px] text-5xl font-bold leading-[67.20px] ">
              Xperizen&apos;s <br /> “Village Experience”.
            </h1>
            <p className=" text-lg font-normal  leading-[27px] whitespace-normal">
              Your adventure begins here at Xperizen. Welcome to a world where
              every moment is <br /> a masterpiece waiting to be lived.
            </p>
          </div>
          <div className="flex flex-col  mt-auto w-[35.36%] ml-auto">
            <p className="text-base font-bold leading-normal">Date</p>
            <p className="text-base leading-normal">December 2023</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-20 px-4 py-8 md:px-16 md:py-28">
        <div className="flex flex-col items-center justify-start w-full gap-4">
          <div className="self-stretch text-center text-white md:text-5xl text-3xl font-bold font-['Poppins'] md:leading-[57.60px]">
            Experience the Heartbeat of Traditional Yoruba Culture
          </div>
          <div className="md:w-[43.36%] text-justify md:text-center text-white  text-base font-semibold font-['Poppins'] leading-normal">
            Step into the enchanting world of Yoruba tradition as we transport
            you to an authentic Yoruba village for three unforgettable days.
            Xperizen, your gateway to exceptional experiences, is proud to
            present this immersive journey into the heart of Traditional Yoruba
            culture.
          </div>
        </div>
        <div className="flex flex-col gap-4">
            
        {images.map((image, index) => (
        <ImageListItem key={index} image={image} index={index} />
      ))}
            
         </div>
      </div>
    </div>
  );
};

export default Tour;
