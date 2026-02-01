"use client";

export default function About() {
    return (
        <section
            id="about"
            className="h-screen flex items-start pt-32 px-6"
        >

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

                <div className="flex items-center">
                    <h2 className="text-3xl md:text-6xl font-bold text-purple-500">
                        About Me
                    </h2>
                </div>

                <div className="space-y-6">

                    <p className="text-gray-400 leading-relaxed">
                        I'm Seth, a web developer who enjoys building things that live on the
                        internet. I started with simple pages and gradually moved into
                        full-stack projects using React, Next.js, ASP.NET, PHP and various backend technologies.
                    </p>

                    <p className="text-gray-400 leading-relaxed">
                        Most of my learning comes from building real projects, fixing bugs,
                        and collaborating with others using Git and pull requests. I like
                        understanding how things work under the hood and improving my skills
                        one project at a time.
                    </p>

                    <p className="text-gray-400 leading-relaxed">
                        Outside development, you'll usually find me playing soccer, pickleball,
                        volleyball or basketball. I'm also learning how to snowboard. Simply put, I love sports - they're some of the most therapeutic moments in my life.
                    </p>

                </div>

            </div>
        </section>

    );
}
