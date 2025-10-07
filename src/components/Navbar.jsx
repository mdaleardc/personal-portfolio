import { NavLink } from "react-router-dom";
import logopng from "../assets/brandlogo.jpg";
import { FloatingNav } from "./ui/floating-navar";

const Navbar = () => {

  const navItems = [
    { link: "/home", name: "Home" },
    { link: "/projects", name: "Projects" },
    { link: "/skills", name: "Skills" },
    { link: "/about", name: "About" },
    { link: "/contact", name: "Contact" },
  ];

  return (
    <nav>
      <FloatingNav navItems={[{name: navItems[0].name, link: navItems[0].link }, {name: navItems[1].name, link: navItems[1].link }, {name: navItems[2].name, link: navItems[2].link }, {name: navItems[3].name, link: navItems[3].link }, {name: navItems[4].name, link: navItems[4].link },]}/>
    </nav>
  );
};

export default Navbar;