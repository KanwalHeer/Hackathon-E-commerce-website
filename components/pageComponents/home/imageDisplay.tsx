import React from "react";
import Image from "next/image";

export default function ImageDisplay() {
  return (
    <div className=" flex gap-2 justify-center max-w-[1200px] mx-auto mt-14 px-4">
     
      {/* Section 1 */}
      <div className="space-y-4">
        {/* Sub Section 1 */}
        <div className=" flex flex-row  gap-2">
          {/* Image 1: 20% width */}
          <div className="w-full  sm:w-1/5">
            <Image
              src="/b1.png"
              alt="Image 1"
              width={500}
              height={300}
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          {/* Image 2: 80% width */}
          <div className="w-full sm:w-4/5 mt-8">
            <Image
              src="/b2.png"
              alt="Image 2"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Sub Section 2 */}
        <div className="flex flex-row justify-center gap-2">
          {/* Image 1: 40% width */}
          <div className="w-full  sm:w-2/5">
            <Image
              src="/b3.png"
              alt="Image 3"
              width={500}
              height={300}
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          {/* Image 2: 60% width */}
          <div className="w-full sm:w-3/5 mb-10">
            <Image
              src="/b4.png"
              alt="Image 4"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div>
        {/* Single Image */}
        <div className="w-full relative top-28 ">
          <Image
            src="/b5.png"
            alt="Image 5"
            width={500}
            height={300}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="space-y-4">
        {/* Sub Section 1 */}
        <div className="flex  gap-2">
          {/* Image 1: 50% width */}
          <div className="w-full sm:w-5/12 mt-8">
            <Image
              src="/b6.png"
              alt="Image 6"
              width={500}
              height={300}
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          {/* Image 2: 50% width */}
          <div className="w-full sm:w-7/12  ">
            <Image
              src="/b7.png"
              alt="Image 7"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Sub Section 2 */}
        <div className="flex  gap-2">
          {/* Image 1: 45% width */}
          <div className="w-full  sm:w-7/12">
            <Image
              src="/b8.png"
              alt="Image 8"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          {/* Image 2: 55% width */}
          <div className="w-full sm:w-5/12 ">
            <Image
              src="/b9.png"
              alt="Image 9"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
