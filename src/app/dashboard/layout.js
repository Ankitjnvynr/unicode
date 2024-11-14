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
      className="min-h-screen bg-gray-900 text-white relative overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(70, 130, 180, 0.08), rgba(0, 0, 0, 1))`,
        transition: "background 10s ease",
      }}
    >
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="relative min-h-screen overflow-hidden text-white">
          {/* Main Layout */}
          <div className="flex min-h-screen p-2 gap-2">
            <div className="min-w-[220px]">
              <Sidebar />
            </div>
            <div className="flex-1 p-2 overflow-auto pt-10">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
}
