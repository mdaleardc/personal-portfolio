import profile from "../assets/profile.jpg";
import { useState } from "react";
import { 
  FaXTwitter, 
  FaYoutube, 
  FaNodeJs,
  FaLinkedin,
  FaDownload
} from "react-icons/fa6";

import { FaFreeCodeCamp, FaExternalLinkAlt } from "react-icons/fa";
import { SiExpress, SiMongodb, SiNextdotjs, SiJavascript, SiTailwindcss, SiFacebook } from "react-icons/si";

const MyProfile = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/your-profile",
      label: "LinkedIn",
      color: "hover:text-blue-400",
      bgColor: "bg-blue-600/80"
    },
    {
      icon: FaXTwitter,
      href: "https://x.com/MdIsmail5851415",
      label: "Twitter",
      color: "hover:text-black",
      bgColor: "bg-black/80"
    },
    {
      icon: FaYoutube,
      href: "https://youtube.com/@my-xk9fl?si=lhEC8_ACqptGqZj5",
      label: "YouTube",
      color: "hover:text-red-400",
      bgColor: "bg-red-600/80"
    },
    {
      icon: SiFacebook,
      href: "https://www.facebook.com/mdaismail.it",
      label: "Facebook",
      color: "hover:text-blue-500",
      bgColor: "bg-blue-600/80"
    }
  ];

  const techStack = [
    { icon: SiNextdotjs, name: "Next.js", color: "text-white" },
    { icon: SiJavascript, name: "JavaScript", color: "text-blue-600" },
    { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
    { icon: SiExpress, name: "Express.js", color: "text-gray-300" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-400" }
  ];

  return (
    <section id="profile" className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-orange-900/70 to-indigo-900/90">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Profile Content - Left Side */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/30">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-400 text-sm font-medium">Available for opportunities</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Mohammed <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Ismail</span>
              </h1>
              
              <div className="flex items-center gap-3 text-xl text-cyan-400 font-semibold">
                <span>Next.js Full-Stack Developer</span>
                <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                <span>Former Educator</span>
              </div>
            </div>

            {/* Bio Section */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Welcome! I&apos;m a <span className="text-cyan-400 font-semibold">Next.js Full-Stack Developer</span> with 
                a unique background in education. My journey from teaching to technology has equipped me with 
                exceptional problem-solving skills and a user-centric approach to development.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in building <span className="text-purple-400 font-semibold">modern, scalable applications</span> 
                using cutting-edge technologies. My expertise spans from crafting intuitive user interfaces 
                to architecting robust backend systems that deliver exceptional performance and user experiences.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I&apos;m passionate about transforming complex challenges into elegant solutions and 
                continuously expanding my skill set to stay at the forefront of web development.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Core Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <div key={tech.name} className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10">
                    <tech.icon className={`text-lg ${tech.color}`} />
                    <span className="text-sm text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="/contact" 
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span>Get In Touch</span>
                <FaExternalLinkAlt className="text-sm" />
              </a>
              
              <a 
                href="/resume.pdf" 
                className="flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <FaDownload className="text-sm" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Profile Image & Social - Right Side */}
          <div className="flex flex-col items-center lg:items-end space-y-8">
            
            {/* Profile Image with Glass Effect */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              
              <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6">
                <div className="relative">
                  <img 
                    src={profile} 
                    alt="Mohammed Ismail - Full-Stack Developer"
                    className={`w-64 h-64 object-cover rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105 ${
                      isImageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setIsImageLoaded(true)}
                  />
                  
                  {/* Status Indicator */}
                  <div className="absolute bottom-3 right-3 w-6 h-6 bg-green-400 rounded-full border-4 border-slate-900"></div>
                  
                  {/* Floating Tech Icons */}
                  <div className="absolute -top-3 -left-3 w-12 h-12 bg-cyan-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-cyan-400/30">
                    <SiNextdotjs className="text-2xl text-cyan-400" />
                  </div>
                </div>
                
                {/* Image Caption */}
                <div className="text-center mt-4">
                  <div className="text-white font-semibold">Mohammed Ismail</div>
                  <div className="text-cyan-400 text-sm">Full-Stack Developer</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4 w-full max-w-sm">
              <h3 className="text-white font-semibold text-center lg:text-right">Connect with me</h3>
              
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <div className={`p-2 rounded-lg ${social.bgColor}`}>
                      <social.icon className={`text-white text-lg ${social.color}`} />
                    </div>
                    <span className="text-sm text-gray-300 group-hover:text-white">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-4 border border-cyan-400/20">
              <div className="text-center">
                <div className="text-cyan-400 text-sm font-semibold">2+ Years Experience</div>
                <div className="text-gray-400 text-xs">Full-Stack Development</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;