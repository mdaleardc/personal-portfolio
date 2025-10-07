import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import AllComponents from "./components/AllComponents";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import NotFoundPage from "./components/404Page";



const  App =() =>{

  return (
    <>
      <div>
      <BrowserRouter>
      <Navbar />
      
      <Routes>
      
      <Route path="/" element={<AllComponents />} />
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      
      <Route path="*" element={<NotFoundPage />} />
      </Routes>
      
      <Footer />
      </BrowserRouter>
      </div>
    </>
  )
}

export default App
