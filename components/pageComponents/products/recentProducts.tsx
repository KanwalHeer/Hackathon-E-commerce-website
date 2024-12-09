"use client";
// src/components/pageComponents/products/listing.tsx
import React, { useEffect, useState } from "react";
import { dummyProducts } from "../../../app/data/dumyData";
import ProductGrid from "@/components/globalComponents/productListing/productslisting";
import Link from "next/link";

export default function RelatedProducts() {
  const [products, setProducts] = useState<any[]>([]);

  // Simulating fetching products from an API
  useEffect(() => {
    setProducts(dummyProducts);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-center">Related Products</h1>
      {/* Pass products and itemsPerPage to the ProductGrid */}
      <ProductGrid products={products} itemsPerPage={4} />
      <div className="flex justify-center mb-6">
        <button className="px-8 py-2 border border-yellow-700 text-yellow-700">
          <Link href={"/products"}>Show More</Link>
        </button>
      </div>
    </div>
  );
}
