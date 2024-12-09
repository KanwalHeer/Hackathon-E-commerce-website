import React from 'react'
import Banner from '@/components/globalComponents/banner/banner'
import ContactPage from '@/components/pageComponents/contact/contactForm'
import ProductSection2 from '@/components/pageComponents/products/productSection2'

export default function Contact() {
  return (
    <div>
      <Banner imageUrl='/item3.png' pageTitle='Contact' currentPage='contact'pageUrl='contact'/>
      <ContactPage/>
      <ProductSection2/>
    </div>
  )
}
