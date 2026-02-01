// HeroSection.jsx
import React from "react";

export default function HeroSection() {
    return (
        <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center px-6">
            <div className="max-w-4xl text-center">
                {/* Fake IDE window */}
                <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700">
                    {/* Window header */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 border-b border-gray-600">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        <span className="ml-4 text-sm text-gray-300 font-mono">HeroSection.jsx</span>
                    </div>

                    {/* Code content */}
                    <pre className="text-left p-6 font-mono text-sm overflow-x-auto">
                        <code>
                            <span className="text-green-400">function</span>{" "}
                            <span className="text-blue-400">HeroSection</span>() {"{"}
                            {"\n"}  <span className="text-purple-400">return</span> (
                            {"\n"}    &lt;<span className="text-yellow-300">div</span> className="hero"&gt;
                            {"\n"}      <span className="text-pink-400">Hello, World!</span>
                            {"\n"}    &lt;/<span className="text-yellow-300">div</span>&gt;
                            {"\n"}  );
                            {"\n"}{"}"}
                        </code>
                    </pre>
                </div>

                {/* Hero text */}
                <h1 className="mt-8 text-4xl md:text-6xl font-bold">
                    Build Beautiful UIs Like an IDE
                </h1>
                <p className="mt-4 text-lg text-gray-400">
                    Create developer-focused hero sections with React & TailwindCSS.
                </p>

                {/* CTA buttons */}
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold">
                        Get Started
                    </button>
                    <button className="px-6 py-3 border border-gray-500 hover:bg-gray-800 rounded-lg font-semibold">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}
