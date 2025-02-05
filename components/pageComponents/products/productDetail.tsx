"use client";
import React, { useState } from "react";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { addToCart } from "@/redux/cartSlice";
import { useDispatch } from "react-redux";

const ProductDetail: React.FC<any> = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.productImage.asset.url);
  const [cartAdded, setcartAdded] = useState(false);

  const handlCartAdded = () => {
    setcartAdded(true);

    setTimeout(() => {
      setcartAdded(false);
    }, 3000);
  };
  const dispatch = useDispatch();
  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
    handlCartAdded();
  };

  return (
    <div className="max-w-[1200px] mx-auto py-12 px-4">
      <div className="flex justify-center gap-5">
        <div className="flex-1">
          <Image
            src={mainImage}
            alt={product.title}
            className="w-full h-96 object-cover mb-4"
            height={300}
            width={500}
          />
        </div>

        {/* Right Side: Product Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {product.title}
          </h1>
          <p className="text-xl font-semibold text-yellow-600 mb-4">
            ${product.price}
          </p>

          {/* Displaying New and Discount */}
          {product.isNew && (
            <div className="bg-green-500 text-white py-1 px-2 rounded-lg text-sm inline-block mb-4">
              New
            </div>
          )}
          {product.dicountPercentage > 0 && (
            <div className="bg-red-500 text-white py-1 px-2 rounded-lg text-sm inline-block mb-4">
              {product.dicountPercentage}% OFF
            </div>
          )}

          {/* Product Tags */}
          <div className="mb-4">
            {product.tags?.map((tag: string) => (
              <span
                key={tag}
                className="inline-block bg-gray-200 text-gray-800 py-1 px-3 rounded-full text-xs mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6 flex-col md:flex-row lg:flex-row">
            {/* Add to Cart and Compare Buttons */}
            <div className="flex flex-col sm:flex-row sm:gap-4 gap-4 w-full">
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full sm:w-auto py-3 px-6 text-black border border-black font-semibold rounded-xl hover:bg-yellow-600 hover:text-white hover:border-none transition-colors"
              >
                Add to Cart
              </button>
              {cartAdded && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white p-6 rounded-lg shadow-md w-[90%] md:w-[400px]">
                    <h3 className="text-xl font-bold text-[#1D3178] mb-4">
                      Item Added to Cart
                    </h3>
                    <p className="text-[#8A91AB] text-sm mb-6">
                      Your item has been successfully added to the cart.
                    </p>
                  </div>
                </div>
              )}
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
