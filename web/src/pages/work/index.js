import React, { useState, useRef } from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import queryString from 'query-string'

import useObserver from '../../hooks/useObserver'

import FilterList from '../../components/FilterList'

const getFeaturedProjects = (featuredProjects, projects) => {
  const featuredIds = featuredProjects.map(project => project.id)
  return projects.filter(project => featuredIds.indexOf(project.id) !== -1)
}

const filterProject = (project, filters, type) => {
  const filterOptions = filters[type]

  // return true if this filter has no options attached
  if (!filterOptions || !filterOptions.length) return true

  const projectFilterTypeOptions =
    typeof project[type] === 'string' ? [project[type]] : project[type]

  if (!projectFilterTypeOptions || !projectFilterTypeOptions.length)
    return false

  if (typeof filterOptions === 'string') {
    return projectFilterTypeOptions
      .map(option => option.slug?.current || option)
      .includes(filterOptions)
  } else {
    return filterOptions.some(filter => {
      return projectFilterTypeOptions
        .map(option => option.slug?.current || option)
        .includes(filter)
    })
  }
}

const getAvailableFilters = projects => {
  const result = {
    medium: [],
    collection: [],
    material: [],
    era: [],
  }
  projects.forEach(project => {
    if (project.medium) {
      project['medium'].forEach(option => {
        if (result.medium.indexOf(option) === -1) {
          result.medium.push(option.slug.current)
        }
      })
    }
    if (project.era) {
      const era = project.era
      if (result.era.indexOf(era) === -1) {
        result.era.push(era)
      }
    }
    if (project.collection) {
      project['collection'].forEach(option => {
        if (result.collection.indexOf(option) === -1) {
          result.collection.push(option.slug.current)
        }
      })
    }
    if (project.material) {
      project['material'].forEach(option => {
        if (result.material.indexOf(option) === -1) {
          result.material.push(option.slug.current)
        }
      })
    }
  })
  return result
}

const getProjectYearsByDecade = years => {
  const decades = years.map(year => {
    const _year = Number(year)
    return (_year - (_year % 10)).toString()
  })
  const decadesSet = new Set(decades)
  return Array.from(decadesSet)
}

const getFiltersState = filters => {
  return (
    !!filters.medium?.length ||
    !!filters.era?.length ||
    !!filters.material?.length ||
    !!filters.collection?.length
  )
}

