import React from 'react';
import Image from 'next/image';
import Banner from '@/components/globalComponents/banner/banner';

export default function PaymentOptions() {
  return (
    <div className="bg-gray-50 min-h-screen">
         <Banner imageUrl='/item3.png' pageTitle='Payment Options' currentPage='Payment Options'pageUrl='paymentOptions'/>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Payment Options Title */}
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Payment Options
        </h1>

        {/* Introductory Paragraph */}
        <p className="text-lg text-gray-700 mb-8 text-center">
          We accept a variety of payment methods to ensure a smooth and secure checkout experience for our customers. Choose the method that works best for you.
        </p>

        {/* Accepted Payment Methods */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {/* Credit Cards */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center">
            <Image
              src="/viza.png"
              alt="Visa"
              width={100}  
              height={40} 
              className="mb-4"
            />
            <p className="text-xl text-gray-700">Visa</p>
          </div>

          {/* MasterCard */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center">
            <Image
              src="/mastercard.png"
              alt="MasterCard"
              width={100}
              height={40}
              className="mb-4"
            />
            <p className="text-xl text-gray-700">MasterCard</p>
          </div>

          {/* PayPal */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center">
            <Image
              src="/payapl.webp"
              alt="PayPal"
              width={100}
              height={40}
              className="mb-4"
            />
            <p className="text-xl text-gray-700">PayPal</p>
          </div>

         

       
          {/* Stripe */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center">
            <Image
              src="/stripy.png"
              alt="Stripe"
              width={100}
              height={40}
              className="mb-4"
            />
            <p className="text-xl text-gray-700">Stripe</p>
          </div>

          
        </div>

        {/* Explanation */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Pay</h2>
          <p className="text-lg text-gray-700 mb-4">
            Once you are ready to checkout, simply choose one of the available payment methods during the payment step.
          </p>
          <p className="text-lg text-gray-700">
            All payments are processed securely to ensure your privacy and safety. We work with trusted payment providers to give you peace of mind.
          </p>
        </div>

        {/* Contact Info */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Need Help?</h2>
          <p className="text-lg text-gray-700 mb-4">
            If you have any issues or questions regarding your payment, feel free to contact our support team:
          </p>
          <p className="text-lg text-gray-700">
            Email: <a href="mailto:alikanwal382@gmail.com" className="text-blue-500">alikanwal382@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
