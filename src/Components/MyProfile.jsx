import profile from "../assets/profile.jpg";
import { useState } from "react";
import { 
  FaGithub, 
  FaFacebook, 
  FaXTwitter, 
  FaFreeCodeCamp, 
  FaYoutube, 
  FaNodeJs 
} from "react-icons/fa6";
import { SiExpress, SiMongodb } from "react-icons/si";

const MyProfile = () => {
  const urls = [
    "https://github.com/mdaleardc",
    "https://www.facebook.com/mdaismail.it",
    "https://x.com/MdIsmail5851415",
    "https://www.freecodecamp.org/fcc16f33cf9-7123-482a-9eb5-a58767a48619",
  ];

  const [url, setUrl] = useState("");
  const randomUrl = urls[Math.floor(Math.random() * urls.length)];
  const handleClick = () => setUrl(randomUrl);

  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-5 justify-center items-center bg-gradient-to-r from-violet-700 to-fuchsia-800 text-white py-[20px]">
        {/* Bio Section */}
        <div className="col-span-2 sm:col-span-3 grid grid-rows gap-y-[10px] px-[10px]">
          <p className="max-w-md mx-auto text-justify leading-relaxed indent-8">
            Welcome to my portfolio! I'm a <span>Full-Stack Developer </span> 
            passionate about building dynamic and efficient web applications. My journey 
            began as a <span>Primary Teacher</span>, where I honed problem-solving 
            and communication skills. Over time, I transitioned into software 
            development, mastering <span>HTML, CSS, JavaScript</span>, and <span>Tailwind CSS</span>.
          </p>
          <p className="max-w-md mx-auto text-justify leading-relaxed indent-8">
            On the front-end, I specialize in responsive UI design with 
            <span> React.js </span> and <span>Tailwind CSS</span>. On the back-end, 
            I develop scalable APIs using <span>Node.js</span> <FaNodeJs className="inline text-green-500" />,
            <span> Express.js</span> <SiExpress className="inline text-gray-400" />, and manage databases with 
            <span> MongoDB</span> <SiMongodb className="inline text-green-700" />.
          </p>
          <p className="max-w-md mx-auto text-justify leading-relaxed indent-8">
            I love learning new technologies and solving complex problems. 
            Feel free to browse my work and connect with me!
          </p>
        </div>

        {/* Profile Image & Links */}
        <div className="flex flex-col justify-center items-center gap-y-[50px] col-span-1 sm:col-span-2 mx-auto">
          <img 
            src={profile} 
            alt="Profile Picture" 
            className="w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] object-cover rounded-full border-[3px] border-[#00B008] shadow-md shadow-green-500/50 hover:shadow-2xl hover:shadow-green-500/50"
          />
          
          <div className="mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl font-semibold sm:font-bold text-[#00FFFF]">
              Hello, this is me! Mohammed Ismail
            </h1>
            <p>A modern Full-Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-[0.5rem] flex-wrap sm:gap-[1rem] w-full justify-center items-center">
            <a href="https://github.com/mdaleardc" target="_blank">
              <FaGithub size="25" className="text-black hover:bg-black hover:text-[#0ef] rounded-full"/>
            </a>
            <a href="https://www.facebook.com/mdaismail.it" target="_blank">
              <FaFacebook size="25" className="text-blue-700 hover:bg-black hover:text-[#0ef] rounded-full"/>
            </a>
            <a href="https://x.com/MdIsmail5851415" target="_blank">
              <FaXTwitter size="25" className="text-black hover:bg-black hover:text-[#0ef] rounded-full"/>
            </a>
            <a href="https://youtube.com/@my-xk9fl?si=lhEC8_ACqptGqZj5" target="_blank">
              <FaYoutube size="25" className="text-red-700 hover:bg-black hover:text-[#0ef] rounded-full"/>
            </a>
            <a href="https://www.freecodecamp.org/fcc16f33cf9-7123-482a-9eb5-a58767a48619" target="_blank" className="hidden sm:block">
              <FaFreeCodeCamp size="25" className="text-black hover:bg-black hover:text-[#0ef] rounded-full"/>
            </a>
          </div>

          {/* More About Me Button */}
          <a href={url} onClick={handleClick} target="_blank">
            <button className="border-[2px] rounded-md p-[5px] bg-[#0080FF] border-[#0090ff] hover:text-[#ff00ff] hover:bg-[#00ffff]">
              More About Me
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default MyProfile;