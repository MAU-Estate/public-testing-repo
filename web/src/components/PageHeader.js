import React, { useState, useEffect } from 'react'
import SanityImage from 'gatsby-plugin-sanity-image'

const PageHeader = ({ images, title, titleClasses = '' }) => {
  const [index, setIndex] = useState()

  useEffect(
    () => setIndex(Math.floor(Math.random() * images.length)),
    [images.length]
  )

  return (
    <div className="relative pt-header pb-b ">
      <div className="absolute inset-0 flex">
        {index !== undefined && (
          <SanityImage
            {...images[index]}
            alt="header background image"
            className="flex-1"
          />
        )}
      </div>
      <div className="container">
        <div className="border-b border-white pb-a3 f-5 text-white ">
          <h1 className={`${titleClasses}`}>{title}</h1>
        </div>
      </div>
    </div>
  )
}

export default PageHeader
