import React from 'react'
import user from '../../img/user.svg'
import location from '../../img/location.svg'
import server from '../../img/server.svg'
export default function Triple() {
  return (
    <section>
      <div className=" mx-auto max-w-4xl">
        <div className="md:shadow-2xl flex flex-wrap justify-around bg-white mx-4 rounded-lg py-6">
          <div className="w-40 sm:w-56 px-4 md:h-20 flex flex-col md:flex-row justify-center items-center shadow-lg md:shadow-none rounded-lg my-4 py-4">
            <div className="w-12 h-12 rounded-full bg-red-100 flex justify-center item-center">
              <img src={user} alt="user icon"/>
            </div>
            <div className="md:ml-4 text-center md:text-left">
              <div className="text-2xl font-bold">90+</div>
              <span className="text-gray-600">Users</span>
            </div>
          </div>
          <div className="h-20 hidden md:block border border-gray-100 self-center"></div>
          <div className="w-40 sm:w-56 px-4 md:h-20 flex flex-col md:flex-row justify-center items-center shadow-lg md:shadow-none rounded-lg my-4 py-4">
            <div className="w-12 h-12 rounded-full bg-red-100 flex justify-center item-center">
              <img src={location} alt="location icon"/>
            </div>
            <div className="md:ml-4 text-center md:text-left">
              <div className="text-2xl font-bold">30+</div>
              <span className="text-gray-600">Locations</span>
            </div>
          </div>
          <div className="h-20 hidden md:block border border-gray-100 self-center"></div>
          <div className="w-40 sm:w-56 px-4 md:h-20 flex flex-col md:flex-row justify-center items-center shadow-lg md:shadow-none rounded-lg my-4 py-4">
            <div className="w-12 h-12 rounded-full bg-red-100 flex justify-center item-center">
              <img src={server} alt="server icon"/>
            </div>
            <div className="md:ml-4 text-center md:text-left">
              <div className="text-2xl font-bold">50+</div>
              <span className="text-gray-600">Servers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}