import React from 'react';
import Link from 'next/link';

interface BannerProps {
  pageTitle: string;
  imageUrl: string;
  currentPage: string; 
  pageUrl:string;
}

const Banner: React.FC<BannerProps> = ({ pageTitle, imageUrl, currentPage,pageUrl }) => {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] bg-cover bg-center max-w-screen-2xl mx-auto" style={{ backgroundImage: `url(${imageUrl})` }}>
      {/* Overlay with opacity */}
      <div className="absolute inset-0 bg-gray-200 opacity-50"></div>
      {/* Page Title */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-3xl sm:text-4xl font-semibold drop-shadow-lg text-black">{pageTitle}</h1>
        {/* Breadcrumb Links */}
        <div className="mt-4">
          <span className="text-lg">
            {/* Static Home link - always black */}
            <Link 
              href="/" 
              className="mr-2 text-black font-semibold"
            >
              Home
            </Link>
            <span className="text-black"> &gt; </span>
            {/* Dynamic current page link */}
            <Link 
              href={`/${pageUrl}`}
              className={`${currentPage ? 'text-gray-500 text-[20px]' : 'text-gray-400'}`} 
            >
              {currentPage}
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
