import { 
  FaHtml5, 
  FaCss3Alt, 
  FaReact,
  FaNodeJs 
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { 
  SiMongodb, 
  SiExpress,
  SiNextdotjs,
  SiJavascript 
} from "react-icons/si";
import { useState } from "react";

const Skills = () => {
  const skills = [
    {
      name: "Next.js",
      icon: SiNextdotjs,
      level: 92,
      color: "text-white",
      bgColor: "bg-black",
      category: "Full-Stack",
      description: "SSG, SSR, API Routes, App Router"
    },
    {
      name: "React",
      icon: FaReact,
      level: 90,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/20",
      category: "Frontend",
      description: "Hooks, Context, Performance Optimization"
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      level: 88,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
      category: "Programming",
      description: "ES6+, Async/Await, Modern Patterns"
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      level: 85,
      color: "text-green-500",
      bgColor: "bg-green-500/20",
      category: "Backend",
      description: "REST APIs, Authentication, Middleware"
    },
    {
      name: "HTML5",
      icon: FaHtml5,
      level: 95,
      color: "text-orange-500",
      bgColor: "bg-orange-500/20",
      category: "Frontend",
      description: "Semantic HTML, Accessibility, SEO"
    },
    {
      name: "CSS3",
      icon: FaCss3Alt,
      level: 90,
      color: "text-blue-500",
      bgColor: "bg-blue-500/20",
      category: "Frontend",
      description: "Flexbox, Grid, Animations, Responsive"
    },
    {
      name: "Tailwind CSS",
      icon: RiTailwindCssFill,
      level: 88,
      color: "text-cyan-300",
      bgColor: "bg-cyan-500/20",
      category: "Frontend",
      description: "Utility-first, Components, Dark Mode"
    },
    {
      name: "Express.js",
      icon: SiExpress,
      level: 82,
      color: "text-gray-300",
      bgColor: "bg-gray-500/20",
      category: "Backend",
      description: "Routing, Middleware, Error Handling"
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      level: 78,
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      category: "Database",
      description: "Mongoose, Aggregation, Indexing"
    }
  ];

  const categories = ["All", "Full-Stack", "Frontend", "Backend", "Database", "Programming"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getProgressColor = (level) => {
    if (level >= 90) return "bg-gradient-to-r from-green-500 to-cyan-500";
    if (level >= 80) return "bg-gradient-to-r from-cyan-500 to-blue-500";
    if (level >= 70) return "bg-gradient-to-r from-yellow-500 to-orange-500";
    return "bg-gradient-to-r from-red-500 to-pink-500";
  };

  return (
    <section id="skills" className="relative min-h-screen py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My proficiency across the full-stack development spectrum, with specialized focus on modern web technologies
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-white/5 text-gray-300 border border-white/10 hover:border-cyan-400/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-2xl ${skill.bgColor} border border-white/10`}>
                    <skill.icon className={`text-2xl ${skill.color}`} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                    <span className="text-cyan-400 text-sm">{skill.category}</span>
                  </div>
                </div>
                <span className="text-2xl font-bold text-white">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="mb-3">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${getProgressColor(skill.level)}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>

              {/* Experience Level Indicator */}
              <div className="flex items-center gap-2 mt-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i < Math.floor(skill.level / 20)
                          ? "bg-cyan-400"
                          : "bg-gray-600"
                      }`}
                    ></div>
                  ))}
                </div>
                <span className="text-xs text-gray-400">
                  {skill.level >= 90 ? "Expert" : 
                   skill.level >= 80 ? "Advanced" : 
                   skill.level >= 70 ? "Proficient" : "Intermediate"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-2xl border border-cyan-400/20 p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">9+</div>
              <div className="text-gray-300">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
              <div className="text-gray-300">Average Proficiency</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">2+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;