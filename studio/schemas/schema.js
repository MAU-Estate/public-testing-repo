// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import siteSettings from './documents/siteSettings'
// import mainNav from './documents/navigation';

// Page schemas
import bio from './pages/bio/'
import {
  bioSection1,
  bioSection2,
  bioSection3,
  bioSection4,
  bioSection5,
  bioSection6,
  bioSection7,
  bioCta
} from './pages/bio/bio_objects'

import cv from './pages/cv'
import exhibitions from './pages/exhibitions'
import contact from './pages/contact'
import fellowships from './pages/fellowships'
import press from './pages/press'
import work from './pages/work'

// Object types
import address from './objects/address'
import blockquote from './objects/blockquote'
import bodyPortableText from './objects/bodyPortableText'
import caption from './objects/caption'
import figure from './objects/figure'
import previewImage from './objects/previewImage'
import galleryObj from './objects/galleryObj'
import richText from './objects/richText'
import richTextSingle from './objects/richTextSingle'
import seo from './objects/seo'
import textColumn from './objects/textColumn'
import textColumns from './objects/textColumns'
import twoColImage from './objects/twoColImage'

// Documents
import collection from './documents/collection'
import fellow from './documents/fellow'
import galleries from './documents/gallery'
import project from './documents/project/'
import {
  projectCollections,
  projectMaterials,
  projectMediums
} from './documents/project/objects'
import medium from './documents/medium'
import material from './documents/material'
import exhibition from './documents/exhibition'
import article from './documents/article'
import homeCarousel from './documents/homeCarousel'
import newsSlide from './objects/newsSlide'
import richSection from './objects/richSection'
import slide from './objects/slide'

export default createSchema({
  name: 'maue',
  types: schemaTypes.concat([
    bodyPortableText,
    bio,
    bioSection1,
    bioSection2,
    bioSection3,
    bioSection4,
    bioSection5,
    bioSection6,
    bioSection7,
    bioCta,
    cv,
    contact,
    exhibitions,
    fellowships,
    press,
    work,
    homeCarousel,
    // components
    newsSlide,
    slide,
    caption,
    seo,
    galleryObj,
    richText,
    richTextSingle,
    blockquote,
    textColumn,
    textColumns,
    figure,
    previewImage,
    richSection,
    address,
    twoColImage,
    // documents
    article,
    collection,
    exhibition,
    fellow,
    galleries,
    material,
    // mainNav,
    medium,
    project,
    projectMaterials,
    projectMediums,
    projectCollections,
    siteSettings
  ])
})
