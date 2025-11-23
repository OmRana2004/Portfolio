"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { Globe, Github } from "lucide-react";

const projects = [
  {
    title: "Collabydraw",
    description: "Hand-drawn look & feel • Collaborative • Secure",
    video: "CollabyDraw.mp4",
    liveUrl: "https://omdraw.vercel.app/",
    codeUrl: "https://github.com/OmRana2004/OmDraw",
    tech: ["Next.js", "WebSocket", "Canvas", "Perfect-freehand", "E2EE"],
  },
  {
    title: "Trekify",
    description: "Trekify is a full-featured, full-stack trekking and adventure tour web application inspired by professional sites like Himalayan Hikers. Built with modern technologies like React, TypeScript, Node.js, and Express, it offers users a rich and dynamic experience for exploring, discovering, and booking treks. It also includes an admin dashboard.",
    video: "/DBH.mp4",
    liveUrl: "https://trekify-official.vercel.app/",
    codeUrl: "https://github.com/OmRana2004/Trekify",
    tech: ["React", "Tailwind CSS", "TypeScript", "Express", "MongoDb"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-10 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-3 mb-10 text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-bricolage-grotesque">
            Proof of Work
          </h2>
          <p className="text-sm md:text-base text-zinc-300 font-inter max-w-3xl">
            A collection of my work spanning from blockchain applications to full-stack projects, both personal and professional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <Card className="border border-zinc-800 bg-zinc-900/60 backdrop-blur-md rounded-xl overflow-hidden hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] hover:border-zinc-600 transition-all duration-300 h-full flex flex-col">
                <CardContent className="p-0 flex flex-col h-full">
                  {/* Video */}
                  <div className="relative">
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-44 w-full object-cover object-top"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between flex-1 p-4">
                    <div>
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <p className="text-sm text-zinc-300 mt-1">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="text-[10px] border border-zinc-700 bg-zinc-950 px-2 py-1 rounded-md text-zinc-200 hover:bg-zinc-800 transition"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-2 mt-4">
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          className="flex items-center gap-1.5 bg-white text-black text-xs px-2.5 py-1.5 rounded-md hover:bg-blue-200 transition"
                        >
                          <Globe className="w-3.5 h-3.5" /> Live
                        </Link>
                      )}
                      {project.codeUrl && (
                        <Link
                          href={project.codeUrl}
                          target="_blank"
                          className="flex items-center gap-1.5 bg-white text-black text-xs px-2.5 py-1.5 rounded-md hover:bg-blue-200 transition"
                        >
                          <Github className="w-3.5 h-3.5" /> Code
                        </Link>
                      )}
                    </div>
                  </div>
                </CardContent>

                {/* Subtle hover gradient */}
                <div
                  className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(300px circle at -100px -100px, #9E7AFF, #FE8BBB, transparent 70%)",
                    opacity: 0.12,
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
