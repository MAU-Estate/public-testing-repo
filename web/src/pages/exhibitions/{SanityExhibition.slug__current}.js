import React from 'react'
import { graphql } from 'gatsby'

export default function exhibition({
  data: {
    sanityExhibition: { title },
  },
}) {
  return <div className="container">Exhibition - {title}</div>
}

export const exhibitionQuery = graphql`
  query($id: String) {
    sanityExhibition(id: { eq: $id }) {
      title
    }
  }
`
