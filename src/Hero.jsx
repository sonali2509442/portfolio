import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (

    <section className="min-h-screen px-6 md:px-12 pt-32 pb-20 flex flex-col justify-between">

      <div className="flex flex-col md:flex-row justify-between gap-10">

        <div className="max-w-4xl">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm md:text-base mb-6"
          >
            HELLO, I'M
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[18vw] md:text-[12vw] leading-[0.8] tracking-[-0.08em] font-medium"
          >
            SONALI
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[18vw] md:text-[12vw] leading-[0.8] tracking-[-0.08em] font-medium ml-[8vw]"
          >
            ROUT.
          </motion.h1>

        </div>


        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-xs md:mt-20"
        >

          <p className="text-base md:text-lg leading-relaxed">
            Frontend developer crafting interactive,
            thoughtful and user-focused digital
            experiences.
          </p>

          <p className="mt-6 text-sm opacity-60">
            Based in India
          </p>

        </motion.div>

      </div>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="flex justify-between items-end mt-20"
      >

        <p className="text-sm">
          SCROLL TO EXPLORE
        </p>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity
          }}
          className="text-2xl"
        >
          ↓
        </motion.div>

      </motion.div>

    </section>
  )
}

export default Hero