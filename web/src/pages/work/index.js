import React, { useEffect, useState } from 'react'
import { graphql, Link } from 'gatsby'
import queryString from 'query-string'

import FilterList from '../../components/FilterList'

const filterProject = (project, filters, type) => {
  const filterOptions = filters[type]
  if (!filterOptions || !filterOptions.length) return true
  const projectFilterTypeOptions = project[type]
  if (!projectFilterTypeOptions) return false

  return filterOptions.some(filter => {
    return projectFilterTypeOptions
      .map(option => option.slug.current)
      .includes(filter)
  })
}

const Work = ({
  location,
  data: {
    sanityWork: { seo, title },
    projects,
    materials,
    mediums,
    collections,
  },
}) => {
  const getFilteredProjects = filters => {
    return projects.nodes.filter(project => {
      return (
        filterProject(project, filters, 'medium') &&
        filterProject(project, filters, 'collection') &&
        filterProject(project, filters, 'material')
      )
      // filterProject(project, filters, 'era') &&
    })
  }

  const [activeFilters, setActiveFilters] = useState(
    location.search
      ? queryString.parse(location.search, { arrayFormat: 'comma' })
      : {
          featured: true,
        }
  )

  const [filteredProjects, setFilteredProjects] = useState(
    getFilteredProjects(activeFilters)
  )

  const setUrlParams = state => {
    const params = queryString.stringify(state, { arrayFormat: 'comma' })
    const updatedUrl = location.pathname + '?' + params
    window.history.pushState({ path: updatedUrl }, '', updatedUrl)
  }

  const handleResetFilters = () => {
    const defaultFilters = { featured: activeFilters.featured }
    setActiveFilters(defaultFilters)
    setFilteredProjects(getFilteredProjects(defaultFilters))
    setUrlParams(defaultFilters)
  }

  const handleSetActiveFilter = (filter, value) => {
    const result = activeFilters
    result[filter] = value
    setActiveFilters({ ...result })
    setFilteredProjects(getFilteredProjects({ ...result }))
    setUrlParams({ ...result })
  }

  return (
    <div className="container pt-25">
      <div className="pb-a3 border-b border-grey-b flex justify-between items-end">
        <h1 className="f-5">{title}</h1>
        {/* radios */}
        <div className="flex f-16">
          <label htmlFor="featured" className="relative">
            <input
              type="radio"
              name="featured"
              id="featured"
              className="absolute opacity-0"
              // onChange={() => setParam('featured', true)}
              // checked={showFeatured}
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
              // onChange={() => setParam('featured', false)}
              // checked={!showFeatured}
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
      <div className="flex justify-between mt-j">
        <div className="flex">
          <FilterList
            title="Medium"
            className="flex-1"
            activeItems={activeFilters.medium}
            onSelect={filters => handleSetActiveFilter('medium', filters)}
            items={mediums.nodes}
          />
          {/* <FilterList
            title="Era"
            className="flex-1 ml-12"
            activeItems={activeFilters.eras}
            onSelect={filters => handleSetActiveFilter('era', filters)}
            items={[{ label: '1990', slug: '1990' }]}
          /> */}
          <FilterList
            title="Collection"
            activeItems={activeFilters.collection}
            className="flex-1 ml-12"
            onSelect={filters => handleSetActiveFilter('collection', filters)}
            items={collections.nodes}
          />
          <FilterList
            title="Materials"
            activeItems={activeFilters.material}
            className="flex-1 ml-12"
            onSelect={filters => handleSetActiveFilter('material', filters)}
            items={materials.nodes}
          />
        </div>
        <div>
          <button className="text-grey-d" onClick={handleResetFilters}>
            Reset Filters
          </button>
        </div>
      </div>
      <ul className="mt-b grid grid-cols-3 gap-x-11 gap-y-h">
        {filteredProjects &&
          filteredProjects.map(({ title, slug, date }, i) => (
            <li key={slug.current}>
              <Link to={slug.current}>
                <div className="aspect-w-1 aspect-h-1 mb-a3">
                  <img
                    className="object-contain"
                    src="https://via.placeholder.com/480x640"
                  />
                </div>
                <p className="f-18 mb-2">{title}</p>
                <p className="f-18">{date}</p>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Work

export const workQuery = graphql`
  query workQuery {
    sanityWork {
      seo {
        title
      }
      title
    }
    projects: allSanityProject(sort: { fields: date, order: DESC }) {
      nodes {
        title
        date(formatString: "YYYY")
        slug {
          current
        }
        material {
          slug {
            current
          }
        }
        medium {
          slug {
            current
          }
        }
        collection {
          slug {
            current
          }
        }
      }
    }
    materials: allSanityMaterial {
      nodes {
        label
        slug {
          current
        }
        id
      }
    }
    mediums: allSanityMedium {
      nodes {
        label
        slug {
          current
        }
        id
      }
    }
    collections: allSanityCollection {
      nodes {
        label
        slug {
          current
        }
        id
      }
    }
  }
`
