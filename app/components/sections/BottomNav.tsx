"use client";

import { Home, Mail, FileText } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function BottomNav() {
  return (
    <div className="fixed bottom-1 inset-x-0 z-50 flex justify-center">
      <nav className="flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
        <NavIcon href="/" icon={<Home className="size-5" />} />
        <Divider />
        <NavIcon href="https://github.com/OmRana2004" icon={<FaGithub className="size-5" />} />
        <NavIcon href="https://www.linkedin.com/in/om-rana-503a95251" icon={<FaLinkedin className="size-5" />} />
        <NavIcon href="https://x.com/OmRana2025" icon={<FaXTwitter className="size-5" />} />
        <NavIcon href="mailto:mail.om259572@gmail.com" icon={<Mail className="size-5" />} />
        <NavIcon href="https://drive.google.com/file/d/1TciL7LjnAvQs9tettaCvg5_MGywQlsrf/view?usp=sharing" icon={<FileText className="size-5" />} />
      </nav>
    </div>
  );
}

function NavIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const baseClass =
    "inline-flex items-center justify-center size-10 text-white hover:text-black hover:bg-white/80 hover:scale-110 transition-all duration-200 rounded-full shadow-sm";

  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={baseClass}>
      {icon}
    </a>
  ) : (
    <Link href={href} className={baseClass}>
      {icon}
    </Link>
  );
}

function Divider() {
  return <div className="w-px h-6 bg-white/25" />;
}
