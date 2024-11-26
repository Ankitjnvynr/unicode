"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { RightDashboard, StoryList } from "@/components";

export default function Page() {
  const [loading, setLoading] = useState(false); // Loading state
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

  return (
    <div className=" h-full flex">
      <div className=" flex-1">
        <div className="p-2 py-3 h-50 bg-[#1B1B1B] ">
          <StoryList />
        </div>
        <div>hello</div>
      </div>
      <div className=" h-full  bg-[#1B1B1B]  ">
        <RightDashboard />
      </div>
    </div>
  );
}
