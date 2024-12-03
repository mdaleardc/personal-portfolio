import { GiAchievement } from "react-icons/gi";
import RWD from "../assets/responsive_web.jpg";
import JADS from "../assets/javaScript_data_structure.jpg";
import JADSB from "../assets/javaScript_data_structure(beta).jpg";
import FEDL from "../assets/front-end.jpg";

const Achievements = () => {
  
  const achievementsData = [
    {
      name: "Responsive Web Design Certificate",
      csc: RWD,
      url: "https://www.freecodecamp.org/certification/fccd7a29415-55b6-4d72-8159-33bbf2f7e102/responsive-web-design",
    },
    {
      name: "JavaScript Algorithm and Data Structure",
      csc: JADS,
      url: "https://www.freecodecamp.org/certification/fccd7a29415-55b6-4d72-8159-33bbf2f7e102/javascript-algorithms-and-data-structures",
    },
    {
      name: "JavaScript Algorithm and Data Structure (Beta)",
      csc: JADSB,
      url: "https://www.freecodecamp.org/certification/fccd7a29415-55b6-4d72-8159-33bbf2f7e102/javascript-algorithms-and-data-structures-v8",
    },
    {
      name: "Front-End Development Libraries",
      csc: FEDL,
      url: "https://www.freecodecamp.org/certification/fccd7a29415-55b6-4d72-8159-33bbf2f7e102/front-end-development-libraries",
    }
    ];
  
  
  return (
    <div className='py-[1rem] bg-gradient-to-r from-[#124] to-[#342]'>
    <h1 className='text-4xl text-white text-center my-[1rem]'>Achievements <GiAchievement className='inline text-[#0ef]' size='35'/></h1>
    <div className='w-4/5 grid sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-[1rem]'>
    {
      achievementsData.map((achievement, index) => {
        return (
        <div key={index} className='mx-auto bg-gray-700 rounded-lg text-white pb-4 border-[3px] border-gray-400'>
        <img src={achievement.csc} alt={`${achievement.name} screen shot`} className='rounded-md'/>
        <h2 className='text-2xl font-semibold text-[#0ef] m-2'>{achievement.name}</h2>
        <a href={achievement.url} target='_blank' className='cursor-pointer p-4 hover:text-[#2fa] text-xl acitive:text-red-500'>Learn more</a>
        </div>
        )
      })
    }
    </div>
    </div>
    )
}

export default Achievements;