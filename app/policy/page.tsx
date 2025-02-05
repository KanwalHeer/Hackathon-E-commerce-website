import React from 'react';
import Banner from '@/components/globalComponents/banner/banner';

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen">
         <Banner imageUrl='/item3.png' pageTitle='Privacy Policy' currentPage='Privacy Policy'pageUrl='policy'/>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Privacy Policy Title */}
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Privacy Policy
        </h1>

        {/* Introductory Paragraph */}
        <p className="text-lg text-gray-700 mb-8">
          At Funiro, we value your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and protect your data when you use our website.
        </p>

        {/* Section 1: Information Collection */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Information We Collect
          </h2>
          <p className="text-lg text-gray-700">
            We collect information from you when you visit our website, place an order, or subscribe to our newsletter. The types of information we may collect include:
          </p>
          <ul className="list-disc pl-8 mt-4 text-lg text-gray-700">
            <li>Personal information such as your name, email address, and shipping details.</li>
            <li>Payment information when making purchases.</li>
            <li>Usage data such as IP address, browser type, and browsing behavior on our site.</li>
          </ul>
        </div>

        {/* Section 2: How We Use Your Information */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-lg text-gray-700">
            The information we collect is used for the following purposes:
          </p>
          <ul className="list-disc pl-8 mt-4 text-lg text-gray-700">
            <li>To process and fulfill your orders.</li>
            <li>To send promotional emails, newsletters, or updates (if you have opted in).</li>
            <li>To improve our website and customer service.</li>
            <li>To prevent fraud and ensure security on our website.</li>
          </ul>
        </div>

        {/* Section 3: Information Protection */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. How We Protect Your Information
          </h2>
          <p className="text-lg text-gray-700">
            We take the protection of your personal information seriously. We implement a variety of security measures to maintain the safety of your personal data, including:
          </p>
          <ul className="list-disc pl-8 mt-4 text-lg text-gray-700">
            <li>Encryption of sensitive data during transactions.</li>
            <li>Regular security updates and monitoring of our website.</li>
            <li>Limited access to your information for authorized personnel only.</li>
          </ul>
        </div>

        {/* Section 4: Your Rights */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Your Rights
          </h2>
          <p className="text-lg text-gray-700">
            As a user, you have the following rights regarding your personal information:
          </p>
          <ul className="list-disc pl-8 mt-4 text-lg text-gray-700">
            <li>Right to access the data we hold about you.</li>
            <li>Right to correct any inaccuracies in your information.</li>
            <li>Right to request deletion of your data in accordance with applicable laws.</li>
            <li>Right to opt-out of marketing communications at any time.</li>
          </ul>
        </div>

        {/* Section 5: Changes to the Privacy Policy */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Changes to This Privacy Policy
          </h2>
          <p className="text-lg text-gray-700">
            We reserve the right to update or change this Privacy Policy at any time. Any changes will be reflected on this page with an updated revision date. We encourage you to review this page periodically to stay informed about how we protect your information.
          </p>
        </div>

        {/* Section 6: Contact Us */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Contact Us
          </h2>
          <p className="text-lg text-gray-700">
            If you have any questions or concerns about our Privacy Policy, please contact us at:
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Email: <a href="mailto:alikanwal382@gmail.com" className="text-blue-500">alikanwal382@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
