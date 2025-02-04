"use client";

import React, { useState, useEffect } from "react";

const fetchUserAddresses = async (userId: string) => {
  return [
    {
      id: 1,
      address: "123 Main St, Springfield, IL, 62701",
      phone: "123-456-7890",
    },
    {
      id: 2,
      address: "456 Oak St, Chicago, IL, 60601",
      phone: "987-654-3210",
    },
  ];
};

const saveNewAddress = async (
  userId: string,
  address: string,
  phone: string
) => {
  console.log("Saving new address:", { userId, address, phone });
  return { id: Date.now(), address, phone };
};

const Address: React.FC = () => {
  const [userAddresses, setUserAddresses] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [newAddress, setNewAddress] = useState<string>("");
  const [newPhone, setNewPhone] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const userId = "user123";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const addresses = await fetchUserAddresses(userId);
        setUserAddresses(addresses);
        setLoading(false);
      } catch (err) {
        setError("Error fetching addresses");
        setLoading(false);
      }
    };
    fetchData();
  }, [userId]);

  const handleAddAddress = async () => {
    if (!newAddress || !newPhone) {
      setError("Please fill in both address and phone");
      return;
    }

    try {
      const newAddressData = await saveNewAddress(userId, newAddress, newPhone);
      setUserAddresses([...userAddresses, newAddressData]);
      setNewAddress("");
      setNewPhone("");
      setError(null);
    } catch (err) {
      setError("Failed to add address");
    }
  };

  const handleRemoveAddress = (id: number) => {
    setUserAddresses(userAddresses.filter((address) => address.id !== id));
  };

  if (loading)
    return <div className="text-center py-8">Loading addresses...</div>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
        Your Addresses
      </h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md mb-6">
          {error}
        </div>
      )}

      {/* Display existing addresses */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-6 text-gray-700">
          Your Existing Addresses
        </h2>
        {userAddresses.length === 0 ? (
          <p className="text-gray-600">No addresses found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {userAddresses.map((address) => (
              <div
                key={address.id}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                {/* Address and Phone Text */}
                <div className="flex flex-col space-y-2">
                  <p className="text-gray-800 font-medium">
                    Address:{" "}
                    <span className="text-gray-600">{address.address}</span>
                  </p>
                  <p className="text-gray-800 font-medium">
                    Phone: <span className="text-gray-600">{address.phone}</span>
                  </p>
                </div>

                {/* Remove Button */}
                <div className="mt-4 flex justify-center sm:justify-end">
                  <button
                    onClick={() => handleRemoveAddress(address.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 text-sm sm:text-base"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Form to add a new address */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-6 text-gray-700">
          Add a New Address
        </h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address
            </label>
            <input
              type="text"
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="Enter your address"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="text"
              value={newPhone}
              onChange={(e) => setNewPhone(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="flex justify-center mt-6">
            <button
              onClick={handleAddAddress}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 sm:px-8 sm:py-3 rounded-lg shadow-xl hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-500 transition duration-300 text-sm sm:text-base"
            >
              Add Address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
