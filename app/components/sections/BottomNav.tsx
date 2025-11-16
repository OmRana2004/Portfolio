"use client";

import { Home, Mail, FileText } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

export default function BottomNav() {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="fixed bottom-1 inset-x-0 z-50 flex justify-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <nav
        className={`
          flex items-center gap-3 rounded-full border border-white/20
          backdrop-blur-xl px-4 py-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.4)]
          transition-all duration-300
          ${hover ? "bg-white/20 scale-105" : "bg-white/10 scale-100"}
        `}
      >
        <NavIcon label="Home" href="/" icon={<Home className="size-5" />} />

        <Divider />

        <NavIcon label="GitHub" href="https://github.com/OmRana2004" icon={<FaGithub className="size-5" />} />
        <NavIcon label="LinkedIn" href="https://www.linkedin.com/in/om-rana-503a95251" icon={<FaLinkedin className="size-5" />} />
        <NavIcon label="Twitter" href="https://x.com/OmRana2025" icon={<FaXTwitter className="size-5" />} />

        <NavIcon label="Email" href="mailto:mail.om259572@gmail.com" icon={<Mail className="size-5" />} />
        <NavIcon
          label="Resume"
          href="https://drive.google.com/file/d/1TciL7LjnAvQs9tettaCvg5_MGywQlsrf/view?usp=sharing"
          icon={<FileText className="size-5" />}
        />
      </nav>
    </div>
  );
}

function NavIcon({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  const baseClass =
    "group relative inline-flex items-center justify-center size-10 rounded-full " +
    "text-white transition-all duration-300 cursor-pointer " +
    "hover:bg-white/80 hover:text-black hover:scale-125 active:scale-110";

  const Wrapper = isExternal ? "a" : Link;

  return (
    <Wrapper
      {...(isExternal
        ? { href, target: "_blank", rel: "noopener noreferrer" }
        : { href })}
      className={baseClass}
    >
      {icon}

      {/* Compact Tooltip */}
      <span
        className="
          absolute -top-7 left-1/2 -translate-x-1/2
          px-1.5 py-0.5 text-[10px] font-medium rounded-md 
          bg-black/70 backdrop-blur-sm text-white
          opacity-0 translate-y-1
          transition-all duration-200
          group-hover:opacity-100 group-hover:translate-y-0
        "
      >
        {label}
      </span>
    </Wrapper>
  );
}

function Divider() {
  return <div className="w-px h-6 bg-white/25" />;
}
