"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const Signup = () => {
  const [step, setStep] = useState(1); // Track which step of the form we are on
  const [userType, setUserType] = useState(""); // Store user role
  const [email, setEmail] = useState(""); // Store user email
  const [otp, setOtp] = useState(""); // Store OTP
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // Track mouse position for background effect

  // Handle clicking the "Continue" button
  const handleContinue = () => {
    if (userType) {
      setStep(2); // Move to the next step if a role is selected
    } else {
      alert("Please select your role to continue.");
    }
  };

  // Handle form submission for the signup
  const handleSignup = (e) => {
    e.preventDefault();
    // Add signup logic here, such as OTP verification and account creation
  };

  // Update mouse position for dynamic background effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-black text-white"
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(70, 130, 180, 0.2), rgba(0, 0, 0, 1))`,
      }}
    >
      <div className="flex mx-2 flex-col items-center text-center p-8 max-w-sm w-full bg-opacity-20 bg-black backdrop-blur-md shadow-lg rounded-lg border border-gray-600 shadow-gray-800">
        <h3 className="text-4xl mb-6 font-bold">Sign up</h3>

        {step === 1 && (
          <div className="w-full">
            <p className="text-gray-400 mb-6">
              Please select your role to continue
            </p>
            <div className="space-y-3 flex flex-col items-center  align-center ">
              <div className="space-y-3">
                <label className="flex items-center ">
                  <input
                    type="radio"
                    name="userType"
                    value="student"
                    checked={userType === "student"}
                    onChange={(e) => setUserType(e.target.value)}
                    className="form-radio text-blue-500 "
                  />
                  <span className="ml-2">For Student</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="userType"
                    value="investor"
                    checked={userType === "investor"}
                    onChange={(e) => setUserType(e.target.value)}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2">Investor</span>
                </label>
                <label className="flex items-center ">
                  <input
                    type="radio"
                    name="userType"
                    value="alumni"
                    checked={userType === "alumni"}
                    onChange={(e) => setUserType(e.target.value)}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2">Alumni</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="userType"
                    value="professor"
                    checked={userType === "professor"}
                    onChange={(e) => setUserType(e.target.value)}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2">Professor</span>
                </label>
              </div>
            </div>
            <button
              type="button"
              className="w-full py-2 mt-6 flex justify-center items-center gap-3 border text-white rounded-md font-semibold transition duration-300 ease-in-out"
              onClick={handleContinue}
            >
              continue
              <FaLongArrowAltRight />
            </button>
          </div>
        )}

        {step === 2 && (
          <form
            onSubmit={handleSignup}
            className="w-full space-y-5 flex flex-col"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full py-2 bg-white text-black rounded-md font-semibold transition duration-300 ease-in-out hover:bg-gray-200"
            >
              Submit
            </button>
          </form>
        )}

        <p className="mt-4 text-sm text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-white hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
