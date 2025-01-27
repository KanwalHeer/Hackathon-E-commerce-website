"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TruncateDescription from "@/components/globalComponents/truncateDescription";
import Image from "next/image";
import Link from "next/link";
import { removeFromWishlist } from "@/redux/cartSlice"; 

export default function WishList() {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: any) => state.cart.wishlist);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  // Handle Remove from Wishlist
  const handleRemoveFromWishList = (productId: string) => {
    dispatch(removeFromWishlist(productId));
  };

  return (
    <div className="py-12 mx-4">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>

        {/* Check if there are items in the wishlist */}
        {wishlistItems.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {wishlistItems.map((product: any) => (
              <div
                key={product._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden relative group transition-all duration-300 ease-in-out"
              >
                {/* Product Image */}
                <div className="relative w-full h-60">
                  <Image
                    src={product.productImage?.asset?.url}
                    alt={product.title}
                    className="w-full h-full object-cover"
                    width={200}
                    height={200}
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{product.title}</h3>
                  <TruncateDescription description={product.description} lines={20} />
                  <p className="text-xl font-semibold text-gray-800 mb-4">${product.price}</p>
                </div>

                {/* Remove from Wishlist Button */}
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col items-center justify-center">
                  <button
                    onClick={() => handleRemoveFromWishList(product._id)}
                    className="py-2 px-4 bg-white text-red-500 rounded-lg hover:underline transition-colors mb-4"
                  >
                    Remove from Wishlist
                  </button>
                  <button className="py-2 px-4 bg-white text-yellow-600 rounded-lg hover:underline transition-colors mb-4">
                    <Link href={`/products/${product._id}`}>Add to Cart</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
