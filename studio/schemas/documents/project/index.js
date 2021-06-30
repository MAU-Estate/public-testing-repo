import { BiPaint } from 'react-icons/bi'

export default {
  name: 'project',
  title: 'Projects',
  icon: BiPaint,
  type: 'document',
  fields: [
    {
      type: 'seo',
      name: 'seo',
      title: 'SEO'
    },
    {
      type: 'string',
      name: 'title',
      title: 'Project Title'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'MM-DD-YYYY'
      }
    },
    {
      name: 'yearText',
      type: 'string',
      title: 'Display Year'
    },
    {
      name: 'previewImage',
      title: 'Preview Image',
      type: 'previewImage'
    },
    {
      name: 'gallery',
      title: 'Project Images',
      type: 'galleryObj'
    },
    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string'
    },
    {
      name: 'collectionsText',
      type: 'string',
      title: 'Display Collections'
    },
    {
      title: 'Collections',
      name: 'collection',
      type: 'array',
      validation: Rule => Rule.required(),
      of: [{ type: 'projectCollections' }]
    },
    {
      name: 'materialsText',
      type: 'string',
      title: 'Display Materials'
    },
    {
      name: 'era',
      type: 'string',
      hidden: true
    },
    {
      title: 'Materials',
      name: 'material',
      type: 'array',
      validation: Rule => Rule.required(),
      of: [{ type: 'projectMaterials' }]
    },
    {
      title: 'Mediums',
      name: 'medium',
      type: 'array',
      validation: Rule => Rule.required(),
      of: [{ type: 'projectMediums' }]
    },
    {
      name: 'body',
      type: 'richText',
      title: 'Body'
    }
  ],
  initialValue: {
    date: '1990-01-01 00:00'
  }
}
