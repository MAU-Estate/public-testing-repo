import React from 'react'
import slugify from 'slugify'
import { graphql } from 'gatsby'
import PageHeader from '../components/PageHeader'
import RichText from '../components/RichText'

const CvPage = ({ data: { sanityCv: pageData } }) => {
  const {
    awardsBody,
    awardsTitle,
    bibliographyTitle,
    commisionsTitle,
    download,
    downloadCVLabel,
    educationBody,
    educationTitle,
    exhibitionsTitle,
    exhibitionsBody,
    groupExhibitionsBody,
    groupExhibitionsTitle,
    headerImage,
    life,
    lifeTitle,
    permanentSiteCommissionsBody,
    publicCollectionsBody,
    publicCollectionsTitle,
    selectedBibliographyBody,
    title,
  } = pageData

  const navItems = [
    exhibitionsTitle,
    awardsTitle,
    publicCollectionsTitle,
    commisionsTitle,
    groupExhibitionsTitle,
    bibliographyTitle,
  ]
  return (
    <>
      <PageHeader image={headerImage} title={title} />
      <div className="bg-black text-white">
        <div className="container grid grid-cols-3 pb-i pt-b">
          <div>
            <div className="mb-10">
              <h3 className="f-7 mb-2 uppercase">{lifeTitle}</h3>
              <p className="f-6">{life}</p>
            </div>
            <div className="mb-r">
              <h3 className="f-7 mb-2 uppercase">{educationTitle}</h3>
              <RichText className="f-6" content={educationBody._rawText} />
            </div>
            <div className="border-t border-grey-b pt-r">
              <p className="f-6">
                {downloadCVLabel} <a href={download.asset.url}>here</a>
              </p>
            </div>
          </div>
          <div className="col-span-2">
            <nav className="mb-r">
              <ul>
                {navItems.map((item, i) => (
                  <li
                    className={`inline-block ${
                      i < navItems.length - 1
                        ? 'border-r-2 border-white mr-2 pr-2'
                        : ''
                    }`}
                  >
                    <a
                      className={`block f-7 uppercase `}
                      href={`#${slugify(item, { lower: true })}`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="grid grid-cols-2 border-t border-grey-b pt-a mb-20">
              <div>
                <h3
                  id={`${slugify(exhibitionsTitle, { lower: true })}`}
                  className="f-7 mb-3"
                >
                  {exhibitionsTitle}
                </h3>
                <RichText className="f-6" content={exhibitionsBody._rawText} />
              </div>
              <div>
                <h3
                  id={`${slugify(awardsTitle, { lower: true })}`}
                  className="f-7 mb-3"
                >
                  {awardsTitle}
                </h3>
                <RichText className="f-6" content={awardsBody._rawText} />
              </div>
            </div>

            <div className="grid grid-cols-2 border-t border-grey-b pt-a mb-20">
              <div>
                <h3
                  id={`${slugify(publicCollectionsTitle, { lower: true })}`}
                  className="f-7 mb-3"
                >
                  {publicCollectionsTitle}
                </h3>
                <RichText
                  className="f-6"
                  content={publicCollectionsBody._rawText}
                />
              </div>
              <div>
                <h3
                  id={`${slugify(commisionsTitle, { lower: true })}`}
                  className="f-7 mb-3"
                >
                  {commisionsTitle}
                </h3>
                <RichText
                  className="f-6"
                  content={permanentSiteCommissionsBody._rawText}
                />
              </div>
            </div>

            <div className="border-t border-grey-b pt-a mb-20">
              <h3
                id={`${slugify(groupExhibitionsTitle, { lower: true })}`}
                className="f-7 mb-3"
              >
                {groupExhibitionsTitle}
              </h3>
              <div style={{ columns: '2' }}>
                <RichText
                  className="f-6"
                  content={groupExhibitionsBody._rawText}
                />
              </div>
            </div>

            <div className="border-t border-grey-b pt-a mb-20">
              <h3
                id={`${slugify(bibliographyTitle, { lower: true })}`}
                className="f-7 mb-3"
              >
                {bibliographyTitle}
              </h3>
              <div style={{ columns: '2' }}>
                <RichText
                  className="f-6"
                  content={selectedBibliographyBody._rawText}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CvPage

export const query = graphql`
  query cvQuery {
    sanityCv {
      seo {
        title
      }
      awardsBody {
        _rawText
      }
      awardsTitle
      bibliographyTitle
      download {
        asset {
          url
          originalFilename
        }
      }
      downloadCVLabel
      educationBody {
        _rawText
      }
      educationTitle
      exhibitionsTitle
      exhibitionsBody {
        _rawText
      }
      groupExhibitionsBody {
        _rawText
      }
      groupExhibitionsTitle
      headerImage {
        ...image
      }
      life
      lifeTitle
      commisionsTitle
      permanentSiteCommissionsBody {
        _rawText
      }
      publicCollectionsBody {
        _rawText
      }
      publicCollectionsTitle
      selectedBibliographyBody {
        _rawText
      }
      title
    }
  }
`
