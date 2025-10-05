"use client";

import { motion } from "framer-motion";

const techStack = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
  "Node.js", "Express", "MongoDB", "PostgreSQL", "Tailwind CSS",
  "Prisma", "Redux Toolkit", "AWS", "Docker"
];

export default function About() {
  return (
    <section className="min-h-screen bg-black text-white px-10 py-20 flex flex-col items-center">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        About Me
      </motion.h2>

      {/* Short Bio */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-2xl text-center text-gray-400 text-lg mb-10 leading-relaxed"
      >
        I’m a passionate Full Stack Engineer from Uttarkhand who loves
        building modern, scalable, and aesthetic web applications.
        I focus on writing clean, optimized code and crafting smooth user experiences.
      </motion.p>

      {/* Tech Stack Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex flex-wrap justify-center gap-3 mt-6"
      >
        {techStack.map((tech, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-gray-900 rounded-lg border border-gray-700 text-sm hover:bg-gray-800 transition"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
