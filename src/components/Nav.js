import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import Logo from '../svg/logo.svg'

export default function Nav () {

  const ref = useRef();

  const useOutsideClick = (ref, callback) => {
    const handleClick = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
  
    useEffect(() => {
      document.addEventListener("click", handleClick);
  
      return () => {
        document.removeEventListener("click", handleClick);
      };
    });
  };

  useOutsideClick(ref, () => {
    if (isActive) {
      setNavActive(!isActive)
    }
  });

  const [isActive, setNavActive] = useState(false)

  const handleNavCollapse = () => setNavActive(!isActive);

  return (
   
    <nav className="bg-white" ref={ref}>
      <div className="xl:container mx-auto px-2 md:px-6 lg:px-8">
        <div className="relative flex md:flex-row flex-col items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0 flex flex-row items-center cursor-pointer text-gray-900 hover:text-gray-700 h-16">
            <img className="h-8 w-auto" src={Logo} alt="Lasles logo"/>
            <span className="ml-1 text-lg">Lasles<span className="font-semibold">VPN</span></span>
          </Link>
          <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
            
            <button className={`${isActive ? 'text-red-400' : 'text-gray-600'} inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200 transition duration-150 ease-in-out`} 
              aria-label="Main menu" 
              aria-expanded="false"
              onClick={handleNavCollapse}
              >
              
              <svg className={`${isActive ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              
              <svg className={`${isActive ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex md:flex-row flex-col items-stretch justify-start w-full bg-white">
            
            <div className={`${isActive ? 'flex' : 'hidden'} md:block md:ml-6 w-full`}>
              <div className=" flex md:flex-row flex-col justify-between items-center w-full">
                <div className="flex md:flex-row flex-col items-center">
                  <Link to="/About" className="block px-3 py-2 rounded-md text-base text-gray-800 hover:underline focus:outline-none transition duration-150 ease-in-out">About</Link>
                  <Link to="/Features" className="block px-3 py-2 rounded-md text-base text-gray-800 hover:underline focus:outline-none transition duration-150 ease-in-out">Features</Link>
                  <Link to="/Pricing" className="block px-3 py-2 rounded-md text-base text-gray-800 hover:underline focus:outline-none transition duration-150 ease-in-out">Pricing</Link>
                  <Link to="/Testimonials" className="block px-3 py-2 rounded-md text-base text-gray-800 hover:underline focus:outline-none transition duration-150 ease-in-out">Testimonials</Link>
                  <Link to="/Help" className="block px-3 py-2 rounded-md text-base text-gray-800 hover:underline focus:outline-none transition duration-150 ease-in-out">Help</Link>
                </div>

                <div className="flex md:flex-row flex-col items-center justify-start ">
                  <Link to="#" className="mb-3 md:mb-0 block px-4 py-2 rounded-full text-base font-medium text-gray-900 border md:border-white border-gray-700 hover:border-gray-900 focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Sign In</Link>
                  <Link to="#" className="mb-3 md:mb-0 block px-6 py-2 rounded-full text-base font-medium text-red-700 bg-white border border-red-700 hover:bg-red-700 hover:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Sign Up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

  )
}