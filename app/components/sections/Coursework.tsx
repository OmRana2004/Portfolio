"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";

import Image from "next/image";

const courses = [
  {
    title: "Full Stack + DevOps + Web3",
    org: "100xDevs",
    date: "May 2024 - In progress",
    logo: "/logos/100xdevs.png",
  },
  
];

export default function Coursework() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10"
        >
          Coursework
        </motion.h2>

        <div className="space-y-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 hover:from-zinc-800 hover:to-zinc-700 transition-all duration-300 border border-zinc-700 hover:border-zinc-500 rounded-2xl shadow-md hover:shadow-lg hover:shadow-zinc-600/20">
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border border-zinc-600">
                      <Image
                        src={course.logo}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{course.title}</h3>
                      <p className="text-sm text-zinc-400">{course.org}</p>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-500">{course.date}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
