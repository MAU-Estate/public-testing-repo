import React from 'react'
import { Link } from 'gatsby'
import SanityImage from 'gatsby-plugin-sanity-image'

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
        const isPortrait =
          item._type !== 'twoColImage' &&
          item.src.asset.metadata.dimensions.aspectRatio < 1
        return item._type === 'twoColImage' ? (
          <div key={item._key} className="grid col-span-4 grid-cols-2 mb-a">
            {item.imageL && (
              <Link to={`/gallery/${slugPath}?index=${i}`}>
                <SanityImage {...item.imageL.src} alt={item.imageL.alt} />
              </Link>
            )}
            {item.imageR && (
              <Link to={`/gallery/${slugPath}?index=${i}`}>
                <SanityImage {...item.imageR.src} alt={item.imageR.alt} />
              </Link>
            )}
          </div>
        ) : (
          <Link
            to={`/gallery/${slugPath}?index=${i}`}
            className={`mb-a ${isPortrait ? 'col-span-3' : 'col-span-4'}`}
          >
            <SanityImage {...item.src} alt={item.alt} />
          </Link>
        )
      })}
    </div>
  )
}

export default ProjectGallery
