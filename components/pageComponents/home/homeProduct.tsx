"use client";
import React, { useEffect, useState } from "react";
import { dummyProducts } from "../../../app/data/dumyData";
import ProductGrid from "@/components/globalComponents/productListing/productslisting";
import Link from "next/link";
import { client } from "@/sanity/lib/client"
export default function Homeproducts() {
  const [products, setProducts] = useState<any[]>([]);
  // Simulating fetching products from an API

  //  const [products, setProducts] = useState([]);
  
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
  
  console.log(products,"products");
  // useEffect(() => {
  //   setProducts(dummyProducts);
  // }, []);

  return (
    <div className="px-4">
      

      {/* Pass products and itemsPerPage to the ProductGrid */}
      <ProductGrid products={products} itemsPerPage={8} />
      <div className="flex justify-center mb-6">
        <button className="px-8 py-2 border border-yellow-700 text-yellow-700">
          <Link href={"/products"}>Show More</Link>
        </button>
      </div>
    </div>
  );
}
