"use client";
import { Sidebar, SpotlightBackground } from "@/components";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashLayout({ children }) {
  const router = useRouter();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(false); // Loading state



  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    setMousePos({
      x: clientX - rect.left,
      y: clientY - rect.top,
    });
  };

  return (
    <div
      className="min-h-screen bg-black  text-white relative overflow-hidden"
      
      
    >
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="relative min-h-screen overflow-hidden text-white">
          {/* Main Layout */}
          <div className="flex flex-col-reverse md:flex-row h-screen p-2 gap-2">
            <div className="min-w-[220px]  ">
              <Sidebar />
            </div>
            <div className="flex-1 p-1 pb-16 md:pb-2 md:p-2  overflow-auto pt-10  overflow-y-auto  h-[100%]  ">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
}
