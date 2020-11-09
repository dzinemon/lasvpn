import React from 'react'

import Check from '../components/bits/Check'
import PlanItem from '../components/bits/PlanItem'



export default function Pricing() {
  return (
    <section className="py-10 sm:pt-20 sm:pb-20">
      <div className="xl:container flex flex-wrap px-4 mx-auto items-center">
        <div className="w-full p-4 text-center">
          <h2 className="text-3xl leading-relaxed font-semibold text-gray-800 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-600 leading-loose mb-6 max-w-xl mx-auto">
            Let's choose the package that is best for you and explore it happily and cheerfully.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 xl:gap-16">
          <PlanItem planName="Free Plan" monthlyPayment={0}> 
           
              <Check hasCheck={true} checkType="basic" text="Unlimited Bandwitch" className="mb-3"/>
              <Check hasCheck={true} checkType="basic" text="Encrypted Connection" className="mb-3"/>
              <Check hasCheck={true} checkType="basic" text="No Traffic Logs" className="mb-3"/>
              <Check hasCheck={true} checkType="basic" text="Works on All Devices" className="mb-3"/>
           
          </PlanItem>

          <PlanItem planName="Standard Plan" monthlyPayment={9}> 
           
              <Check hasCheck={true} checkType="basic" text="Unlimited Bandwitch" className="mb-3"/>
              <Check hasCheck={true} checkType="basic" text="Encrypted Connection" className="mb-3"/>
              <Check hasCheck={true} checkType="basic" text="No Traffic Logs" className="mb-3"/>
              <Check hasCheck={true} checkType="basic" text="Works on All Devices" className="mb-3"/>
              <Check hasCheck={true} checkType="basic" text="Connect Anyware" className="mb-3"/>
           
          </PlanItem>

          <PlanItem planName="Premium Plan" monthlyPayment={12} premium={true}> 
           
              <Check hasCheck={true} checkType="basic" text="Unlimited Bandwitch" className="mb-3"/>
              <Check hasCheck={true} checkType="basic" text="Encrypted Connection" className="mb-3"/>
              <Check hasCheck={true} checkType="basic" text="No Traffic Logs" className="mb-3"/>
              <Check hasCheck={true} checkType="basic" text="Works on All Devices" className="mb-3"/>
              <Check hasCheck={true} checkType="basic" text="Connect Anyware" className="mb-3"/>
              <Check hasCheck={true} checkType="basic" text="Get New Features" className="mb-3"/>
           
          </PlanItem>

        </div>
       
      </div>
    </section>
  )
}