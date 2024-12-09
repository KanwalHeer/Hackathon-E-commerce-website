"use client";
import React, { useState } from "react";
import Image from "next/image";

// Type definitions
type Review = {
  user: string;
  rating: number;
  reviewText: string;
};

type AdditionalInfo = {
  material: string;
  warranty: string;
  shippingInfo: string;
  careInstructions: string;
  origin: string;
  assemblyRequired: string;
};

interface ProductDetailProps {
  product: {
    id: string;
    image: string;
    name1: string;
    name2: string;
    price: string;
    status: string;
    discount: number;
    reviews: number;
    description: string;
    reviewDetail: Review[];
    sizes: string[];
    colors: string[];
    images: string[];
    sku: string;
    tags: string[];
    category: string;
    detailDescription: string[];
    detailImages: string[];
    additionalInfo: AdditionalInfo;
  };
}

// Component
const ProductDetail2: React.FC<ProductDetailProps> = ({ product }) => {
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
          onClick={() => handleTabChange("additionalInfo")}
          className={`px-4 py-2 text-[12px] lg:text-xl font-medium ${
            activeTab === "additionalInfo"
              ? "text-black border-b-2 border-black"
              : "text-gray-400"
          }`}
        >
          Additional Info
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
          <div className="detail-description space-y-2 mb-4">
            {product.detailDescription.map((desc, index) => (
              <p key={index} className="text-gray-600 text-sm">
                {desc}
              </p>
            ))}
          </div>
          <div className="detail-images grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {product.detailImages.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Detail image ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-md"
                width={100}
                height={100}
              />
            ))}
          </div>
        </div>
      )}

      {activeTab === "additionalInfo" && (
        <div className="tab-content">
          <ul className="space-y-2">
            <li>
              <strong className="font-medium">Material:</strong>{" "}
              {product.additionalInfo.material}
            </li>
            <li>
              <strong className="font-medium">Warranty:</strong>{" "}
              {product.additionalInfo.warranty}
            </li>
            <li>
              <strong className="font-medium">Shipping Info:</strong>{" "}
              {product.additionalInfo.shippingInfo}
            </li>
            <li>
              <strong className="font-medium">Care Instructions:</strong>{" "}
              {product.additionalInfo.careInstructions}
            </li>
            <li>
              <strong className="font-medium">Origin:</strong>{" "}
              {product.additionalInfo.origin}
            </li>
            <li>
              <strong className="font-medium">Assembly Required:</strong>{" "}
              {product.additionalInfo.assemblyRequired}
            </li>
          </ul>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="tab-content">
          <h3 className="text-xl font-semibold mb-4">
            Reviews ({product.reviews})
          </h3>
          <div className="reviews space-y-4">
            {product.reviewDetail.map((review, index) => (
              <div key={index} className="review border-b pb-4">
                <p className="font-medium">
                  {review.user}
                  <span className="text-yellow-400">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </span>
                </p>
                <p className="text-gray-600">{review.reviewText}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail2;
