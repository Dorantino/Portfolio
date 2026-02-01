import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-6">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">

                <p>
                    © {new Date().getFullYear()} Seth Korantwi — Built with Next.js & Tailwind
                </p>

                <a
                    href="https://github.com/Dorantino"
                    target="_blank"
                    className="flex items-center gap-2 hover:text-purple-400 transition hover:scale-105
"
                >
                    <FaGithub />
                    GitHub
                </a>

            </div>
        </footer>
    );
}
