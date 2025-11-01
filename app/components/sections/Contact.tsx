import React from "react";

type ContactProps = {
  twitterUrl?: string;
  className?: string;
};

export default function Contact({
  twitterUrl = "https://x.com/OmRana2025",
  className = "",
}: ContactProps) {
  return (
    <section
      id="contact"
      className={`flex min-h-0 flex-col gap-y-6 pb-20 bg-black${className}`}
      aria-label="Contact"
    >
      <div style={{ opacity: 1, filter: "blur(0px)", transform: "none" }}>
        <div
          className="space-y-4 text-center "
          style={{ opacity: 1, transform: "none" }}
        >
          <h2
            className="text-xl font-bold tracking-tighter sm:text-2xl font-bricolage-grotesque mx-auto text-white"
            style={{ opacity: 1, transform: "none" }}
          >
            Get in Touch
          </h2>

          <p
            className=" text-sm sm:text-[1.125rem] font-inter mx-auto sm:max-w-md lg:max-w-2xl text-white"
            style={{ opacity: 1, transform: "none" }}
          >
            Wanna connect with me? Drop me a message on my{' '}
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3198b4] underline"
            >
              Twitter
            </a>{' '}
            — see you there ✨
          </p>
        </div>
      </div>
    </section>
  );
}
