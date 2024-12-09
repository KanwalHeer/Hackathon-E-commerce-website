import React from 'react';

const ComparisonSection2: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-12 px-6">
      {/* General Section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">General</h2>
      </div>

      {/* Comparison Table */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Left Column: Comparison Criteria */}
        <div className="flex flex-col gap-4">
          <div className="font-semibold text-gray-700">Product</div>
          <div className="font-semibold text-gray-700">Price</div>
          <div className="font-semibold text-gray-700">Rating</div>
          <div className="font-semibold text-gray-700">Warranty</div>
        </div>

        {/* Product 1 */}
        <div className="flex flex-col gap-4 bg-gray-100 p-4 rounded-lg shadow-lg">
          <div className="font-medium text-gray-800">Product 1</div>
          <div className="text-gray-600">$299</div>
          <div className="text-yellow-500">4.5 ★</div>
          <div className="text-gray-600">1 Year</div>
        </div>

        {/* Product 2 */}
        <div className="flex flex-col gap-4 bg-gray-100 p-4 rounded-lg shadow-lg">
          <div className="font-medium text-gray-800">Product 2</div>
          <div className="text-gray-600">$249</div>
          <div className="text-yellow-500">4.2 ★</div>
          <div className="text-gray-600">2 Years</div>
        </div>

        {/* Product 3 */}
        <div className="flex flex-col gap-4 bg-gray-100 p-4 rounded-lg shadow-lg">
          <div className="font-medium text-gray-800">Product 3</div>
          <div className="text-gray-600">$359</div>
          <div className="text-yellow-500">4.8 ★</div>
          <div className="text-gray-600">3 Years</div>
        </div>
      </div>

      {/* Products Section */}
      <div className="flex flex-col md:flex-row lg:flex-row  justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Products</h2>
        <div className="flex flex-col md:flex-row lg:flex-row gap-4 w-full sm:w-auto"> {/* Make buttons stack vertically on mobile */}
          <button className="py-2 px-6 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors w-full sm:w-auto">
            Reset Comparison
          </button>
          <button className="py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors w-full sm:w-auto">
            Compare Now
          </button>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Left Column: Comparison Criteria */}
        <div className="flex flex-col gap-4">
          <div className="font-semibold text-gray-700">Product</div>
          <div className="font-semibold text-gray-700">Price</div>
          <div className="font-semibold text-gray-700">Rating</div>
          <div className="font-semibold text-gray-700">Warranty</div>
        </div>

        {/* Product 1 */}
        <div className="flex flex-col gap-4 bg-gray-100 p-4 rounded-lg shadow-lg">
          <div className="font-medium text-gray-800">Product 1</div>
          <div className="text-gray-600">$299</div>
          <div className="text-yellow-500">4.5 ★</div>
          <div className="text-gray-600">1 Year</div>
        </div>

        {/* Product 2 */}
        <div className="flex flex-col gap-4 bg-gray-100 p-4 rounded-lg shadow-lg">
          <div className="font-medium text-gray-800">Product 2</div>
          <div className="text-gray-600">$249</div>
          <div className="text-yellow-500">4.2 ★</div>
          <div className="text-gray-600">2 Years</div>
        </div>

        {/* Product 3 */}
        <div className="flex flex-col gap-4 bg-gray-100 p-4 rounded-lg shadow-lg">
          <div className="font-medium text-gray-800">Product 3</div>
          <div className="text-gray-600">$359</div>
          <div className="text-yellow-500">4.8 ★</div>
          <div className="text-gray-600">3 Years</div>
        </div>
      </div>

      {/* Warranty Section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Warranty</h2>
      </div>

      {/* Product Features Comparison */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {/* Left Column: Feature Names */}
        <div className="flex flex-col gap-4 mb-12">
          <div className="font-semibold text-gray-700">Warranty</div>
          <div className="font-semibold text-gray-700">Color</div>
          <div className="font-semibold text-gray-700">Size</div>
          <div className="font-semibold text-gray-700">Weight</div>
        </div>

        {/* Product 1 Features */}
        <div className="flex flex-col gap-4 bg-gray-100 p-4 rounded-lg shadow-lg">
          <div className="text-gray-600">1 Year</div>
          <div className="text-gray-600">Black</div>
          <div className="text-gray-600">Large</div>
          <div className="text-gray-600">1.5 kg</div>
        </div>

        {/* Product 2 Features */}
        <div className="flex flex-col gap-4 bg-gray-100 p-4 rounded-lg shadow-lg">
          <div className="text-gray-600">2 Years</div>
          <div className="text-gray-600">Silver</div>
          <div className="text-gray-600">Medium</div>
          <div className="text-gray-600">1.2 kg</div>
        </div>

        {/* Product 3 Features */}
        <div className="flex flex-col gap-4 bg-gray-100 p-4 rounded-lg shadow-lg">
          <div className="text-gray-600">3 Years</div>
          <div className="text-gray-600">White</div>
          <div className="text-gray-600">Small</div>
          <div className="text-gray-600">1.1 kg</div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection2;
