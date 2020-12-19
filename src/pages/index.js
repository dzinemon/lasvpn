import React from "react"

import { Helmet } from 'react-helmet'

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
      <Helmet>
        <meta property="og:title" content="LaslesVPN - Supercharged VPN"/>
        <meta property="og:description" content="Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us."/>
        <meta property="og:image" content="https://lasles.netlify.app/logo.jpg"/>
        <meta property="og:url" content="https://lasles.netlify.app"/>
        <meta name="twitter:card" content="summary_large_image"/>

        <meta property="og:site_name" content="LaslesVPN, Inc."/>
        <meta name="twitter:image:alt" content="LaslesVPN - Supercharged VPN"/>
      </Helmet>
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
