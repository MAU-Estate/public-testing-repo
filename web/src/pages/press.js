import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import SanityImage from 'gatsby-plugin-sanity-image'

import { useCurrentBreakpoint } from '../hooks/useCurrentBreakpoint'
import Seo from '../components/Seo'

const PressPage = ({
  data: { sanityPress: pageData, allSanityArticle: articleNodes },
}) => {
  const { seo, title } = pageData
  const { nodes: articles } = articleNodes

  const articlesInRows = []
  const { isXl } = useCurrentBreakpoint()

  const chunkSize = isXl ? 4 : 3
  for (var i = 0; i < articles.length; i += chunkSize) {
    const chunk = articles.slice(i, i + chunkSize)
    articlesInRows.push(chunk)
  }

  return (
    <div className="container pt-25 pb-i">
      <Seo {...seo} />
      <Helmet bodyAttributes={{ class: 'theme--light' }} />
      <div className="mb-b md:pt-12 pb-3 lg:pb-a3 border-b border-grey-b flex justify-between items-end">
        <h1 className="f-5 ml-[-6px] lg:ml-[-21px]">{title}</h1>
      </div>

      {articlesInRows.map((row, i) => {
        return (
          <ul
            className={`grid lg:grid-cols-3 xl:grid-cols-4 sm-only:gap-y-o mb-o  ${
              i !== articlesInRows.length - 1
                ? 'md:pb-o md:border-b md:border-b-grey-b'
                : ''
            }`}
          >
            {row.map((article, i) => {
              const { id, external } = article
              return (
                <li
                  key={id}
                  className="relative sm-only:border-b border-grey-b sm-only:pb-o"
                >
                  {(i == 0 || i !== row.length - 1) && (
                    <div
                      className={`absolute right-[-23px] top-0 bottom-0 md:border-r border-grey-b`}
                    />
                  )}
                  {external ? (
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {renderArticlePreview(article)}
                    </a>
                  ) : (
                    <Link
                      id={article.gallery.galleryRef.slug.current}
                      to={`/gallery/${article.gallery.galleryRef.slug.current}`}
                      className="hover:underline"
                    >
                      {renderArticlePreview(article)}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        )
      })}
    </div>
  )
}

const renderArticlePreview = ({
  previewImage,
  title,
  author,
  publication,
  date,
}) => (
  <>
    <div className="md:aspect-w-1 md:aspect-h-1 mb-a">
      <SanityImage
        {...previewImage}
        alt={previewImage.alt}
        width={450}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      />
    </div>
    <h3 className="f-26 mb-2">{title}</h3>
    <p className="f-26--light mb-k">{author}</p>
    <p className="f-8 mb-2">{publication}</p>
    {date && <p className="f-8">{date}</p>}
  </>
)

export default PressPage

export const query = graphql`
  query PressQuery {
    sanityPress {
      seo {
        title
        description
        image {
          ...Image
        }
      }
      title
    }
    allSanityArticle(sort: { order: DESC, fields: date }) {
      nodes {
        id
        author
        title
        external
        url
        publication
        previewImage {
          ...ImageWithPreview
        }
        gallery {
          galleryRef {
            slug {
              current
            }
          }
        }
        date(formatString: "MMMM, YYYY")
      }
    }
  }
`
