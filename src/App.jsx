import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import { useEffect } from 'react'

export default function App() {
  useEffect(()=>{
    window.scrollTo(0, 0)
  });

  return (
    <div className="bg-linear-to-b from-[#121731] to-black m-0 bg-no-repeat bg-fixed">
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  )
}