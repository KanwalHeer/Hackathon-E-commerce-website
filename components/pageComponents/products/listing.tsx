"use client";
import React, { useEffect, useState } from "react";
import ProductGrid from "@/components/globalComponents/productListing/productslisting";
import { client } from "@/sanity/lib/client";
export default function Products() {
  const [products, setProducts] = useState<any[]>([]);
    useEffect(() => {
      const query = `*[_type == "product"]{
        _id,
        title,
        description,
        productImage{
          asset->{
            _id,
            url
          }
        },
        price,
        tags,
        dicountPercentage,
        isNew
      }`;
  
      client.fetch(query).then((data) => {
        setProducts(data);
      }).catch((error) => {
        console.error("Error fetching products:", error);
      });
    }, []); 
  
  return (
    <div>
      {/* Pass products and itemsPerPage to the ProductGrid */}
      <ProductGrid products={products} itemsPerPage={16} />
    </div>
  );
}
