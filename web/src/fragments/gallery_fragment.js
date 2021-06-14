import { graphql } from 'gatsby'

export const GALLERY_FRAGMENT = graphql`
  fragment gallery on SanityGalleryObj {
    galleryRef {
      slug {
        current
      }
      backUrl
      images {
        _key
        src {
          asset {
            gatsbyImageData
          }
        }
        figcaption {
          credit
          body {
            _rawText
          }
        }
      }
    }
  }
`
