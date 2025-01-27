// hooks/useLoader.ts
import { useState, useEffect } from "react";

// Custom hook to handle loading state globally
const useLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after a timeout (or after data is ready)
    }, 1000); // Adjust this timeout to simulate page load

    return () => clearTimeout(timer); // Clean up the timer when the component is unmounted
  }, []);

  return loading;
};

export default useLoader;
