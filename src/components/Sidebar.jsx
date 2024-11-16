'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { FiHome, FiImage } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import Link from 'next/link';
import { CiChat1 } from "react-icons/ci";
import { BsCalendar2Event } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";

const Sidebar = () => {
    const pathname = usePathname();

    // Array of menu items
    const menuItems = [
        { path: '/dashboard', icon: <FiHome fontSize={20} fontWeight={10} />, label: 'Home' },
        { path: '/dashboard/gallery', icon: <FiImage fontSize={20} fontWeight={10} />, label: 'Gallery' },
        { path: '/dashboard/messages', icon: <CiChat1 fontSize={25} fontWeight={30} />, label: 'Messages' },
        { path: '/dashboard/events', icon: <BsCalendar2Event />, label: 'Events' },
        { path: '/dashboard/profile', icon: <FaRegUser fontSize={20} fontWeight={10} />, label: 'Profile' },
    ];

    const isActive = (path) => pathname === path ? 'bg-gray-900 text-white rounded-lg border-l md:border-none' : '';
    const isActiveMobile = (path) => pathname === path ? ' p-2 text-white text-bold rounded-lg border rounded rounded-full' : '';

    const handleLogout = () => {
        if (confirm('Are you sure?')) {
            localStorage.removeItem("authToken");
            localStorage.removeItem("userEmail");
        }
    };

    return (

        <>


            <div className="md:flex flex-col max-w-50 w-full h-full px-4 py-4 gap-4 rounded-lg hidden">
                <div className='font-extrabold mb-8 text-2xl'>UNICORD</div>
                <div className="flex flex-col h-full w-full px-1 gap-4 justify-between">
                    <div className="flex flex-col w-full gap-9">
                        {menuItems.map((item, index) => (
                            <Link key={index} href={item.path} className={`w-full flex items-center p-2 gap-3 text-sm ${isActive(item.path)}`}>
                                {item.icon}
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <button
                        onClick={() => {
                            handleLogout();
                            window.location.href = '/login'; // Redirect to login page
                        }}
                        className="bg-white text-black py-2 rounded text-left px-2 font-bold">
                        <span className="flex justify-center items-center gap-2">
                            Logout <TbLogout fontSize={20} />
                        </span>
                    </button>
                </div>
            </div>

            {/* Bottom Bar for Mobile */}
            <div className="md:hidden fixed bottom-5 z-50 left-0 right-0 backdrop-blur-xl mx-3  py-2 flex justify-around items-center shadow-lg border border-gray-600 rounded-full">
                {menuItems.map((item, index) => (
                    <Link key={index} href={item.path} className={`flex flex-col items-center ${isActiveMobile(item.path)}`}>
                        {item.icon}
                        {/* <span className="text-xs">{item.label}</span> */}
                    </Link>
                ))}
                <button
                    onClick={() => {
                        handleLogout();
                        window.location.href = '/login'; // Redirect to login page
                    }}
                    className="flex flex-col items-center text-xs">
                    <TbLogout size={20} />
                    {/* <span>Logout</span> */}
                </button>
            </div>
        </>
    );
};

Sidebar.displayName = 'Sidebar';
export default Sidebar;
