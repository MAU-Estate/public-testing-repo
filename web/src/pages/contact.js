import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import RichText from '../components/RichText'
import RichTextSingle from '../components/RichTextSingle'

const ContactPage = ({ data: { sanityContact: pageData } }) => {
  const {
    title,
    headerImages,
    advisorsBody,
    creditsBody,
    directorBody,
    body,
    infoBody,
    survivedByBody,
  } = pageData
  return (
    <>
      <PageHeader
        images={headerImages}
        title={title}
        titleClasses="ml-[-12px]"
      />
      <div className="bg-black text-white pb-i">
        <div className="container pt-b grid grid-cols-12">
          <div className="col-span-5">
            <RichTextSingle content={body._rawText} className="f-27" />
          </div>
          <div className="col-start-7 col-span-3 border-t border-grey-b pt-4">
            <RichText content={infoBody._rawText} />
          </div>
          <div className="col-start-10 col-span-3">
            {survivedByBody && (
              <div className="border-t border-grey-b pt-4 mb-25">
                <RichText content={survivedByBody._rawText} />
              </div>
            )}
            {directorBody && (
              <div className="border-t border-grey-b pt-4 mb-25">
                <RichText content={directorBody._rawText} />
              </div>
            )}
            {advisorsBody && (
              <div className="border-t border-grey-b pt-4 mb-25">
                <RichText content={advisorsBody._rawText} />
              </div>
            )}
            {creditsBody && (
              <div className="border-t border-grey-b pt-4">
                <RichText content={creditsBody._rawText} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage

export const query = graphql`
  query ContactQuery {
    sanityContact {
      seo {
        title
      }
      title
      body {
        _rawText
      }
      directorBody {
        _rawText
      }
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
      infoBody {
        _rawText
      }
      survivedByBody {
        _rawText
      }
      advisorsBody {
        _rawText
      }
      creditsBody {
        _rawText
      }
    }
  }
`
