"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import TruncateDescription from "../truncateDescription";
import { addToWishlist } from "@/redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCompare, removeFromCompare } from "@/redux/cartSlice";

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
  dicountPercentage?: number;
  isNew?: boolean;
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
  const compareProducts = useSelector((state: any) => state.cart.compare);
  const dispatch = useDispatch();
  const [cartAdded, setcartAdded] = useState(false);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addedProduct, setAddedProduct] = useState<any>(null);

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

  const handlCartAdded = () => {
    setcartAdded(true);

    setTimeout(() => {
      setcartAdded(false);
    }, 3000);
  };

  const handleAddToWishlist = (product: any) => {
    dispatch(addToWishlist(product));
    handlCartAdded();
  };

  const handleAddToCompare = (product: any) => {
    dispatch(addToCompare(product));
    setAddedProduct(product); 
    setIsModalOpen(true); 
  };

  const handleRemoveFromCompare = (productId: any) => {
    dispatch(removeFromCompare(productId));
  };

  const isProductInCompare = (productId: string) => {
    return compareProducts.some((product: any) => product._id === productId);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const redirectToComparePage = () => {
    setIsModalOpen(false);
    window.location.href = "/compare"; 
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
                  width={300}
                  height={300}
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
                <TruncateDescription
                  description={product.description}
                  lines={20}
                />
                <p className="text-xl font-semibold text-gray-800 mb-4">
                  ${product.price}
                </p>
              </div>

              {/* Hover opacity for the entire product card */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col items-center justify-center">
                {/* Add to Cart Button */}
                <button className="py-2 px-4 bg-white text-yellow-700 rounded-lg hover:underline transition-colors mb-4">
                  <Link href={`/products/${product._id}`}>View Product</Link>
                </button>
                <div className="flex justify-between gap-8 items-center px-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <div className="flex justify-center items-center gap-1 hover:underline">
                    <button
                      onClick={() =>
                        isProductInCompare(product._id)
                          ? handleRemoveFromCompare(product._id)
                          : handleAddToCompare(product)
                      }
                    >
                      <span></span>
                      <span className="ml-6">
                        {isProductInCompare(product._id)
                          ? "Remove from Compare"
                          : "Compare"}
                      </span>
                    </button>
                  </div>

                  <div className="flex justify-center items-center gap-1 hover:underline">
                    <span onClick={() => handleAddToWishlist(product)}>
                      <FaRegHeart className="cursor-pointer hover:text-yellow-600" />
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
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="py-2 px-4 text-black disabled:opacity-50 disabled:hidden text-sm sm:text-base"
            >
              Previous
            </button>
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-[90%] md:w-[400px]">
            <h3 className="text-xl font-bold text-[#1D3178] mb-4">
              Product Added to Compare
            </h3>
            <p className="text-[#8A91AB] text-sm mb-6">
              The product has been successfully added to your compare list.
            </p>
            <div className="flex justify-between gap-4">
              <button
                onClick={redirectToComparePage}
                className="py-2 px-4 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
              >
                Go to Compare
              </button>
              <button
                onClick={closeModal}
                className="py-2 px-4 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {cartAdded && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-[90%] md:w-[400px]">
            <h3 className="text-xl font-bold text-[#1D3178] mb-4">
              Item Added to Your Wishlist
            </h3>
            <p className="text-[#8A91AB] text-sm mb-6">
              Your item has been successfully added to the wishlist.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
