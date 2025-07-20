'use client'
import { Github, Linkedin,Instagram } from "lucide-react";
import React from "react";

export default function Social_Icons() {
  const links = [
    {
      href: "https://github.com/JoysonAJ",
      label: "GitHub",
      icon: <Github size={20} />,
    },
    {
      href: "https://www.linkedin.com/in/antony-joyson/",
      label: "LinkedIn",
      icon: <Linkedin size={20} />,
    },
    {
      href: "https://www.instagram.com/_joyson_d_souza__/",
      label: "Twitter",
      icon: <Instagram size={20} />,
    },
  ];

  return (
    <div className="flex items-center gap-5 justify-center lg:justify-start">
      {links.map(({ href, label, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-muted-foreground hover:text-foreground transition-colors p-2"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
