"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FiHome, FiUser, FiBriefcase, FiFileText, FiImage, FiGithub, FiLinkedin, FiMail, FiUserPlus } from 'react-icons/fi';

export default function Profile() {
  // const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // const handleMouseMove = (e) => {
  //   const { clientX, clientY, currentTarget } = e;
  //   const rect = currentTarget.getBoundingClientRect();
  //   setMousePos({
  //     x: clientX - rect.left,
  //     y: clientY - rect.top,
  //   });
  // };

  return (
    <div
      
    >
        
      {/* Main Profile Content */}
      <div className="flex  gap-10">
        {/* Profile Image and Sidebar Details */}
        <div className="flex flex-col items-center space-y-4 pr-8  p-2 w-1/4 py-5">
          <Image
            src="/images/profile.jpg" // Replace with actual path to the profile image
            alt="Profile"
            width={200}
            height={200}
            className="rounded-full object-cover border h-[200px] w-[200px]"
          />
          <div className="text-center">
            <span className="text-gray-400 block">Asia/India</span>
            <div className="flex justify-center space-x-2 mt-2">
              <button className="bg-gray-700 px-2 py-1 rounded-full text-xs">English</button>
              <button className="bg-gray-700 px-2 py-1 rounded-full text-xs">Bahasa</button>
            </div>
          </div>
        </div>

        {/* Profile Information Section */}
        <div className="flex-1 pl-8 space-y-6 relative z-10">
            
          <div className="space-y-2">
            <h1 className="text-6xl font-bold pb-4">Pankaj </h1>
            
            <div className="flex items-center space-x-4 pb-6">
              <p className="text-2xl text-gray-400 ">Full Stack Developer</p>
              <button className="bg-white transition-all duration-700 hover:text-white hover:bg-gray-700 text-black px-4 py-2 rounded-full flex items-center space-x-2">
                <FiUserPlus />
                <span>Follow</span>
              </button>
            </div>
           
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full flex items-center space-x-2">
              <FiGithub />
              <span>GitHub</span>
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full flex items-center space-x-2">
              <FiLinkedin />
              <span>LinkedIn</span>
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full flex items-center space-x-2">
              <FiMail />
              <span>Email</span>
            </button>
          </div>

          {/* Profile Description */}
          <p className="text-gray-400   pt-10 ">
            Selene is a Jakarta-based design engineer with a passion for transforming complex challenges into simple, elegant design solutions. Her work spans digital interfaces, interactive experiences, and the convergence of design and technology.
          </p>
          {/* Navigation Links - Moved Below Main Content */}
      <div className="flex justify-between items-center mt-8  ">
        <div className="flex space-x-4 border rounded-md py-1 px-4 border-gray-600">
          {/* <a href="#" className="flex items-center space-x-1 hover:text-gray-300">
            <FiHome />
            <span>Home</span>
          </a> */}
          <a href="#" className="flex items-center space-x-1 hover:text-gray-300">
            <FiUser />
            <span>About</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:text-gray-300">
            <FiBriefcase />
            <span>Work</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:text-gray-300">
            <FiFileText />
            <span>Blog</span>
          </a>
          <a href="#" className="flex items-center space-x-1 hover:text-gray-300">
            <FiImage />
            <span>Gallery</span>
          </a>
        </div>
      </div>
        </div>
      </div>

      
    </div>
  );
}
