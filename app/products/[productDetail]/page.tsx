"use client"
import ProductDetail from '@/components/pageComponents/products/productDetail';
import { dummyProducts } from '@/app/data/dumyData';
import ProductDetail2 from '@/components/pageComponents/products/detailInnfo';
import RelatedProducts from '@/components/pageComponents/products/recentProducts';
import { useEffect, useState } from 'react';
import { client } from "@/sanity/lib/client"
import Loader from '@/components/loader/loader';
 interface ProductImage {
  asset: {
    _id: string;
    url: string;
  };
}

interface Product {
  _id: string;
  title: string;
  description: string;
  productImage: ProductImage;
  price: number;
  tags: string[];
  dicountPercentage?: number; 
  isNew?: boolean; 
}
const ProductPage = ({ params }: { params: { productDetail: string } }) => {
  const { productDetail } = params;
  const [products, setProducts] = useState<Product[]>([]);

  
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




  const product = products.find((p) => p._id === productDetail);
  console.log(product);
  
  if (!product) {
    return <Loader/>
  }
  return (
    <div>
        <ProductDetail product={product} />;
        <ProductDetail2 product={product} />;
        <RelatedProducts/>
    </div>
  ) 
};

export default ProductPage;
