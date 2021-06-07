import React from 'react'
import { graphql } from 'gatsby'

const CvPage = ({ data: { sanityCv: pageData } }) => {
  return (
    <div className="container pt-25">
      <h1>{pageData.seo.title}</h1>
    </div>
  )
}

export default CvPage

export const query = graphql`
  query cvQuery {
    sanityCv {
      seo {
        title
      }
    }
  }
`
