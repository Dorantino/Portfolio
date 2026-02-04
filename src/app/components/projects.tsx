"use client";

import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si";

export default function Projects() {


  const projects = [
    {
      title: "Technology & Course Management",
      description:
        "Full-stack application for managing technologies and courses with complete CRUD functionality using Next.js and MongoDB.",
      tech: ["react", "next", "tailwind", "node", "mongo"]
      ,
      github: "#",
      live: "https://fullstack-project-3.vercel.app/",
    },
    {
      title: "Another Project",
      description:
        "Short description here.",
      tech: ["react", "next"],
      github: "#",
      live: "#",
    },
  ];



  return (
    <section
      id="projects"
      className="min-h-screen flex items-start pt-32 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

        <div className="flex items-center">
          <h2 className="text-3xl md:text-6xl font-bold text-purple-500">
            Projects
          </h2>
        </div>

        {/* project card */}
        <div className="space-y-16">

          {projects.map((project, i) => (
            <div
              key={i}
              className="grid md:grid-cols-2 gap-8 items-center border border-white/10 rounded-2xl p-10 bg-white/5 hover:border-purple-500/40 hover:-translate-y-1 transition"
            >

              {/* Thumbnail */}
              <div className="bg-zinc-900 rounded-xl h-64 flex items-center justify-center text-gray-500">
                Project Screenshot
              </div>

              {/* Info */}
              <div className="space-y-4">

                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-400">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex gap-3 text-purple-400">

                  {project.tech.includes("react") && (
                    <span className="p-2 bg-white/5 rounded-lg">
                      <FaReact />
                    </span>
                  )}

                  {project.tech.includes("next") && (
                    <span className="p-2 bg-white/5 rounded-lg">
                      <SiNextdotjs />
                    </span>
                  )}

                  {project.tech.includes("tailwind") && (
                    <span className="p-2 bg-white/5 rounded-lg">
                      <SiTailwindcss />
                    </span>
                  )}

                  {project.tech.includes("node") && (
                    <span className="p-2 bg-white/5 rounded-lg">
                      <FaNodeJs />
                    </span>
                  )}

                  {project.tech.includes("mongo") && (
                    <span className="p-2 bg-white/5 rounded-lg">
                      <SiMongodb />
                    </span>
                  )}

                </div>

                {/* Links */}
                <div className="flex gap-6 pt-2 text-sm">

                  <a
                    href={project.github}
                    className="flex items-center gap-2 hover:text-purple-400 transition"
                  >
                    <FaGithub /> Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="hover:text-purple-400 transition"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );

}
