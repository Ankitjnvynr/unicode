
import React from 'react'

export const Enterprise = () => {
  return (
    <div className="flex flex-col  justify-center min-h-screen bg-black text-white px-8 ">
      <div className="">
        <h1 className="text-[2.5rem] md:text-[4rem] font-extrabold">
          Enterprise Grade Models
        </h1>
        <p className="text-[2rem] md:text-[3rem] mt-2 font-light">
          for <span className="italic">Education</span> and
        </p>
        <p className="text-[2rem] md:text-[3rem] italic font-light">
          Enterprises
        </p>
      </div>
      <div className="mt-10 text-center mx-auto">
        <button  className="w-40 md:w-48  text-gray-800 rounded-full bg-white font-bold py-3 hover:bg-gray-400 transition-all hover:text-black">Login</button>
      </div>
    </div>
  )
}
