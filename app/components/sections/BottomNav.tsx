"use client";

import { Home, Mail, FileText, Check } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { useRef, useState } from "react";

const EMAIL = "om259572@gmail.com";

/* -------------------- MAGNETIC ICON -------------------- */
function MagneticIcon({
  children,
  onClick,
  label,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<
    { x: number; y: number; id: number }[]
  >([]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  const handleRipple = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    const x =
      "touches" in e
        ? e.touches[0].clientX - rect.left
        : e.clientX - rect.left;
    const y =
      "touches" in e
        ? e.touches[0].clientY - rect.top
        : e.clientY - rect.top;

    const id = Date.now();
    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);

    onClick?.();
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      onClick={handleRipple}
      onTouchStart={handleRipple}
      className="
        relative group size-10 rounded-full
        flex items-center justify-center
        cursor-pointer text-white
        transition-all duration-300
        hover:bg-white/80 hover:text-black hover:scale-125
        active:scale-110
        hover:ring-2 hover:ring-white/40
        hover:shadow-[0_0_20px_rgba(255,255,255,0.35)]
        overflow-hidden
      "
    >
      {children}

      {/* RIPPLE */}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full bg-white/40 animate-ripple"
          style={{
            left: r.x,
            top: r.y,
            width: 10,
            height: 10,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      <Tooltip label={label} />
    </div>
  );
}

/* -------------------- MAIN NAV -------------------- */
export default function BottomNav() {
  const [hover, setHover] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className="fixed bottom-1 inset-x-0 z-50 flex justify-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <nav
        className={`
          relative flex items-center gap-3 rounded-full
          border border-white/20 backdrop-blur-xl
          px-4 py-1.5
          shadow-[0_4px_20px_rgba(0,0,0,0.4)]
          transition-all duration-300
          ${hover ? "bg-white/20 scale-105" : "bg-white/10"}
        `}
      >
        <NavLink href="/" label="Home">
          <Home className="size-5" />
        </NavLink>

        <Divider />

        <NavLink href="https://github.com/OmRana2004" label="GitHub">
          <FaGithub className="size-5" />
        </NavLink>
        <NavLink
          href="https://www.linkedin.com/in/om-rana-503a95251"
          label="LinkedIn"
        >
          <FaLinkedin className="size-5" />
        </NavLink>
        <NavLink href="https://x.com/OmRana2025" label="Twitter">
          <FaXTwitter className="size-5" />
        </NavLink>

        {/* EMAIL */}
        <MagneticIcon onClick={copyEmail} label={copied ? "Copied!" : "Email"}>
          {copied ? (
            <Check className="size-5 text-green-500" />
          ) : (
            <Mail className="size-5" />
          )}
        </MagneticIcon>

        <NavLink
          href="https://drive.google.com/file/d/1FR1WZu1Qq6Xunm37eSCgfqzgnUPub9fi/view"
          label="Resume"
        >
          <FileText className="size-5" />
        </NavLink>

        {copied && (
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-md bg-black px-3 py-1 text-xs text-white shadow-lg">
            Email copied
          </div>
        )}
      </nav>
    </div>
  );
}

/* -------------------- NAV LINK -------------------- */
function NavLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith("http");

  const content = (
    <MagneticIcon label={label}>{children}</MagneticIcon>
  );

  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    <Link href={href}>{content}</Link>
  );
}

/* -------------------- TOOLTIP -------------------- */
function Tooltip({ label }: { label: string }) {
  return (
    <span
      className="
        absolute -top-7 left-1/2 -translate-x-1/2
        px-1.5 py-0.5 text-[10px] font-medium rounded-md
        bg-black/70 backdrop-blur-sm text-white
        opacity-0 translate-y-1
        transition-all duration-200
        group-hover:opacity-100 group-hover:translate-y-0
        pointer-events-none
      "
    >
      {label}
    </span>
  );
}

/* -------------------- DIVIDER -------------------- */
function Divider() {
  return <div className="w-px h-6 bg-white/25" />;
}
