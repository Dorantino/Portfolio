"use client";

import { FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="min-h-screen flex items-center px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

                {/* LEFT */}
                <div className="flex items-center">
                    <h2 className="text-3xl md:text-6xl font-bold text-purple-500">
                        Contact
                    </h2>
                </div>

                {/* RIGHT */}
                <div className="space-y-6 text-gray-400">

                    <p>
                        Got an idea or just want to say hi? I’m always open to new
                        opportunities and collaborations.
                    </p>

                    <div className="flex items-center gap-4">
                        <FaEnvelope className="text-purple-400" />
                        <a href="mailto:your@email.com" className="hover:text-purple-400">
                            your@email.com
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <FaGithub className="text-purple-400" />
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            className="hover:text-purple-400"
                        >
                            github.com/yourusername
                        </a>
                    </div>

                    <a
                        href="mailto:your@email.com"
                        className="inline-block mt-6 px-6 py-3 bg-purple-500 text-black rounded hover:bg-purple-400 transition"
                    >
                        Send Message
                    </a>

                </div>

            </div>
        </section>
    );
}
