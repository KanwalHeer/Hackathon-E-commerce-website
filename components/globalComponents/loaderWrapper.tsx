// components/LoaderWrapper.tsx
"use client"; // Ensure this component is rendered on the client side

import { ReactNode } from "react";
import useLoader from "@/app/hooks/useLoader";
import Loader from "../loader/loader";

interface LoaderWrapperProps {
  children: ReactNode;
}

const LoaderWrapper = ({ children }: LoaderWrapperProps) => {
  const loading = useLoader(); // Use the custom hook to manage loading state

  return loading ? <Loader /> : <>{children}</>; // Show the loader until loading is false
};

export default LoaderWrapper;
