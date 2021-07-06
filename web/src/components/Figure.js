import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import RichTextSingle from './RichTextSingle'
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
        className="flex-1"
      />
      {image.figcaption && (
        <figcaption className={`flex-1`}>
          {image.figcaption && (
            <RichTextSingle
              content={image.figcaption._rawText}
              className={`pt-c f-8`}
            />
          )}
        </figcaption>
      )}
    </figure>
  )
}
