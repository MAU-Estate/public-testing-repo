import React from 'react'
import { Link, graphql } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing-3'

import GalleryHome from '../../components/GalleryHome'

export default function gallery({
  data: {
    sanityGallery: { images, slug, backUrl },
  },
}) {
  const backPath =
    backUrl === '/' ? `/#${slug.current}` : `/${backUrl}/${slug.current}`
  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <div>
          {modal ? (
            <>
              <h2>Gallery loaded in a modal</h2>
              <Link to={closeTo}>Close</Link>
            </>
          ) : (
            <div className="fixed inset-0 py-h z-30 bg-white flex">
              <Link to={backPath} className="absolute z-20 top-0 right-0">
                Close
              </Link>
              <div className="container flex flex-1">
                <GalleryHome
                  slides={images}
                  theme="light"
                  inline={false}
                  className="flex flex-1 relative"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </ModalRoutingContext.Consumer>
  )
}

export const galleryQuery = graphql`
  query ($id: String) {
    sanityGallery(id: { eq: $id }) {
      slug {
        current
      }
      backUrl
      images {
        ... on SanityFigure {
          _key
          _type
          ...figure
        }
        ... on SanityTwoColImage {
          _key
          _type
          imageL {
            ...figure
          }
          imageR {
            ...figure
          }
        }
      }
    }
  }
`
