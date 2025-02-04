import {
  FaHtml5,
  FaCss3Alt,
  FaSquareJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";

const About = () => {
  return (
    <div className="py-[3.3rem] bg-gradient-to-tr from-[#611] to-[#125]">
      <h1 className="text-4xl text-[#0ef] text-center font-semibold w-fit mx-auto underline p-4">
        About Me
      </h1>
      <div className="text-white text-lg flex flex-col gap-6 px-6">
        <p className="indent-8 max-w-lg mx-auto text-justify leading-relaxed">
          Hi, I'm Mohammed Ismail, a full-stack developer passionate about
          building dynamic and user-friendly web applications. My journey into
          web development began as a primary teacher, where I developed strong
          problem-solving and communication skills. Over time, I discovered my
          love for technology and started teaching myself{" "}
          <span>
            HTML <FaHtml5 className="inline text-[#FF2E00] rounded" />
          </span>
          ,{" "}
          <span>
            CSS <FaCss3Alt className="inline text-[#002Eff] rounded" />
          </span>
          , and{" "}
          <span>
            JavaScript <FaSquareJs className="inline text-[#feFa00] rounded" />
          </span>
          , which opened up a world of possibilities for me.
        </p>

        <p className="indent-8 max-w-lg mx-auto text-justify leading-relaxed">
          I enjoy turning ideas into real, interactive experiences that leave a
          lasting impression. My core strengths include adaptability,
          creativity, and the ability to learn and grow quickly. On the
          front-end, I specialize in building responsive layouts with{" "}
          <span>
            Tailwind CSS{" "}
            <RiTailwindCssFill className="inline text-[#0094FF] rounded" />
          </span>{" "}
          and creating seamless user interfaces with{" "}
          <span>
            ReactJS <FaReact className="inline text-[#00a9ff] rounded" />
          </span>
          .
        </p>

        <p className="indent-8 max-w-lg mx-auto text-justify leading-relaxed">
          To enhance my skills further, I have delved into back-end development,
          where I build scalable APIs using{" "}
          <span>
            Node.js <FaNodeJs className="inline text-[#76b852] rounded" />
          </span>{" "}
          and{" "}
          <span>
            Express.js <SiExpress className="inline text-[#aaa] rounded" />
          </span>
          . For data storage and management, I work with{" "}
          <span>
            MongoDB <SiMongodb className="inline text-[#4DB33D] rounded" />
          </span>{" "}
          and{" "}
          <span>
            databases <FaDatabase className="inline text-[#f0db4f] rounded" />
          </span>
          . My goal is to create robust full-stack applications that efficiently
          handle both client and server-side interactions.
        </p>

        <p className="indent-8 max-w-lg mx-auto text-justify leading-relaxed">
          When I'm not coding, you will find me exploring new teaching
          techniques, contributing to community projects, or deepening my
          knowledge of cloud technologies. I'm always eager to learn new
          technologies and refine my skills to build impactful digital
          experiences.
        </p>

        <button className="max-w-sm rounded-sm bg-gray-700 text-white font-semibold block text-center mx-auto p-2">
          <a href="/about">More About Me</a>
        </button>
      </div>
    </div>
  );
};

export default About;