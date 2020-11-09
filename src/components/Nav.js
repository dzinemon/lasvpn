import React from "react"
import { Link } from "gatsby"
import Logo from '../svg/logo.svg'

export default function Nav () {
  return (
   
    <nav className="bg-white">
      <div className="xl:container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
              
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <Link to="/" className="flex-shrink-0 flex flex-row items-center cursor-pointer text-gray-900 hover:text-gray-700">
              <img className="h-8 w-auto" src={Logo} alt=" logo"/>
              <span className="ml-1 text-lg">Lasles<span className="font-semibold">VPN</span></span>
            </Link>
            <div className="hidden md:block md:ml-6 w-full">
              <div className=" flex flex-row justify-between">
                <div className="flex">
                  <Link to="/About" className="block px-3 py-2 rounded-md text-base text-gray-800 hover:underline focus:outline-none transition duration-150 ease-in-out">About</Link>
                  <Link to="/Features" className="block px-3 py-2 rounded-md text-base text-gray-800 hover:underline focus:outline-none transition duration-150 ease-in-out">Features</Link>
                  <Link to="/Pricing" className="block px-3 py-2 rounded-md text-base text-gray-800 hover:underline focus:outline-none transition duration-150 ease-in-out">Pricing</Link>
                  <Link to="/Testimonials" className="block px-3 py-2 rounded-md text-base text-gray-800 hover:underline focus:outline-none transition duration-150 ease-in-out">Testimonials</Link>
                  <Link to="/Help" className="block px-3 py-2 rounded-md text-base text-gray-800 hover:underline focus:outline-none transition duration-150 ease-in-out">Help</Link>
                </div>
                <div className="flex items-center">
                  <Link to="#" className="block px-4 py-2 rounded-full text-base font-medium text-gray-900 border border-white hover:border-gray-900 focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Sign In</Link>
                  <Link to="#" className="block px-6 py-2 rounded-full text-base font-medium text-red-700 bg-white border border-red-700 hover:bg-red-700 hover:text-white focus:bg-gray-700 transition duration-150 ease-in-out">Sign Up</Link>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </nav>

  )
}