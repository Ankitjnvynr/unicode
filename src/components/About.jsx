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
      <div className="flex flex-col md:flex-row md:gap-10 items-center justify-center">
        {/* Profile Image and Sidebar Details */}
        <div className="flex flex-col items-center space-y-4 md:pr-8  justify-center   p-2 md:w-1/4 py-5">
          <Image
            src="/images/profile.jpg" // Replace with actual path to the profile image
            alt="Profile"
            width={200}
            height={200}
            className="rounded-full object-cover border md:h-[200px] w-[150px] md:w-[200px] w-[150px]"
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
        <div className="flex-1 md:pl-8 space-y-6 relative z-10">

          <div className="md:space-y-2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold md:pb-4">Pankaj </h1>

            <div className="flex flex-col items-center md:items-start md:flex-row md:justify-start gap-2 space-x-0 md:space-x-4 pb-6">
              <p className="text-gray-400 text-center md:text-left md:text-2xl">Full Stack Developer</p>
              <button className="bg-white transition-all m-auto md:m-0 border duration-700 hover:text-white hover:bg-gray-700 text-black px-4 py-2 rounded-full flex items-center space-x-2">
                <FiUserPlus />
                <span>Follow</span>
              </button>
            </div>


          </div>

          {/* Social Links */}
          <div className="flex space-x-1 md:space-x-4">
            <button className="bg-gray-800 hover:bg-gray-700 px-4 py-1 md:py-2 rounded-full flex items-center md:space-x-2">
              <FiGithub />
              <span>GitHub</span>
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 px-4 py-1 md:py-2 rounded-full flex items-center space-x-2">
              <FiLinkedin />
              <span>LinkedIn</span>
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 px-4 py-1 md:py-2 rounded-full flex items-center space-x-2">
              <FiMail />
              <span>Email</span>
            </button>
          </div>

          {/* Profile Description */}
          <p className="text-gray-400   pt-10 ">
            Selene is a Jakarta-based design engineer with a passion for transforming complex challenges into simple, elegant design solutions. Her work spans digital interfaces, interactive experiences, and the convergence of design and technology.
          </p>
         
        </div>
      </div>


    </div>
  );
}
