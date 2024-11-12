import { Sidebar, SpotlightBackground } from '@/components';
import React from 'react';

export default function DashLayout({ children }) {
  return (
    <>
      {/* Ensure SpotlightBackground renders properly */}
      <SpotlightBackground />
      <div className="relative h-screen overflow-hidden bg-black text-white">
        
        {/* Main Layout */}
        <div className="flex h-full p-2 gap-2">
          <div className="min-w-[220px]">
            <Sidebar />
          </div>
          <div className="flex-1 p-2 overflow-auto">
            {children}
          </div>
          {/* Optional profile div */}
          {/* <div className="border"> profile</div> */}
        </div>
      </div>
    </>
  );
}
