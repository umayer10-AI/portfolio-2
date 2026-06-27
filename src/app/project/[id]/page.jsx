import React from 'react';
import Link from 'next/link';
import data from '../../../../public/data.json'

const ProjectDetails = async ({ params }) => {

    const { id } = await params;
    const project = data.find(v => v.id === Number(id))

    return (
        <div className="min-h-screen bg-[#05070a] text-white p-6 md:p-12">
            <div className="max-w-5xl mx-auto">
                {/* Back Button */}
                <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block transition-all">
                    ← Back to Projects
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4">
                    {/* Left Side: Image */}
                    <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-2xl shadow-cyan-900/20">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Right Side: Details */}
                    <div className="flex flex-col justify-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            {project.title}
                        </h1>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tech, index) => (
                                <span key={index} className="px-3 py-1 bg-cyan-950/30 border border-cyan-800 text-cyan-400 rounded-full text-xs font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            {project.description}
                        </p>

                        {/* Features List */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Key Features</h3>
                            <ul className="space-y-2">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-2 text-gray-300">
                                        <span className="text-cyan-500 mt-1">✔</span> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <a 
                                href={project.liveLink} 
                                target="_blank"
                                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-bold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all active:scale-95"
                            >
                                Live Demo
                            </a>
                            <a 
                                href={project.gitLink} 
                                target="_blank"
                                className="px-8 py-3 border border-gray-700 hover:border-cyan-500 rounded-lg font-bold transition-all text-gray-300 hover:text-white"
                            >
                                View Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;