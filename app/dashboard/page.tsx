"use client";
import { client } from "@/sanity/lib/client";
import { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import TruncateDescription from "@/components/globalComponents/truncateDescription";
import Link from "next/link";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import Loader from "@/components/loader/loader";
import {
  FaUser,
  FaShoppingCart,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaCreditCard,
  FaCog,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
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
  const [products, setProducts] = useState<any[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to fetch users
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

  useEffect(() => {
    const query = `*[_type == "product"]{
      _id,
      title,
      description,
      productImage{
        asset->{
          _id,
          url
        }
      },
      price,
      tags,
      dicountPercentage,
      isNew
    }`;

    client
      .fetch(query)
      .then((data) => {
        setProducts(data.slice(0, 4));
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    return (
      <div className="grid place-items-center h-screen">
        <Loader />
      </div>
    );
  }

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/auth/sign-in");
    if (typeof window !== "undefined") {
      localStorage.removeItem("chechoutRoute");
    }
  };

  const user = users.find((user) => user.email === session.user?.email);
  console.log(user, "user");

  return (
    <div className="flex min-h-screen w-8xl bg-gray-100">
      {/* Main content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="mb-12 flex justify-between items-center">
          <div>
            <h1 className="md:text-3xl text-2xl text-center md:text-start font-semibold text-gray-800">
              Welcome, {session.user?.name || "Valued Customer"}
            </h1>
            <p className="md:text-xl text-lg text-center md:text-start text-gray-600 mt-2">
              Explore Our Latest Products and Offers
            </p>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Profile Section */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaUser className="w-8 h-8 text-blue-500 mr-3" />
              <h2 className="text-xl font-bold text-gray-800">Profile</h2>
            </div>
            <div className="text-gray-700">
              <div>
                <strong>Name:</strong> {user?.name}
              </div>
              <div>
                <strong>Email:</strong> {user?.email}
              </div>
              <div>
                <strong>Phone:</strong> {user?.phoneNumber || "Not Provided"}
              </div>
            </div>
            <Link
              href="/dashboard/profile"
              className="mt-4 inline-flex items-center text-blue-600 hover:underline"
            >
              Manage Profile <FaArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Order History Section */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaShoppingCart className="w-8 h-8 text-green-500 mr-3" />
              <h2 className="text-xl font-bold text-gray-800">Order History</h2>
            </div>
            <div className="text-gray-700">
              <div className="mb-2">
                <strong>Total Orders:</strong> 5
              </div>
              <div className="mb-2">
                <strong>Recent Order:</strong> #12345 (Shipped)
              </div>
            </div>
            <Link
              href="/dashboard/orders"
              className="mt-4 inline-flex items-center text-blue-600 hover:underline"
            >
              View Order History <FaArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Security Section */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaShieldAlt className="w-8 h-8 text-red-500 mr-3" />
              <h2 className="text-xl font-bold text-gray-800">
                Login & Security
              </h2>
            </div>
            <div className="text-gray-700">
              <div>
                <strong>Last Login:</strong> 2 hours ago
              </div>
              <div>
                <strong>Password:</strong> ********
              </div>
            </div>
            <Link
              href="/dashboard/security"
              className="mt-4 inline-flex items-center text-blue-600 hover:underline"
            >
              Change Password <FaArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Addresses Section */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="w-8 h-8 text-purple-500 mr-3" />
              <h2 className="text-xl font-bold text-gray-800">Addresses</h2>
            </div>
            <div className="text-gray-700">
              <div>
                <strong>Default Address:</strong>{" "}
                {user?.address || "Not Provided"}
              </div>
              <div>
                <strong>Total Addresses:</strong> 3
              </div>
            </div>
            <Link
              href="/dashboard/address"
              className="mt-4 inline-flex items-center text-blue-600 hover:underline"
            >
              Manage Addresses <FaArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Payment Methods Section */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaCreditCard className="w-8 h-8 text-yellow-500 mr-3" />
              <h2 className="text-xl font-bold text-gray-800">
                Payment Methods
              </h2>
            </div>
            <div className="text-gray-700">
              <div>
                <strong>Credit Card:</strong> Ending in 1234
              </div>
              <div>
                <strong>PayPal:</strong> Connected
              </div>
            </div>
            <Link
              href="/dashboard/payments"
              className="mt-4 inline-flex items-center text-blue-600 hover:underline"
            >
              Update Payment Methods <FaArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Templates Section */}
          <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaCog className="w-8 h-8 text-indigo-500 mr-3" />
              <h2 className="text-xl font-bold text-gray-800">Templates</h2>
            </div>
            <div className="text-gray-700">
              <div>
                <strong>Current Template:</strong> Template A
              </div>
            </div>
            <Link
              href="/dashboard/wishlist"
              className="mt-4 inline-flex items-center text-blue-600 hover:underline"
            >
              Select Template <FaArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Products & Offers Section */}
        <div className="bg-white p-8 shadow-xl rounded-2xl w-full mt-10">
          <h2 className="text-2xl text-yellow-600 font-bold text-center mb-8">
            Our Exclusive Offers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.length > 0 ? (
              products.map((product) => (
                <div
                  key={product._id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden relative group transition-all duration-300 ease-in-out"
                >
                  <div className="relative w-full h-60">
                    <Image
                      src={product.productImage?.asset?.url}
                      alt={product.title}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-white ${product.isNew ? "bg-green-500" : product.dicountPercentage ? "bg-red-500" : "bg-yellow-500"}`}
                    >
                      {product.isNew ? (
                        <span>New</span>
                      ) : (
                        <span>{product.dicountPercentage}%</span>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {product.title}
                    </h3>
                    <TruncateDescription
                      description={product.description}
                      lines={3}
                    />
                    <p className="text-xl font-semibold text-gray-800 mb-4">
                      ${product.price}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col items-center justify-center">
                    <button className="py-2 px-4 bg-white text-yellow-600 rounded-lg hover:underline transition-colors mb-4">
                      <Link href={`/products/${product._id}`}>
                        View Product
                      </Link>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500">
                No products available at the moment.
              </div>
            )}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/products"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3  shadow-xl hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-500 transition duration-300"
            >
              Explore More Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
