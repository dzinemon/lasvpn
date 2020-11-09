import React from 'react'

import { Link } from 'gatsby'

import Section from '../components/bits/Section'

export default function Subscribe() {
  return (
    <Section classes="p-0 -mb-24">
      <div className="max-w-5xl flex flex-wrap px-4 mx-auto items-center">
        <div className="rounded-lg shadow-xl bg-white px-6 md:px-16 py-6  md:py-10 flex flex-col md:flex-row items-start md:items-center w-full justify-between">
          <div className="max-w-md">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2 sm:mr-20 md:mr-32">
              Subscribe Now for Get Special Features!
            </h3>
            <p className="text-gray-600 leading-loose mb-4 md:mb-0">
              Let's subscribe with us and find the fun.
            </p>
          </div>
          <Link to="" 
              className="px-20 py-4 bg-red-600 text-white rounded-lg shadow-xl"
            >Get Started</Link>
        </div>
      </div>
    </Section>
  )
}