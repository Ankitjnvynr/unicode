'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { FiHome, FiImage } from "react-icons/fi";
import { MdDynamicFeed } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import Link from 'next/link';

const Sidebar = () => {
    const pathname = usePathname() ?? '';

    return (
        <div className="flex flex-col max-w-50 w-full h-full px-4 py-8 gap-4 border border-gray-600 rounded-lg">
            <div className="flex flex-col h-full w-full px-1 gap-4">
                <div className="flex flex-col w-full gap-1">
                    <p className="text-xs text-gray-400 mb-2 ml-4">Dashboard</p>
                    <button className={`w-full flex items-center p-2 gap-3 text-sm ${pathname === '' ? 'bg-gray-800' : ''}`}>
                    <FiHome />
                        Home
                    </button>
                    <button className={`w-full flex items-center p-2 gap-3 text-sm ${pathname === '' ? 'bg-gray-800' : ''}`}>
                    <MdDynamicFeed />
                        Feed
                    </button>
                    <Link href={'/dashboard/gallery'} className={`w-full flex items-center p-2 gap-3 text-sm ${pathname === '' ? 'bg-gray-800' : ''}`}>
                    <FiImage />
                        Gallery
                    </Link>
                    <Link href={'/dashboard/profile'} className={`w-full flex items-center p-2 gap-3 text-sm ${pathname === '' ? 'bg-gray-800' : ''}`}>
                    <FaRegUser />
                        Profile
                    </Link>
                    
                </div>

                <div className="w-full h-px bg-gray-700"></div>

                <div className="flex flex-col w-full gap-1">
                    <p className="text-xs text-gray-400 my-2 ml-4">Clubs</p>
                    <button className={`w-full flex items-center p-2 gap-3 text-sm ${pathname === 'users' ? 'bg-gray-800' : ''}`}>
                        <span className="w-4 h-px bg-gray-700"></span>
                        Users
                    </button>
                    
                </div>

                <div className="w-full h-px bg-gray-700"></div>

                <div className="flex flex-col w-full h-full gap-1">
                    <div className="flex justify-between items-center py-2 px-4">
                        <p className="text-xs text-gray-400">Events</p>
                        <button className="text-xs text-gray-400">➕</button>
                    </div>
                    <button className={`w-full flex items-center p-2 gap-3 text-sm ${pathname === 'overview' ? 'bg-gray-800' : ''}`}>
                        <span className="w-4 h-px bg-gray-700"></span>
                        Event 1
                    </button>
                    <button className={`w-full flex items-center p-2 gap-3 text-sm ${pathname === 'projects' ? 'bg-gray-800' : ''}`}>
                        <span className="w-4 h-px bg-gray-700"></span>
                        Event 2
                    </button>
                </div>
            </div>
        </div>
    );
};

Sidebar.displayName = 'Sidebar';
export default Sidebar;
