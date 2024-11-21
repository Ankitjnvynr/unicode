import React from "react";
import { Logo } from "@/components";
import Link from "next/link";

const Feed = () => {
  return (
    <div
      className="w-screen overflow-x-hidden h-screen flex flex-col bg-black text-white bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('/images/2109.png'), radial-gradient(circle at top, rgba(0, 0, 0, 0.7), transparent 70%)",
      }}
    >
      {/* Bottom Shadow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>

      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-10 py-4 bg-black/70 relative z-10 border-b border-gray-500">
        {/* Logo */}
        <div className="text-lg font-bold">UNICORD®</div>

        {/* Links */}
        <ul className="flex space-x-6 text-sm font-medium">
          <li>
            <a href="#products" className="hover:underline">
              Products
            </a>
          </li>
          <li>
            <a href="#build" className="hover:underline">
              Build
            </a>
          </li>
          <li>
            <a href="#ai" className="hover:underline">
              AI
            </a>
          </li>
          <li>
            <a href="#company" className="hover:underline">
              Company
            </a>
          </li>
          <li>
            <a href="#uniprog" className="hover:underline">
              Uniprog
            </a>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="relative shadow-lg">
          <span className="absolute left-2 top-2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m1.9-5.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="type anything"
            className="pl-8 py-2 bg-transparent border-b border-white text-white italic outline-none placeholder-gray-500 focus:ring-0 focus:ring-gray-0"
          />
        </div>

        {/* Actions */}
        <div className="flex space-x-4">
          <Link className="hover:underline text-sm" href={'/login'}> Sign in </Link>
          
          <a href="#enterprise" className="hover:underline text-sm">
            For Enterprise
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex flex-col justify-center items-center relative z-10">
        <div className="w-full h-[88vh] max-w-[1300px] flex flex-col justify-between">
          <div>
            <div
              style={{
                fontWeight: 100,
              }}
              className="text-5xl font-thin inter pt-16 text-gray-300"
            >
              Redefining <span className="text-white font-bold">Education</span>
            </div>
            <div>
              <p className="text-gray-500 italic">
                the social network for universities
              </p>
            </div>
          </div>

          <div></div>
          <div className="text-center flex flex-col items-center">
            <Logo />
            <p className="text-sm font-light mb-6 text-gray-500">
              The Safest Universal Social Connection
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Feed;
