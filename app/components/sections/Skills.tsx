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

/* -------------------- SKILLS DATA -------------------- */
const skills = [
  { icon: FaJs, name: "JavaScript", color: "#F7DF1E", shadow: "#C4A5FF" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6", shadow: "#C4A5FF" },
  { icon: FaHtml5, name: "HTML", color: "#E34F26", shadow: "#C4A5FF" },
  { icon: FaCss3Alt, name: "CSS", color: "#1572B6", shadow: "#C4A5FF" },

  { icon: FaReact, name: "React", color: "#61DAFB", shadow: "#2EC4D6" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#38BDF8", shadow: "#2EC4D6" },
  { icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF", shadow: "#2EC4D6" },
  { icon: SiRedux, name: "Redux", color: "#764ABC", shadow: "#2EC4D6" },

  { icon: FaNodeJs, name: "Node.js", color: "#3C873A", shadow: "#3ED598" },
  { icon: SiExpress, name: "Express", color: "#FFFFFF", shadow: "#3ED598" },

  { icon: SiMongodb, name: "MongoDB", color: "#47A248", shadow: "#F2C078" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#336791", shadow: "#F2C078" },
  { icon: SiPrisma, name: "Prisma", color: "#FFFFFF", shadow: "#F2C078" },

  { icon: FaAws, name: "AWS", color: "#FF9900", shadow: "#F2996E" },
  { icon: FaDocker, name: "Docker", color: "#2496ED", shadow: "#F2996E" },
];

/* -------------------- COMPONENT -------------------- */
export default function Skills() {
  return (
    <section id="skills" className="bg-black py-16 text-white">
      <div className="mx-auto max-w-6xl px-4">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mb-12 text-3xl font-bold md:text-4xl"
        >
          Tech Stack
        </motion.h2>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.94 }} // 👇 press animation
              >
                <motion.div
                  whileHover={{
                    boxShadow: `0 6px 0 ${skill.shadow}, 0 0 18px ${skill.color}`,
                  }}
                  transition={{ duration: 0.25 }}
                  className="
                    flex items-center gap-3
                    bg-black
                    px-5 py-2.5
                    border border-zinc-700
                    rounded-md
                    min-w-[150px]
                    md:min-w-[180px]
                    cursor-pointer
                  "
                >
                  {/* ICON WITH GLOW */}
                  <motion.span
                    className="text-lg"
                    style={{ color: skill.color }}
                    whileHover={{
                      scale: 1.15,
                      filter: `drop-shadow(0 0 8px ${skill.color})`,
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <Icon />
                  </motion.span>

                  {/* LABEL */}
                  <span className="text-sm md:text-base text-zinc-200 font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
