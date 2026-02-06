"use client";

import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiJavascript } from "react-icons/si";

export default function TechStack() {

    const mainStack = [
        { name: "React", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "Node.js", icon: FaNodeJs },
        { name: "MongoDB", icon: SiMongodb },
        { name: "GitHub", icon: FaGithub },
    ];

    const secondaryStack = ["PHP", "Java", "ASP.NET", "MySQL", "Docker", "Python", "C#"];


    return (
        <section id="stack" className="min-h-screen flex items-center">

            <div className="max-w-5xl mx-auto px-6 text-center space-y-12">

                <h2 className="text-4xl md:text-6xl font-bold text-purple-500">
                    Tech Stack
                </h2>

                {/* MAIN STACK */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-10 text-gray-400 justify-items-center">
                    {mainStack.map((tech, i) => {
                        const Icon = tech.icon;

                        return (
                            <div
                                key={i}
                                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 hover:text-purple-500 hover:scale-110 transition"
                            >
                                <Icon className="text-4xl" />
                                <span className="text-sm">{tech.name}</span>
                            </div>
                        );
                    })}
                </div>

                {secondaryStack.length > 0 && (
                    <div className="pt-6 space-y-3">
                        <p className="text-gray-400 text-sm">Also worked with:</p>

                        <div className="flex flex-wrap justify-center gap-3">
                            {secondaryStack.map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 text-sm border border-white/20 rounded hover:border-purple-500 hover:text-purple-400 transition"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}



            </div>

        </section>
    );
}
