import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import RichText from '../components/RichText'
import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'

const FellowshipsPage = ({
  data: { sanityFellowships: pageData, allSanityFellow },
}) => {
  const {
    title,
    seo,
    headerImages,
    headerBodyLeft,
    headerBodyRight,
    recipientLabel,
  } = pageData

  const { nodes: fellows } = allSanityFellow
  return (
    <>
      <Seo {...seo} />
      <PageHeader
        image={headerImages[0]}
        title={title}
        titleClasses="ml-[-21px]"
      />
      <div className="pt-b bg-black text-white">
        <div className="container">
          <div className="grid grid-cols-12 mb-p">
            <div className="col-span-5">
              <RichText className="f-27" content={headerBodyLeft._rawText} />
            </div>
            <div className="col-span-5">
              <RichText className="f-27" content={headerBodyRight._rawText} />
            </div>
          </div>
          {/* Recipient */}
          {fellows.map(fellow => (
            <div className="border-t border-grey-b pt-3 pb-i">
              <h2 className="f-28">
                {fellow.year} {recipientLabel}
              </h2>
              <div className="grid grid-cols-12 mt-n">
                <div className="grid col-span-6 grid-cols-3">
                  <div className="col-span-1">
                    <GatsbyImage
                      className="aspect-w-1 aspect-h-1 rounded-full"
                      image={fellow.avatar.asset.gatsbyImageData}
                      alt={'alt text'}
                    />
                  </div>
                  <div className="col-span-2">
                    <div className="mb-q">
                      <h3 className="f-28">{fellow.title}</h3>
                    </div>
                    <RichText
                      className="f-29 text-grey-d"
                      content={fellow.education._rawText}
                    />
                  </div>
                </div>
                <div className="col-span-5">
                  <RichText className="f-6" content={fellow.body._rawText} />
                  <p className="f-6">–</p>
                  <RichText content={fellow.infoBody._rawText} />
                </div>
              </div>
            </div>
          ))}
        </div>
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
      headerImages {
        asset {
          gatsbyImageData(layout: FULL_WIDTH)
          metadata {
            dimensions {
              aspectRatio
            }
          }
        }
      }
      headerBodyLeft {
        _rawText
      }
      headerBodyRight {
        _rawText
      }
      recipientLabel
    }
    allSanityFellow {
      nodes {
        year(formatString: "YYYY")
        title
        education {
          _rawText
        }
        body {
          _rawText
        }
        avatar {
          asset {
            gatsbyImageData(layout: FULL_WIDTH)
            metadata {
              dimensions {
                aspectRatio
              }
            }
          }
        }
        infoBody {
          _rawText
        }
        _key
      }
    }
  }
`
