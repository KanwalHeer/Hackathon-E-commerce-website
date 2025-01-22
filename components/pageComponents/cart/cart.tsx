"use client";
import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { updateCartItem } from "@/redux/cartSlice";
// import { RootState } from "@/redux/store";
import {  useDispatch } from "react-redux";

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
  quantity: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [quantityStorage, setQuantityStorage] = useState<{ [key: string]: number }>({});
const dispatch = useDispatch()
  // Retrieve cart items and quantities from localStorage on component mount

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    const storedQuantityStorage = localStorage.getItem("quantityStorage");

    // if (storedCartItems) {
    //   const parsedCartItems = JSON.parse(storedCartItems);
    //   // Sync Redux state with localStorage cart items
    //   parsedCartItems.forEach((item: Product) => {
    //     dispatch(updateCartItem({ productId: item._id, quantity: item.quantity }));
    //   });}

    if (storedCartItems) {
      const parsedCartItems = JSON.parse(storedCartItems);
      setCartItems(parsedCartItems);

      // Initialize quantities from quantityStorage if available, otherwise default to 1
      const parsedQuantities = storedQuantityStorage ? JSON.parse(storedQuantityStorage) : {};
      setQuantityStorage(parsedQuantities);
    } else {
      setCartItems([]);
      setQuantityStorage({});
    }
  }, []);

  // Function to update quantity in the quantityStorage (separate from cartItems)
  const updateQuantityInStorage = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return; // Prevent quantity from going below 1
   // Update in Redux
   
    const updatedQuantityStorage:any = { ...quantityStorage, [id]: newQuantity };
    setQuantityStorage(updatedQuantityStorage);
// Log the updated quantityStorage to the console
       const quantity = quantityStorage[id];

  // Log the quantity
  console.log(`Quantity of item ${id}:`, quantity);
   console.log("Updated quantityStorage:", updatedQuantityStorage);
   dispatch(updateCartItem(updatedQuantityStorage));
    // Save updated quantity to localStorage
    localStorage.setItem("quantityStorage", JSON.stringify(updatedQuantityStorage));
    
  };


 
  
  // Calculate subtotal for each product
  const calculateSubtotal = (price: number, quantity: number) => {
    return price * quantity;
  };

  // Calculate the total price of all items in the cart
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + calculateSubtotal(item.price, quantityStorage[item._id] || 1),
      0
    );
  };

  return (
    <div className="py-12 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-20 md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        {/* Cart Items Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-8/12">
          {/* Cart Items Table */}
          <table className="w-full text-[8px] md:text-sm font-semibold text-gray-600">
            <thead className="">
              <tr className="border-b">
                <th className="py-3 text-left">Product</th>
                <th className="py-3 text-left">Price</th>
                <th className="py-3 text-left">Quantity</th>
                <th className="py-3 text-left">Subtotal</th>
                <th className="py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Cart Items */}
              {cartItems.map((item) => (
                <tr key={item._id} className="border-b">
                  <td className="py-4 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
                    <Image
                      src={item.productImage?.asset?.url}
                      alt={item?.title}
                      className="w-9 md:w-12 h-16 object-cover rounded"
                      width={100}
                      height={100}
                    />
                    <span className="font-semibold text-gray-400 text-[8px] sm:text-base md:text-sm">{item?.title}</span>
                  </td>

                  <td className="py-4 text-gray-600 text-[8px] sm:text-base md:text-sm ">${item?.price}</td>

                  <td className="py-4">
                    <div className="flex flex-col md:flex-row items-center gap-2">
                      <button
                        onClick={() => updateQuantityInStorage(item._id, (quantityStorage[item._id] || 1) - 1)}
                        disabled={(quantityStorage[item._id] || 1) <= 1}
                        className="px-2 py-1 bg-gray-300 rounded-full text-[8px] sm:text-base md:text-sm"
                      >
                        -
                      </button>

                      <input
                        title="input"
                        type="number"
                        value={quantityStorage[item._id] || 1}
                        min={1}
                        className="w-8 md:w-12 text-center border border-gray-300 rounded text-[8px] sm:text-base md:text-sm"
                        onChange={(e) => updateQuantityInStorage(item._id, parseInt(e.target.value))}
                      />
                      <button
                        onClick={() => updateQuantityInStorage(item._id, (quantityStorage[item._id] || 1) + 1)}
                        className="px-2 py-1 bg-gray-300 rounded-full text-[8px] sm:text-base md:text-sm"
                      >
                        +
                      </button>
                    </div>
                  </td>

                  <td className="py-4 text-gray-800 font-semibold text-[8px] sm:text-base md:text-sm">
                    ${calculateSubtotal(item.price, quantityStorage[item._id] || 1).toFixed(2)}
                  </td>

                  <td className="py-4 text-center">
                    <button
                      title="Remove Item"
                      className="text-yellow-600 hover:underline text-[8px] sm:text-base md:text-sm"
                      onClick={() => {
                        const updatedItems = cartItems.filter((cartItem) => cartItem._id !== item._id);
                        setCartItems(updatedItems);
                        localStorage.setItem("cartItems", JSON.stringify(updatedItems));

                        // Also remove the quantity from the quantityStorage
                        const { [item._id]: _, ...rest } = quantityStorage; // Remove the item from quantityStorage
                        setQuantityStorage(rest);
                        localStorage.setItem("quantityStorage", JSON.stringify(rest));
                      }}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cart Totals Section */}
        <div className="flex flex-col justify-center items-center w-full md:w-4/12 mt-6 md:mt-0">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Cart Totals
          </h1>

          <div className="flex justify-between w-full mb-4 gap-6">
            <span className="text-lg font-semibold text-gray-700">Subtotal:</span>
            <span className="text-lg text-gray-400">${calculateTotal().toFixed(2)}</span>
          </div>

          <div className="flex justify-between w-full mb-6 gap-6">
            <span className="text-lg font-semibold text-gray-700">Total:</span>
            <span className="text-lg text-yellow-700">${calculateTotal().toFixed(2)}</span>
          </div>

          <button className="w-full py-3 border border-black text-black font-semibold rounded-xl hover:bg-yellow-600 hover:text-white hover:border-none transition-colors">
            <Link href="/checkout">Checkout</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
