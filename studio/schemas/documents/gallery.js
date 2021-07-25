import ConditionalField from 'sanity-plugin-conditional-field'

import { GrGallery } from 'react-icons/gr'

export default {
  name: 'gallery',
  title: 'Galleries',
  icon: GrGallery,
  type: 'document',
  preview: {
    select: {
      title: 'seo.title'
    }
  },
  fields: [
    {
      title: 'SEO',
      type: 'seo',
      name: 'seo'
    },
    {
      name: 'isDocument',
      title: 'Is this a gallery for a project / exhibtion / article?',
      type: 'boolean',
      validation: Rule => Rule.required(),
      initialValue: true
    },
    {
      name: 'documentRef',
      title: 'Select a document',
      type: 'reference',
      weak: true,
      inputComponent: ConditionalField,
      options: {
        condition: document => document.isDocument
      },
      to: [{ type: 'project' }, { type: 'article' }, { type: 'exhibition' }],
      description: 'Select a document where this gallery will be used'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      inputComponent: ConditionalField,
      options: {
        condition: document => !document.isDocument,
        source: 'seo.title'
      },
      slugify: input =>
        input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200),
      validation: Rule => Rule.required()
    },
    {
      name: 'backUrl',
      type: 'string',
      title: 'Route to path on close',
      inputComponent: ConditionalField,
      options: {
        condition: document => !document.isDocument
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{ type: 'figure' }, { type: 'twoColImage' }],
      options: {
        layout: 'grid'
      },
      validation: Rule => Rule.required().min(1)
    }
  ]
}
