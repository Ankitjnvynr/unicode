"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Logo } from "@/components";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const allowedDomains = [
    "gmail.com",
    "hyd.bits-pilani.ac.in",
    "dubai.bits-pilani.ac.in",
    "goa.bits-pilani.ac.in",
    "bits-pilani.ac.in",
  ];

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      router.push("/dashboard");
    } else {
      setLoading(false);
    }
  }, [router]);

  const checkDomain = (e) => {
    if (!e) {
      setError("");
      setEmail(e);
      return;
    }
    const emailDomain = e.split("@")[1];
    if (!allowedDomains.includes(emailDomain)) {
      setError("Invalid Domain Name");
      setEmail(e);
    } else {
      setError("");
      setEmail(e);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const emailDomain = email.split("@")[1];

    if (!allowedDomains.includes(emailDomain)) {
      toast.error("Email domain not allowed.");
      return;
    }

    const validEmails = [
      "abc@gmail.com",
      "abcd@bits-pilani.ac.in",
      "abcd@goa.bits-pilani.ac.in",
      "abcd@dubai.bits-pilani.ac.in",
      "abcd@hyd.bits-pilani.ac.in",
    ];

    if (validEmails.includes(email) && password === "1234") {
      toast.success("Successfully logged in!");

      localStorage.setItem("authToken", "mockToken123");
      localStorage.setItem("userEmail", email);

      router.push("/dashboard");
    } else {
      toast.error("Invalid email or password");
    }
  };

  if (loading) return null;

  return (
    <div className="flex flex-col justify-between min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 text-sm border-b border-gray-800">
        <div className="text-lg font-bold">{<Logo/>}</div>
        <div className="flex items-center space-x-6">
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
              className="px-0 pl-16 py-2 bg-transparent border-b border-white text-white italic outline-none placeholder-gray-0 focus:ring-0 focus:ring-gray-0"
            />
          
          </div>
          <a href="#" className="text-gray-400 hover:underline">
            For Enterprise
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow px-4">
        {/* Title */}
        <h1 className="text-3xl text-center mb-8 font-light border-b w-full pb-9 border-gray-800">
          “The safest <span className="font-bold italic">social network</span>{" "}
          in the universe”
        </h1>
        

        {/* Login Card */}
        <div className="p-6 py-11 bg-opacity-10 bg-gray-400 backdrop-blur-md rounded-3xl shadow-2xl  border-gray-600 w-full max-w-sm">
          <h3 className="text-xl font-bold mb-6 text-center">UNICORD®</h3>

          <form
            onSubmit={handleLogin}
            className="w-full space-y-4  text-center"
          >
            <input
              type="email"
              placeholder="Username"
              value={email}
              onChange={(e) => checkDomain(e.target.value)}
              className="w-full px-4 py-2 bg-opacity-10 bg-gray-400 text-white rounded-full outline-none   focus:ring-0 focus:ring-gray-500 shadow-md"
              required
            />
            {error && (
              <p className="text-yellow-500 text-xs mt-1">{error}</p>
            )}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-opacity-10 bg-gray-400 text-white rounded-full outline-none   focus:ring-0 focus:ring-gray-500 shadow-md"
              required
            />
            <div className="text-right">
              <a href="#" className="text-xs text-gray-400 hover:underline">
                forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-1/2 m-auto  px-4 py-2 bg-opacity-10 bg-gray-400 text-white rounded-full outline-none   focus:ring-0 focus:ring-gray-500 shadow-md"
            >
              Login
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 py-4 border-t border-gray-800">
        All Rights Reserved ©UNICORD® 2024
      </footer>
    </div>
  );
};

export default Login;
