import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
    return(
        <>
            <nav className="text-white z-1 bg-black flex top-0 sticky justify-center px-8 md:px-16 lg:px-24">
                <div className="container py-2 flex justify-center md:justify-between items-center">
                    <div className="flex space-x-4 md:my-0 text-3xl">
                        <a target="_blank" href="https://github.com/Ang197" className="text-gray-400 hover:text-white">
                            <FaGithub/>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/angelo-lance/" className="text-gray-400 hover:text-white">
                            <FaLinkedin/>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}