"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FiHome, FiImage } from "react-icons/fi";
import { FaRegUser, FaSearch } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import Link from "next/link";
import { RiMessageLine } from "react-icons/ri";

import { BsCalendar2Event } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import { Logo } from ".";

const Sidebar = () => {
  const pathname = usePathname();

  const translations = [
    "type anything", // English
    "écrivez quelque chose", // French
    "escribe algo", // Spanish
    "schreib etwas", // German
    "输入任何内容", // Chinese
    "что-нибудь напечатать", // Russian
    "escreva qualquer coisa", // Portuguese
  ];

  const [searchPlaceholder, setSearchPlaceholder] = useState("search...");
  const [languageIndex, setLanguageIndex] = useState(0);

  // Array of menu items
  const menuItems = [
    {
      path: "/dashboard",
      icon: <FiHome fontSize={20} fontWeight={10} />,
      label: "Home",
    },
    {
      path: "/dashboard/gallery",
      icon: <FiImage fontSize={20} fontWeight={10} />,
      label: "Gallery",
    },
    {
      path: "/dashboard/messages",
      icon: <RiMessageLine  fontSize={20} fontWeight={1} />,
      label: "Messages",
    },
    { path: "/dashboard/events", icon: <BsCalendar2Event />, label: "Events" },
    {
      path: "/dashboard/profile",
      icon: <FaRegUser fontSize={20} fontWeight={10} />,
      label: "Profile",
    },
  ];

  const isActive = (path) =>
    pathname === path
      ? "bg-gray-900 text-white rounded-lg border-l md:border-none"
      : "";
  const isActiveMobile = (path) =>
    pathname === path
      ? " p-2 text-white text-bold rounded-lg border rounded rounded-full"
      : "";

  const handleLogout = () => {
    if (confirm("Are you sure?")) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("userEmail");
    }
  };

  return (
    <>
      <div className="md:flex flex-col max-w-50 w-full h-full   gap-4 hidden border-r border-gray-500">
        <div className="font-thin  text-sm flex flex-col justify-center items-center  mt-3 ">
          <Logo />
          <p>Dubai</p>
        </div>
        <div className="relative">
          <FaSearch className="translate-y-5" />
          <input
            placeholder={searchPlaceholder}
            type="text"
            className="w-full text-white bg-transparent outline-none font-thin border-b italic border-gray-500 pl-5 "
          />
        </div>
        <div className="flex flex-col h-full w-full px-1 gap-4 justify-between pt-5 ">
          <div className="flex flex-col w-full gap-3">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={`w-full flex items-center p-2 gap-3 text-sm ${isActive(
                  item.path
                )}`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => {
              handleLogout();
              window.location.href = "/login"; // Redirect to login page
            }}
            className="bg-white text-black py-2 rounded text-left px-2 font-bold"
          >
            <span className="flex justify-center items-center gap-2">
              Logout <TbLogout fontSize={20} />
            </span>
          </button>
        </div>
        <div className="border-t border-gray-500 grid grid-cols-3 text-center pt-2">
          <Link href={"#"} className="text-sm text-gray-300">
            Help
          </Link>
          <Link href={"#"} className="text-sm text-gray-300">
            Press
          </Link>
          <Link href={"#"} className="text-sm text-gray-300">
            Careers
          </Link>
          <Link href={"#"} className="text-sm text-gray-300">
            About
          </Link>
          <Link href={"#"} className="text-sm text-gray-300">
            Whitepaper
          </Link>
          <Link href={"#"} className="text-sm text-gray-300">
            Terms
          </Link>
        </div>
        <div className="text-center text-gray-300 font-thin text-sm px-2">
          All rights reserved UNICORD® 2024
        </div>
      </div>

      {/* Bottom Bar for Mobile */}
      <div className="md:hidden fixed bottom-5 z-50 left-0 right-0 backdrop-blur-xl mx-3  py-2 flex justify-around items-center shadow-lg border border-gray-600 rounded-full">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`flex flex-col items-center ${isActiveMobile(
              item.path
            )}`}
          >
            {item.icon}
            {/* <span className="text-xs">{item.label}</span> */}
          </Link>
        ))}
        <button
          onClick={() => {
            handleLogout();
            window.location.href = "/login"; // Redirect to login page
          }}
          className="flex flex-col items-center text-xs"
        >
          <TbLogout size={20} />
          {/* <span>Logout</span> */}
        </button>
      </div>
    </>
  );
};

Sidebar.displayName = "Sidebar";
export default Sidebar;
