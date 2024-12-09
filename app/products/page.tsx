import React from 'react'
import Banner from '@/components/globalComponents/banner/banner'
import ProductSection from '@/components/pageComponents/products/productSection'
import Products from '@/components/pageComponents/products/listing'
import ProductSection2 from '@/components/pageComponents/products/productSection2'

export default function ProductListing() {
  return (
    <div>
      <Banner imageUrl='/item3.png' pageTitle='Shop' currentPage='shop'pageUrl='products'/>
      <ProductSection/>
      <Products/>
      <ProductSection2/>

    </div>
  )
}
