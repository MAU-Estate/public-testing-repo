import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import RichText from './RichText'
export default function Figure({
  image,
  className = '',
  objectFit = 'contain',
}) {
  return (
    <figure className={className}>
      <GatsbyImage
        image={image.src.asset.gatsbyImageData}
        alt={image.alt}
        objectFit={objectFit}
      />
      {image.figcaption?.body && (
        <figcaption className={`flex-1`}>
          {image.figcaption?.body && (
            <RichText
              content={image.figcaption.body._rawText}
              className={`pt-c f-8`}
            />
          )}
        </figcaption>
      )}
    </figure>
  )
}
