import React from "react";

import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "Portfolio Website",
    description:
      "A personal developer portfolio showcasing skills, experience, and projects using Next.js, Tailwind, and shadcn/ui.",
    stack: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    github: "https://github.com/ifeelgarv/portfolio",
    live: "https://your-portfolio.vercel.app",
    status: "on-going",
  },
  {
    name: "PreciseBlend",
    description:
      "A mini Android app built as a college assignment. It displays a curated playlist of coding tutorials. Users can view custom playlists, tap on a video, and be redirected to the respective YouTube video. Static app built over 2 months.",
    stack: ["Android", "Java"],
    github: "https://github.com/JoysonAJ/PreciseBlend",
    live: "",
    status: "completed",
  },

  {
    name: "TC-Hub",
    description:
      "It's a fully-fledged cable subscription system. Users can log in/register to the system and user can check all channel packs and select default packs and add extra channels to their wish from the list and payment through the system payment gateway. Admin can add new channel packs or remove also the users too.",
    stack: ["React", "Node.js", "Express.js", "Redux Toolkit", "MongoDB"],
    github: "https://github.com/JoysonAJ/Cable-System",
    live: "",
    status: "completed",
  },
  {
    name: "Threads Clone",
    description:
      "A clone of Meta's Threads app built for learning purposes. Features include authentication (email/password), posting threads with images, and replying to threads.",
    stack: [
      "ReactJS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Cloudinary",
    ],
    github: "https://github.com/JoysonAJ/threads-clone", // You can replace with actual if available
    live: "", // Add live demo link if deployed
    status: "completed",
  },
];

export default function Project() {
  return (
    <section
      id="projects"
      className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-20"
    >
      <h2 className="text-3xl font-bold mb-8 text-center sm:text-left">
        Projects
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    project.status === "completed"
                      ? "bg-green-100 text-green-700 border border-green-200"
                      : "bg-yellow-100 text-yellow-700 border border-yellow-200"
                  }`}
                >
                  {project.status === "completed" ? "Completed" : "Ongoing"}
                </span>
              </div>

              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-muted px-3 py-1 rounded-full text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                  className="hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live Project"
                  className="hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
