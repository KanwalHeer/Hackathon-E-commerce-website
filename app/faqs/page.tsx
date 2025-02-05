"use client"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Banner from '@/components/globalComponents/banner/banner';
import dotenv from "dotenv";
export default function FAQ() {
  const [userQuestion, setUserQuestion] = useState('');
  const [message, setMessage] = useState('');
  dotenv.config()

  const handleSubmit = (e:any) => {
    e.preventDefault();

    const templateParams = {
      user_question: userQuestion,
    };

    emailjs
      .send('service_rusgf3f', 'template_ppgjv8m', templateParams, 'NqUYJsuWwIMmFHzk3')
      .then(
        (response) => {
          setMessage('Your question has been submitted successfully!');
          setUserQuestion('');
        },
        (error) => {
          setMessage('Failed to submit the question. Please try again.');
        }
      );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
         <Banner imageUrl='/item3.png' pageTitle='FAQs' currentPage='FAQs'pageUrl='faqs'/>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* FAQ Title */}
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Frequently Asked Questions (FAQ)
        </h1>

        {/* FAQ Content */}
        <div className="space-y-8">
          {/* Question 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. How do I place an order?
            </h2>
            <p className="text-lg text-gray-700">
              To place an order, simply browse our products, add them to your cart, and proceed to checkout. You can choose your preferred payment method and shipping address.
            </p>
          </div>

          {/* Question 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Do you offer free shipping?
            </h2>
            <p className="text-lg text-gray-700">
              Yes, we offer free standard shipping on orders over $50 within the US. For international shipping, rates may vary based on location.
            </p>
          </div>

          {/* Question 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Can I return or exchange my order?
            </h2>
            <p className="text-lg text-gray-700">
              Yes, we accept returns and exchanges within 30 days of purchase, provided the items are in their original condition. Please refer to our returns policy for more details.
            </p>
          </div>
        </div>

       
        <div className="mt-12 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Have a question? Ask us!
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="question" className="text-lg text-gray-700">Your Question</label>
              <textarea
                id="question"
                value={userQuestion}
                onChange={(e) => setUserQuestion(e.target.value)}
                rows={4}
                className="w-full p-3 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your question here..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white p-3 rounded-lg hover:bg-yellow-700 transition duration-300"
            >
              Submit Question
            </button>
          </form>
          {message && <p className="text-center text-sm mt-4 text-gray-500">{message}</p>}
        </div>
      </div>
    </div>
  );
}
