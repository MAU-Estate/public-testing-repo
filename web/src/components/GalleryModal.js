import React, { useRef, useState, useEffect } from 'react'
import Slider from 'react-slick'
import { GatsbyImage } from 'gatsby-plugin-image'

import { SlideCaption } from './Gallery'
import Icon from './Icon'

const SlideImage = ({ src, alt }) => {
  return (
    <GatsbyImage
      image={src}
      objectFit={'contain'}
      objectPosition="center"
      alt={alt}
    />
  )
}

const Slide = ({ data }) => {
  if (!data.src) return <></>
  return (
    <SlideImage
      src={data.src.asset.gatsbyImageData}
      alt={data.src.asset.altText}
    />
  )
}

const SliderArrow = ({ type = 'previous', onClick, theme }) => {
  const isPrevious = type === 'previous'
  const isDark = theme === 'dark'
  return (
    <div
      className={`absolute z-20 inset-0 flex flex-1 h-full pointer-events-none ${
        isPrevious ? 'justify-end right-[-60px] ' : 'justify-start left-[-60px]'
      }`}
    >
      <button
        onClick={onClick}
        className={`
            focus:outline-none
            pointer-events-auto
            h-full
            flex
            w-1/2
            items-center
            ${isDark ? 'text-white' : 'text-black'}
            ${isPrevious ? 'justify-end' : 'justify-start '}
          `}
      >
        <Icon
          name={isPrevious ? 'arrowRight' : 'arrowLeft'}
          className="h-10 w-10 text-grey-c"
        />
      </button>
    </div>
  )
}

export default function Gallery({ slides, className = '', theme = 'dark' }) {
  const [controller, setController] = useState()
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    swipe: true,
    nextArrow: <SliderArrow theme={theme} />,
    prevArrow: <SliderArrow theme={theme} type="next" />,
  }
  const navGallerySettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    fade: true,
    swipe: false,
  }
  const sliderRef = useRef()
  const sliderCaptionsRef = useRef()

  const parsedSlides = []

  // handle 2 Column images
  slides.forEach(slide => {
    if (slide._type === 'figure') parsedSlides.push(slide)
    if (slide._type === 'twoColImage') {
      parsedSlides.push(slide.imageL)
      parsedSlides.push(slide.imageR)
    }
  })

  useEffect(() => {
    setController(sliderCaptionsRef.current)
  }, [sliderCaptionsRef])

  return (
    <div className={`Gallery flex flex-1 flex-col ${className}`}>
      <div className="relative flex-1">
        <Slider
          asNavFor={controller}
          ref={slider => (sliderRef.current = slider)}
          {...settings}
        >
          {slides.map((slide, i) => (
            <Slide key={slide._key} data={slide} />
          ))}
        </Slider>
      </div>
      <div className="relative h-14">
        <Slider
          ref={slider => (sliderCaptionsRef.current = slider)}
          {...navGallerySettings}
          className="Slider-captions"
        >
          {parsedSlides.map((slide, i) => (
            <SlideCaption
              key={`${slide._key}-caption`}
              index={i}
              galleryLength={slides.length}
              arrows={false}
              inline={true}
              data={slide}
              theme={'light'}
            />
          ))}
        </Slider>
      </div>
    </div>
  )
}
