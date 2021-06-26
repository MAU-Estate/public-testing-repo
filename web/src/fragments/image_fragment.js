import { graphql } from 'gatsby'

export const IMAGE_FRAGMENT = graphql`
  fragment image on SanityImage {
    asset {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
`
