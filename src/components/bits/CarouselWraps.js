import React, { useEffect, useRef, useState } from 'react'

import CarouselItem from './CarouselItem'

import CarouselArrowButton from './CarouselArrowButton'


export default function CarouselWraps() {

  const [ carouselWidth, setCarouselWidth ] = useState(0)
  const [ carouselViewWidth, setCarouselViewWidth ] = useState(0)

  const [ currentSlide, setCurrentSlide ] = useState(0)

  const cardEl = useRef(null)
  const cardViewEl = useRef(null)

  const widthToTranslate = carouselWidth/5

  const itemsShowed = widthToTranslate * currentSlide

  const allInView = (itemsShowed + (widthToTranslate / 2) ) > (carouselWidth - carouselViewWidth)

  const goForwards = () => {
    if (currentSlide < 4 && !allInView) {
      setCarouselWidth(cardEl.current.offsetWidth)
      setCarouselViewWidth(cardViewEl.current.offsetWidth)
      setCurrentSlide(currentSlide + 1)
    }
  }

  const goBackwards = () => {
    if (currentSlide > 0) {
      setCarouselWidth(cardEl.current.offsetWidth)
      setCarouselViewWidth(cardViewEl.current.offsetWidth)
      setCurrentSlide(currentSlide - 1)
    }
  }

  const clickTheDot = (event) => {
    const el = +event.target.dataset.value
    setCurrentSlide(el)
    setCarouselWidth(cardEl.current.offsetWidth)
    setCarouselViewWidth(cardViewEl.current.offsetWidth)
  }

  useEffect( () => {
    setTimeout(()=>{
      setCarouselWidth(cardEl.current.offsetWidth)
      setCarouselViewWidth(cardViewEl.current.offsetWidth)
    }, 0)
  }, [])

  return (
    <>
      <div ref={cardEl} 
        style={{
          transform: `translateX(-${widthToTranslate * currentSlide}px)`,
        }} 
        className="flex flex-row justify-center items-stretch transition duration-150">
        <CarouselItem
          image="mike.jpg"
          name="Mike Robertson"
          title="Madrid, Spain"
          score={4.5}
          text="Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best"
        />
        <CarouselItem
          image="kimiko.jpg"
          name="Kimiko Utiji"
          title="Warsaw, Poland"
          score={4.3}
          text="This VPN turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best"
        />
        <CarouselItem
          image="kimiko.jpg"
          name="Kimiko Utiji"
          title="Tokyo, Japan"
          score={4.4}
          text="So far there have been no problems. LaslesVPN always the best"
        />
        <CarouselItem
          image="jao.jpg"
          name="Jao Muniez"
          title="Warsaw, Poland"
          score={4.2}
          text="I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems"
        />
        <CarouselItem
          image="mike.jpg"
          name="Mike Robertson"
          title="Kyiv, Ukraine"
          score={4.3}
          text="Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best"
        />
      </div>
      <div ref={cardViewEl} 
        className="flex flex-row justify-between items-center w-full my-10">
        <div>
          <button aria-label="slide 0" onClick={clickTheDot} data-value="0" className={ currentSlide === 0 ? `w-4 h-4 mx-1 bg-gray-300 border-2 border-red-300 rounded-full focus:outline-none hover:bg-red-400 hover:shadow-lg` : `w-4 h-4 mx-1 bg-gray-300 border-2 border-gray-300 rounded-full focus:outline-none hover:bg-red-400 hover:shadow-lg`}></button>
          <button aria-label="slide 1" onClick={clickTheDot} data-value="1" className={ currentSlide === 1 ? `w-4 h-4 mx-1 bg-gray-300 border-2 border-red-300 rounded-full focus:outline-none hover:bg-red-400 hover:shadow-lg` : `w-4 h-4 mx-1 bg-gray-300 border-2 border-gray-300 rounded-full focus:outline-none hover:bg-red-400 hover:shadow-lg`}></button>
          <button aria-label="slide 2" onClick={clickTheDot} data-value="2" className={ currentSlide === 2 ? `w-4 h-4 mx-1 bg-gray-300 border-2 border-red-300 rounded-full focus:outline-none hover:bg-red-400 hover:shadow-lg` : `w-4 h-4 mx-1 bg-gray-300 border-2 border-gray-300 rounded-full focus:outline-none hover:bg-red-400 hover:shadow-lg`}></button>
          <button aria-label="slide 3" onClick={clickTheDot} data-value="3" className={ currentSlide === 3 ? `w-4 h-4 mx-1 bg-gray-300 border-2 border-red-300 rounded-full focus:outline-none hover:bg-red-400 hover:shadow-lg` : `w-4 h-4 mx-1 bg-gray-300 border-2 border-gray-300 rounded-full focus:outline-none hover:bg-red-400 hover:shadow-lg`}></button>
          <button aria-label="slide 4" onClick={clickTheDot} data-value="4" className={ currentSlide === 4 ? `w-4 h-4 mx-1 bg-gray-300 border-2 border-red-300 rounded-full focus:outline-none hover:bg-red-400 hover:shadow-lg md:hidden` : `w-4 h-4 mx-1 bg-gray-300 border-2 border-gray-300 rounded-full focus:outline-none hover:bg-red-400 hover:shadow-lg md:hidden`}></button>
        </div>
        <div>
          <CarouselArrowButton direction="left" onButtonClick={goBackwards}/>
          <CarouselArrowButton direction="right" onButtonClick={goForwards}/>
        </div>
      </div>
    </>
  )
}