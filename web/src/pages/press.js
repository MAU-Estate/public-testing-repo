import React from 'react'
import { graphql } from 'gatsby'

const PressPage = ({ data: { sanityPress: pageData } }) => {
  return (
    <div className="container pt-25">
      <h1>{pageData.seo.title}</h1>
    </div>
  )
}

export default PressPage

export const query = graphql`
  query PressQuery {
    sanityPress {
      seo {
        title
      }
    }
  }
`
