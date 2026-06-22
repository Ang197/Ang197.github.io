import { useRef } from 'react'
import useVisible from './visible.jsx'

export default function About() {
    const ref = useRef();
    const isVisible = useVisible(ref);
    return (
        <div className="text-white py-20" id="about">
            <div ref={ref} className={`container mx-auto px-8 md:px-16 lg:px-32 transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <div className="flex-1">
                        <p className="text-xl mb-9">
                            Entry-level Web developer with experience in full stack engineering. 
                            As a recent graduate from San Francisco State University,
                            I specialize in building modern and responsive web applications with tools such as React/NextJS,
                            ExpressJS, and Postgresql.
                            In my free time, I enjoy digital drawing and playing games like Pokemon Go!
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <label htmlFor="htmlandcss" className="w-3/12">
                                    HTML & CSS
                                </label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div
                                        className="bg-linear-to-r from-green-400 to-blue-500 h-2.5
                                        rounded-full transform transition-transform duration-200 hover:scale-105
                                        animate-[loadBar1_2s_ease-out_forwards]"
                                    ></div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="htmlandcss" className="w-3/12">
                                    React
                                </label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div
                                        className="bg-linear-to-r from-yellow-400 to-pink-500 h-2.5 rounded-full
                                            transform transition-transform duration-200 hover:scale-105
                                            animate-[loadBar2_2s_ease-out_forwards]"
                                    ></div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="htmlandcss" className="w-3/12">
                                    JavaScript
                                </label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div
                                        className="bg-linear-to-r from-orange-400 to-green-500 h-2.5 rounded-full
                                            transform transition-transform duration-200 hover:scale-105
                                            animate-[loadBar3_2s_ease-out_forwards]"
                                    ></div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="htmlandcss" className="w-3/12">
                                    Python
                                </label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div
                                        className="bg-linear-to-r from-amber-400 to-cyan-500 h-2.5 rounded-full
                                            transform transition-transform duration-200 hover:scale-105
                                            animate-[loadBar4_2s_ease-out_forwards]"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 flex justify-between text-center">
                            <div>
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text
                                    bg-linear-to-r from-green-400 to-blue-500">
                                    3
                                </h3>
                                <p>Months Experience</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text
                                    bg-linear-to-r from-red-400 to-purple-500">
                                   5 
                                </h3>
                                <p>Proficient Coding Languages</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};