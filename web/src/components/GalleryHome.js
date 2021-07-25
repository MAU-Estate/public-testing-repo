import React, { useRef } from 'react'
import Slider from 'react-slick'

// import { Link } from 'gatsby'
// import RichText from './RichText'
import Icon from './Icon'
import SanityImage from 'gatsby-plugin-sanity-image'
import RichTextSingle from './RichTextSingle'

const SlideImage = ({ className = '', image, alt }) => {
  return (
    <figure className={`${className} flex flex-col flex-1`}>
      <div className="flex-1" style={{ minHeight: 0 }}>
        <SanityImage
          {...image.src}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center',
          }}
          alt={alt}
        />
      </div>
      {image.figcaption && (
        <figcaption className={`flex-none`}>
          {image.figcaption && (
            <RichTextSingle
              content={image.figcaption._rawText}
              className={`pt-c f-8 text-white`}
            />
          )}
        </figcaption>
      )}
    </figure>
  )
}

const Slide = ({ data }) => {
  return <SlideImage image={data.image} alt={data.image.alt} />
}

const NewsSlide = ({ data }) => {
  return (
    <div className="flex-1 grid grid-cols-2 gap-0">
      <div className="text-white text-center flex flex-col justify-center px-12">
        <p className="f-11">{data.subhead}</p>
        <div className="border-t pt-u mt-t">
          <h1 className="f-10">{data.title}</h1>
        </div>
      </div>
      <div className="flex flex-1 px-12">
        <SlideImage image={data.image} alt={data.image.alt} />
      </div>
    </div>
  )
}

const SliderArrow = ({ type = 'previous', onClick, theme }) => {
  const isPrevious = type === 'previous'
  const isDark = theme === 'dark'
  return (
    <div
      className={`absolute z-20 inset-0 flex flex-1 h-full pointer-events-none ${
        isPrevious ? 'justify-end' : 'justify-start'
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

export default function Gallery({
  slides,
  onChange,
  className = '',
  theme = 'dark',
}) {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    swipe: false,
    beforeChange: (_, newIdx) => {
      onChange(
        slides[newIdx]._type === 'slide' ? 'bg-transparent' : 'bg-[#4e5c59]'
      )
    },
    nextArrow: <SliderArrow theme={theme} />,
    prevArrow: <SliderArrow theme={theme} type="next" />,
  }
  const sliderRef = useRef()

  return (
    <div className={`Gallery Gallery--home flex-1  ${className}`}>
      <Slider
        className="px-[60px]"
        ref={slider => (sliderRef.current = slider)}
        {...settings}
      >
        {slides.map((slide, i) => {
          return slide._type === 'slide' ? (
            <Slide key={slide._key} data={slide} route={slide.url} />
          ) : (
            <NewsSlide key={slide._key} data={slide} route={slide.url} />
          )
        })}
      </Slider>
    </div>
  )
}
