"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col min-h-[10vh] px-6 pt-12 sm:pt-24 pb-4 sm:pb-6 bg-black text-white font-mono transition-all">
      <div className="mx-auto w-full max-w-4xl space-y-8">
        {/* Top Section: Greeting and Profile Image */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-10 items-center">
          
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col flex-1 space-y-4 text-center sm:text-left"
          >
            <div className="flex justify-center sm:justify-start items-center gap-2">
              <span className="text-3xl sm:text-5xl xl:text-6xl font-bold tracking-tighter">
                Hi, I'm Om
              </span>
              <span className="text-3xl sm:text-6xl">👋</span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-gray-300">
              <span className="inline-block text-base sm:text-lg font-semibold tracking-tight">
                Uttarkashi, Uttarakhand | Full Stack Engineer
              </span>
            </div>

            <div className="text-sm sm:text-lg text-gray-400">
              I'm a passionate Full Stack Engineer from Uttarkhand who loves
        building modern, scalable, and aesthetic web applications.I focus on writing clean, optimized code and crafting smooth user experiences.
            </div>

            
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
            transition={{ x: { duration: 1 }, y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
            className="mt-6 sm:mt-0 rounded-xl overflow-hidden shadow-lg w-48 h-48 sm:w-56 sm:h-56"
          >
            <Image
              src="/om.png"
              alt="Om  | Software Engineer"
              width={200}
              height={200}
              className="rounded-xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
