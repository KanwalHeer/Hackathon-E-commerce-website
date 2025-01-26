"use client";
import { client } from "@/sanity/lib/client";
import { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import TruncateDescription from "@/components/globalComponents/truncateDescription";
import Link from "next/link";
import Image from "next/image";

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

  // Function to fetch users
  async function getAllUsers() {
    try {
      const res = await fetch("/api/users");
      const data = await res.json();
      console.log("Fetched data:", data);

      // Adjust according to the actual response format
      if (Array.isArray(data.users)) {
        setUsers(data.users);
      } else {
        console.error("Unexpected data format:", data);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  // Fetch users on component mount
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
        setProducts(data.slice(0, 3));
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    return <div className="grid place-items-center h-screen">Loading...</div>;
  }

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/auth/sign-in");
    if (typeof window !== "undefined") {
      localStorage.removeItem("chechoutRoute");
    }
  };

  // Filter the users based on session email
  const user = users.find((user) => user.email === session.user?.email);
  return (
    <div className="min-h-screen max-w-[1400px] mx-auto bg-gray-50 flex flex-col items-center py-10">
      {/* Welcome Message */}
      <div className="flex justify-center items-center  px-4">
        <div className="text-center">
          <span className="text-2xl sm:text-3xl font-bold mb-2 block">
            Welcome,
          </span>
          <span className="text-yellow-600 text-2xl sm:text-3xl font-bold mb-2 block">
            {session.user?.name || "Valued Customer"}
          </span>
          <br />
          <span className="text-xl sm:text-2xl font-semibold mt-2 block">
            Explore Our Latest Products and Offers
          </span>
        </div>
      </div>

      {/* Profile, Order History, Security, and Billing Blocks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 mb-10 mt-16">
        {/* Profile Section */}
        <div className="bg-white p-8 shadow-xl rounded-2xl">
          <h2 className="text-2xl text-black font-bold text-center mb-6">
            Profile
          </h2>
          <div className="text-lg text-gray-700">
            <div>
              <strong className="font-semibold text-gray-900">Name:</strong>{" "}
              {user?.name}
            </div>
            <div>
              <strong className="font-semibold text-gray-900">Email:</strong>{" "}
              {user?.email}
            </div>
            <div>
              <strong className="font-semibold text-gray-900">Phone:</strong>{" "}
              {user?.phoneNumber || "Not Provided"}
            </div>
          </div>
        </div>

        {/* Order History Section */}
        <div className="bg-white p-8 shadow-xl rounded-2xl">
          <h2 className="text-2xl text-black font-bold text-center mb-6">
            Order History
          </h2>
          <div className="text-lg text-gray-700">
            <div className="mb-4">
              <div className="font-semibold">Order #12345</div>
              <div className="text-gray-500">Status: Shipped</div>
              <div className="text-gray-500">Total: $350</div>
            </div>
            <div className="mb-4">
              <div className="font-semibold">Order #12346</div>
              <div className="text-gray-500">Status: Delivered</div>
              <div className="text-gray-500">Total: $199</div>
            </div>
          </div>
        </div>

        {/* Login & Security Section */}
        <div className="bg-white p-8 shadow-xl rounded-2xl">
          <h2 className="text-2xl text-black font-bold text-center mb-6">
            Login & Security
          </h2>
          <div className="text-lg text-gray-700">
            <div>
              <strong className="font-semibold text-gray-900">
                Change Password:
              </strong>
              <button className="text-blue-600 hover:underline">
                Change Password
              </button>
            </div>
          </div>
        </div>

        {/* Billing Address Section */}
        <div className="bg-white p-8 shadow-xl rounded-2xl">
          <h2 className="text-2xl text-balck font-bold text-center mb-6">
            Address
          </h2>
          <div className="text-lg text-gray-700">
            <div>
              <strong className="font-semibold text-gray-900">Address:</strong>{" "}
              {user?.address || "Not Provided"}
            </div>
          </div>
        </div>
      </div>

      {/* Products & Offers Section */}
      <div className="bg-white p-8 shadow-xl rounded-2xl w-full max-w-5xl mb-10">
        <h2 className="text-2xl text-yellow-600 font-bold text-center mb-6">
          Our Exclusive Offers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden relative group transition-all duration-300 ease-in-out"
              >
                {/* Product Image */}
                <div className="relative w-full h-60">
                  <Image
                    src={product.productImage?.asset?.url}
                    alt={product.title}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                  {/* Status Circle */}
                  <div
                    className={`absolute top-4 right-4 w-8 text-[12px] h-8 flex items-center justify-center rounded-full text-white ${
                      product.isNew
                        ? "bg-green-500"
                        : product.dicountPercentage
                          ? "bg-red-500"
                          : "bg-yellow-500"
                    }`}
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
                    lines={20}
                  />
                  <p className="text-xl font-semibold text-gray-800 mb-4">
                    ${product.price}
                  </p>
                </div>

                {/* Hover opacity for the entire product card */}
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col items-center justify-center">
                  {/* Add to Cart Button */}
                  <button className="py-2 px-4 bg-white text-yellow-600 rounded-lg hover:underline transition-colors mb-4">
                    <Link href={`/products/${product._id}`}>Add to Cart</Link>
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

        {/* Explore More Button */}
        <div className="text-center mt-14">
          <Link
            href="/products"
            className="bg-yellow-700 text-white font-bold px-6 py-3 rounded-xl hover:bg-yellow-600 transition duration-300"
          >
            Explore More Products
          </Link>
        </div>
      </div>

      {/* Logout Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleLogout}
          className="bg-yellow-700 text-white font-bold px-6 py-3 rounded-xl hover:bg-yellow-600 transition duration-300"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
