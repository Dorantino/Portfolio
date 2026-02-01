"use client";

import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <motion.section
            id="home" className="h-screen flex items-center"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ willChange: "transform, opacity" }}

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



            </div>
        </motion.section>

    );
}
