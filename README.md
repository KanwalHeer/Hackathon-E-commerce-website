
---

# E-Commerce Furniture Store

This is an e-commerce platform built using **Next.js**, **TypeScript**, and **Sanity CMS** for managing the backend. The platform offers users the ability to browse, purchase, and manage furniture items with various features like templates for saving products, order tracking, and an intuitive user interface.

## Project Overview

The furniture store platform provides users with a seamless online shopping experience. Customers can view products, add them to their cart, and proceed to checkout with a smooth and efficient process. The system integrates **Stripe** for payment processing and **ShipEngine** for shipment management.

### Key Features:
- **User Interface**: The website has a clean, modern, and responsive UI for a smooth user experience.
- **Product Search**: Users can easily search for furniture products using a search bar.
- **Add to Cart**: Users can add products to their cart and view the quantity directly through the cart icon.
- **Templates**: Users can save their favorite products in customizable templates for future reference.
- **Promotions**: Any active offers or discounts will be displayed on the homepage banner.
- **Product Details**: Each product page displays detailed information about the product along with user reviews.
- **Product Comparison**: A dedicated page allows users to compare products side by side.
- **Checkout Process**: 
  - Users must fill out a shipment form with their details for order delivery.
  - After placing an order, users will receive delivery timing information.
- **FAQs**: A Frequently Asked Questions page to help customers with common inquiries.
- **Contact Form**: A contact form for users to easily get in touch with the company.
- **About Page**: Contains detailed information about the company and its owners.

## Tech Stack

- **Frontend**: Next.js, TypeScript , Redux , Tailwind css
- **Backend**: Sanity CMS
- **Payment**: Stripe API
- **Shipment**: ShipEngine API

## Features Breakdown

### Home Page
- **Banner for Offers**: Active offers and discounts are shown as a banner on the homepage.
- **Product Search**: A functional search bar allows users to find products by name or category.
- **Cart Icon**: Users can easily see the quantity of items they have added to their cart through a cart icon.

### Product Pages
- **Detailed Product Information**: Every product has a dedicated page displaying detailed specifications, features, and available variations.
- **User Reviews**: Customers can read reviews left by other users about a product.
- **Compare Products**: A comparison page is available where users can compare multiple products based on features, prices, and reviews.

### Checkout
- **Shipment Form**: At checkout, users will be asked to provide their shipping details to complete the order.
- **Order Confirmation**: Once the user has completed the payment, the order is placed, and delivery details along with the estimated delivery time are provided.

### Additional Pages
- **FAQs Page**: A dedicated page with answers to frequently asked questions.
- **Contact Form**: A form allowing users to reach out directly to the company for support.
- **About Page**: Information about the company, its mission, and the team behind it.

## Roadmap

- **User Authentication**: Future work will include more robust user authentication features.
- **Invoice System**: Will be integrated to handle invoices and future payments.
- **Order Tracking**: Adding functionality for users to track their orders via ShipEngine.

## Folder Structure

Here is the general structure of the project:

```bash
.
├── components/         # Reusable UI components
├── pages/              # Pages for routing (e.g., /checkout, /product)
├── public/             # Public assets (e.g., images)
├── sanity/             # Sanity CMS configurations and schemas
├── styles/             # Global styles
├── utils/              # Utility functions and helpers
└── .env.local          # Environment variables (for API keys)
```

## Acknowledgments

- **Next.js**: A React framework for building server-side rendered applications.
- **Sanity CMS**: A flexible, headless CMS used for managing product data.
- **Stripe**: A secure payment gateway for processing online payments.
- **ShipEngine**: A shipping API for handling delivery services.

---

