"use client";
import React, { useState } from "react";
import Image from "next/image";

const ImageCarousel = () => {
  const images = [
    { src: "/item3.png", alt: "Image 1" },
    { src: "/itme1.png", alt: "Image 2" },
    { src: "/itme2.png", alt: "Image 3" },
    { src: "/a2.png", alt: "Image 4" },
  ];

  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next and previous clicks
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4">
      {/* Carousel Image */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Left Arrow */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-yellow-600 text-white p-2 rounded-full shadow-md hover:bg-yellow-800 transition"
        onClick={prevImage}
      >
        &#8249;
      </button>

      {/* Right Arrow */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-yellow-600 text-white p-2 rounded-full shadow-md hover:bg-yellow-800 transition"
        onClick={nextImage}
      >
        &#8250;
      </button>

      {/* Dot Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            title="buttonn"
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-yellow-700" : "bg-gray-300"
            } transition-colors`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
