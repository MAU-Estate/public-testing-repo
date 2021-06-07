import React from 'react'
import { graphql } from 'gatsby'

const ContactPage = ({ data: { sanityContact: pageData } }) => {
  return (
    <div className="container pt-25">
      <h1>{pageData.seo.title}</h1>
    </div>
  )
}

export default ContactPage

export const query = graphql`
  query ContactQuery {
    sanityContact {
      seo {
        title
      }
    }
  }
`
