import {
  FaHtml5,
  FaCss3Alt,
  FaSquareJs,
  FaReact
} from "react-icons/fa6";
import {
  RiTailwindCssFill,
  RiNodejsLine
} from "react-icons/ri";
import { SiMongodb, SiExpress } from "react-icons/si";

const Skills = () => {
  
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 size='30' className='text-[#EB3400]'/>,
      lavel: 98,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt size='30' className='text-[#006FFF]'/>,
      lavel: 95,
    },
    {
      name: "JavaScript",
      icon: <FaSquareJs size='30' className='text-[#FFD70A]'/>,
      lavel: 85,
    },
    {
      name: "ReactJs",
      icon: <FaReact size='30' className='text-[#00ABFF]'/>,
      lavel: 90,
    },
    {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill size='30' className='text-[#0077FF]'/>,
    lavel: 80,
    },
    {
    name: "NodeJs",
    icon: <RiNodejsLine size='30' className='text-[#339933]'/>,
    lavel: 85,
    },
    {
      name: "ExpressJs",
      icon: <SiExpress size='35' className='text-zinc-900'/>,
      lavel: 80,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size='35' className='text-[#47A248]'/>,
      lavel: 75
    }
    ]
  
  return (
    <div className="bg-gradient-to-br from-[#340031] to-[#004500]">
    <div className='bg-gradient-to-bl from-[#007AFF55] to-[#FF5A0055]'>
    <div className='bg-gradient-to-tr from-[#0000aa44] to-[#aa000044] py-12'>
    <h1 className='text-center text-3xl font-bold text-white'>My Skills</h1>
    <div className='w-4/5 max-w-[600px] mx-auto my-[1rem]'>
    <h2 className ='text-2xl font-semibold underline text-center text-yellow-500'>Technical Skills</h2>
    {
      skills.map((skill, i) => {
        return (
        <div key={i} className='text-2xl font-semibold bg-gray-700 w-full py-[0.5rem] border-[3px] border-gray-500 rounded-xl my-[1rem] shadow-lg'>
        <div className='flex my-[0.5rem]'>
        <p className='mx-[1rem]' aria-label={`${skill.name} icon`}>{skill.icon}</p>
        <h3 className='mx-[1rem] text-[#FFffFF]'>{skill.name}</h3>
        </div>
        <div className="bg-[#123] w-[95%] mx-auto rounded-lg">
        <div className={`${skill.lavel >= 70 ? 'bg-green-500' : 'bg-yellow-500'} h-[0.9rem] rounded-md relative`} style={{width: `${skill.lavel}%`}}>
        <p className={`text-sm text-zinc-100 absolute top-[-3px] right-2`}>{skill.lavel}%</p>
        </div>
        </div>
        </div>
        )
      })
    }
    </div>
    </div>
    </div>
    </div>
  );
};

export default Skills;
