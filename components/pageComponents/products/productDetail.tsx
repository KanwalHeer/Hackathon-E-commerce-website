"use client";
import React, { useState } from "react";
import { FaStar, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

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

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.image);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleThumbnailClick = (image: string) => {
    setMainImage(image);
  };

  return (
    <div className="max-w-[1200px] mx-auto py-12 px-4">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side: Product Main Image */}
        <div className="flex justify-center gap-2">
          {/* Thumbnail Images */}
          <div className="mb-4">
            <div className="flex flex-col gap-4 mt-2">
              {product.images.map((image) => (
                <Image
                  key={image}
                  src={image}
                  alt={product.name1}
                  height={100}
                  width={100}
                  className="w-20 h-20 object-cover cursor-pointer border-2 border-gray-300 rounded-lg hover:border-yellow-500"
                  onClick={() => handleThumbnailClick(image)}
                />
              ))}
            </div>
          </div>
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
            {product.name1}
          </h1>
          <p className="text-xl font-semibold text-yellow-600 mb-4">
            {product.price}
          </p>
          <p className="text-gray-600 mb-4">{product.description}</p>

          {/* Product Reviews */}
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                size={20}
                className={`mr-1 ${
                  index < Math.floor(product.reviews)
                    ? "text-yellow-500"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-gray-500 ml-2">{product.reviews} Stars</span>
          </div>

          {/* Sizes */}
          <div className="mb-4">
            <h2 className="font-semibold text-gray-700">Available Sizes</h2>
            <div className="flex gap-4 mt-2 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-200"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="mb-4">
            <h2 className="font-semibold text-gray-700">Available Colors</h2>
            <div className="flex gap-4 mt-2 flex-wrap">
              {product.colors.map((color) => (
                <button
                  title="button"
                  key={color}
                  className="h-8 w-8 border border-gray-400 rounded-full"
                  style={{ backgroundColor: color.toLowerCase() }}
                />
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6 flex-col md:flex-row lg:flex-row">
            <div className="border border-gray-500 flex items-center rounded-xl">
              <button
                onClick={decrementQuantity}
                className="px-4 py-2 border rounded-lg"
              >
                -
              </button>
              <span className="text-xl">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="px-4 py-2 border rounded-lg"
              >
                +
              </button>
            </div>

            {/* Add to Cart and Compare Buttons */}
            <div className="flex flex-col sm:flex-row sm:gap-4 gap-4 w-full">
              <button className="w-full sm:w-auto py-3 px-6 text-black border border-black font-semibold rounded-xl hover:bg-yellow-600 hover:text-white hover:border-none transition-colors">
                <Link href={"/cart"}>Add to Cart</Link>
              </button>
              <button className="w-full sm:w-auto py-3 px-6 text-black border border-black font-semibold rounded-xl hover:bg-yellow-600 hover:text-white hover:border-none transition-colors">
                <Link href={"/compare"}>+ Compare</Link>
              </button>
            </div>
          </div>

          {/* Additional Product Info */}
          <div className="p-4 rounded-lg mt-6">
            <div className="mb-4 text-gray-400">SKU: {product.sku}</div>
            <div className="mb-4 text-gray-400">
              Category: {product.category}
            </div>

            <div className=" flex gap-4 mb-4 flex-wrap text-gray-400">
              Tags:
              {/* <div className="flex gap-2 flex-wrap"> */}
              {product.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-gray-200 rounded-lg">
                  {tag}
                </span>
              ))}
              {/* </div> */}
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
    </div>
  );
};

export default ProductDetail;
