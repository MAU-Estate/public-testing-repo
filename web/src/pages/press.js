import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const PressPage = ({
  data: { sanityPress: pageData, allSanityArticle: articleNodes },
}) => {
  const { seo, title } = pageData
  const { nodes: articles } = articleNodes
  return (
    <div className="container pt-25">
      <div className="mb-b pb-a3 border-b border-grey-b flex justify-between items-end">
        <h1 className="f-5">{title}</h1>
      </div>
      {/* Split this into rows */}
      <ul className="grid grid-cols-4 gap-y-o">
        {articles.map(article => {
          const { image, title, author, publication, date, url } = article
          return (
            <li className="mb-l relative">
              <div className="absolute right-[-23px] top-0 bottom-0 border-r border-grey-b"></div>
              <a href={url}>
                <GatsbyImage
                  image={image.src.asset.gatsbyImageData}
                  alt={image.alt}
                  className="aspect-w-1 aspect-h-1 mb-a"
                  objectFit="contain"
                />
                <h3 className="f-26 mb-2">{title}</h3>
                <p className="f-26--light mb-k">{author}</p>
                <p className="f-8 mb-2">{publication}</p>
                <p className="f-8">{date}</p>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

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
        author
        title
        url
        publication
        image {
          ...figure
        }
        date(formatString: "MMMM, YYYY")
      }
    }
  }
`
