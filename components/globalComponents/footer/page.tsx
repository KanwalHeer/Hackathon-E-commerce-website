import React from 'react';

export default function Footer() {
  return (
    <div className="bg-white-800 max-w-7xl mx-auto  text-gray-800  ">
      {/* Container for all the footer sections */}
      <div className=" px-8 py-8 border-y border-gray-300">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Section 1: Company Name */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Funiro</h3>
            <div>
            <p className="text-[16px] text-gray-400">
             400 University Drive Suite 200 Coral Gables
            </p>
            <p className='text-[16px] text-gray-400'>FL 33134 USA</p>
            </div>
          </div>
          {/* Section 2: Links */}
          <div className="space-y-8">
            <h3 className="text-sm  text-gray-400">Links</h3>
            <ul className="space-y-8 text-black font-semibold">
              <li><a href="/" className="text-sm hover:underline">Home</a></li>
              <li><a href="/products" className="text-sm hover:underline">Shop</a></li>
              <li><a href="blog" className="text-sm hover:underline">Blog</a></li>
              <li><a href="/contact" className="text-sm hover:underline">Contact</a></li>
            </ul>
          </div>
          {/* Section 3: Help */}
          <div className="space-y-8">
            <h3 className="text-sm  text-gray-400">Help</h3>
            <ul className="space-y-8 text-black font-semibold">
              <li><a href="#" className="text-sm hover:underline">Paymet options</a></li>
              <li><a href="#" className="text-sm hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:underline">Returns</a></li>
            </ul>
          </div>
          {/* Section 4: Newsletter */}
          <div className="space-y-8">
            <h3 className="text-sm  text-gray-400">Newsletter</h3>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full  text-[14px] border-b-2 border-gray-500 text-black focus:outline-none"
              />
              <button className="   text-black border-b-2 border-gray-500">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-center">
          <p className="text-sm">© 2024 Company Name. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
