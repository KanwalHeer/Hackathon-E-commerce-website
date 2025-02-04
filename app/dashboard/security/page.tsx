import React from 'react'
import { FaKey, FaShieldAlt, FaMobileAlt } from 'react-icons/fa';

const LoginAndSecurityPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Login & Security</h1>
          <p className="text-gray-600 mt-2">
            Manage your account security settings, update your password, and enable two-factor authentication.
          </p>
        </div>

        {/* Change Password Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex items-center mb-4">
            <FaKey className="w-8 h-8 text-blue-500 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Change Password</h2>
          </div>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="currentPassword">
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your current password"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="newPassword">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your new password"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="confirmPassword">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your new password"
              />
            </div>
            <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3  shadow-xl hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-500 transition duration-300"
            >
             Update Password
            </button>
          </div>
          </form>
        </div>

        {/* Two-Factor Authentication Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex items-center mb-4">
            <FaShieldAlt className="w-8 h-8 text-green-500 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Two-Factor Authentication</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Add an extra layer of security to your account by enabling two-factor authentication.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Status: <strong>Disabled</strong></span>
            <button
              className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Enable 2FA
            </button>
          </div>
        </div>

        {/* Login Activity Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaMobileAlt className="w-8 h-8 text-purple-500 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Login Activity</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Review recent login activity to ensure your account is secure.
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-gray-800">Login from Chrome on Windows</p>
                <p className="text-sm text-gray-500">October 10, 2023 at 10:30 AM</p>
              </div>
              <button className="text-red-600 hover:underline">Report</button>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-gray-800">Login from Safari on iPhone</p>
                <p className="text-sm text-gray-500">October 9, 2023 at 8:15 PM</p>
              </div>
              <button className="text-red-600 hover:underline">Report</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAndSecurityPage;
