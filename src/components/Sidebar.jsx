"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FiHome, FiImage } from "react-icons/fi";
import { FaRegUser, FaSearch } from "react-icons/fa";
import { RiMessageLine } from "react-icons/ri";
import { BsCalendar2Event } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import { MdOutlineAutoGraph } from "react-icons/md";
import { WiDirectionRight } from "react-icons/wi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import Link from "next/link";
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

  const [searchPlaceholder, setSearchPlaceholder] = useState("");
  const [languageIndex, setLanguageIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    const typewriterInterval = setInterval(() => {
      const currentLanguage = translations[languageIndex];
      if (typingIndex < currentLanguage.length) {
        setSearchPlaceholder((prev) => prev + currentLanguage[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      } else {
        // Move to the next language after finishing the current one
        setTimeout(() => {
          setTypingIndex(0);
          setLanguageIndex((prev) => (prev + 1) % translations.length);
          setSearchPlaceholder("");
        }, 1000); // Pause for a moment before switching languages
      }
    }, 50); // Typing speed

    return () => clearInterval(typewriterInterval); // Cleanup interval
  }, [languageIndex, typingIndex]);

  // Sidebar menu items
  const menuItems = [
    { path: "/dashboard", icon: <FiHome fontSize={20} />, label: "Home" },
    { path: "/dashboard/gallery", icon: <MdOutlineExplore fontSize={20}  />, label: "Explore" },
    { path: "/dashboard/gallery", icon: <IoIosAddCircleOutline fontSize={20}  />, label: "Add" },
    { path: "/dashboard/events", icon: <BsCalendar2Event />, label: "Events" },
    { path: "/dashboard/events", icon:<MdOutlineAutoGraph />, label: "Stratups" },
    // { path: "/dashboard/gallery", icon: <WiDirectionRight  fontSize={20} />, label: "Direct" },
    // { path: "/dashboard/gallery", icon: <FiImage fontSize={20} />, label: "Gallery" },
    { path: "/dashboard/messages", icon: <RiMessageLine fontSize={20} />, label: "Direct" },
    { path: "/dashboard/profile", icon: <FaRegUser fontSize={20} />, label: "Profile" },
  ];

  const isActive = (path) =>
    pathname === path
      ? "bg-[#1b1b1b] text-white rounded-lg border-l md:border-none"
      : "";

  const isActiveMobile = (path) =>
    pathname === path
      ? " p-2 text-white text-bold"
      : "";

  const handleLogout = () => {
    if (confirm("Are you sure?")) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("userEmail");
      window.location.href = "/login";
    }
  };

  return (
    <>
      <div className="md:flex flex-col max-w-50 w-full h-full gap-4 hidden border-r border-gray-500">
        <div className="font-thin text-sm flex flex-col justify-center items-center mt-3">
          <Logo />
          <p>Dubai</p>
        </div>
        <div className="relative ml-2">
          <FaSearch className="translate-y-5" />
          <input
            placeholder={searchPlaceholder}
            type="text"
            className="w-[80%] text-white bg-transparent outline-none font-thin border-b italic border-gray-500 pl-5"
          />
        </div>
        <div className="flex flex-col h-full w-full px-1 gap-4 justify-between pt-5">
          <div className="flex flex-col w-full gap-3">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={`w-full flex items-center p-2 hover:bg-[#1b1b1b] hover:rounded-lg duration-500 gap-3 text-sm ${isActive(
                  item.path
                )}`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={handleLogout}
            className="bg-white text-black py-2 rounded text-left px-2 font-bold"
          >
            <span className="flex justify-center items-center gap-2">
              Logout <TbLogout fontSize={20} />
            </span>
          </button>
        </div>
        <div className="border-t border-gray-500 grid grid-cols-3 text-center pt-2 text-[13px]">
          <Link href="#" className="text-gray-500">Help</Link>
          <Link href="#" className="text-gray-500">Press</Link>
          <Link href="#" className="text-gray-500">Careers</Link>
          <Link href="#" className="text-gray-500">About</Link>
          <Link href="#" className="text-gray-500">Whitepaper</Link>
          <Link href="#" className="text-gray-500">Terms</Link>
        </div>
        <div className="text-center text-gray-500 font-thin text-[13px] px-2">
          All rights reserved <span className="text-white">UNICORD®</span> 2024
        </div>
      </div>

      {/* Bottom Bar for Mobile */}
      <div className="md:hidden fixed bottom-5 z-50 left-0 right-0 backdrop-blur-xl mx-3 py-2 flex justify-around items-center shadow-lg border border-gray-600 rounded-full">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`flex text-gray-500 flex-col items-center ${isActiveMobile(item.path)}`}
          >
            {item.icon}
          </Link>
        ))}
        <button
          onClick={handleLogout}
          className="flex flex-col items-center text-xs"
        >
          <TbLogout size={20} />
        </button>
      </div>
    </>
  );
};

Sidebar.displayName = "Sidebar";
export default Sidebar;
