import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique:true
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true, 
      unique: true, 
    },
    address: {
      type: String,
      required: true, 
    },
    role: {
      type: String,
      enum:["admin","user"],
      required: true,
    },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;


