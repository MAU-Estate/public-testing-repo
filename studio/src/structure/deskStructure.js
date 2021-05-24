// import S from '@sanity/desk-tool/structure-builder'
// import { MdSettings } from "react-icons/md";
// import {
//   MdPerson,
//   MdDescription,
//   MdLocalOffer
// } from "react-icons/md"
// import IframePreview from '../previews/IframePreview'

// // Web preview configuration
// const remoteURL = 'https://sanity-gatsby-blog-web-3unry6a9.netlify.app'
// const localURL = 'http://localhost:8000'
// const previewURL =
//   window.location.hostname === 'localhost' ? localURL : remoteURL

// export const getDefaultDocumentNode = props => {
//   /**
//    * Here you can define fallback views for document types without
//    * a structure definition for the document node. If you want different
//    * fallbacks for different types, or document values (e.g. if there is a slug present)
//    * you can set up that logic in here too.
//    * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
//    */
//   const { schemaType } = props
//   if (schemaType == 'post') {
//     return S.document().views([
//       S.view.form(),
//       S.view
//         .component(IframePreview)
//         .title('Web preview')
//         .options({ previewURL })
//     ])
//   }
//   return S.document().views([S.view.form()])
// }

// /**
//  * This defines how documents are grouped and listed out in the Studio.
//  * Relevant documentation:
//  * - https://www.sanity.io/guides/getting-started-with-structure-builder
//  * - https://www.sanity.io/docs/structure-builder-introduction
//  * - https://www.sanity.io/docs/structure-builder-typical-use-cases
//  * - https://www.sanity.io/docs/structure-builder-reference
//  */

// export default () =>
//   S.list()
//     .title('Content')
//     .items([
//       S.listItem()
//         .title('Settings')
//         .icon(MdSettings)
//         .child(
//           S.editor()
//             .id('siteSettings')
//             .schemaType('siteSettings')
//             .documentId('siteSettings')
//         ),
//       S.divider(),
//       S.listItem()
//         .title('Blog posts')
//         .icon(MdDescription)
//         .schemaType('post')
//         .child(S.documentTypeList('post').title('Blog posts')),
//       S.listItem()
//         .title('Authors')
//         .icon(MdPerson)
//         .schemaType('author')
//         .child(S.documentTypeList('author').title('Authors')),
//       S.listItem()
//         .title('Categories')
//         .icon(MdLocalOffer)
//         .schemaType('category')
//         .child(S.documentTypeList('category').title('Categories')),
//       // `S.documentTypeListItems()` returns an array of all the document types
//       // defined in schema.js. We filter out those that we have
//       // defined the structure above.
//       ...S.documentTypeListItems().filter(
//         listItem =>
//           !['category', 'author', 'post', 'siteSettings'].includes(
//             listItem.getId()
//           )
//       )
//     ])

import S from '@sanity/desk-tool/structure-builder';
import { AiFillTags } from 'react-icons/ai';
import { GrDocument } from 'react-icons/gr';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .icon(GrDocument)
        .child(
          S.list()
            .title('Pages')
            .showIcons(false)
            .items([
              S.listItem()
                .title('Bio')
                .child(
                  S.document()
                    .schemaType('bio')
                    .documentId('bio')
                ),
              S.listItem()
                .title('CV')
                .child(
                  S.document()
                    .schemaType('cv')
                    .documentId('cv')
                ),
              S.listItem()
                .title('Contact')
                .child(
                  S.document()
                    .schemaType('contact')
                    .documentId('contact')
                ),
              S.listItem()
                .title('Exhibitions')
                .child(
                  S.document()
                    .schemaType('exhibitions')
                    .documentId('exhibitions')
                ),
              S.listItem()
                .title('Fellowship')
                .child(
                  S.document()
                    .schemaType('fellowship')
                    .documentId('fellowship')
                ),
              S.listItem()
                .title('Press')
                .child(
                  S.document()
                    .schemaType('press')
                    .documentId('press')
                ),
              S.listItem()
                .title('Work')
                .child(
                  S.document()
                    .schemaType('work')
                    .documentId('work')
                )
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Documents')
        .child(
          S.list()
            .title('Documents')
            .id('documentsList')
            .items([
              ...S.documentTypeListItems().filter(
                listItem =>
                  ![
                    'bio',
                    'cv',
                    'contact',
                    'exhibitions',
                    'fellowship',
                    'press',
                    'work',
                    'siteSettings',
                    'mediums',
                    'materials',
                    'collections'
                  ].includes(listItem.getId())
              )
            ])
        ),
      S.listItem()
        .title('Project Filters')
        .icon(AiFillTags)
        .child(
          S.list()
            .title('Filters')
            .showIcons(false)
            .items([
              S.documentTypeListItem('collections'),
              S.documentTypeListItem('materials'),
              S.documentTypeListItem('mediums')
            ])
        ),
      S.divider(),
      S.listItem()
        .title('Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
    ]);
