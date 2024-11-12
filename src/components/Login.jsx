// Login.js

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaGoogle, FaApple } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [validDomainStr, setValidDomainStr] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const allowedDomains = [
    "hyd.bits-pilani.ac.in",
    "dubai.bits-pilani.ac.in",
    "goa.bits-pilani.ac.in",
    "bits-pilani.ac.in",
  ];

  useEffect(() => {
    setValidDomainStr(allowedDomains.join(", "));
    const token = localStorage.getItem("authToken");
    if (token) {
      router.push("/");
    } else {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const checkDomain = (e) => {
    if (!e) {
      setError("");
      setEmail(e);
      return;
    }
    const emailDomain = e.split("@")[1];
    if (!allowedDomains.includes(emailDomain)) {
      setError("Invalid Domain name");
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
      "abcd@bits-pilani.ac.in",
      "abcd@goa.bits-pilani.ac.in",
      "abcd@dubai.bits-pilani.ac.in",
      "abcd@hyd.bits-pilani.ac.in",
    ];

    if (validEmails.includes(email) && password === "1234") {
      toast.success("Successfully logged in!");

      localStorage.setItem("authToken", "mockToken123");
      localStorage.setItem("userEmail", email);

      router.push("/");
    } else {
      toast.error("Invalid email or password");
    }
  };

  if (loading) return null;

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-black text-white"
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(70, 130, 180, 0.2), rgba(0, 0, 0, 1))`,
      }}
    >
      <div className="flex mx-2 flex-col items-center text-center p-8 max-w-sm w-full bg-opacity-20 bg-black backdrop-blur-md shadow-lg rounded-lg border border-gray-600 shadow-gray-800">
        {/* <img className="w-10 mb-4" src="/unicode.png" alt="logo" /> */}

        <div className="space-y-3 w-full">
          <button className="flex items-center justify-center w-full py-2 border border-gray-500 rounded-md hover:bg-gray-800">
            <FaGithub className="mr-2" /> Sign in with Github
          </button>
          {/* <button className="flex items-center justify-center w-full py-2 border border-gray-500 rounded-md hover:bg-gray-800">
            <FaGoogle className="mr-2" /> Sign in with Google
          </button> */}
          {/* <button className="flex items-center justify-center w-full py-2 border border-gray-500 rounded-md hover:bg-gray-800">
            <FaApple className="mr-2" /> Sign in with Apple
          </button> */}
        </div>

        <div className="flex items-center my-6 w-full">
          <hr className="flex-grow border-gray-600" />
          <span className="px-2 text-gray-400">OR</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        <form onSubmit={handleLogin} className="w-full space-y-3">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => checkDomain(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-md outline-none focus:ring-2 focus:ring--500"
            required
          />
          {error && <p className="text-yellow-500 text-xs text-left">{error}</p>}
          <span className="text-xs text-left text-gray-400">{validDomainStr}</span>

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-md outline-none focus:ring-2 focus:ring--500"
            required
          />
          <div className="w-full text-right">
            <a href="#" className="text-xs text-gray-400 hover:underline">
              Forgot your password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-white text-black rounded-md font-semibold transition duration-300 ease-in-out hover:bg-gray-200"
          >
            Sign in
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-400">
          Don’t have an account?{" "}
          <Link href="/login/register" className="text-white hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
