import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Seo from '../components/Seo'
import SanityImage from 'gatsby-plugin-sanity-image'

const PressPage = ({
  data: { sanityPress: pageData, allSanityArticle: articleNodes },
}) => {
  const { seo, title } = pageData
  const { nodes: articles } = articleNodes
  return (
    <div className="container pt-25 pb-i">
      <Seo {...seo} />
      <Helmet bodyAttributes={{ class: 'theme--light' }} />
      <div className="mb-b md:pt-12 pb-3 lg:pb-a3 border-b border-grey-b flex justify-between items-end">
        <h1 className="f-5 ml-[-6px] lg:ml-[-21px]">{title}</h1>
      </div>
      {/* Split this into rows */}
      <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-o">
        {articles.map(article => {
          const { id, external } = article
          return (
            <li key={id} className="mb-l relative">
              <div className="absolute right-[-23px] top-0 bottom-0 md:border-r border-grey-b"></div>
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
