import React from 'react'
import Banner from '@/components/globalComponents/banner/banner'
import ProductSection2 from '@/components/pageComponents/products/productSection2'
import Cart from '@/components/pageComponents/cart/cart'

export default function page() {
  return (
    <div>
     <Banner imageUrl='/item3.png' pageTitle='Cart' currentPage='cart'pageUrl='cart'/>
     <Cart/>
     <ProductSection2/>
    
    </div>
  )
}
