import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import logo from '../assets/logo.png'




function Navbar() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={logo} alt='Logo Image' style={{ width: '100px'}} />
      </div>

      {/* Links */}
        <ul className='hidden md:flex md:text-2xl '>
          <li className='hover:text-white duration-200 hover:scale-110'>
            <Link to='home' smooth={true}>Home</Link>
          </li>
          <li className='hover:text-white duration-200 hover:scale-110'>
            <Link to='about' smooth={true}>About</Link>
          </li>
          <li className='hover:text-white duration-200 hover:scale-110'>
            <Link to='skills' smooth={true}>Skills</Link>
          </li>
          <li className='hover:text-white duration-200 hover:scale-110'>
            <Link to='projects' smooth={true}>Projects</Link>
          </li>
          <li className='hover:text-white duration-200 hover:scale-110'>
            <Link to='contact' smooth={true}>Contact</Link>
          </li>
        </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav
         ? 'hidden' 
         : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center '}>
        <li className='py-6 text-4xl hover:text-white duration-200 hover:scale-110'>
          <Link onClick={handleClick} to='home' smooth={true}>Home</Link>
        </li>
        <li className='py-6 text-4xl hover:text-white duration-200 hover:scale-110'>
          <Link onClick={handleClick} to='about' smooth={true}>About</Link>
        </li>
        <li className='py-6 text-4xl hover:text-white duration-200 hover:scale-110'>
          <Link onClick={handleClick} to='skills' smooth={true}>Skills</Link>
        </li>
        <li className='py-6 text-4xl hover:text-white duration-200 hover:scale-110'>
          <Link onClick={handleClick} to='projects' smooth={true}>Projects</Link>
        </li>
        <li className='py-6 text-4xl hover:text-white duration-200 hover:scale-110'>
          <Link onClick={handleClick} to='contact' smooth={true}>Contact</Link>
        </li>
        <li className='py-6 text-4xl hover:text-white duration-200 hover:scale-110'>
          <a href='https://docs.google.com/document/d/e/2PACX-1vQ0PP-nZU4PzCAHGi6cxFY7saOU6HBi6fh524lBfj-zoCYvy1MkLCAfHPNM-oho0jajIYd3mT-I36KI/pub' target='_blank'>Resume</a>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[30%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/zane-towell/'>LinkedIn <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/zanetowell'>GitHub <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href='mailto:zanetowelldev@gmail.com'>Email <HiOutlineMail size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300'
              href='https://docs.google.com/document/d/e/2PACX-1vQ0PP-nZU4PzCAHGi6cxFY7saOU6HBi6fh524lBfj-zoCYvy1MkLCAfHPNM-oho0jajIYd3mT-I36KI/pub' target='_blank'>Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
}


export default Navbar