"use client";

import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="min-h-screen flex items-center px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

                <div className="flex items-center">
                    <h2 className="text-3xl md:text-6xl font-bold text-purple-500">
                        Contact
                    </h2>
                </div>

                <div className="space-y-8">

                    <p className="text-gray-400 max-w-md leading-relaxed">
                        Got an idea, a project, or just want to say hi?
                        I'm always open to new opportunities and collaborations.
                    </p>

                    <div className="flex items-center gap-4 text-gray-400 hover:text-purple-400 transition">
                        <FaEnvelope className="text-purple-400" />
                        <a href="mailto:sethmitchdorant@gmail.com">
                            sethmitchdorant@gmail.com
                        </a>
                    </div>

                    <div className="flex items-center gap-4 text-gray-400 hover:text-purple-400 transition">
                        <FaGithub className="text-purple-400" />
                        <a
                            href="https://github.com/Dorantino"
                            target="_blank"
                            rel="noreferrer"
                        >
                            github.com/Dorantino
                        </a>
                    </div>

                    <div className="flex items-center gap-4 text-gray-400 hover:text-purple-400 transition">
                        <FaLinkedin className="text-purple-400" />
                        <a
                            href="https://www.linkedin.com/in/seth-korantwi-Dorantino/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            linkedin.com/in/seth-korantwi-Dorantino
                        </a>
                    </div>

                    <a
                        href="mailto:sethmitchdorant@gmail.com"
                        className="inline-block pt-4"
                    >
                        <span className="px-6 py-3 bg-purple-500 text-black rounded hover:bg-purple-400 transition">
                            Send Message
                        </span>
                    </a>

                </div>

            </div>
        </section>
    );
}
