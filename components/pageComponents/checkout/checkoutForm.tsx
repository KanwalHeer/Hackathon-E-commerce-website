"use client";
import React, { useState } from "react";

const CheckoutForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className=" p-6 ">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Billing Address
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700">
              First Name
            </label>
            <input
              title="input"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-300 rounded-xl"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700">
              Last Name
            </label>
            <input
              title="input"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-2 p-3 border border-gray-300 rounded-xl"
              required
            />
          </div>
        </div>

        <div className="flex flex-col mb-6">
          <label className="text-sm font-semibold text-gray-700">
            Company Name {`(Optional)`}
          </label>
          <input
            title="input"
            type="text"
            name="comapnyName"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 p-3 border border-gray-300 rounded-xl"
            required
          />
        </div>
        <div className="flex flex-col mb-6">
          <label className="text-sm font-semibold text-gray-700">
            Country Region
          </label>
          <select
            title="input"
            name="country"
            value={formData.country}
            onChange={handleSubmit}
            className="mt-2 p-3 border border-gray-300 text-gray-400 text-[14px] rounded-lg"
            required
          >
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
        </div>

        <div className="flex flex-col mb-8">
          <label className="text-sm font-semibold text-gray-700">
            Streat Address
          </label>
          <input
            title="input"
            type="text"
            name="streatAddress"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 p-3 border border-gray-300 rounded-xl"
            required
          />
        </div>

        <div className="flex flex-col mb-8">
          <label className="text-sm font-semibold text-gray-700">
            Town/City
          </label>
          <input
            title="input"
            type="text"
            name="city"
            value={formData.phone}
            onChange={handleChange}
            className="mt-2 p-3 border border-gray-300 rounded-xl"
            required
          />
        </div>

        <div className="flex flex-col mb-8">
          <label className="text-sm font-semibold text-gray-700">
            Province
          </label>
          <input
            title="input"
            type="text"
            name="province"
            value={formData.address}
            onChange={handleChange}
            className="mt-2 p-3 border border-gray-300 rounded-xl"
            required
          />
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"> */}
        <div className="flex flex-col mb-8">
          <label className="text-sm font-semibold text-gray-700">
            Zip Code
          </label>
          <input
            title="input"
            type="text"
            name="postalCode"
            value={formData.city}
            onChange={handleChange}
            className="mt-2 p-3 border border-gray-300 rounded-xl"
            required
          />
        </div>
        <div className="flex flex-col mb-8">
          <label className="text-sm font-semibold text-gray-700">Phone</label>
          <input
            title="input"
            type="tel"
            name="phone"
            value={formData.city}
            onChange={handleChange}
            className="mt-2 p-3 border border-gray-300 rounded-xl"
            required
          />
        </div>
        <div className="flex flex-col mb-8">
          <label className="text-sm font-semibold text-gray-700">Email</label>
          <input
            title="input"
            type="email"
            name="email"
            value={formData.city}
            onChange={handleChange}
            className="mt-2 p-3 border border-gray-300 rounded-xl"
            required
          />
        </div>
        <div className="flex flex-col mb-8">
          <input
            type="text"
            name="additionalInfo"
            value={formData.city}
            placeholder="Additional Information"
            onChange={handleChange}
            className="mt-2 p-3 border border-gray-300 rounded-xl"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
