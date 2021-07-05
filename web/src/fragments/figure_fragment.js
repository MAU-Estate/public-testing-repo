import { graphql } from 'gatsby'

export const FIGURE_FRAGMENT = graphql`
  fragment figure on SanityFigure {
    _key
    alt
    src {
      asset {
        gatsbyImageData(
          width: 2000
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
        metadata {
          dimensions {
            aspectRatio
            height
            width
          }
        }
      }
    }
    figcaption {
      _rawText
    }
  }
`
