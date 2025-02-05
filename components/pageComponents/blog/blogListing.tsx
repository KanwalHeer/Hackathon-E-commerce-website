
"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import TruncateDescription from '@/components/globalComponents/truncateDescription';

const BlogListing: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const blogsPerPage = 2; 

  
  useEffect(() => {
    const fetchBlogs = async () => {
      const blogQuery = `*[_type == "blog"] | order(publishedAt desc) {
        _id,
        title,
        description,
        image {
          asset->{
            _id,
            url
          }
        },
        publishedAt
      }`;

      const blogData = await client.fetch(blogQuery);
      setBlogs(blogData); 

      // Fetch recent blog posts for the sidebar
      const recentQuery = `*[_type == "blog"] | order(publishedAt desc) [0...5] {
        _id,
        title,
        image {
          asset->{
            _id,
            url
          }
        }
      }`;

      const recentData = await client.fetch(recentQuery);
      setRecentBlogs(recentData);
    };

    fetchBlogs();
  }, []);

  const totalPages = Math.ceil(blogs.length / blogsPerPage); 

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
        {/* Dynamically render blog posts */}
        {blogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage).map((blog: any) => (
          <div key={blog._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image className="w-full h-96 object-cover" src={blog.image.asset.url} alt={blog.title} width={500} height={300} />
            <div className="px-6 py-8">
              <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
              <p className="text-gray-600 mt-2 mb-6">
                <TruncateDescription description={blog.description} lines={30} />
              </p>
              <Link href={`/blog/${blog._id}`} className="border-b border-black">Read More</Link>
            </div>
          </div>
        ))}

        {/* Pagination Section */}
        <div className="flex gap-2 flex-wrap items-center justify-center mt-12">
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
        {/* Recent Posts Section */}
        <div>
          <h4 className="text-xl font-semibold text-gray-800 mb-4">Recent Posts</h4>
          <ul className="space-y-8">
            {recentBlogs.map((recentBlog: any) => (
              <li key={recentBlog._id} className="flex items-center space-x-3">
                <Image
                  className="w-16 h-16 object-cover rounded-md"
                  src={recentBlog.image.asset.url}
                  alt={recentBlog.title}
                  width={100}
                  height={100}
                />
                <Link href={`/blog/${recentBlog._id}`} className="text-black hover:underline">
                  {recentBlog.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default BlogListing;
