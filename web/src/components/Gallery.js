import React, { useRef, useState } from 'react'
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
      />
    </Link>
  )
}
const Slide = ({
  data,
  theme,
  galleryDimensions,
  cover,
  index,
  inline,
  galleryLength,
  goToPrev,
  goToNext,
  route,
}) => {
  const isDark = theme === 'dark'
  // console.log(data.src.asset.metadata.dimensions.aspectRatio)
  if (!data.src) return <></>
  // const aspectRatio = data.src.asset.metadata.dimensions.aspectRatio
  // if (galleryDimensions) {
  //   console.log(
  //     galleryDimensions,
  //     aspectRatio,
  //     galleryDimensions.width * aspectRatio
  //   )
  // }
  // const height = data.src.asset.metadata.dimensions.height
  // const width = data.src.asset.metadata.dimensions.width
  return (
    <div className="flex-1 flex flex-col">
      <SlideImage
        inline={inline}
        route={route}
        src={data.src.asset.gatsbyImageData}
        cover={cover}
        alt={data.src.asset.altText}
      />
      <div
        className={`pb-1 relative z-10 pointer-events-auto w-full flex mt-c
          max-w-[1508px]
          mx-auto
          ${isDark ? 'text-white' : 'text-black'}
          ${inline ? '' : 'container'}
        `}
      >
        <figcaption className={`flex-1 `}>
          {data.figcaption && data.figcaption._rawText && (
            <RichText content={data.figcaption._rawText} className={`f-8`} />
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
    arrows: !inline,
    swipeToSlide: false,
    nextArrow: !inline ? <SliderArrow theme={theme} /> : null,
    prevArrow: !inline ? <SliderArrow theme={theme} type="next" /> : null,
  }
  const [galleryDimensions, setGalleryDimensions] = useState()
  const sliderRef = useRef()
  const sliderContainer = useRef()
  const parsedSlides = []

  // handle 2 Column images
  slides.forEach(slide => {
    if (slide._type === 'figure') parsedSlides.push(slide)
    if (slide._type === 'twoColImage') {
      parsedSlides.push(slide.imageL)
      parsedSlides.push(slide.imageR)
    }
  })

  const firstSlideDimensions = slides[0].src?.asset.metadata.dimensions || {
    width: 1000,
    height: 1000,
  }
  const firstSlideAspectRatio =
    (firstSlideDimensions.height / firstSlideDimensions.width) * 100

  return (
    <div
      ref={ref => {
        if (ref && !sliderContainer.current) {
          sliderContainer.current = ref
          setGalleryDimensions({
            height: sliderContainer.current?.getBoundingClientRect().height,
            width: sliderContainer.current?.getBoundingClientRect().width,
          })
        }
      }}
      className={`Gallery relative ${className}`}
      style={{
        height: 0,
        paddingBottom: `${firstSlideAspectRatio}%`,
      }}
      id={slug?.current}
    >
      <Slider
        ref={slider => (sliderRef.current = slider)}
        {...settings}
        className="overflow-hidden"
      >
        {parsedSlides.map((slide, i) => (
          <Slide
            key={slide._key}
            galleryDimensions={galleryDimensions}
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
