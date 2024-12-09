"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { TbUserExclamation } from "react-icons/tb";
import { IoSearchOutline } from "react-icons/io5"
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from 'next/image';
const Header: React.FC = () => {
  // State to manage the mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Toggle the menu state
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-yellow-50  py-4 px-6">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className=" flex justify-center items-center font-bold">
          <Link href="/"
             className="text-gray-800 hover:text-gray-800">
              <Image src={"/logo.png"} alt='Logo' width={100} height={100}/>
          </Link>
          <span className='text-4xl font-extrabold'>Furniro</span>
        </div>
        {/* Desktop Navbar */}
        <nav className="hidden md:flex space-x-14">
          <Link href="/"
             className="hover:text-gray-800 font-semibold hover:underline">Home
          </Link>
          <Link href="/products"
            className="hover:text-gray-800 font-semibold hover:underline">Shop
          </Link>
          <Link href="/blog"
            className="hover:text-gray-800 font-semibold hover:underline">Blog
          </Link>
          <Link href="/contact"
            className="hover:text-gray-800 font-semibold hover:underline">Contat
          </Link>
        </nav>
        <nav className="hidden md:flex space-x-9">
          <Link href="/"
             className="text-[24px] hover:underline">
                 <TbUserExclamation/>
          </Link>
          <Link href="/"
            className="text-[24px]">
                 <IoSearchOutline/>
          </Link>
          <Link href="/"
            className="text-[24px] hover:underline">
                 <GoHeart/>
          </Link>
          <Link href="/cart"
            className="text-[24px] hover:underline">
                 <AiOutlineShoppingCart/>
          </Link>
        </nav>
        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navbar (Dropdown) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <nav className="bg-white text-black w-full max-w-xs p-6 space-y-6 rounded-lg">
            {/* Close Button */}
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-white text-3xl">
              ×
            </button>

            {/* Links */}
            <Link href="/" className="block hover:text-gray-800 hover:underline text-center" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/products" className="block hover:text-gray-800 hover:underline text-center" onClick={toggleMenu}>
              Shop
            </Link>
            <Link href="/blog" className="block hover:text-gray-800 hover:underline text-center" onClick={toggleMenu}>
              Blog
            </Link>
            <Link href="/contact" className="block hover:text-gray-800 hover:underline text-center" onClick={toggleMenu}>
              Contact
            </Link>
            <Link href="/cart" className="block hover:text-gray-800 hover:underline text-center" onClick={toggleMenu}>
              Cart
            </Link>
            <Link href="/" className="block hover:text-gray-800 hover:underline text-center" onClick={toggleMenu}>
              Profile
            </Link>
            <Link href="/" className="block hover:text-gray-800 hover:underline text-center" onClick={toggleMenu}>
              Wishlist
            </Link>
          </nav>
        </div>
      )}
    
    </header>
  );
};

export default Header;
