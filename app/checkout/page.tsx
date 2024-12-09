import React from 'react'
import Banner from '@/components/globalComponents/banner/banner'
import CheckoutForm from '@/components/pageComponents/checkout/checkoutForm'
import Placeholder from '@/components/pageComponents/checkout/placeholder'
import ProductSection2 from '@/components/pageComponents/products/productSection2'
export default function Checkout() {
  return (
    <div>
      <Banner imageUrl='/item3.png' pageTitle='Checkout' currentPage='checkout'pageUrl='checkout'/>
      <div className='flex flex-col justify-cennter lg:flex-row md:flex-row gap-20 max-w-[1200px] mx-auto'>
        <CheckoutForm/>
        <Placeholder/>
      </div>
      <ProductSection2/>
    </div>
  )
}
