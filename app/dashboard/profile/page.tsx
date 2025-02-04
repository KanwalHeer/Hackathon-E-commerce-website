"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "@/components/loader/loader";

interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  role: string;
}

export default function UserInfo() {
  const [users, setUsers] = useState<User[]>([]);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
  });
  const { data: session } = useSession();
  const router = useRouter();

  // Fetch all users
  async function getAllUsers() {
    try {
      const res = await fetch("/api/users");
      const data = await res.json();
      console.log("Fetched data:", data);

      if (Array.isArray(data.users)) {
        setUsers(data.users);
      } else {
        console.error("Unexpected data format:", data);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  // Find the logged-in user
  const user = users.find((user) => user.email === session?.user?.email);

  // Populate form data when user data is available
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        address: user.address,
        password: "",
      });
    }
  }, [user]);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/user-update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: user?._id,
          ...formData,
        }),
      });

      if (res.ok) {
        alert("Profile updated successfully!");
        setEditMode(false);
        getAllUsers(); // Refresh user data
      } else {
        alert("Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("An error occurred while updating the profile.");
    }
  };

  if (!session) {
    return (
      <div className="grid place-items-center h-screen">
        <Loader />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="grid place-items-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-3xl mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
          Your Profile
        </h1>

        {!editMode ? (
          <div>
            {/* Profile Info */}
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Name</h3>
                <p className="text-base sm:text-lg text-gray-700 mt-2 sm:mt-0">{user.name}</p>
              </div>

              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Email</h3>
                <p className="text-base sm:text-lg text-gray-700 mt-2 sm:mt-0">{user.email}</p>
              </div>

              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Phone Number</h3>
                <p className="text-base sm:text-lg text-gray-700 mt-2 sm:mt-0">{user.phoneNumber}</p>
              </div>

              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Address</h3>
                <p className="text-base sm:text-lg text-gray-700 mt-2 sm:mt-0">{user.address}</p>
              </div>
            </div>

            {/* Edit Profile Button */}
            <div className="flex justify-center mt-6 sm:mt-8">
              <button
                onClick={() => setEditMode(true)}
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-500 transition duration-300 text-sm sm:text-base"
              >
                Edit Profile
              </button>
            </div>
          </div>
        ) : (
          // Edit Form
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-2 sm:mb-3">Name</label>
              <input
              title="button"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 sm:p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 text-base sm:text-lg"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-2 sm:mb-3">Email</label>
              <input
              title="button"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 sm:p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 text-base sm:text-lg"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-2 sm:mb-3">Phone Number</label>
              <input
               title="button"
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full p-3 sm:p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 text-base sm:text-lg"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-2 sm:mb-3">Address</label>
              <input
               title="button"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-3 sm:p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 text-base sm:text-lg"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-2 sm:mb-3">New Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-3 sm:p-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 text-base sm:text-lg"
                placeholder="Leave blank to keep current password"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6">
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-500 transition duration-300 text-sm sm:text-base"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setEditMode(false)}
                className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-500 transition duration-300 text-sm sm:text-base"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}