import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import ProjectHeader from '../../components/ProjectHeader'
import RichText from '../../components/RichText'
import ProjectGallery from '../../components/ProjectGallery'

export default function exhibition({
  data: {
    sanityExhibition: {
      artistStatementBody,
      date,
      title,
      id,
      gallery,
      venue,
      curator,
      body,
      quotedBody,
      isSolo,
      location,
    },
    allSanityExhibition: { edges },
  },
}) {
  const currentItem = edges.find(edge => edge.node.id === id)
  if (!currentItem.next) currentItem.next = edges[0].node
  if (!currentItem.previous) currentItem.previous = edges[edges.length - 1].node

  return (
    <div className="container mt-a2 mb-i">
      <Helmet bodyAttributes={{ class: 'theme--light' }} />
      <ProjectHeader
        backPath={'/exhibitions'}
        title={title}
        prevPath={`../${currentItem.previous.slug.current}`}
        nextPath={`../${currentItem.next.slug.current}`}
      />
      <div className="grid grid-cols-12 mt-h">
        <div className="col-span-4">
          <dl className="grid grid-cols-2">
            <div className="mb-10">
              <dt className="f-7 uppercase mb-3">Exhibition Title</dt>
              <dd className="f-6">{title}</dd>
            </div>
            <div className="mb-10">
              <dt className="f-7 uppercase mb-3">Show Type</dt>
              <dd className="f-6">{isSolo ? 'Solo' : 'Group'}</dd>
            </div>
            <div className="mb-10">
              <dt className="f-7 uppercase mb-3">Curator</dt>
              <dd className="f-6">{curator}</dd>
            </div>
            <div className="mb-10">
              <dt className="f-7 uppercase mb-3">Venue</dt>
              <dd className="f-6">{venue}</dd>
            </div>
            <div className="mb-10">
              <dt className="f-7 uppercase mb-3">Year</dt>
              <dd className="f-6">{date}</dd>
            </div>
            <div className="mb-10">
              <dt className="f-7 uppercase mb-3">Location</dt>
              <dd className="f-6">{location}</dd>
            </div>
          </dl>
          <div className="border-t border-grey-b pt-v mt-m">
            <div className="mb-n">
              <h2 className="f-25">Original Press Release</h2>
            </div>
            <RichText className="f-6" content={body._rawText} />
          </div>
          {artistStatementBody && (
            <div className="border-t border-grey-b pt-v mt-m">
              <div className="mb-n">
                <h2 className="f-25">Artist Statement</h2>
              </div>
              <RichText
                className="f-6"
                content={artistStatementBody._rawText}
              />
            </div>
          )}
          {quotedBody && (
            <div className="border-t border-grey-b pt-v mt-m">
              <div className="mb-n">
                <h2 className="f-25">Quoted</h2>
              </div>
              <RichText className="f-6" content={quotedBody._rawText} />
            </div>
          )}
        </div>
        <div className="col-start-6 col-span-7">
          <ProjectGallery data={gallery} className="col-span-8" />
        </div>
      </div>
    </div>
  )
}

export const exhibitionQuery = graphql`
  query ($id: String) {
    sanityExhibition(id: { eq: $id }) {
      artistStatementBody {
        _rawText
      }
      body {
        _rawText
      }
      curator
      date(formatString: "YYYY")
      id
      isSolo
      location
      gallery {
        ...gallery
      }
      quotedBody {
        _rawText
      }
      title
      venue
    }
    allSanityExhibition {
      edges {
        next {
          slug {
            current
          }
        }
        previous {
          slug {
            current
          }
        }
        node {
          id
          slug {
            current
          }
        }
      }
    }
  }
`
