// import { Link } from 'gatsby'
import React from 'react'

import Check from '../components/bits/Check'
import featureimg from '../../img/features.svg'

export default function Features() {
  return (
    <section className="py-10 sm:pt-20 sm:pb-20">
      <div className="xl:container flex flex-wrap px-4 mx-auto items-center">
        <div className="w-full sm:w-1/2 p-4">
          <img src={featureimg} alt="Features"></img>
        </div>
        <div className="w-full sm:w-1/2 p-4">
          <div className="sm:ml-20">
            <h2 className="text-3xl leading-relaxed font-semibold text-gray-800 mb-4 sm:mr-20 md:mr-32">
              We Provide Many Features You Can Use
            </h2>
            <p className="text-gray-600 leading-loose mb-6">
              You can explore the features that we provide with fun and have their own functions each feature.
            </p>
            <ul className="text-sm text-gray-600 mb-4">
              <Check hasCheck={true} text="Powerfull online protection." className="mb-2" />
              <Check hasCheck={true} text="Internet without borders." className="mb-2" />
              <Check hasCheck={true} text="Supercharged VPN." className="mb-2" />
              <Check hasCheck={true} text="No specific time limits." className="mb-2" />
            </ul>
          </div>

        </div>
        
      </div>
    </section>
  )
}
