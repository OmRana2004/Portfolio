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
    date: "May 2024 - In progress",
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
    <section className="py-10 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-4xl font-bold mb-10"
        >
          Coursework
        </motion.h2>

        <div className="space-y-6">
          {courses.map((course, index) => {
            const isOpen = expanded === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <Card className="bg-black border-black">
                  <CardContent className="p-4 bg-black border border-black
                  ">
                    {/* Top section */}
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() =>
                        setExpanded(isOpen ? null : index)
                      }
                    >
                      <div className="flex items-center gap-4">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden border border-zinc-600">
                          <Image
                            src={devs}
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
                      <div className="flex items-center gap-3">
                        <p className="text-sm text-zinc-500">{course.date}</p>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-white" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-white" />
                        )}
                      </div>
                    </div>

                    {/* Expandable Section */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm size-max text-white mt-2 mx-20 leading-relaxed">
                            {course.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mt-4">
                            {course.topics.map((topic, i) => (
                              <span
                                key={i}
                                className="text-xs bg-white border border-white px-2 py-0 rounded-sm text-black"
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
