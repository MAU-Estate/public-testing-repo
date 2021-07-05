import { graphql } from 'gatsby'

export const FIGURE_FRAGMENT = graphql`
  fragment figure on SanityFigure {
    _key
    alt
    src {
      asset {
        gatsbyImageData(layout: CONSTRAINED)
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
