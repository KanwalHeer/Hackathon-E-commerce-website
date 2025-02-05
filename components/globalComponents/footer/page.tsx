"use client"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle email submission
  const handleSubscribe = (e:any) => {
    e.preventDefault();

    const templateParams = {
      to_email: email,
      message: 'Thank you for subscribing to our newsletter!',
    };

    emailjs
      .send('service_rusgf3f', 'template_ppgjv8m', templateParams, 'NqUYJsuWwIMmFHzk3')
      .then(
        (response) => {
          setMessage('Subscription successful!');
          setEmail('');
        },
        (error) => {
          setMessage('Subscription failed. Please try again.');
        }
      );
  };

  return (
    <div className="bg-white-800 max-w-7xl mx-auto text-gray-800">
      {/* Container for all the footer sections */}
      <div className="px-8 py-8 border-y border-gray-300">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Section 1: Company Name */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Funiro</h3>
            <div>
              <p className="text-[10px] text-gray-400">
                400 University Drive Suite 200 Coral Gables
              </p>
              <p className="text-[10px] text-gray-400">FL 33134 USA</p>
            </div>
          </div>
          {/* Section 2: Links */}
          <div className="space-y-8">
            <h3 className="text-sm text-gray-400">Links</h3>
            <ul className="space-y-8 text-black font-semibold">
              <li><a href="/" className="text-sm hover:underline">Home</a></li>
              <li><a href="/products" className="text-sm hover:underline">Shop</a></li>
              <li><a href="blog" className="text-sm hover:underline">Blog</a></li>
              <li><a href="/contact" className="text-sm hover:underline">Contact</a></li>
            </ul>
          </div>
          {/* Section 3: Help */}
          <div className="space-y-8">
            <h3 className="text-sm text-gray-400">Help</h3>
            <ul className="space-y-8 text-black font-semibold">
              <li><a href="paymentOptions" className="text-sm hover:underline">Payment options</a></li>
              <li><a href="/policy" className="text-sm hover:underline">Privacy Policy</a></li>
              <li><a href="/faqs" className="text-sm hover:underline">FAQs</a></li>
            </ul>
          </div>
          {/* Section 4: Newsletter */}
          <div className="space-y-8">
            <h3 className="text-sm text-gray-400">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-[14px] border-b-2 border-gray-500 text-black focus:outline-none"
                required
              />
              <button type="submit" className="text-black border-b-2 border-gray-500">
                SUBSCRIBE
              </button>
            </form>
            {message && <p className="text-sm text-gray-500 mt-2">{message}</p>}
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-600 pt-4 text-center">
          <p className="text-sm">© 2024 Company Name. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
