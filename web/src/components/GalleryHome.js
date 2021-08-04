import React, { useRef, useEffect, useState } from 'react'
import Slider from 'react-slick'

// import { Link } from 'gatsby'
// import RichText from './RichText'
import Icon from './Icon'
import SanityImage from 'gatsby-plugin-sanity-image'
import RichTextSingle from './RichTextSingle'
import { Link } from 'gatsby'

const SlideImage = ({ className = '', dimensions, image, alt, url }) => {
  const imageContainer = useRef()
  const [slideDimensions, setSlideDimensions] = useState()

  useEffect(() => {
    if (imageContainer.current) {
      const element = imageContainer.current
      const { clientWidth: width, clientHeight: height } = element
      // console.log(
      //   width / dimensions.aspectRatio,
      //   height * dimensions.aspectRatio
      // )
      // console.log(width / dimensions.aspectRatio / width)

      const isLandscape = dimensions.aspectRatio > 1

      const constrainedAspectRatio = isLandscape
        ? width / dimensions.width
        : height / dimensions.height

      // if width is less than height
      // console.log(
      //   (width / dimensions.aspectRatio / width) *
      //     (height * dimensions.aspectRatio)
      // )
      // console.log(constrainedAspectRatio)
      const constrainedDimensions = isLandscape
        ? {
            width: width,
            height: dimensions.height * constrainedAspectRatio,
          }
        : {
            width: dimensions.width * constrainedAspectRatio,
            height: height,
            // height: 100,
          }
      // console.log('container', width, height)
      // console.log('constrainedAspectRatio', constrainedAspectRatio)
      // console.log('constrainedDimensions', constrainedDimensions)
      // console.log((width / dimensions.aspectRatio / width) * height)
      // console.log(dimensions.width, dimensions.height)
      // console.log((width / dimensions.width) * dimensions.height)
      // const constrainedDimensions = {
      //   width: (height / dimensions.height) * dimensions.width,
      //   height: (width / dimensions.width) * dimensions.height,
      // }
      setSlideDimensions({
        imageDimensions: {
          width: dimensions.width,
          height: dimensions.height,
        },
        constrainedDimensions,
        containerDimensions: {
          width,
          height,
        },
        isLandscape,
      })
    }
  }, [imageContainer, dimensions])
  console.log(slideDimensions)
  return (
    <figure className={`${className} flex flex-1 justify-center`}>
      <div
        className="flex flex-1 flex-col"
        style={{
          maxWidth: `${
            slideDimensions
              ? `${slideDimensions.constrainedDimensions.width}px`
              : 'initial'
          }`,
        }}
      >
        <div
          className="flex-1"
          ref={imageContainer}
          style={{
            minHeight: 0,
          }}
        >
          {slideDimensions && (
            <div
              className=""
              style={{
                height: `${slideDimensions.constrainedDimensions.height}px`,
                width: `${slideDimensions.constrainedDimensions.width}px`,
              }}
            >
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
          )}
        </div>
        {image.figcaption && (
          <figcaption className={`flex-none w-full`}>
            {image.figcaption && (
              <RichTextSingle
                content={image.figcaption._rawText}
                className={`pt-c f-8 text-white group-hover:underline mb-1`}
              />
            )}
          </figcaption>
        )}
      </div>
    </figure>
  )
}

const Slide = ({ data }) => {
  return (
    <Link to={data.url} className="flex flex-1 group">
      <SlideImage
        image={data.image}
        alt={data.image.alt}
        dimensions={data.image.src.asset.metadata.dimensions}
      />
    </Link>
  )
}

const NewsSlide = ({ data }) => {
  return (
    <Link to={data.url} className="flex-1 grid grid-cols-2 gap-0 group">
      <div className="text-white text-center flex flex-col justify-center px-12 group-hover:underline">
        <p className="f-11">{data.subhead}</p>
        <div className="border-t pt-u mt-t">
          <h1 className="f-10">{data.title}</h1>
        </div>
      </div>
      <div className="flex flex-1 px-12">
        <SlideImage image={data.image} alt={data.image.alt} />
      </div>
    </Link>
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
