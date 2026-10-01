import React from 'react'
import { motion } from "framer-motion";


const Hero = () => {
  return (
     <div className="h-screen bg-[#f5f5f5]  flex flex-col justify-center px-70 md:px-24">

      {/* Top Line */}
      <div className="flex items-center gap-4 mb-4 ml-120">
        <h2 className="text-3xl">नमस्ते ,</h2>

        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm">
          • Open to opportunities
        </span>
      </div>

      {/* Big Name */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl ml-120 md:text-7xl font-bold leading-tight"
      >
        I’m <span className="font-black">Sonali Rout</span>
      </motion.h1>

      {/* Subtitle */}
      <p className="mt-6 ml-120 text-gray-600 text-lg max-w-2xl">
        I build modern web applications that are fast, responsive and visually engaging.
      </p>

      {/* Button */}
      <button
        onClick={() => window.location.href = "mailto:sonaliyourmail@gmail.com"}
        className="mt-8 ml-180 w-fit px-8 py-4 bg-orange-500 text-white rounded-2xl shadow-md hover:scale-105 transition"
      >
        Hire Me
      </button>

      {/* Small note */}
      <p className="mt-6 text-sm ml-200 text-gray-400">
        Replies? Guaranteed :)
      </p>

    </div>
  )
}

export default Hero