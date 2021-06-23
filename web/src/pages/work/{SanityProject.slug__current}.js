import React from 'react'
import { graphql, Link, navigate } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Icon from '../../components/Icon'

export default function project({
  data: {
    sanityProject: { title, id, previewImage, collection, dimensions },
    allSanityProject: { edges },
  },
}) {
  const node = edges.find(edge => edge.node.id === id)
  if (!node.next) node.next = edges[0].node
  if (!node.previous) node.previous = edges[edges.length - 1].node

  return (
    <div className="container mt-a2">
      <div className="border-t border-grey-b pt-t flex justify-between items-end mb-h">
        <h1 className="f-21">{title}</h1>
        <div className="h-11 flex items-center">
          <button onClick={() => navigate(-1)} className="flex">
            <Icon name="grid" className="mx-6" />
          </button>
          <div className="border-r border-grey-b self-stretch"></div>
          <Link
            to={`/work/${node.previous.slug.current}`}
            className="flex pl-6 pr-3"
          >
            <Icon name="arrowLeft" className="w-[22px]" />
          </Link>
          <Link to={`/work/${node.next.slug.current}`} className="flex pl-3">
            <Icon name="arrowRight" className="w-[22px]" />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-12 mb-i">
        <div className="col-span-6">
          <GatsbyImage
            image={previewImage.src.asset.gatsbyImageData}
            alt={previewImage.alt}
            objectFit="contain"
            className=""
          />
        </div>
        <div className="col-start-10 col-span-3">
          <dl className="mb-22">
            <dt className="f-7 mb-3 uppercase">Work Title</dt>
            <dd className="f-6 mb-10">{title}</dd>
            <dt className="f-7 mb-3 uppercase">Year</dt>
            <dd className="f-6 mb-10">Year tbd</dd>
            <dt className="f-7 mb-3 uppercase">Materials</dt>
            <dd className="f-6 mb-10">Materials Tbd</dd>
            <dt className="f-7 mb-3 uppercase">Dimensions</dt>
            <dd className="f-6 mb-10">{dimensions}</dd>
            {/* @TODO What if multiple collections*/}
            <dt className="f-7 mb-3 uppercase">Collection</dt>
            <dd className="f-6">{collection[0].label}</dd>
          </dl>
          <p className="f-6">
            “Shanks perfectly exemplifies Unger’s inclinations—rational yet
            connected to nature, serene but passionate, rigorously formed yet
            playful.”<br></br> –Judith Page, Sculpture Magazine, Month, 1999
          </p>
          <p className="f-6">
            “The overall effect of the nearly nine-foot, tripartite composition
            is one of uncanny, restless grace.”<br></br> –Horace Ballard,
            Williams College Museum of Art, 2022
          </p>
        </div>
      </div>
      {/* <Link to={'/work'}>{'<- Back'}</Link> */}
    </div>
  )
}

export const exhibitionQuery = graphql`
  query ($id: String) {
    allSanityProject {
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
    sanityProject(id: { eq: $id }) {
      id
      title
      previewImage {
        ...figure
      }
      collection {
        label
      }
      dimensions
    }
  }
`
