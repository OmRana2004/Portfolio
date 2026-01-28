"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { Globe, Github } from "lucide-react";

/* -------------------- PROJECT DATA -------------------- */
const projects = [
  {
    title: "OmPaY",
    description:
      "Production-ready fintech payment platform with secure cookie-based authentication, real-time balance updates, and transaction-safe money transfers.",
    video: "/OmPaY.mp4",
    liveUrl: "https://ompay.vercel.app/",
    codeUrl: "https://github.com/OmRana2004/OmPay",
    tech: ["Next.js", "TypeScript", "Tailwind CSS",  "Framer Motion", "Node.js", "Express","PostgreSQL", "Prisma", "JWT (HTTP-only Cookies)"],
  },
  {
    title: "Collabydraw",
    description:
      "Hand-drawn look & feel collaborative drawing app with real-time sync, security, and smooth canvas experience.",
    video: "/CollabyDraw.mp4",
    liveUrl: "https://omdraw.vercel.app/",
    codeUrl: "https://github.com/OmRana2004/OmDraw",
    tech: ["Next.js", "WebSocket", "Canvas", "Perfect-freehand", "E2EE"],
  },
  {
    title: "Trekify",
    description:
      "A full-stack trekking and adventure tour platform inspired by professional travel websites.",
    video: "/Trekify.mp4",
    liveUrl: "https://trekify-official.vercel.app/",
    codeUrl: "https://github.com/OmRana2004/Trekify",
    tech: ["React", "Tailwind", "TypeScript", "Express", "MongoDB"],
  },
];

/* -------------------- COMPONENT -------------------- */
export default function Projects() {
  return (
    <section id="projects" className="bg-black py-14 text-white">
      <div className="mx-auto max-w-5xl px-4">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 space-y-2"
        >
          <h2 className="text-3xl font-bold">Proof of Work</h2>
          <p className="max-w-2xl text-sm text-zinc-400">
            Selected projects showcasing product thinking & engineering.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.35 }}
              className="group"
            >
              <Card className="relative overflow-hidden rounded-[12px] border border-zinc-800 bg-zinc-900/70 transition hover:border-zinc-600 hover:shadow-md">
                
                {/* VIDEO */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-[18px] bg-zinc-800">
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <CardContent className="flex flex-col gap-3 p-3.5">
                  <div>
                    <h3 className="text-sm font-semibold">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-zinc-300 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* TECH */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-zinc-700 bg-zinc-950 px-2 py-0.5 text-[10px] text-zinc-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* ACTIONS */}
                  <div className="flex gap-2 pt-1">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-black transition hover:bg-blue-200"
                      >
                        <Globe className="h-3 w-3" />
                        Live
                      </Link>
                    )}
                    {project.codeUrl && (
                      <Link
                        href={project.codeUrl}
                        target="_blank"
                        className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-black transition hover:bg-blue-200"
                      >
                        <Github className="h-3 w-3" />
                        Code
                      </Link>
                    )}
                  </div>
                </CardContent>

                {/* SOFT GLOW */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition duration-500 group-hover:opacity-40"
                  style={{
                    background:
                      "radial-gradient(380px circle at top left, rgba(158,122,255,0.1), transparent 70%)",
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
