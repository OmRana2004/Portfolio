"use client";

import { ArrowRight } from "lucide-react"; // modern icon from lucide-react

export default function SocialSection() {
  return (
    <section>
        <div style={{ opacity: 1, filter: "blur(0px)", transform: "translateY(-6px)" }}>

    <div
  className="flex flex-col md:flex-row items-center justify-center gap-2"
  style={{ opacity: 1, filter: "blur(0px)", transform: "translateY(0px)" }}
>
  <a href="#project">
    <button className="group bg-white hover:bg-gray-100 text-black font-semibold px-6 py-2 rounded shadow flex items-center gap-2 transition-all duration-300 w-auto">
      <span>View Projects</span>
      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  </a>
</div>
</div>
  </section>


  );
}
