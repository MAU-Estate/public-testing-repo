import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import { InView } from 'react-intersection-observer'

import Blockquote from '../components/Blockquote'
import Gallery from '../components/Gallery'
import GalleryHome from '../components/GalleryHome'
import RichTextSingle from '../components/RichTextSingle'
import Icon from '../components/Icon'
import Figure from '../components/Figure'

const bgColorThreshold = 0.2

const IndexPage = ({ data: { sanityBio: pageData } }) => {
  const [bodyClasses, setBodyClasses] = useState('bg-white text-black')
  const {
    bioCta,
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7,
  } = pageData
  return (
    <div className={`transition transition-colors duration-700 ${bodyClasses}`}>
      {/* gallery */}
      <div className="w-full h-screen bg-black-b relative flex py-24">
        <div className="container--tight w-full h-full flex flex-1 relative">
          <GalleryHome
            // inline={false}
            // cover={false}
            theme="dark"
            slides={pageData.hero.galleryRef.images}
            slug={pageData.hero.galleryRef.slug}
            // className="flex flex-1"
          />
        </div>
      </div>

      <InView
        as="section"
        threshold={bgColorThreshold}
        onChange={(inView, entry) => {
          if (inView) {
            setBodyClasses('bg-white text-black')
          }
        }}
        id="intro"
        className="container pt-e"
      >
        <div className="grid grid-cols-12 mb-g">
          <div className="col-span-9 mb-a3 mix-blend-multiply">
            <Figure image={section1.image1} />
          </div>
          <div className="col-start-2 col-span-4">
            <RichTextSingle
              className="f-12"
              content={section1.section1bodyLeft._rawText}
            />
          </div>
          <div className="col-start-6 col-span-4">
            <RichTextSingle
              className="f-12"
              content={section1.section1bodyRight._rawText}
            />
          </div>
        </div>
      </InView>
      <InView
        as="section"
        threshold={0.15}
        onChange={(inView, entry) => {
          if (inView) {
            setBodyClasses('bg-black-b text-white')
          }
        }}
        className="py-g"
      >
        <div className="container">
          <div className="grid grid-cols-12 mb-e">
            <div className="col-span-5 ">
              <Figure image={section2.image1} />
            </div>
            <div className="col-start-7 col-span-5">
              <RichTextSingle
                className="f-13"
                content={section2.richText1._rawText}
              />
            </div>
          </div>
        </div>

        {/* Full Gallery */}
        <Gallery
          slides={section2.gallery1.galleryRef.images}
          slug={section2.gallery1.galleryRef.slug}
          className="mb-e"
        />

        <div className="container grid grid-cols-12">
          <div className="col-start-7 col-span-5 text-white mb-e">
            <RichTextSingle
              className="f-13"
              content={section2.richText2._rawText}
            />
          </div>
          <div className="col-start-2 col-span-8 mb-e text-white">
            <Blockquote quote={section2.quote1} />
          </div>
        </div>

        <div className="container grid grid-cols-12 mb-e">
          <div className="col-start-2 col-end-12">
            <Gallery
              slides={section2.gallery2.galleryRef.images}
              slug={section2.gallery2.galleryRef.slug}
            />
          </div>
        </div>
      </InView>

      {/* Section 3 */}
      <InView
        as="section"
        threshold={bgColorThreshold}
        onChange={(inView, entry) => {
          if (inView) {
            setBodyClasses('bg-white text-black')
          }
        }}
        className="py-g"
      >
        <div className="container grid grid-cols-12 mb-e">
          <div className="col-start-2 col-end-7">
            <RichTextSingle
              className="f-13"
              content={section3.richText1._rawText}
            />
          </div>
          <div className="col-start-8 col-end-13">
            <Gallery
              slides={section3.gallery1.galleryRef.images}
              slug={section3.gallery1.galleryRef.slug}
              theme="light"
            />
          </div>
        </div>
        <div className="container grid grid-cols-12 mb-e items-end">
          <div className="col-span-5">
            <Gallery
              slides={section3.gallery2.galleryRef.images}
              slug={section3.gallery2.galleryRef.slug}
              theme="light"
            />
          </div>
          <div className="col-start-6 col-end-13">
            <Gallery
              slides={section3.gallery3.galleryRef.images}
              slug={section3.gallery3.galleryRef.slug}
              theme="light"
            />
          </div>
        </div>
        <div className="container grid grid-cols-12">
          <div className="col-start-2 col-end-7">
            <RichTextSingle
              className="f-13"
              content={section3.richText2._rawText}
            />
          </div>
        </div>
      </InView>

      {/* Section 4 */}
      <InView
        as="section"
        threshold={bgColorThreshold}
        onChange={(inView, entry) => {
          if (inView) {
            setBodyClasses('bg-bio-a text-white')
          }
        }}
        className="py-g"
      >
        <div className="container grid grid-cols-12 mb-e">
          <div className="col-span-5">
            <Gallery
              slides={section4.gallery1.galleryRef.images}
              slug={section4.gallery1.galleryRef.slug}
            />
          </div>
          <div className="col-start-7 col-end-13">
            <RichTextSingle
              className="f-13"
              content={section4.richText1._rawText}
            />
          </div>
        </div>
        <div className="container grid grid-cols-12">
          <div className="col-start-2 col-end-10">
            <Blockquote quote={section4.blockquote1} />
          </div>
        </div>
      </InView>

      {/* Section 5 */}

      <InView
        as="section"
        threshold={bgColorThreshold}
        onChange={(inView, entry) => {
          if (inView) {
            setBodyClasses('bg-white text-black')
          }
        }}
        className="BeringStrait py-g"
      >
        <div className="container grid grid-cols-12 mb-e">
          <div className="col-start-2 col-end-7">
            <RichTextSingle
              className="f-13"
              content={section5.richText1._rawText}
            />
          </div>
          <div className="col-span-6">
            <Figure image={section5.image1} />
          </div>
        </div>
        <Gallery
          slides={section5.gallery1.galleryRef.images}
          slug={section5.gallery1.galleryRef.slug}
          className="mb-e"
          theme="light"
        />
        <div className="container grid grid-cols-12 mb-e">
          <div className="col-start-2 col-end-7">
            <RichTextSingle
              className="f-13"
              content={section5.richText2._rawText}
            />
          </div>
        </div>
        <div className="container grid grid-cols-12 mb-e">
          <div className="col-start-4 col-end-12">
            <Blockquote quote={section5.blockquote1} />
          </div>
        </div>
        <div className="container grid grid-cols-12">
          <div className="col-start-2 col-span-10">
            <Figure image={section5.image2} />
          </div>
        </div>
      </InView>

      {/* Section 6 */}
      <InView
        as="section"
        threshold={bgColorThreshold}
        onChange={inView => {
          if (inView) {
            setBodyClasses('bg-bio-b text-black')
          }
        }}
        className="Guerilla py-g"
      >
        <div className="container grid grid-cols-12 mb-e">
          <div className="col-start-7 col-end-13">
            <RichTextSingle
              className="f-13"
              content={section6.richText1._rawText}
            />
          </div>
        </div>
        <div className="container grid grid-cols-12 mb-e">
          <div className="col-start-2 col-span-10">
            <Figure image={section6.image1} />
          </div>
        </div>
        <div className="container grid grid-cols-12 mb-e">
          <div className="col-start-2 col-end-10">
            <Blockquote quote={section6.blockquote1} />
          </div>
        </div>
        <div className="container grid grid-cols-12 mb-e">
          <div className="col-start-7 col-end-12">
            <RichTextSingle
              className="f-13"
              content={section6.richText2._rawText}
            />
          </div>
        </div>
        <div className="container grid grid-cols-12 items-end">
          <div className="col-span-5">
            <Gallery
              slides={section6.gallery1.galleryRef.images}
              slug={section6.gallery1.galleryRef.slug}
              theme="light"
            />
          </div>
          <div className="col-span-7">
            <Gallery
              slides={section6.gallery2.galleryRef.images}
              slug={section6.gallery2.galleryRef.slug}
              theme="light"
            />
          </div>
        </div>
      </InView>

      {/* Section 7 */}
      <InView
        as="section"
        threshold={bgColorThreshold}
        onChange={inView => {
          if (inView) {
            setBodyClasses('bg-bio-c text-white')
          }
        }}
        className="py-g"
      >
        <div className="container grid grid-cols-12 mb-e">
          <div className="col-start-2 col-span-5">
            <RichTextSingle
              className="f-13"
              content={section7.richText1._rawText}
            />
          </div>
        </div>
        <div className="container grid grid-cols-12 mb-e">
          <div className="col-start-2 col-span-10">
            <Gallery
              slides={section7.gallery1.galleryRef.images}
              slug={section7.gallery1.galleryRef.slug}
            />
          </div>
        </div>
        <div className="container grid grid-cols-12 mb-e">
          <div className="col-start-4 col-end-11">
            <Blockquote quote={section7.blockquote1} />
          </div>
        </div>
        <div className="container grid grid-cols-12">
          <div className="col-start-2 col-end-7">
            <RichTextSingle
              className="f-13"
              content={section7.richText2._rawText}
            />
          </div>
          <div className="col-span-6">
            <Figure image={section7.image1} />
          </div>
        </div>
      </InView>

      <Link to={bioCta.path} className="block relative py-e">
        <div className="absolute inset-0 flex">
          <Figure
            objectFit="cover"
            image={bioCta.image1}
            className="flex-1 flex"
          />
        </div>
        <div className="container">
          <div className="flex items-center text-white">
            <h2 className="f-14 max-w-md">{bioCta.title}</h2>
            <Icon name="arrowCta" className="text-white relative" />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    sanityBio {
      seo {
        title
      }
      hero {
        ...gallery
      }
      section1 {
        section1bodyLeft {
          _rawText
        }
        section1bodyRight {
          _rawText
        }
        image1 {
          ...figure
        }
      }
      section2 {
        gallery1 {
          ...gallery
        }
        gallery2 {
          ...gallery
        }
        image1 {
          ...figure
        }
        quote1 {
          ...blockquote
        }
        richText1 {
          _rawText
        }
        richText2 {
          _rawText
        }
      }
      section3 {
        gallery1 {
          ...gallery
        }
        gallery2 {
          ...gallery
        }
        gallery3 {
          ...gallery
        }
        richText1 {
          _rawText
        }
        richText2 {
          _rawText
        }
      }
      section4 {
        blockquote1 {
          ...blockquote
        }
        gallery1 {
          ...gallery
        }
        richText1 {
          _rawText
        }
      }
      section5 {
        blockquote1 {
          ...blockquote
        }
        gallery1 {
          ...gallery
        }
        image1 {
          ...figure
        }
        image2 {
          ...figure
        }
        richText1 {
          _rawText
        }
        richText2 {
          _rawText
        }
      }
      section6 {
        blockquote1 {
          ...blockquote
        }
        gallery1 {
          ...gallery
        }
        gallery2 {
          ...gallery
        }
        image1 {
          ...figure
        }
        richText1 {
          _rawText
        }
        richText2 {
          _rawText
        }
      }
      section7 {
        blockquote1 {
          ...blockquote
        }
        gallery1 {
          ...gallery
        }
        image1 {
          ...figure
        }
        richText1 {
          _rawText
        }
        richText2 {
          _rawText
        }
      }
      bioCta {
        title
        path
        image1 {
          ...figure
        }
      }
    }
  }
`
