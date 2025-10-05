"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 bg-black text-white">
      {/* Left Section - Text */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Hi, I'm <span className="text-green-400">Om 👋</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Uttarkashi, Uttarakhand |{" "}
          <span className="font-semibold">Full Stack Engineer</span>
        </p>
        <p className="mt-6 text-gray-400">
          I love building modern web applications and solving challenging problems.
          My passion lies in creating fast, user-focused digital experiences.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-green-500 text-black font-semibold rounded-lg shadow hover:bg-green-400 transition">
            View Projects
          </button>
          <button className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-700 transition">
            Contact Me
          </button>
        </div>
      </motion.div>

      {/* Right Section - Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="mt-10 md:mt-0 rounded-2xl overflow-hidden shadow-lg"
      >
        <Image
          src="/profile.jpg" // Apna image public folder me add karna
          alt="Om's Photo"
          width={250}
          height={250}
          className="rounded-2xl"
        />
      </motion.div>
    </section>
  );
}
