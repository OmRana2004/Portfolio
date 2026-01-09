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
    description:
      "Trekify is a full-featured, full-stack trekking and adventure tour web application inspired by professional sites like Himalayan Hikers.",
    video: "/Trekify.mp4",
    liveUrl: "https://trekify-official.vercel.app/",
    codeUrl: "https://github.com/OmRana2004/Trekify",
    tech: ["React", "Tailwind CSS", "TypeScript",  "MongoDb"],
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
          <h2 className="text-3xl md:text-4xl font-bold">Proof of Work</h2>
          <p className="text-sm md:text-base text-zinc-300 max-w-3xl">
            A collection of my work spanning from blockchain applications to
            full-stack projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              className="group h-full"
            >
              <Card className="relative border border-zinc-800 bg-zinc-900/60 backdrop-blur-md rounded-xl overflow-hidden hover:shadow-[0_0_20px_rgba(255,255,255,0.06)] hover:border-zinc-600 transition-all duration-300 h-[340px] flex flex-col">
                {/* VIDEO: fixed height area (won't push content) */}
                <div className="w-full h-32 sm:h-36 md:h-40 overflow-hidden bg-zinc-800 flex-shrink-0">
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* MAIN CONTENT: flex-1 with min-h-0 prevents overflow in flex containers */}
                <CardContent className="p-4 flex-1 flex flex-col justify-between min-h-0">
                  <div className="min-h-0">
                    <h3 className="text-base font-semibold leading-snug">
                      {project.title}
                    </h3>

                    {/* DESCRIPTION: clamp to 3 lines using webkit clamp fallback */}
                    <p
                      className="text-sm text-zinc-300 mt-2 leading-5"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {project.description}
                    </p>

                    {/* TECH CHIPS: wrap and prevent expansion */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] border border-zinc-700 bg-zinc-950 px-2 py-1 rounded-md text-zinc-200 whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* BUTTONS: pinned to bottom, small, won't overflow */}
                  <div className="flex gap-2 mt-3">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="inline-flex items-center gap-1 bg-white text-black text-xs px-2 py-1 rounded-md hover:bg-blue-200 transition"
                        aria-label={`Open ${project.title} live`}
                      >
                        <Globe className="w-3 h-3" /> Live
                      </Link>
                    )}
                    {project.codeUrl && (
                      <Link
                        href={project.codeUrl}
                        target="_blank"
                        className="inline-flex items-center gap-1 bg-white text-black text-xs px-2 py-1 rounded-md hover:bg-blue-200 transition"
                        aria-label={`Open ${project.title} code`}
                      >
                        <Github className="w-3 h-3" /> Code
                      </Link>
                    )}
                  </div>
                </CardContent>

                {/* Subtle hover gradient */}
                <div
                  className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-60 transition duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(300px circle at -100px -100px, rgba(158,122,255,0.06), rgba(254,139,187,0.04), transparent 70%)",
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
