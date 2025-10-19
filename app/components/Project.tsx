"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Trekify - Adventure Booking Website",
    description:
      "A modern trekking website built with React and Node.js featuring trek listings, booking system, and admin dashboard.",
    image: "/trekify.png",
    tech: ["React", "Tailwind", "Node.js", "Express", "TypeScript"],
    link: "#",
  },
  {
    title: "Token Launchpad (Solana)",
    description:
      "A Web3 token launch platform with wallet integration, token minting, and smooth UI built using React & Solana Web3.js.",
    image: "/launchpad.png",
    tech: ["React", "Solana", "Tailwind", "Web3.js"],
    link: "#",
  },
  {
    title: "Real-Time Location Tracker",
    description:
      "A live tracking app using Leaflet & Socket.IO that updates user locations in real-time on an interactive map.",
    image: "/tracker.png",
    tech: ["Express", "Socket.IO", "Leaflet", "EJS"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="project" className="bg-black text-white px-10 py-20 min-h-screen">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12"
      >
        Featured Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-green-500 transition-all"
          >
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 bg-gray-800 rounded-full border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 text-sm font-semibold"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
