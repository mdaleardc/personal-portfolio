import {
  FaHtml5,
  FaCss3Alt,
  FaSquareJs,
  FaReact
} from "react-icons/fa6";
import {
  RiTailwindCssFill
} from "react-icons/ri";




const About = () => {
  
  
  
  return (
    <div  className='py-[3.3rem] bg-gradient-to-tr from-[#611] to-[#125]'>
    <h1 className='text-4xl text-[#0ef] text-center font-semibold w-fit mx-auto underline p-4'>About Me</h1>
    <div className='text-white text-lg flex flex-col gap-6 px-6'>
    <p className='indent-8 max-w-lg mx-auto text-justify leading-relaxed'>
    Hi, I'm Mohammed Ismail, a front-end developer with a passion for crafting beautiful and user-friendly websites, My journey into web development began as a primary teacher, where I developed strong problem-solving and communication skills. Over time, I discovered my love for technology and started teaching myself <span>HTML <FaHtml5 className='inline text-[#FF2E00] rounded'/></span>, <span>CSS <FaCss3Alt className='inline text-[#002Eff] rounded'/></span>, and <span>JavaScript <FaSquareJs className='inline text-[#feFa00] rounded'/></span>, which unlocked a whole new world of possibilities for me. 
    </p>
    
    <p className='indent-8 max-w-lg mx-auto text-justify leading-relaxed'>
    I enjoy turning ideas into real, interactive experience that leave a lasting impression. My core strengths include adaptability, creativity, and the ability to learn and grow quickly. Whether it's building responsive layouts with <span>Tailwind_CSS <RiTailwindCssFill className='inline text-[#0094FF] rounded'/></span> or creating seamless user interface with <span>ReactJS <FaReact className='inline text-[#00a9ff] rounded'/></span>, I love solving problems and continuously expanding  my knowledge.
    </p>
    
    <p className='indent-8 max-w-lg mx-auto text-justify leading-relaxed'>
    When I'm not coding, you will find me exploring new teaching techniques, contributing community projects or learning more about back-end technologies to become a full-stack developer.
    </p>
    
    <p className='indent-8 max-w-lg mx-auto text-justify leading-relaxed'>
    I'm excited about where this journey will take next. My goal is to create impactful digital experience and contribute to projects that make a difference. 
    </p>
    <button className='max-w-sm rounded-sm bg-gray-700 text-white text-semibold block text-center mx-auto p-2'><a href='/about'>More About Me</a></button>
    </div>
    </div>
    )
}

export default About;