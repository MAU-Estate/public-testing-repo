import React, { useRef } from 'react'
import { Link } from 'gatsby'
import Slider from 'react-slick'
import { GatsbyImage } from 'gatsby-plugin-image'
import SanityImage from 'gatsby-plugin-sanity-image'

import RichTextSingle from './RichTextSingle'
import Icon from './Icon'

const SlideImage = ({ route, src, alt, cover, inline }) => {
  if (!inline) {
    return (
      <SanityImage
        {...src}
        width="1250"
        // image={src}
        // objectFit={cover ? 'cover' : 'contain'}
        // objectPosition="center"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        alt={alt}
        className="flex-1"
      />
    )
  }
  return (
    // add search param for index
    <Link
      to={route}
      className="flex-1 flex relative group"
      style={{ minHeight: 0 }}
      state={{
        modal: true,
      }}
    >
      <div className="h-8 w-8 absolute bottom-4 right-4 z-20 transition-opacity opacity-0 group-hover:opacity-100">
        <Icon name="plus" className="h-full w-full" />
      </div>
      <SanityImage
        {...src}
        width="1250"
        // image={src}
        // objectFit={cover ? 'cover' : 'contain'}
        // objectPosition="center"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        alt={alt}
        className="flex-1"
      />
    </Link>
  )
}
const Slide = ({ data, cover, inline, route }) => {
  if (!data.src) return <></>
  return (
    <SlideImage
      inline={inline}
      route={route}
      src={data.src}
      cover={cover}
      alt={data.src.asset.altText}
    />
  )
}

export const SlideCaption = ({
  data,
  theme,
  inline,
  goToNext,
  goToPrev,
  arrows = true,
  index,
  galleryLength,
}) => {
  const isDark = theme === 'dark'
  return (
    <div
      className={`relative z-10 pointer-events-auto w-full flex
      mt-c
      mx-auto
      pb-1
      ${isDark ? 'text-white' : 'text-black'}
      ${inline ? '' : 'container max-w-[1508px]'}
    `}
    >
      <figcaption className={`flex-1`}>
        {data.figcaption && data.figcaption._rawText && (
          <RichTextSingle
            content={data.figcaption._rawText}
            className={`f-8`}
          />
        )}
      </figcaption>
      {inline && (
        <div className="flex flex-0 justify-between">
          {arrows && (
            <div className="f-8 mr-24">
              <button onClick={goToPrev} className="pr-4 hover:underline">
                Prev
              </button>
              |
              <button onClick={goToNext} className="pl-4 hover:underline">
                Next
              </button>
            </div>
          )}
          <div className="w-12 text-right f-8">
            {index + 1} / {galleryLength}
          </div>
        </div>
      )}
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

function Gallery({
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
    arrows: false,
    swipe: false,
  }
  const navGallerySettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: !inline,
    fade: true,
    swipe: false,
    nextArrow: !inline ? <SliderArrow theme={theme} /> : null,
    prevArrow: !inline ? <SliderArrow theme={theme} type="next" /> : null,
  }
  // const [galleryDimensions, setGalleryDimensions] = useState()
  const sliderRef = useRef()
  const sliderCaptionsRef = useRef()
  const parsedSlides = []

  // handle 2 Column images
  slides.forEach(slide => {
    if (slide._type === 'figure') parsedSlides.push(slide)
    if (slide._type === 'twoColImage') {
      slide.imageL._key = `${slide._key}-left`
      slide.imageR._key = `${slide._key}-right`
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
    <div className={`Gallery ${className}`} id={slug?.current}>
      <div
        className="relative"
        style={{ height: 0, paddingBottom: `${firstSlideAspectRatio}%` }}
      >
        <Slider ref={slider => (sliderRef.current = slider)} {...settings}>
          {parsedSlides.map((slide, i) => (
            <Slide
              key={slide._key}
              data={slide}
              cover={cover}
              inline={inline}
              route={`/gallery/${slug?.current}?index=${i}`}
            />
          ))}
        </Slider>
      </div>
      <Slider
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
      </Slider>
    </div>
  )
}

export default React.memo(Gallery)
