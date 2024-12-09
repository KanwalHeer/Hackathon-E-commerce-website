"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlogListing: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; 

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto py-12 px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Main Blog Section */}
      <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
        {/* Blog Post 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image className="w-full h-96 object-cover" src="/b8.png" alt="Blog 1" width={500} height={300}/>
          <div className="px-6 py-8">
            <h3 className="text-xl font-semibold text-gray-800">Blog Post Title 1</h3>
            <p className="text-gray-600 mt-2 mb-6">
              Vivamus consectetuer risus et turpis. Curabitur tincidunt mollis dolor. Curabitur turpis urna.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            </p>
            <Link href={"#"} className="border-b border-black">Read More</Link>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image className="w-full h-96 object-cover" src="/a2.png" alt="Blog 2" width={500} height={300}/>
          <div className="px-6 py-8">
            <h3 className="text-xl font-semibold text-gray-800">Blog Post Title 2</h3>
            <p className="text-gray-600 mt-2 mb-6">
              Vivamus consectetuer risus et turpis. Curabitur tincidunt mollis dolor. Curabitur turpis urna.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            </p>
            <Link href={"#"} className="border-b border-black mt-4">Read More</Link>
          </div>
        </div>

        {/* Blog Post 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image className="w-full h-96 object-cover" src="/b4.png" alt="Blog 3"  width={500} height={300} />
          <div className="px-6 py-8">
            <h3 className="text-xl font-semibold text-gray-800">Blog Post Title 3</h3>
            <p className="text-gray-600 mt-2 mb-6">
              Vivamus consectetuer risus et turpis. Curabitur tincidunt mollis dolor. Curabitur turpis urna.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
            </p>
            <Link href={"#"} className="border-b border-black mt-4">Read More</Link>
          </div>
        </div>

        {/* Pagination Section */}
      <div className="flex gap-2 flex-wrap items-center justify-center mt-12">
        {/* Previous Button */}
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="py-2 px-4 sm:py-2 sm:px-4 rounded-xl border-yellow-700 text-sm sm:text-base bg-white text-black disabled:opacity-50 disabled:bg-gray-300"
        >
          Prev
        </button>

        {/* Page Number Buttons */}
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              className={`py-2 px-4 sm:py-2 sm:px-4 rounded-xl border-yellow-700 text-sm sm:text-base ${currentPage === pageNumber ? 'bg-yellow-600 text-white' : 'bg-white text-black'} hover:bg-yellow-600 hover:text-white transition-colors`}
            >
              {pageNumber}
            </button>
          );
        })}

        {/* Next Button */}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="py-2 px-4 sm:py-2 sm:px-4 rounded-xl border-yellow-700 text-sm sm:text-base bg-white text-black disabled:opacity-50 disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
      </div>

      {/* Sidebar Section */}
      <div className="lg:col-span-1 p-6">
        {/* Search Bar Section */}
        <div className="mb-24">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Search</h4>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Search blog posts..."
          />
        </div>

        {/* Categories Section */}
        <div className="mb-24">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Categories</h4>
          <ul className="space-y-8">
            <li className="text-gray-700">Technology <span className="text-gray-500">(12)</span></li>
            <li className="text-gray-700">Lifestyle <span className="text-gray-500">(8)</span></li>
            <li className="text-gray-700">Health <span className="text-gray-500">(5)</span></li>
            <li className="text-gray-700">Business <span className="text-gray-500">(9)</span></li>
          </ul>
        </div>

        {/* Recent Posts Section */}
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Recent Posts</h4>
          <ul className="space-y-8">
            <li className="flex items-center space-x-3">
              <Image
                className="w-16 h-16 object-cover rounded-md"
                src="/b1.png"
                alt="Blog 1"
                width={100}
                height={100}
              />
              <Link href="#" className="text-black hover:underline">Blog Post Title 1</Link>
            </li>
            <li className="flex items-center space-x-3">
              <Image
                className="w-16 h-16 object-cover rounded-md"
                src="/b7.png"
                alt="Blog 2"
                width={100}
                height={100}
              />
              <Link href="#" className="text-black hover:underline">Blog Post Title 2</Link>
            </li>
            <li className="flex items-center space-x-3">
              <Image
                className="w-16 h-16 object-cover rounded-md"
                src="/b3.png"
                alt="Blog 3"
                width={100}
                height={100}
              />
              <Link href="#" className="text-black hover:underline">Blog Post Title 3</Link>
            </li>
            <li className="flex items-center space-x-3">
              <Image
                className="w-16 h-16 object-cover rounded-md"
                src="/b5.png"
                alt="Blog 4"
                width={100}
                height={100}
              />
              <Link href="#" className="text-black hover:underline">Blog Post Title 4</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogListing;
