// schemas/product.ts
import { SchemaTypeDefinition } from 'sanity';
export const orders: SchemaTypeDefinition = {
  name: 'orders',
  title: 'Orders',
  type: 'document',
  fields: [
    {
      name: 'productImage',
      title: 'Product Image',
      type: 'image', 
      options: {
        hotspot: true,
      },
    },
    {
      name: 'productPrice',
      title: 'Product Price',
      type: 'number', 
    },
    {
      name: 'productId',
      title: 'Product Id',
      type: 'string', 
    },
    {
      name: 'productTitle',
      title: 'Product Title',
      type: 'string',
    },
    {
        name:"dicountPercentage",
        type:"number",
        title:"Discount Percentage",
    },
    {
      name: 'userId',
      title: 'User ID',
      type: 'string', 
    },
    {
      name: 'userEmail',
      title: 'User Email',
      type: 'string', 
    },
    {
      name: 'userName',
      title: 'User Name',
      type: 'string', 
    },
    {
      name: 'userAddress',
      title: 'User Address',
      type: 'text', 
    },
    {
      name: 'userPhoneNumber',
      title: 'User Phone Number',
      type: 'string', 
    },
  ],
};

