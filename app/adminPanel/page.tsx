'use client';
import { useEffect, useState } from 'react';
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
// Define a TypeScript interface for a user
interface User {
    _id: string;
    name: string;
    email: string;
    password: string; // Be cautious with displaying passwords
    address: string;
    phoneNumber: string;
}

// Define the component function
export default function Users() {
const router = useRouter()
   const handleLogout = async () => {
      await signOut({ redirect: false });
      router.push('/auth/sign-in');
      if (typeof window !== "undefined") {
        localStorage.removeItem("chechoutRoute")
        }
    };
    // State to store users with type `User[]` (array of User)
    const [users, setUsers] = useState<User[]>([]);

    // Function to fetch users
    async function getAllUsers() {
        try {
            const res = await fetch('/api/users');
            const data = await res.json();
            console.log('Fetched data:', data);

            // Adjust according to the actual response format
            if (Array.isArray(data.users)) {
                setUsers(data.users);
            } else {
                console.error('Unexpected data format:', data);
            }
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }

    // Fetch users on component mount
    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <div className="p-6 min-h-screen bg-gray-100">
            <h1 className="text-4xl text-yellow-600 font-extrabold mb-6 text-center">Users List</h1>
            {users.length > 0 ? (
                <div className="overflow-x-auto shadow-md rounded-lg">
                    <table className="min-w-full bg-white table-auto">
                        <thead className="bg-yellow-700 text-white">
                            <tr>
                                <th className="py-2 px-4 text-left">Name</th>
                                <th className="py-2 px-4 text-left">Email</th>
                                <th className="py-2 px-4 text-left">Address</th>
                                <th className="py-2 px-4 text-left">Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user._id} className="border-t hover:bg-gray-50">
                                    <td className="py-2 px-4">{user.name}</td>
                                    <td className="py-2 px-4">{user.email}</td>
                                    <td className="py-2 px-4">{user.address}</td>
                                    <td className="py-2 px-4">{user.phoneNumber}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-yellow-900 text-center">Loading....</p>
            )}
        </div>
    );
}
