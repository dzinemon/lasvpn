import React from 'react'

import { Link } from 'gatsby'

import box from '../../../img/box.svg'

export default function PlanItem(props) {
  
  const { planName, monthlyPayment, premium } = props

  const renderPayment = (monthlyPayment) => {
    if (monthlyPayment > 0) {
      return (
      <span>$ {monthlyPayment} <span className="font-normal text-gray-700">/mo</span></span>
      )
    }
    return (
      <span>Free</span>
    )
  }

  const renderLink = (premium) => {
    if (premium) {
      return (
        <Link to="" 
          className="inline-block px-16 py-2 border-2 border-red-600 hover:bg-white hover:text-red-600 rounded-full text-base font-semibold 
          bg-red-600 text-white hover:shadow-xl shadow"
        >Select</Link>
      )
    }
    return (
      <Link to="" 
          className="inline-block px-16 py-2 border-2 border-red-600 bg-white text-red-600 rounded-full text-base font-semibold 
          hover:bg-red-600 hover:text-white"
        >Select</Link>
    )
  }
  return (
    <div className={ premium ? `rounded-lg border-2 border-red-600 bg-white px-10 py-12 flex flex-col justify-between max-w-xs mx-auto md:w-full` : `rounded-lg border-2 border-gray-300 bg-white px-10 py-12 flex flex-col justify-between max-w-xs mx-auto md:w-full`}>
      <div>
        <img src={box} width={145} height={165} className="w-32 mx-auto" alt="box"/>
  
        <p className="text-gray-800 font-semibold text-lg my-8 text-center">
          { planName }
        </p>
        <ul className="text-gray-600 mx-auto w-56">
        { props.children }
        </ul>
      </div>
      <div>
        <p className="text-2xl font-semibold text-center mt-8">
          {renderPayment(monthlyPayment)}
        </p>
        <p className="text-center mt-6">
          {renderLink(premium)}
        </p>
      </div>
    </div>
  )
}