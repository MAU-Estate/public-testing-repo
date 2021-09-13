import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import RichText from '../components/RichText'
import RichTextSingle from '../components/RichTextSingle'
import Seo from '../components/Seo'

const ContactPage = ({ data: { sanityContact: pageData, sanityCv } }) => {
  const {
    cvDownloadLabel,
    seo,
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
      <Seo {...seo} />
      <PageHeader
        images={headerImages}
        title={title}
        titleClasses="ml-[-12px]"
      />
      <div className="bg-black text-white pb-i">
        <div className="container pt-b md:grid grid-cols-12">
          <div className="sm-only:mb-24 col-span-5">
            <RichTextSingle content={body._rawText} className="f-27" />
          </div>
          <div className="sm-only:mb-25 col-start-7 col-span-3 border-t border-grey-b pt-4">
            <RichText content={infoBody._rawText} />
            {cvDownloadLabel && sanityCv.download && (
              <div className="mt-25">
                <p className="f-6">
                  <a
                    href={sanityCv.download.asset.url}
                    className="link"
                    target="_blank"
                    rel="noreferrer noopener nofollower"
                  >
                    {cvDownloadLabel}
                  </a>
                </p>
              </div>
            )}
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
        description
        image {
          ...Image
        }
      }
      title
      body {
        _rawText
      }
      cvDownloadLabel
      directorBody {
        _rawText
      }
      headerImages {
        ...ImageWithPreview
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
    sanityCv {
      download {
        asset {
          url
          originalFilename
        }
      }
    }
  }
`
