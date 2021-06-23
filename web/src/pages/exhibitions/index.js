import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const ExhibitionsPage = ({
  data: { sanityExhibitions: pageData, allSanityExhibition: exhibitionNodes },
}) => {
  const { seo } = pageData
  const { nodes: exhibitions } = exhibitionNodes

  console.log(exhibitions)
  return (
    <div className="container pt-25">
      <div className="mb-b pb-a3 border-b border-grey-b flex justify-between items-end">
        <h1 className="f-5">{seo.title}</h1>
      </div>
      <ul className="grid grid-cols-2">
        {exhibitions.map(exhibition => {
          return (
            <li className="mb-l">
              <Link to={exhibition.slug.current} className="grid grid-cols-2">
                <GatsbyImage
                  image={exhibition.previewImage.src.asset.gatsbyImageData}
                  alt={exhibition.previewImage.alt}
                  className="aspect-w-4 aspect-h-3"
                />
                <div>
                  <p className="f-22 mb-k">2019–Solo</p>
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
      }
    }
    allSanityExhibition {
      nodes {
        title
        slug {
          current
        }
        previewImage {
          ...figure
        }
        media {
          ...figure
        }
        venue
        location
      }
    }
  }
`
