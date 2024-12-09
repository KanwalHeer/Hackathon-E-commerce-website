"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";

const CompareSection1 = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  return (
    <div className="max-w-[1300px] mx-auto py-8 mt-8">
      <ul className=" flex flex-col md:flex-row lg:flex-row  justify-center gap-8 px-4">
        {/* First Section: Heading + View More Link */}
        <div className="w-full md:w-1/4 ">
          <h2 className="text-3xl font-semibold mb-4">
            Go to product page for get more products
          </h2>
          <a
            href="#view-more"
            className="text-gray-600 text-lg border-b border-gray-600 text-center"
          >
            View more
          </a>
        </div>

        {/* First Product */}
        <div className="w-full md:w-1/4 text-center">
          <Image
            src="/item3.png"
            alt="Product 1"
            className="w-full h-48 object-cover rounded-md mb-4"
            height={500}
            width={300}
          />
          <h3 className="font-semibold text-lg mb-2">Product Name 1</h3>
          <p className="text-gray-800 mb-2">$99.99</p>
          <div className="flex justify-center items-center text-yellow-500">
            {/* Display rating, assume 4 stars for this example */}
            <span>⭐⭐⭐⭐</span>
          </div>
        </div>

        {/* Second Product */}
        <div className="w-full md:w-1/4 text-center">
          <Image
            src="/item3.png"
            alt="Product 2"
            className="w-full h-48 object-cover rounded-md mb-4"
            height={300}
            width={500}
          />
          <h3 className="font-semibold text-lg mb-2">Product Name 2</h3>
          <p className="text-gray-800 mb-2">$129.99</p>
          <div className="flex justify-center items-center text-yellow-500">
            {/* Display rating, assume 3.5 stars for this example */}
            <span>⭐⭐⭐⭐</span>
          </div>
        </div>

        {/* Add Product Section */}
        <div className=" md:w-1/4">
          <h2 className="text-xl font-semibold mb-4">Add Product</h2>

          <button
            onClick={toggleDropdown}
            className=" py-2 px-4 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors flex items-center justify-between"
          >
            Choose a product
            {/* Adding the down arrow icon */}
            <FaChevronDown className="w-5 h-5 ml-2 text-white" />
          </button>

          {/* Dropdown for Product Selection */}
          {showDropdown && (
            <div className="mt-4 bg-white shadow-lg rounded-md p-4  z-50  ">
              {/* Static Product Options */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Image
                    src="/item3.png"
                    alt="Product 1"
                    className="w-16 h-16 object-cover rounded-md"
                    height={100}
                    width={100}
                  />
                  <div>
                    <h3 className="font-semibold text-sm">Product Name 1</h3>
                    <p className="text-gray-600">$99.99</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src="/item3.png"
                    alt="Product 2"
                    className="w-16 h-16 object-cover rounded-md"
                    height={100}
                    width={100}
                  />
                  <div>
                    <h3 className="font-semibold text-sm">Product Name 2</h3>
                    <p className="text-gray-600">$129.99</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src="/item3.png"
                    alt="Product 3"
                    className="w-16 h-16 object-cover rounded-md"
                    height={100}
                    width={100}
                  />
                  <div>
                    <h3 className="font-semibold text-sm">Product Name 3</h3>
                    <p className="text-gray-600">$149.99</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Image
                    src="/item3.png"
                    alt="Product 4"
                    className="w-16 h-16 object-cover rounded-md"
                    height={100}
                    width={100}
                  />
                  <div>
                    <h3 className="font-semibold text-sm">Product Name 4</h3>
                    <p className="text-gray-600">$179.99</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ul>
    </div>
  );
};

export default CompareSection1;
