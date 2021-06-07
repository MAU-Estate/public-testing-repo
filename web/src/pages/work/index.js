import React from 'react'
import { graphql, Link } from 'gatsby'

export default function work({
  data: {
    sanityWork: { seo, title },
    projects,
  },
}) {
  return (
    <div className="container pt-25">
      <div className="pb-a3 mb-b border-b border-grey-b flex justify-between items-end">
        <h1 className="f-5">{title}</h1>
        {/* radios */}
        <div className="flex f-16">
          <label htmlFor="featured" className="relative">
            <input
              type="radio"
              name="featured"
              id="featured"
              className="absolute opacity-0"
            />
            Featured
          </label>
          <div className="">/</div>
          <label htmlFor="all" className="relative">
            <input
              type="radio"
              name="featured"
              id="all"
              className="absolute opacity-0"
            />
            All
          </label>
        </div>
        <button
          onClick={() => alert('filter')}
          className="rounded-md border py-1 px-4"
        >
          <span className="f-9 block">Filter</span>
        </button>
      </div>
      <ul className="grid grid-cols-3 gap-x-11 gap-y-h">
        {projects &&
          projects.nodes.map(({ title, slug }) => (
            <li key={slug}>
              <Link key={slug.current} to={slug.current}>
                <div className="aspect-w-1 aspect-h-1 mb-a3">
                  <img
                    className="object-contain"
                    src="https://via.placeholder.com/480x640"
                  />
                </div>
                <p className="f-18 mb-2">{title}</p>
                <p className="f-18">year tbd</p>
              </Link>
            </li>
          ))}
        {projects &&
          projects.nodes.map(({ title, slug }) => (
            <li key={slug}>
              <Link key={slug.current} to={slug.current}>
                <div className="aspect-w-1 aspect-h-1 mb-a3">
                  <img
                    className="object-contain"
                    src="https://via.placeholder.com/320x320"
                  />
                </div>
                <p className="f-18 mb-2">{title}</p>
                <p className="f-18">year tbd</p>
              </Link>
            </li>
          ))}
        {projects &&
          projects.nodes.map(({ title, slug }) => (
            <li key={slug}>
              <Link key={slug.current} to={slug.current}>
                <div className="aspect-w-1 aspect-h-1 mb-a3">
                  <img
                    className="object-contain"
                    src="https://via.placeholder.com/320x240"
                  />
                </div>
                <p className="f-18 mb-2">{title}</p>
                <p className="f-18">year tbd</p>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export const workQuery = graphql`
  query workQuery {
    sanityWork {
      seo {
        title
      }
      title
    }
    projects: allSanityProject {
      nodes {
        title
        slug {
          current
        }
      }
    }
  }
`
