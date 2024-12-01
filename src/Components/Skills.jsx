import {
  FaHtml5,
  FaCss3Alt,
  FaSquareJs,
  FaReact
} from "react-icons/fa6";
import {
  RiTailwindCssFill
} from "react-icons/ri";

const Skills = () => {
  
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 size='30' className='text-[#EB3400]'/>,
      lavel: 99,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt size='30' className='text-[#006FFF]'/>,
      lavel: 90,
    },
    {
      name: "JavaScript",
      icon: <FaSquareJs size='30' className='text-[#FFD70A]'/>,
      lavel: 85,
    },
    {
      name: "ReactJs",
      icon: <FaReact size='30' className='text-[#00ABFF]'/>,
      lavel: 80,
    },
    {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill size='30' className='text-[#0077FF]'/>,
    lavel: 75,
    }
    ]
  
  return (
    <div className="py-12 bg-gradient-to-br from-[#340031] to-[#004500]">
    <h1 className='text-center text-3xl font-bold text-white'>My Skills</h1>
    <div className='w-4/5 max-w-[600px] mx-auto my-[1rem]'>
    <h2 className ='text-2xl font-semibold underline text-center text-yellow-500'>Technical Skills</h2>
    {
      skills.map((skill, i) => {
        return (
        <div key={i} className='text-2xl font-semibold bg-gray-700 w-full py-[0.5rem] border-[3px] border-gray-500 rounded-xl my-[1rem] shadow-lg'>
        <div className='flex my-[0.5rem]'>
        <p className='mx-[1rem]' aria-label={`${skill.name} icon`}>{skill.icon}</p>
        <h3 className='mx-[1rem] text-[#FF00FF]'>{skill.name}</h3>
        </div>
        <div className="bg-[#111] w-[95%] mx-auto rounded-lg">
        <div className="bg-[#33ffff] h-[0.9rem] rounded-md relative" style={{width: `${skill.lavel}%`}}>
        <p className={`text-sm text-white absolute top-[-3px] right-0`}>{skill.lavel}%</p>
        </div>
        </div>
        </div>
        )
      })
    }
    </div>
    </div>
  );
};

export default Skills;