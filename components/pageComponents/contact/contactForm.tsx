"use client";
import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="max-w-[1200px] mx-auto py-12 px-6">
      <div className="w-full md:w-[600px] mx-auto my-4">
        <h1 className="text-4xl text-center font-bold ">
          Get In Touch With Us
        </h1>
        <p className="text-gray-400 text-[12px] text-wrap text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis qui
          ducimus a commodi quos assumenda odit vitae quo, repudiandae, quam
          laudantium? Minus, ducimus.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 mt-12">
        {/* Left side: Company Information */}
        <div className=" p-4 ">
          <div className="mb-6 flex items-start gap-4">
            <FaMapMarkerAlt className="text-black text-2xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Address</h3>
              <p className="text-gray-600">
                123 Business St, Suite 456, City, State, ZIP
              </p>
            </div>
          </div>

          <div className="mb-6 flex items-start gap-4">
            <FaPhoneAlt className="text-black text-2xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">+1 234 567 890</p>
            </div>
          </div>

          <div className="mb-6 flex items-start gap-4">
            <FaClock className="text-black text-2xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Working Time
              </h3>
              <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Sat - Sun: Closed</p>
            </div>
          </div>
        </div>

        {/* Right side: Contact Form */}
        <div className="flex-1 p-4 ">
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="flex flex-col mb-6">
              <label className="text-sm font-semibold text-gray-700">
                Your Name
              </label>
              <input
                title="input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 py-4 px-14 border border-gray-300 rounded-xl w-full outline-none"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col mb-6">
              <label className="text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                title="input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 py-4 px-14 border border-gray-300 rounded-xl outline-none"
                required
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col mb-6">
              <label className="text-sm font-semibold text-gray-700">
                Subject
              </label>
              <input
                title="input"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-2 py-4 px-14 border border-gray-300 rounded-xl outline-none"
                required
              />
            </div>

            {/* Message */}
            <div className="flex flex-col mb-6">
              <label className="text-sm font-semibold text-gray-700">
                Message
              </label>
              <textarea
                title="input"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-2 py-4 px-14 border border-gray-300 rounded-xl outline-none"
                rows={5}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-start">
              <button
                type="submit"
                className="w-fit py-3 px-8 bg-yellow-700 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
