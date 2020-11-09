import React from "react"

import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Triple from '../components/Triple'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Network from '../components/Network'
import Customer from '../components/Customer'
import Carousel from '../components/Carousel'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Triple />
      <Features />
      <div style={{
        backgroundImage: `linear-gradient(#FAFAFA, #FFFFFF)`
      }}>
        <Pricing />
        <Network />
        <Customer />
        <Carousel />
      </div>
      <Subscribe />
      <Footer />
    </div>
  )
}
