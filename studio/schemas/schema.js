// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// document schemas
import siteSettings from './documents/siteSettings';
// import mainNav from './documents/navigation';

// Page schemas
import bio from './pages/bio/';
import {
  bioSection1,
  bioSection2,
  bioSection3,
  bioSection4,
  bioSection5,
  bioSection6,
  bioSection7,
  bioCta
} from './pages/bio/bio_objects';

import cv from './pages/cv';
import exhibitions from './pages/exhibitions';
import contact from './pages/contact';
import fellowship from './pages/fellowship';
import press from './pages/press';
import work from './pages/work';

// Object types
import address from './objects/address';
import blockquote from './objects/blockquote';
import bodyPortableText from './objects/bodyPortableText';
import figure from './objects/figure';
import gallery from './objects/gallery';
import richText from './objects/richText';
import seo from './objects/seo';
import textColumn from './objects/textColumn';
import textColumns from './objects/textColumns';

// Documents
import collections from './documents/collections';
import project from './documents/project/';
import { projectMaterials } from './documents/project/objects';
import mediums from './documents/mediums';
import materials from './documents/materials';
import exhibition from './documents/exhibition';
import awards from './documents/awards';
import bibliographies from './documents/bibliographies';
import publicCollections from './documents/publicCollections';
import education from './documents/education';
import article from './documents/article';

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
    fellowship,
    press,
    work,
    // components
    seo,
    gallery,
    richText,
    blockquote,
    textColumn,
    textColumns,
    figure,
    address,
    // documents
    article,
    awards,
    bibliographies,
    collections,
    education,
    exhibition,
    materials,
    // mainNav,
    mediums,
    project,
    projectMaterials,
    publicCollections,
    siteSettings
  ])
});
