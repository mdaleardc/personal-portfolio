 import MyProfile from "./MyProfile"
import Projects from "./Projects"
import Skills from "./Skills"
import Achievements from "./Achievements"
import About from "./About"
import Contact from "./Contact"

 
 
 const Home = () => {
  return (
    <div className='mt-[3rem]'>
    <MyProfile />
    <Projects />
    <Skills />
    <Achievements />
    <About />
    <Contact />
    </div>
    )
}


export default Home;

