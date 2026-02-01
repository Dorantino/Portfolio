"use client";

import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-start pt-32 px-6"
        >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

                {/* LEFT */}
                <div className="flex items-center">
                    <h2 className="text-3xl md:text-6xl font-bold text-purple-500">
                        Projects
                    </h2>
                </div>

                {/* RIGHT */}
                <div className="space-y-10">

                    {/* PROJECT CARD */}
                    <div className="grid md:grid-cols-2 gap-8 items-center border border-white/10 rounded-2xl p-10 bg-white/5 hover:border-purple-500/40 hover:-translate-y-1 transition">

                        {/* Thumbnail */}
                        <div className="bg-zinc-900 rounded-xl h-64 flex items-center justify-center text-gray-500">
                            Project Screenshot
                        </div>

                        {/* Info */}
                        <div className="space-y-4">

                            <h3 className="text-2xl font-semibold">
                                Login System
                            </h3>

                            <p className="text-gray-400">
                                Full authentication flow with React and Next.js including form
                                validation and protected routes.
                            </p>

                            {/* Tech */}
                            <div className="flex gap-4 text-xl text-purple-400">
                                <FaReact title="React" />
                                <SiNextdotjs title="Next.js" />
                                <SiTailwindcss title="Tailwind" />
                                <FaNodeJs title="Node.js" />
                            </div>

                            {/* Links */}
                            <div className="flex gap-6 pt-2 text-sm">

                                <a
                                    className="flex items-center gap-2 hover:text-purple-400 transition"
                                >
                                    <FaGithub /> Code
                                </a>

                                <a
                                    className="hover:text-purple-400 transition"
                                >
                                    Live Demo
                                </a>

                            </div>

                        </div>

                    </div>

                    {/* PROJECT CARD */}
                    <div className="grid md:grid-cols-2 gap-8 items-center border border-white/10 rounded-2xl p-10 bg-white/5 hover:border-purple-500/40 hover:-translate-y-1 transition">

                        {/* Thumbnail */}
                        <div className="bg-zinc-900 rounded-xl h-64 flex items-center justify-center text-gray-500">
                            Project Screenshot
                        </div>

                        {/* Info */}
                        <div className="space-y-4">

                            <h3 className="text-2xl font-semibold">
                                Login System
                            </h3>

                            <p className="text-gray-400">
                                Full authentication flow with React and Next.js including form
                                validation and protected routes.
                            </p>

                            {/* Tech */}
                            <div className="flex gap-4 text-xl text-purple-400">
                                <FaReact title="React" />
                                <SiNextdotjs title="Next.js" />
                                <SiTailwindcss title="Tailwind" />
                                <FaNodeJs title="Node.js" />
                            </div>

                            {/* Links */}
                            <div className="flex gap-6 pt-2 text-sm">

                                <a
                                    className="flex items-center gap-2 hover:text-purple-400 transition"
                                >
                                    <FaGithub /> Code
                                </a>

                                <a
                                    className="hover:text-purple-400 transition"
                                >
                                    Live Demo
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
