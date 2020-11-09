import React from 'react'

import Section from '../components/bits/Section'

import AmazonSvg from '../../img/amazon.svg'
import RedditSvg from '../../img/reddit.svg'
import NetflixSvg from '../../img/netflix.svg'
import DiscordSvg from '../../img/discord.svg'
import SpotifySvg from '../../img/spotify.svg'


export default function Customer() {
  return (
    <Section classes="">
      <div className="max-w-5xl flex flex-wrap px-4 mx-auto items-center">
        <div className="md:grid md:grid-cols-5 md:gap-4 flex flex-wrap justify-center items-center mx-auto ">
          <div className="flex flex-row justify-center w-40 h-20">
            <img src={NetflixSvg} alt="NetflixSvg" className="object-contain"/>
          </div> 
          <div className="flex flex-row justify-center w-40 h-20">
            <img src={RedditSvg} alt="RedditSvg" className="object-contain"/>
          </div> 
          <div className="flex flex-row justify-center w-40 h-20">
            <img src={AmazonSvg} alt="AmazonSvg" className="object-cover"/>
          </div> 
          <div className="flex flex-row justify-center w-40 h-20">
            <img src={DiscordSvg} alt="DiscordSvg" className="object-contain"/>
          </div> 
          <div className="flex flex-row justify-center w-40 h-20">
            <img src={SpotifySvg} alt="SpotifySvg" className="object-contain"/>
          </div> 
         
        </div>
      </div>
    </Section>
  )
}