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

    const isActive = (path) => pathname === path ? 'bg-gray-900 text-white rounded-lg border-l' : '';

    const handleLogout = () => {
        if (confirm('Are you sure?')) {
            localStorage.removeItem("authToken");
            localStorage.removeItem("userEmail");
        }
    };

    return (
        <div className="flex flex-col max-w-50 w-full h-full px-4 py-4 gap-4 rounded-lg">
            <div className='font-extrabold mb-8 text-2xl'>UNICORD</div>
            <div className="flex flex-col h-full w-full px-1 gap-4 justify-between">
                <div className="flex flex-col w-full gap-9">
                    <Link href="/dashboard" className={`w-full flex items-center p-2 gap-3 text-sm ${isActive('/dashboard')}`}>
                        <FiHome />
                        Home
                    </Link>
                    <Link href="/dashboard/gallery" className={`w-full flex items-center p-2 gap-3 text-sm ${isActive('/dashboard/gallery')}`}>
                        <FiImage />
                        Gallery
                    </Link>
                    <Link href="/dashboard/profile" className={`w-full flex items-center p-2 gap-3 text-sm ${isActive('/dashboard/profile')}`}>
                        <FaRegUser />
                        Profile
                    </Link>
                    <Link href="/dashboard/messages" className={`w-full flex items-center p-2 gap-3 text-sm ${isActive('/dashboard/messages')}`}>
                        <CiChat1 />
                        Messages
                    </Link>
                    <Link href="/dashboard/events" className={`w-full flex items-center p-2 gap-3 text-sm ${isActive('/dashboard/events')}`}>
                        <BsCalendar2Event />
                        Events
                    </Link>
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
    );
};

Sidebar.displayName = 'Sidebar';
export default Sidebar;
