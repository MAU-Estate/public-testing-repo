import React, { useRef } from 'react'
import { Link } from 'gatsby'
import Slider from 'react-slick'
import { GatsbyImage } from 'gatsby-plugin-image'

import RichText from './RichText'
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
      className={`absolute z-20 inset-0 container flex flex-1 h-full pointer-events-none ${
        isPrevious ? 'justify-end' : 'justify-start '
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
          className="h-10 w-10"
        />
      </button>
    </div>
  )
}

export default function Gallery({ slides, className = '', theme = 'dark' }) {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    swipe: false,
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
  // const sliderCaptionsRef = useRef()

  return (
    <div className={`Gallery Gallery--home flex-1  ${className}`}>
      <Slider ref={slider => (sliderRef.current = slider)} {...settings}>
        {slides.map((slide, i) => (
          <Slide
            key={slide._key}
            data={slide}
            // route={`/gallery/${slug?.current}?index=${i}`}
          />
        ))}
      </Slider>
      {/* <Slider
        asNavFor={sliderRef.current}
        ref={slider => (sliderCaptionsRef.current = slider)}
        {...navGallerySettings}
        style={{ position: 'relative' }}
        className="Slider-captions"
      >
        {parsedSlides.map((slide, i) => (
          <SlideCaption
            key={`${slide._key}-caption`}
            index={i}
            galleryLength={slides.length}
            inline={inline}
            goToPrev={() => sliderCaptionsRef.current.slickPrev()}
            goToNext={() => sliderCaptionsRef.current.slickNext()}
            data={slide}
            theme={theme}
          />
        ))}
      </Slider> */}
    </div>
  )
}
