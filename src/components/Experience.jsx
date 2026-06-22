import { useRef } from 'react'
import useVisible from './visible.jsx'

const experience = [
    {
        id: 1,
        name: "Full Stack Engineer Intern",
        stack: "JavaScript, Puppeteer, Grok, SupaBase",
        time: "March 2025 - May 2025",
        description: `Developed an AI-driven navigation system to aggregate real estate listings from 20+ websites. 
                      Designed and implemented 5 modular core components, focusing on sclability, 
                      clean architecture, and maintainability.`
    },
    {
        id: 2,
        name: "IT Specialist",
        time: "January 2025 - March 2025",
        description: `Contributed technical support to 110+ households, resolving device, network, and software issues.
                        Repaired hardware and software problems, including OS updates, resets, and virus removals.
                        Reduced repeated incidents through teaching digital literacy, providing easy-to-read documentation, and one-on-one training.`
    },
]

export default function project(){
    const ref = useRef();
    const isVisible = useVisible(ref);
    
    return(
        <div className="text-white py-20" id="project">
            <div ref={ref} className={`container mx-auto px-8 md:px-16 lg:px-24 transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                <h2 className="text-4xl font-bold text-center mb-12">My experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experience.map((project) => (
                        <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg
                        transform transition-transform duration-300 hover:scale-105">
                            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                            <div className="inline-flex space-x-1.5">
                                {project.stack ?
                                    <>
                                        <p className="font-bold">Tech Stack:</p>
                                        <p className="text-gray-300 mb-4">{project.stack}</p>
                                    </>
                                    :
                                    <>
                                    </>
                                }
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