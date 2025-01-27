"use client";
import React, { useState } from "react";
import {FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { addToCart } from "@/redux/cartSlice";
import { useDispatch } from "react-redux";

 
const ProductDetail: React.FC<any> = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.productImage.asset.url);
  const dispatch =useDispatch()
  const handleAddToCart = (product:any) => {
  dispatch(addToCart(product)); 
};
  return (
    <div className="max-w-[1200px] mx-auto py-12 px-4">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side: Product Main Image */}
        <div className="flex justify-center gap-2">
          <div className="flex-1">
            <Image
              src={mainImage}
              alt={product.name1}
              className="w-full h-96 object-cover mb-4"
              height={300}
              width={500}
            />
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {product.title}
          </h1>
          <p className="text-xl font-semibold text-yellow-600 mb-4">
            ${product.price}
          </p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6 flex-col md:flex-row lg:flex-row">
            {/* Add to Cart and Compare Buttons */}
            <div className="flex flex-col sm:flex-row sm:gap-4 gap-4 w-full">
              <button onClick={()=>handleAddToCart(product)} className="w-full sm:w-auto py-3 px-6 text-black border border-black font-semibold rounded-xl hover:bg-yellow-600 hover:text-white hover:border-none transition-colors">
               Add to Cart
              </button>
              <button className="w-full sm:w-auto py-3 px-6 text-black border border-black font-semibold rounded-xl hover:bg-yellow-600 hover:text-white hover:border-none transition-colors">
                <Link href={"/compare"}>+ Compare</Link>
              </button>
            </div>
          </div>
            <div className="flex gap-4 mb-4 flex-wrap text-gray-400">
              Share:
              <Link
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
                target="_blank"
                className="text-black hover:text-yellow-600"
                title="Share on LinkedIn"
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                target="_blank"
                className="text-black hover:text-yellow-600"
                title="Share on Facebook"
              >
                <FaFacebook size={24} />
              </Link>
              <Link
                href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                target="_blank"
                className="text-black hover:text-yellow-600"
                title="Share on Twitter"
              >
                <FaTwitter size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProductDetail;
