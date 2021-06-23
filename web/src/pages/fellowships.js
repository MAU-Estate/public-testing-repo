import React from 'react'
import { graphql } from 'gatsby'

const FellowshipsPage = ({ data: { sanityFellowships: pageData } }) => {
  const { title, seo } = pageData
  return (
    <>
      <div className="relative pt-25 pb-b ">
        <div className="absolute inset-0 flex">
          <img
            className="object-cover"
            src="https://via.placeholder.com/2000x500"
            alt="placeholder"
          />
        </div>
        <div className="container">
          <h1 className="text-white f-5 pb-a3 border-b border-white">
            {title}
          </h1>
        </div>
      </div>
      <div className="pt-b bg-black text-white">
        <div className="container">Information</div>
      </div>
    </>
  )
}

export default FellowshipsPage

export const query = graphql`
  query FellowshipsQuery {
    sanityFellowships {
      seo {
        title
      }
      title
    }
  }
`
