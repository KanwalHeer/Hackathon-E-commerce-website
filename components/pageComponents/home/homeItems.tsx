import React from "react";
import Image from "next/image";

export default function HomeItems() {
  const product = [
    {
      imag: "/itme1.png",
      text: "Dining",
    },
    {
      imag: "/itme2.png",
      text: "Living",
    },
    {
      imag: "/item3.png",
      text: "Bedroom",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto py-16">
      <h1 className="text-gray-700 font-semibold text-center text-2xl mb-4">
        Browse The Range
      </h1>
      <p className="text-gray-500 text-center text-sm mb-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, in!
        Distinctio.
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {product.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden group"
          >
            <div className="relative w-full h-[480px]">
              <Image
                src={item.imag}
                alt={item.text}
                height={200}
                width={200}
                className="w-[400px] h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.text}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
