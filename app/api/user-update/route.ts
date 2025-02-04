import { connectMongoDB } from "@/lib/mongodb";
import User from "@/app/model/schema";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function PUT(req: Request) {
  try {
    const { id, name, email, password, phoneNumber, address } = await req.json();
    await connectMongoDB();

    // Find the user by ID
    const user = await User.findById(id);
    if (!user) {
      return NextResponse.json(
        { message: "User not found." },
        { status: 404 }
      );
    }

    // Update user fields if they are provided
    if (name) user.name = name;
    if (email) user.email = email;
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (address) user.address = address;

    // Save the updated user
    await user.save();

    return NextResponse.json({ message: "User updated." }, { status: 200 });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { message: "An error occurred while updating the user." },
      { status: 500 }
    );
  }
}