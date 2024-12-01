import profile from "../assets/profile.jpg";
import { useState, useEffect } from "react";
import { FaGithub, FaFacebook, FaXTwitter, FaFreeCodeCamp, FaYoutube } from "react-icons/fa6";


const MyProfile = () => {
  
  const urls = ['https://github.com/mdaleardc', 'https://www.facebook.com/mdaismail.it', 'https://x.com/MdIsmail5851415', 'https://www.freecodecamp.org/fcc16f33cf9-7123-482a-9eb5-a58767a48619'];
  
  const [url, setUrl] = useState("");
  const randomeUrl = urls[Math.floor(Math.random() * urls.length)];
  const handleClick = () => {
    setUrl(randomeUrl);
}
  
  return (
    <>
    <div className='grid grid-cols-3 sm:grid-cols-5 justify-center items-center bg-gradient-to-r from-violet-700 to-fuchsia-800 text-white py-[20px]'>
    <div className='col-span-2 sm:col-span-3 grid grid-rows gap-y-[10px] px-[10px]'>
    <p className='max-w-md mx-auto text-justify leading-relaxed indent-8'>
    Welcome to my portfolio! I'm currently <span>Primary Teacher</span> exploring opportunities in <span>Web Development</span>. My journey into technology began with a curiosity to create and solve problems through code. I've learned and applied skills like <span>HTML, CSS, JavaScript,</span> and <span>Tailwind CSS</span> to build interactive and functional projects.
    </p>
    <p className='max-w-md mx-auto text-justify leading-relaxed indent-8'>
    I enjoy learning new tools and experimenting with design to improve user experiences. This portfolio showcases my growing skills and projects as I continue exploring the tech world.
    </p>
    <p className='max-w-md mx-auto text-justify leading-relaxed indent-8'>
    Feel free to browse my work and connect with me.
    </p>
    </div>
    <div className='flex flex-col justify-center items-center gap-y-[50px] col-span-1 sm:col-span-2 mx-auto'>
    <img src={profile} alt='profile picture' className='w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] object-cover rounded-full border-[3px] border-[#00B008] shadow-md shadow-green-500/50 hover:shadow-2xl hover:shadow-green-500/50'/>
    <div className='mx-auto'>
    <h1 className='text-2xl sm:text-3xl font-semibold sm:font-bold text-[#00FFFF]'>Hello, this is me! Mohammed Ismail</h1>
    <p>A modern Front-End Web Developer</p>
    </div>
    
    <div className='flex gap-[0.5rem] flex-wrap sm:gap-[1rem] w-full justify-center items-center'>
    <a href='https://github.com/mdaleardc'><FaGithub size='25' className='text-black hover:bg-black hover:text-[#0ef] rounded-full' target="_blank"/></a>
    <a href='https://www.facebook.com/mdaismail.it'><FaFacebook size='25' className='text-blue-700 hover:bg-black hover:text-[#0ef] rounded-full' target="_blank"/></a>
    <a href='https://x.com/MdIsmail5851415'><FaXTwitter size='25' className='text-black hover:bg-black hover:text-[#0ef] rounded-full' target="_blank" /></a>
    <a href='https://youtube.com/@my-xk9fl?si=lhEC8_ACqptGqZj5'><FaYoutube size='25' className='text-red-700 hover:bg-black hover:text-[#0ef] rounded-full' target="_blank" /></a>
    <a href='https://www.freecodecamp.org/fcc16f33cf9-7123-482a-9eb5-a58767a48619'><FaFreeCodeCamp size='25' className='text-black hover:bg-black hover:text-[#0ef] rounded-full hidden sm:block' target="_blank" /></a>
    </div>
    <a href={url} onClick={handleClick} target="black"><button className='border-[2px] rounded-md p-[5px] bg-[#0080FF] border-[#0090ff] hover:text-[#ff00ff] hover:bg-[#00ffff]'>More About Me</button></a>
    </div>
    </div>
    </>
    )
}

export default MyProfile;