
// import { client } from '@/sanity/lib/client';

import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
dotenv.config();
// import { client } from "@/sanity/lib/client";
const  client = createClient({
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset:process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2025-01-17',
  useCdn: true, 
  token:process.env.NEXT_PUBLIC_SANITY_TOKEN
})
  
// Define the type of the data you want to post
interface OrderData {
  productImage: any; 
  productPrice: number;
  productTitle: string;
  dicountPercentage: number;
  userId: string;
  userEmail: string;
  userName: string;
  userAddress: string;
  userPhoneNumber: string;
}

// Function to post the order data to Sanity
async function postOrderData(orderData: OrderData) {
  try {
    const response = await client.create({
      _type: 'orders',
      productImage: orderData.productImage,
      productPrice: orderData.productPrice,
      productTitle: orderData.productTitle,
      dicountPercentage: orderData.dicountPercentage,
      userId: orderData.userId,
      userEmail: orderData.userEmail,
      userName: orderData.userName,
      userAddress: orderData.userAddress,
      userPhoneNumber: orderData.userPhoneNumber,
    });
  
    console.log('Order created successfully:', response);
  } catch (error) {
    console.error('Error posting order data:', error);
  }
}

export { postOrderData };