const Work = ({
  location,
  data: {
    sanityWork: { seo, title, featured },
    projects,
    materials,
    mediums,
    collections,
  },
}) => {
  const getFilteredProjects = filters => {
    const filterResult = []
    const filterRejects = []
    const featuredProjects =
      activeFilters.featured === 'true'
        ? getFeaturedProjects(featured, projects.nodes)
        : projects.nodes
    featuredProjects.forEach(project => {
      if (
        filterProject(project, filters, 'medium') &&
        filterProject(project, filters, 'collection') &&
        filterProject(project, filters, 'material') &&
        filterProject(project, filters, 'era')
      ) {
        filterResult.push(project)
      } else {
        filterRejects.push(project)
      }
    })
    return { filterResult, filterRejects }
  }

  const [activeFilters, setActiveFilters] = useState(
    location.search
      ? queryString.parse(location.search, { arrayFormat: 'comma' })
      : {
          featured: 'true',
        }
  )
  const [isFilterVisible, setIsFilterVisible] = useState(false)
  const { filterResult, filterRejects } = getFilteredProjects(activeFilters)
  const [filteredProjects, setFilteredProjects] = useState(filterResult)
  const hasFiltering = getFiltersState(activeFilters)
  const filterRef = useRef()
  const [filterHeight, setFilterHeight] = useState()
  useObserver({
    callback: val => setFilterHeight(val[0].borderBoxSize.blockSize),
    element: filterRef,
  })
  console.log(filterHeight)

  const setUrlParams = state => {
    const params = queryString.stringify(state, { arrayFormat: 'comma' })
    const updatedUrl = location.pathname + '?' + params
    window.history.pushState({ path: updatedUrl }, '', updatedUrl)
  }

  const yearOptions = getProjectYearsByDecade(
    projects.nodes.map(project => project.era)
  )

  const handleResetFilters = () => {
    const defaultFilters = { featured: activeFilters.featured }
    setActiveFilters(defaultFilters)
    const { filterResult, filterRejects } = getFilteredProjects(defaultFilters)
    setFilteredProjects(filterResult)
    setUrlParams(defaultFilters)
  }

  const handleSetActiveFilter = (filter, value) => {
    const result = activeFilters
    result[filter] = value
    const { filterResult, filterRejects } = getFilteredProjects({ ...result })
    setFilteredProjects(filterResult)
    setActiveFilters({ ...result })
    setUrlParams({ ...result })
  }

  const isFeatured = activeFilters.featured === 'true'

  return (
    <div className="container pt-25">
      <div className="pb-a3 border-b border-grey-b flex justify-between items-end relative z-10 bg-white">
        <h1 className="f-5">{title}</h1>

        {/* radios */}

        <div className="flex uppercase f-16--light">
          <div className="radio relative cursor-pointer">
            <input
              type="radio"
              name="featuredFilter"
              id="featured"
              className="absolute cursor-pointer opacity-0 h-full w-full"
              onChange={() => handleSetActiveFilter('featured', 'true')}
              checked={isFeatured}
            />
            <label htmlFor="featured">Featured</label>
          </div>
          <div className="mx-1">/</div>
          <div className="radio relative cursor-pointer">
            <input
              type="radio"
              name="featuredFilter"
              id="all"
              className="absolute cursor-pointer opacity-0 h-full w-full"
              onChange={() => handleSetActiveFilter('featured', 'false')}
              checked={!isFeatured}
            />
            <label htmlFor="all">All</label>
          </div>
        </div>
        <button
          onClick={() => setIsFilterVisible(!isFilterVisible)}
          className={`rounded-md border py-1 px-4 ${
            isFilterVisible ? 'bg-grey-e' : ''
          }`}
          style={{ width: '157px' }}
        >
          <span className="f-9 block ">
            {isFilterVisible ? 'Close' : 'Filter'}
          </span>
        </button>
      </div>
      <div
        className={`transform transition-transform pointer-events-none ${
          isFilterVisible ? '!translate-y-0' : ''
        }`}
        style={{
          transform: `translateY(-${isFilterVisible ? 0 : filterHeight}px)`,
        }}
      >
        {/* Filter */}
        <div
          ref={filterRef}
          className={`flex justify-between pt-j transition-opacity  ${
            isFilterVisible ? 'pointer-events-auto' : 'opacity-0'
          }`}
        >
          <div className="flex">
            <FilterList
              title="Medium"
              className="flex-1"
              activeItems={activeFilters.medium}
              // availableFilters={availableFilters.medium}
              onSelect={filters => handleSetActiveFilter('medium', filters)}
              items={mediums.nodes}
            />
            <FilterList
              title="Era"
              className="flex-1 ml-20"
              activeItems={activeFilters.era}
              // availableFilters={availableFilters.era}
              onSelect={filters => handleSetActiveFilter('era', filters)}
              items={yearOptions.map(year => {
                return {
                  label: year,
                  slug: { current: year },
                }
              })}
            />
            <FilterList
              title="Collection"
              activeItems={activeFilters.collection}
              // availableFilters={availableFilters.collection}
              className="flex-1 ml-20"
              onSelect={filters => handleSetActiveFilter('collection', filters)}
              items={collections.nodes}
            />
            <FilterList
              title="Materials"
              activeItems={activeFilters.material}
              // availableFilters={availableFilters.material}
              className="flex-1 ml-20"
              onSelect={filters => handleSetActiveFilter('material', filters)}
              items={materials.nodes}
            />
          </div>
          <div className="flex items-start">
            <button
              className={`${hasFiltering ? '' : 'text-grey-d'}`}
              onClick={handleResetFilters}
              disabled={!hasFiltering}
            >
              <div className="f-9--light uppercase">Reset Filters</div>
            </button>
          </div>
        </div>

        {filteredProjects && filteredProjects.length ? (
          <ul className="pointer-events-auto mt-b mb-e grid grid-cols-3 gap-x-11 gap-y-h">
            {filteredProjects.map(({ title, slug, date, previewImage }, i) => (
              <li key={slug.current}>
                <Link to={slug.current}>
                  {/* <div className="aspect-w-1 aspect-h-1 mb-a3"> */}
                  <GatsbyImage
                    image={previewImage.src.asset.gatsbyImageData}
                    alt={previewImage.alt}
                    objectFit="contain"
                    className="aspect-h-1 aspect-w-1 mb-a3"
                  />
                  <p className="f-17 mb-2">{title}</p>
                  <p className="f-17 font-italic">{date}</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-b mb-e">
            Your search returned no results<br></br>
            <button onClick={handleResetFilters}>Reset Filters</button>
          </div>
        )}
      </div>
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
      featured {
        id
      }
    }
    projects: allSanityProject(sort: { fields: date, order: DESC }) {
      nodes {
        title
        id
        date(formatString: "YYYY")
        era
        slug {
          current
        }
        material {
          slug {
            current
          }
        }
        previewImage {
          ...figure
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
