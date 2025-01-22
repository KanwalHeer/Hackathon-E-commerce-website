"use client";
import React, { useState } from "react";
import {FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { addToCart } from "@/redux/cartSlice";
import { useDispatch, UseDispatch } from "react-redux";

 interface ProductImage {
  asset: {
    _id: string;
    url: string;
  };
}

 interface Product {
  _id: string;
  title: string;
  description: string;
  productImage: ProductImage;
  price: number;
  tags: string[];
  dicountPercentage?: number; 
  isNew?: boolean; 
}

const ProductDetail: React.FC<any> = ({ product }) => {
  console.log(product,"groduct...");
  
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.productImage.asset.url);
  const dispatch =useDispatch()

  const handleAddToCart = () => {
    let cartItems:any = localStorage.getItem("cartItems");
    cartItems = cartItems ? JSON.parse(cartItems) : [];
    cartItems.push(product);
    dispatch(addToCart(product)); 
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// const handleRemoveToCart = () => {
//   let cartItems = localStorage.getItem("cartItems");
//   cartItems = cartItems ? JSON.parse(cartItems) : [];

//   // Remove the specific product from the cart
//   cartItems = cartItems?.filter(item => item.id !== product.id); // Assuming product has an 'id'

//   dispatch(addToCart(cartItems));
//   localStorage.setItem("cartItems", JSON.stringify(cartItems));
// }



  // const incrementQuantity = () =>{
  //    setQuantity((prev) => prev + 1);
  //    handleAddToCart()
  // }
  // const decrementQuantity = () =>{
  //   setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    
  // }

  // const handleThumbnailClick = (image: string) => {
  //   setMainImage(image);
  // };


  


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
            {/* <div className="border border-gray-500 flex items-center rounded-xl">
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
            </div> */}

            {/* Add to Cart and Compare Buttons */}
            <div className="flex flex-col sm:flex-row sm:gap-4 gap-4 w-full">
              <button onClick={handleAddToCart} className="w-full sm:w-auto py-3 px-6 text-black border border-black font-semibold rounded-xl hover:bg-yellow-600 hover:text-white hover:border-none transition-colors">
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
