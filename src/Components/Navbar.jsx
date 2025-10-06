import { NavLink } from "react-router-dom";
import logopng from "../assets/brandlogo.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  // Close mobile menu when clicking on a link
  const handleNavLinkClick = () => {
    setIsOpenMenu(false);
  };

  // Navigation items data for maintainability
  const navItems = [
    { path: "/home", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/skills", label: "Skills" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <nav className={`w-full h-16 fixed top-0 left-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/60 backdrop-blur-md shadow-lg border-b border-gray-200/30" 
        : "bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900"
    }`}>
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <NavLink 
            to="/" 
            className="flex items-center space-x-3 group"
            onClick={handleNavLinkClick}
          >
            <div className={`w-12 h-12 rounded-full border-2 shadow-lg transition-all duration-300 group-hover:scale-105 ${
              isScrolled 
                ? "border-blue-600 shadow-blue-500/25" 
                : "border-cyan-400 shadow-cyan-400/30"
            }`}>
              <img 
                src={logopng} 
                alt="Mohammed Ismail - Portfolio Logo" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <span className={`font-semibold text-lg hidden sm:block transition-colors duration-300 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}>
              Mohammed Ismail
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative font-medium px-4 py-2 rounded-xl transition-all duration-200 ${
                    isScrolled 
                      ? isActive
                        ? "text-blue-600 bg-blue-50 shadow-md"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-100/80"
                      : isActive
                        ? "text-cyan-300 bg-white/10 shadow-lg backdrop-blur-sm"
                        : "text-white hover:text-cyan-300 hover:bg-white/5"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-3 rounded-xl transition-all duration-200 hover:scale-105 ${
              isScrolled 
                ? "text-gray-700 hover:bg-gray-100/80" 
                : "text-white hover:bg-white/10"
            }`}
            onClick={handleClick}
            aria-label={isOpenMenu ? "Close menu" : "Open menu"}
            aria-expanded={isOpenMenu}
          >
            {isOpenMenu ? (
              <RxCross1 size={24} className="transition-transform duration-200" />
            ) : (
              <RxHamburgerMenu size={24} className="transition-transform duration-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`
        md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out
        ${isOpenMenu 
          ? "opacity-100 visible" 
          : "opacity-0 invisible"
        }
      `}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={handleClick}
        />
        
        {/* Menu Panel */}
        <div className={`
          absolute right-0 top-0 h-full w-80 max-w-full
          bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 shadow-2xl
          transform transition-transform duration-300 ease-in-out
          ${isOpenMenu ? "translate-x-0" : "translate-x-full"}
        `}>
          <div className="flex flex-col h-full pt-20 pb-8 px-6">
            {/* Mobile Logo */}
            <div className="flex items-center space-x-3 mb-12 px-2">
              <div className="w-12 h-12 rounded-full border-2 border-cyan-400 shadow-[0_0_15px_#00F3FF]">
                <img 
                  src={logopng} 
                  alt="Logo" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <span className="text-white font-semibold text-lg">Mohammed Ismail</span>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex-1 space-y-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={handleNavLinkClick}
                  className={({ isActive }) =>
                    `block px-4 py-4 rounded-xl text-lg font-medium transition-all duration-200 backdrop-blur-sm ${
                      isActive
                        ? "text-white bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 shadow-lg shadow-cyan-500/20"
                        : "text-white/90 hover:text-white hover:bg-white/10 border border-transparent"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Footer Text */}
            <div className="text-center text-white/70 text-sm mt-8 space-y-1">
              <p className="font-medium">Next.js Developer</p>
              <p className="text-xs">Based in Myanmar</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;