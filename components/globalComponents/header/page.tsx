"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { TbUserExclamation } from "react-icons/tb";
import { IoSearchOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { dummyProducts } from "@/app/data/dumyData";
import Image from "next/image";
import { useSelector } from 'react-redux';
import { addToCart, updateCartItem } from "@/redux/cartSlice";  
// import { useDispatch, useSelector } from "react-redux";
import { client } from "@/sanity/lib/client";
const Header: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  
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
    
        client.fetch(query).then((data) => {
          setProducts(data);
        }).catch((error) => {
          console.error("Error fetching products:", error);
        });
      }, []); 
    
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); 
  const [filteredProducts, setFilteredProducts] = useState(products); 
  const [isSearchOpen, setIsSearchOpen] = useState(false); 
  const cartItems = localStorage.getItem("cartItems")
  const wishList = localStorage.getItem("wishList")
  // const cartItem = useSelector(selectCartItems);  
  // const cartItemCount = useSelector(selectCartItemCount); 
  const cartItem = useSelector((state: any) => state.cart.items);
  // const updateCartItem = useSelector((state: any) => state.cart.updateItems);
  const [isDeatai ,setDetail] =useState<any>(false)
  

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const [cart, setCart] = useState<any>([]);
  const [cartItemLength, setCartItemLength] = useState(0);
  const [wishListLegth, setWishLisLegtht] = useState([]);




  // const updateCartItem = useSelector((state: any) => state.cart.updateItems);
  
  const [cartItemTotalLength, setCartItemTotalLength] = useState(0); 
  // const [cartItemCountFromRedux, setCartItemCountFromRedux] = useState(0);  // Number of unique items in Redux

 
  
  const getTotalQuantityFromLocalStorage = () => {
    const storedQuantityStorage = localStorage.getItem("quantityStorage");
    if (storedQuantityStorage) {
      const parsedQuantityStorage = JSON.parse(storedQuantityStorage);
      // Sum all the quantities
      const totalQuantity = Object.values(parsedQuantityStorage).reduce((total:any, quantity) => {
        return total + quantity; // Sum all item quantities
      }, 0);
      return totalQuantity;
    }
    return 0; // Return 0 if no items are in the quantityStorage
  };
  // Update cartItemLength whenever component mounts
  useEffect(() => {
    const totalQuantity:any = getTotalQuantityFromLocalStorage();
    // Get the number of unique item IDs (length of the quantityStorage object)
    const numberOfIds:any = Object.keys(JSON.parse(localStorage.getItem("quantityStorage") || "{}")).length;
    // Subtract the number of IDs from the total quantity
    const adjustedTotalQuantity:any = totalQuantity - numberOfIds;
    // Set the adjusted total quantity to cartItemTotalLength state
    setCartItemTotalLength(adjustedTotalQuantity);
  }, []);

  
  const updateCartItem = useSelector((state: any) => state.cart.updateItems);  
  const [cartItemCountFromRedux, setCartItemCountFromRedux] = useState(0);  

  const getTotalQuantityFromLRedux = () => {
    if (updateCartItem && Array.isArray(updateCartItem) && updateCartItem.length > 0) {
      // Sum all quantities from the updateCartItem array
      const totalQuantity = updateCartItem.reduce((total: number, item: any) => {
        return total + (item.quantity || 0); // Safely sum each item's quantity
      }, 0);
      return totalQuantity;
    }
    return 0; // Return 0 if updateItems is empty or not an array
  };
  
  // Update cartItemLength whenever component mounts or updateCartItem changes
  useEffect(() => {
    const totalQuantity: any = getTotalQuantityFromLRedux();
    // Get the number of unique item IDs (length of the updateItems array)
    const numberOfIds: any = updateCartItem.length;
    // Set the total quantity from Redux directly to the state
    setCartItemCountFromRedux(totalQuantity);
  }, []);
  


