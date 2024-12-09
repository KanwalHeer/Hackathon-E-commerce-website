import React from 'react'
import Banner from '@/components/globalComponents/banner/banner'
import ProductSection from '@/components/pageComponents/products/productSection'
import BlogListing from '@/components/pageComponents/blog/blogListing'


export default function Blog() {
  return (
    <div>
      <Banner imageUrl='/item3.png' pageTitle='blog' currentPage='blog'pageUrl='blog'/>
      <BlogListing/>
      <ProductSection/>
    </div>
  )
}
