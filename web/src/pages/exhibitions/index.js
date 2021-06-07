import React from 'react'
import { graphql } from 'gatsby'

const ExhibitionsPage = ({ data: { sanityExhibitions: pageData } }) => {
  return (
    <div className="container pt-25">
      <h1>{pageData.seo.title}</h1>
    </div>
  )
}

export default ExhibitionsPage

export const query = graphql`
  query ExhibitionsQuery {
    sanityExhibitions {
      seo {
        title
      }
    }
  }
`
