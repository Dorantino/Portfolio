"use client";

import Link from "next/link";
import { Macondo } from "next/font/google";

const macondo = Macondo({
    weight: "400",
    subsets: ["latin"],
});

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between align-">

                {/* Logo */}
                <Link
                    href="/"
                    className={`text-xl tracking-wide hover:opacity-80 transition ${macondo.className}`}
                >
                    Dorantino<span className="text-purple-500">.tech</span>
                </Link>

                {/* Links */}
                <div className="flex gap-8 text-sm items-center">

                    <a href="#projects" className="hover:text-purple-400 transition">
                        Projects
                    </a>

                    <a href="#about" className="hover:text-purple-400 transition">
                        About
                    </a>

                    <a
                        href="#contact"
                        className="px-4 py-2 border border-white/30 rounded hover:border-purple-500 hover:text-purple-400 transition"
                    >
                        Contact
                    </a>

                </div>
            </div>
        </nav>
    );
}
