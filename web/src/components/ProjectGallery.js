import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const ProjectGallery = ({
  className = '',
  data: {
    galleryRef: { slug, images },
  },
}) => {
  const slugPath = slug.current

  return (
    <div className={className}>
      {images.map((item, i) => {
        // const isPortrait = item.src.asset.metadata.dimensions.aspectRatio < 1
        const isPortrait = false
        return item._type === 'twoColImage' ? (
          <div key={item._key} className="grid grid-cols-2 mb-a">
            <Link to={`/gallery/${slugPath}?index=${i}`}>
              <GatsbyImage
                image={item.imageL.src.asset.gatsbyImageData}
                alt={item.imageL.alt}
              />
            </Link>
            <Link to={`/gallery/${slugPath}?index=${i}`}>
              <GatsbyImage
                image={item.imageR.src.asset.gatsbyImageData}
                alt={item.imageR.alt}
              />
            </Link>
          </div>
        ) : (
          <Link
            to={`/gallery/${slugPath}?index=${i}`}
            className={`mb-a ${isPortrait ? 'col-span-3' : 'col-span-4'}`}
          >
            <GatsbyImage
              image={item.src.asset.gatsbyImageData}
              alt={item.alt}
            />
          </Link>
        )
      })}
    </div>
  )
}

export default ProjectGallery
