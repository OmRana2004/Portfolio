"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import devs from "../../../public/devs.jpg";

const courses = [
  {
    title: "Full Stack + DevOps",
    org: "100xDevs",
    date: "Oct 2024 - In progress",
    logo: "/logos/100xdevs.png",
    description:
      "Comprehensive full-stack development and DevOps course covering advanced topics.",
    topics: [
      "TypeScript",
      "Next.js",
      "Serverless",
      "Cloudflare",
      "Kubernetes",
      "Socket.io",
      "WebRTC",
      "tRPC",
      "Redis",
      "Docker",
      "PostgreSQL",
      "Prisma",
      "OpenAPI",
      "DDoS prevention",
      "Rate limiting",
      "PubSub",
      "Kafka",
    ],
  },
];

export default function Coursework() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="bg-black py-10 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-3xl font-bold md:text-4xl"
        >
          Coursework
        </motion.h2>

        <div className="space-y-6">
          {courses.map((course, index) => {
            const isOpen = expanded === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setExpanded(index)}
                onMouseLeave={() => setExpanded(null)}
              >
                <Card className="border border-zinc-800 bg-black transition hover:border-zinc-600">
                  <CardContent className="p-4">
                    
                    {/* TOP ROW */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="relative h-14 w-14 overflow-hidden rounded-full border border-zinc-700">
                          <Image
                            src={devs}
                            alt={course.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">
                            {course.title}
                          </h3>
                          <p className="text-sm text-zinc-400">
                            {course.org}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-sm text-zinc-400">
                        <span>{course.date}</span>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </div>
                    </div>

                    {/* EXPAND ON HOVER */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-300">
                            {course.description}
                          </p>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {course.topics.map((topic, i) => (
                              <span
                                key={i}
                                className="rounded-md border border-white bg-white px-2 py-0.5 text-xs text-black"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
