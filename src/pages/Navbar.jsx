import { AnimatePresence,motion } from 'framer-motion';
import React, { useState } from 'react'

const Navbar = () => {
    const [open, setOpen] = useState(false);

  return (

    <div className="fixed top-6 right-6 z-50">

     <div className="fixed top-6 left-90 flex flex-col items-center">

  <div className="w-16 h-16 rounded-full border overflow-hidden flex items-center justify-center">
    <img 
      src="/src/assets/logo.jpg" 
      alt="logo"
      className="w-full h-full object-cover"
    />
  </div>

  <p
    className="text-xs mt-2"
    style={{ fontFamily: "Pacifico, cursive" }}
  >
    Sonali Rout
  </p>


 

</div>

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 right-170 mr-120 rounded-full border flex items-center justify-center bg-white text-black text-xl"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Animated Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 mt-4 bg-white text-black p-6 rounded-xl shadow-xl w-56"
          >
            <ul className="space-y-4">
              
              <li
                onClick={() => {
                  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
                  setOpen(false);
                }}
                className="cursor-pointer hover:text-orange-500"
              >
                Home
              </li>

              <li
                onClick={() => {
                  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
                  setOpen(false);
                }}
                className="cursor-pointer hover:text-orange-500"
              >
                Projects
              </li>

              <li
                onClick={() => {
                  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
                  setOpen(false);
                }}
                className="cursor-pointer hover:text-orange-500"
              >
                About
              </li>

              <li
                onClick={() => {
                  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
                  setOpen(false);
                }}
                className="cursor-pointer hover:text-orange-500"
              >
                Contact
              </li>

            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default Navbar