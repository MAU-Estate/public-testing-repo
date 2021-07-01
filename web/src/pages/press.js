import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { GatsbyImage } from 'gatsby-plugin-image'

import Seo from '../components/Seo'

const PressPage = ({
  data: { sanityPress: pageData, allSanityArticle: articleNodes },
}) => {
  const { seo, title } = pageData
  const { nodes: articles } = articleNodes
  return (
    <div className="container pt-25">
      <Seo {...seo} />
      <Helmet bodyAttributes={{ class: 'theme--light' }} />
      <div className="mb-b pt-12 pb-a3 border-b border-grey-b flex justify-between items-end">
        <h1 className="f-5">{title}</h1>
      </div>
      {/* Split this into rows */}
      <ul className="grid grid-cols-4 gap-y-o">
        {articles.map(article => {
          const { id, external } = article
          return (
            <li key={id} className="mb-l relative">
              <div className="absolute right-[-23px] top-0 bottom-0 border-r border-grey-b"></div>
              {external ? (
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {renderArticlePreview(article)}
                </a>
              ) : (
                <Link
                  id={article.gallery.galleryRef.slug.current}
                  to={`/gallery/${article.gallery.galleryRef.slug.current}`}
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
    <GatsbyImage
      image={previewImage.asset.gatsbyImageData}
      alt={previewImage.alt}
      className="aspect-w-1 aspect-h-1 mb-a"
      objectFit="contain"
    />
    <h3 className="f-26 mb-2">{title}</h3>
    <p className="f-26--light mb-k">{author}</p>
    <p className="f-8 mb-2">{publication}</p>
    <p className="f-8">{date}</p>
  </>
)

export default PressPage

export const query = graphql`
  query PressQuery {
    sanityPress {
      seo {
        title
      }
      title
    }
    allSanityArticle {
      nodes {
        id
        author
        title
        external
        url
        publication
        previewImage {
          ...image
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
