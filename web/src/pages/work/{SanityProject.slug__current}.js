import React from 'react'
import { graphql, Link } from 'gatsby'

export default function project({
  data: {
    sanityProject: { title },
  },
}) {
  return (
    <div className="container pt-25">
      <Link to={'/work'}>{'<- Back'}</Link>
      <h1>Project Page - {title}</h1>
    </div>
  )
}

export const exhibitionQuery = graphql`
  query($id: String) {
    sanityProject(id: { eq: $id }) {
      title
    }
  }
`
