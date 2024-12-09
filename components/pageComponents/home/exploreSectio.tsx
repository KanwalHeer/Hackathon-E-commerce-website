import React from "react";
import ImageCarousel from "./imageCrosel";
import { HiArrowSmallRight } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";

const ExploreSection = () => {
  return (
    <section className="relative max-w-[1200px] mx-auto  py-12">
      {/* Grid layout for the boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* First Box */}
        <div className="flex flex-col justify-center items-start bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            50+Beautiful rooms inspiration
          </h2>
          <p className="text-gray-600 mb-2">
            Discover a wide variety of products that fit your taste and needs.
            From furniture to decor, we have it all!
          </p>
          <button className="px-8 py-3 text-white bg-yellow-600 rounded-lg hover:bg-yellow-600 transition">
            <Link href={"/products"}>Shop Now</Link>
          </button>
        </div>
        {/* Second Box with Image and Text Box */}
        <div className="relative">
          {/* Image */}
          <Image
            src="/a1.png"
            alt="explore-image"
            width={500}
            height={300}
            className="w-full h-full object-cover rounded-lg"
          />

          {/* Text Box Over Image */}
          <div className="absolute inset-0 flex justify-start items-end p-4 bg-black bg-opacity-0 rounded-lg">
            <div className="bg-white text-gray-600 font-semibold bg-opacity-60 px-8 py-6">
              <div className="flex flex-row gap-4">
                <p>1</p>
                <p>Bedrooom</p>
              </div>
              <p className="text-2xl text-gray-800">Inner Peace</p>
            </div>
            <button
              title="button"
              className="bg-yellow-600 text-white py-3 text-[46px] px-5"
            >
              <HiArrowSmallRight size={24} />
            </button>
          </div>
        </div>
        <ImageCarousel />
      </div>
    </section>
  );
};

export default ExploreSection;
