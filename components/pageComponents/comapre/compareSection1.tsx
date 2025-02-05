"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCompare } from "@/redux/cartSlice";
import Image from "next/image";
import { TbArrowsRightLeft } from "react-icons/tb";
import Link from "next/link";

// The Compare Page
const ComparePage = () => {
  const dispatch = useDispatch();
  const compareProducts = useSelector((state: any) => state.cart.compare);

  // Remove from Compare Handler
  const handleRemoveFromCompare = (productId: string) => {
    dispatch(removeFromCompare(productId));
  };

  return (
    <div className="py-12 mx-4">
      <div className="max-w-[1200px] mx-auto">
        {compareProducts.length === 0 ? (
          <div className="text-center text-xl font-bold text-gray-700">
            No products in compare list.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {compareProducts.map((product: any) => (
              <div
                key={product._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden relative"
              >
                {/* Product Image */}
                <div className="relative w-full h-60">
                  <Image
                    src={product.productImage?.asset?.url}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>
                  <p className="text-xl font-semibold text-gray-800 mb-4">
                    ${product.price}
                  </p>

                  {/* Compare Icon */}
                  <div className="text-center mt-4">
                    <span className="text-xl text-gray-500">
                      <TbArrowsRightLeft />
                    </span>
                  </div>

                  {/* Remove from Compare Button */}
                  <div className="text-center mt-4">
                    <button
                      onClick={() => handleRemoveFromCompare(product._id)}
                      className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                    >
                      Remove from Compare
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Button to go back to Products */}
        <div className="flex justify-center mt-8">
          <Link href="/products">
            <button className="py-2 px-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">
              Back to Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComparePage;
