"use client";

import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si";

export default function TechStack() {
    return (
        <section id="stack" className="min-h-screen flex items-center">

            <div className="max-w-5xl mx-auto px-6 text-center space-y-12">

                <h2 className="text-4xl md:text-6xl font-bold text-purple-500">
                    Tech Stack
                </h2>

                {/* MAIN STACK */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-10 text-4xl text-gray-300 justify-items-center">

                    <div className="flex flex-col items-center gap-2 hover:text-purple-500 hover:scale-110 transition">
                        <FaReact />
                        <span className="text-sm">React</span>
                    </div>

                    <div className="flex flex-col items-center gap-2 hover:text-purple-500 hover:scale-110 transition">
                        <SiNextdotjs />
                        <span className="text-sm">Next.js</span>
                    </div>

                    <div className="flex flex-col items-center gap-2 hover:text-purple-500 hover:scale-110 transition">
                        <SiTailwindcss />
                        <span className="text-sm">Tailwind</span>
                    </div>

                    <div className="flex flex-col items-center gap-2 hover:text-purple-500 hover:scale-110 transition">
                        <FaNodeJs />
                        <span className="text-sm">Node.js</span>
                    </div>

                    <div className="flex flex-col items-center gap-2 hover:text-purple-500 hover:scale-110 transition">
                        <SiMongodb />
                        <span className="text-sm">MongoDB</span>
                    </div>

                    <div className="flex flex-col items-center gap-2 hover:text-purple-500 hover:scale-110 transition">
                        <FaGithub />
                        <span className="text-sm">GitHub</span>
                    </div>

                </div>

                {/* SECONDARY STACK */}
                <div className="space-y-4 pt-6">

                    <p className="text-gray-400">Also worked with:</p>

                    <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-300">

                        <span className="px-3 py-1 border border-white/20 rounded">
                            PHP
                        </span>

                        <span className="px-3 py-1 border border-white/20 rounded">
                            Java
                        </span>

                        <span className="px-3 py-1 border border-white/20 rounded">
                            ASP.NET
                        </span>

                        <span className="px-3 py-1 border border-white/20 rounded">
                            MySQL
                        </span>

                    </div>

                </div>

            </div>

        </section>
    );
}
