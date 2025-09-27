import { GiAchievement } from "react-icons/gi";
import { FaHeart, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
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
      category: "Web Development",
      platform: "freeCodeCamp"
    },
    {
      name: "JavaScript Algorithm and Data Structure",
      csc: JADS,
      url: "https://www.freecodecamp.org/certification/fccd7a29415-55b6-4d72-8159-33bbf2f7e102/javascript-algorithms-and-data-structures",
      category: "Programming",
      platform: "freeCodeCamp"
    },
    {
      name: "JavaScript Algorithm and Data Structure (Beta)",
      csc: JADSB,
      url: "https://www.freecodecamp.org/certification/fccd7a29415-55b6-4d72-8159-33bbf2f7e102/javascript-algorithms-and-data-structures-v8",
      category: "Programming",
      platform: "freeCodeCamp"
    },
    {
      name: "Front-End Development Libraries",
      csc: FEDL,
      url: "https://www.freecodecamp.org/certification/fccd7a29415-55b6-4d72-8159-33bbf2f7e102/front-end-development-libraries",
      category: "Frontend",
      platform: "freeCodeCamp"
    }
  ];
  
  const [likes, setLikes] = useState(() => Array(achievementsData.length).fill(false));
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleLike = (index, event) => {
    event.stopPropagation();
    setLikes(prev => prev.map((like, i) => i === index ? !like : like));
  };

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl flex items-center justify-center">
              <GiAchievement className="text-2xl text-white" />
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Certifications & Achievements
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Validating my expertise through recognized certifications and continuous learning journey
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {achievementsData.map((achievement, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glass Morphism Card */}
              <div className={`
                relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 
                overflow-hidden transition-all duration-500 ease-out
                ${hoveredCard === index 
                  ? 'transform scale-105 border-cyan-400/30 shadow-2xl shadow-cyan-500/20' 
                  : 'hover:border-white/20'}
              `}>
                
                {/* Card Header Gradient */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500"></div>
                
                {/* Certificate Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={achievement.csc} 
                    alt={`${achievement.name} certificate`}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Platform Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-slate-900/90 backdrop-blur-sm text-cyan-400 text-sm font-medium rounded-full border border-cyan-400/30">
                      {achievement.platform}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Category Tag */}
                  <div className="mb-3">
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full">
                      {achievement.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-3 leading-tight line-clamp-2">
                    {achievement.name}
                  </h3>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    {/* View Certificate Button */}
                    <a
                      href={achievement.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-cyan-600/20 text-cyan-400 rounded-lg hover:bg-cyan-600/30 transition-all duration-300 border border-cyan-400/30 hover:border-cyan-400/50 group/link"
                    >
                      <span className="text-sm font-medium">View</span>
                      <FaExternalLinkAlt className="text-xs group-hover/link:translate-x-0.5 transition-transform" />
                    </a>

                    {/* Like Button */}
                    <button
                      onClick={(e) => handleLike(index, e)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 group/like"
                    >
                      <div className={`
                        relative p-2 rounded-full transition-all duration-300
                        ${likes[index] 
                          ? 'bg-pink-500/20 text-pink-400' 
                          : 'bg-gray-500/20 text-gray-400 hover:bg-pink-500/20 hover:text-pink-400'}
                      `}>
                        <FaHeart className={`
                          transition-all duration-300
                          ${likes[index] ? 'scale-110' : 'scale-100'}
                        `} />
                      </div>
                      <span className={`
                        text-sm font-medium transition-colors duration-300
                        ${likes[index] ? 'text-pink-400' : 'text-gray-400'}
                      `}>
                        {likes[index] ? 'Liked' : 'Like'}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Hover Effect Glow */}
                <div className={`
                  absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
                `}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">Interested in seeing more of my work?</p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            View Full Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Achievements;