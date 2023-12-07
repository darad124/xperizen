// ImageComponent.js
import { useRouter } from 'next/router';
import React, { useRef } from 'react';

function ImageComponent({ title, description }) {
    
    return (
      <div className="flex-col justify-center items-start gap-2.5 inline-flex z-10">
        <div className="self-stretch text-white text-[32px] font-bold font-['Poppins'] leading-[41.60px]">{title}</div>
        <div className="self-stretch text-white md:text-[20px] text-[15px]  md:font-normal font-['Poppins'] leading-normal">{description}</div>
      </div>
    );
  }
  
  

  // ImageListItem.js



function ImageListItem({ image, index }) {
  const router = useRouter();
  const liRef = useRef(); // Create a ref

  return (
    <li
    ref={liRef} // Assign the ref to your element
    className="h-[204px] w-full py-5 relative bg-black bg-opacity-40  justify-start items-center gap-10 inline-flex hover:scale-110 transition-transform duration-300 cursor-pointer list-disc"
    
    onMouseEnter={() => {
      liRef.current.style.transform = 'scale(1.1)'; // This will scale up the element when hovered
    }}
    onMouseLeave={() => {
      liRef.current.style.transform = 'scale(1)'; // This will return the element to its original size when not hovered
    }}
    onClick={() => router.push(`/image/${index}`)}
  >
     <div
          className="absolute inset-0 rounded-[13px] bg-opacity-20"
          style={{
            backgroundImage: `url(${image.src})`,
            backgroundPosition: 'center', // This will ensure the middle of the image is shown
            backgroundSize: 'cover', // This will cover the entire area of the element
            transition: 'transform 1s ease-in-out ', // This will add a transition effect to the transform property
            filter: "blur(0.5px) brightness(0.5)",
          }}
        />


      <div className="flex-col items-center justify-start hidden gap-4 md:inline-flex">
        <div className="relative w-12 h-12" />
        <div className="w-[100px] h-[0px] origin-top-left rotate-90 border-2 border-white"></div>
      </div>
      <ImageComponent title={image.title} description={image.description} />
    </li>
  );
}

export default ImageListItem;
