"use client";
import React, { useState } from "react";
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

// Component
const ProductDetail2: React.FC<any> = ({ product }) => {
  const [activeTab, setActiveTab] = useState<
    "description" | "additionalInfo" | "reviews"
  >("description");

  const handleTabChange = (
    tab: "description" | "additionalInfo" | "reviews"
  ) => {
    setActiveTab(tab);
  };

  return (
    <div className="product-detail max-w-4xl mx-auto p-6">
      {/* Tab navigation */}
      <div className="tabs flex justify-center items-center space-x-4 border-b-2 pb-2 mb-4 overflow-x-auto">
        <button
          onClick={() => handleTabChange("description")}
          className={`px-4 py-2 text-[12px] lg:text-xl font-medium ${
            activeTab === "description"
              ? "text-black border-b-2 border-black"
              : "text-gray-400"
          }`}
        >
          Description
        </button>

        <button
          onClick={() => handleTabChange("reviews")}
          className={`px-4 py-2 text-[12px] lg:text-xl font-medium ${
            activeTab === "reviews"
              ? "text-black border-b-2 border-black"
              : "text-gray-400"
          }`}
        >
          Reviews
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "description" && (
        <div className="tab-content">
          <p className="text-gray-700 text-sm mb-4">{product.description}</p>
        </div>
      )}
         {activeTab === "reviews" && (
        <div className="tab-content">
          <p className="text-gray-700  mb-4 text-center text-xl mt-8 font-semibold">No Reviews</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetail2;
