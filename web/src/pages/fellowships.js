import React from 'react'
import { graphql } from 'gatsby'

const FellowshipsPage = ({ data: { sanityFellowships: pageData } }) => {
  return (
    <div className="container pt-25">
      <h1>{pageData.seo.title}</h1>
    </div>
  )
}

export default FellowshipsPage

export const query = graphql`
  query FellowshipsQuery {
    sanityFellowships {
      seo {
        title
      }
    }
  }
`
