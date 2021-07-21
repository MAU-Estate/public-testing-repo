import React, { useRef } from 'react'
import Slider from 'react-slick'

// import { Link } from 'gatsby'
// import RichText from './RichText'
import Icon from './Icon'
import SanityImage from 'gatsby-plugin-sanity-image'

const SlideImage = ({ src, alt }) => {
  return (
    <SanityImage
      {...src}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        objectPosition: 'center',
      }}
      alt={alt}
    />
  )
}

const Slide = ({ data }) => {
  if (!data.src) return <></>
  return <SlideImage src={data.src} alt={data.src.asset.altText} />
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
  const sliderRef = useRef()

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
    </div>
  )
}