useEffect(()=>{
  console.log(wishList, "total updateCartItem");
  if (wishList) {
    const parsedQuantityStorage = JSON.parse(wishList);
    setWishLisLegtht(parsedQuantityStorage)
  }
},[wishList])
 
  console.log(wishListLegth.length, "total updateCartItem");
  
    
  useEffect(() => {
  const totalQuantityFromLocalStorage = getTotalQuantityFromLocalStorage();
  const totalQuantityFromRedux = getTotalQuantityFromLRedux();
  // Combine both total quantities
  const combinedTotalQuantity = totalQuantityFromLocalStorage + totalQuantityFromRedux;
  // Set the combined total quantity
  setCartItemTotalLength(combinedTotalQuantity);
  console.log(combinedTotalQuantity, "combined total quantity");
},[]);  


  // Update cartItemLength whenever cart state changes
  useEffect(() => {
    setCartItemLength(cart.length);
  }, [cart]); 


  // Function to handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setDetail(false)

    // Filter products based on search query
    const filtered = products.filter((product) =>
      product?.title?.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Function to toggle the search input visibility
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchQuery(""); 
    setFilteredProducts(products); 
  };

  const onDetail=() =>{
    setDetail(true)
    setSearchQuery("")
  }
  return (
    <header className="bg-yellow-50 py-4 px-6">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex justify-center items-center font-bold">
          <Link href="/" className="text-gray-800 hover:text-gray-800">
            <Image src={"/logo.png"} alt="Logo" width={100} height={100} />
          </Link>
          <span className="text-4xl font-extrabold">Furniro</span>
        </div>
        {/* Desktop Navbar */}
        <nav className="hidden md:flex space-x-14">
          <Link href="/" className="hover:text-gray-800 font-semibold hover:underline">
            Home
          </Link>
          <Link href="/products" className="hover:text-gray-800 font-semibold hover:underline">
            Shop
          </Link>
          <Link href="/blog" className="hover:text-gray-800 font-semibold hover:underline">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-gray-800 font-semibold hover:underline">
            Contact
          </Link>
        </nav>
        <nav className="hidden md:flex space-x-9">
          <Link href="/" className="text-[24px] hover:underline">
            <TbUserExclamation />
          </Link>
          {/* Search Icon */}
          <button onClick={toggleSearch} className="text-[24px]" title="button">
            <IoSearchOutline />
          </button>

          <Link href="/wishList" className="relative text-[24px] hover:underline">
        <span className="absolute top-[-14px] right-[-8px] inline-block bg-red-500 text-white text-[10px] px-2 py-1 rounded-full">
          {wishListLegth.length}
        </span>
        <GoHeart />
      </Link>

          <Link href="/cart" className="relative">
      <AiOutlineShoppingCart className="text-[24px] hover:underline" />
      

      { cartItemCountFromRedux ? (
         <span className="absolute -top-4 right-3 inline-block bg-red-500 text-white text-[10px] px-2 py-1 rounded-full">
         {cartItemCountFromRedux}
       </span>
      ):(
      
      cartItem ?  (
        <span className="absolute -top-4 right-3 inline-block bg-red-500 text-white text-[10px] px-2 py-1 rounded-full">
          {cartItem.length + cartItemLength +cartItemTotalLength}
        </span>
      ):(
        <span className="absolute -top-4 right-3 inline-block bg-red-500 text-white text-[10px] px-2 py-1 rounded-full">
          {cartItemLength + cartItemTotalLength}
        </span>
      ))}

      
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
       
      <div className="md:hidden flex items-center  space-x-4 ">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
            className="p-2 border border-gray-300 rounded-md"
          />
          <IoSearchOutline className="text-xl" />
        </div>
   
      {/* Display filtered products (can be a separate component or section) */}
      {searchQuery && isMenuOpen && !isDeatai &&(
        <div className="mt-4 p-4 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-2">Search Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product._id} className="border p-4 rounded-md shadow-sm">
               <Link href={`/products/${product._id}`}>
                  {/* <a> Add this <a> tag to wrap the content inside Link */}
                    <Image src={product.productImage?.asset?.url} alt={product.title} width={150} height={150} />
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
    <nav className="bg-white text-black w-full max-w-xs p-6 space-y-6 rounded-lg relative">
      {/* Close Button */}
      <button 
        onClick={toggleMenu} 
        className="absolute top-4 right-4 text-black text-3xl z-60">
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


      {/* Search Input (Appears when search icon is clicked) */}
      {isSearchOpen &&  (
        <div className="flex items-center space-x-4 mt-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
            className="p-2 border border-gray-300 rounded-md"
          />
          <IoSearchOutline className="text-xl" />
        </div>
      )}

      {/* Display filtered products (can be a separate component or section) */}
      {searchQuery && !isDeatai &&(
  <div className="mt-4 p-4 bg-white rounded-md shadow-md">
    <h2 className="text-xl font-semibold mb-2">Search Results</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product._id} className="border p-4 rounded-md shadow-sm">
           <Link href={`/products/${product._id}`} onClick={onDetail}>
              {/* <a> Add this <a> tag to wrap the content inside Link */}
                <Image src={product.productImage?.asset?.url} alt={product.title} width={150} height={150} />
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

    </header>
  );
};

export default Header;
