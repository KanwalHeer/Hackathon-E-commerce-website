import React from 'react'
import Banner from '@/components/globalComponents/banner/banner'
import ProductSection2 from '@/components/pageComponents/products/productSection2'
import CompareSection1 from '@/components/pageComponents/comapre/compareSection1'
import ComparisonSection2 from '@/components/pageComponents/comapre/compareSection2'

export default function ProductComparision() {
  return (
    <div>
       <Banner imageUrl='/item3.png' pageTitle='Product Comparision' currentPage='compare'pageUrl='compare'/>
       <CompareSection1/>
       <ComparisonSection2/>
       <ProductSection2/>
     
    </div>
  )
}

