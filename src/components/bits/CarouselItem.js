import React from 'react'

import staricon from '../../../img/star.svg'

export default function CarouselItem(props) {

  const { image, name, title, score, text } = props
  
  return (
    <div className="px-4 md:px-8 py-4 md:py-6 box-content w-56 lg:w-64 rounded-lg border-2 bg-white border-gray-300 mr-4 md:mr-8 lg:mr-10">
      <div className="flex flex-row items-center w-full">
        <img
          alt={name} 
          src={`/images/${image}`}
          className="rounded-full bg-gray-100 h-12 w-12 mr-2 text-xs" />
        <div className="flex-grow">
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-gray-700 text-xs">{title}</p>
        </div>
        <div className="flex flex-row justify-end">
          <div>{score}</div> 
          <img src={staricon} alt="star" className="ml-2" />
        </div>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-700 leading-6">
          "{text}".
        </p>
      </div>
    </div>
  )
}