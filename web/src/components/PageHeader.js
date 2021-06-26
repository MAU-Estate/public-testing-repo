import React from 'react'

import { GatsbyImage } from 'gatsby-plugin-image'

const PageHeader = ({ image, title }) => {
  return (
    <div className="relative pt-25 pb-b ">
      <div className="absolute inset-0 flex">
        <GatsbyImage
          image={image.asset.gatsbyImageData}
          alt="header background image"
          objectFit="cover"
          className="flex-1"
        />
      </div>
      <div className="container">
        <h1 className="text-white f-5 pb-a3 border-b border-white">{title}</h1>
      </div>
    </div>
  )
}

export default PageHeader
