import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Context } from '../../context'
import ProjectHeader from '../../components/ProjectHeader'
import ProjectGallery from '../../components/ProjectGallery'

export default function Project({
  data: {
    sanityProject: { title, id, previewImage, gallery, collection, dimensions },
    allSanityProject: { edges },
  },
}) {
  let node
  const { projectEdges, projectFilterString } = useContext(Context)

  // either grab the edges which is all projects or grab the projects from the store
  if (projectEdges && projectEdges.length) {
    const projectIndex = projectEdges.findIndex(project => project.id === id)
    let nextIndex = projectIndex + 1
    let prevIndex = projectIndex - 1
    if (nextIndex >= projectEdges.length) nextIndex = 0
    if (prevIndex < 0) prevIndex = projectEdges.length - 1
    node = projectEdges[projectIndex]
    node.next = projectEdges[nextIndex]
    node.previous = projectEdges[prevIndex]
  } else {
    node = edges.find(edge => edge.node.id === id)
    if (!node.next) node.next = edges[0].node
    if (!node.previous) node.previous = edges[edges.length - 1].node
  }

  return (
    <div className="container mt-a2">
      <Helmet bodyAttributes={{ class: 'theme--light' }} />
      <ProjectHeader
        className={''}
        title={title}
        backPath={`/work${projectFilterString ? projectFilterString : ''}`}
        nextPath={`/work/${node.next.slug.current}`}
        prevPath={`/work/${node.previous.slug.current}`}
      />
      <div className="grid grid-cols-12 mt-20 mb-i">
        <ProjectGallery data={gallery} className="col-span-8" />
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
      gallery {
        ...gallery
      }
      collection {
        label
      }
      dimensions
    }
  }
`
