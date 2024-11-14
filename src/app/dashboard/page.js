"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [loading, setLoading] = useState(true); // Loading state
  const router = useRouter();

  // useEffect(() => {
  //   const token = localStorage.getItem("authToken");
  //   const email = localStorage.getItem("userEmail");

  //   if (token && email) {
  //     setLoading(false); // Stop loading if user is authenticated
  //   } else {
  //     router.replace("/login"); // Use replace for faster redirect
  //     setLoading(false); // Hide loading screen immediately
  //   }
  // }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>Page</div>;
}
