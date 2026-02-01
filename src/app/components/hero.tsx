"use client";

import { ReactTyped } from "react-typed";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiJavascript } from "react-icons/si";
import { FaReact, FaNodeJs, FaGithub, FaPhp } from "react-icons/fa";

export default function Hero() {
    return (
        <section
            id="home"
            className="h-screen flex items-center"
        >

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

                <div className="flex flex-col justify-center space-y-6">

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Hey, I'm <span className="text-purple-500">Seth Korantwi</span>
                    </h1>

                    <h2 className="text-xl md:text-2xl text-gray-400">
                        I build{" "}
                        <ReactTyped
                            strings={[
                                "cool websites.",
                                "modern web apps.",
                                "full-stack projects.",
                                "fun stuff on the web."
                            ]}
                            typeSpeed={55}
                            backSpeed={40}
                            loop
                        />

                    </h2>

                    <p className="text-gray-400 max-w-lg">
                        I enjoy building clean and efficient web applications that solve real-world problems. Always learning, always improving.
                    </p>


                    <div className="flex gap-4 pt-4">

                        <a
                            href="#projects"
                            className="px-6 py-3 bg-purple-500 rounded text-black hover:bg-purple-400 transition"
                        >
                            View Projects
                        </a>

                        <a
                            href="#contact"
                            className="px-6 py-3 border border-white/30 rounded hover:border-purple-500 transition"
                        >
                            Contact
                        </a>

                    </div>

                </div>

                <div className="hidden md:grid grid-cols-4 gap-8 text-purple-400/60 place-items-center ">
                    <FaReact className="text-6xl opacity-60 transition hover:-translate-y-1 hover:text-purple-400" />
                    <SiNextdotjs className="text-6xl opacity-60 transition hover:-translate-y-1 hover:text-purple-400" />
                    <SiTailwindcss className="text-6xl opacity-60 transition hover:-translate-y-1 hover:text-purple-400" />
                    <FaNodeJs className="text-6xl opacity-60 transition hover:-translate-y-1 hover:text-purple-400" />
                    <SiMongodb className="text-6xl opacity-60 transition hover:-translate-y-1 hover:text-purple-400" />
                    <FaGithub className="text-6xl opacity-60 transition hover:-translate-y-1 hover:text-purple-400" />
                    <SiJavascript className="text-6xl opacity-60 transition hover:-translate-y-1 hover:text-purple-400" />
                    <FaPhp className="text-6xl opacity-60 transition hover:-translate-y-1 hover:text-purple-400" />
                </div>

            </div>




        </section>

    );
}
