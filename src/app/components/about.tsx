"use client";

import { motion } from "framer-motion";


export default function About() {
    return (
        <motion.section
            id="about"
            className="h-screen flex items-start pt-32 px-6 bg-white/5"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ willChange: "transform, opacity" }}

        >

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

                {/* LEFT SIDE */}
                <div className="flex items-center">
                    <h2 className="text-3xl md:text-6xl font-bold text-purple-500">
                        About Me
                    </h2>
                </div>

                {/* RIGHT SIDE */}
                <div className="space-y-6">

                    <p className="text-gray-400 leading-relaxed">
                        I'm Seth, a web developer who enjoys building things that live on the
                        internet. I started with simple pages and gradually moved into
                        full-stack projects using React, Next.js, and databases.
                    </p>

                    <p className="text-gray-400 leading-relaxed">
                        Most of my learning comes from building real projects, fixing bugs,
                        and collaborating with others using Git and pull requests. I like
                        understanding how things work under the hood and improving my skills
                        one project at a time.
                    </p>

                    <p className="text-gray-400 leading-relaxed">
                        Right now, I'm focused on growing as a developer, creating clean and
                        useful applications, and getting real-world experience along the way.
                    </p>

                </div>

            </div>
        </motion.section>

    );
}
