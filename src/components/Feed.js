import React from "react";
import { Header, Logo } from "@/components";


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

    <Header/>

      {/* Main Content */}
      <div className="flex-grow flex flex-col justify-center items-center relative z-10 px-4 sm:px-6 md:px-8">
        <div className="w-full h-[88vh] max-w-[1300px] flex flex-col justify-between">
          <div>
            <div
              style={{
                fontWeight: 100,
              }}
              className="text-3xl sm:text-4xl md:text-5xl font-thin inter pt-16 text-gray-300 text-center md:text-left"
            >
              Redefining <span className="text-white font-bold">Education</span>
            </div>
            <div>
              <p className="text-gray-500 italic text-center md:text-left mt-2">
                the social network for universities
              </p>
            </div>
          </div>

          <div></div>
          <div className="text-center flex flex-col items-center">
            <Logo />
            <p className="text-sm font-light mb-6 text-gray-500 text-center">
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
