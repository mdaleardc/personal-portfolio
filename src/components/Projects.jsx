import { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaEye, FaCode } from "react-icons/fa";
import { SiNextdotjs, SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";

import yummyFood from "../assets/yummy-food.jpg";
import ecomerce from "../assets/ecomerce.jpg";
import todoList from "../assets/todo-list.jpg";
import youtube_clone from "../assets/youtube_clone_thumbnail.jpg";
import bookStoreThumnail from "../assets/bookStoreThumnail.jpg";
import blood_donation from "../assets/blood_donation.jpg";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const projectData = [
    {
      id: 1,
      name: "Yummy Food App",
      img: yummyFood,
      description: "A modern recipe discovery platform featuring quick meals, dietary filters, and personalized recommendations. Built with responsive design for seamless cooking experience.",
      url: "https://yummmyfoods.netlify.app/",
      github: "https://github.com/yourusername/yummy-food",
      technologies: [SiReact, SiTailwindcss],
      category: "Frontend",
      featured: false
    },
    {
      id: 2,
      name: "ShopEase E-Commerce",
      img: ecomerce,
      description: "Full-stack e-commerce solution with product catalog, shopping cart, user authentication, and secure payment integration.",
      url: "https://eshipify.netlify.app/",
      github: "https://github.com/yourusername/ecommerce",
      technologies: [SiNextdotjs, SiNodedotjs, SiMongodb],
      category: "Full-Stack",
      featured: true
    },
    {
      id: 3,
      name: "TaskFlow Productivity App",
      img: todoList,
      description: "Advanced task management application with drag-drop functionality, priority levels, deadlines, and progress tracking.",
      url: "https://todolistaapwebdev.netlify.app/",
      github: "https://github.com/yourusername/taskflow",
      technologies: [SiReact, SiTailwindcss],
      category: "Frontend",
      featured: false
    },
    {
      id: 4,
      name: "Myanmar Books Hub",
      img: bookStoreThumnail,
      description: "Full-stack educational platform providing free Myanmar curriculum textbooks for grades 1-12. Features user authentication, book management, download tracking, and admin dashboard.",
      url: "https://mmbookshub.netlify.app/",
      github: "https://github.com/yourusername/myanmar-books-hub",
      technologies: [SiNextdotjs, SiNodedotjs, SiMongodb, SiExpress],
      category: "Full-Stack",
      featured: true,
      nextjsFullStack: true
    },
    {
      id: 5,
      name: "VitalDrop Blood Donation",
      img: blood_donation,
      description: "Life-saving platform connecting donors with recipients. Features real-time matching, location services, and emergency request system.",
      url: "https://vitaldrop.vercel.app",
      github: "https://github.com/yourusername/vitaldrop",
      technologies: [SiNextdotjs, SiNodedotjs, SiMongodb],
      category: "Full-Stack",
      featured: true
    },
    {
      id: 6,
      name: "YouTube Clone",
      img: youtube_clone,
      description: "Feature-rich video streaming interface mimicking YouTube's core functionality. Includes video player, comments, and responsive layout.",
      url: "https://youtube-clone-flax-seven.vercel.app",
      github: "https://github.com/yourusername/youtube-clone",
      technologies: [SiReact, SiTailwindcss],
      category: "Frontend",
      featured: false
    }
  ];

  const categories = ["All", "Full-Stack", "Frontend", "Featured", "Next.js"];

  const filteredProjects = activeFilter === "All" 
    ? projectData 
    : activeFilter === "Featured"
    ? projectData.filter(project => project.featured)
    : activeFilter === "Next.js"
    ? projectData.filter(project => project.technologies.includes(SiNextdotjs))
    : projectData.filter(project => project.category === activeFilter);

  const TechnologyIcon = ({ icon: Icon, index }) => (
    <Icon key={index} className="text-lg text-cyan-400" />
  );

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of my recent work showcasing full-stack capabilities with Next.js and modern web development practices
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-white/5 text-gray-300 border border-white/10 hover:border-cyan-400/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <div className={`
                relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 
                overflow-hidden transition-all duration-500 ease-out h-full
                ${hoveredProject === project.id 
                  ? 'transform scale-105 border-cyan-400/30 shadow-2xl shadow-cyan-500/20' 
                  : 'hover:border-white/20'}
                ${project.featured ? 'ring-2 ring-cyan-400/20' : ''}
                ${project.nextjsFullStack ? 'ring-2 ring-yellow-400/20' : ''}
              `}>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                  {project.featured && (
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-bold rounded-full">
                      Featured
                    </span>
                  )}
                  {project.nextjsFullStack && (
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">
                      Next.js Full-Stack
                    </span>
                  )}
                  {project.category === "Full-Stack" && !project.nextjsFullStack && (
                    <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs font-bold rounded-full">
                      Full-Stack
                    </span>
                  )}
                </div>

                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`}>
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                      title="View Code"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Technologies */}
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {project.technologies.map((TechIcon, index) => (
                      <TechnologyIcon key={index} icon={TechIcon} />
                    ))}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                    {project.name}
                  </h3>

                  {/* Project Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Project Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className={`text-sm font-medium px-2 py-1 rounded ${
                      project.nextjsFullStack ? "bg-yellow-500/20 text-yellow-400" :
                      project.category === "Full-Stack" ? "bg-green-500/20 text-green-400" :
                      "bg-cyan-500/20 text-cyan-400"
                    }`}>
                      {project.nextjsFullStack ? "Next.js Full-Stack" : project.category}
                    </span>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-cyan-600/20 text-cyan-400 rounded-lg text-sm hover:bg-cyan-600/30 transition-all duration-300"
                      >
                        <FaEye className="text-xs" />
                        Live Demo
                      </a>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-white/10 text-gray-300 rounded-lg text-sm hover:bg-white/20 transition-all duration-300"
                      >
                        <FaCode className="text-xs" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Next.js Full-Stack Highlight */}
        <div className="mt-12 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-lg rounded-2xl border border-yellow-400/20 p-8">
          <div className="text-center">
            <SiNextdotjs className="text-4xl text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Next.js Full-Stack Expertise</h3>
            <p className="text-gray-300 mb-4">
              Specializing in building complete applications with Next.js, featuring server-side rendering, 
              API routes, database integration, and optimized performance.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-4 text-sm text-yellow-300">
              <span>• Server-Side Rendering</span>
              <span>• API Integration</span>
              <span>• Database Management</span>
              <span>• Performance Optimization</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to build something amazing?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss your next project and bring your ideas to life with modern full-stack solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact" 
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Start a Project
              </a>
              <a 
                href="/skills" 
                className="px-8 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-xl hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300"
              >
                View My Skills
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;