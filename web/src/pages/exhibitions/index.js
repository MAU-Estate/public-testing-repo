import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { GatsbyImage } from 'gatsby-plugin-image'
import Seo from '../../components/Seo'

const ExhibitionsPage = ({
  data: { sanityExhibitions: pageData, allSanityExhibition: exhibitionNodes },
}) => {
  const { seo } = pageData
  const { nodes: exhibitions } = exhibitionNodes
  return (
    <div className="container pt-25">
      <Seo {...seo} />
      <Helmet bodyAttributes={{ class: 'theme--light' }} />
      <div className="mb-b pt-12 pb-a3 border-b border-grey-b flex justify-between items-end">
        <h1 className="f-5 ml-[-21px]">{seo.title}</h1>
      </div>
      <ul className="grid grid-cols-2">
        {exhibitions.map(exhibition => {
          return (
            <li className="mb-l">
              <Link to={exhibition.slug.current} className="grid grid-cols-2">
                <GatsbyImage
                  image={exhibition.previewImage.asset.gatsbyImageData}
                  alt={exhibition.previewImage.alt}
                  className="aspect-w-4 aspect-h-3"
                />
                <div>
                  <p className="f-22 mb-k uppercase">
                    {exhibition.date}–{exhibition.isSolo ? 'Solo' : 'Group'}
                  </p>
                  <h3 className="f-23 mb-3">{exhibition.title}</h3>
                  <p className="f-23--light mb-3">{exhibition.venue}</p>
                  <p className="f-23--light">{exhibition.location}</p>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ExhibitionsPage

export const query = graphql`
  query ExhibitionsQuery {
    sanityExhibitions {
      seo {
        title
        description
        image {
          ...Image
        }
      }
    }
    allSanityExhibition {
      nodes {
        title
        slug {
          current
        }
        previewImage {
          ...image
        }
        isSolo
        venue
        date(formatString: "YYYY")
        location
      }
    }
  }
`
