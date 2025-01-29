// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// export default function HomeBanner() {
//   return (
//     <div>
//       <section className="relative max-w-screen-2xl  h-[700px] mx-auto">
//         {/* Background Image */}
//         <Image
//           src="/banner.jpg"
//           alt="homeBanner"
//           layout="fill"
//           objectFit="cover"
//           className="absolute top-0 left-0 z-0"
//         />
//         {/* Content Div (on the right side of the image) */}
//         <div className="absolute top-[270px] right-0 z-10 p-8 bg-[#f4e1bf] bg-opacity-80 max-w-[900px] sm:max-w-[750px] md:max-w-[1200px] lg:max-w-[1200px] xl:max-w-[630px]">
//           {/* Small Screen: Heading with smaller font size */}
//           <h1 className="mt-3 text-gray-700 text-sm font-semibold">
//             New Arrival
//           </h1>

//           {/* Larger Screen: Font size increases for the main heading */}
//           <h1 className="text-4xl sm:text-3xl md:text-4xl  font-bold text-[#76561f]">
//             Discover Our New Collections
//           </h1>

//           {/* Small Screen: Text with smaller size */}
//           <p className="text-gray-700 mt-4 text-sm sm:text-xs md:text-sm font-semibold w-[90%] sm:w-full">
//             This is a description of the page. Learn more about us and what we
//             offer! Lorem ipsum dolor sit amet consectetur adipisicing elit.
//           </p>

//           {/* Button: Ensuring it scales well across different screen sizes */}
//           <button className="mt-6 px-12 py-3 text-sm sm:text-xs md:text-sm bg-[#ae7d29] text-white rounded-lg hover:bg-yellow-600 transition">
//             <Link href={"/products"}>BUY NOW</Link>
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }import React, { useEffect, useState } from "react";
"use client"
import Image from "next/image";
import Link from "next/link";
import { useState,useEffect } from "react";

export default function HomeBanner() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "/banner.jpg",
    "/b1.png",
    "/b2.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-screen-2xl mx-auto">
      {/* First Section: Discover Our New Collections */}
      <div className="absolute md:top-[180px] top-[50px] right-0 z-10 p-8 bg-[#f4e1bf] bg-opacity-30 md:bg-opacity-65 max-w-[500px]  md:max-w-[1200px] lg:max-w-[1200px] xl:max-w-[630px] rounded-lg shadow-lg">
        <h1 className="mt-3 text-gray-700 text-sm font-semibold">New Arrival</h1>

        <h1 className="text-4xl sm:text-3xl md:text-4xl font-extrabold text-[#76561f] tracking-tight">
          Discover Our New Collections
        </h1>

        <p className="text-gray-700 mt-4 text-sm sm:text-xs md:text-sm font-medium w-[90%] sm:w-full">
          Explore the latest trends and must-have products! Our new collection is designed to suit all your needs.
        </p>

        <button className="mt-6 px-12 py-3 text-sm sm:text-xs md:text-sm bg-[#ae7d29] text-white rounded-lg hover:bg-yellow-600 transition ease-in-out duration-200 transform hover:scale-105">
          <Link href="/products">BUY NOW</Link>
        </button>
      </div>

      {/* Second Section: Banner Image */}
      <div className="relative w-full h-[400px] sm:h-[600px] md:h-[700px]">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <Image
            src={images[imageIndex]} // Dynamically change image based on index
            alt="homeBanner"
            layout="fill"
            objectFit="cover"
            className="transition-all duration-1000 ease-in-out"
          />
        </div>
      </div>

      {/* Optional Arrow Navigation (For Image Scrolling Effect) */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-20">
        <button
          onClick={() =>
            setImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
          }
          className="text-white text-3xl p-2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full"
        >
          &#8592;
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-20">
        <button
          onClick={() =>
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length)
          }
          className="text-white text-3xl p-2 bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
