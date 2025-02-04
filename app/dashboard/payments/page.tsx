"use client"
import React, { useState } from 'react';

export default function PaymentMethods() {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: 'Credit Card',
      last4: '1234',
      provider: 'Visa',
      email: 'user@example.com',
    },
    {
      id: 2,
      type: 'PayPal',
      provider: 'PayPal',
      email: 'user@example.com',
    },
  ]);
  
  // Form data for adding new payment method
  const [formData, setFormData] = useState({
    type: '',
    provider: '',
    last4: '',
    email: '',
  });

  // Handle form input change
  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle adding new payment method
  const handleSubmit = (e:any) => {
    e.preventDefault();
    setPaymentMethods((prev:any) => [
      ...prev,
      {
        ...formData,
        id: prev.length + 1, 
      },
    ]);
    setFormData({ type: '', provider: '', last4: '', email: '' }); 
  };

  return (
    <div className="flex min-h-screen  p-8">
      <div className="w-full max-w-2xl mx-auto p-10 rounded-2xl">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 ">Payment Methods</h1>
        <div className="space-y-8">
          {paymentMethods.length === 0 ? (
            <p className="text-lg text-center text-gray-700">No payment methods added yet.</p>
          ) : (
            paymentMethods.map((method) => (
              <div
                key={method.id}
                className="bg-gray-50 p-6 rounded-lg shadow-md flex justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{method.type}</h3>
                  <p className="text-lg text-gray-600">
                    {method.provider} • **** {method.last4 || method?.email.split('@')[0]}
                  </p>
                </div>
                <button
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2  hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-500 transition duration-300"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* Add New Payment Method Form */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Add New Payment Method</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-3">Payment Type</label>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                placeholder="Credit Card / PayPal"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-3">Provider</label>
              <input
                type="text"
                name="provider"
                value={formData.provider}
                onChange={handleInputChange}
                className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                placeholder="Visa / MasterCard / PayPal"
                required
              />
            </div>

            {formData.type === 'Credit Card' && (
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">Last 4 Digits</label>
                <input
                  type="text"
                  name="last4"
                  value={formData.last4}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                  placeholder="e.g. 1234"
                  required
                />
              </div>
            )}

            {formData.type === 'PayPal' && (
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">PayPal Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                  placeholder="user@example.com"
                  required
                />
              </div>
            )}

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3  shadow-xl hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-500 transition duration-300"
              >
                Add Payment Method
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
