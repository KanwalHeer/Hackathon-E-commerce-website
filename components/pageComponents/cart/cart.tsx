"use client";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart: React.FC = () => {
  // Sample cart items with product details and image
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Product 1", price: 10, quantity: 1, image: "/item3.png" },
    { id: 2, name: "Product 2", price: 15, quantity: 2, image: "/item3.png" },
    { id: 3, name: "Product 3", price: 20, quantity: 1, image: "/item3.png" },
  ]);

  // Function to update the quantity
  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calculate subtotal for each product
  const calculateSubtotal = (price: number, quantity: number) => {
    return price * quantity;
  };

  // Calculate the total price of all items in the cart
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + calculateSubtotal(item.price, item.quantity),
      0
    );
  };

  return (
    <div className="py-12 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-12 md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        {/* Cart Items Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-8/12">
          {/* Cart Items Header Row */}
          <div className="grid grid-cols-6 text-sm font-semibold text-gray-600 mb-4 gap-4 md:grid-cols-5">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
            <span>Actions</span>
          </div>
          {/* Cart Items */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-5 items-center p-4 border-b gap-4"
            >
              {/* Product Image and Name */}
              <div className="flex items-center gap-4 md:col-span-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                  width={100}
                  height={100}
                />
                <span className="font-semibold text-gray-400">{item.name}</span>
              </div>

              {/* Price */}
              <span className="text-gray-600 md:col-span-1">{`$${item.price}`}</span>

              {/* Quantity */}
              <div className="flex items-center gap-2 md:col-span-1">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  className="px-2 py-1 bg-gray-300 rounded-full"
                >
                  -
                </button>

                <input
                  title="input"
                  type="number"
                  value={item.quantity}
                  min={1}
                  className="w-16 text-center border border-gray-300 rounded"
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                />
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-300 rounded-full"
                >
                  +
                </button>
              </div>

              {/* Subtotal */}
              <span className="text-gray-800 font-semibold md:col-span-1">
                ${calculateSubtotal(item.price, item.quantity).toFixed(2)}
              </span>

              {/* Actions */}
              <div className="flex gap-2 justify-center md:col-span-1">
                <button
                  title="button"
                  className="text-yellow-600 hover:underline"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Totals Section */}
        <div className="flex flex-col justify-center items-center w-full md:w-4/12 mt-6 md:mt-0">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Cart Totals
          </h1>

          <div className="flex justify-between w-full mb-4 gap-6">
            <span className="text-lg font-semibold text-gray-700">
              Subtotal:
            </span>
            <span className="text-lg text-gray-400">
              ${calculateTotal().toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between w-full mb-6 gap-6">
            <span className="text-lg font-semibold text-gray-700">Total:</span>
            <span className="text-lg text-yellow-700">
              ${calculateTotal().toFixed(2)}
            </span>
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
