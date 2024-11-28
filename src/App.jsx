import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Contact from "./Components/Contact"
import Footer from "./Components/Footer";



const  App =() =>{

  return (
    <>
      <div>
      <BrowserRouter>
      <Navbar />
      
      <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      
      </Routes>
      
      <Footer />
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
