"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "../components/ui/card";
import { Globe, Github } from "lucide-react";

const projects = [
  {
    title: "Collabydraw",
    description: "Hand-drawn look & feel • Collaborative • Secure",
    video: "CollabyDraw.mp4",
    liveUrl: "https://collabydraw.xyz",
    codeUrl: "https://github.com/coderomm/CollabyDraw",
    tech: ["Next.js", "Native WebSocket", "Canvas", "RoughJs", "Perfect-freehand", "E2EE"],
  },
  {
    title: "Data Bolta Hai",
    description: "Built a website integrating GST API and GST Taxpayer Search API.",
    video: "/DBH.mp4",
    liveUrl: "https://databoltahai.in",
    codeUrl: "",
    tech: ["HTML", "CSS", "BS5", "JavaScript", "Ajax", ".NET MVC5", "EF", "MSSQL"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-10 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-bricolage-grotesque">
            Proof of Work
          </h2>
          <p className="text-sm md:text-lg text-zinc-400 font-inter max-w-3xl mx-auto">
            A collection of my work spanning from blockchain applications to full-stack projects, both personal and professional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative group"
            >
              <Card className="border border-zinc-700 rounded-[12px] overflow-hidden bg-zinc-900 transition-all duration-300 hover:shadow-xl hover:border-zinc-500">
                <CardContent className="relative p-0 flex flex-col h-full">
                  {/* Video Preview */}
                  <div className="relative">
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="h-48 w-full object-cover object-top"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col p-4 flex-1">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-sm text-zinc-400 mt-1">{project.description}</p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs border border-zinc-700 bg-zinc-800 px-2 py-1 rounded-md text-zinc-300 hover:bg-zinc-700 transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-2 mt-4">
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          className="flex items-center gap-2 bg-blue-600 text-white text-xs px-3 py-1.5 rounded-md hover:bg-blue-700 transition"
                        >
                          <Globe className="w-3.5 h-3.5" /> Live URL
                        </Link>
                      )}
                      {project.codeUrl && (
                        <Link
                          href={project.codeUrl}
                          target="_blank"
                          className="flex items-center gap-2 bg-zinc-700 text-white text-xs px-3 py-1.5 rounded-md hover:bg-zinc-600 transition"
                        >
                          <Github className="w-3.5 h-3.5" /> Codebase
                        </Link>
                      )}
                    </div>
                  </div>
                </CardContent>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(200px circle at -200px -200px, #9E7AFF, #FE8BBB, transparent 100%)",
                    opacity: 0.15,
                  }}
                ></div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
