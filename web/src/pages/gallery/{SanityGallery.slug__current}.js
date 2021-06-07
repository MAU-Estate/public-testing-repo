import React from 'react'
import { Link, graphql } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing-3'

export default function gallery({
  data: {
    sanityGallery: { title },
  },
}) {
  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <div>
          <h2>Gallery - {title}</h2>
          {modal ? (
            <>
              <h2>Gallery loaded in a modal</h2>
              <Link to={closeTo}>Close</Link>
            </>
          ) : (
            <header>
              <h2>Gallery loaded in a page</h2>
              <Link to={'/'}>Go Home</Link>
            </header>
          )}
        </div>
      )}
    </ModalRoutingContext.Consumer>
  )
}

export const galleryQuery = graphql`
  query($id: String) {
    sanityGallery(id: { eq: $id }) {
      title
    }
  }
`
