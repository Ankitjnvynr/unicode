"use client";

import Link from "next/link";
import React from "react";
import { Logo } from "@/components";

export default function Header() {
  const navLinks = [
    { label: "Products", href: "#products" },
    { label: "Build", href: "#build" },
    { label: "AI", href: "#ai" },
    { label: "Company", href: "#company" },
    { label: "Uniprog", href: "#uniprog" },
  ];

  const actionLinks = [
    { label: "Sign in", href: "/login", isExternal: false },
    { label: "For Enterprise", href: "#enterprise", isExternal: true },
  ];

  return (
    <nav className="w-full flex flex-wrap items-center justify-between px-4 md:px-10 py-4 bg-black/70 relative z-10 border-b border-gray-500">
      {/* Logo */}
      <div className="text-lg font-bold">
        <Logo />
      </div>

      {/* Links */}
      <ul className="hidden md:flex space-x-6 text-sm font-medium">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:underline">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center">
        <button
          className="text-gray-500 focus:outline-none"
          aria-label="Toggle navigation"
        >
          {/* Mobile menu icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mt-4 md:mt-0">
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
          className="pl-8 py-2 bg-transparent border-b border-white text-white italic outline-none placeholder-gray-500 focus:ring-0 focus:ring-gray-0 w-full max-w-xs"
        />
      </div>

      {/* Actions */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
        {actionLinks.map((action, index) => (
          action.isExternal ? (
            <a
              key={index}
              href={action.href}
              className="hover:underline text-sm"
            >
              {action.label}
            </a>
          ) : (
            <Link key={index} href={action.href} className="hover:underline text-sm">
              {action.label}
            </Link>
          )
        ))}
      </div>
    </nav>
  );
}
