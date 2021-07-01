import React from 'react'
import { graphql, Link } from 'gatsby'

import Blockquote from '../components/Blockquote'
import Gallery from '../components/Gallery'
import RichText from '../components/RichText'
import Icon from '../components/Icon'
import Figure from '../components/Figure'

const IndexPage = ({ location, data: { sanityBio: pageData } }) => {
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
    <>
      {/* gallery */}
      <div className="w-full h-screen bg-black-b relative flex py-24">
        <div className="container overflow-hidden w-full h-full flex flex-1 relative">
          <Gallery
            inline={false}
            cover={false}
            slides={pageData.hero.galleryRef.images}
            slug={pageData.hero.galleryRef.slug}
          />
        </div>
      </div>

      <section id="intro" className="container pt-e">
        <div className="grid grid-cols-12 mb-g">
          <div className="col-span-9 mb-a3">
            <Figure image={section1.image1} />
          </div>
          <div className="col-start-2 col-span-4">
            <RichText
              className="f-12"
              content={section1.section1bodyLeft._rawText}
            />
          </div>
          <div className="col-start-6 col-span-4">
            <RichText
              className="f-12"
              content={section1.section1bodyRight._rawText}
            />
          </div>
        </div>
      </section>

      <section className="bg-black-b py-g">
        <div className="container">
          <div className="grid grid-cols-12 mb-e">
            <div className="col-span-5 ">
              <Figure image={section2.image1} className="text-white" />
            </div>
            <div className="col-start-7 col-span-5 text-white">
              <RichText
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
          className="mb-e aspect-w-16 aspect-h-9"
        />

        <div className="container grid grid-cols-12">
          <div className="col-start-7 col-span-5 text-white mb-e">
            <RichText className="f-13" content={section2.richText2._rawText} />
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
              className="aspect-w-16 aspect-h-9"
            />
          </div>
        </div>
      </section>

      {/* Section 3 */}

      <section className="py-g">
        <div className="container grid grid-cols-12 mb-e">
          <div className="col-start-2 col-end-7">
            <RichText className="f-13" content={section3.richText1._rawText} />
          </div>
          <div className="col-start-8 col-end-13">
            <Gallery
              slides={section3.gallery1.galleryRef.images}
              slug={section3.gallery1.galleryRef.slug}
              className="aspect-w-16 aspect-h-9"
              theme="light"
            />
          </div>
        </div>
        <div className="container grid grid-cols-12 mb-e items-end">
          <div className="col-span-5">
            <Gallery
              slides={section3.gallery2.galleryRef.images}
              slug={section3.gallery2.galleryRef.slug}
              className="aspect-w-2 aspect-h-3"
              theme="light"
            />
          </div>
          <div className="col-start-6 col-end-13">
            <Gallery
              slides={section3.gallery3.galleryRef.images}
              slug={section3.gallery3.galleryRef.slug}
              className="aspect-w-16 aspect-h-9"
              theme="light"
            />
          </div>
        </div>
        <div className="container grid grid-cols-12">
          <div className="col-start-2 col-end-7">
            <RichText className="f-13" content={section3.richText2._rawText} />
          </div>
        </div>
      </section>

      {/* Section 4 */}

      <section className="bg-bio-a py-g text-white">
        <div className="container grid grid-cols-12 mb-e">
          <div className="col-span-5">
            <Gallery
              slides={section4.gallery1.galleryRef.images}
              slug={section4.gallery1.galleryRef.slug}
              className="aspect-w-2 aspect-h-3"
            />
          </div>
          <div className="col-start-7 col-end-13">
            <RichText className="f-13" content={section4.richText1._rawText} />
          </div>
        </div>
        <div className="container grid grid-cols-12">
          <div className="col-start-2 col-end-10">
            <Blockquote quote={section4.blockquote1} />
          </div>
        </div>
      </section>

      {/* Section 5 */}

      <section className="py-g">
        <div className="container grid grid-cols-12 mb-e">
          <div className="col-start-2 col-end-7">
            <RichText className="f-13" content={section5.richText1._rawText} />
          </div>
          <div className="col-span-6">
            <Figure image={section5.image1} />
          </div>
        </div>
        <Gallery
          slides={section5.gallery1.galleryRef.images}
          slug={section5.gallery1.galleryRef.slug}
          className="aspect-w-4 aspect-h-3 mb-e"
        />
        <div className="container grid grid-cols-12 mb-e">
          <div className="col-start-2 col-end-7">
            <RichText className="f-13" content={section5.richText2._rawText} />
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
      </section>

      {/* Section 6 */}

      <section className="py-g bg-bio-b">
        <div className="container grid grid-cols-12 mb-e">
          <div className="col-start-7 col-end-13">
            <RichText className="f-13" content={section6.richText1._rawText} />
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
            <RichText className="f-13" content={section6.richText2._rawText} />
          </div>
        </div>
        <div className="container grid grid-cols-12 items-end">
          <div className="col-span-5">
            <Gallery
              slides={section6.gallery1.galleryRef.images}
              slug={section6.gallery1.galleryRef.slug}
              theme="light"
              className="aspect-w-3 aspect-h-4"
            />
          </div>
          <div className="col-span-7">
            <Gallery
              slides={section6.gallery2.galleryRef.images}
              slug={section6.gallery2.galleryRef.slug}
              theme="light"
              className="aspect-w-4 aspect-h-3"
            />
          </div>
        </div>
      </section>

      {/* Section 7 */}

      <section className="py-g bg-bio-c text-white">
        <div className="container grid grid-cols-12 mb-e">
          <div className="col-start-2 col-span-5">
            <RichText className="f-13" content={section7.richText1._rawText} />
          </div>
        </div>
        <div className="container grid grid-cols-12 mb-e">
          <div className="col-start-2 col-span-10">
            <Gallery
              slides={section7.gallery1.galleryRef.images}
              slug={section7.gallery1.galleryRef.slug}
              className="aspect-w-4 aspect-h-3"
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
            <RichText className="f-13" content={section7.richText2._rawText} />
          </div>
          <div className="col-span-6">
            <Figure image={section7.image1} />
          </div>
        </div>
      </section>

      <Link to={bioCta.path} className="block relative py-e">
        <div className="absolute inset-0 flex" style={{ zIndex: '-1' }}>
          <Figure objectFit="cover" image={bioCta.image1} className="flex-1" />
        </div>
        <div className="container">
          <div className="flex items-center text-white">
            <h2 className="f-14 max-w-md">{bioCta.title}</h2>
            <Icon name="arrowCta" className="text-white" />
          </div>
        </div>
      </Link>
    </>
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
