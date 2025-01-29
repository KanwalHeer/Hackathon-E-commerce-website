"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { TbUserExclamation } from "react-icons/tb";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";
import {
  FaHome,
  FaShoppingBag,
  FaBlog,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import Image from "next/image";
import {  useSelector } from "react-redux";
import { client } from "@/sanity/lib/client";
import { RootState } from "@/redux/store";

const Header: React.FC = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [products, setProducts] = useState<any[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDeatai, setDetail] = useState<any>(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const user = process.env.NEXT_PUBLIC_USER_ROLE;
  const [mounted, setMounted] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishlistItems = useSelector((state: RootState) => state.cart.wishlist);
  const totalQuantity = useSelector((state: any) => state.cart.totalQuantity);
 
  if (typeof window !== "undefined") {
  if (document.cookie.includes("next-auth.session-token")) {
    console.log("Token is present in document.cookie");
  } else {
    console.log("Token is not found in document.cookie");
  }
  }

  const handleLogout = async () => {
   
    await signOut({ redirect: false });
    // toggleMenu()
    router.push("/auth/sign-in");

    if (typeof window !== "undefined") {
      localStorage.removeItem("chechoutRoute");
    }
    toggleMenu()
  };

  useEffect(() => {
    const query = `*[_type == "product"]{
          _id,
          title,
          description,
          productImage{
            asset->{
              _id,
              url
            }
          },
          price,
          tags,
          dicountPercentage,
          isNew
        }`;

    client
      .fetch(query)
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);



  
 


  // Function to handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setDetail(false);

    // Filter products based on search query
    const filtered = products.filter((product) =>
      product?.title?.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null; 
  }
  

  const onDetail = () => {
    setDetail(true);
    setSearchQuery("");
  };

  const catchRouteHandler = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("chechoutRoute", "checkout");
    }
  };
  return (
    <header className="bg-yellow-50 py-4 px-6 sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex justify-center items-center font-bold mb-3 mr-2">
          <Link href="/" className="text-gray-800 hover:text-gray-800">
            <Image src={"/logo.png"} alt="Logo" width={100} height={100} />
          </Link>
          <span className="text-4xl font-extrabold">Furniro</span>
        </div>
        {/* Desktop Navbar */}
        <nav className="hidden md:flex space-x-14">
          <Link
            href="/"
            className="hover:text-gray-800 font-semibold hover:underline"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="hover:text-gray-800 font-semibold hover:underline"
          >
            Shop
          </Link>
          <Link
            href="/blog"
            className="hover:text-gray-800 font-semibold hover:underline"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-800 font-semibold hover:underline"
          >
            Contact
          </Link>
        </nav>
        <nav className="hidden md:flex space-x-9">
          <div></div>
          {session ? (
            <div className="text-yellow-600 font-bold text-[16px] md:text-[16px] lg:text-[20px] flex justify-center flex-row gap-2 md:gap-0 mb-2">
              {session.user.email === user ? (
                <>
                  <Link href={"/adminPanel"}>Admin</Link>
                  <button className="font-normal px-3" onClick={handleLogout}>
                    Logout
                  </button>
                </>
              ) : (
                <Link href={"/dashboard"}>{session.user?.name}</Link>
              )}
            </div>
          ) : (
            <Link
              href="/auth/sign-in"
              className="hover:text-gray-800 font-semibold hover:underline"
            >
              <TbUserExclamation className="text-[16px] md:text-[18px] lg:text-[20px]" />
            </Link>
          )}
          {session?.user.email !== user && (
            <>
              <Link
                href="/wishList"
                className="relative text-[24px] hover:underline"
              >
                <span className="absolute top-[-14px] right-[-8px] inline-block bg-yellow-600 text-white text-[10px] px-2 py-1 rounded-full">
                  {wishlistItems.length}
                </span>
                <GoHeart />
              </Link>

              <Link href="/cart" className="relative" onClick={catchRouteHandler}>
            <AiOutlineShoppingCart className="text-[24px] hover:underline" />
              <span className="absolute -top-4 right-3 inline-block bg-yellow-600 text-white text-[10px] px-2 py-1 rounded-full">
                {totalQuantity}
            </span>
          </Link>
            </>
          )}
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

      {session?.user.email !== user && (
        <div className="md:hidden flex items-center justify-center  space-x-4 ">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
            className="px-2 py-1 border border-yellow-600  rounded-[20px]"
          />
          <Link href="/cart" className="relative" onClick={catchRouteHandler}>
            <AiOutlineShoppingCart className="text-[24px] hover:underline" />
              <span className="absolute -top-4 right-3 inline-block bg-yellow-600 text-white text-[10px] px-2 py-1 rounded-full">
                {totalQuantity}
            </span>
          </Link>
          
          <Link
            href="/wishList"
            className="relative text-[24px] hover:underline"
          >
            <span className="absolute top-[-14px] right-[-8px] inline-block bg-yellow-600 text-white text-[10px] px-2 py-1 rounded-full">
              {wishlistItems.length}
            </span>
            <GoHeart />
          </Link>
        </div>
      )}

      {searchQuery && isMenuOpen && !isDeatai && (
        <div className="mt-4 p-4 bg-white rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2">Search Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product._id}
                  className="border p-4 rounded-md shadow-sm"
                >
                  <Link href={`/products/${product._id}`}>
                    <Image
                      src={product.productImage?.asset?.url}
                      alt={product.title}
                      width={150}
                      height={150}
                    />
                    <h3 className="font-semibold mt-2">{product.title}</h3>

                    <p>{product.title}</p>
                    {/* </a> */}
                  </Link>
                </div>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      )}

      {/* Mobile Navbar (Dropdown) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <nav className="bg-white text-black w-full max-w-xs p-6 space-y-6 rounded-xl relative border-4 border-yellow-600">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-black text-3xl z-60"
            >
              ×
            </button>
            {/* Links */}
            <Link
              href="/"
              className="flex items-center gap-2 hover:text-gray-800 hover:underline text-center"
              onClick={toggleMenu}
            >
              <FaHome />
              <span>Home</span>
            </Link>
            <Link
              href="/products"
              className="flex items-center gap-2 hover:text-gray-800 hover:underline text-center"
              onClick={toggleMenu}
            >
              <FaShoppingBag />
              <span>Shop</span>
            </Link>
            <Link
              href="/blog"
              className="flex items-center gap-2 hover:text-gray-800 hover:underline text-center"
              onClick={toggleMenu}
            >
              <FaBlog />
              <span>Blog</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 hover:text-gray-800 hover:underline text-center"
              onClick={toggleMenu}
            >
              <FaPhoneAlt />
              <span>Contact</span>
            </Link>
            {session ? (
              <>
                <div
                  className="flex items-center gap-2 hover:text-gray-800 hover:underline text-center"
                  onClick={toggleMenu}
                >
                  <FaUser />
                  {session.user.email !== user ? (
                    <Link href={"/dashboard"}>Profile</Link>
                  ) : (
                    <>
                      <Link href={"/adminPanel"}>Admin Portal</Link>
                    </>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/auth/sign-in"
                  className="flex items-center gap-2 hover:text-gray-800 hover:underline text-center"
                  onClick={toggleMenu}
                >
                  <FaUser />
                  <span onClick={toggleMenu}>Login</span>
                </Link>
              </>
            )}

            <button
              className="flex items-center gap-2 hover:text-gray-800 hover:underline text-center "
              onClick={handleLogout}
            >
              <FiLogOut />
              <span onClick={toggleMenu}>Logout</span>
            </button>
            {/* } */}
          </nav>
        </div>
      )}

      {/* Search Input (Appears when search icon is clicked) */}
      {session?.user.email !== user && (
        <div className="hidden md:block">
          <div className="flex items-center justify-center space-x-4 mt-4">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearch}
              className="p-2 border border-yellow-600 outline-non rounded-[20px] w-[500px]"
            />
          </div>
        </div>
      )}
      {/* Display filtered products (can be a separate component or section) */}
      {searchQuery && !isDeatai && (
        <div className="mt-4 p-4 bg-white rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2">Search Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product._id}
                  className="border p-4 rounded-md shadow-sm"
                >
                  <Link href={`/products/${product._id}`} onClick={onDetail}>
                    <Image
                      src={product.productImage?.asset?.url}
                      alt={product.title}
                      width={150}
                      height={150}
                    />
                    <h3 className="font-semibold mt-2">{product.title}</h3>

                    <p>{product.title}</p>
                  </Link>
                </div>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
