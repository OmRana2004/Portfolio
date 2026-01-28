"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiPrisma,
  SiRedux,
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
  { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind" },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <SiTypescript className="text-blue-400" />, name: "TypeScript" },
  { icon: <FaReact className="text-cyan-500" />, name: "React" },
  { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
  { icon: <SiExpress className="text-gray-300" />, name: "Express" },
  { icon: <SiRedux className="text-purple-500" />, name: "Redux" },
  { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
  { icon: <SiPostgresql className="text-sky-500" />, name: "PostgreSQL" },
  { icon: <SiPrisma className="text-slate-300" />, name: "Prisma" },
  { icon: <FaAws className="text-orange-400" />, name: "AWS" },
  { icon: <FaDocker className="text-blue-400" />, name: "Docker" },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-black py-16 text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 text-3xl font-bold md:text-4xl"
        >
          Tech Stack
        </motion.h2>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.06 },
            },
          }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                y: -4,
                boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/60 px-4 py-5 backdrop-blur transition hover:border-zinc-600"
            >
              <div className="mb-2 text-3xl sm:text-4xl transition-transform group-hover:scale-110">
                {skill.icon}
              </div>
              <p className="text-xs sm:text-sm font-medium text-zinc-300">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
