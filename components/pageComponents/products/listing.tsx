"use client";
import React, { useEffect, useState } from "react";
import { dummyProducts } from "../../../app/data/dumyData";
import ProductGrid from "@/components/globalComponents/productListing/productslisting";

export default function Products() {
  const [products, setProducts] = useState<any[]>([]);
  // Simulating fetching products from an API
  useEffect(() => {
    setProducts(dummyProducts);
  }, []);
  return (
    <div>
      {/* Pass products and itemsPerPage to the ProductGrid */}
      <ProductGrid products={products} itemsPerPage={16} />
    </div>
  );
}
