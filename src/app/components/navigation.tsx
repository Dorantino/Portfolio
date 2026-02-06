"use client";

import { useState } from "react";
import { Macondo } from "next/font/google";
import { FaBars, FaTimes } from "react-icons/fa";

const macondo = Macondo({
    weight: "400",
    subsets: ["latin"],
});

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Stack", href: "#stack" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">

            <div className="rounded-full border border-white/30 bg-black/50 backdrop-blur-md shadow-lg px-8 py-4 flex items-center justify-between">

                <a
                    href="#home"
                    className={`text-lg tracking-widest hover:text-purple-400 transition ${macondo.className}`}
                >
                    Dorantino<span className="text-purple-500">.tech</span>
                </a>

                <div className="hidden md:flex gap-8 text-sm items-center">

                    {links.map(link => (
                        <a key={link.name} href={link.href} className="hover:text-purple-400 transition">
                            {link.name}
                        </a>
                    ))}

                    <a
                        href="/Seth_Korantwi_Resume.pdf"
                        target="_blank"
                        className="px-4 py-2 border border-white/30 rounded hover:border-purple-500 hover:text-purple-400 transition"
                    >
                        Resume
                    </a>
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-xl"
                >
                    {open ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {open && (
                <div className="mt-3 rounded-2xl border border-white/20 bg-black/70 backdrop-blur-md shadow-lg px-8 py-6 space-y-4 text-sm md:hidden">

                    {links.map(link => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="block hover:text-purple-400 transition"
                        >
                            {link.name}
                        </a>
                    ))}

                    <a
                        href="/Seth_Korantwi_Resume.pdf"
                        target="_blank"
                        className="block pt-2 hover:text-purple-400 transition"
                    >
                        Resume
                    </a>
                </div>
            )}

        </nav>
    );
}
