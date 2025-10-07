import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
} from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiNextdotjs, SiJavascript } from "react-icons/si";

const About = () => {
  const technologies = [
    { icon: SiNextdotjs, name: "Next.js", color: "text-white" },
    { icon: SiJavascript, name: "JavaScript", color: "text-[#F7DF1E]" },
    { icon: FaReact, name: "React", color: "text-cyan-400" },
    { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
    { icon: SiExpress, name: "Express.js", color: "text-green-600" },
    { icon: RiTailwindCssFill, name: "Tailwind CSS", color: "text-cyan-300" },
    { icon: FaAws, name: "AWS", color: "text-orange-400" },
    { icon: FaGitAlt, name: "Git", color: "text-orange-500" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl leading-relaxed text-gray-200">
                Hello! I&apos;m <span className="text-cyan-400 font-semibold">Mohammed Ismail </span>, 
                a <span className="text-blue-400 font-semibold">Next.js Full-Stack Developer </span> 
                with a unique background in education. My journey from teaching to tech has equipped 
                me with exceptional problem-solving abilities and a user-centric approach to development.
              </p>

              <p className="text-lg leading-relaxed text-gray-300">
                I specialize in building modern, scalable web applications using cutting-edge technologies. 
                My expertise spans the entire development stack, from crafting responsive UI/UX with 
                React and Tailwind CSS to architecting robust backend systems with Node.js and MongoDB.
              </p>

              <p className="text-lg leading-relaxed text-gray-300">
                What sets me apart is my ability to bridge technical requirements with user needs, 
                creating solutions that are not only technically sound but also intuitive and engaging. 
                I&apos;m passionate about writing clean, maintainable code and staying current with industry trends.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex gap-4 pt-4">
              <a 
                href="/about" 
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                View Full Portfolio
              </a>
              <a 
                href="/contact" 
                className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Technologies Grid */}
          <div className="lg:pl-12">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center lg:text-left">
              Core Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-4 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-cyan-400/30"
                >
                  <div className="flex flex-col items-center text-center">
                    <tech.icon className={`text-3xl mb-2 ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-sm font-medium text-gray-200 group-hover:text-white">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">2+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;