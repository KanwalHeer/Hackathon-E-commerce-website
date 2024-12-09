import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function HomeBanner() {
  return (
    <div>
      <section className="relative max-w-screen-2xl  h-[700px] mx-auto">
        {/* Background Image */}
        <Image
          src="/banner.jpg"
          alt="homeBanner"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 z-0"
        />
        {/* Content Div (on the right side of the image) */}
        <div className="absolute top-[270px] right-0 z-10 p-8 bg-[#f4e1bf] bg-opacity-80 max-w-[900px] sm:max-w-[750px] md:max-w-[1200px] lg:max-w-[1200px] xl:max-w-[630px]">
          {/* Small Screen: Heading with smaller font size */}
          <h1 className="mt-3 text-gray-700 text-sm font-semibold">
            New Arrival
          </h1>

          {/* Larger Screen: Font size increases for the main heading */}
          <h1 className="text-4xl sm:text-3xl md:text-4xl  font-bold text-[#76561f]">
            Discover Our New Collections
          </h1>

          {/* Small Screen: Text with smaller size */}
          <p className="text-gray-700 mt-4 text-sm sm:text-xs md:text-sm font-semibold w-[90%] sm:w-full">
            This is a description of the page. Learn more about us and what we
            offer! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          {/* Button: Ensuring it scales well across different screen sizes */}
          <button className="mt-6 px-12 py-3 text-sm sm:text-xs md:text-sm bg-[#ae7d29] text-white rounded-lg hover:bg-yellow-600 transition">
            <Link href={"/products"}>BUY NOW</Link>
          </button>
        </div>
      </section>
    </div>
  );
}
