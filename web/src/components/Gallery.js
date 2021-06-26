import React, { useRef } from 'react'
import { Link } from 'gatsby'
import Slider from 'react-slick'
import { GatsbyImage } from 'gatsby-plugin-image'

import RichText from './RichText'
import Icon from './Icon'

const SlideImage = ({ route, src, alt, cover, inline }) => {
  if (!inline) {
    return (
      <GatsbyImage
        image={src}
        objectFit={cover ? 'cover' : 'contain'}
        objectPosition="center"
        alt={alt}
        // imgClassName="pointer-events-auto"
      />
    )
  }
  return (
    <Link to={route} className="flex-1 flex" style={{ minHeight: 0 }}>
      <GatsbyImage
        image={src}
        objectFit={cover ? 'cover' : 'contain'}
        objectPosition="center"
        alt={alt}
        imgClassName="pointer-events-auto"
      />
    </Link>
  )
}
const Slide = ({
  data,
  theme,
  cover,
  index,
  inline,
  galleryLength,
  goToPrev,
  goToNext,
  route,
}) => {
  const isDark = theme === 'dark'
  return (
    <figure className="relative flex-1">
      <div className="absolute inset-0 flex flex-col">
        <SlideImage
          inline={inline}
          route={route}
          src={data.src.asset.gatsbyImageData}
          cover={cover}
          alt={data.src.asset.altText}
        />
        <div
          className={`relative z-10 pointer-events-auto w-full flex mt-c
            max-w-[1508px]
            mx-auto
            ${isDark ? 'text-white' : 'text-black'}
            ${inline ? '' : 'container'}
          `}
        >
          <figcaption className={`flex-1`}>
            {data.figcaption?.body && (
              <RichText
                content={data.figcaption.body._rawText}
                className={`py-1 f-8`}
              />
            )}
          </figcaption>
          {inline && (
            <div className="flex justify-between">
              <div className="f-8 mr-24">
                <button onClick={goToPrev} className="pr-4">
                  Prev
                </button>
                |
                <button onClick={goToNext} className="pl-4">
                  Next
                </button>
              </div>
              <div className="f-8">
                {index + 1} / {galleryLength}
              </div>
            </div>
          )}
        </div>
      </div>
    </figure>
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

export default function Gallery({
  slides,
  slug,
  className = '',
  theme = 'dark',
  inline = true,
  cover = true,
}) {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    fade: true,
    arrows: !inline,
    nextArrow: !inline ? <SliderArrow theme={theme} /> : null,
    prevArrow: !inline ? <SliderArrow theme={theme} type="next" /> : null,
  }
  const sliderRef = useRef()
  return (
    <div className={`Gallery flex flex-1 ${className}`} id={slug?.current}>
      <Slider
        ref={slider => (sliderRef.current = slider)}
        {...settings}
        className="flex flex-1"
        id="test"
      >
        {slides.map((slide, i) => (
          <Slide
            key={slide._key}
            index={i}
            galleryLength={slides.length}
            goToPrev={() => sliderRef.current.slickPrev()}
            goToNext={() => sliderRef.current.slickNext()}
            data={slide}
            theme={theme}
            cover={cover}
            inline={inline}
            route={`/gallery/${slug?.current}?index=${i}`}
          />
        ))}
      </Slider>
    </div>
  )
}
