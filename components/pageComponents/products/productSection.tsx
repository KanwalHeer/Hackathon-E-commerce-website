import React from "react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { HiSquares2X2 } from "react-icons/hi2";
import { BsViewList } from "react-icons/bs";

export default function ProductSection() {
  return (
    <div className="max-w-screen-2xl mx-auto py-8 bg-yellow-50 my-12">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between px-4">
        {/* Section 1 */}
        <section className="flex justify-center gap-4 sm:gap-6 mb-4 sm:mb-0">
          <ul className="flex justify-center gap-6 border-r-2 px-3 font-semibold text-black border-gray-500 py-2">
            <ul className="flex justify-center gap-2">
              <li>
                <HiAdjustmentsHorizontal size={24} />
              </li>
              <li>Filter</li>
            </ul>
            <li>
              <HiSquares2X2 size={24} />
            </li>
            <li>
              <BsViewList size={24} />
            </li>
          </ul>
          <p className="text-black py-2 font-semibold">
            Showing 1-16 of 32 results
          </p>
        </section>

        {/* Section 2 */}
        <section className="flex flex-wrap justify-center gap-4 sm:gap-8">
          <ul className="flex justify-center gap-4 py-2">
            <li className="text-black">Show</li>
            <li className="text-gray-500">16</li>
            <li className="text-black">Short by</li>
            <li className="text-gray-500">Default</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
