import { useRef } from 'react'
import useVisible from './visible.jsx'

const projects = [
    {
        id: 1,
        name: "Pharmacy Bot",
        stack: "Python, AWS(EC2 Instance), MySQL",
        time: "January 2023 - May 2023",
        description: `Discord bot that acts a pharmaceutical database. Designed to hold
                      29 different entries with 50+ attributes, using MySQL with an enhanced
                      ER model for more complex structures for all relationships. Allowed
                      continous runtime using Amazon Web Service's EC2 features.`
    },
    {
        id: 2,
        name: "Align",
        stack: "Vite-React, Tailwind",
        time: "January 2024 - May 2024",
        description:`Frontend lead on an AI-powered web application, 
                     designed to generate projects for college students 
                     based on their career paths. Led a three person team,
                     conducting weekly code reviews, and teaching best practices
                     for using the React Library.`
    },
    {
        id: 3,
        name: "Comic E-Reader",
        stack: "Vite-React, PostgreSQL, Node, Express",
        time: "April 2026 - Present",
        description: `Passion Project to create an interactive comicbook e-reader.
                      Able to upload a set of images for any comic issue or volume,
                      and immerse with an animated frontend by having flippable pages
                      from front to back cover.`
    }
]

export default function project(){
    const ref = useRef();
    const isVisible = useVisible(ref);
    return(
        <div className="text-white py-20" id="project">
            <div ref={ref} className={`container mx-auto px-8 md:px-16 lg:px-24 transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg
                        transform transition-transform duration-300 hover:scale-105">
                            <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                            <div className="inline-flex space-x-1.5">
                                <p className="font-bold">Tech Stack:</p>
                                <p className="text-gray-300 mb-4">{project.stack}</p>
                            </div>
                            <div className="inline-flex space-x-1.5">
                                <p className="font-bold">Active Date:</p>
                                <p className="text-gray-300 mb-4">{project.time}</p>
                            </div>
                            <div className="inline-flex space-x-1.5">
                                <p className="font-bold">Description:</p>
                                <p className="text">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}