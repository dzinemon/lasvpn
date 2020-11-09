import React from 'react'

import Section from '../components/bits/Section'

import CarouselWraps from '../components/bits/CarouselWraps'



export default function Carousel() {
  return (
    <Section classes="py-10 sm:pt-20 sm:pb-20 overflow-hidden">
      <div className="max-w-5xl flex flex-wrap px-4 mx-auto items-center">
        <div className="w-full p-4 text-center">
          <h2 className="text-3xl leading-relaxed font-semibold text-gray-800 mb-4">
            Trusted by Thousands of Happy Customer
          </h2>
          <p className="text-gray-600 leading-loose mb-6 max-w-xl mx-auto">
            These are the stories of our customers who have joined us with great pleasure when using this crazy feature.
          </p>
        </div>
        <CarouselWraps />
      </div>
    </Section>
  )
}