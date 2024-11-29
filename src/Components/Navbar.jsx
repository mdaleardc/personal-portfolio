import { Link, NavLink } from "react-router-dom";
import logopng from "../assets/weblogo.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
const Navbar = () => {
  
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  
  const handleClick = () => {
    setIsOpenMenu(!isOpenMenu);
  }
  return (
    <div>
    <div className='w-full h-[3rem] bg-[#333] grid grid-cols-6 sm:justify-items-tretch items-center text-2xl font-semibold text-[#ff00ee] fixed top-0 left-0 px-[4px]'>
        <NavLink to="/">
        <img src={logopng} alt="website logo" className="w-[45px] rounded-[50%] align-middle sm:col-span-1"/>
        </NavLink>
      <ul className='hidden col-span-5 sm:grid gap-x-[10px] grid-cols-5 justify-center items-center mx-auto'>
      <NavLink to="/">
        <li className='cursor-pointer'><button>Home</button></li>
      </NavLink>
      <NavLink to="/projects">
        <li className='cursor-pointer'><button>Projects</button></li>
      </NavLink>
      <NavLink to="/skills">
        <li className='cursor-pointer text-center'><button>Skills</button></li>
      </NavLink>
      <NavLink to="/about">
        <li className='cursor-pointer'><button>About Me</button></li>
      </NavLink>
      <NavLink to="/contact">
        <li className='cursor-pointer text-right'><button>Contact</button></li>
      </NavLink>
      </ul>
      <button className='sm:hidden col-start-6 text-center' aria-label={isOpenMenu ? "Open Menu" : "Close Menu"} onClick={handleClick}>
      {
      isOpenMenu ? <RxCross1 size='30px' className='block mx-auto' /> : <RxHamburgerMenu size='30px' className='block mx-auto'/>
      }
      </button>
    </div>
    <div>
    {
    isOpenMenu && <div className={`vertical-navbar w-2/6 h-[50%] rounded-bl-md sm:hidden fixed right-0 top-[3rem]`}>
      <ul className='w-[100%] h-[100%] bg-[#444] rounded-bl-md grid grid-rows justify-center items-center text-2xl font-semibold text-[#ff00ee]'>
      <NavLink to="/" onClick={handleClick}>
        <li className='cursor-pointer'><button>Home</button></li>
      </NavLink>
      <NavLink to="/projects"  onClick={handleClick}>
        <li className='cursor-pointer'><button>Projects</button></li>
      </NavLink>
      <NavLink to="/skills"  onClick={handleClick}>
        <li className='cursor-pointer'><button>Skills</button></li>
      </NavLink>
      <NavLink to="/about"  onClick={handleClick}>
        <li className='cursor-pointer'><button>About Me</button></li>
      </NavLink>
      <NavLink to="/contact"  onClick={handleClick}>
        <li className='cursor-pointer'><button>Contact</button></li>
      </NavLink>
      </ul>
    </div>
    }
    
    </div>
    </div>
    )
}


export default Navbar;