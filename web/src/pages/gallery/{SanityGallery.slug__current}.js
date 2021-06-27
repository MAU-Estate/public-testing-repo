import React from 'react'
import { Link, graphql } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing-3'

import Gallery from '../../components/Gallery'

export default function gallery({
  data: {
    sanityGallery: { images, slug, backUrl },
  },
}) {
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
              <Link
                to={`/${backUrl}#${slug.current}`}
                className="absolute z-20 top-0 right-0"
              >
                Close
              </Link>
              <div className="container flex flex-1">
                <Gallery slides={images} theme="light" inline={false} />
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
