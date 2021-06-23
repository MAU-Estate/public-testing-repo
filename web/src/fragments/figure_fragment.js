import { graphql } from 'gatsby'

export const FIGURE_FRAGMENT = graphql`
  fragment figure on SanityFigure {
    _key
    alt
    src {
      asset {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    figcaption {
      credit
      body {
        _rawText
      }
    }
  }
`
