"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaShareAlt, FaRegHeart, FaRegClone } from "react-icons/fa";
import { TbArrowsRightLeft } from "react-icons/tb";
import TruncateDescription from "../truncateDescription";
// types.ts
export interface ProductImage {
  asset: {
    _id: string;
    url: string;
  };
}

export interface Product {
  _id: string;
  title: string;
  description: string;
  productImage: ProductImage;
  price: number;
  tags: string[];
  dicountPercentage?: number; // Optional field
  isNew?: boolean; // Optional field
}

interface ProductGridProps {
  products: Product[];
  itemsPerPage: number;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  itemsPerPage,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isProductsPage, setIsProductsPage] = useState(false);

  useEffect(() => {
    // Check if the current page is '/products'
    if (typeof window !== "undefined") {
      setIsProductsPage(window.location.pathname === "/products");
    }
  }, []);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Get current products based on page and items per page
  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };



 const handleAddToWishList = (product: Product) => {
  alert("Product added to wishlist");

  // Get existing wishlist from localStorage
  let wishList: Product[] = JSON.parse(localStorage.getItem("wishList") || "[]");

  // Check if the product is already in the wishlist
  const isProductInWishlist = wishList.some(item => item._id === product._id);

  if (!isProductInWishlist) {
    // If not, add the product to the wishlist
    wishList.push(product);
    localStorage.setItem("wishList", JSON.stringify(wishList));
  } else {
    alert("This product is already in your wishlist!");
  }
};




  return (
    <div className="py-12 mx-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {currentProducts.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden relative group transition-all duration-300 ease-in-out"
            >
              {/* Product Image */}
              <div className="relative w-full h-60">
                <Image
                  src={product.productImage?.asset?.url}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
                {/* Status Circle */}
                <div
                  className={`absolute top-4 right-4 w-8 text-[12px] h-8 flex items-center justify-center rounded-full text-white ${
                    product.isNew 
                      ? "bg-green-500"
                      : product.dicountPercentage
                      ? "bg-red-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {product.isNew ? (
                    <span>New</span>
                  ) : (
                    <span>{product.dicountPercentage}%</span>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {product.title}
                </h3>
                <TruncateDescription description={product.description} lines={20} />
                {/* <p className="text-gray-600 mb-2">{product.description}</p> */}
                <p className="text-xl font-semibold text-gray-800 mb-4">
                  ${product.price}
                </p>
              </div>

              {/* Hover opacity for the entire product card */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col items-center justify-center">
                {/* Add to Cart Button */}
                <button className="py-2 px-4 bg-white text-yellow-700 rounded-lg hover:underline transition-colors mb-4">
                  <Link href={`/products/${product._id}`}>Add to Cart</Link>
                </button>
                <div className="flex justify-between gap-8 items-center px-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <div className="flex justify-center items-center gap-1 hover:underline">
                    <button>Share</button>
                    <span>
                      <FaShareAlt className="cursor-pointer hover:text-blue-600" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-1 hover:underline">
                    <button>
                      <Link href={"/compare"}>Compare</Link>
                    </button>
                    <span>
                      <TbArrowsRightLeft className="cursor-pointer hover:text-blue-600" />
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-1 hover:underline">
                  <span onClick={() => handleAddToWishList(product)}>
                    <FaRegHeart className="cursor-pointer hover:text-blue-600" />
                  </span>
                </div>

                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        {isProductsPage && products.length > 8 && (
          <div className="flex justify-center mt-8 gap-4 flex-wrap items-center">
            {/* Previous Button */}
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="py-2 px-4 text-black disabled:opacity-50 disabled:hidden text-sm sm:text-base"
            >
              Previous
            </button>
            {/* Page Number Buttons */}
            <div className="flex gap-2 flex-wrap items-center">
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`py-2 px-4 sm:py-2 sm:px-4 rounded-xl border-yellow-700 text-sm sm:text-base ${
                      currentPage === pageNumber
                        ? "bg-yellow-600 text-white"
                        : "bg-white text-black"
                    } hover:bg-yellow-600 hover:text-white transition-colors`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>
            {/* Next Button */}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="py-2 px-4 text-black disabled:opacity-50 disabled:hidden text-sm sm:text-base"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
