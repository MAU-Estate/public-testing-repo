import React from 'react'
import { Link, graphql } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing-3'

import GalleryModal from '../../components/GalleryModal'
import Icon from '../../components/Icon'

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
        <>
          {modal ? (
            <div className="absolute inset-0 py-h flex">
              <Link to={backPath} className="absolute z-20 top-0 right-0">
                <Icon name="modalClose" className="m-10" />
              </Link>
              <div className="container flex flex-1">
                <GalleryModal slides={images} theme="light" />
              </div>
            </div>
          ) : (
            <div className="fixed inset-0 py-h z-30 bg-white flex">
              <Link to={backPath} className="absolute z-20 top-0 right-0">
                <Icon name="modalClose" className="m-10" />
              </Link>
              <div className="container flex flex-1">
                <GalleryModal slides={images} theme="light" />
              </div>
            </div>
          )}
        </>
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
