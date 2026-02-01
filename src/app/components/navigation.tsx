"use client";

import Link from "next/link";
import { Macondo } from "next/font/google";

const macondo = Macondo({
    weight: "400",
    subsets: ["latin"],
});

export default function Navbar() {
    return (
        <nav className="fixed  top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl rounded-full border border-white/30 bg-black/50 backdrop-blur-md shadow-lg hover:border-white/60 transition scroll-mt-24">

            <div className="px-8 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    // className={`text-xl tracking-wide hover:opacity-80 transition ${macondo.className}`}
                    className={`text-lg tracking-widest hover:text-purple-400 transition ${macondo.className}`}

                >
                    Dorantino<span className="text-purple-500">.tech</span>
                </Link>

                {/* Links */}
                <div className="flex gap-8 text-sm items-center">

                    <a href="#about" className="hover:text-purple-400 transition">
                        About
                    </a>

                    <a href="#projects" className="hover:text-purple-400 transition">
                        Projects
                    </a>

                    <a href="#stack" className="hover:text-purple-400 transition">
                        Stack
                    </a>


                    <a
                        href="#contact"
                        className="hover:text-purple-400 transition"
                    >
                        Contact
                    </a>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="px-4 py-2 border border-white/30 rounded hover:border-purple-500 hover:text-purple-400 transition"
                    >
                        Resume
                    </a>
                </div>

            </div>
        </nav>
    );
}
