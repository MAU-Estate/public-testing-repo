import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import RichText from '../components/RichText'

const ContactPage = ({ data: { sanityContact: pageData } }) => {
  const {
    title,
    headerImages,
    advisorsBody,
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
            <RichText content={body._rawText} className="f-27" />
          </div>
          <div className="col-start-7 col-span-3 border-t border-grey-b pt-4">
            <RichText content={infoBody._rawText} className="f-7" />
          </div>
          <div className="col-start-10 col-span-3">
            <div className="border-t border-grey-b pt-4 mb-25">
              <RichText content={survivedByBody._rawText} className="f-6" />
            </div>
            <div className="border-t border-grey-b pt-4 mb-25">
              <RichText content={directorBody._rawText} className="f-6" />
            </div>
            <div className="border-t border-grey-b pt-4">
              <RichText content={advisorsBody._rawText} className="f-6" />
            </div>
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
    }
  }
`
