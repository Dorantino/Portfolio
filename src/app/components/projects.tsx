"use client";

import { FaReact, FaNodeJs, FaGithub, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiBootstrap, SiSharp, SiDotnet, SiMysql } from "react-icons/si";
import Image from "next/image"

export default function Projects() {


  const projects = [
    {
      title: "Technology & Course Management",
      description:
        "Full-stack application for managing technologies and courses with complete CRUD functionality using Next.js and MongoDB.",
      tech: ["react", "next", "tailwind", "node", "mongo"],
      github: "https://github.com/Dorantino/full-stack-project-III",
      live: "https://fullstack-project-3.vercel.app/",
      imageSrc: "/projectImages/techManager.png",
      alt: "Tech manager Project screenshot",
    },

    {
      title: "Interactive Photo Albumlbum",
      description: "Full-stack photo album application featuring keyboard navigation, jump-to thumbnails, and real-time comments. Built with Next.js and MongoDB, including REST API routes, image optimization, and sanitized user input.",
      tech: ["react", "next", "tailwind", "node", "mongo"],
      github: "https://github.com/Dorantino/Photo-Album",
      live: "https://photo-album-cyan.vercel.app/",
      imageSrc: "/projectImages/photoAlbum.png",
      alt: "Interactive Photo Album screenshot",
    },
    {
      title: "Links Manager",
      description: "Full-stack ASP.NET Core MVC web application for managing categorized links. Features secure admin authentication, CRUD operations for categories and links, and a MySQL database powered by Entity Framework Core migrations.",
      tech: ["asp.net", "csharp", "entityframework", "mysql", "docker", "bootstrap"],
      github: "https://github.com/Dorantino/Links-home",
      live: "",
      imageSrc: "/projectImages/linksManager.png",
      alt: "ASP.NET Core Links Manager admin dashboard",
    }

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

        <div className="space-y-16">

          {projects.map((project, i) => (
            <div
              key={i}
              className="grid md:grid-cols-2 gap-8 items-center border border-white/10 rounded-2xl p-10 bg-white/5 hover:border-purple-500/40 hover:-translate-y-1 transition"
            >

              <div className=" bg-zinc-900 rounded-xl h-64 flex items-center justify-center text-gray-500">
                <div className="relative w-full h-full">
                  <Image
                    src={project.imageSrc}
                    alt={project.alt}
                    fill
                    className="object-cover p-4 rounded-xl"
                  />


                </div>


              </div>

              <div className="space-y-4">

                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-400">
                  {project.description}
                </p>

                <div className="flex gap-3 text-purple-400">

                  {project.tech?.includes("react") && (
                    <span className="p-2 bg-white/5 rounded-lg">
                      <FaReact />
                    </span>
                  )}

                  {project.tech?.includes("next") && (
                    <span className="p-2 bg-white/5 rounded-lg">
                      <SiNextdotjs />
                    </span>
                  )}

                  {project.tech?.includes("tailwind") && (
                    <span className="p-2 bg-white/5 rounded-lg">
                      <SiTailwindcss />
                    </span>
                  )}

                  {project.tech?.includes("node") && (
                    <span className="p-2 bg-white/5 rounded-lg">
                      <FaNodeJs />
                    </span>
                  )}

                  {project.tech?.includes("mongo") && (
                    <span className="p-2 bg-white/5 rounded-lg">
                      <SiMongodb />
                    </span>
                  )}


                  {project.tech?.includes("asp.net") && (
                    <span className="p-2 bg-white/5 rounded-lg">
                      <SiDotnet />
                    </span>
                  )}

                  {project.tech?.includes("bootstrap") && (
                    <span className="p-2 bg-white/5 rounded-lg">
                      <SiBootstrap />
                    </span>
                  )}

                  {project.tech?.includes("csharp") && (
                    <span className="p-2 bg-white/5 rounded-lg">
                      <SiSharp />
                    </span>
                  )}

                  {project.tech?.includes("entityframework") && (
                    <span className="p-2 bg-white/5 rounded-lg">
                      <FaDatabase />
                    </span>
                  )}

                  {project.tech?.includes("mysql") && (
                    <span className="p-2 bg-white/5 rounded-lg">
                      <SiMysql />
                    </span>
                  )}

                </div>

                <div className="flex gap-6 pt-2 text-sm">

                  <a
                    href={project.github}
                    target="_blank"
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
