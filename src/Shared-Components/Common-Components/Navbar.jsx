import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RiMenu2Line } from "react-icons/ri";
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  // State variables
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [menu, setMenu] = useState(false);

  
  const path = useLocation()?.hash;


  // Effect to handle navbar visibility based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        setShowNav(false);
      } else {
        // Scrolling up or at the top
        setShowNav(true);
      }

      // Update previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    // Event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`mx-auto z-50 shadow fixed top-0 px-4 w-screen ${showNav ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'} ${prevScrollPos === 0 ? 'bg-transparent' : 'bg-white'}`}>
      {/* Navbar content */}
      <div className='relative'>
        <div className={`py-2 lg:py-3 max-w-7xl mx-auto flex justify-between items-center`}>
          {/* Website logo */}
          <HashLink to={'/#home'} className='text-3xl font-semibold text-[#ff4880]'>LOGO</HashLink>

          {/* Menu icon */}
          <div className="text-4xl lg:hidden">
            {menu ? <AiOutlineClose onClick={() => setMenu(false)} /> : <RiMenu2Line onClick={() => setMenu(true)} />}
          </div>

          {/* Navigation Items */}
          <div className={`w-full lg:w-auto flex flex-col lg:flex-row justify-end lg:space-x-10 duration-1000 lg:relative lg:left-0 lg:top-0 absolute ${menu ? "top-[46px] left-0 bg-[#ffffff] z-50 p-8 lg:p-0 shadow-2xl lg:shadow-none rounded-b-md lg:rounded-none" : "-left-[1000px] -top-[1000px]"}`}>
            <ul className={`w-full text-xl lg:text-base lg:flex mx-auto space-y-2 lg:space-y-0 lg:space-x-4 xl:space-x-8 lg:justify-between lg:items-center  uppercase relative`}>
              <li className={`flex items-center hover:text-[#ff4880]  ${path == '#home' ? 'text-[#ff4880]' : ''}`}>
                  <HashLink onClick={() => setMenu(false)} to={'/#home'}>Home</HashLink>
              </li>
              <li className={`flex items-center hover:text-[#ff4880]  ${path == '#about' ? 'text-[#ff4880]' : ''}`}>
                  <HashLink onClick={() => setMenu(false)} to={'/#about'}>About</HashLink>
              </li>
              <li className={`flex items-center hover:text-[#ff4880]  ${path == '#services' ? 'text-[#ff4880]' : ''}`}>
                  <HashLink onClick={() => setMenu(false)} to={'/#services'}>Services</HashLink>
              </li>
              <li className={`flex items-center hover:text-[#ff4880]  ${path == '#gallery' ? 'text-[#ff4880]' : ''}`}>
                  <HashLink onClick={() => setMenu(false)} to={'/#gallery'}>Gallery</HashLink>
              </li>
              <li className={`flex items-center hover:text-[#ff4880]  ${path == '#doctor' ? 'text-[#ff4880]' : ''}`}>
                  <HashLink onClick={() => setMenu(false)} to={'/#doctor'}>Doctor</HashLink>
              </li>
              <li className={`flex items-center hover:text-[#ff4880]  ${path == '#pricing' ? 'text-[#ff4880]' : ''}`}>
                  <HashLink onClick={() => setMenu(false)} to={'/#pricing'}>Pricing</HashLink>
              </li>
              <li className={`flex items-center hover:text-[#ff4880]  ${path == '#blog' ? 'text-[#ff4880]' : ''}`}>
                  <HashLink onClick={() => setMenu(false)} to={'/#blog'}>Blog</HashLink>
              </li>
              <li className={`flex items-center hover:text-[#ff4880]  ${path == '#contact' ? 'text-[#ff4880]' : ''}`}>
                  <HashLink onClick={() => setMenu(false)} to={'/#contact'}>Contact</HashLink>
              </li>
              <li className={``}>
                  <button className='text-white bg-[#ff4880] hover:bg-black py-3 px-8 rounded-md'>Book Appointment</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
