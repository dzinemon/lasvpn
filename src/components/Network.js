import React from 'react'

import network from '../../img/network.svg'

export default function Network() {
  return (
    <section className="py-10 sm:pt-20 sm:pb-20">
      <div className="xl:container flex flex-wrap px-4 mx-auto items-center">
        <div className="w-full p-4 text-center">
          <h2 className="text-3xl leading-relaxed font-semibold text-gray-800 mb-4">
            Huge Global Network of Fast VPN
          </h2>
          <p className="text-gray-600 leading-loose mb-6 max-w-xl mx-auto">
              See <strong>LaslesVPN</strong> everywhere to make it easier for you when you move locations.
          </p>
        </div>

        <div className="w-full mt-10">
          <img src={network} alt="Network" className="mx-auto"/>
        </div>
       
      </div>
    </section>
  )
}