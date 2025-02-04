"use client";
import React, { useEffect, useState } from "react";
import { getOrderHistory } from "@/helper/fetchOrders";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FaSearch, FaFilter } from "react-icons/fa";
import Link from "next/link";
import Loader from "@/components/loader/loader";

interface Order {
  _id: string;
  productImage: {
    asset: {
      url: string;
    };
  };
  productPrice: number;
  productTitle: string;
  productId: string;
  discountPercentage: number;
  userEmail: string;
  userName: string;
  userAddress: string;
  userPhoneNumber: string;
  _createdAt: string;
  status: string; 
}

const OrderHistory: React.FC = () => {
  const [orderHistory, setOrderHistory] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const ordersPerPage = 6;
  const status = "Delivered";
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      fetchOrderHistory(session.user.email);
    }
  }, [session]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = orderHistory.filter((order) =>
        order.productTitle.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredOrders(filtered);
    } else {
      setFilteredOrders(orderHistory);
    }
  }, [searchQuery, orderHistory]);

  const fetchOrderHistory = async (userId: string) => {
    try {
      const orders = await getOrderHistory(userId);
      setOrderHistory(orders);
      setFilteredOrders(orders);
      setLoading(false);
    } catch (err) {
      setError("Error fetching order history");
      setLoading(false);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading)
    return (
      <div className="text-center py-8"><Loader/></div>
    );
  if (error)
    return <div className="text-center text-red-500 py-8">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">
        Your Order History
      </h2>

      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div className="relative w-full sm:w-1/2">
          <input
            type="text"
            placeholder="Search orders..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
        </div>
        <button className="flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-500 transition duration-300">
          <FaFilter className="mr-2" /> Filter
        </button>
      </div>

      {/* Orders Grid */}
      {filteredOrders.length === 0 ? (
        <p className="text-lg text-center">No orders found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentOrders.map((order) => (
            <div
              key={order._id}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
            >
              <div className="order-image mb-4">
                <Image
                  src={order.productImage.asset.url}
                  height={300}
                  width={300}
                  alt={order.productTitle}
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
              <div className="order-details">
                <h3 className="text-xl font-semibold mb-2">
                  {order.productTitle}
                </h3>
                <p className="text-gray-700">
                  Price:{" "}
                  <span className="font-semibold">${order.productPrice}</span>
                </p>
                <p className="text-gray-700">
                  Discount:{" "}
                  <span className="font-semibold">
                    {order.discountPercentage}%
                  </span>
                </p>
                <p className="text-gray-700">
                  Order Date:{" "}
                  <span className="font-semibold">
                    {new Date(order._createdAt).toLocaleDateString()}
                  </span>
                </p>
                <p className="text-gray-700">
                  Status:{" "}
                  <span
                    className={`font-semibold ${order.status === "Delivered" ? "text-green-500" : "text-yellow-500"}`}
                  >
                    {status}
                  </span>
                </p>
                <p className="text-gray-700">
                  Shipping Address: {order.userAddress}
                </p>
                <p className="text-gray-700">Phone: {order.userPhoneNumber}</p>
              </div>
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3 shadow-xl hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-500 transition duration-300 mt-8">
                {" "}
                <Link href={`/products/${order.productId}`}>Buy it again</Link>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        {Array.from(
          { length: Math.ceil(filteredOrders.length / ordersPerPage) },
          (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-4 py-2 rounded-lg ${
                currentPage === i + 1
                  ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-500 transition duration-300"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
