import { Link } from 'gatsby'
import React from 'react'

import svg from '../../img/hero.svg'

export default function Hero() {
  return (
    <section className="py-10 sm:pt-20 sm:pb-20">
      <div className="xl:container flex flex-wrap px-4 mx-auto items-center">
        <div className="w-full sm:w-1/2 p-4">
          <h1 className="text-4xl leading-relaxed font-semibold text-gray-800 mb-4">
          Want anything to be easy with <strong>LaslesVPN</strong>.
          </h1>
          <p className="text-gray-600 leading-loose mb-10">
          Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.
          </p>
          <p>
            <Link to="" 
              className="px-20 py-4 bg-red-600 text-white rounded-lg shadow-lg"
            >Get Started</Link>
          </p>

        </div>
        <div className="w-full sm:w-1/2 p-4">
          <img src={svg} alt="LaslesVPN"></img>
        </div>
      </div>
    </section>
  )
}