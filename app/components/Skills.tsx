"use client";

import { motion, easeInOut } from "framer-motion";
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
    <section
      id="skills"
      className="py-6 bg-black text-white"
    >
      <div className="max-w-5xl mx-auto px-6">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-white mb-8 font-bricolage-grotesque"
      >
        Tech Stack
      </motion.h2>

      {/* Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.08 },
          },
        }}
        className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-5 lg:grid-cols-6 gap-5 sm:gap-6"
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 18px rgba(255,255,255,0.1)",
            }}
            transition={{ duration: 0.25, ease: easeInOut }}
            className="flex flex-col items-center justify-center bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-4 hover:bg-gray-800/70 transition-all backdrop-blur-sm"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: easeInOut,
              }}
              className="text-3xl sm:text-4xl mb-2"
            >
              {skill.icon}
            </motion.div>
            <p className="text-gray-300 text-xs sm:text-sm font-medium">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </section>
  );
}
