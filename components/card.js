import Image from 'next/image';
const Card = () => {
  return (
    <div className="inline-flex flex-col items-start justify-start gap-6 ">
      <Image
        className="self-stretch"
        src="https://via.placeholder.com/416x300"
        alt="A description for your image"
        width={416}
        height={300}
      />
      <div className="flex flex-col items-start self-stretch justify-start gap-4">
        <div className="inline-flex items-center justify-start gap-4">
          <div className="flex items-start justify-start px-2 py-1 bg-black">
            <div className="text-white text-sm font-semibold font-['Poppins'] leading-[21px]">
              Category
            </div>
          </div>
          <div className="text-white text-sm font-semibold font-['Poppins'] leading-[21px]">
            5 min read
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <div className="self-stretch text-white text-2xl font-bold font-['Poppins'] leading-[33.60px]">
            Blog title heading will go here
          </div>
          <div className="self-stretch text-white text-base font-normal font-['Poppins'] leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </div>
        </div>
      </div>
      <div className="inline-flex items-center justify-center gap-2">
        <div className="text-white text-base font-normal font-['Poppins'] leading-normal">
          Read more
        </div>
        <div className="relative w-6 h-6" />
      </div>
    </div>
  );
};

export default Card;
